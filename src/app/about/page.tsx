import type { Metadata } from "next";
import { BookOpen, Languages, Award } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { skills, site, yearsTeaching } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <>
      <PageHero title="A teacher who explains the why, not just the steps">
        I am {site.name}. I have been teaching since {site.since}, in school classrooms and now online, and I believe every student can learn maths when it is explained at the right pace.
      </PageHero>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-3">
        <Reveal className="md:col-span-2">
          <div className="h-full rounded-3xl border border-fg/10 bg-ink-900/70 p-7 backdrop-blur md:p-9">
            <h2 className="text-2xl font-semibold">My approach</h2>
            <p className="mt-4 leading-relaxed text-slate-400">
              I am a passionate educator with experience creating engaging, inclusive learning spaces. I plan lessons carefully, manage a class with patience and adapt my methods to each student, whether we meet in a classroom or on a screen.
            </p>
            <p className="mt-4 leading-relaxed text-slate-400">
              With {yearsTeaching()}+ years of teaching, my focus is on concept clarity first, then practice, then tests. Students leave a lesson knowing how to solve the next problem on their own.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="h-full rounded-3xl border border-brand-400/30 bg-brand-500/10 p-7 backdrop-blur">
            <Award className="text-brand-400" size={28} />
            <p className="mt-4 font-display text-5xl font-semibold text-fg">3.89</p>
            <p className="mt-1 text-sm text-slate-300">CGPA out of 4.0 in M.Sc. Mathematics, Virtual University of Pakistan, with a half scholarship in two semesters.</p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 pt-6 md:grid-cols-3">
        <Reveal className="md:col-span-2">
          <div className="h-full rounded-3xl border border-fg/10 bg-ink-900/70 p-7 backdrop-blur">
            <h2 className="flex items-center gap-2 text-2xl font-semibold"><BookOpen size={22} className="text-brand-400" />Skills</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {skills.map((s) => <li key={s} className="rounded-full border border-fg/15 px-4 py-1.5 text-sm text-slate-200">{s}</li>)}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="h-full rounded-3xl border border-fg/10 bg-ink-900/70 p-7 backdrop-blur">
            <h2 className="flex items-center gap-2 text-2xl font-semibold"><Languages size={22} className="text-brand-400" />Languages</h2>
            <ul className="mt-5 space-y-3 text-slate-300">
              <li className="flex justify-between border-b border-fg/10 pb-3"><span>Urdu</span><span className="text-slate-400">Native</span></li>
              <li className="flex justify-between"><span>English</span><span className="text-slate-400">Professional</span></li>
            </ul>
          </div>
        </Reveal>
      </section>
    </>
  );
}
