import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ScrollHighlightText } from "@/components/ScrollHighlightText";
import { bio } from "@/data/portfolio";
import portraitReal from "@/assets/sujith-portrait-real.jpg";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sujith — Sujith Sreedhar" },
      {
        name: "description",
        content: "The professional journey and philosophy of mixing and mastering engineer Sujith Sreedhar.",
      },
    ],
  }),
  component: AboutPage,
});

function InteractivePortrait() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If the user scrolls down more than 150px, change to color
      if (window.scrollY > 150) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial position in case they reload while scrolled down
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden p-2 bg-card/20 group">
      {/* Film Grain Overlay - placed on top of the image to add texture */}
      <div className="grain absolute inset-0 z-10 opacity-40 mix-blend-overlay pointer-events-none" />
      
      <img
        src={portraitReal}
        alt="Portrait of Sujith Sreedhar"
        loading="eager"
        className={`relative z-0 h-full w-full object-cover transition-all duration-[1.5s] scale-[1.12] origin-top md:group-hover:scale-[1.15] ${
          hasScrolled ? "grayscale-0 opacity-100" : "grayscale opacity-70"
        }`}
      />
    </div>
  );
}

function AboutPage() {
  return (
    <div className="pt-32 md:pt-40 pb-24 md:pb-48 min-h-dvh bg-background">
      <section className="mx-auto max-w-[1600px] px-6 md:px-24">
        
        {/* Header Section */}
        <Reveal>
          <div className="border-b border-hairline pb-16 md:pb-24">
            <h1 className="display text-[5rem] md:text-[9rem] leading-[0.8] tracking-tight text-muted-foreground/30">
              Personal
              <br/>
              <span className="text-foreground">History</span>
            </h1>
          </div>
        </Reveal>

        {/* Content Section */}
        <div className="mt-16 md:mt-32 flex flex-col md:flex-row gap-16 md:gap-32 items-start">
          
          <Reveal delay={100} className="w-full md:w-5/12">
            <InteractivePortrait />
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground mt-6 border-b border-hairline pb-4 relative z-10 bg-background">
              CH-03 // Profile & Philosophy
            </p>
          </Reveal>

          <Reveal delay={200} className="w-full md:w-7/12 flex flex-col justify-center pt-0 md:pt-20">
            <ScrollHighlightText 
              text={`"${bio.philosophy}"`}
              className="display text-[2.5rem] md:text-[4.5rem] leading-[0.9] text-foreground"
            />
            
            <div className="mt-16 md:mt-24 md:pl-24 max-w-lg space-y-12 text-sm leading-[2.2] text-muted-foreground font-light relative">
              {/* Subtle accent line */}
              <div className="hidden md:block absolute left-8 top-0 w-px h-full bg-gradient-to-b from-primary/50 to-transparent" />
              
              <p>
                <span className="text-primary font-mono uppercase tracking-widest text-[0.65rem] mr-4">01</span>
                {bio.shortBio}
              </p>
              <p>
                <span className="text-primary font-mono uppercase tracking-widest text-[0.65rem] mr-4">02</span>
                {bio.fullBio}
              </p>
            </div>
          </Reveal>

        </div>
      </section>
    </div>
  );
}
