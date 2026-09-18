import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import heroImage from "@/assets/sujith-portrait-real.jpg";

export function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
      <div className="site-container">
        
        {/* The Professional "Bento Box" Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[minmax(250px,auto)_minmax(200px,auto)] gap-4 md:gap-6">
          
          {/* 1. Name & Title Box (Spans 2 columns) */}
          <Reveal className="md:col-span-2 md:row-span-1 bg-card rounded-3xl p-8 md:p-12 border border-border flex flex-col justify-end shadow-sm">
            <p className="eyebrow mb-4">Mixing & Mastering Engineer</p>
            <h1 className="text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] font-normal tracking-[-0.03em] text-foreground">
              Sujith Sreedhar<span className="text-primary">.</span>
            </h1>
          </Reveal>

          {/* 2. Portrait Box (Spans 1 col, 2 rows) */}
          <Reveal delay={100} className="md:col-span-1 md:row-span-2 relative rounded-3xl overflow-hidden bg-muted border border-border shadow-sm min-h-[350px] md:min-h-0">
            <img 
              src={heroImage} 
              alt="Sujith Sreedhar" 
              fetchPriority="high"
              className="absolute inset-0 w-full h-full object-cover object-center saturate-[0.9] transition-transform duration-1000 hover:scale-105" 
            />
          </Reveal>

          {/* 3. Stats Box (Spans 1 col) */}
          <Reveal delay={150} className="md:col-span-1 md:row-span-1 bg-primary text-primary-foreground rounded-3xl p-8 md:p-10 border border-border flex flex-col justify-between shadow-sm">
            <span className="text-6xl md:text-7xl font-light tracking-[-0.05em]">600+</span>
            <span className="uppercase tracking-[0.15em] text-xs font-medium opacity-80 mt-4">Film & Music Credits</span>
          </Reveal>

          {/* 4. Bio & Action Box (Spans 1 col) */}
          <Reveal delay={200} className="md:col-span-1 md:row-span-1 bg-card rounded-3xl p-8 md:p-10 border border-border flex flex-col justify-between shadow-sm">
            <p className="text-base text-muted-foreground leading-relaxed">
              Shaping the sound behind cinema and music. Based in India, working globally.
            </p>
            <Link to="/about" className="text-link group flex items-center gap-2 mt-6 w-fit text-foreground">
              About Sujith <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
