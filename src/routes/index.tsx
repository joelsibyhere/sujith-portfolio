import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Play, X } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import listenTexture from "@/assets/listen-texture.jpg";
import mridangam from "@/assets/mridanagam.webp";
import heroStudio from "@/assets/hero-studio.jpg";
import portraitAbout from "@/assets/portrait-about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sujith Sreedhar — Mixing & Mastering Engineer | 600+ Films" },
      {
        name: "description",
        content:
          "Mixing and mastering engineer Sujith Sreedhar. Shaping the sound behind cinema and music across more than 600 films.",
      },
      { property: "og:title", content: "Sujith Sreedhar — Mixing & Mastering Engineer" },
      {
        property: "og:description",
        content: "Shaping the sound behind cinema and music across 600+ films.",
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
      <BeyondTheCredits />
      <AboutTeaser />
      <ConnectTeaser />
    </>
  );
}

function ListenTeaser() {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isPlayerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isPlayerOpen]);

  return (
    <section className="relative overflow-hidden border-b border-hairline bg-[#0a0a0a]">
      <div className="absolute inset-0">
        <img
          src={listenTexture}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-full w-full object-cover opacity-5 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12 py-24 md:py-36 flex flex-col items-center">
        <Reveal className="text-center w-full max-w-4xl">
          <div className="flex flex-col items-center justify-center gap-6">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.4em] text-ember/80 border border-ember/20 px-4 py-1">
              CH-01 // Audio
            </p>
            <h2 className="display text-[3.5rem] leading-none md:text-[6rem] tracking-[0.1em] text-zinc-100">
              ANALOG SOUND
            </h2>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground max-w-md mx-auto leading-loose">
              Technical precision meets emotional intent. Scroll through and listen to a selection of mastered tracks.
            </p>
          </div>
        </Reveal>
        
        <Reveal delay={140} className="w-full mt-16 relative">
          {/* Glowing Audio Spectrum Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] -z-10 overflow-hidden opacity-30 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ember rounded-full mix-blend-screen filter blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff2a00] rounded-full mix-blend-screen filter blur-[120px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-gradient-to-r from-transparent via-[#ff8800] to-transparent mix-blend-screen filter blur-[80px]" />
          </div>

          <div className="flex flex-col items-center justify-center gap-12 relative z-10">
            
            {/* Descriptive Text / Call to Action */}
            <div className="w-full text-center max-w-2xl mx-auto">
              <h3 className="display text-4xl md:text-6xl text-white mb-6">
                Curated Masterpieces.
              </h3>
              <p className="text-zinc-400 font-light leading-relaxed mb-10">
                Experience a hand-picked selection of tracks mixed and mastered by Sujith. From intimate acoustic pieces to massive cinematic anthems, explore the sonic range.
              </p>
              
              <button
                onClick={() => setIsPlayerOpen(true)}
                className="group relative inline-flex items-center gap-6 bg-white/5 border border-white/10 pl-4 pr-8 py-4 text-xs uppercase font-mono tracking-[0.2em] text-white transition-all hover:bg-white hover:text-black hover:border-white rounded-full shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              >
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                  <Play size={16} className="ml-1" fill="currentColor" />
                </div>
                Listen to the Mixes
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Full-Screen Music Player Modal */}
      {isPlayerOpen && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-3xl p-4 md:p-8 animate-in fade-in duration-300">
          {/* Close Button */}
          <button 
            onClick={() => setIsPlayerOpen(false)}
            className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all z-[10000]"
            aria-label="Close player"
          >
            <X size={24} />
          </button>

          {/* Modal Content */}
          <div className="relative w-full max-w-4xl h-[85vh] md:h-[80vh] bg-[#121212] rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/10 flex flex-col animate-in zoom-in-95 duration-500">
            {/* Header */}
            <div className="px-8 py-6 border-b border-white/5 flex items-center gap-4 shrink-0 bg-black/40">
               <div className="w-3 h-3 rounded-full bg-ember animate-pulse" />
               <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">Now Playing // Selected Works</span>
            </div>
            
            {/* Spotify Player */}
            <div className="flex-1 w-full bg-[#121212]">
              <iframe
                title="Selected work playlist"
                src="https://open.spotify.com/embed/playlist/4G9wC9KC30GurP2Ndn9jyS?theme=0"
                width="100%"
                height="100%"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                className="w-full h-full border-none bg-transparent"
              />
            </div>
          </div>
        </div>,
        document.body
      )}

    </section>
  );
}

