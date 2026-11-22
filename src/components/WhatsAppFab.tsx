import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export default function WhatsAppFab() {
  return (
    <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-lg shadow-black/40 transition hover:scale-105">
      <MessageCircle size={26} />
    </a>
  );
}
