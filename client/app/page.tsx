import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { KeywordCarousel } from "@/components/KeywordCarousel";
import { ProductCard } from "@/components/ProductCard";
import { products, shopCategories } from "@/lib/data";

export const metadata = {
  title: "Gift Albania",
  description:
    "Warm, premium personalized gifts from Albania. Explore decor, keepsakes, and 3D scale models made to hold memory.",
};

export default function HomePage() {
  return (
    <div>
      <section className="hero-surface relative overflow-hidden px-5 pb-20 pt-12 lg:px-8 lg:pt-8">
        <div className="hero-blob hero-blob-one" />
        <div className="hero-blob hero-blob-two" />
        <div className="hero-grain" />
        <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-white/60 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[var(--text-muted)] backdrop-blur-sm">
              Dhurata te personalizuara
            </div>
            <div className="mt-8">
              <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-[var(--border-subtle)] bg-white/75 shadow-glow">
                <Image
                  src="/images/logo.jpg"
                  alt="Gift Albania logo"
                  width={80}
                  height={80}
                  priority
                  unoptimized
                  className="h-full w-full object-cover"
                />
              </div>
              <h1 className="hero-title mt-8 font-heading text-6xl italic leading-none text-[var(--accent-charcoal)] sm:text-7xl lg:text-[6.5rem]">
                Gift Albania
              </h1>
              <p className="stagger-line mt-6 max-w-xl text-lg leading-8 text-[var(--text-muted)] sm:text-xl">
                Let&apos;s create memories that last a lifetime.
              </p>
              <p className="mt-6 max-w-xl text-base leading-8 text-[var(--text-muted)]">
                Personalized gifts, elegant home and office decor, and detailed 3D architectural scale models curated with warmth, intention, and atelier-level finish.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/shop" className="button-primary">
                Shop Gifts
              </Link>
              <Link href="/custom" className="button-secondary">
                Custom Orders
              </Link>
            </div>
          </div>

          <div className="relative z-10">
            <div className="relative mx-auto max-w-[30rem] overflow-hidden rounded-[2.5rem] border border-[var(--border-subtle)] bg-white/70 p-4 shadow-card">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                <Image src="/images/image13.jpg" alt="Gift Albania featured decor" fill className="object-cover" />
              </div>
              <div className="absolute inset-x-8 bottom-8 rounded-[1.75rem] border border-white/40 bg-[rgba(250,247,242,0.82)] p-5 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--text-muted)]">Curated with love</p>
                <h2 className="mt-3 font-heading text-4xl italic text-[var(--accent-charcoal)]">
                  Each piece begins as a feeling.
                </h2>
                <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                  From engraved keepsakes to architectural models, every order is built to feel personal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee-shell border-y border-[var(--border-subtle)] py-5">
        <KeywordCarousel
          className="w-full"
          itemClassName="text-sm"
          items={[
            "Personalized Gifts",
            "Home Decor",
            "3D Models",
            "Made with Love",
            "Albania",
          ]}
        />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="section-eyebrow">Categories</p>
            <h2 className="section-title">A gift atelier with many forms</h2>
          </div>
          <Link href="/shop" className="hidden items-center gap-2 text-sm uppercase tracking-[0.25em] text-[var(--accent-charcoal)] md:inline-flex">
            Explore all
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {shopCategories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group overflow-hidden rounded-[2rem] border border-[var(--border-subtle)] bg-white/65 shadow-card transition duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={category.image} alt={category.title} fill className="object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(42,40,37,0.62)] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-heading text-4xl italic text-[var(--bg-primary)]">
                    {category.title}
                  </h3>
                  <div className="mt-4 h-px w-16 bg-[var(--accent-gold)] transition-all duration-500 group-hover:w-28" />
                  <p className="mt-4 text-sm leading-6 text-[rgba(250,247,242,0.82)]">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-4 lg:px-8">
        <div className="rounded-[2.5rem] border border-[var(--border-subtle)] bg-white/60 px-6 py-10 shadow-card sm:px-10">
          <p className="section-eyebrow">Best sellers</p>
          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="section-title">Pieces people choose when the moment matters</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--text-muted)]">
                Romantic gifts, signature decor, and presentation-worthy models for homes, offices, and milestones.
              </p>
            </div>
            <Link href="/shop" className="button-secondary">
              View the collection
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
