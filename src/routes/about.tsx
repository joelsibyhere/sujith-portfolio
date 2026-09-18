import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { bio } from "@/data/portfolio";
import portraitAbout from "@/assets/sujith-portrait-real.jpg";
import image2 from "@/assets/about.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sujith — Sujith Sreedhar" },
      {
        name: "description",
        content:
          "The professional journey and philosophy of mixing and mastering engineer Sujith Sreedhar.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-dvh bg-background text-foreground">
      
      {/* LEFT: Sticky Full-Height Image */}
      <div className="w-full lg:w-[45%] relative z-0">
        <div className="lg:sticky lg:top-0 h-[60vh] lg:h-screen w-full overflow-hidden">
          <img 
            src={portraitAbout} 
            alt="Sujith Portrait" 
            className="w-full h-full object-cover object-top grayscale opacity-90"
          />
        </div>
      </div>

      {/* RIGHT: Scrolling Text Column */}
      <div className="w-full lg:w-[55%] px-8 py-20 lg:px-20 lg:py-40 flex flex-col justify-center relative z-10">
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-16">Biography</h1>
          
          <div className="prose prose-lg md:prose-xl max-w-2xl text-muted-foreground leading-relaxed">
            
            {/* Philosophy Quote - Now Professional */}
            <p className="text-foreground font-medium text-xl md:text-2xl leading-relaxed mb-16 border-l-[3px] border-primary pl-8">
              "{bio.philosophy}"
            </p>
            
            {/* Short Bio Intro */}
            <p className="mb-16 font-medium text-foreground text-xl md:text-2xl tracking-tight">
              {bio.shortBio}
            </p>

            {/* Embedded Second Image */}
            <div className="w-full mb-16 overflow-hidden bg-card">
              <img 
                src={image2} 
                alt="Sujith in studio" 
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            {/* Full Bio Text */}
            <p className="mb-8">
              {bio.fullBio}
            </p>
            
            <p>
              His talent is unique, having graced massive blockbuster releases and critically acclaimed independent cinema alike. His ear for sound has helped earn numerous accolades for the films he has touched. Firmly secured in his role as one of the most in-demand mixing engineers in the industry today, Sujith treats every mix as if it is his last and never takes anything for granted.
            </p>
            
          </div>
        </Reveal>
      </div>

    </div>
  );
}
