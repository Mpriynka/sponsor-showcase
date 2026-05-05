import { cn } from "@/lib/utils";

type Props = {
  size?: number;
  className?: string;
  /** number of concentric rings */
  rings?: number;
  /** colour palette */
  variant?: "magenta" | "purple" | "dark" | "gold";
  animated?: boolean;
  /** show a solid filled inner gem like the PPT diamonds */
  gem?: boolean;
};

/**
 * Concentric diamond motif inspired by the WE Got Talent PPT deck.
 * Multiple nested rotated squares with an optional filled gem core.
 */
export function ConcentricDiamond({
  size = 320,
  className,
  rings = 6,
  variant = "magenta",
  animated = true,
  gem = true,
}: Props) {
  const colors = {
    magenta: {
      stroke: "hsl(var(--primary))",
      fillOuter: "hsl(333 82% 54%)",
      fillInner: "hsl(333 82% 74%)",
    },
    purple: {
      stroke: "hsl(var(--accent))",
      fillOuter: "hsl(268 60% 55%)",
      fillInner: "hsl(268 60% 75%)",
    },
    gold: {
      stroke: "hsl(var(--gold))",
      fillOuter: "hsl(43 90% 55%)",
      fillInner: "hsl(43 90% 78%)",
    },
    dark: {
      stroke: "hsl(var(--primary))",
      fillOuter: "hsl(333 82% 54%)",
      fillInner: "hsl(333 82% 74%)",
    },
  }[variant];

  const halfsize = size / 2;
  const ringSizes = Array.from({ length: rings }, (_, i) =>
    Math.round((size * (i + 1)) / rings),
  );

  // Gem sizes: outer filled square = 38% of total, inner lighter = 22%
  const gemOuter = size * 0.38;
  const gemInner = size * 0.22;
  const coreSize = size * 0.09;

  return (
    <div
      className={cn("relative inline-block pointer-events-none select-none", className)}
      style={{ width: size, height: size }}
      aria-hidden
    >
      {/* Concentric outline rings */}
      {ringSizes.map((rs, i) => {
        // Fainter animated rings
        const opacity = 0.05 + (i / ringSizes.length) * 0.15;
        const strokeW = i === ringSizes.length - 1 ? 2 : 1.2;
        return (
          <div
            key={i}
            className="absolute"
            style={{
              left: halfsize - rs / 2,
              top: halfsize - rs / 2,
              width: rs,
              height: rs,
              border: `${strokeW}px solid ${colors.stroke}`,
              opacity,
              transform: "rotate(45deg)",
              animation: animated
                ? `${i % 2 ? "diamond-pulse-rev" : "diamond-pulse"} ${4 + i * 0.6}s ease-in-out ${i * 0.15}s infinite`
                : undefined,
            }}
          />
        );
      })}

      {/* Gem fill — outer */}
      {gem && (
        <div
          className="absolute"
          style={{
            left: halfsize - gemOuter / 2,
            top: halfsize - gemOuter / 2,
            width: gemOuter,
            height: gemOuter,
            background: colors.fillOuter,
            opacity: 0.9,
            transform: "rotate(45deg)",
          }}
        />
      )}
      {/* Gem fill — inner lighter */}
      {gem && (
        <div
          className="absolute"
          style={{
            left: halfsize - gemInner / 2,
            top: halfsize - gemInner / 2,
            width: gemInner,
            height: gemInner,
            background: colors.fillInner,
            opacity: 0.85,
            transform: "rotate(45deg)",
          }}
        />
      )}
      {/* Solid core dot */}
      <div
        className="absolute"
        style={{
          left: halfsize - coreSize / 2,
          top: halfsize - coreSize / 2,
          width: coreSize,
          height: coreSize,
          background: gem ? "hsl(0 0% 100% / 0.6)" : colors.stroke,
          transform: "rotate(45deg)",
        }}
      />
    </div>
  );
}
