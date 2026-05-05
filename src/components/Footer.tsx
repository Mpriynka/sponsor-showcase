import { Link } from "react-router-dom";
import { Diamond } from "@/components/Diamond";
import { CONTACT_EMAIL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern-dark opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <Diamond size={22} variant="magenta" />
              <span className="font-display font-bold text-2xl">WE've Got Talent</span>
            </div>
            <p className="text-ink-foreground/70 max-w-md leading-relaxed">
              A weekend hiring hackathon by The Women Engineers Community. Pre-vetted talent, open-source projects, and a centralized hiring pipeline for partner companies.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-widest text-ink-foreground/60">
              Explore
            </h4>
            <ul className="space-y-3 text-ink-foreground/80">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/recruiters" className="hover:text-primary transition-colors">For Recruiters</Link></li>
              <li><Link to="/sponsors" className="hover:text-primary transition-colors">For Sponsors</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-widest text-ink-foreground/60">
              Get in touch
            </h4>
            <ul className="space-y-3 text-ink-foreground/80">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="text-ink-foreground/60">June 2026 · Tentative</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-ink-foreground/10 flex flex-col md:flex-row gap-3 items-start md:items-center justify-between text-sm text-ink-foreground/55">
          <p>© {new Date().getFullYear()} The Women Engineers Community. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <Diamond size={10} variant="magenta" /> Built with care for women in tech.
          </p>
        </div>
      </div>
    </footer>
  );
}
