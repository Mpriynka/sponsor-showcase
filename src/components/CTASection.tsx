import { Button } from "@/components/ui/button";
import { Diamond, DiamondField } from "@/components/Diamond";
import { CALENDLY_URL } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export function CTASection({
  eyebrow = "Let's make it happen",
  title = "Build the next class of world-class women engineers.",
  primaryLabel = "Partner with us",
  secondaryLabel = "Sponsor us",
}: {
  eyebrow?: string;
  title?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden grid-pattern-charcoal text-ink-foreground">
      <DiamondField density="medium" tone="dark" />
      <div className="absolute inset-0 grid-pattern-ink opacity-40" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-none"
        style={{ background: "var(--gradient-glow)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-5xl px-5 md:px-8 py-20 md:py-28 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none border border-ink-foreground/15 bg-ink-foreground/5 text-xs font-medium uppercase tracking-[0.2em] text-ink-foreground/70 mb-6">
          <Diamond size={8} variant="magenta" />
          {eyebrow}
        </div>
        <h2 className="font-display font-bold text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-3xl mx-auto">
          {title}
        </h2>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="rounded-none px-7 h-12 bg-primary border-0 text-primary-foreground shadow-elevated">
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer">
              {primaryLabel} <ArrowRight className="ml-1.5 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-none px-7 h-12 bg-transparent border-ink-foreground/25 text-ink-foreground hover:bg-ink-foreground/10 hover:text-ink-foreground"
          >
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer">{secondaryLabel}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
