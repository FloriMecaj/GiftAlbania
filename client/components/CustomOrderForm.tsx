"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Instagram } from "lucide-react";

import { whatsappNumber } from "@/lib/data";

const steps = [
  "Choose the product type",
  "Add your message, names, or engraving details",
  "Upload inspiration if you have it",
  "Send the inquiry and we will reply within 24 hours",
];

export function CustomOrderForm() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="rounded-[2rem] border border-[var(--border-subtle)] bg-white/70 p-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.35em] text-[var(--text-muted)]">How it works</p>
        <h2 className="mt-4 font-heading text-5xl italic text-[var(--accent-charcoal)]">
          Make it personal
        </h2>
        <div className="mt-8 space-y-5">
          {steps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex gap-4 rounded-[1.4rem] bg-[var(--bg-secondary)]/80 p-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-charcoal)] text-[var(--bg-primary)]">
                0{index + 1}
              </div>
              <p className="text-sm leading-7 text-[var(--text-muted)]">{step}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 rounded-[1.5rem] border border-[var(--border-subtle)] bg-[var(--accent-charcoal)] px-5 py-4 text-[var(--bg-primary)]">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-[var(--accent-gold-light)]" />
            <p className="text-sm">We&apos;ll contact you within 24 hours.</p>
          </div>
        </div>
      </div>

      <form className="rounded-[2rem] border border-[var(--border-subtle)] bg-white/75 p-8 shadow-card">
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
            <span className="text-sm text-[var(--text-muted)]">Phone / WhatsApp</span>
            <input className="input-field" placeholder="+355 ..." />
          </label>
          <label className="space-y-2">
            <span className="text-sm text-[var(--text-muted)]">Product Type</span>
            <select className="input-field">
              <option>Personalized Gift</option>
              <option>Home Decor</option>
              <option>Office Decor</option>
              <option>3D Architectural Model</option>
            </select>
          </label>
          <label className="space-y-2 md:col-span-2">
            <span className="text-sm text-[var(--text-muted)]">Custom Message</span>
            <textarea
              rows={6}
              className="input-field resize-none"
              placeholder="Tell us the name, message, date, style, or the feeling you want the piece to hold."
            />
          </label>
          <label className="space-y-2 md:col-span-2">
            <span className="text-sm text-[var(--text-muted)]">Upload Reference Image</span>
            <input type="file" className="input-field file:mr-4 file:rounded-full file:border-0 file:bg-[var(--accent-gold)] file:px-4 file:py-2 file:text-sm file:text-[var(--accent-charcoal)]" />
          </label>
        </div>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-full bg-[var(--accent-charcoal)] px-6 py-4 text-sm uppercase tracking-[0.28em] text-[var(--bg-primary)] transition hover:bg-[var(--accent-gold)] hover:text-[var(--accent-charcoal)]">
            Submit inquiry
          </button>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--accent-gold)] px-6 py-4 text-sm uppercase tracking-[0.28em] text-[var(--accent-charcoal)] transition hover:bg-[var(--accent-gold)]"
          >
            Quick order on WhatsApp
          </a>
          <a
            href="https://www.instagram.com/gift.albania/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-subtle)] px-6 py-4 text-sm uppercase tracking-[0.2em] text-[var(--accent-charcoal)] transition hover:border-[var(--accent-gold)]"
          >
            <Instagram className="h-4 w-4" />
            DM on Instagram
          </a>
        </div>
      </form>
    </div>
  );
}
