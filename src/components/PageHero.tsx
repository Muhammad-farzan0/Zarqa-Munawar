import type { ReactNode } from "react";

export default function PageHero({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-10 pt-16 md:pt-24">
      <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">{title}</h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">{children}</p>
    </section>
  );
}
