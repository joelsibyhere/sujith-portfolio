import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useMovies } from "@/sanity/useMovies";
import { selectFeaturedMovies } from "@/lib/filmography";

export function SelectedWork() {
  const { data: movies } = useMovies();
  // Sterling Sound keeps their featured selection concise and highly curated
  const featured = selectFeaturedMovies(movies).slice(0, 8); 

  return (
    <section id="work" className="py-24 md:py-32 relative bg-background text-foreground border-t border-border">
      <div className="site-container px-6 md:px-12 lg:px-20 max-w-[1400px]">
        
        {/* Header - Sterling Sound Utility Style */}
        <Reveal className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between border-b border-border pb-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-2">Curated Portfolio</h2>
            <p className="text-sm text-muted-foreground font-medium">Selected Audio Engineering Credits</p>
          </div>
          
          <Link 
            to="/filmography" 
            className="mt-8 md:mt-0 px-6 py-3 border border-border hover:border-foreground transition-colors text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 group"
          >
            Search Full Database
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </Reveal>

        {/* The Sterling-Style "Square Album" Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 md:gap-x-10 gap-y-16">
          {featured.map((movie, index) => (
            <Reveal key={movie._id} delay={index * 50} className="flex flex-col group cursor-pointer">
              <Link
                to="/work/$slug"
                params={{ slug: movie.slug.current }}
                className="flex flex-col h-full"
              >
                
                {/* Square Crop - Crucial for the "Audio/Album" Psychology */}
                <div className="w-full aspect-square overflow-hidden bg-card border border-border/50 mb-6 relative">
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300 z-10"></div>
                  
                  {movie.imageUrl && (
                    <img 
                      src={movie.imageUrl} 
                      alt={movie.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                  )}
                </div>

                {/* Typography - Strict Utility Data */}
                <div className="flex flex-col">
                  <h3 className="text-sm md:text-base font-bold tracking-[0.05em] text-foreground uppercase truncate">
                    {movie.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-[10px] uppercase tracking-widest font-semibold text-muted-foreground">
                      Film Score
                    </p>
                    <span className="text-[10px] font-mono text-muted-foreground opacity-60">
                      {movie.year || "----"}
                    </span>
                  </div>
                </div>
                
              </Link>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
