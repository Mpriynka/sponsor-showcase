import { Link } from "react-router-dom";
import { ArrowRight, Code2, Youtube, Briefcase, Users, Star, Trophy, Sparkles, Calendar, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Diamond, DiamondField } from "@/components/Diamond";
import { ConcentricDiamond } from "@/components/ConcentricDiamond";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { CALENDLY_URL } from "@/lib/site";

const stats = [
  { value: "100+", label: "Participating Members", variant: "magenta" as const, Icon: Users },
  { value: "100%", label: "Community Run & Driven", variant: "gold" as const, Icon: Star },
  { value: "50+", label: "Top Tech Firms Hiring Alumni", variant: "purple" as const, Icon: Briefcase },
  { value: "Top 1%", label: "Applicants Selected for the Program", variant: "magenta" as const, Icon: Trophy },
];

const companies = [
  "Google", "Amazon", "Microsoft", "Meta", "Flipkart",
  "IBM", "Goldman Sachs", "Barclays", "ServiceNow", "Oracle",
  "JPMC", "GoDaddy", "Thales", "Infor", "De Shaw",
];

const eventPillars = [
  { Icon: Code2, title: "BUILD", desc: "Teams of 1–3 build open-source projects over a single intense weekend." },
  { Icon: Youtube, title: "SHOWCASE", desc: "Live YouTube stream and demo videos published for the world to see." },
  { Icon: Briefcase, title: "HIRE", desc: "Centralized resume drive and direct interview opportunities for partners." },
];

const steps = [
  { n: "01", title: "Form a team", desc: "1–3 members, self-formed or matched through the community." },
  { n: "02", title: "Pick a project", desc: "Open-source, demo-able, fully yours to keep and ship." },
  { n: "03", title: "Build", desc: "Weekend sprint with mentor and community support." },
  { n: "04", title: "Submit", desc: "Repo link · Video demo · Resume drive entry." },
  { n: "05", title: "Showcase", desc: "Live YouTube presentation stream to recruiters and the world." },
];

