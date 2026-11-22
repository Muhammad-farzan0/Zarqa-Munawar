"use client";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  function toggle() {
    const dark = document.documentElement.classList.toggle("dark");
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch { /* storage unavailable */ }
  }
  return (
    <button type="button" onClick={toggle} aria-label="Switch between light and dark mode" title="Switch theme"
      className="grid h-10 w-10 place-items-center rounded-full border border-fg/15 text-fg transition hover:bg-fg/10">
      <Sun size={19} className="hidden dark:block" />
      <Moon size={19} className="dark:hidden" />
    </button>
  );
}
