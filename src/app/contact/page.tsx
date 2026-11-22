import type { Metadata } from "next";
import { Mail, MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  const rows = [
    { icon: Phone, label: "Call", value: site.phone, href: `tel:+${site.phoneIntl}` },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat now", href: waLink() },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  ];
  return (
    <>
      <PageHero title="Book your free trial lesson">
        Tell me your level and what you need help with. I will reply with available timings.
      </PageHero>
      <section className="mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-4">
          {rows.map((r) => (
            <a key={r.label} href={r.href} target={r.label === "WhatsApp" ? "_blank" : undefined} rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-fg/10 bg-ink-900/70 p-5 backdrop-blur transition hover:border-brand-400/50">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500/15 text-brand-400"><r.icon size={22} /></span>
              <span><span className="block text-sm text-slate-400">{r.label}</span><span className="break-all font-semibold text-fg">{r.value}</span></span>
            </a>
          ))}
          <div className="flex items-center gap-4 rounded-2xl border border-fg/10 bg-ink-900/70 p-5 backdrop-blur">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500/15 text-brand-400"><MapPin size={22} /></span>
            <span><span className="block text-sm text-slate-400">Where</span><span className="font-semibold text-fg">{site.location}</span></span>
          </div>
          <p className="flex items-center gap-2 px-1 text-sm text-slate-400"><Clock size={16} className="text-brand-400" />Flexible timings for all grades and levels.</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
