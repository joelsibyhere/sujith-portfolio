import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Play, X } from "lucide-react";
import drumsReal from "@/assets/sujith-drums.jpg";

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

function MinimalConnect() {
  return (
    <section className="bg-background py-24 flex flex-col items-center justify-center text-center border-t border-hairline">
      <Reveal>
        <h2 className="display text-[3rem] md:text-[5rem] tracking-tight text-foreground">
          WORK WITH<br /><span className="italic text-primary">SUJITH</span>
        </h2>
        
        <div className="mt-12">
          <Link
            to="/connect"
            className="group inline-flex items-center justify-center bg-foreground px-10 py-4 text-[0.7rem] uppercase font-mono tracking-[0.3em] text-background transition-transform hover:scale-105 hover:bg-primary"
          >
            Start a Project →
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

function ListenTeaser() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 md:py-32 border-b border-hairline">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={drumsReal}
          alt="Studio Background"
          loading="lazy"
          className="h-full w-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#050505] via-[#050505]/80 to-[#050505]/30" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12">
        <Reveal>
          {/* Header */}
          <div className="mb-12">
            <h2 className="display text-4xl md:text-5xl text-white tracking-wide mb-3">LISTEN</h2>
            <p className="text-primary text-[0.7rem] uppercase tracking-[0.2em] font-mono">Mixed / Mastered</p>
          </div>

          {/* Content Grid */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
            {/* Left: Spotify Embed */}
            <div className="w-full md:w-3/5">
              <iframe
                src="https://open.spotify.com/embed/playlist/4G9wC9KC30GurP2Ndn9jyS?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen={false}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-xl shadow-2xl bg-black"
                style={{ borderRadius: '12px' }}
              />
            </div>

            {/* Right: Text and Button */}
            <div className="w-full md:w-2/5 flex flex-col items-start">
              <p className="text-zinc-400 text-[1.05rem] font-light leading-relaxed mb-8 max-w-sm">
                A selection of songs and projects I've mixed and mastered.
              </p>
              <a 
                href="https://open.spotify.com/playlist/4G9wC9KC30GurP2Ndn9jyS"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary px-8 py-4 text-[0.65rem] uppercase font-mono tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-black"
              >
                VIEW ON SPOTIFY
              </a>
            </div>
          </div>

          {/* Bottom Link */}
          <div className="mt-16">
            <a href="#" className="text-primary text-[0.65rem] uppercase font-mono tracking-[0.2em] transition-colors hover:text-white">
              MORE ON SOUNDCLOUD →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
