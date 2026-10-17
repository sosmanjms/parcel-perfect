import { cn } from "@/lib/utils";

/** Rising particle field — pure CSS, no JS loop */
export function ParticleField({
  count = 18,
  className,
}: {
  count?: number;
  className?: string;
}) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: `${(i * 37 + 13) % 100}%`,
    size: `${2 + (i % 4)}px`,
    dur: `${6 + (i % 7)}s`,
    delay: `${-(i * 0.7)}s`,
  }));

  return (
    <div className={cn("particle-field", className)} aria-hidden>
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={
            {
              "--x": p.x,
              "--size": p.size,
              "--dur": p.dur,
              "--delay": p.delay,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

/** Concentric orbiting rings with glowing dots */
export function EnergyRings({
  className,
  size = 160,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div
      className={cn("pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2", className)}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <div
        className="orbit-ring absolute inset-0"
        style={{ "--orbit-dur": "14s" } as React.CSSProperties}
      >
        <span className="orbit-dot" />
      </div>
      <div
        className="orbit-ring absolute inset-[18%]"
        style={{ "--orbit-dur": "9s", animationDirection: "reverse" } as React.CSSProperties}
      >
        <span className="orbit-dot" style={{ width: 6, height: 6, marginLeft: -3, marginTop: -3 }} />
      </div>
      <div
        className="orbit-ring absolute inset-[32%]"
        style={{ "--orbit-dur": "6s" } as React.CSSProperties}
      >
        <span className="orbit-dot" style={{ width: 5, height: 5, marginLeft: -2.5, marginTop: -2.5 }} />
      </div>
    </div>
  );
}

/** Headline with per-letter reveal */
export function TextReveal({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={cn("text-reveal", className)}>
      {text.split("").map((char, i) => (
        <span key={i} style={{ animationDelay: `${0.03 * i}s` }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
