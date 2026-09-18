import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { performance } from "node:perf_hooks";
import {
  filterMovies,
  parseArchiveSearch,
  parseArchiveCache,
  safeExternalUrl,
  deduplicateMovies,
  selectFeaturedMovies,
  type Movie,
} from "../src/lib/filmography.ts";
import {
  enquirySchema,
  isContactEmail,
  submitEnquiry,
  ENQUIRY_FORM_NAME,
} from "../src/lib/enquiry.ts";

const credit: Movie = {
  _id: "project-one",
  title: "Example Film",
  slug: { current: "example-film" },
  year: 2022,
  language: "Tamil",
  role: "Score mixing",
  contributions: ["Score mixing"],
  type: "Feature Film",
  featured: false,
  featuredOrder: 1000,
};
const validEnquiry = {
  name: "Test Visitor",
  email: "visitor@example.org",
  project: "New film",
  service: "mixing",
  timeline: "November",
  message: "Please discuss score mixing for our new film.",
  reference: "Example Film",
  website: "",
};

test("archive URL state rejects malformed parameters and bounds the visible list", () => {
  assert.deepEqual(
    parseArchiveSearch({ q: {}, year: "2022 OR true", language: [], limit: Infinity }),
    {},
  );
  assert.deepEqual(
    parseArchiveSearch({ q: "Example Film", year: 2022, language: "Tamil", limit: 48 }),
    { q: "Example Film", year: "2022", language: "Tamil", limit: 48 },
  );
  assert.equal(parseArchiveSearch({ limit: 999999 }).limit, 1200);
  assert.equal(
    parseArchiveSearch({ q: "Example " }).q,
    "Example ",
    "Typing a space must not remove it.",
  );
});

test("archive search combines title, contribution, language, and year without losing multiword queries", () => {
  const movies = [
    credit,
    { ...credit, _id: "two", title: "Other Film", year: 2021, language: "Hindi" },
  ];
  assert.equal(
    filterMovies(movies, { q: "example film", year: "2022", language: "Tamil" }).length,
    1,
  );
  assert.equal(filterMovies(movies, { q: "score mixing", year: "2021" })[0]?._id, "two");
  assert.equal(filterMovies(movies, { year: "2021", language: "Tamil" }).length, 0);
});

test("featured credits respect editorial ordering and duplicate slugs appear once", () => {
  const first = { ...credit, featured: true, featuredOrder: 2 };
  const second = {
    ...credit,
    _id: "two",
    slug: { current: "second-film" },
    featured: true,
    featuredOrder: 1,
  };
  assert.deepEqual(
    selectFeaturedMovies([first, credit, second]).map((movie) => movie._id),
    ["two", "project-one"],
  );
  assert.equal(deduplicateMovies([credit, { ...credit, _id: "duplicate" }]).length, 1);
});

test("a failed archive can use a recent valid snapshot, but not corrupt, expired, or unsafe cached data", () => {
  const now = Date.now();
  const snapshot = JSON.stringify({ version: 1, updatedAt: now - 1000, movies: [credit] });
  assert.equal(parseArchiveCache(snapshot, now)?.source, "cached");
  assert.equal(parseArchiveCache(snapshot, now)?.movies[0]?.title, credit.title);
  assert.equal(parseArchiveCache("broken json", now), undefined);
  assert.equal(
    parseArchiveCache(
      JSON.stringify({ version: 1, updatedAt: now - 8 * 86400000, movies: [credit] }),
      now,
    ),
    undefined,
  );
  assert.equal(
    parseArchiveCache(
      JSON.stringify({ version: 1, updatedAt: now + 86400000, movies: [credit] }),
      now,
    ),
    undefined,
  );
  assert.equal(
    parseArchiveCache(
      JSON.stringify({
        version: 1,
        updatedAt: now,
        movies: [{ ...credit, listenUrl: "javascript:alert(1)" }],
      }),
      now,
    ),
    undefined,
  );
});

test("listening and credit links accept only HTTPS URLs without embedded credentials", () => {
  assert.equal(
    safeExternalUrl("https://open.spotify.com/track/example"),
    "https://open.spotify.com/track/example",
  );
  for (const input of [
    "javascript:alert(1)",
    "data:text/html,hello",
    "https://user:pass@example.com",
    "//example.com",
    null,
  ])
    assert.equal(safeExternalUrl(input), undefined);
});

test("600 synthetic credits can be searched locally without requiring server pagination", (t) => {
  const movies = Array.from({ length: 600 }, (_, index) => ({
    ...credit,
    _id: String(index),
    title: `Film ${index}`,
    slug: { current: `film-${index}` },
    year: 2000 + (index % 25),
    language: index % 2 ? "Tamil" : "Hindi",
  }));
  const start = performance.now();
  for (let i = 0; i < 100; i++)
    filterMovies(movies, { q: "Film", language: "Tamil", year: "2021" });
  const elapsed = performance.now() - start;
  assert.ok(filterMovies(movies, { q: "Film 599" }).length === 1);
  t.diagnostic(
    `600 synthetic credits, 100 combined searches: ${elapsed.toFixed(1)} ms. Published corpus remains to be supplied.`,
  );
});

test("enquiries validate required fields, size limits, and usable public contact addresses", () => {
  assert.equal(enquirySchema.safeParse(validEnquiry).success, true);
  assert.equal(enquirySchema.safeParse({ ...validEnquiry, message: "short" }).success, false);
  assert.equal(enquirySchema.safeParse({ ...validEnquiry, email: "invalid" }).success, false);
  assert.equal(
    enquirySchema.safeParse({ ...validEnquiry, message: "x".repeat(5001) }).success,
    false,
  );
  assert.equal(isContactEmail("hello@example.com"), false);
  assert.equal(isContactEmail(undefined), false);
});

test("enquiries reach the registered form with a reference and only accept a successful provider response", async () => {
  let calls = 0;
  const request: typeof fetch = async (url, options) => {
    calls++;
    assert.equal(url, "/__forms.html");
    assert.equal(options?.method, "POST");
    const body = new URLSearchParams(String(options?.body));
    assert.equal(body.get("form-name"), ENQUIRY_FORM_NAME);
    assert.equal(body.get("reference"), "Example Film");
    assert.equal(body.get("email"), validEnquiry.email);
    return new Response("Thank you", { status: 200 });
  };
  await submitEnquiry(validEnquiry, request);
  assert.equal(calls, 1);
  await assert.rejects(
    () => submitEnquiry(validEnquiry, async () => new Response("Unavailable", { status: 503 })),
    /wasn’t sent/,
  );
  await assert.rejects(
    () =>
      submitEnquiry(validEnquiry, async () => new Response('<meta name="form-registration" />')),
    /temporarily unavailable/,
  );
  await assert.rejects(() => submitEnquiry({ ...validEnquiry, website: "spam" }, request));
  assert.equal(calls, 1, "Honeypot submissions never reach the provider.");
});

test("Netlify's static registration includes every submitted enquiry field", () => {
  const html = readFileSync(new URL("../public/__forms.html", import.meta.url), "utf8");
  for (const field of Object.keys(enquirySchema.shape))
    assert.ok(html.includes(`name="${field}"`), field);
  assert.ok(html.includes(`name="${ENQUIRY_FORM_NAME}"`));
  assert.ok(html.includes('netlify-honeypot="website"'));
});
