import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useMovies } from "@/sanity/useMovies";
import { selectFeaturedMovies } from "@/lib/filmography";

export function SelectedWork() {
  const { data: movies } = useMovies();
  const featured = selectFeaturedMovies(movies);
  
  // We need enough movies to make the infinite scroll work smoothly.
  // We'll create 3 separate rows with different sets of movies.
  const row1 = [...featured, ...featured, ...featured].slice(0, 16);
  const row2 = [...featured, ...featured, ...featured].slice(4, 20);
  const row3 = [...featured, ...featured, ...featured].slice(8, 24);

  return (
    <section id="work" className="py-20 md:py-32 relative bg-background text-foreground border-t border-border overflow-hidden">
      
      {/* Inline styles for the infinite marquee */}
      <style>
        {`
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scrollRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll-left {
            animation: scrollLeft 60s linear infinite;
          }
          .animate-scroll-right {
            animation: scrollRight 60s linear infinite;
          }
          /* Pause the entire wall when hovering over any poster (Desktop only) */
          @media (hover: hover) and (pointer: fine) {
            .pause-on-hover:hover .animate-scroll-left,
            .pause-on-hover:hover .animate-scroll-right {
              animation-play-state: paused;
            }
          }
        `}
      </style>

      <div className="site-container px-6 md:px-12 lg:px-20 mb-12">
        <Reveal className="flex flex-col items-center text-center">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-semibold text-muted-foreground mb-4">The Archive</p>
          <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight">Wall of Sound</h2>
        </Reveal>
      </div>

      {/* The Scrolling "Fisheye" Grid Wall */}
      <div 
        className="w-full relative pause-on-hover cursor-pointer"
        style={{
          WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 90%)",
          maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 90%)"
        }}
      >
        <div className="flex flex-col gap-2 md:gap-3 py-10 md:py-20 w-full overflow-hidden perspective-[1000px]">
          
          {/* Row 1 - Scrolls Left */}
          <div className="flex w-[200vw] md:w-[150vw] animate-scroll-left gap-2 md:gap-3">
            {row1.map((movie, index) => (
              <MarqueeItem key={`r1-${movie._id}-${index}`} movie={movie} />
            ))}
            {row1.map((movie, index) => (
              <MarqueeItem key={`r1-dup-${movie._id}-${index}`} movie={movie} />
            ))}
          </div>

          {/* Row 2 - Scrolls Right */}
          <div className="flex w-[200vw] md:w-[150vw] animate-scroll-right gap-2 md:gap-3 ml-[-10vw]">
            {row2.map((movie, index) => (
              <MarqueeItem key={`r2-${movie._id}-${index}`} movie={movie} />
            ))}
            {row2.map((movie, index) => (
              <MarqueeItem key={`r2-dup-${movie._id}-${index}`} movie={movie} />
            ))}
          </div>

          {/* Row 3 - Scrolls Left */}
          <div className="flex w-[200vw] md:w-[150vw] animate-scroll-left gap-2 md:gap-3 ml-[-5vw]">
            {row3.map((movie, index) => (
              <MarqueeItem key={`r3-${movie._id}-${index}`} movie={movie} />
            ))}
            {row3.map((movie, index) => (
              <MarqueeItem key={`r3-dup-${movie._id}-${index}`} movie={movie} />
            ))}
          </div>

        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Link 
          to="/filmography" 
          className="px-8 py-3 border border-border hover:border-foreground transition-colors text-[10px] uppercase tracking-widest font-bold bg-background/50 backdrop-blur-sm z-10"
        >
          View Full Database
        </Link>
      </div>

    </section>
  );
}

function MarqueeItem({ movie }: { movie: any }) {
  return (
    <div className="flex-none w-[120px] sm:w-[150px] md:w-[180px] lg:w-[220px] aspect-square relative group overflow-hidden bg-card/20 rounded-sm">
      <Link
        to="/work/$slug"
        params={{ slug: movie.slug.current }}
        className="w-full h-full block"
      >
        {movie.imageUrl && (
          <img 
            src={movie.imageUrl} 
            alt={movie.title}
            className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
          />
        )}
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-center">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white drop-shadow-md">
            {movie.title}
          </span>
        </div>
      </Link>
    </div>
  );
}
