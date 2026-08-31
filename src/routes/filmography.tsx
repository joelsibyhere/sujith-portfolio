import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useMovies } from "@/sanity/useMovies";

export const Route = createFileRoute("/filmography")({
  head: () => ({
    meta: [
      { title: "Filmography — Sujith Sreedhar | 600+ Films" },
      {
        name: "description",
        content:
          "Browse the film archive of Sujith Sreedhar, mixing and mastering engineer across 600+ films in cinema and music.",
      },
    ],
  }),
  component: FilmographyPage,
});

function FilmographyPage() {
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(50);
  const { data: filmography = [] } = useMovies();

  // Reset pagination when search changes
  useEffect(() => {
    setVisibleCount(50);
  }, [search]);

  const filteredFilms = useMemo(() => {
    return filmography.filter(f => {
      if (!search) return true;
      const q = search.toLowerCase();
      return (
        f.title.toLowerCase().includes(q) ||
        f.year.toString().includes(q) ||
        f.language.toLowerCase().includes(q) ||
        f.role.toLowerCase().includes(q) ||
        f.type.toLowerCase().includes(q)
      );
    });
  }, [search, filmography]);

  const paginatedFilms = useMemo(() => {
    return filteredFilms.slice(0, visibleCount);
  }, [filteredFilms, visibleCount]);

  const grouped = useMemo(() => {
    return paginatedFilms.reduce((acc, film) => {
      if (!acc[film.year]) acc[film.year] = [];
      acc[film.year].push(film);
      return acc;
    }, {} as Record<number, typeof filmography>);
  }, [paginatedFilms]);

  const years = Object.keys(grouped).map(Number).sort((a, b) => b - a);

  return (
    <div className="pt-32 md:pt-48 min-h-dvh flex flex-col bg-background">
      <section className="mx-auto w-full max-w-[1200px] px-6 md:px-12 mb-24 md:mb-32">
        <Reveal>
          {/* PREMIUM CENTERED HEADER */}
          <div className="flex flex-col items-center text-center">
            <h1 className="display text-[4rem] leading-[0.85] md:text-[8rem] text-foreground tracking-tighter">
              The Archive
            </h1>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.4em] text-primary mt-8">
              600+ Projects // Film & Music
            </p>
          </div>
          
          {/* MASSIVE PREMIUM SEARCH BAR */}
          <div className="mt-16 md:mt-24 max-w-2xl mx-auto relative group">
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full transition-opacity opacity-0 group-focus-within:opacity-100" />
            
            <div className="relative">
              <Search className="absolute left-8 top-1/2 -translate-y-1/2 w-6 h-6 text-primary/50 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Search by title, year, or language..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-full text-foreground pl-20 pr-8 py-6 text-lg font-light focus:outline-none focus:border-primary/50 focus:bg-black transition-all shadow-2xl placeholder:text-muted-foreground/40"
              />
            </div>
            
            {/* Quick Suggestions */}
            <div className="flex flex-wrap justify-center gap-4 mt-8 opacity-60">
              <span className="font-mono text-[0.6rem] uppercase tracking-widest text-muted-foreground">Try typing:</span>
              {['Malayalam', '2023', 'Score Mixer', 'Tagaru'].map(term => (
                <button 
                  key={term}
                  onClick={() => setSearch(term)}
                  className="font-mono text-[0.6rem] uppercase tracking-widest text-primary hover:text-white transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-[1600px] px-6 md:px-24 flex-1 pb-32">
        {years.length === 0 ? (
          <div className="py-20 text-center font-mono text-zinc-500 uppercase tracking-widest text-sm">
            No projects found matching your criteria.
          </div>
        ) : (
          <>
            {years.map((year, yearIndex) => (
              <div key={year} className="mb-16 md:mb-24 flex flex-col md:flex-row gap-8 md:gap-24">
                <div className="md:w-1/4">
                  <Reveal delay={100}>
                    <h2 className="display text-[4rem] md:text-[6rem] leading-[0.8] text-zinc-800 sticky top-32">
                      {year}
                    </h2>
                  </Reveal>
                </div>
                
                <div className="md:w-3/4 flex flex-col">
                  {grouped[year].map((f, i) => (
                    <Reveal
                      key={`${f.title}-${i}`}
                      delay={0}
                      className="group flex flex-col md:flex-row md:items-center justify-between border-b border-hairline/50 py-4 md:py-6 transition-colors hover:border-primary"
                    >
                      <div className="flex flex-col">
                        <span className="font-serif text-2xl md:text-3xl text-zinc-300 transition-colors duration-500 group-hover:text-primary">
                          {f.title}
                        </span>
                        <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-zinc-500 mt-2">
                          {f.language} // {f.type}
                        </span>
                      </div>
                      <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-primary/80 mt-4 md:mt-0 md:text-right">
                        {f.role}
                      </span>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
            
            {visibleCount < filteredFilms.length && (
              <div className="flex justify-center mt-20">
                <button 
                  onClick={() => setVisibleCount(v => v + 50)}
                  className="border border-primary/30 px-10 py-4 text-xs font-mono tracking-[0.2em] text-primary uppercase transition-colors hover:bg-primary hover:text-black rounded-full"
                >
                  Load More Projects ({filteredFilms.length - visibleCount} remaining)
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}