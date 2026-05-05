import { cn } from "@/lib/utils";

type DiamondProps = {
  size?: number;
  className?: string;
  variant?: "magenta" | "purple" | "outline" | "gold" | "ink";
  filled?: boolean;
};

export function Diamond({ size = 32, className, variant = "magenta", filled = true }: DiamondProps) {
  const fill = {
    magenta: "hsl(var(--primary))",
    purple: "hsl(var(--accent))",
    outline: "transparent",
    gold: "hsl(var(--gold))",
    ink: "hsl(var(--ink))",
  }[variant];

  const stroke = {
    magenta: "hsl(var(--primary))",
    purple: "hsl(var(--accent))",
    outline: "hsl(var(--primary))",
    gold: "hsl(var(--gold))",
    ink: "hsl(var(--ink))",
  }[variant];

  return (
    <span
      aria-hidden
      className={cn("inline-block", className)}
      style={{
        width: size,
        height: size,
        background: filled ? fill : "transparent",
        border: filled ? "none" : `2px solid ${stroke}`,
        transform: "rotate(45deg)",
        borderRadius: 4,
      }}
    />
  );
}

/** Decorative scattered diamond field — purely visual */
export function DiamondField({
  className,
  density = "medium",
  tone = "light",
}: {
  className?: string;
  density?: "low" | "medium" | "high";
  tone?: "light" | "dark";
}) {
  const items = density === "low" ? 6 : density === "high" ? 18 : 11;
  // Deterministic positions so SSR/hydration is stable
  const seeds = [
    { x: 8, y: 14, s: 22, v: "magenta", a: "float-slow" },
    { x: 88, y: 22, s: 16, v: "purple", a: "float-slower" },
    { x: 22, y: 70, s: 28, v: "outline", a: "drift" },
    { x: 70, y: 60, s: 18, v: "magenta", a: "float-slow" },
    { x: 50, y: 12, s: 14, v: "gold", a: "drift" },
    { x: 36, y: 88, s: 20, v: "purple", a: "float-slower" },
    { x: 92, y: 80, s: 26, v: "magenta", a: "float-slow" },
    { x: 14, y: 44, s: 12, v: "outline", a: "drift" },
    { x: 62, y: 32, s: 24, v: "purple", a: "float-slower" },
    { x: 78, y: 10, s: 14, v: "outline", a: "float-slow" },
    { x: 6, y: 86, s: 18, v: "gold", a: "drift" },
    { x: 44, y: 50, s: 10, v: "magenta", a: "float-slow" },
    { x: 30, y: 30, s: 14, v: "outline", a: "drift" },
    { x: 82, y: 46, s: 22, v: "purple", a: "float-slower" },
    { x: 56, y: 78, s: 16, v: "magenta", a: "float-slow" },
    { x: 18, y: 60, s: 12, v: "gold", a: "drift" },
    { x: 96, y: 64, s: 14, v: "outline", a: "float-slower" },
    { x: 40, y: 18, s: 10, v: "purple", a: "drift" },
  ];

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      {seeds.slice(0, items).map((d, i) => (
        <span
          key={i}
          className={`absolute opacity-${tone === "dark" ? "70" : "60"} animate-${d.a}`}
          style={{ left: `${d.x}%`, top: `${d.y}%` }}
        >
          <Diamond size={d.s} variant={d.v as any} filled={d.v !== "outline"} />
        </span>
      ))}
    </div>
  );
}
