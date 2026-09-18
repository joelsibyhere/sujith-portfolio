import {
  createFileRoute,
  Link,
  notFound,
  useRouter,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowUpRight, Copy, Disc3 } from "lucide-react";
import { moviesQueryOptions, projectQueryOptions, sampleArchive } from "@/sanity/projects";
import {
  readCachedArchive,
  parseArchiveSearch,
  type ArchiveSearch,
  type Archive,
} from "@/lib/filmography";

type ProjectSearch = { archive?: ArchiveSearch | undefined };

export const Route = createFileRoute("/work/$slug")({
  validateSearch: (raw: Record<string, unknown>): ProjectSearch =>
    raw["archive"] && typeof raw["archive"] === "object" && !Array.isArray(raw["archive"])
      ? { archive: parseArchiveSearch(raw["archive"] as Record<string, unknown>) }
      : {},
  loader: async ({ params, context }) => {
    const archive =
      context.queryClient.getQueryData(moviesQueryOptions.queryKey) ?? readCachedArchive();
    const cached = archive?.movies.find((movie) => movie.slug.current === params.slug);
    const sample = sampleArchive.movies.find((movie) => movie.slug.current === params.slug);
    if (cached && archive?.source === "live") {
      const unavailable = Boolean(
        context.queryClient.getQueryState(moviesQueryOptions.queryKey)?.error,
      );
      return {
        project: cached,
        source: (unavailable ? "cached" : "live") as Archive["source"],
        unavailable,
      };
    }
    let project;
    try {
      project = await context.queryClient.ensureQueryData(projectQueryOptions(params.slug));
    } catch {
      if (cached || sample)
        return {
          project: (cached || sample)!,
          source: cached ? ("cached" as const) : ("sample" as const),
          unavailable: true,
        };
      throw new Error("The project details are temporarily unavailable.");
    }
    if (project) return { project, source: "live" as const, unavailable: false };
    if (sample) return { project: sample, source: "sample" as const, unavailable: false };
    throw notFound();
  },
  head: ({ loaderData }) => {
    if (!loaderData)
      return {
        meta: [{ title: "Project — Sujith Sreedhar" }, { name: "robots", content: "noindex" }],
      };
    const { project } = loaderData;
    const description = `${project.title} (${project.year}) — ${project.role} by Sujith Sreedhar.`;
    return {
      meta: [
        { title: `${project.title} — Sujith Sreedhar` },
        { name: "description", content: description },
        { property: "og:title", content: `${project.title} — Sujith Sreedhar` },
        { property: "og:description", content: description },
        ...(project.imageUrl?.startsWith("https://")
          ? [{ property: "og:image", content: project.imageUrl }]
          : []),
      ],
    };
  },
  pendingComponent: () => (
    <div className="site-container min-h-[65dvh] pt-44">
      <p role="status" className="text-muted-foreground">
        Loading project details…
      </p>
    </div>
  ),
  errorComponent: ProjectError,
  notFoundComponent: () => (
    <div className="site-container min-h-[65dvh] pt-44">
      <h1 className="section-title">Project not found</h1>
      <Link to="/filmography" className="text-link mt-8">
        Browse filmography <ArrowUpRight size={16} />
      </Link>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectError({ reset }: ErrorComponentProps) {
  const router = useRouter();
  return (
    <div className="site-container min-h-[65dvh] pt-44 pb-20">
      <h1 className="section-title">Project temporarily unavailable</h1>
      <p className="mt-5 max-w-lg text-muted-foreground">
        We couldn’t load this credit. Please try again or return to the filmography.
      </p>
      <div className="mt-8 flex flex-wrap gap-6">
        <button
          type="button"
          className="button-primary"
          onClick={() => void router.invalidate().then(reset)}
        >
          Try again
        </button>
        <Link to="/filmography" className="text-link">
          Filmography <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
}

function ProjectDetail() {
  const { project, source, unavailable } = Route.useLoaderData();
  const { archive } = Route.useSearch();
  const [copyState, setCopyState] = useState<"idle" | "copied" | "manual">("idle");
  const [shareUrl, setShareUrl] = useState("");

  const copyLink = async () => {
    const url = new URL(window.location.pathname, window.location.origin).href;
    setShareUrl(url);
    try {
      await navigator.clipboard.writeText(url);
      setCopyState("copied");
    } catch {
      setCopyState("manual");
    }
  };

  return (
    <article className="site-container min-h-[70dvh] pt-40 pb-20 md:pt-44 md:pb-28">
      <div className="mb-12 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-b border-border pb-6">
        <Link
          to="/filmography"
          search={archive || {}}
          className="inline-flex min-h-11 items-center gap-3 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft size={16} aria-hidden="true" /> Back to filmography
        </Link>
        <button
          type="button"
          onClick={() => void copyLink()}
          className="inline-flex min-h-11 items-center gap-2 text-sm"
        >
          <Copy size={15} aria-hidden="true" />
          <span aria-live="polite">
            {copyState === "copied" ? "Link copied" : "Copy project link"}
          </span>
        </button>
      </div>
      {copyState === "manual" && (
        <label className="mb-8 block text-sm">
          Copy this project link
          <input
            aria-label="Project link"
            readOnly
            value={shareUrl}
            onFocus={(event) => event.target.select()}
            className="mt-2 block w-full rounded-sm border border-border bg-card p-3"
          />
        </label>
      )}
      {unavailable && (
        <p role="status" className="mb-8 text-sm text-muted-foreground">
          {source === "cached"
            ? "Showing saved project details."
            : "Showing a selected portfolio credit."}{" "}
          The latest details are temporarily unavailable.
        </p>
      )}
      <div className="grid gap-10 md:grid-cols-[240px_minmax(0,1fr)] md:gap-16 lg:gap-24">
        <div className="w-44 md:w-full">
          <div className="flex aspect-[2/3] items-center justify-center overflow-hidden rounded-[3px] bg-card p-3">
            {project.imageUrl ? (
              <img
                src={project.imageUrl}
                alt={`${project.title} poster`}
                width={240}
                height={360}
                className="h-full w-full object-contain"
              />
            ) : (
              <Disc3 size={40} className="text-muted-foreground" />
            )}
          </div>
        </div>
        <div className="min-w-0">
          <p className="eyebrow mb-4">
            {project.type || "Project credit"}
            {source === "sample" ? " · Selected credit" : ""}
          </p>
          <h1 className="text-4xl leading-[1.12] tracking-[-0.05em] md:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 text-sm text-muted-foreground">
            {project.year}
            {project.language ? ` · ${project.language}` : ""}
          </p>
          <dl className="mt-8 space-y-5 border-y border-border py-7">
            <div>
              <dt className="mb-2 text-xs text-muted-foreground">Contribution</dt>
              <dd className="text-lg leading-relaxed">{project.role}</dd>
            </div>
            {project.composer && (
              <div>
                <dt className="mb-1 text-xs text-muted-foreground">Composer</dt>
                <dd>{project.composer}</dd>
              </div>
            )}
            {project.director && (
              <div>
                <dt className="mb-1 text-xs text-muted-foreground">Director</dt>
                <dd>{project.director}</dd>
              </div>
            )}
          </dl>
          {project.description && (
            <p className="mt-7 whitespace-pre-line text-base leading-8 text-muted-foreground">
              {project.description}
            </p>
          )}
          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
            {project.listenUrl && (
              <a
                href={project.listenUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Listen to this project <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            )}
            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Watch <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            )}
            {project.imdbUrl && (
              <a
                href={project.imdbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                View credits <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            )}
          </div>
          <div className="mt-12">
            <Link to="/connect" search={{ reference: project.title }} className="button-primary">
              Discuss a project <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
