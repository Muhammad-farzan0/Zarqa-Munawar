"use client";
import { useState } from "react";
import { BookOpenCheck, CalendarCheck, ClipboardCheck, MessageCircle, Quote, Star, UserCheck } from "lucide-react";
import { reviewCategories, reviews, waLink, type ReviewCategory } from "@/lib/site";

export default function Reviews() {
  const [tab, setTab] = useState<ReviewCategory | "All">("All");
  if (reviews.length === 0) return <Expect />;
  const tabs = ["All" as const, ...reviewCategories.filter((c) => reviews.some((r) => r.category === c))];
  const shown = tab === "All" ? reviews : reviews.filter((r) => r.category === tab);

  return (
    <section className="mx-auto max-w-6xl px-5 pt-24">
      <h2 className="text-3xl font-semibold md:text-5xl">What students say</h2>
      <div role="tablist" aria-label="Review categories" className="mt-6 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)}
            className={`rounded-full border px-4 py-2 text-sm transition ${tab === t ? "border-brand-500 bg-brand-500 text-white" : "border-fg/15 text-slate-300 hover:bg-fg/10"}`}>{t}</button>
        ))}
      </div>
      <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((r) => (
          <li key={r.name + r.text} className="rounded-2xl border border-fg/10 bg-ink-900/70 p-6 backdrop-blur">
            <Quote size={22} className="text-brand-400" />
            <p className="mt-3 leading-relaxed text-slate-300">{r.text}</p>
            <div className="mt-4 flex items-center gap-1 text-brand-400" aria-label={`${r.rating} out of 5 stars`}>
              {Array.from({ length: r.rating }).map((_, i) => <Star key={i} size={15} fill="currentColor" />)}
            </div>
            <p className="mt-2 font-display text-fg">{r.name}</p>
            <p className="text-sm text-slate-400">{r.role} · {r.category}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

const expect = [
  { icon: BookOpenCheck, title: "Concept clarity first", text: "Lessons explain why a method works, so you can solve new problems on your own." },
  { icon: UserCheck, title: "One-on-one attention", text: "Every lesson is built around your level and the topics you find hardest." },
  { icon: ClipboardCheck, title: "Practice and tests", text: "Regular tests, practice questions and homework discussion before exams." },
  { icon: CalendarCheck, title: "Organised assignment support", text: "Step-by-step explanations and a clear plan around your deadlines." },
];

function Expect() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-24">
      <h2 className="text-3xl font-semibold md:text-5xl">What to expect in every lesson</h2>
      <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {expect.map((e) => (
          <li key={e.title} className="rounded-2xl border border-fg/10 bg-ink-900/70 p-6 backdrop-blur">
            <e.icon size={26} className="text-brand-400" />
            <h3 className="mt-4 text-lg font-semibold">{e.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{e.text}</p>
          </li>
        ))}
      </ul>
      <a href={waLink("Hello Zarqa, I studied with you and would like to share my feedback: ")} target="_blank" rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-300 hover:text-brand-400">
        <MessageCircle size={18} /> Studied with Zarqa? Share your feedback
      </a>
    </section>
  );
}
