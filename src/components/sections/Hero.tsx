import { Reveal } from "@/components/Reveal";
import { Link } from "@tanstack/react-router";
import studioImage from "@/assets/studio-console-real.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full bg-background flex flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden border-b border-border">
      
      {/* Blended Background Image */}
      <div 
        className="absolute inset-0 md:left-auto md:right-0 md:w-[70%] lg:w-[60%] z-0 pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 60%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 60%, black 100%)'
        }}
      >
        <img 
          src={studioImage} 
          alt="Studio" 
          className="w-full h-full object-cover object-[center_right] md:object-[right_center] grayscale opacity-10 md:opacity-15"
        />
      </div>

      <div className="w-full max-w-[1400px] mx-auto relative z-10 pt-24 lg:pt-0">
        
        {/* Typography */}
        <div className="flex flex-col justify-center">
          <Reveal>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-semibold text-muted-foreground mb-8">
              Mixing / Mastering Engineer
            </p>
            
            <h1 className="text-[clamp(4rem,9vw,9rem)] leading-[0.9] font-display font-medium tracking-tighter text-foreground mb-12 relative left-[-4px]">
              Sujith
              <br />
              Sreedhar
            </h1>
            
            <div className="flex flex-col sm:flex-row sm:items-end gap-10 md:gap-16">
              <p className="text-xs leading-[1.8] text-muted-foreground font-medium max-w-[300px] tracking-[0.1em] uppercase">
                Uncompromising audio post-production. Shaping the sound behind cinema across more than 600 films globally.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-semibold mt-6 sm:mt-0">
                <a 
                  href="#work" 
                  className="border border-foreground/20 px-6 py-3 md:px-8 md:py-4 hover:bg-foreground hover:text-background transition-colors duration-400"
                >
                  Selected Works
                </a>
                <Link 
                  to="/connect" 
                  className="border border-foreground/20 px-6 py-3 md:px-8 md:py-4 hover:bg-foreground hover:text-background transition-colors duration-400"
                >
                  Contact Studio
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-12 left-6 md:left-16 lg:left-24 flex items-center gap-4 opacity-30 hidden md:flex">
        <div className="w-12 h-px bg-foreground"></div>
        <p className="text-[9px] uppercase tracking-[0.3em] font-medium">Scroll to explore</p>
      </div>

    </section>
  );
}