const Index = () => {
  return (
    <Layout>
      <Seo
        title="WE've Got Talent — Weekend Hiring Hackathon · June 2026"
        description="A weekend hiring hackathon by The Women Engineers Community. 100+ pre-vetted women engineers, open-source projects, YouTube showcase, and a direct hiring pipeline."
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground pt-32 md:pt-40 pb-24 md:pb-32">
        <div className="absolute inset-0 grid-pattern-dark" aria-hidden />

        {/* Concentric diamond motif — left and right */}
        <div className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 hidden md:block opacity-70" aria-hidden>
          <ConcentricDiamond size={520} rings={7} tone="dark" />
        </div>
        <div className="pointer-events-none absolute -right-40 top-1/3 hidden md:block opacity-50" aria-hidden>
          <ConcentricDiamond size={420} rings={6} tone="dark" />
        </div>
        {/* Mobile single motif behind hero */}
        <div className="pointer-events-none absolute inset-0 md:hidden flex items-center justify-center opacity-40" aria-hidden>
          <ConcentricDiamond size={360} rings={6} tone="dark" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 md:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-ink-foreground/20 bg-ink-foreground/5 text-xs font-medium uppercase tracking-[0.22em] text-ink-foreground/75 mb-8">
              <Diamond size={8} variant="magenta" />
              The Women Engineers Community Presents
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display font-bold text-[3rem] sm:text-7xl md:text-8xl lg:text-[8.5rem] leading-[0.92] tracking-tight">
              WE've Got
              <br />
              <span className="text-primary">Talent</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-8 text-lg md:text-xl text-ink-foreground/75 max-w-2xl mx-auto leading-relaxed">
              A weekend hiring hackathon for the next generation of women engineers.
              Real projects. Real interviews. Real impact.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-none px-7 h-12 bg-primary text-primary-foreground hover:bg-primary/90 border-0"
              >
                <a href={CALENDLY_URL} target="_blank" rel="noreferrer">
                  Partner with us <ArrowRight className="ml-1.5 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none px-7 h-12 bg-transparent border border-ink-foreground/40 text-ink-foreground hover:bg-ink-foreground/10 hover:text-ink-foreground"
              >
                <Link to="/sponsors">Sponsor the event</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-14 flex flex-wrap gap-2 justify-center">
              {["0–6 YOE", "Open Source Projects", "YouTube Showcase", "June 2026 · Tentative"].map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-2 border border-ink-foreground/20 bg-ink-foreground/5 px-4 py-1.5 text-xs md:text-sm text-ink-foreground/80"
                >
                  <Diamond size={8} variant="magenta" />
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY WIN-WIN — STATS */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Why this is a win-win
            </p>
            <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight max-w-3xl">
              A unique opportunity for <span className="text-primary">both sides</span>.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="group relative h-full bg-card border border-border/80 rounded-none p-6 md:p-8 hover:-translate-y-1 hover:shadow-card transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <Diamond size={28} variant={s.variant} />
                    <s.Icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="font-display font-bold text-4xl md:text-5xl tracking-tight">
                    {s.value}
                  </div>
                  <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ALUMNI GRID */}
      <section className="bg-muted/40 py-20 md:py-24 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground text-center mb-10">
            WE Alumni currently work at
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
            {companies.map((c) => (
              <div
                key={c}
                className="group flex items-center justify-center gap-2.5 bg-background border border-border px-4 py-5 md:py-6 text-sm md:text-base font-medium text-center hover:border-primary hover:text-primary transition-colors"
              >
                <Diamond size={9} variant="magenta" />
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WE PROGRAM + WINGS AI */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              The community behind the event
            </p>
            <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight max-w-3xl">
              Two flagship programs.<br className="hidden md:block" /> One ambitious mission.
            </h2>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            <Reveal>
              <article className="relative h-full overflow-hidden bg-card border border-border rounded-none p-8 md:p-10">
                <Diamond size={40} variant="magenta" className="mb-8" />
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
                  WE Program
                </p>
                <h3 className="font-display font-bold text-3xl md:text-4xl tracking-tight">
                  Supported by Google · Offered by TalentSprint
                </h3>
                <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                  Women Engineers (WE) is a 24-month immersive program with in-person bootcamps that selects, trains, and nurtures first-year women engineering students into world-class software engineers.
                </p>
                <p className="mt-6 italic text-foreground/80">
                  Alumni placed at Google, Amazon, Microsoft, Meta, Flipkart & more.
                </p>
              </article>
            </Reveal>

            <Reveal delay={100}>
              <article className="relative h-full overflow-hidden bg-ink text-ink-foreground rounded-none p-8 md:p-10">
                <DiamondField density="low" tone="dark" />
                <div className="relative">
                  <Diamond size={40} variant="gold" className="mb-8" />
                  <p className="text-xs uppercase tracking-[0.25em] text-ink-foreground/60 mb-2">
                    WINGS AI
                  </p>
                  <h3 className="font-display font-bold text-3xl md:text-4xl tracking-tight">
                    Women in Next-Gen Systems AI
                  </h3>
                  <p className="mt-5 text-base md:text-lg text-ink-foreground/75 leading-relaxed">
                    A deep programming and computational thinking program designed to prepare students for next-generation computing, AI-era problem solving, and professional software development.
                  </p>
                  <p className="mt-6 italic text-ink-foreground/85">
                    Not just students — independent thinkers built for the AI era.
                  </p>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* THE EVENT */}
      <section className="relative py-24 md:py-32 bg-muted/40 border-y border-border/60 overflow-hidden">
        <DiamondField density="low" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              The event
            </p>
            <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight max-w-3xl">
              Three days. <span className="text-primary">Three pillars.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {eventPillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="h-full bg-card border border-border rounded-none p-8 hover:-translate-y-1 transition-transform duration-300">
                  <div className="h-14 w-14 rounded-none bg-primary flex items-center justify-center text-primary-foreground mb-6">
                    <p.Icon className="h-6 w-6" />
                  </div>
                  <p className="font-display font-bold text-2xl md:text-3xl tracking-tight">
                    {p.title}
                  </p>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 grid sm:grid-cols-3 gap-4 bg-card border border-border rounded-none p-6 md:p-8">
              {[
                { Icon: Users, label: "Participation", value: "Teams of 1–3 (self-formed or matched)" },
                { Icon: Send, label: "Submissions", value: "Repo + video demo + resume drive" },
                { Icon: Calendar, label: "Timeline", value: "Tentatively June 1st week, 2026" },
              ].map((row) => (
                <div key={row.label} className="flex gap-4">
                  <row.Icon className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{row.label}</p>
                    <p className="mt-1 font-medium">{row.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              How it works
            </p>
            <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight max-w-3xl">
              The hackathon model.
            </h2>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-5 gap-4 md:gap-3 relative">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 70}>
                <div className="relative h-full">
                  <div className="bg-card border border-border rounded-none p-6 h-full hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <Diamond size={18} variant={i % 2 ? "purple" : "magenta"} />
                      <span className="font-display font-bold text-sm text-muted-foreground">{s.n}</span>
                    </div>
                    <p className="font-display font-bold text-lg md:text-xl">{s.title}</p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="py-24 md:py-32 bg-muted/40 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Awards
            </p>
            <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight max-w-3xl">
              Every winner earns <span className="text-primary">a real shot.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="h-full bg-card border border-border rounded-none p-8 md:p-10 relative overflow-hidden">
                <Trophy className="absolute -top-6 -right-6 h-40 w-40 text-primary/10" />
                <Diamond size={32} variant="magenta" className="mb-6" />
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Per company</p>
                <h3 className="font-display font-bold text-3xl">Partner Choice</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Each partner picks up to <strong className="text-foreground">4 winners</strong> for interview invites, mentorship, or conference funding.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full bg-ink text-ink-foreground rounded-none p-8 md:p-10 relative overflow-hidden">
                <Sparkles className="absolute -top-4 -right-4 h-32 w-32 text-gold/30" />
                <Diamond size={32} variant="gold" className="mb-6" />
                <p className="text-xs uppercase tracking-[0.2em] text-ink-foreground/60 mb-2">Community vote</p>
                <h3 className="font-display font-bold text-3xl">WE Champion</h3>
                <p className="mt-4 text-ink-foreground/75 leading-relaxed">
                  One overall winner chosen by community vote. <strong className="text-gold">The crowd decides.</strong>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GATEWAYS */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <Link to="/recruiters" className="group block h-full">
                <div className="relative h-full overflow-hidden bg-card border border-border rounded-none p-8 md:p-10 hover:border-primary/60 hover:-translate-y-1 transition-all">
                  <Diamond size={32} variant="magenta" className="mb-6" />
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">For recruiters</p>
                  <h3 className="font-display font-bold text-3xl md:text-4xl tracking-tight">
                    Hire from a pre-vetted pipeline
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    GitHub repos, video demos, and a centralized resume drive — all in one place.
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 font-medium text-primary group-hover:gap-3 transition-all">
                    Explore for recruiters <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
            <Reveal delay={100}>
              <Link to="/sponsors" className="group block h-full">
                <div className="relative h-full overflow-hidden bg-ink text-ink-foreground rounded-none p-8 md:p-10 hover:-translate-y-1 transition-all">
                  <DiamondField density="low" tone="dark" />
                  <div className="relative">
                    <Diamond size={32} variant="gold" className="mb-6" />
                    <p className="text-xs uppercase tracking-[0.25em] text-ink-foreground/60 mb-2">For sponsors</p>
                    <h3 className="font-display font-bold text-3xl md:text-4xl tracking-tight">
                      Sponsor the future of women in tech
                    </h3>
                    <p className="mt-4 text-ink-foreground/75 leading-relaxed">
                      Prizes, mentorship, dev tooling — pick the impact you want to create.
                    </p>
                    <span className="mt-8 inline-flex items-center gap-2 font-medium text-gold group-hover:gap-3 transition-all">
                      Explore for sponsors <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Index;
