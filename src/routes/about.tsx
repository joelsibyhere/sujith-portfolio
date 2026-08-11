import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { bio } from "@/data/portfolio";
import portraitAbout from "@/assets/portrait-about.jpg";

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

function AboutPage() {
  return (
    <div className="pt-32 md:pt-40 pb-24 md:pb-48 min-h-dvh bg-background">
      <section className="mx-auto max-w-[1600px] px-6 md:px-24">
        
        {/* Header Section */}
        <Reveal>
          <div className="border-b border-hairline/50 pb-16 md:pb-24">
            <h1 className="display text-[5rem] md:text-[9rem] leading-[0.8] tracking-tight text-zinc-800">
              Personal
              <br/>
              <span className="text-foreground">History</span>
            </h1>
          </div>
        </Reveal>

        {/* Content Section */}
        <div className="mt-16 md:mt-32 flex flex-col md:flex-row gap-16 md:gap-32 items-start">
          
          <Reveal delay={100} className="w-full md:w-5/12">
            <div className="grain relative aspect-[4/5] w-full overflow-hidden p-2 bg-[#0a0a0a]">
              <img
                src={portraitAbout}
                alt="Portrait of Sujith Sreedhar"
                loading="eager"
                className="h-full w-full object-cover grayscale opacity-80"
              />
            </div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-zinc-500 mt-6 border-b border-hairline/50 pb-4">
              CH-03 // Profile & Philosophy
            </p>
          </Reveal>

          <Reveal delay={200} className="w-full md:w-7/12 flex flex-col justify-center pt-0 md:pt-20">
            <h2 className="display text-[2.5rem] md:text-[4.5rem] leading-[0.9] text-zinc-200">
              "{bio.philosophy}"
            </h2>
            
            <div className="mt-16 md:mt-24 md:pl-24 max-w-lg space-y-12 text-sm leading-[2.2] text-zinc-400 font-light relative">
              {/* Subtle accent line */}
              <div className="hidden md:block absolute left-8 top-0 w-px h-full bg-gradient-to-b from-ember/50 to-transparent" />
              
              <p>
                <span className="text-ember font-mono uppercase tracking-widest text-[0.65rem] mr-4">01</span>
                {bio.shortBio}
              </p>
              <p>
                <span className="text-ember font-mono uppercase tracking-widest text-[0.65rem] mr-4">02</span>
                {bio.fullBio}
              </p>
            </div>
          </Reveal>

        </div>
      </section>
    </div>
  );
}
