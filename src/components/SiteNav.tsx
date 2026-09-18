import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
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
        "fixed inset-x-0 top-0 z-40 bg-background/95 transition-colors",
        scrolled && "border-b border-border backdrop-blur-md",
      )}
    >
      <div className="site-container flex flex-col border-b border-border md:h-24 md:flex-row md:items-center md:justify-between">
        <Link to="/" className="pt-5 pb-3 text-lg font-medium tracking-[-0.04em] md:p-0">
          Sujith Sreedhar<span className="text-primary">.</span>
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center justify-between gap-6 pb-3 md:gap-9 md:pb-0">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  activeProps={{ className: "text-foreground", "aria-current": "page" }}
                  inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
                  className="inline-flex min-h-10 items-center gap-2 text-[13px] transition-colors"
                >
                  {link.label}
                  {link.to === "/connect" && <ArrowUpRight size={14} aria-hidden="true" />}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
