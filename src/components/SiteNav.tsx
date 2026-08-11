import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", to: "/" },
  { label: "Filmography", to: "/filmography" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/connect" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-700",
        scrolled
          ? "border-b border-hairline bg-background/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12">
        <Link
          to="/"
          className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-foreground"
        >
          Sujith Sreedhar
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-10">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  activeProps={{ className: "text-ember border-b border-ember pb-1" }}
                  inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
                  className="text-[0.65rem] uppercase tracking-[0.22em] transition-colors duration-500"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/connect"
            className="group inline-flex items-center gap-2 border border-ember px-6 py-2.5 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-ember transition-colors hover:bg-ember hover:text-background"
          >
            Work with Sujith
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </nav>
      </div>

      {/* Mobile Horizontal Scroll Navigation */}
      <nav 
        aria-label="Mobile" 
        className="md:hidden flex overflow-x-auto gap-8 px-6 pb-4 hide-scrollbar border-t border-hairline/30 pt-4"
      >
        {links.map((l) => (
          <Link
            key={l.label}
            to={l.to}
            activeProps={{ className: "text-ember" }}
            inactiveProps={{ className: "text-muted-foreground" }}
            className="whitespace-nowrap text-[0.65rem] font-medium uppercase tracking-[0.2em] transition-colors"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}