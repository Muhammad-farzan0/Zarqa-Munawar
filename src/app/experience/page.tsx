import type { Metadata } from "next";
import { Briefcase, GraduationCap } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { education, experience } from "@/lib/site";

export const metadata: Metadata = { title: "Experience & Education" };

type Row = { title: string; place: string; period: string; detail: string };

function Timeline({ rows }: { rows: Row[] }) {
  return (
    <ol className="relative ml-3 border-l border-brand-400/40">
      {rows.map((r, i) => (
        <Reveal key={r.title} delay={i * 0.05}>
          <li className="relative list-none pb-9 pl-8 last:pb-0">
            <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-brand-400 bg-ink-950" />
            <p className="text-sm text-brand-300">{r.period}</p>
            <h3 className="mt-1 text-xl font-semibold">{r.title}</h3>
            <p className="text-slate-300">{r.place}</p>
            <p className="mt-2 max-w-xl leading-relaxed text-slate-400">{r.detail}</p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}

export default function Experience() {
  return (
    <>
      <PageHero title="Classroom roots, online reach">
        From a village elementary school to remote lectures for students everywhere, with a strong academic record behind it.
      </PageHero>
      <section className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
        <div>
          <h2 className="mb-8 flex items-center gap-3 text-2xl font-semibold"><Briefcase className="text-brand-400" />Teaching experience</h2>
          <Timeline rows={experience} />
        </div>
        <div>
          <h2 className="mb-8 flex items-center gap-3 text-2xl font-semibold"><GraduationCap className="text-brand-400" />Education</h2>
          <Timeline rows={education} />
        </div>
      </section>
    </>
  );
}
