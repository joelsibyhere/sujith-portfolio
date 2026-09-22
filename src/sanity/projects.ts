import { queryOptions } from "@tanstack/react-query";
import { z } from "zod";
import { client, urlFor } from "./client";
import { selectedWork, filmography } from "@/data/portfolio";
import { clientPosters } from "@/data/client-posters";
import { safeExternalUrl, type Archive, type Movie } from "@/lib/filmography";

const publicClient = client.withConfig({ timeout: 4500, maxRetries: 0 });
const projection = `_id, title, slug, year, language, role, contributions, type, artwork,
  description, composer, director, listenUrl, audioUrl, videoUrl, imdbUrl, externalUrl,
  featured, featuredOrder`;

const rawProjectSchema = z.object({
  _id: z.string().min(1),
  title: z.string().min(1),
  slug: z.object({ current: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/) }),
  year: z.number().int().min(1900).max(2100),
  language: z.string().nullish(),
  role: z.string().nullish(),
  type: z.string().nullish(),
  contributions: z.array(z.string()).nullish(),
  artwork: z.unknown(),
  description: z.string().nullish(),
  composer: z.string().nullish(),
  director: z.string().nullish(),
  listenUrl: z.string().nullish(),
  audioUrl: z.string().nullish(),
  videoUrl: z.string().nullish(),
  imdbUrl: z.string().nullish(),
  externalUrl: z.string().nullish(),
  featured: z.boolean().nullish(),
  featuredOrder: z.number().nullish(),
});

function normalizeProject(value: unknown): Movie | undefined {
  const result = rawProjectSchema.safeParse(value);
  if (!result.success) return undefined;
  const project = result.data;
  const contributions = project.contributions?.filter(Boolean) || [];
  let imageUrl: string | undefined;
  if (project.artwork) {
    try {
      imageUrl = urlFor(project.artwork).width(480).fit("max").auto("format").url();
    } catch {
      /* Artwork may still be uploading. */
    }
  }
  return {
    _id: project._id,
    title: project.title,
    slug: project.slug,
    year: project.year,
    language: project.language || "",
    type: project.type || "",
    role: contributions.length
      ? contributions.join(" / ")
      : project.role || "Credit details to follow",
    contributions,
    imageUrl,
    description: project.description || undefined,
    composer: project.composer || undefined,
    director: project.director || undefined,
    listenUrl: safeExternalUrl(project.listenUrl || project.audioUrl),
    videoUrl: safeExternalUrl(project.videoUrl),
    imdbUrl: safeExternalUrl(project.imdbUrl || project.externalUrl),
    featured: project.featured || false,
    featuredOrder: project.featuredOrder ?? 1000,
  };
}

export const sampleArchive: Archive = {
  source: "sample",
  updatedAt: null,
  movies: [
    // Include all selected works first
    ...selectedWork.map((project) => ({
      _id: project.slug,
      title: project.title,
      slug: { current: project.slug },
      year: project.year,
      language: filmography.find((credit) => credit.title === project.title)?.language || "",
      role: project.role,
      contributions: [],
      type: "Feature Film",
      imageUrl: project.artwork,
      description: project.description,
      listenUrl: safeExternalUrl(project.audioUrl),
      videoUrl: safeExternalUrl(project.videoUrl),
      imdbUrl: safeExternalUrl(project.externalUrl),
      featured: true, // Make sure selected works show up on the home page
      featuredOrder: 1,
    })),
    // Then include the rest of the filmography
    ...filmography
      .filter((credit) => !selectedWork.find((sw) => sw.title === credit.title))
      .map((credit) => ({
        _id: credit.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        title: credit.title,
        slug: { current: credit.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") },
        year: credit.year,
        language: credit.language,
        role: credit.role,
        contributions: [],
        type: credit.type,
        imageUrl: clientPosters[credit.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")],
        featured: false,
        featuredOrder: 1000,
      })),
  ],
};

export const moviesQueryOptions = queryOptions({
  queryKey: ["movies", "published"] as const,
  staleTime: 60_000,
  gcTime: 30 * 60_000,
  retry: false,
  queryFn: async (): Promise<Archive> => {
    // Use the maintained local catalogue until the CMS archive is populated.
    return { ...sampleArchive, source: "live", updatedAt: Date.now() };
  },
});

export function projectQueryOptions(slug: string) {
  return queryOptions({
    queryKey: ["project", slug] as const,
    staleTime: 60_000,
    retry: false,
    queryFn: async ({ signal }) => {
      const raw = await publicClient.fetch<unknown>(
        `*[_type == "project" && slug.current == $slug && !(_id in path("drafts.**"))][0] { ${projection} }`,
        { slug },
        { signal },
      );
      if (raw === null) return null;
      const movie = normalizeProject(raw);
      if (!movie) throw new Error("This project could not be read.");
      return movie;
    },
  });
}
