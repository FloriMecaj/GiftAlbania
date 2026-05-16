"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { instagramStats } from "@/lib/data";

const stats = [
  { label: "Instagram followers", value: instagramStats.followers },
  { label: "Posts shared", value: instagramStats.posts },
  { label: "Memories created", value: "Countless" },
];

const values = [
  {
    title: "Personalization",
    text: "Each order begins with a story, not a stock template.",
  },
  {
    title: "Quality",
    text: "Materials, finishing, and presentation are treated with atelier-level care.",
  },
  {
    title: "Emotion",
    text: "The goal is never just decor. It is the feeling the piece leaves behind.",
  },
];

export function AboutPageClient() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-10 lg:px-8">
      <section className="relative overflow-hidden rounded-[2.8rem] border border-[var(--border-subtle)] bg-white/65 p-8 shadow-card">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="section-eyebrow">About Gift Albania</p>
            <h1 className="section-title">Born in Albania, crafted for the world</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
              Gift Albania creates pieces that feel intimate, elevated, and deeply personal. From custom keepsakes to home styling accents and architectural models, the brand exists to make memory tangible.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-[2.2rem] border border-[var(--border-subtle)]">
            <div className="relative aspect-[4/4.8]">
              <Image src="/images/logo.jpg" alt="Gift Albania atelier" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="rounded-[2rem] border border-[var(--border-subtle)] bg-white/70 p-8 text-center shadow-card"
          >
            <p className="font-heading text-5xl italic text-[var(--accent-charcoal)]">{stat.value}</p>
            <p className="mt-3 text-sm uppercase tracking-[0.25em] text-[var(--text-muted)]">{stat.label}</p>
          </motion.div>
        ))}
      </section>

      <section className="mt-16">
        <p className="section-eyebrow">Values</p>
        <h2 className="section-title">What stays at the center of every order</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-[2rem] border border-[var(--border-subtle)] bg-white/70 p-8 shadow-card"
            >
              <h3 className="font-heading text-4xl italic text-[var(--accent-charcoal)]">{value.title}</h3>
              <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-[2.3rem] border border-[var(--border-subtle)] bg-[var(--accent-charcoal)] px-8 py-10 text-[var(--bg-primary)]">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Follow the journey</p>
            <h2 className="mt-3 font-heading text-4xl italic">@gift.albania</h2>
          </div>
          <a
            href="https://www.instagram.com/gift.albania/"
            target="_blank"
            rel="noreferrer"
            className="button-gold"
          >
            Visit Instagram
          </a>
        </div>
      </section>
    </div>
  );
}
