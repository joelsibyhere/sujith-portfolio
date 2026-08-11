import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Search } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { getProject, selectedWork } from "@/data/portfolio";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Unavailable — Sujith Sreedhar" }, { name: "robots", content: "noindex" }],
      };
    }
    const { title, year, role } = loaderData.project;
    const desc = `${title} (${year}) — ${role} by Sujith Sreedhar.`;
    return {
      meta: [
        { title: `${title} — Sujith Sreedhar` },
        { name: "description", content: desc },
        { property: "og:title", content: `${title} — Sujith Sreedhar` },
        { property: "og:description", content: desc },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const [search, setSearch] = useState("");

  const filteredWork = selectedWork.filter(
    p => p.slug !== project.slug && p.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <article className="pt-32 md:pt-40 min-h-dvh flex flex-col">
      <header className="mx-auto max-w-[1600px] w-full px-6 md:px-12 flex flex-col items-center text-center">
        <Reveal>
          <Link
            to="/filmography"
            className="link-underline text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Archive
          </Link>
          
          <div className="mt-12 flex flex-col items-center gap-6 pb-12">
            <h1 className="display text-[4rem] md:text-giant leading-[0.9]">{project.title}</h1>
            <ul className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">
              <li>{project.year}</li>
              <li>—</li>
              <li>{project.role}</li>
            </ul>
          </div>
        </Reveal>
      </header>

      <Reveal delay={100} className="mx-auto w-full max-w-[1600px] px-6 md:px-12">
        <div className="grain relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
          <img
            src={project.artwork}
            alt={`Cinematic still representing ${project.title}`}
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
      </Reveal>

      <section className="mx-auto max-w-[800px] w-full px-6 py-12 flex justify-center text-center">
        <Reveal delay={160} className="flex flex-wrap justify-center gap-12">
          {project.audioUrl && (
            <a href={project.audioUrl} target="_blank" rel="noreferrer" className="link-underline text-[0.68rem] uppercase tracking-[0.24em] text-foreground">
              Listen →
            </a>
          )}
          {project.videoUrl && (
            <a href={project.videoUrl} target="_blank" rel="noreferrer" className="link-underline text-[0.68rem] uppercase tracking-[0.24em] text-foreground">
              Watch →
            </a>
          )}
          {project.externalUrl && (
            <a href={project.externalUrl} target="_blank" rel="noreferrer" className="link-underline text-[0.68rem] uppercase tracking-[0.24em] text-foreground">
              {project.externalUrl.includes('imdb.com') ? 'View on IMDb →' : 'External Link →'}
            </a>
          )}
        </Reveal>
      </section>

      <section className="border-t border-hairline bg-black py-16 md:py-24 overflow-hidden mt-auto">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <Reveal>
              <h2 className="display text-3xl md:text-5xl">Explore More Work</h2>
            </Reveal>
            
            <Reveal delay={100} className="w-full md:w-auto md:min-w-[300px]">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input 
                  type="text" 
                  placeholder="Search related films..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-zinc-900/50 border border-white/10 text-foreground px-12 py-3 rounded-full text-sm font-mono tracking-wide focus:outline-none focus:border-ember focus:ring-1 focus:ring-ember transition-all placeholder:text-zinc-600"
                />
              </div>
            </Reveal>
          </div>

          {filteredWork.length === 0 ? (
            <div className="py-20 text-center font-mono text-zinc-500 uppercase tracking-widest text-sm border-t border-white/5">
              No projects found matching "{search}"
            </div>
          ) : (
            <div className="flex overflow-x-auto gap-6 md:gap-8 hide-scrollbar pb-8 pt-4">
              {filteredWork.map((p, i) => (
                <div key={p.slug} className="w-[65%] md:w-[20%] shrink-0">
                  <Reveal delay={i * 50} className="group h-full">
                    <Link to="/work/$slug" params={{ slug: p.slug }} className="block">
                      <div className="grain relative aspect-[2/3] overflow-hidden border border-hairline bg-card/20 rounded-lg">
                        <img
                          src={p.artwork}
                          alt={p.title}
                          loading="lazy"
                          className="h-full w-full object-cover opacity-80 transition-[transform,opacity] duration-700 group-hover:scale-105 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
                      </div>
                      <div className="mt-4 flex flex-col gap-1 px-1">
                        <h3 className="display text-lg transition-colors duration-300 group-hover:text-ember whitespace-nowrap overflow-hidden text-ellipsis">
                          {p.title}
                        </h3>
                        <p className="text-[0.6rem] uppercase tracking-[0.15em] text-muted-foreground">
                          {p.year}
                        </p>
                      </div>
                    </Link>
                  </Reveal>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </article>
  );
}