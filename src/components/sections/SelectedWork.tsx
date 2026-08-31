import { Link } from "@tanstack/react-router";
import { useRef } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useMovies } from "@/sanity/useMovies";

export function SelectedWork() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { data: movies = [] } = useMovies();
  const selectedWork = movies.slice(0, 8); // Grab latest 8 movies for the carousel

  const scrollContainer = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 600 : 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-[#050505] py-24 md:py-32 border-b border-hairline overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <Reveal>
          {/* Header Area */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="display text-4xl md:text-5xl text-white tracking-wide mb-3">
                SELECTED WORK
              </h2>
              <p className="text-primary text-[0.8rem] font-sans">A few recent highlights</p>
            </div>
            
            <Link
              to="/filmography"
              className="text-primary text-[0.65rem] uppercase font-mono tracking-[0.2em] transition-colors hover:text-white pb-1"
            >
              VIEW ALL WORK →
            </Link>
          </div>

          {/* Horizontal Carousel Container */}
          <div className="relative group">
            {/* Left Floating Arrow */}
            <button 
              onClick={() => scrollContainer('left')}
              className="absolute left-2 md:left-4 top-[40%] -translate-y-1/2 w-12 h-12 bg-black/60 backdrop-blur-md rounded-full border border-white/10 hidden md:flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-black z-10 shadow-2xl"
              aria-label="Scroll Left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            {/* Right Floating Arrow */}
            <button 
              onClick={() => scrollContainer('right')}
              className="absolute right-2 md:right-4 top-[40%] -translate-y-1/2 w-12 h-12 bg-black/60 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center text-white opacity-80 md:opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-black z-10 shadow-2xl animate-pulse md:animate-none"
              aria-label="Scroll Right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>

            <div 
              ref={scrollRef}
              className="flex overflow-x-auto gap-6 pb-12 pt-4 snap-x snap-mandatory hide-scrollbar scroll-smooth relative z-0" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {selectedWork.map((project: any) => {
                const slug = project.slug?.current || project.slug;
                return (
                  <Link 
                    key={slug} 
                    to="/work/$slug" 
                    params={{ slug }} 
                    className="flex-none w-[70vw] md:w-[280px] lg:w-[320px] snap-start flex flex-col gap-5 group/card block"
                  >
                  {/* Poster Image */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-card/20 shadow-2xl">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-colors group-hover/card:bg-transparent" />
                  </div>
                  
                  {/* Text Below */}
                  <div className="flex flex-col gap-1">
                    <h3 className="font-sans text-[1.1rem] font-medium tracking-wide text-white group-hover/card:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-sans text-[0.85rem] text-zinc-500">
                      {project.year}
                    </p>
                  </div>
                </Link>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}