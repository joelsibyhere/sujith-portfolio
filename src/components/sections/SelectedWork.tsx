import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight, Disc3 } from "lucide-react";
import { useRef } from "react";
import { Reveal } from "@/components/Reveal";
import { useMovies } from "@/sanity/useMovies";
import { selectFeaturedMovies } from "@/lib/filmography";

export function SelectedWork() {
  const { data: movies } = useMovies();
  // Grab enough movies to make the carousel scroll nicely
  const featured = selectFeaturedMovies(movies).slice(0, 10);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -340, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 340, behavior: "smooth" });
  };

  return (
    <section id="work" className="py-24 md:py-32 relative bg-background text-foreground border-t border-border overflow-hidden">
      <div className="site-container pl-6 md:pl-12 lg:pl-20 pr-0">
        
        {/* Header */}
        <Reveal className="mb-12 flex flex-col md:mb-16 md:flex-row md:items-end md:justify-between pr-6 md:pr-12 lg:pr-20">
          <div className="mb-6 md:mb-0">
            <p className="text-4xl md:text-6xl font-display font-medium tracking-tight">Selected Films</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Link to="/filmography" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 pb-2 text-sm uppercase tracking-widest font-medium">
              Explore full archive <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>

        {/* Netflix-Style Horizontal Carousel with Apple-Style Floating Arrows */}
        <Reveal delay={100} className="w-full">
          <div className="relative group/carousel">
            
            {/* Apple-Style Floating Left Arrow */}
            <button 
              onClick={scrollLeft}
              className="hidden md:flex absolute left-4 top-[45%] -translate-y-1/2 z-20 items-center justify-center w-14 h-14 rounded-full bg-white/70 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.15)] text-black opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-white hover:scale-105"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={28} strokeWidth={2.5} />
            </button>

            {/* Hide scrollbar natively but allow touch scrolling */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-12 pr-6 md:pr-12 lg:pr-20"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {featured.map((movie) => (
                <Link
                  key={movie._id}
                  to="/work/$slug"
                  params={{ slug: movie.slug.current }}
                  className="group flex flex-col gap-5 shrink-0 snap-start"
                  style={{ width: "clamp(220px, 25vw, 320px)" }}
                  aria-label={`View ${movie.title}`}
                >
                  {/* Large Portrait Poster - Editorial Style */}
                  <div className="w-full aspect-[2/3] overflow-hidden bg-card border border-border/50 rounded-sm">
                    {movie.imageUrl ? (
                      <img
                        src={movie.imageUrl}
                        alt={movie.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <Disc3 size={40} className="text-muted-foreground/20" />
                      </div>
                    )}
                  </div>
                  
                  {/* Metadata styled like streaming UI */}
                  <div className="flex flex-col gap-1 px-1">
                    <h3 className="text-sm md:text-base font-bold tracking-[0.1em] text-foreground uppercase truncate transition-colors group-hover:text-primary">
                      {movie.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-medium opacity-80 uppercase tracking-widest">
                      {movie.year}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Apple-Style Floating Right Arrow */}
            <button 
              onClick={scrollRight}
              className="hidden md:flex absolute right-12 top-[45%] -translate-y-1/2 z-20 items-center justify-center w-14 h-14 rounded-full bg-white/70 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.15)] text-black opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-white hover:scale-105"
              aria-label="Scroll Right"
            >
              <ChevronRight size={28} strokeWidth={2.5} />
            </button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
