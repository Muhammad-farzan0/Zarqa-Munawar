"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/site";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-fg/10 rounded-2xl border border-fg/10 bg-ink-900/70 backdrop-blur">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-lg text-fg" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}>
              {f.q}
              <Plus size={20} className={`shrink-0 text-brand-400 transition-transform ${isOpen ? "rotate-45" : ""}`} />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  <p className="px-5 pb-5 leading-relaxed text-slate-400">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
