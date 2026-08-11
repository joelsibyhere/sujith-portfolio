import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { selectedWork } from "@/data/portfolio";
import { useEffect, useRef } from "react";

export function SelectedWork() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="hairline border-b border-hairline bg-background">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-32 overflow-hidden">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-b border-hairline pb-8">
          <div>
            <h2 className="display text-[2.5rem] md:text-[3.5rem] leading-none">Selected Work</h2>
            <p className="eyebrow mt-4 text-ember">Scroll to explore the gallery</p>
          </div>
          <Link
            to="/filmography"
            className="link-underline inline-block text-[0.65rem] uppercase tracking-[0.24em] text-foreground hover:text-ember shrink-0"
          >
            Search full archive →
          </Link>
        </Reveal>

        <div 
          ref={scrollRef}
          className="mt-12 flex overflow-x-auto gap-6 md:gap-8 hide-scrollbar pb-8 pt-4"
        >
          {selectedWork.map((project, i) => (
            <div key={project.slug} className="w-[75%] md:w-[22%] shrink-0">
              <Reveal delay={i * 100} className="group h-full">
                <Link to="/work/$slug" params={{ slug: project.slug }} className="block">
                  <div className="grain relative aspect-[2/3] overflow-hidden border border-hairline bg-card/20">
                    <img
                      src={project.artwork}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover opacity-80 transition-[transform,opacity] duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
                  </div>
                  <div className="mt-6 flex flex-col gap-1">
                    <h3 className="display text-lg md:text-xl transition-colors duration-300 group-hover:text-ember whitespace-nowrap overflow-hidden text-ellipsis">
                      {project.title}
                    </h3>
                    <p className="text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">
                      {project.year}
                    </p>
                  </div>
                </Link>
              </Reveal>
            </div>
          ))}
        </div>

        {/* Cinematic progress bar detail mimicking the prototype */}
        <div className="mt-8 hidden md:flex items-center gap-6">
          <div className="relative h-px w-full max-w-[200px] bg-hairline overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-1/3 bg-ember" />
          </div>
          <div className="flex items-center gap-3 opacity-50">
            <div className="h-3 w-px bg-foreground" />
            <div className="h-2 w-px bg-muted-foreground" />
            <div className="h-2 w-px bg-muted-foreground" />
            <div className="h-2 w-px bg-muted-foreground" />
            <div className="h-3 w-px bg-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}