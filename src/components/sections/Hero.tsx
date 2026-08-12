import { Link } from "@tanstack/react-router";
import heroStudio from "@/assets/hero-studio.jpg";

export function Hero() {
  return (
    <section className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-background">
      {/* Edge-to-edge Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="grain absolute inset-0 z-10 opacity-40 mix-blend-overlay" />
        <img
          src={heroStudio}
          alt="Cinematic studio environment"
          fetchPriority="high"
          className="h-full w-full object-cover opacity-30 object-center grayscale-[30%] contrast-125 slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-transparent z-10" />
      </div>

      {/* Massive Typography Centered */}
      <div className="relative z-20 flex w-full flex-col items-center justify-center px-4 text-center">
        <p className="eyebrow text-primary/80 mb-6 tracking-[0.4em] animate-fade-in">
          Audio Engineer / Mixing & Mastering
        </p>
        
        <h1 className="display flex flex-col items-center justify-center tracking-tighter text-[17vw] md:text-[14vw] leading-[0.75] text-foreground">
          <span className="block animate-fade-in [animation-duration:1.5s]">SUJITH</span>
          <span className="block animate-fade-in [animation-delay:200ms] [animation-duration:1.5s] text-primary italic pr-4 md:pr-8">
            SREEDHAR
          </span>
        </h1>

        <div className="mt-16 flex flex-col items-center gap-10 animate-fade-in [animation-delay:600ms]">
          <p className="font-sans text-lg md:text-xl font-light text-muted-foreground max-w-lg text-center leading-relaxed">
            Crafting the sonic landscape of over <span className="text-foreground font-medium">600+</span> feature films.
          </p>
          
          <Link
            to="/filmography"
            className="group relative overflow-hidden border border-primary/30 bg-background/50 px-10 py-5 text-sm uppercase tracking-[0.3em] text-foreground backdrop-blur-sm transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            <span className="relative z-10 flex items-center gap-4">
              Explore The Archive <span className="transition-transform group-hover:translate-x-2">→</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}