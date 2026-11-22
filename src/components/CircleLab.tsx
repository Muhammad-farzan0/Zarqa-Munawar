"use client";
import { useState } from "react";

/** Interactive hero: x² + y² = r² drawn live, with area and circumference. */
export default function CircleLab() {
  const [r, setR] = useState(5);
  const px = r * 11;
  const angle = (-35 * Math.PI) / 180;
  const dot = { x: px * Math.cos(angle), y: px * Math.sin(angle) };
  const fmt = (n: number) => n.toFixed(2);

  return (
    <div className="rounded-3xl border border-fg/10 bg-ink-900/80 p-5 backdrop-blur md:p-6">
      <div className="flex items-baseline justify-between">
        <p className="font-display text-xl text-fg">x² + y² = {fmt(r * r)}</p>
        <p className="text-sm text-slate-400">Try it: drag the radius</p>
      </div>
      <svg viewBox="-130 -130 260 260" role="img" aria-label={`Circle with radius ${r}`} className="mx-auto my-3 h-64 w-full max-w-xs">
        <line x1="-125" y1="0" x2="125" y2="0" className="stroke-brand-400/40" />
        <line x1="0" y1="-125" x2="0" y2="125" className="stroke-brand-400/40" />
        <circle cx="0" cy="0" r={px} className="fill-brand-500/15 stroke-brand-400" strokeWidth="2" style={{ transition: "r 0.25s ease" }} />
        <line x1="0" y1="0" x2={dot.x} y2={dot.y} className="stroke-fg" strokeWidth="1.5" strokeDasharray="4 3" style={{ transition: "all 0.25s ease" }} />
        <circle cx={dot.x} cy={dot.y} r="5" className="fill-fg" style={{ transition: "all 0.25s ease" }} />
        <text x={dot.x / 2 + 6} y={dot.y / 2 - 6} className="fill-brand-300" fontSize="13">r = {r}</text>
      </svg>
      <label className="block text-sm text-slate-300">
        <span className="sr-only">Radius</span>
        <input type="range" min={1} max={10} step={0.5} value={r} onChange={(e) => setR(Number(e.target.value))} className="w-full accent-brand-500" />
      </label>
      <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-xl bg-fg/5 p-3"><dt className="text-slate-400">Area = πr²</dt><dd className="mt-1 font-display text-lg text-fg">{fmt(Math.PI * r * r)}</dd></div>
        <div className="rounded-xl bg-fg/5 p-3"><dt className="text-slate-400">Circumference = 2πr</dt><dd className="mt-1 font-display text-lg text-fg">{fmt(2 * Math.PI * r)}</dd></div>
      </dl>
    </div>
  );
}
