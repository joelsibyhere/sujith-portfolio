import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useMovies } from "@/sanity/useMovies";

export function SelectedWork() {
  const { data: movies = [] } = useMovies();
  // Grab a good multiple of 6 for the grid (e.g., 24 movies) so it tiles perfectly on desktop (6 cols) and mobile (2 cols)
  const selectedWork = movies.slice(0, 24); 

  return (
    <section className="bg-[#050505] border-b border-hairline overflow-hidden pt-24 pb-0">
      
      {/* Header Container - Keep this constrained so text doesn't hit screen edges */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-12">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="display text-4xl md:text-5xl text-white tracking-wide mb-3">
                SELECTED WORK
              </h2>
            </div>
            <Link
              to="/filmography"
              className="text-primary text-[0.65rem] uppercase font-mono tracking-[0.2em] transition-colors hover:text-white pb-1"
            >
              VIEW FULL FILMOGRAPHY '
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Wall of Fame Grid - Full Bleed (Edge to Edge) */}
      <Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 w-full gap-0">
          {selectedWork.map((project: any) => {
            const slug = project.slug?.current || project.slug;
            return (
              <Link 
                key={slug} 
                to="/work/$slug" 
                params={{ slug }} 
                className="group relative aspect-[3/4] w-full block overflow-hidden bg-black"
              >
                {/* Poster Image */}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-all duration-700 opacity-90 group-hover:scale-110 group-hover:opacity-40"
                />
                
                {/* Hover Reveal Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10 bg-black/40">
                  <h3 className="display text-2xl md:text-3xl text-white tracking-wide mb-2 drop-shadow-xl">
                    {project.title}
                  </h3>
                  <p className="text-primary text-[0.65rem] uppercase font-mono tracking-[0.2em] drop-shadow-md">
                    {project.role}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}