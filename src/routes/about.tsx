import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { bio, social } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";
import portraitAbout from "@/assets/about.jpeg";

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
    <div className="min-h-dvh pt-44 pb-20 md:pt-44 md:pb-28">
      <div className="site-container">
        <Reveal className="mb-12 border-b border-border pb-10">
          <p className="eyebrow mb-5">The person behind the sound</p>
          <h1 className="text-5xl font-normal tracking-[-0.055em] md:text-6xl">About Sujith</h1>
        </Reveal>
        <div className="grid items-start gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20 lg:gap-28">
          <Reveal className="mx-auto w-full max-w-sm">
            <div className="aspect-[4/5] overflow-hidden rounded-[3px] bg-muted">
              <img
                src={portraitAbout}
                alt="Sujith Sreedhar at his studio"
                className="h-full w-full object-cover saturate-[0.75] transition-transform duration-700 hover:scale-105"
              />
            </div>
            <a
              href={social.studio_instagram}
              target="_blank"
              rel="noreferrer"
              className="text-link mt-4 w-full text-muted-foreground"
            >
              2 Bar Q Studios <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </Reveal>
          <Reveal delay={100} className="md:pt-2">
            <p className="text-2xl leading-relaxed tracking-[-0.035em] md:text-3xl">
              {bio.shortBio}
            </p>
            <p className="mt-8 text-base leading-8 text-muted-foreground">{bio.fullBio}</p>
            <blockquote className="mt-10 border-t border-border pt-8 text-lg leading-8 tracking-[-0.02em]">
              “{bio.philosophy}”
            </blockquote>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
