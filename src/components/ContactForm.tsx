"use client";
import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Loader2, MessageCircle, Send } from "lucide-react";
import { waLink } from "@/lib/site";

const levels = ["School (Class 1–8)", "Matric / O-Level", "Intermediate / A-Level", "University / BS / MSc", "Other"];
const field = "mt-1.5 w-full rounded-xl border border-fg/15 bg-ink-950/70 px-4 py-3 text-fg placeholder:text-slate-500 focus:border-brand-400";

type Status = { kind: "idle" | "sending" | "ok" | "error"; text: string };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle", text: "" });
  const lastSent = useRef(0);

  function read(form: HTMLFormElement) {
    const d = new FormData(form);
    const g = (k: string) => String(d.get(k) ?? "").trim();
    return { name: g("name"), contact: g("contact"), level: g("level"), subject: g("subject"), message: g("message"), website: g("website") };
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const v = read(form);
    if (!v.name || !v.contact || !v.message) { setStatus({ kind: "error", text: "Please enter your name, email or phone, and a short message." }); return; }
    if (v.website) { setStatus({ kind: "ok", text: "Thank you! Your message has been sent." }); return; } // honeypot: bots only
    if (Date.now() - lastSent.current < 30_000) { setStatus({ kind: "error", text: "Please wait a few seconds before sending again." }); return; }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) { setStatus({ kind: "error", text: "Email is not set up yet. Please use WhatsApp." }); return; }

    setStatus({ kind: "sending", text: "Sending your message..." });
    try {
      await emailjs.send(serviceId, templateId, { name: v.name, contact: v.contact, level: v.level, subject: v.subject || "-", message: v.message }, { publicKey });
      lastSent.current = Date.now();
      form.reset();
      setStatus({ kind: "ok", text: "Thank you! Your message has been sent. I will reply soon." });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({ kind: "error", text: "Could not send the message. Please try again or use WhatsApp." });
    }
  }

  function whatsapp(form: HTMLFormElement) {
    const v = read(form);
    if (!v.name || !v.message) { setStatus({ kind: "error", text: "Please enter your name and a short message first." }); return; }
    const text = `Hello Zarqa, I am ${v.name}.\nLevel: ${v.level}\nSubject: ${v.subject || "Maths"}\n\n${v.message}`;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
    setStatus({ kind: "ok", text: "Opening WhatsApp with your message." });
  }

  const sending = status.kind === "sending";

  return (
    <form className="rounded-3xl border border-fg/10 bg-ink-900/80 p-6 backdrop-blur md:p-8" onSubmit={onSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm text-slate-300">Your name<input name="name" maxLength={100} className={field} placeholder="Full name" autoComplete="name" /></label>
        <label className="text-sm text-slate-300">Email or phone<input name="contact" maxLength={120} className={field} placeholder="So I can reply to you" autoComplete="email" /></label>
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="text-sm text-slate-300">Level
          <select name="level" className={field} defaultValue={levels[0]}>{levels.map((l) => <option key={l}>{l}</option>)}</select>
        </label>
        <label className="text-sm text-slate-300">Subject or course<input name="subject" maxLength={120} className={field} placeholder="e.g. Calculus, Class 10 Maths, C++" /></label>
      </div>
      <label className="mt-5 block text-sm text-slate-300">Message<textarea name="message" rows={5} maxLength={3000} className={field} placeholder="Tell me what you need help with and your preferred timings." /></label>

      {/* Honeypot: hidden from people, filled by bots */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <p role={status.kind === "error" ? "alert" : "status"} aria-live="polite"
        className={`mt-4 min-h-6 text-sm ${status.kind === "error" ? "text-red-600 dark:text-red-300" : "text-brand-300"}`}>{status.text}</p>

      <div className="mt-3 flex flex-wrap gap-3">
        <button type="submit" disabled={sending} className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 font-semibold text-white transition hover:bg-brand-400 disabled:opacity-60">
          {sending ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}Send message
        </button>
        <button type="button" onClick={(e) => { if (e.currentTarget.form) whatsapp(e.currentTarget.form); }}
          className="inline-flex items-center gap-2 rounded-full bg-[#25d366] px-6 py-3 font-semibold text-black transition hover:brightness-110"><MessageCircle size={18} />Send on WhatsApp</button>
      </div>
    </form>
  );
}
