import Image from "next/image";

import { CustomOrderForm } from "@/components/CustomOrderForm";
import { galleryFallback } from "@/lib/data";

export const metadata = {
  title: "Custom Orders",
  description:
    "Create personalized gifts, decor, and 3D architectural scale models with Gift Albania's bespoke order flow.",
};

export default function CustomPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-10 lg:px-8">
      <section className="relative overflow-hidden rounded-[2.8rem] border border-[var(--border-subtle)] bg-white/65 px-8 py-14 shadow-card">
        <div className="hero-blob hero-blob-one opacity-60" />
        <div className="hero-blob hero-blob-two opacity-50" />
        <div className="relative z-10 max-w-3xl">
          <p className="section-eyebrow">Custom orders</p>
          <h1 className="section-title">Make It Yours</h1>
          <p className="mt-5 text-lg leading-8 text-[var(--text-muted)]">
            Tell us the message, memory, person, or place behind the piece and we&apos;ll shape it into something beautiful.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <CustomOrderForm />
      </section>

      <section className="mt-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="section-eyebrow">Past custom work</p>
            <h2 className="section-title">A glimpse into what we create</h2>
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {galleryFallback.slice(0, 8).map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-[1.8rem] border border-[var(--border-subtle)] bg-white/70"
            >
              <div className="relative aspect-[4/5]">
                <Image src={item.image} alt={item.caption} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
