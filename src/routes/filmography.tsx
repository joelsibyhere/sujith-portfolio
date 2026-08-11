import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { filmography } from "@/data/portfolio";

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
  const [yearFilter, setYearFilter] = useState("");
  const [langFilter, setLangFilter] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const uniqueYears = useMemo(() => Array.from(new Set(filmography.map(f => f.year))).sort((a, b) => b - a), []);
  const uniqueLangs = useMemo(() => Array.from(new Set(filmography.map(f => f.language))).sort(), []);
  const uniqueRoles = useMemo(() => Array.from(new Set(filmography.map(f => f.role))).sort(), []);
  const uniqueTypes = useMemo(() => Array.from(new Set(filmography.map(f => f.type))).sort(), []);

  const filteredFilms = useMemo(() => {
    return filmography.filter(f => {
      const matchSearch = search ? f.title.toLowerCase().includes(search.toLowerCase()) : true;
      const matchYear = yearFilter ? f.year.toString() === yearFilter : true;
      const matchLang = langFilter ? f.language === langFilter : true;
      const matchRole = roleFilter ? f.role === roleFilter : true;
      const matchType = typeFilter ? f.type === typeFilter : true;
      return matchSearch && matchYear && matchLang && matchRole && matchType;
    });
  }, [search, yearFilter, langFilter, roleFilter, typeFilter]);

  const grouped = useMemo(() => {
    return filteredFilms.reduce((acc, film) => {
      if (!acc[film.year]) acc[film.year] = [];
      acc[film.year].push(film);
      return acc;
    }, {} as Record<number, typeof filmography>);
  }, [filteredFilms]);

  const years = Object.keys(grouped).map(Number).sort((a, b) => b - a);

  const resetFilters = () => {
    setSearch("");
    setYearFilter("");
    setLangFilter("");
    setRoleFilter("");
    setTypeFilter("");
  };

  return (
    <div className="pt-32 md:pt-40 min-h-dvh flex flex-col bg-background">
      <section className="mx-auto w-full max-w-[1600px] px-6 md:px-24 mb-32">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8">
            <h1 className="display text-[4rem] leading-[0.8] md:text-[8rem]">Filmography</h1>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.4em] text-ember mt-8 md:mt-0 md:pb-4 md:border-l md:border-ember/30 md:pl-6">
              Complete Archive // 600+ Credits
            </p>
          </div>
          
          {/* SEARCH & FILTERS UI */}
          <div className="flex flex-col gap-4 mt-8 border-t border-hairline pt-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input 
                type="text" 
                placeholder="Search for a film, song or project..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent border border-hairline/50 text-foreground px-12 py-4 text-sm font-mono tracking-wide focus:outline-none focus:border-ember transition-colors placeholder:text-zinc-600"
              />
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4">
              <select value={yearFilter} onChange={e => setYearFilter(e.target.value)} className="w-full md:w-auto flex-1 bg-transparent border border-hairline/50 text-zinc-400 px-4 py-3 text-xs font-mono tracking-widest uppercase focus:outline-none focus:border-ember appearance-none">
                <option value="">YEAR</option>
                {uniqueYears.map(y => <option key={y} value={y.toString()}>{y}</option>)}
              </select>
              
              <select value={langFilter} onChange={e => setLangFilter(e.target.value)} className="w-full md:w-auto flex-1 bg-transparent border border-hairline/50 text-zinc-400 px-4 py-3 text-xs font-mono tracking-widest uppercase focus:outline-none focus:border-ember appearance-none">
                <option value="">LANGUAGE</option>
                {uniqueLangs.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
              
              <select value={roleFilter} onChange={e => setRoleFilter(e.target.value)} className="w-full md:w-auto flex-1 bg-transparent border border-hairline/50 text-zinc-400 px-4 py-3 text-xs font-mono tracking-widest uppercase focus:outline-none focus:border-ember appearance-none">
                <option value="">ROLE</option>
                {uniqueRoles.map(r => <option key={r} value={r}>{r}</option>)}
              </select>

              <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)} className="w-full md:w-auto flex-1 bg-transparent border border-hairline/50 text-zinc-400 px-4 py-3 text-xs font-mono tracking-widest uppercase focus:outline-none focus:border-ember appearance-none">
                <option value="">TYPE</option>
                {uniqueTypes.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              
              <button 
                onClick={resetFilters}
                className="w-full md:w-auto text-xs font-mono font-bold tracking-widest text-ember uppercase py-3 px-6 hover:text-ember/80 transition-colors"
              >
                RESET
              </button>
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
          years.map((year, yearIndex) => (
            <div key={year} className="mb-24 md:mb-40 flex flex-col md:flex-row gap-8 md:gap-32">
              <div className="md:w-1/4">
                <Reveal delay={100}>
                  <h2 className="display text-[5rem] md:text-[8rem] leading-[0.8] text-zinc-800 sticky top-32">
                    {year}
                  </h2>
                </Reveal>
              </div>
              
              <div className="md:w-3/4 flex flex-col">
                {grouped[year].map((f, i) => (
                  <Reveal
                    key={`${f.title}-${i}`}
                    delay={Math.min(i * 10, 150)}
                    className="group flex flex-col md:flex-row md:items-center justify-between border-b border-hairline/50 py-8 md:py-10 transition-colors hover:border-ember"
                  >
                    <div className="flex flex-col">
                      <span className="display text-[2rem] md:text-[3.5rem] leading-[0.9] text-zinc-200 transition-colors duration-500 group-hover:text-ember">
                        {f.title}
                      </span>
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-zinc-500 mt-4 md:mt-2">
                        {f.language} // {f.type}
                      </span>
                    </div>
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-ember/80 mt-6 md:mt-0 md:text-right">
                      {f.role}
                    </span>
                  </Reveal>
                ))}
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
}