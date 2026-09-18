import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { social } from "@/data/portfolio";

const socialLinks = [
  { label: "Instagram", href: social.instagram },
  { label: "Spotify", href: social.spotify },
  { label: "YouTube", href: social.youtube },
  { label: "2 Bar Q Studios", href: social.studio_instagram },
];

export function SiteFooter() {
  return (
    <footer className="py-12 md:py-14">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div>
            <Link to="/" className="text-xl font-medium tracking-[-0.04em]">
              Sujith Sreedhar.
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">Mixing & mastering</p>
          </div>
          <ul className="flex flex-wrap gap-x-7 gap-y-2">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-border pt-5 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Sujith Sreedhar</p>
          {social.email ? (
            <a href={`mailto:${social.email}`} className="hover:text-foreground">
              {social.email}
            </a>
          ) : (
            <Link to="/connect" className="hover:text-foreground">
              Project enquiries
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}
