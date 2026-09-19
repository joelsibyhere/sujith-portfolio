import { Reveal } from "@/components/Reveal";
import { Link } from "@tanstack/react-router";
import studioImage from "@/assets/sujith-hero.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full bg-background flex flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden border-b border-border">
      
      {/* Background Studio Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 35%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 35%, black 100%)'
          }}
        >
          <img 
            src={studioImage} 
            alt="Studio Console" 
            className="w-full h-full object-cover object-center opacity-90 contrast-[1.1] saturate-50"
          />
        </div>
        {/* Additional gradient to ensure text readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto relative z-10 pt-24 lg:pt-0">
        
        {/* The Original Approved Layout Structure */}
        <div className="flex flex-col justify-center max-w-2xl">
          <Reveal>
            <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.95] font-display font-medium tracking-tight text-foreground mb-8 pt-8 pb-2 -mt-8">
              Sujith
              <br />
              Sreedhar
            </h1>
            
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-semibold text-foreground mb-10 flex items-center gap-4 opacity-80">
              <span className="w-12 h-px bg-foreground/40"></span>
              Mixing / Mastering
            </p>
            
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-serif italic mb-12 max-w-md">
              Shaping the sound behind cinema...
            </p>
            
            <div className="mb-12">
              <h2 className="text-5xl md:text-6xl font-display font-medium text-foreground">
                600+
              </h2>
              <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-muted-foreground mt-2">
                F I L M S
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="#work" 
                className="border border-foreground/20 px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-bold backdrop-blur-sm hover:bg-foreground hover:text-background hover:scale-[1.02] transition-all duration-400 flex items-center gap-3 group"
              >
                Explore Archive 
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </div>
          </Reveal>
        </div>

      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hidden md:flex">
        <p className="text-[8px] uppercase tracking-[0.3em] font-medium">Scroll to explore</p>
        <div className="w-px h-6 bg-foreground"></div>
      </div>

    </section>
  );
}
