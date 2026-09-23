import { Reveal } from "@/components/Reveal";
import { Disc3, Headphones, AudioWaveform } from "lucide-react";

const services = [
  {
    title: "Stereo Mastering",
    description: "Precision balancing, EQ, and dynamic enhancement to ensure your mix translates perfectly across all playback systems with pristine clarity and depth.",
    icon: Headphones,
    glow: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Dolby Atmos",
    description: "Immersive spatial audio mastering that brings three-dimensional depth and breathtaking dynamic range to your music for Apple Music and cinematic release.",
    icon: AudioWaveform,
    glow: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Vinyl Mastering",
    description: "Dedicated analog-optimized mastering passes tailored specifically for the physical limitations and warm characteristics of vinyl record pressing.",
    icon: Disc3,
    glow: "from-amber-500/20 to-orange-500/20",
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 relative bg-background text-foreground border-t border-border overflow-hidden">
      <div className="site-container relative z-10">
        <Reveal className="mb-16 md:mb-24 text-center">
          <p className="eyebrow mb-4">Sonic Capabilities</p>
          <h2 className="section-title">What we do</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.1}>
                <div className="group relative h-full p-8 md:p-10 rounded-2xl bg-card/30 border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden flex flex-col items-center text-center">
                  
                  {/* Hover Spotlight Glow */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${service.glow} mix-blend-screen pointer-events-none`} />
                  
                  {/* Icon Container */}
                  <div className="relative mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-background border border-white/10 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                    <Icon className="h-8 w-8 text-muted-foreground group-hover:text-foreground transition-colors duration-500" strokeWidth={1.5} />
                    {/* Inner glowing ring */}
                    <div className="absolute inset-0 rounded-full border border-white/0 group-hover:border-white/20 transition-colors duration-700" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-display font-medium mb-4 tracking-wide">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

