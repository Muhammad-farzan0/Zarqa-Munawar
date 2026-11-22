import Link from "next/link";
import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-fg/10 bg-ink-950/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5 font-display text-lg font-semibold text-fg">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-500 text-white"><GraduationCap size={19} /></span>{site.name}
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">{site.role}. Personal online lessons, tests and practice for all grades and levels.</p>
        </div>
        <nav aria-label="Footer">
          <h3 className="font-display text-base">Pages</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => <li key={n.href}><Link className="text-slate-400 transition hover:text-brand-300" href={n.href}>{n.label}</Link></li>)}
          </ul>
        </nav>
        <div>
          <h3 className="font-display text-base">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li className="flex items-center gap-2"><Phone size={16} className="text-brand-400" /><a className="hover:text-brand-300" href={`tel:+${site.phoneIntl}`}>{site.phone}</a></li>
            <li className="flex items-center gap-2"><Mail size={16} className="text-brand-400" /><a className="hover:text-brand-300" href={`mailto:${site.email}`}>{site.email}</a></li>
            <li className="flex items-center gap-2"><MapPin size={16} className="text-brand-400" />{site.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-fg/10 py-5 text-center text-xs text-slate-500">© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
    </footer>
  );
}
