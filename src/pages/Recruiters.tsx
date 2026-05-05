import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Diamond } from "@/components/Diamond";
import { ConcentricDiamond } from "@/components/ConcentricDiamond";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import {
  Filter, Briefcase, Play, Users,
  Award, Github, CalendarRange, Megaphone, ShieldCheck, FileText,
  Send, Eye, MousePointerClick, FolderOpen, ArrowRight,
} from "lucide-react";

const why = [
  { Icon: Filter, title: "Pre-vetted talent", desc: "Candidates demonstrate real skills via open-source project delivery — no résumé screening cold starts." },
  { Icon: Briefcase, title: "Direct pipeline", desc: "Centralized resume drive, GitHub repos, and video demos — all in one place." },
  { Icon: Play, title: "See them in action", desc: "YouTube showcase lets your team evaluate communication, technical depth, and creativity first-hand." },
  { Icon: Users, title: "Diverse by design", desc: "100% women engineers across the country, mentored by alumni from 50+ top tech companies." },
];

const gets = [
  { Icon: Award, title: "Choose your winners", desc: "Pick up to 4 candidates per company. You define the criteria — tech stack, YoE, domain." },
  { Icon: Github, title: "Open source proof", desc: "Every project is on GitHub. Your engineering team can review code quality before the interview." },
  { Icon: CalendarRange, title: "Structured timeline", desc: "Hackathon in June. Focused, one-weekend sprint with dedicated submission and evaluation windows." },
  { Icon: Megaphone, title: "Employer branding", desc: "YouTube presence, community visibility, and co-branded prize recognition across WE's network." },
  { Icon: ShieldCheck, title: "Flexibility", desc: "Awards can be interview invites, mentorship programs, or conference & learning fund sponsorships." },
  { Icon: FileText, title: "Résumé drive access", desc: "Centralized, curated résumé repository shared with all partner companies post-event." },
];

const how = [
  { Icon: Send, title: "Share open roles", desc: "Tell us the YoE, tech stack, and team needs. We'll match relevant candidates to your criteria." },
  { Icon: Eye, title: "Review the showcase", desc: "Watch the live YouTube stream or catch the demo videos at your convenience, post-event." },
  { Icon: MousePointerClick, title: "Pick your winners", desc: "Select up to 4 candidates per company for interviews, mentorship, or conference funding." },
  { Icon: FolderOpen, title: "Access the drive", desc: "Browse the centralized résumé repository and GitHub submissions from all participants." },
];

const Recruiters = () => {
  return (
    <Layout>
      <Seo
        title="For Recruiters — WE've Got Talent"
        description="Hire from a pre-vetted pipeline of 100+ women engineers. Open-source proof, video demos, centralized resume drive. Pick up to 4 candidates per company."
      />

      {/* HERO — homepage-style animated title */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground pt-32 md:pt-40 pb-24 md:pb-32">
        <div className="absolute inset-0 grid-pattern-dark" aria-hidden />

        {/* Concentric diamond motif — mirroring homepage */}
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
              For Recruiters
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display font-bold text-[3rem] sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.92] tracking-tight">
              Hire engineers who<br />
              <span className="text-primary">build & ship.</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-8 text-lg md:text-xl text-ink-foreground/75 max-w-2xl mx-auto leading-relaxed">
              No résumé blackbox. Every candidate proves their craft through open-source projects, video demos, and a live presentation — before you even open their CV.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-none px-7 h-12 bg-primary text-primary-foreground hover:bg-primary/90 border-0"
              >
                <Link to="/contact">Partner with us <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none px-7 h-12 bg-transparent border border-ink-foreground/40 text-ink-foreground hover:bg-ink-foreground/10"
              >
                <Link to="/sponsors">For sponsors</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY */}
      <section className="relative py-24 md:py-32 grid-pattern overflow-hidden">
        <div className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 opacity-15 hidden md:block" aria-hidden>
          <ConcentricDiamond size={480} rings={7} variant="magenta" animated gem={false} />
        </div>
        <div className="mx-auto max-w-7xl px-5 md:px-8 relative">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Why hire from us
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight max-w-3xl">
              Signal over noise.
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

      {/* WHAT YOU GET */}
      <section className="relative py-24 md:py-32 grid-pattern-blush border-y border-primary/15 overflow-hidden">
        <div className="pointer-events-none absolute -left-48 top-1/2 -translate-y-1/2 opacity-15 hidden md:block" aria-hidden>
          <ConcentricDiamond size={500} rings={7} variant="purple" animated gem={false} />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              What your company gets
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight max-w-3xl">
              Six concrete things on the table.
            </h2>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {gets.map((g, i) => (
              <Reveal key={g.title} delay={i * 60}>
                <div className="group relative h-full overflow-hidden bg-card border border-border rounded-none p-7 hover:border-primary/50 transition-colors">
                  {/* Faint concentric diamond corner decor */}
                  <div className="absolute -bottom-6 -right-6 opacity-[0.07] pointer-events-none">
                    <ConcentricDiamond
                      size={100}
                      rings={3}
                      variant={i % 2 ? "purple" : "magenta"}
                      animated={false}
                      gem={false}
                    />
                  </div>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <g.Icon className="h-5 w-5 text-primary shrink-0" />
                      <h3 className="font-display font-bold text-lg">{g.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{g.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO PARTNER */}
      <section className="relative py-24 md:py-32 grid-pattern overflow-hidden">
        <div className="pointer-events-none absolute -right-40 bottom-0 opacity-10 hidden md:block" aria-hidden>
          <ConcentricDiamond size={400} rings={6} variant="magenta" animated={false} gem={false} />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              How to partner with us
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight max-w-3xl">
              Four steps. Zero friction.
            </h2>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {how.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="group relative h-full overflow-hidden bg-card border border-border rounded-none p-7 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300">
                  {/* Step number as faint background */}
                  <div className="font-display font-bold text-6xl text-primary/10 mb-2 leading-none">0{i + 1}</div>
                  {/* Faint concentric decor */}
                  <div className="absolute -bottom-6 -right-6 opacity-[0.06] pointer-events-none">
                    <ConcentricDiamond size={100} rings={3} variant="magenta" animated={false} gem={false} />
                  </div>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <s.Icon className="h-5 w-5 text-primary shrink-0" />
                      <h3 className="font-display font-bold text-lg">{s.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Ready to hire?"
        title="Reach out and we'll show you the talent firsthand."
        primaryLabel="Contact us"
        secondaryLabel="For sponsors"
      />
    </Layout>
  );
};

export default Recruiters;