function BeyondTheCredits() {
  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden border-b border-hairline bg-background">
      <div className="absolute inset-0">
        <img
          src={mridangam}
          alt="Mridangam instrument"
          loading="lazy"
          className="h-full w-full object-cover opacity-40 grayscale"
        />
        {/* Deep cinematic vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background/60 to-background pointer-events-none" />
      </div>

      <div className="relative mx-auto w-full max-w-[1600px] px-6 md:px-12 z-10">
        <Reveal delay={140} className="max-w-4xl mx-auto text-center">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.4em] text-ash mb-8">
            CH-02 // Heritage
          </p>
          <h2 className="display text-[4rem] leading-[0.85] md:text-[6.5rem] tracking-tight">
            Beyond the credits,<br />
            <span className="italic text-zinc-400">there is sound.</span>
          </h2>
          <p className="mt-12 text-lg md:text-xl leading-relaxed text-zinc-400 max-w-2xl mx-auto font-light">
            Every note, every silence, every layer—carefully shaped to serve the story. This is where music meets emotion and becomes unforgettable.
          </p>
          <div className="mt-16">
            <Link
              to="/about"
              className="group inline-flex items-center gap-4 border border-ember px-8 py-4 text-[0.7rem] uppercase tracking-[0.24em] text-ember transition-colors hover:bg-ember hover:text-background"
            >
              Discover the journey <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AboutTeaser() {
  return (
    <section className="hairline border-b border-hairline bg-background">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-40">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
          <Reveal className="md:w-5/12 w-full">
            <div className="grain relative aspect-[3/4] w-full max-w-md mx-auto md:mx-0 overflow-hidden border border-hairline p-2 bg-card/20">
              <img
                src={portraitAbout}
                alt="Sujith portrait"
                loading="lazy"
                className="h-full w-full object-cover grayscale opacity-90 transition-transform duration-[2s] hover:scale-105"
              />
            </div>
            <p className="mt-6 text-[0.6rem] font-mono uppercase tracking-[0.2em] text-ash text-center md:text-left max-w-md mx-auto md:mx-0">
              CH-03 // Sujith Sreedhar — Portrait
            </p>
          </Reveal>

          <Reveal delay={140} className="md:w-7/12 w-full md:pt-16 flex flex-col justify-center">
            <h2 className="display text-[3.5rem] leading-[0.9] md:text-[5.5rem] tracking-tight">
              The person <br className="hidden md:block" />behind the sound.
            </h2>
            <div className="mt-12 max-w-lg ml-0 md:ml-12 border-l border-ember/30 pl-8">
              <p className="text-sm leading-loose text-muted-foreground">
                A sound engineer, musician and studio professional with a passion for detail and a commitment to the emotion behind every story.
              </p>
              <p className="mt-6 text-sm leading-loose text-muted-foreground">
                With a deep understanding of cinematic audio architecture, Sujith brings a meticulous approach to the mixing console, ensuring that every project resonates with its intended emotional weight.
              </p>
              <div className="mt-10">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-4 text-[0.65rem] font-mono uppercase tracking-[0.24em] text-foreground transition-colors hover:text-ember"
                >
                  Read Full Biography <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ConnectTeaser() {
  return (
    <section className="bg-black py-32 md:py-56 flex flex-col items-center justify-center text-center">
      <Reveal>
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.4em] text-ash mb-12">
          CH-04 // Start a Project
        </p>
        <h2 className="display text-[4rem] leading-[0.9] md:text-[7.5rem] tracking-tight text-white">
          WORK WITH<br />SUJITH
        </h2>
        
        <div className="mt-20 flex justify-center">
          <Link
            to="/connect"
            className="group inline-flex items-center justify-center bg-ember px-12 py-5 text-[0.75rem] uppercase tracking-[0.3em] text-black transition-transform hover:scale-105"
          >
            Enquire for Mixing →
          </Link>
        </div>
        
        <p className="mt-16 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-zinc-600">
          Email // <a href="mailto:hello@sujithsreedhar.com" className="text-zinc-400 hover:text-white transition-colors">hello@sujithsreedhar.com</a>
        </p>
      </Reveal>
    </section>
  );
}
