import { cn } from "@/lib/utils";

type Props = {
  size?: number;
  className?: string;
  /** number of concentric rings */
  rings?: number;
  /** light = magenta on dark, dark = magenta on light */
  tone?: "light" | "dark";
  animated?: boolean;
};

/**
 * Concentric diamond motif inspired by the WE deck — a single accent color
 * (magenta) with multiple nested rotated squares pulsing in sequence.
 */
export function ConcentricDiamond({
  size = 320,
  className,
  rings = 6,
  tone = "light",
  animated = true,
}: Props) {
  const stroke = "hsl(var(--primary))";
  const halfsize = size / 2;
  const ringSizes = Array.from({ length: rings }, (_, i) =>
    Math.round((size * (i + 1)) / rings),
  );

  return (
    <div
      className={cn("relative inline-block", className)}
      style={{ width: size, height: size }}
      aria-hidden
    >
      {ringSizes.map((rs, i) => {
        const isOuter = i === ringSizes.length - 1;
        const opacity = tone === "light"
          ? 0.15 + (i / ringSizes.length) * 0.55
          : 0.25 + (i / ringSizes.length) * 0.65;
        return (
          <div
            key={i}
            className="absolute"
            style={{
              left: halfsize - rs / 2,
              top: halfsize - rs / 2,
              width: rs,
              height: rs,
              border: `${isOuter ? 2 : 1.25}px solid ${stroke}`,
              opacity,
              transform: "rotate(45deg)",
              animation: animated
                ? `${i % 2 ? "diamond-pulse-rev" : "diamond-pulse"} ${
                    4 + i * 0.6
                  }s ease-in-out ${i * 0.15}s infinite`
                : undefined,
            }}
          />
        );
      })}
      {/* solid core */}
      <div
        className="absolute"
        style={{
          left: halfsize - size * 0.06,
          top: halfsize - size * 0.06,
          width: size * 0.12,
          height: size * 0.12,
          background: stroke,
          transform: "rotate(45deg)",
        }}
      />
    </div>
  );
}
