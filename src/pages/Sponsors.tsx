import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Diamond, DiamondField } from "@/components/Diamond";
import { ConcentricDiamond } from "@/components/ConcentricDiamond";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import {
  Megaphone, Sparkles, HeartHandshake, Cpu,
  Trophy, GraduationCap, Code2, Check, ArrowRight,
} from "lucide-react";

const why = [
  { Icon: Megaphone, title: "Amplify your brand", desc: "Co-branding across the live YouTube stream, GitHub repos, and the WE community network." },
  { Icon: Sparkles, title: "Shape the future", desc: "Fund prizes that directly accelerate women in tech — conference seats, learning budgets, mentorships." },
  { Icon: HeartHandshake, title: "Community goodwill", desc: "Demonstrated commitment to diversity and inclusion. Visible — not performative." },
  { Icon: Cpu, title: "Tech sponsorships welcome", desc: "Contribute API credits, cloud resources, developer tools, or licenses that teams can build with." },
];

const tiers = [
  {
    Icon: Trophy,
    name: "Prize Sponsor",
    tag: "Reward the winners",
    perks: [
      "Fund cash or gift prizes for winners",
      "Conference ticket sponsorship",
      "Online course / learning subscriptions",
      "Your logo on prize certificates",
    ],
    variant: "magenta" as const,
    highlight: false,
  },
  {
    Icon: GraduationCap,
    name: "Mentor Sponsor",
    tag: "Share your expertise",
    perks: [
      "Provide 1-on-1 mentorship sessions",
      "Industry expert on judging panel",
      "Share opportunities across your network",
      "Lead training sessions on a topic",
    ],
    variant: "gold" as const,
    highlight: true,
  },
  {
    Icon: Code2,
    name: "Dev Sponsor",
    tag: "Power the build",
    perks: [
      "Donate API credits / cloud resources",
      "License developer tools for teams",
      "Offer SDK or platform for projects",
      "Certification sponsorships",
    ],
    variant: "purple" as const,
    highlight: false,
  },
];

