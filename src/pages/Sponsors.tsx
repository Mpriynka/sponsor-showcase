import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Diamond, DiamondField } from "@/components/Diamond";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import {
  Megaphone, Sparkles, HeartHandshake, Cpu,
  Trophy, GraduationCap, Code2, Check,
} from "lucide-react";
import { CALENDLY_URL } from "@/lib/site";

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

      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="absolute inset-0 grid-pattern-dark" aria-hidden />
        <DiamondField density="medium" tone="dark" />
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ink-foreground/60 mb-5">
              For Sponsors
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] max-w-4xl">
              Back the next class of <span className="text-primary">women engineers</span>.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 text-lg md:text-xl text-ink-foreground/75 max-w-2xl leading-relaxed">
              Prizes. Mentorship. Developer tooling. Pick the impact you want to create — every contribution is visible, intentional, and real.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHY SPONSOR */}
      <section className="py-24 md:py-32 grid-pattern">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
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
                <div className="h-full bg-card border border-border rounded-none p-7 md:p-8 hover:-translate-y-1 transition-all">
                  <div className="flex items-start gap-5">
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
      <section className="py-24 md:py-32 grid-pattern border-y border-border/60 relative overflow-hidden">
        <DiamondField density="low" />
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
                      : "relative h-full bg-card border border-border rounded-none p-8 overflow-hidden"
                  }
                >
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
                      <Diamond size={22} variant={t.variant} />
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
                          : "mt-8 w-full rounded-none bg-primary text-primary-foreground border-0"
                      }
                    >
                      <a href={CALENDLY_URL} target="_blank" rel="noreferrer">Become a {t.name.split(" ")[0]} sponsor</a>
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
        primaryLabel="Become a sponsor"
        secondaryLabel="Schedule a call"
      />
    </Layout>
  );
};

export default Sponsors;
