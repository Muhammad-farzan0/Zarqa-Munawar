"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GraduationCap, Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);

  return (
    <header className="sticky top-0 z-50 border-b border-fg/10 bg-ink-950/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2.5 font-display text-lg font-semibold text-fg">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-500 text-white"><GraduationCap size={19} /></span>
          {site.name}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {nav.map((n) => {
            const active = n.href === "/" ? path === "/" : path.startsWith(n.href);
            return (
              <Link key={n.href} href={n.href} className={`relative rounded-full px-4 py-2 text-sm transition-colors ${active ? "text-fg" : "text-slate-400 hover:text-fg"}`}>
                {active && <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-fg/10" transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2"><ThemeToggle /><Link href="/contact" className="hidden rounded-full bg-brand-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-400 md:block">Book free trial</Link>

        <button className="grid h-10 w-10 place-items-center rounded-full border border-fg/15 text-fg md:hidden" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button></div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav aria-label="Mobile" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-fg/10 bg-ink-950 md:hidden">
            <div className="flex flex-col px-5 py-3">
              {nav.map((n) => (
                <Link key={n.href} href={n.href} className={`rounded-lg px-3 py-3 text-base ${path === n.href ? "bg-fg/10 text-fg" : "text-slate-300"}`}>{n.label}</Link>
              ))}
              <Link href="/contact" className="mt-2 rounded-full bg-brand-500 py-3 text-center font-semibold text-white">Book free trial</Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
