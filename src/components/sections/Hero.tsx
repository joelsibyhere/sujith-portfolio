import { Link } from "@tanstack/react-router";
import { useState, useRef, MouseEvent } from "react";
import heroStudio from "@/assets/studio-console-real.jpg";

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Calculate mouse position as a percentage (-0.5 to 0.5)
    const x = (clientX / innerWidth) - 0.5;
    const y = (clientY / innerHeight) - 0.5;
    
    setMousePos({ x, y });
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-dvh w-full items-center overflow-hidden bg-[#050505] pt-24"
    >
      {/* Edge-to-edge Cinematic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        
        {/* Parallax Image */}
        <div 
          className="absolute inset-[-5%] h-[110%] w-[110%] transition-transform duration-[100ms] ease-out"
          style={{
            transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)`,
          }}
        >
          <img
            src={heroStudio}
            alt="Cinematic studio console"
            fetchPriority="high"
            className="h-full w-full object-cover opacity-50 object-center contrast-125 slow-zoom"
          />
        </div>

        {/* Heavy left-side gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50 z-10" />
      </div>

      {/* Left-Aligned Editorial Content */}
      <div className="relative z-30 flex w-full flex-col items-start px-8 md:px-24 lg:px-32 max-w-[1600px] mx-auto">
        
        {/* Massive Serif Title */}
        <h1 className="display flex flex-col tracking-tight text-[4.5rem] md:text-[8rem] lg:text-[10rem] leading-[0.85] text-zinc-100 mb-10">
          <span className="block animate-fade-in [animation-duration:1s]">Sujith</span>
          <span className="block animate-fade-in [animation-delay:200ms] [animation-duration:1s]">
            Sreedhar
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-mono text-[0.65rem] md:text-xs font-bold uppercase tracking-[0.3em] text-primary mb-12 animate-fade-in [animation-delay:400ms]">
          MIXING / MASTERING
        </p>
        
        {/* Editorial Body */}
        <p className="display text-2xl md:text-4xl text-zinc-400 max-w-md leading-snug animate-fade-in [animation-delay:600ms]">
          Shaping the sound<br />behind cinema
        </p>

        {/* Stats Section */}
        <div className="mt-16 animate-fade-in [animation-delay:800ms]">
          <div className="display text-[5rem] md:text-[6rem] leading-none text-primary/90">
            600+
          </div>
          <div className="font-serif tracking-[0.5em] text-zinc-300 uppercase text-sm md:text-base mt-2 ml-1">
            F i l m s
          </div>
        </div>
          
        {/* CTA Button */}
        <Link
          to="/filmography"
          className="mt-16 group relative overflow-hidden border border-primary/40 bg-[#050505]/60 px-10 py-5 text-[0.65rem] md:text-xs uppercase tracking-[0.3em] text-zinc-200 backdrop-blur-sm transition-all hover:border-primary hover:text-white animate-fade-in [animation-delay:1000ms]"
        >
          <span className="relative z-10 flex items-center gap-4">
            EXPLORE ARCHIVE <span className="transition-transform group-hover:translate-x-2">→</span>
          </span>
        </Link>
      </div>

      {/* Scroll indicator (Mobile & Desktop) */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex flex-col items-center gap-3 opacity-60 animate-fade-in [animation-delay:1200ms]">
        <span className="font-mono text-[0.5rem] md:text-[0.6rem] tracking-[0.3em] uppercase text-zinc-400">
          Scroll to explore
        </span>
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-500 animate-bounce">
          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}