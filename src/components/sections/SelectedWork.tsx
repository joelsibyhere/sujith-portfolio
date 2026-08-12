import { Link } from "@tanstack/react-router";
import { selectedWork } from "@/data/portfolio";

export function SelectedWork() {
  return (
    <section className="bg-background pt-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 px-6 md:px-12 py-16 md:py-24 max-w-[1600px] mx-auto">
        <div>
          <h2 className="display text-giant leading-[0.85] tracking-tighter">SELECTED</h2>
          <h2 className="display text-giant leading-[0.85] tracking-tighter text-muted-foreground italic">ARCHIVE</h2>
        </div>
        <Link
          to="/filmography"
          className="link-underline inline-block text-xs uppercase tracking-[0.3em] text-foreground hover:text-primary shrink-0 pb-2 mb-4"
        >
          View Full Index →
        </Link>
      </div>

      {/* Dense, edge-to-edge cinematic grid */}
      <div className="w-full grid grid-cols-2 md:grid-cols-4 group/grid border-y border-hairline">
        {selectedWork.map((project) => (
          <Link 
            key={project.slug} 
            to="/work/$slug" 
            params={{ slug: project.slug }} 
            className="group/item relative aspect-[3/4] overflow-hidden border-r border-b border-hairline [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(4n)]:border-r-0"
          >
            {/* The Image */}
            <div className="absolute inset-0 bg-card/20" />
            <img
              src={project.artwork}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover transition-all duration-700 grayscale-[40%] group-hover/item:grayscale-0 group-hover/item:scale-105 opacity-80 group-hover/grid:opacity-40 group-hover/item:!opacity-100"
            />
            
            {/* The Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 transition-opacity duration-500 group-hover/item:opacity-90" />
            
            {/* The Text revealing on hover */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 translate-y-8 opacity-0 transition-all duration-500 ease-out group-hover/item:translate-y-0 group-hover/item:opacity-100">
              <h3 className="display text-2xl md:text-3xl lg:text-4xl text-foreground">
                {project.title}
              </h3>
              <p className="eyebrow mt-3 text-primary">
                {project.year} / {project.role}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}