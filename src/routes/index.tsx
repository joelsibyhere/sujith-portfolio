import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Play, X } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import listenTexture from "@/assets/listen-texture.jpg";
import mridangam from "@/assets/mridanagam.webp";
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
      <ServicesSection />
      <SelectedWork />
      <StudioGearSection />
      <ListenTeaser />
      <BeyondTheCredits />
      <AboutTeaser />
      <ConnectTeaser />
    </>
  );
}

function ServicesSection() {
  const services = [
    { title: "Dolby Atmos", desc: "Immersive spatial audio mixing for cinema and streaming platforms." },
    { title: "Stereo Mixing", desc: "Rich, analog-summed stereo mixes with deep dynamic range." },
    { title: "Mastering", desc: "The final polish. Broadcast-ready loudness without sacrificing musicality." },
    { title: "Score Mixing", desc: "Balancing massive orchestral arrangements with intimate solo instruments." }
  ];

  return (
    <section className="bg-background py-20 md:py-32 border-b border-hairline">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {services.map((s, i) => (
              <div key={i} className="flex flex-col gap-4 border-l border-primary/20 pl-6">
                <span className="font-mono text-[0.65rem] text-primary tracking-widest">0{i+1}</span>
                <h3 className="text-2xl font-light text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed pr-4">{s.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StudioGearSection() {
  return (
    <section className="bg-background py-32 md:py-48 border-b border-hairline relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none opacity-50" />
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 relative z-10">
        <Reveal>
          <div className="flex flex-col md:flex-row gap-16 md:gap-32">
            <div className="md:w-1/3">
               <h2 className="display text-5xl md:text-7xl text-foreground mb-6 leading-none">The Signal<br/><span className="text-primary italic">Chain.</span></h2>
               <p className="text-muted-foreground font-light leading-relaxed max-w-sm">
                 Uncompromising analog warmth meets digital precision. The studio is built around industry-standard hardware to ensure every mix breathes with depth and clarity.
               </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8">
              <div>
                <h4 className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-primary mb-6 border-b border-hairline pb-4">Monitoring</h4>
                <ul className="text-sm text-foreground/80 space-y-3 font-mono">
                  <li>PMC MB3-XBD-A</li>
                  <li>Genelec 8351B (Atmos)</li>
                  <li>Trinnov Altitude 32</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-primary mb-6 border-b border-hairline pb-4">Analog Outboard</h4>
                <ul className="text-sm text-foreground/80 space-y-3 font-mono">
                  <li>SSL Fusion</li>
                  <li>Shadow Hills Mastering</li>
                  <li>Tube-Tech CL 1B</li>
                  <li>Neve 33609</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-primary mb-6 border-b border-hairline pb-4">Conversion & DAW</h4>
                <ul className="text-sm text-foreground/80 space-y-3 font-mono">
                  <li>Burl Audio B80 Mothership</li>
                  <li>Lynx Aurora(n)</li>
                  <li>Pro Tools HDX</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ListenTeaser() {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

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
    <section className="relative overflow-hidden border-b border-hairline bg-[#050505]">
      <div className="absolute inset-0">
        <img
          src={listenTexture}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-full w-full object-cover opacity-20 grayscale mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-transparent opacity-90" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12 py-32 md:py-48 flex flex-col items-center">
        <Reveal className="text-center w-full max-w-4xl">
          <div className="flex flex-col items-center justify-center gap-8">
            <h2 className="display text-5xl md:text-8xl tracking-tight text-white leading-none">
              THE <span className="italic text-primary">SOUND</span>
            </h2>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground max-w-md mx-auto leading-loose">
              Experience a hand-picked selection of tracks mixed and mastered by Sujith. From intimate acoustic pieces to massive cinematic anthems.
            </p>
            
            <button
              onClick={() => setIsPlayerOpen(true)}
              className="group mt-8 relative inline-flex items-center gap-6 border border-primary/30 px-8 py-5 text-[0.7rem] uppercase font-mono tracking-[0.2em] text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center group-hover:bg-primary-foreground group-hover:text-primary transition-colors">
                <Play size={12} className="ml-0.5" fill="currentColor" />
              </div>
              Launch Audio Player
            </button>
          </div>
        </Reveal>
      </div>

      {isPlayerOpen && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8 animate-in fade-in duration-300">
          <button 
            onClick={() => setIsPlayerOpen(false)}
            className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 rounded-full border border-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all z-[10000]"
            aria-label="Close player"
          >
            <X size={20} />
          </button>

          <div className="relative w-full max-w-4xl h-[85vh] md:h-[80vh] bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/10 flex flex-col animate-in zoom-in-95 duration-500">
            <div className="px-8 py-6 border-b border-white/5 flex items-center gap-4 shrink-0">
               <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
               <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-zinc-500">Analog Masters // Selected Audio</span>
            </div>
            
            <div className="flex-1 w-full bg-[#0a0a0a]">
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
          className="h-full w-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background/80 to-background pointer-events-none" />
      </div>

      <div className="relative mx-auto w-full max-w-[1600px] px-6 md:px-12 z-10">
        <Reveal delay={140} className="max-w-4xl mx-auto text-center">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.4em] text-primary mb-8">
            The Philosophy
          </p>
          <h2 className="display text-[4rem] leading-[0.85] md:text-[6.5rem] tracking-tight">
            Beyond the credits,<br />
            <span className="italic text-muted-foreground">there is sound.</span>
          </h2>
          <p className="mt-12 text-lg md:text-xl leading-relaxed text-zinc-400 max-w-2xl mx-auto font-light">
            Every note, every silence, every layer—carefully shaped to serve the story. This is where music meets emotion and becomes unforgettable.
          </p>
          <div className="mt-16">
            <Link
              to="/about"
              className="group inline-flex items-center gap-4 border border-primary/30 px-8 py-4 text-[0.7rem] uppercase tracking-[0.24em] text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary"
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
                className="h-full w-full object-cover grayscale opacity-80 transition-transform duration-[2s] hover:scale-105 hover:grayscale-0 hover:opacity-100"
              />
            </div>
          </Reveal>

          <Reveal delay={140} className="md:w-7/12 w-full md:pt-16 flex flex-col justify-center">
            <h2 className="display text-[3.5rem] leading-[0.9] md:text-[5.5rem] tracking-tight">
              The person <br className="hidden md:block" />behind the <span className="text-primary italic">mix.</span>
            </h2>
            <div className="mt-12 max-w-lg ml-0 md:ml-12 border-l border-primary/20 pl-8">
              <p className="text-sm leading-loose text-muted-foreground">
                A sound engineer, musician and studio professional with a passion for detail and a commitment to the emotion behind every story.
              </p>
              <p className="mt-6 text-sm leading-loose text-muted-foreground">
                With a deep understanding of cinematic audio architecture, Sujith brings a meticulous approach to the mixing console, ensuring that every project resonates with its intended emotional weight.
              </p>
              <div className="mt-10">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-4 text-[0.65rem] font-mono uppercase tracking-[0.24em] text-foreground transition-colors hover:text-primary"
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
    <section className="bg-background py-32 md:py-56 flex flex-col items-center justify-center text-center">
      <Reveal>
        <h2 className="display text-[4rem] leading-[0.9] md:text-[7.5rem] tracking-tight text-foreground">
          WORK WITH<br /><span className="italic text-primary">SUJITH</span>
        </h2>
        
        <div className="mt-20 flex justify-center">
          <Link
            to="/connect"
            className="group inline-flex items-center justify-center bg-foreground px-12 py-5 text-[0.75rem] uppercase font-mono tracking-[0.3em] text-background transition-transform hover:scale-105 hover:bg-primary"
          >
            Enquire for Mixing →
          </Link>
        </div>
        
        <p className="mt-16 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
          Email // <a href="mailto:hello@sujithsreedhar.com" className="text-foreground hover:text-primary transition-colors">hello@sujithsreedhar.com</a>
        </p>
      </Reveal>
    </section>
  );
}
