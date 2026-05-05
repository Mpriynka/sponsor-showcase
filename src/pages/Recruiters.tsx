import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Diamond, DiamondField } from "@/components/Diamond";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import {
  Filter, Briefcase, Play, Users,
  Award, Github, CalendarRange, Megaphone, ShieldCheck, FileText,
  Send, Eye, MousePointerClick, FolderOpen,
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

      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="absolute inset-0 grid-pattern-dark" aria-hidden />
        <DiamondField density="medium" tone="dark" />
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ink-foreground/60 mb-5">
              For Recruiters
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] max-w-4xl">
              Hire engineers who <span className="text-primary">build, ship, and present</span>.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 text-lg md:text-xl text-ink-foreground/75 max-w-2xl leading-relaxed">
              No résumé blackbox. Every candidate proves their craft through open-source projects, video demos, and a live presentation — before you even open their CV.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHY */}
      <section className="py-24 md:py-32 grid-pattern">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
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

      {/* WHAT YOU GET */}
      <section className="py-24 md:py-32 grid-pattern border-y border-border/60">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
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
                <div className="h-full bg-card border border-border rounded-none p-7 hover:border-primary/50 transition-colors">
                  <Diamond size={20} variant={i % 2 ? "purple" : "magenta"} className="mb-5" />
                  <div className="flex items-center gap-3 mb-3">
                    <g.Icon className="h-5 w-5 text-primary" />
                    <h3 className="font-display font-bold text-lg">{g.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{g.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO PARTNER */}
      <section className="py-24 md:py-32 grid-pattern">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
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
                <div className="relative h-full bg-card border border-border rounded-none p-7">
                  <div className="font-display font-bold text-5xl text-primary/15 mb-2">0{i + 1}</div>
                  <div className="flex items-center gap-3 mb-3">
                    <s.Icon className="h-5 w-5 text-primary" />
                    <h3 className="font-display font-bold text-lg">{s.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Ready to hire?"
        title="Schedule a partner call and see the talent firsthand."
        primaryLabel="Schedule a call"
        secondaryLabel="Email the team"
      />
    </Layout>
  );
};

export default Recruiters;
