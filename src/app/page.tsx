import Link from "next/link";
import { ArrowRight, MessageCircle, Award, GraduationCap, Clock } from "lucide-react";
import CircleLab from "@/components/CircleLab";
import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import Reviews from "@/components/Reviews";
import { services, steps, subjects, waLink, yearsTeaching } from "@/lib/site";

export default function Home() {
  const loop = [...subjects, ...subjects];
  const stats = [
    { n: <Counter to={3.89} decimals={2} />, l: "CGPA in M.Sc. Mathematics (out of 4)" },
    { n: <Counter to={yearsTeaching()} suffix="+" />, l: "Years teaching, since 2021" },
    { n: <Counter to={8} />, l: "Areas of academic support" },
    { n: <>1-on-1</>, l: "Personal lessons at your level" },
  ];

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-14 md:pt-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-400/40 bg-brand-500/10 px-4 py-1.5 text-sm text-brand-300">
            <GraduationCap size={16} /> Online classes with a free trial lesson
          </p>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">Maths that finally makes sense.</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            I am Zarqa Munawar, an M.Sc. Mathematics graduate teaching online since 2021. Personal lessons, tests and practice questions for all grades and levels.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 font-semibold text-white transition hover:bg-brand-400">Book a free trial <ArrowRight size={18} /></Link>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-fg/20 px-7 py-3.5 font-semibold text-fg transition hover:bg-fg/10"><MessageCircle size={18} /> WhatsApp me</a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
            <li className="flex items-center gap-2"><Award size={16} className="text-brand-400" />M.Sc. Mathematics, 3.89/4</li>
            <li className="flex items-center gap-2"><Award size={16} className="text-brand-400" />B.Ed., 3.44/4</li>
            <li className="flex items-center gap-2"><Clock size={16} className="text-brand-400" />Flexible timings</li>
          </ul>
        </div>
        <CircleLab />
      </section>

      <section className="mx-auto max-w-6xl px-5">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-fg/10 bg-fg/10 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className="bg-ink-900/90 p-6">
              <dt className="order-2 mt-1 text-sm text-slate-400">{s.l}</dt>
              <dd className="font-display text-4xl font-semibold text-fg">{s.n}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-24">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-semibold md:text-5xl">Everything you need to study with confidence</h2>
          <p className="mt-4 max-w-xl text-slate-400">Maths is the core, with support around it for the work that comes with studying.</p>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.06}>
              <div className="h-full rounded-2xl border border-fg/10 bg-ink-900/70 p-5 backdrop-blur transition hover:border-brand-400/50">
                <s.icon className="text-brand-400" size={26} />
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Link href="/services" className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-300 hover:text-brand-400">See all services <ArrowRight size={18} /></Link>
      </section>

      <section className="mt-24 overflow-hidden border-y border-fg/10 bg-ink-900/60 py-5">
        <div className="marquee" aria-label="Subjects taught">
          <div className="marquee-track flex w-max gap-10 whitespace-nowrap font-display text-2xl text-slate-300">
            {loop.map((s, i) => <span key={i} aria-hidden={i >= subjects.length}>{s}<span className="ml-10 text-brand-500">+</span></span>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-24">
        <Reveal><h2 className="text-3xl font-semibold md:text-5xl">How lessons work</h2></Reveal>
        <ol className="mt-10 grid gap-4 md:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <li className="h-full list-none rounded-2xl border border-fg/10 bg-ink-900/70 p-6 backdrop-blur">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-500 font-display font-semibold text-white">{i + 1}</span>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <Reviews />

      <section className="mx-auto max-w-3xl px-5 pt-24">
        <Reveal><h2 className="mb-8 text-3xl font-semibold md:text-5xl">Questions, answered</h2></Reveal>
        <FAQ />
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-24">
        <div className="rounded-3xl bg-brand-500 p-8 md:p-14">
          <h2 className="max-w-2xl text-3xl font-semibold text-white md:text-5xl">Try a lesson first. Decide after.</h2>
          <p className="mt-4 max-w-xl text-white/85">Your first trial lesson is free. Message me and we will find a time that suits you.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#050912] px-7 py-3.5 font-semibold text-white transition hover:bg-[#111b2e]">Book your free trial <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  );
}
