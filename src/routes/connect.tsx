import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { social } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/connect")({
  head: () => ({
    meta: [
      { title: "Connect — Sujith Sreedhar" },
      {
        name: "description",
        content: "Mixing & mastering enquiries for Sujith Sreedhar.",
      },
    ],
  }),
  component: ConnectPage,
});

function ConnectPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Simulate network request for premium feel
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <div className="pt-32 md:pt-40 min-h-dvh flex flex-col bg-black overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ember/5 rounded-full blur-[120px] pointer-events-none" />

      <section className="mx-auto w-full max-w-[1200px] px-6 md:px-12 flex-1 flex flex-col lg:flex-row gap-16 lg:gap-32 relative z-10 pb-32">
        
        {/* Left Column: Heading & Info */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <Reveal>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.4em] text-ember/80 border border-ember/20 px-4 py-1 inline-flex mb-12">
              CH-05 // Start a Project
            </p>
            <h1 className="display text-[5rem] md:text-[8rem] leading-[0.8] tracking-tight text-white mb-12">
              WORK
              <br />
              WITH
              <br />
              <span className="text-zinc-500">SUJITH</span>
            </h1>
            
            <div className="flex flex-col gap-6 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-zinc-500">
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-hairline" />
                <p>
                  Direct Email // <a href={`mailto:${social.email}`} className="text-zinc-300 hover:text-white transition-colors">{social.email}</a>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-hairline" />
                <p>
                  Studio // <a href={social.studio_instagram} target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white transition-colors">2 Bar Q Studios</a>
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Form */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <Reveal delay={150}>
            {status === "success" ? (
              <div className="bg-white/5 border border-white/10 p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-ember/20 flex items-center justify-center mb-6">
                  <div className="w-8 h-8 rounded-full bg-ember animate-pulse" />
                </div>
                <h3 className="display text-3xl text-white mb-4">Signal Received</h3>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-zinc-400 leading-relaxed max-w-xs mx-auto">
                  Your inquiry has been routed. We will be in touch shortly.
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-12 text-[0.65rem] font-mono uppercase tracking-[0.3em] text-ember hover:text-white transition-colors"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-zinc-900/40 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1 flex flex-col gap-2">
                    <label htmlFor="name" className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-zinc-400 pl-1">
                      01 // Name
                    </label>
                    <input 
                      required
                      type="text" 
                      id="name"
                      placeholder="Your name"
                      className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-white font-mono text-sm tracking-wide focus:outline-none focus:border-ember focus:ring-1 focus:ring-ember transition-all placeholder:text-zinc-500"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <label htmlFor="email" className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-zinc-400 pl-1">
                      02 // Email Address
                    </label>
                    <input 
                      required
                      type="email" 
                      id="email"
                      placeholder="hello@example.com"
                      className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-white font-mono text-sm tracking-wide focus:outline-none focus:border-ember focus:ring-1 focus:ring-ember transition-all placeholder:text-zinc-500"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="type" className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-zinc-400 pl-1">
                    03 // Project Type
                  </label>
                  <div className="relative">
                    <select 
                      id="type"
                      className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-white font-mono text-sm tracking-wide focus:outline-none focus:border-ember focus:ring-1 focus:ring-ember transition-all appearance-none cursor-pointer"
                    >
                      <option value="mixing">Audio Mixing</option>
                      <option value="mastering">Audio Mastering</option>
                      <option value="both">Mixing & Mastering</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none text-xs">
                      ▼
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-zinc-400 pl-1">
                    04 // Details
                  </label>
                  <textarea 
                    required
                    id="message"
                    rows={4}
                    placeholder="Tell us about your project, timeline, and vision..."
                    className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-white font-mono text-sm tracking-wide focus:outline-none focus:border-ember focus:ring-1 focus:ring-ember transition-all placeholder:text-zinc-500 resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={status === "submitting"}
                  className={cn(
                    "mt-4 group relative w-full rounded-lg bg-ember py-4 text-[0.7rem] font-bold uppercase tracking-[0.3em] transition-all overflow-hidden text-black shadow-[0_0_20px_rgba(255,100,50,0.3)] hover:shadow-[0_0_30px_rgba(255,100,50,0.5)]",
                    status === "submitting" ? "opacity-70 cursor-wait" : "hover:bg-ember/90"
                  )}
                >
                  <span className="relative z-10 flex items-center justify-center gap-4">
                    {status === "submitting" ? "Transmitting..." : "Send Inquiry"}
                    {status !== "submitting" && (
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    )}
                  </span>
                </button>
              </form>
            )}
          </Reveal>
        </div>

      </section>
    </div>
  );
}
