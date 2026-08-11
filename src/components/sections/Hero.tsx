import { Link } from "@tanstack/react-router";
import heroStudio from "@/assets/hero-studio.jpg";

export function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col justify-center overflow-hidden bg-background">
      <div className="grain absolute inset-0 md:left-1/3">
        <img
          src={heroStudio}
          alt="Cinematic studio environment"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="slow-zoom h-full w-full object-cover opacity-90 md:opacity-100 mask-image-fade-left"
          style={{ WebkitMaskImage: "linear-gradient(to right, transparent, black 30%)" }}
        />
        <div className="film-fade absolute inset-0 opacity-40 md:opacity-50" />
      </div>
      
      {/* Fallback gradient for smaller screens or where mask isn't perfect */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent md:w-1/2 pointer-events-none" />

      <div className="relative mx-auto w-full max-w-[1600px] px-6 md:px-12 z-10 flex flex-col items-start justify-center h-full pt-32 pb-24 md:pt-40 md:pb-12">
        <div className="max-w-3xl">
          <h1 className="display text-[4rem] leading-[0.85] tracking-tight sm:text-[6rem] md:text-[7rem] lg:text-[8rem]">
            <span className="block animate-fade-in [animation-duration:1.5s] [animation-fill-mode:backwards]">Sujith</span>
            <span className="block animate-fade-in [animation-delay:200ms] [animation-duration:1.5s] [animation-fill-mode:backwards]">
              Sreedhar
            </span>
          </h1>

          <p className="eyebrow mt-10 md:mt-12 text-ember tracking-[0.3em] animate-fade-in [animation-delay:400ms] [animation-duration:1.5s] [animation-fill-mode:backwards]">
            Mixing / Mastering
          </p>

          <p className="display mt-10 md:mt-16 text-xl tracking-wider md:text-2xl text-ash max-w-sm leading-relaxed animate-fade-in [animation-delay:600ms] [animation-duration:1.5s] [animation-fill-mode:backwards]">
            Shaping the sound<br />behind cinema
          </p>

          <div className="mt-12 md:mt-20 flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16 animate-fade-in [animation-delay:800ms] [animation-duration:1.5s] [animation-fill-mode:backwards]">
            <p className="display text-[3rem] text-ember md:text-[4.5rem] leading-none">
              600+<br />
              <span className="text-xl md:text-2xl tracking-[0.4em] text-foreground block mt-2">Films</span>
            </p>

            <div className="hidden md:block w-[1px] h-16 bg-white/10" />

            <Link
              to="/filmography"
              className="group inline-flex items-center gap-4 border border-ember/40 hover:border-ember px-8 py-4 text-[0.7rem] uppercase tracking-[0.24em] text-foreground transition-all hover:bg-ember hover:text-background mt-4 md:mt-0"
            >
              Explore Archive <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-0 right-0 flex justify-center w-full animate-fade-in [animation-delay:1200ms] [animation-duration:1.5s] [animation-fill-mode:backwards]">
          <span className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground flex flex-col items-center gap-4">
            Scroll to explore
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-50">
              <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
}