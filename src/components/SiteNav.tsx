import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/sujith-console.jpg"; 

const links = [
  { label: "Home", to: "/" },
  { label: "Filmography", to: "/filmography" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/connect", icon: true },
] as const;

export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Header (Sticky/Fixed) */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled 
            ? "bg-background/90 backdrop-blur-md border-b border-foreground/5 shadow-sm py-0" 
            : "bg-transparent border-transparent py-2"
        )}
      >
        <div className="site-container flex h-24 items-center justify-between">
          <Link 
            to="/" 
            onClick={() => setMenuOpen(false)}
            className={cn(
              "text-xl font-bold tracking-tight uppercase transition-all duration-500",
              isHome && !scrolled 
                ? "opacity-0 pointer-events-none -translate-x-4" 
                : "opacity-100 text-foreground translate-x-0"
            )}
          >
            Sujith Sreedhar<span className="text-primary">.</span>
          </Link>
          
          {/* Desktop Horizontal Navigation (Matches User Screenshot) */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-foreground/80 hover:text-foreground text-[15px] font-medium flex items-center gap-1 transition-colors"
              >
                {link.label}
                {link.icon && <ArrowUpRight size={14} className="opacity-70" />}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Hamburger Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 flex items-center justify-center text-foreground hover:opacity-70 transition-opacity"
            aria-label="Toggle Menu"
          >
            <Menu size={32} />
          </button>
        </div>
      </header>

      {/* Invisible Overlay Backdrop (No Blur) */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-transparent transition-opacity duration-500",
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* The Slide-Out Sidebar Menu (Off-Canvas Push) */}
      <div 
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[400px] bg-[#1a1a1a] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col pt-24 pb-12 shadow-2xl border-l border-white/5",
          menuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* The Photo Background inside the sidebar - Fully Visible */}
        <div className="absolute inset-0 z-0 flex flex-col justify-end">
          <img 
            src={heroImage} 
            alt="Menu Background" 
            className="w-full h-full object-cover object-center opacity-80 mix-blend-screen grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/30 to-[#1a1a1a] pointer-events-none"></div>
        </div>

        {/* Close Button Inside Sidebar */}
        <button 
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 z-50 p-2 bg-black/50 text-white hover:bg-white hover:text-black transition-colors backdrop-blur-sm border border-white/10"
          aria-label="Close Menu"
        >
          <X size={24} />
        </button>

        {/* The Links */}
        <nav className="relative z-10 w-full px-12 mt-8 flex-1">
          <ul className="flex flex-col gap-8">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-sm font-display font-medium tracking-[0.2em] uppercase hover:text-white/50 transition-colors inline-block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
