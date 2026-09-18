import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { Search, X } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { FilmList } from "@/components/FilmList";
import { ArchiveNotice } from "@/components/ArchiveNotice";
import { useMovies } from "@/sanity/useMovies";
import {
  filterMovies,
  parseArchiveSearch,
  PAGE_SIZE,
  MAX_VISIBLE_CREDITS,
  type ArchiveSearch,
} from "@/lib/filmography";

export const Route = createFileRoute("/filmography")({
  validateSearch: parseArchiveSearch,
  head: () => ({
    meta: [
      { title: "Filmography — Sujith Sreedhar | 600+ Films" },
      {
        name: "description",
        content:
          "Browse the film credits of Sujith Sreedhar, mixing and mastering engineer across 600+ films in cinema and music.",
      },
    ],
  }),
  component: FilmographyPage,
});

function FilmographyPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const { data: movies, source, isFetching, refetch } = useMovies();
  const years = useMemo(
    () => [...new Set(movies.map((movie) => movie.year))].sort((a, b) => b - a),
    [movies],
  );
  const languages = useMemo(
    () => [...new Set(movies.map((movie) => movie.language).filter(Boolean))].sort(),
    [movies],
  );
  const filtered = useMemo(() => filterMovies(movies, search), [movies, search]);
  const visibleCount = search.limit || PAGE_SIZE;
  const visible = filtered.slice(0, visibleCount);
  const hasFilters = Boolean(search.q || search.year || search.language);
  const setFilters = (patch: ArchiveSearch) => {
    void navigate({
      search: (previous) => parseArchiveSearch({ ...previous, limit: undefined, ...patch }),
      replace: true,
      resetScroll: false,
    });
  };
  const clearFilters = () => {
    void navigate({ search: {}, replace: true, resetScroll: false });
  };

  return (
    <div className="min-h-dvh pt-44 pb-20 md:pt-44 md:pb-28">
      <div className="site-container">
        <Reveal className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-medium tracking-tight">Extended archive</h1>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            A comprehensive record of Sujith Sreedhar's sonic contributions across more than 600 feature films and independent releases.
          </p>
        </Reveal>
        <ArchiveNotice source={source} isFetching={isFetching} onRetry={() => void refetch()} />
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end">
          <div className="relative flex-1">
            <label htmlFor="film-search" className="sr-only">
              Search film credits
            </label>
            <Search
              size={17}
              aria-hidden="true"
              className="absolute top-1/2 left-0 -translate-y-1/2 text-muted-foreground"
            />
            <input
              id="film-search"
              type="search"
              value={search.q || ""}
              onChange={(event) => setFilters({ q: event.target.value })}
              placeholder="Search by film, year, language or role"
              className="h-12 w-full border-b border-border bg-transparent pl-8 pr-3 text-sm placeholder:text-muted-foreground focus:border-primary"
            />
          </div>
          <div className="flex gap-4 md:pl-8">
            <label className="flex-1 md:w-36">
              <span className="sr-only">Filter by year</span>
              <select
                value={search.year || ""}
                onChange={(event) => setFilters({ year: event.target.value })}
                className="h-12 w-full border-b border-border bg-transparent pr-6 text-sm"
              >
                <option value="">All years</option>
                {search.year && !years.includes(Number(search.year)) && (
                  <option value={search.year}>{search.year}</option>
                )}
                {years.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
            {(languages.length > 0 || search.language) && (
              <label className="flex-1 md:w-40">
                <span className="sr-only">Filter by language</span>
                <select
                  value={search.language || ""}
                  onChange={(event) => setFilters({ language: event.target.value })}
                  className="h-12 w-full border-b border-border bg-transparent pr-6 text-sm"
                >
                  <option value="">All languages</option>
                  {search.language && !languages.includes(search.language) && (
                    <option value={search.language}>{search.language}</option>
                  )}
                  {languages.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </label>
            )}
          </div>
        </div>
        <div className="mb-6 flex min-h-10 items-center justify-between gap-4 text-xs text-muted-foreground">
          <p role="status" aria-live="polite">
            Showing {visible.length} of {filtered.length}{" "}
            {source === "sample" ? "selected" : "published"} credits
          </p>
          {hasFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex min-h-11 items-center gap-2 hover:text-foreground"
            >
              Clear filters <X size={13} aria-hidden="true" />
            </button>
          )}
        </div>
        {visible.length ? (
          <FilmList movies={visible} archiveSearch={search} />
        ) : (
          <div className="border-y border-border py-20 text-center">
            <p className="text-muted-foreground">
              {hasFilters
                ? "No credits match your search."
                : "The published credits will appear here."}
            </p>
            {hasFilters && (
              <button type="button" onClick={clearFilters} className="text-link mt-4">
                View all credits
              </button>
            )}
          </div>
        )}
        {visibleCount < filtered.length && visibleCount < MAX_VISIBLE_CREDITS && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setFilters({ ...search, limit: visibleCount + PAGE_SIZE })}
              className="text-link"
            >
              Show more credits <span aria-hidden="true">+</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
