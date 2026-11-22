import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-28">
      <h1 className="text-5xl font-semibold">404: this page does not exist</h1>
      <p className="mt-4 text-slate-400">The link may be broken or the page may have moved.</p>
      <Link href="/" className="mt-8 inline-block rounded-full bg-brand-500 px-6 py-3 font-semibold text-white">Back to home</Link>
    </section>
  );
}
