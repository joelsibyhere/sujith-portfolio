import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Headphones } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import studioDrums from "@/assets/studio-drums-real.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sujith Sreedhar — Mixing & Mastering Engineer | 600+ Films" },
      {
        name: "description",
        content:
          "Mixing and mastering engineer Sujith Sreedhar. Shaping the sound behind cinema and music across more than 600 films.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <ListenTeaser />
      <MinimalConnect />
    </>
  );
}

import { Magnetic } from "@/components/Magnetic";

function MinimalConnect() {
  return (
    <section className="border-y border-border bg-card py-16 md:py-20">
      <Reveal className="site-container flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div>
          <p className="eyebrow mb-4">Project enquiries</p>
          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight">
            Work with Sujith<span className="text-primary">.</span>
          </h2>
        </div>
        <Magnetic>
          <Link to="/connect" className="button-primary">
            Start a project <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </Magnetic>
      </Reveal>
    </section>
  );
}

function ListenTeaser() {
  return (
    <section id="listen" className="relative py-20 md:py-32 overflow-hidden bg-background">
      
      {/* Background Image Blended into Pastel Green */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={studioDrums} 
          alt="" 
          loading="lazy"
          className="h-full w-full object-cover opacity-[0.06] mix-blend-multiply saturate-0"
        />
      </div>

      <div className="site-container relative z-10">
        <Reveal className="mb-10">
          <p className="eyebrow mb-3">Mixed / mastered</p>
          <h2 className="section-title">Listen</h2>
        </Reveal>
        
        <div className="grid items-center gap-10 md:grid-cols-[1.5fr_1fr] md:gap-20 lg:gap-28">
          <div className="min-w-0">
            <iframe
              title="Listen to Sujith Sreedhar's mixing and mastering playlist on Spotify"
              src="https://open.spotify.com/embed/playlist/4G9wC9KC30GurP2Ndn9jyS?utm_source=generator"
              width="100%"
              height="352"
              allowFullScreen={false}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="block rounded-xl border-0 bg-card shadow-lg"
            />
          </div>
          
          <Reveal delay={100}>
            <Headphones
              size={26}
              strokeWidth={1.3}
              aria-hidden="true"
              className="mb-6 text-primary"
            />
            <p className="max-w-sm text-lg md:text-xl leading-relaxed tracking-[-0.015em] text-foreground">
              A curated selection of songs and projects I've mixed and mastered.
            </p>
            <a
              href="https://open.spotify.com/playlist/4G9wC9KC30GurP2Ndn9jyS"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 text-link inline-flex items-center gap-2"
            >
              Listen on Spotify <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
