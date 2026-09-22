import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useMovies } from "@/sanity/useMovies";
import { selectFeaturedMovies } from "@/lib/filmography";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function SelectedWork() {
  const { data: movies } = useMovies();
  const featured = selectFeaturedMovies(movies);
  
  // Build a massive, infinitely looping pool of movies so we never run out of posters 
  // even if the database only has a few items currently.
  let pool = [...featured];
  if (pool.length > 0) {
    while (pool.length < 64) {
      pool = [...pool, ...featured];
    }
  }

  // Safely slice 16 items for each row from our massive pool
  const row1 = pool.slice(0, 16);
  const row2 = pool.slice(4, 20);
  const row3 = pool.slice(8, 24);
  const row4 = pool.slice(12, 28);
  const row5 = pool.slice(16, 32);
  const row6 = pool.slice(20, 36);

  return (
    <section id="work" className="py-20 md:py-32 relative bg-background text-foreground border-t border-border overflow-hidden">
      
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
            animation: scrollLeft 70s linear infinite;
          }
          .animate-scroll-right {
            animation: scrollRight 70s linear infinite;
          }
          @keyframes autoZoom {
            0% { transform: scale(1.5); opacity: 0; }
            5% { opacity: 1; }
            95% { transform: scale(1.0); opacity: 1; }
            100% { transform: scale(1.0); opacity: 0; }
          }
          .animate-auto-zoom {
            animation: autoZoom 12s cubic-bezier(0.25, 1, 0.5, 1) infinite;
          }
        `}
      </style>

      <div className="site-container px-6 md:px-12 lg:px-20 mb-12">
        <Reveal className="flex flex-col items-center text-center">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-semibold text-muted-foreground mb-4">The Archive</p>
          <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight">Wall of Sound</h2>
        </Reveal>
      </div>

      {/* The Scrolling Grid Wall */}
      <div className="w-full relative cursor-pointer overflow-hidden flex justify-center bg-black">
        
        {/* Top & Bottom Curved Masks */}
        <div className="absolute top-[-5%] left-[-10%] w-[120%] h-[10%] bg-background rounded-[100%] z-20 shadow-[0_20px_50px_rgba(0,0,0,0.9)] pointer-events-none"></div>
        <div className="absolute bottom-[-5%] left-[-10%] w-[120%] h-[10%] bg-background rounded-[100%] z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.9)] pointer-events-none"></div>

        <div className="flex flex-col gap-1 md:gap-2 w-[150vw] ml-[-25vw] md:w-[110vw] md:ml-[-5vw] bg-black py-12 md:py-16 animate-auto-zoom">
          
          <div className="flex w-[200vw] md:w-[150vw] animate-scroll-left gap-1 md:gap-2">
            {row1.map((movie, index) => <MarqueeItem key={`r1-${index}`} movie={movie} />)}
            {row1.map((movie, index) => <MarqueeItem key={`r1-dup-${index}`} movie={movie} />)}
          </div>

          <div className="flex w-[200vw] md:w-[150vw] animate-scroll-right gap-1 md:gap-2 ml-[-15vw]">
            {row2.map((movie, index) => <MarqueeItem key={`r2-${index}`} movie={movie} />)}
            {row2.map((movie, index) => <MarqueeItem key={`r2-dup-${index}`} movie={movie} />)}
          </div>

          <div className="flex w-[200vw] md:w-[150vw] animate-scroll-left gap-1 md:gap-2 ml-[-5vw]">
            {row3.map((movie, index) => <MarqueeItem key={`r3-${index}`} movie={movie} />)}
            {row3.map((movie, index) => <MarqueeItem key={`r3-dup-${index}`} movie={movie} />)}
          </div>

          <div className="flex w-[200vw] md:w-[150vw] animate-scroll-right gap-1 md:gap-2 ml-[-20vw]">
            {row4.map((movie, index) => <MarqueeItem key={`r4-${index}`} movie={movie} />)}
            {row4.map((movie, index) => <MarqueeItem key={`r4-dup-${index}`} movie={movie} />)}
          </div>

          <div className="flex w-[200vw] md:w-[150vw] animate-scroll-left gap-1 md:gap-2 ml-[-10vw]">
            {row5.map((movie, index) => <MarqueeItem key={`r5-${index}`} movie={movie} />)}
            {row5.map((movie, index) => <MarqueeItem key={`r5-dup-${index}`} movie={movie} />)}
          </div>

          <div className="flex w-[200vw] md:w-[150vw] animate-scroll-right gap-1 md:gap-2 ml-[-8vw]">
            {row6.map((movie, index) => <MarqueeItem key={`r6-${index}`} movie={movie} />)}
            {row6.map((movie, index) => <MarqueeItem key={`r6-dup-${index}`} movie={movie} />)}
          </div>

        </div>
      </div>

      <div className="flex justify-center mt-12">
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
    <div className="flex-none w-[90px] sm:w-[110px] md:w-[140px] lg:w-[170px] aspect-square relative group overflow-hidden bg-card/20 rounded-sm">
      <Link
        to="/work/$slug"
        params={{ slug: movie.slug.current }}
        className="w-full h-full block"
      >
        {movie.imageUrl ? (
          <img 
            src={movie.imageUrl} 
            alt={movie.title}
            className="w-full h-full object-cover saturate-50 opacity-80 group-hover:saturate-100 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-card flex items-center justify-center"></div>
        )}
      </Link>
    </div>
  );
}
