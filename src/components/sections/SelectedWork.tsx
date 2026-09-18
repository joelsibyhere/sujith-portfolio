import { Link } from "@tanstack/react-router";
import { ArrowRight, Disc3 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useMovies } from "@/sanity/useMovies";
import { selectFeaturedMovies } from "@/lib/filmography";

export function SelectedWork() {
  const { data: movies } = useMovies();
  const featured = selectFeaturedMovies(movies).slice(0, 6);

  return (
    <section id="work" className="border-t border-border bg-background py-20 md:py-32">
      <div className="site-container">
        
        {/* Header */}
        <Reveal className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8">
          <div>
            <p className="eyebrow mb-4">Film & music</p>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] leading-[1] font-normal tracking-[-0.04em]">
              Selected works
            </h2>
          </div>
          <Link to="/filmography" className="text-link group flex items-center gap-2 pb-2">
            Explore full archive <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </Reveal>

        {/* Minimalist Flex List */}
        <Reveal delay={100} className="w-full">
          <div className="flex flex-col">
            {featured.map((movie) => (
              <Link
                key={movie._id}
                to="/work/$slug"
                params={{ slug: movie.slug.current }}
                className="group flex items-center gap-6 md:gap-10 border-b border-border py-6 md:py-8 transition-colors hover:bg-muted/20"
                aria-label={`View ${movie.title}`}
              >
                {/* Small, Natural-Aspect Image */}
                <div className="w-20 md:w-28 shrink-0 overflow-hidden rounded-md bg-muted shadow-sm ring-1 ring-black/5 transition-transform duration-500 group-hover:scale-105 group-hover:shadow-md aspect-[3/4]">
                  {movie.imageUrl ? (
                    <img
                      src={movie.imageUrl}
                      alt={movie.title}
                      loading="lazy"
                      className="h-full w-full object-cover saturate-[0.8] transition-all duration-500 group-hover:saturate-100"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <Disc3 size={24} className="text-muted-foreground/30" />
                    </div>
                  )}
                </div>
                
                {/* Typography */}
                <div className="flex flex-col justify-center min-w-0">
                  <h3 className="truncate text-2xl md:text-4xl font-normal tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {movie.title}
                  </h3>
                  <div className="mt-2 md:mt-3 flex flex-wrap items-center gap-3 text-xs md:text-sm text-muted-foreground">
                    <span className="uppercase tracking-widest">{movie.role}</span>
                    <span className="opacity-30 hidden sm:block">—</span>
                    <span className="tabular-nums">{movie.year}</span>
                    {movie.language && (
                      <>
                        <span className="opacity-30">—</span>
                        <span>{movie.language}</span>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
