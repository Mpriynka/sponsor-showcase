import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Reveal } from "@/components/Reveal";
import { ConcentricDiamond } from "@/components/ConcentricDiamond";
import { Diamond } from "@/components/Diamond";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Users, ArrowRight, CheckCircle, Loader2 } from "lucide-react";

const FORMSPREE_URL = "https://formspree.io/f/xvzladbn";

const reasons = [
  { Icon: Users, title: "Become a recruiter partner", desc: "Access 100+ pre-vetted women engineers with open-source proof of work." },
  { Icon: MessageSquare, title: "Sponsor the event", desc: "Prize, mentor, or dev sponsorship — every contribution creates visible impact." },
  { Icon: Mail, title: "Something else", desc: "Media, collaborations, volunteering, or any other inquiry — we'd love to hear." },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", intent: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Layout>
      <Seo
        title="Contact Us — WE've Got Talent"
        description="Reach out to the WE've Got Talent team for recruiter partnerships, sponsorship inquiries, or any collaboration."
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground pt-32 md:pt-40 pb-24 md:pb-32">
        <div className="absolute inset-0 grid-pattern-dark" aria-hidden />

        {/* Large concentric diamond — left */}
        <div className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 opacity-30 hidden md:block" aria-hidden>
          <ConcentricDiamond size={520} rings={8} variant="magenta" animated gem={false} />
        </div>
        {/* Smaller — right */}
        <div className="pointer-events-none absolute -right-32 top-1/4 opacity-20 hidden md:block" aria-hidden>
          <ConcentricDiamond size={340} rings={6} variant="purple" animated={false} gem={false} />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-ink-foreground/20 bg-ink-foreground/5 text-xs font-medium uppercase tracking-[0.22em] text-ink-foreground/75 mb-8">
              <Diamond size={8} variant="magenta" />
              WE've Got Talent
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display font-bold text-[3rem] sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tight">
              Reach out.<br />
              <span className="text-primary">Let's build.</span>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-8 text-lg md:text-xl text-ink-foreground/75 max-w-2xl leading-relaxed">
              Whether you're looking to hire, sponsor, collaborate, or just learn more — we'd love to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHY REACH OUT */}
      <section className="py-20 md:py-24 grid-pattern border-b border-border/60">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid md:grid-cols-3 gap-5">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 80}>
                <div className="group relative h-full overflow-hidden bg-card border border-border rounded-none p-7 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300">
                  {/* Faint concentric diamond decoration */}
                  <div className="absolute -bottom-8 -right-8 opacity-8 pointer-events-none">
                    <ConcentricDiamond size={120} rings={4} variant="magenta" animated={false} gem={false} />
                  </div>
                  <div className="relative">
                    <div className="h-12 w-12 bg-primary text-primary-foreground flex items-center justify-center mb-5">
                      <r.Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display font-bold text-xl mb-2">{r.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{r.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="relative py-24 md:py-32 grid-pattern-blush overflow-hidden">
        <div className="pointer-events-none absolute -right-48 top-1/2 -translate-y-1/2 opacity-15 hidden md:block" aria-hidden>
          <ConcentricDiamond size={500} rings={7} variant="magenta" animated gem={false} />
        </div>
        <div className="relative mx-auto max-w-3xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Contact us</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-12">
              Send us a message.
            </h2>
          </Reveal>

          {status === "success" ? (
            <Reveal>
              <div className="bg-card border border-primary/40 rounded-none p-10 text-center">
                <CheckCircle className="h-14 w-14 text-primary mx-auto mb-4" />
                <h3 className="font-display font-bold text-2xl mb-3">Message received!</h3>
                <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                  Thanks for reaching out. We'll get back to you shortly — usually within 1–2 business days.
                </p>
                <Button
                  onClick={() => { setStatus("idle"); setForm({ name: "", email: "", intent: "", message: "" }); }}
                  variant="outline"
                  className="mt-8 rounded-none border-border"
                >
                  Send another message
                </Button>
              </div>
            </Reveal>
          ) : (
            <Reveal delay={80}>
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-none p-8 md:p-10 space-y-6">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">
                      Your name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">
                      Email address <span className="text-primary">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-intent" className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">
                    I'm reaching out about
                  </label>
                  <select
                    id="contact-intent"
                    name="intent"
                    value={form.intent}
                    onChange={handleChange}
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select a topic…</option>
                    <option value="recruiting">Recruiter partnership</option>
                    <option value="sponsorship">Sponsoring the event</option>
                    <option value="media">Media / press inquiry</option>
                    <option value="volunteering">Volunteering / mentoring</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us who you are and how you'd like to get involved…"
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-destructive">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-none h-12 bg-primary text-primary-foreground hover:bg-primary/90 border-0"
                >
                  {status === "sending" ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…</>
                  ) : (
                    <>Send message <ArrowRight className="ml-2 h-4 w-4" /></>
                  )}
                </Button>

              </form>
            </Reveal>
          )}
        </div>
      </section>
    </Layout>
  );
}
