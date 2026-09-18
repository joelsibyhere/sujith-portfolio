import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Disc3 } from "lucide-react";
import { type ArchiveSearch, type Movie } from "@/lib/filmography";

export function FilmList({
  movies,
  archiveSearch,
}: {
  movies: Movie[];
  archiveSearch?: ArchiveSearch | undefined;
}) {
  return (
    <div>
      <div
        aria-hidden="true"
        className="credit-columns hidden items-center border-b border-border py-4 text-xs text-muted-foreground md:grid"
      >
        <span>No.</span>
        <span />
        <span>Project</span>
        <span>Contribution</span>
        <span>Year</span>
        <span />
      </div>
      <ol className="border-t border-border md:border-t-0">
        {movies.map((movie, index) => (
          <li key={movie._id} className="border-b border-border">
            <Link
              to="/work/$slug"
              params={{ slug: movie.slug.current }}
              search={archiveSearch ? { archive: archiveSearch } : {}}
              preload={false}
              className="credit-row group hover:bg-foreground/5 transition-colors duration-300 -mx-4 px-4 md:-mx-6 md:px-6 py-2 rounded-md"
              aria-label={`View ${movie.title}, ${movie.year}, ${movie.role}`}
            >
              <span
                aria-hidden="true"
                className="hidden text-xs tabular-nums text-muted-foreground md:block"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex aspect-[3/4] w-11 items-center justify-center overflow-hidden rounded-[2px] bg-muted md:w-12">
                {movie.imageUrl ? (
                  <img
                    src={movie.imageUrl}
                    alt=""
                    width={48}
                    height={64}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                ) : (
                  <Disc3 size={20} className="text-muted-foreground" />
                )}
              </span>
              <span className="min-w-0">
                <span className="block text-base leading-snug tracking-[-0.025em] md:text-xl group-hover:text-primary transition-colors duration-300">
                  {movie.title}
                </span>
                {movie.language && (
                  <span className="mt-1 hidden text-xs text-muted-foreground md:block">
                    {movie.language}
                  </span>
                )}
                <span className="mt-1 block text-xs leading-relaxed text-muted-foreground md:hidden">
                  {movie.role}
                </span>
              </span>
              <span className="hidden text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 md:block">{movie.role}</span>
              <span className="text-xs tabular-nums text-muted-foreground group-hover:text-foreground transition-colors duration-300 md:text-sm">
                {movie.year}
              </span>
              <ArrowUpRight
                size={16}
                aria-hidden="true"
                className="hidden text-muted-foreground transition-colors group-hover:text-primary md:block"
              />
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
