import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import ScrollProgress from "@/components/ScrollProgress";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = Figtree({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: { default: "Zarqa Munawar | Online Maths Tutor", template: "%s | Zarqa Munawar" },
  description: "Online maths tuition for all grades and levels by Zarqa Munawar, MSc Mathematics (3.89/4 CGPA). 1-on-1 lessons, exam prep, assignments, LMS help and C++ basics. Free trial lesson.",
  keywords: ["online maths tuition", "maths tutor Pakistan", "MSc Mathematics tutor", "online tutor", "C++ basics"],
};
export const viewport: Viewport = { themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#050912" }, { media: "(prefers-color-scheme: light)", color: "#f1f6fc" }] };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${body.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "try{if(localStorage.getItem('theme')!=='light')document.documentElement.classList.add('dark')}catch(e){document.documentElement.classList.add('dark')}" }} />
      </head>
      <body>
        <Background />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
