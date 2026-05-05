import { Link } from "react-router-dom";
import { Diamond, DiamondField } from "@/components/Diamond";
import { ConcentricDiamond } from "@/components/ConcentricDiamond";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function CTASection({
  eyebrow = "Let's make it happen",
  title = "Build the next class of world-class women engineers.",
  primaryLabel = "Contact us",
  secondaryLabel = "For sponsors",
}: {
  eyebrow?: string;
  title?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="absolute inset-0 grid-pattern-dark opacity-60" aria-hidden />
      <DiamondField density="medium" tone="dark" />

      {/* Large concentric diamond — background decor, NO pink blob */}
      <div className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 opacity-20 hidden md:block" aria-hidden>
        <ConcentricDiamond size={480} rings={7} variant="magenta" animated gem={false} />
      </div>
      <div className="pointer-events-none absolute -right-32 -bottom-20 opacity-15 hidden md:block" aria-hidden>
        <ConcentricDiamond size={320} rings={5} variant="purple" animated={false} gem={false} />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 md:px-8 py-20 md:py-28 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-ink-foreground/15 bg-ink-foreground/5 text-xs font-medium uppercase tracking-[0.2em] text-ink-foreground/70 mb-6">
          <Diamond size={8} variant="magenta" />
          {eyebrow}
        </div>
        <h2 className="font-display font-bold text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-3xl mx-auto">
          {title}
        </h2>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="rounded-none px-7 h-12 bg-primary border-0 text-primary-foreground shadow-elevated">
            <Link to="/contact">
              <Mail className="mr-2 h-4 w-4" />
              {primaryLabel} <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-none px-7 h-12 bg-transparent border-ink-foreground/25 text-ink-foreground hover:bg-ink-foreground/10 hover:text-ink-foreground"
          >
            <Link to="/sponsors">{secondaryLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
