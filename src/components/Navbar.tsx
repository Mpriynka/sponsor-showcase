import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Diamond } from "@/components/Diamond";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/recruiters", label: "Recruiters" },
  { to: "/sponsors", label: "Sponsors" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const transparent = pathname === "/" && !scrolled;
  const onDark = transparent;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        transparent
          ? "bg-transparent"
          : "bg-background/90 backdrop-blur-xl border-b border-border/60",
      )}
    >
      <nav className="mx-auto max-w-7xl px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <Diamond size={18} variant="magenta" />
          <span
            className={cn(
              "font-display font-bold text-lg md:text-xl tracking-tight",
              onDark ? "text-ink-foreground" : "text-foreground",
            )}
          >
            WE've Got Talent
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-2 text-sm font-medium transition-colors",
                    onDark
                      ? isActive
                        ? "text-ink-foreground"
                        : "text-ink-foreground/70 hover:text-ink-foreground"
                      : isActive
                        ? "text-foreground"
                        : "text-foreground/65 hover:text-foreground",
                  )
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button
            asChild
            size="sm"
            className="rounded-none px-5 bg-primary text-primary-foreground hover:bg-primary/90 border-0"
          >
            <Link to="/contact">Reach out</Link>
          </Button>
        </div>

        <button
          className={cn("md:hidden p-2 -mr-2", onDark ? "text-ink-foreground" : "text-foreground")}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-3 text-base font-medium",
                    isActive ? "text-primary" : "text-foreground",
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Button
              asChild
              className="mt-2 rounded-none bg-primary text-primary-foreground hover:bg-primary/90 border-0"
            >
              <Link to="/contact">Reach out</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
