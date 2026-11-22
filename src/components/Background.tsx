import type { CSSProperties } from "react";
import { Pi, Sigma, Infinity as InfinityIcon, Calculator, BookOpen, GraduationCap, Ruler, Triangle, Divide } from "lucide-react";

type Item = { k: string; x: number; y: number; s: number; dx: number; dy: number; rot: number; dur: number; delay: number };

const items: Item[] = [
  { k: "pi", x: 6, y: 12, s: 56, dx: 40, dy: 60, rot: 20, dur: 14, delay: 0 },
  { k: "sigma", x: 84, y: 10, s: 52, dx: -50, dy: 40, rot: -25, dur: 17, delay: -4 },
  { k: "cap", x: 46, y: 6, s: 44, dx: 30, dy: 70, rot: 12, dur: 19, delay: -8 },
  { k: "inf", x: 92, y: 42, s: 60, dx: -40, dy: -50, rot: 15, dur: 16, delay: -2 },
  { k: "book", x: 4, y: 48, s: 52, dx: 50, dy: -40, rot: -18, dur: 18, delay: -6 },
  { k: "calc", x: 70, y: 66, s: 48, dx: -30, dy: -60, rot: 22, dur: 15, delay: -10 },
  { k: "ruler", x: 22, y: 80, s: 54, dx: 40, dy: -30, rot: -30, dur: 20, delay: -3 },
  { k: "tri", x: 56, y: 88, s: 50, dx: -40, dy: -40, rot: 25, dur: 13, delay: -7 },
  { k: "div", x: 34, y: 34, s: 40, dx: 30, dy: 50, rot: -15, dur: 21, delay: -5 },
  { k: "x2", x: 14, y: 28, s: 38, dx: 30, dy: 40, rot: 10, dur: 18, delay: -9 },
  { k: "int", x: 78, y: 28, s: 64, dx: -30, dy: 50, rot: -10, dur: 22, delay: -12 },
  { k: "sqrt", x: 62, y: 46, s: 54, dx: 40, dy: -30, rot: 14, dur: 17, delay: -1 },
  { k: "circle", x: 88, y: 84, s: 44, dx: -50, dy: -30, rot: -20, dur: 19, delay: -11 },
  { k: "eq", x: 40, y: 62, s: 44, dx: -30, dy: 40, rot: 8, dur: 16, delay: -13 },
];

const glyph: Record<string, string> = { x2: "x²", int: "∫", sqrt: "√", circle: "x²+y²=r²", eq: "=" };

function Symbol({ k, s }: { k: string; s: number }) {
  const p = { size: s, strokeWidth: 1.4, "aria-hidden": true as const };
  switch (k) {
    case "pi": return <Pi {...p} />;
    case "sigma": return <Sigma {...p} />;
    case "cap": return <GraduationCap {...p} />;
    case "inf": return <InfinityIcon {...p} />;
    case "book": return <BookOpen {...p} />;
    case "calc": return <Calculator {...p} />;
    case "ruler": return <Ruler {...p} />;
    case "tri": return <Triangle {...p} />;
    case "div": return <Divide {...p} />;
    default:
      return <span style={{ fontSize: s, lineHeight: 1 }} className="font-display font-light">{glyph[k]}</span>;
  }
}

/** Fixed layer behind everything. Icons drift on their own timers and never react to scrolling. */
export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-950">
      <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-brand-600/20 blur-[140px]" />
      <div className="absolute -bottom-52 -right-40 h-[38rem] w-[38rem] rounded-full bg-brand-500/10 blur-[150px]" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: "linear-gradient(#5eb2f0 1px, transparent 1px), linear-gradient(90deg, #5eb2f0 1px, transparent 1px)", backgroundSize: "56px 56px" }}
      />
      {items.map((i) => (
        <div
          key={i.k}
          className="drift absolute text-brand-400/20"
          style={{ left: `${i.x}%`, top: `${i.y}%`, "--dx": `${i.dx}px`, "--dy": `${i.dy}px`, "--rot": `${i.rot}deg`, "--dur": `${i.dur}s`, "--delay": `${i.delay}s` } as CSSProperties}
        >
          <Symbol k={i.k} s={i.s} />
        </div>
      ))}
    </div>
  );
}
