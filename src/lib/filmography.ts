import { z } from "zod";

export const PAGE_SIZE = 24;
export const MAX_VISIBLE_CREDITS = 1200;
export const ARCHIVE_CACHE_KEY = "sujith-filmography-v1";
const CACHE_LIFETIME = 7 * 24 * 60 * 60 * 1000;

const secureUrl = z
  .string()
  .url()
  .refine((value) => {
    try {
      const url = new URL(value);
      return url.protocol === "https:" && !url.username && !url.password;
    } catch {
      return false;
    }
  });

export function safeExternalUrl(value: unknown): string | undefined {
  const result = secureUrl.safeParse(value);
  return result.success ? result.data : undefined;
}

export const movieSchema = z.object({
  _id: z.string().min(1),
  title: z.string().min(1),
  slug: z.object({ current: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/) }),
  year: z.number().int().min(1900).max(2100),
  language: z.string(),
  role: z.string(),
  contributions: z.array(z.string()),
  type: z.string(),
  imageUrl: z.string().optional(),
  description: z.string().optional(),
  composer: z.string().optional(),
  director: z.string().optional(),
  listenUrl: secureUrl.optional(),
  videoUrl: secureUrl.optional(),
  imdbUrl: secureUrl.optional(),
  featured: z.boolean().default(false),
  featuredOrder: z.number().default(1000),
});

export type Movie = z.infer<typeof movieSchema>;
export type Archive = {
  movies: Movie[];
  source: "live" | "cached" | "sample";
  updatedAt: number | null;
};

export type ArchiveSearch = {
  q?: string | undefined;
  year?: string | undefined;
  language?: string | undefined;
  limit?: number | undefined;
};

export function parseArchiveSearch(raw: Record<string, unknown>): ArchiveSearch {
  const q = typeof raw["q"] === "string" ? raw["q"].slice(0, 150) : "";
  const year = String(raw["year"] ?? "");
  const language = typeof raw["language"] === "string" ? raw["language"].slice(0, 60) : "";
  const limit = Number(raw["limit"]);
  return {
    ...(q ? { q } : {}),
    ...(/^(19|20)\d{2}$/.test(year) || year === "2100" ? { year } : {}),
    ...(language ? { language } : {}),
    ...(Number.isFinite(limit) && limit > PAGE_SIZE
      ? { limit: Math.min(MAX_VISIBLE_CREDITS, Math.floor(limit)) }
      : {}),
  };
}

export function filterMovies(movies: Movie[], search: ArchiveSearch): Movie[] {
  const query = (search.q || "").trim().toLocaleLowerCase();
  return movies.filter(
    (movie) =>
      (!search.year || String(movie.year) === search.year) &&
      (!search.language || movie.language === search.language) &&
      (!query ||
        [movie.title, movie.year, movie.language, movie.role, movie.composer, movie.director].some(
          (value) =>
            String(value ?? "")
              .toLocaleLowerCase()
              .includes(query),
        )),
  );
}

export function deduplicateMovies(movies: Movie[]): Movie[] {
  const seen = new Set<string>();
  return movies.filter((movie) => {
    if (seen.has(movie.slug.current)) return false;
    seen.add(movie.slug.current);
    return true;
  });
}

export function selectFeaturedMovies(movies: Movie[], count = 6): Movie[] {
  const featured = movies.filter((movie) => movie.featured).sort((a, b) => a.featuredOrder - b.featuredOrder);
  if (featured.length >= count) return featured.slice(0, count);
  
  const unfeatured = movies.filter((movie) => !movie.featured);
  return [...featured, ...unfeatured].slice(0, count);
}

export function parseArchiveCache(raw: string | null, now = Date.now()): Archive | undefined {
  if (!raw) return undefined;
  try {
    const parsed = z
      .object({
        version: z.literal(1),
        updatedAt: z.number(),
        movies: z.array(movieSchema).max(10000),
      })
      .safeParse(JSON.parse(raw));
    if (
      !parsed.success ||
      parsed.data.updatedAt > now + 60_000 ||
      now - parsed.data.updatedAt > CACHE_LIFETIME
    )
      return undefined;
    // Persisted images must be public HTTPS assets or local application assets.
    const movies = parsed.data.movies.map((movie) => ({
      ...movie,
      imageUrl:
        movie.imageUrl?.startsWith("/") && !movie.imageUrl.startsWith("//")
          ? movie.imageUrl
          : safeExternalUrl(movie.imageUrl),
    }));
    return { movies, source: "cached", updatedAt: parsed.data.updatedAt };
  } catch {
    return undefined;
  }
}

export function readCachedArchive(): Archive | undefined {
  if (typeof window === "undefined") return undefined;
  try {
    return parseArchiveCache(window.localStorage.getItem(ARCHIVE_CACHE_KEY));
  } catch {
    return undefined;
  }
}

export function saveArchive(archive: Archive): void {
  if (typeof window === "undefined" || archive.source !== "live") return;
  try {
    window.localStorage.setItem(
      ARCHIVE_CACHE_KEY,
      JSON.stringify({ version: 1, updatedAt: archive.updatedAt, movies: archive.movies }),
    );
  } catch {
    /* Browsing remains available when storage is disabled or full. */
  }
}
