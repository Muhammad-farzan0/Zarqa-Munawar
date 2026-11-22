# Zarqa Munawar: Portfolio Website

Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide icons.

## Run
```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```
Deploy: push to GitHub and import into Vercel (no settings needed).

## Light and dark mode
Toggle in the navbar; choice is saved in the browser (dark by default).

## Reviews
Add real reviews to the `reviews` list at the bottom of `src/lib/site.ts`. The section stays hidden while the list is empty.

## Edit content
Everything (phone, email, services, education, experience, FAQs) lives in `src/lib/site.ts`.

## Pages
Home, About, Services, Experience, Contact.

## Notes
- Background icons live in `src/components/Background.tsx`: a fixed layer, animated by CSS timers, not by scroll.
- Contact form sends to WhatsApp or email (no backend needed).
- Fonts (Bricolage Grotesque, Figtree) load from Google Fonts at build time, so the first build needs internet.

## Contact form email setup (EmailJS)
1. Create a free EmailJS account, add an Email Service (Gmail) and an Email Template that uses {{name}}, {{contact}}, {{level}}, {{subject}}, {{message}}.
2. Copy `.env.example` to `.env.local` and paste Service ID, Template ID and Public Key. Restart `npm run dev`.
3. On Vercel add the same three variables (Settings > Environment Variables) and redeploy.
4. In EmailJS > Account > Security, limit allowed domains to your live site.