const Sponsors = () => {
  return (
    <Layout>
      <Seo
        title="For Sponsors — WE've Got Talent"
        description="Sponsor a weekend hiring hackathon for 100+ women engineers. Prize, mentor, and dev sponsorship tiers. Co-branding across YouTube, GitHub, and the WE community."
      />

      {/* HERO — homepage-style animated title */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground pt-32 md:pt-40 pb-24 md:pb-32">
        <div className="absolute inset-0 grid-pattern-dark" aria-hidden />

        {/* Concentric diamond motif — left and right, mirroring homepage */}
        <div className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 hidden md:block opacity-70" aria-hidden>
          <ConcentricDiamond size={520} rings={7} variant="magenta" animated gem={false} />
        </div>
        <div className="pointer-events-none absolute -right-40 top-1/3 hidden md:block opacity-50" aria-hidden>
          <ConcentricDiamond size={380} rings={6} variant="purple" animated={false} gem={false} />
        </div>
        <div className="pointer-events-none absolute inset-0 md:hidden flex items-center justify-center opacity-30" aria-hidden>
          <ConcentricDiamond size={320} rings={6} variant="magenta" animated gem={false} />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 md:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-ink-foreground/20 bg-ink-foreground/5 text-xs font-medium uppercase tracking-[0.22em] text-ink-foreground/75 mb-8">
              <Diamond size={8} variant="magenta" />
              For Sponsors
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display font-bold text-[3rem] sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.92] tracking-tight">
              Back the next<br />
              <span className="text-primary">generation.</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-8 text-lg md:text-xl text-ink-foreground/75 max-w-2xl mx-auto leading-relaxed">
              Prizes. Mentorship. Developer tooling. Pick the impact you want to create — every contribution is visible, intentional, and real.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-none px-7 h-12 bg-primary text-primary-foreground hover:bg-primary/90 border-0"
              >
                <Link to="/contact">Become a sponsor <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none px-7 h-12 bg-transparent border border-ink-foreground/40 text-ink-foreground hover:bg-ink-foreground/10"
              >
                <Link to="/recruiters">For recruiters</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY SPONSOR */}
      <section className="relative py-24 md:py-32 grid-pattern overflow-hidden">
        <div className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 opacity-15 hidden md:block" aria-hidden>
          <ConcentricDiamond size={480} rings={7} variant="magenta" animated gem={false} />
        </div>
        <div className="mx-auto max-w-7xl px-5 md:px-8 relative">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Why sponsor
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight max-w-3xl">
              Sponsorship that <span className="text-primary">moves the needle</span>.
            </h2>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 gap-5">
            {why.map((f, i) => (
              <Reveal key={f.title} delay={i * 70}>
                <div className="group relative h-full overflow-hidden bg-card border border-border rounded-none p-7 md:p-8 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300">
                  {/* Faint concentric diamond in corner */}
                  <div className="absolute -bottom-8 -right-8 opacity-[0.07] pointer-events-none">
                    <ConcentricDiamond size={140} rings={4} variant="magenta" animated={false} gem={false} />
                  </div>
                  <div className="relative flex items-start gap-5">
                    <div className="h-12 w-12 rounded-none bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                      <f.Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl md:text-2xl">{f.title}</h3>
                      <p className="mt-2 text-muted-foreground leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section className="relative py-24 md:py-32 grid-pattern-blush border-y border-primary/15 overflow-hidden">
        <div className="pointer-events-none absolute -left-48 top-1/2 -translate-y-1/2 opacity-15 hidden md:block" aria-hidden>
          <ConcentricDiamond size={500} rings={7} variant="purple" animated gem={false} />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Sponsorship options
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight max-w-3xl">
              Three ways to make it happen.
            </h2>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <div
                  className={
                    t.highlight
                      ? "relative h-full bg-ink text-ink-foreground rounded-none p-8 shadow-elevated overflow-hidden md:-translate-y-3"
                      : "relative h-full bg-card border border-border rounded-none p-8 overflow-hidden hover:border-primary/50 transition-colors"
                  }
                >
                  {/* Faint concentric diamond corner decor */}
                  <div className="absolute -bottom-10 -right-10 opacity-[0.08] pointer-events-none">
                    <ConcentricDiamond
                      size={160}
                      rings={5}
                      variant={t.variant}
                      animated={false}
                      gem={false}
                    />
                  </div>
                  {t.highlight && <DiamondField density="low" tone="dark" />}
                  <div className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={
                          t.highlight
                            ? "h-12 w-12 rounded-none bg-gold text-gold-foreground flex items-center justify-center"
                            : "h-12 w-12 rounded-none bg-primary text-primary-foreground flex items-center justify-center"
                        }
                      >
                        <t.Icon className="h-5 w-5" />
                      </div>
                      {/* Small concentric diamond replacing solid Diamond icon */}
                      <div className="opacity-60">
                        <ConcentricDiamond size={36} rings={3} variant={t.variant} animated={false} gem={false} />
                      </div>
                    </div>
                    <p className={t.highlight ? "text-xs uppercase tracking-[0.2em] text-ink-foreground/60" : "text-xs uppercase tracking-[0.2em] text-muted-foreground"}>
                      {t.tag}
                    </p>
                    <h3 className="mt-2 font-display font-bold text-2xl md:text-3xl">{t.name}</h3>

                    <ul className="mt-6 space-y-3">
                      {t.perks.map((p) => (
                        <li key={p} className="flex items-start gap-3">
                          <Check className={t.highlight ? "h-5 w-5 text-gold mt-0.5 shrink-0" : "h-5 w-5 text-primary mt-0.5 shrink-0"} />
                          <span className={t.highlight ? "text-ink-foreground/85" : "text-foreground/85"}>{p}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      className={
                        t.highlight
                          ? "mt-8 w-full rounded-none bg-gold text-gold-foreground hover:bg-gold/90 border-0"
                          : "mt-8 w-full rounded-none bg-primary text-primary-foreground border-0 hover:bg-primary/90"
                      }
                    >
                      <Link to="/contact">Become a {t.name.split(" ")[0]} sponsor</Link>
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-10 text-center text-muted-foreground italic">
              We welcome any other contributions too — let's build something cool together.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Ready to sponsor?"
        title="Let's talk about how your brand can show up at WE've Got Talent."
        primaryLabel="Contact us"
        secondaryLabel="For recruiters"
      />
    </Layout>
  );
};

export default Sponsors;
