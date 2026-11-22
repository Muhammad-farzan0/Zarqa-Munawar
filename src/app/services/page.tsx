import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { services, subjects } from "@/lib/site";

export const metadata: Metadata = { title: "Services" };

export default function Services() {
  return (
    <>
      <PageHero title="Teaching and academic support, in one place">
        Online classes for all grades and levels, with flexible timings. Maths is the main subject, with statistics and computer subjects as strong second areas. Other subjects on request.
      </PageHero>

      <section className="mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 2) * 0.07}>
            <article className="h-full rounded-3xl border border-fg/10 bg-ink-900/70 p-7 backdrop-blur transition hover:border-brand-400/50">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500/15 text-brand-400"><s.icon size={24} /></span>
                <h2 className="text-xl font-semibold">{s.title}</h2>
              </div>
              <p className="mt-4 leading-relaxed text-slate-400">{s.text}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {s.points.map((p) => <li key={p} className="flex items-center gap-2"><Check size={16} className="text-brand-400" />{p}</li>)}
              </ul>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-16">
        <Reveal>
          <h2 className="text-2xl font-semibold md:text-3xl">Topics I teach</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {subjects.map((s) => <li key={s} className="rounded-full bg-fg/5 px-4 py-2 text-sm text-slate-200">{s}</li>)}
          </ul>
          <Link href="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 font-semibold text-white transition hover:bg-brand-400">Ask about your course <ArrowRight size={18} /></Link>
        </Reveal>
      </section>
    </>
  );
}
