import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import heroImage from "@/assets/sujith-portrait-real.jpg";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
      <div className="site-container relative z-10">
        <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16 lg:gap-24">
          
          {/* Left Side: Editorial Typography */}
          <Reveal className="max-w-2xl w-full">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="h-px w-8 bg-primary/50"></div>
              <p className="uppercase tracking-[0.2em] text-xs font-medium text-primary/80">Mixing & Mastering</p>
            </div>
            
            <h1 className="text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.9] font-medium tracking-[-0.04em] text-foreground mb-8">
              Sujith
              <br />
              Sreedhar<span className="text-primary">.</span>
            </h1>
            
            <p className="max-w-md text-lg md:text-xl leading-relaxed text-muted-foreground font-light mb-12">
              Sculpting the emotional impact of sound for cinema and music. Based in India, working globally.
            </p>
            
            <div className="flex flex-wrap items-center gap-8">
              <a href="#work" className="group flex items-center gap-3 text-sm font-medium tracking-wide uppercase text-foreground hover:text-primary transition-colors">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-foreground/20 group-hover:border-primary transition-colors">
                  <ArrowDown size={14} className="transition-transform group-hover:translate-y-1" />
                </div>
                Selected Work
              </a>
              <Link to="/about" className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                About Sujith <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>

          {/* Right Side: Elegant Floating Portrait */}
          <Reveal delay={200} className="w-full relative flex justify-center md:justify-end">
            <div className="w-full max-w-[440px] aspect-[4/5] relative [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)] md:[mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)] overflow-hidden rounded-lg">
              {/* Very subtle warm overlay to blend with the light pleasant theme */}
              <div className="absolute inset-0 bg-background/10 mix-blend-overlay z-10 pointer-events-none"></div>
              <img
                src={heroImage}
                alt="Sujith Sreedhar"
                fetchPriority="high"
                className="h-full w-full object-cover object-center saturate-[0.9] contrast-[1.05] transition-transform duration-[2000ms] hover:scale-105"
              />
            </div>
            
            {/* Artistic Stat Badge floating over the fade */}
            <Reveal delay={400} className="absolute bottom-12 left-0 md:bottom-20 md:left-4 z-20">
              <div className="pl-6 border-l-2 border-primary">
                <p className="text-4xl md:text-5xl font-light tracking-tighter text-foreground mb-1 drop-shadow-sm">600+</p>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-primary font-medium">Film Credits</p>
              </div>
            </Reveal>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
