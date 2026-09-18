import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import heroImage from "@/assets/sujith-portrait-real.jpg";

export function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-background">
      <div className="site-container">
        <div className="grid items-center gap-12 md:grid-cols-[1.3fr_1fr] md:gap-16 lg:gap-24">
          
          {/* Left Side: Typography */}
          <Reveal className="max-w-2xl w-full">
            <p className="eyebrow mb-6">Mixing & mastering engineer</p>
            <h1 className="text-[clamp(3.5rem,7.5vw,6.5rem)] leading-[0.95] font-normal tracking-[-0.03em] text-foreground">
              Sujith
              <br />
              Sreedhar<span className="text-primary">.</span>
            </h1>
            <p className="mt-8 max-w-sm text-base md:text-lg leading-relaxed text-muted-foreground">
              Shaping the sound behind cinema and music. 
              <br className="hidden sm:block" />
              Based in India, working globally.
            </p>
            
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a href="#work" className="text-link group flex items-center gap-2">
                Selected work <ArrowDown size={15} className="transition-transform group-hover:translate-y-1" aria-hidden="true" />
              </a>
              <Link to="/about" className="inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                About Sujith <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          {/* Right Side: Portrait Placement */}
          <Reveal delay={100} className="w-full">
            <div className="w-full max-w-[400px] mx-auto md:ml-auto md:mr-0 aspect-[4/5] overflow-hidden rounded-2xl bg-muted shadow-xl ring-1 ring-black/5">
              <img
                src={heroImage}
                alt="Sujith Sreedhar"
                fetchPriority="high"
                className="h-full w-full object-cover object-center saturate-[0.9] transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
