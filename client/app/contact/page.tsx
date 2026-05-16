import { Facebook, Instagram, MessageCircle } from "lucide-react";

import { whatsappNumber } from "@/lib/data";

export const metadata = {
  title: "Contact",
  description:
    "Contact Gift Albania for custom orders, bulk gifting, and general inquiries. WhatsApp is the fastest way to order.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-10 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <section className="rounded-[2.5rem] border border-[var(--border-subtle)] bg-white/65 p-8 shadow-card">
          <p className="section-eyebrow">Contact</p>
          <h1 className="section-title">Let&apos;s talk about the piece you have in mind</h1>
          <p className="mt-5 text-base leading-8 text-[var(--text-muted)]">
            Reach out for custom orders, corporate gifting, or general inquiries. We reply within 24 hours.
          </p>
          <div className="mt-8 space-y-4">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-[1.5rem] border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/70 px-5 py-4 text-[var(--accent-charcoal)]"
            >
              <MessageCircle className="h-5 w-5 text-[var(--accent-gold)]" />
              WhatsApp direct
            </a>
            <a
              href="https://www.instagram.com/gift.albania/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-[1.5rem] border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/70 px-5 py-4 text-[var(--accent-charcoal)]"
            >
              <Instagram className="h-5 w-5 text-[var(--accent-gold)]" />
              Instagram DM
            </a>
            <a
              href="https://www.facebook.com/106476830905640"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-[1.5rem] border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/70 px-5 py-4 text-[var(--accent-charcoal)]"
            >
              <Facebook className="h-5 w-5 text-[var(--accent-gold)]" />
              Facebook page
            </a>
          </div>
        </section>

        <form className="rounded-[2.5rem] border border-[var(--border-subtle)] bg-white/75 p-8 shadow-card">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm text-[var(--text-muted)]">Name</span>
              <input className="input-field" placeholder="Your full name" />
            </label>
            <label className="space-y-2">
              <span className="text-sm text-[var(--text-muted)]">Email</span>
              <input type="email" className="input-field" placeholder="you@example.com" />
            </label>
            <label className="space-y-2">
              <span className="text-sm text-[var(--text-muted)]">Phone</span>
              <input className="input-field" placeholder="+355 ..." />
            </label>
            <label className="space-y-2">
              <span className="text-sm text-[var(--text-muted)]">Inquiry Type</span>
              <select className="input-field">
                <option>Custom Order</option>
                <option>Bulk/Corporate</option>
                <option>General</option>
              </select>
            </label>
            <label className="space-y-2 md:col-span-2">
              <span className="text-sm text-[var(--text-muted)]">Message</span>
              <textarea
                rows={7}
                className="input-field resize-none"
                placeholder="Tell us what you need and how you would like it to feel."
              />
            </label>
          </div>
          <button className="button-primary mt-8">Send message</button>
          <p className="mt-4 text-sm text-[var(--text-muted)]">We reply within 24 hours.</p>
        </form>
      </div>
    </div>
  );
}
