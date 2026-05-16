"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";

import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/lib/data";

const sortOptions = ["Newest", "Price Low-High", "Most Popular"] as const;

type ShopPageClientProps = {
  initialCategory?: string;
};

export function ShopPageClient({ initialCategory = "All" }: ShopPageClientProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState<(typeof sortOptions)[number]>("Newest");

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      if (activeCategory === "All") return true;
      if (activeCategory === "New Arrivals") return product.isNew;
      if (activeCategory === "3D Scale Models") return product.category === "3D Scale Models";
      return product.category === activeCategory;
    });

    if (sortBy === "Price Low-High") {
      return [...filtered].sort((a, b) => a.price - b.price);
    }

    if (sortBy === "Most Popular") {
      return [...filtered].sort((a, b) => Number(b.popular) - Number(a.popular));
    }

    return [...filtered].sort((a, b) => Number(b.isNew) - Number(a.isNew));
  }, [activeCategory, sortBy]);

  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-10 lg:px-8">
      <section className="rounded-[2.5rem] border border-[var(--border-subtle)] bg-white/65 p-8 shadow-card">
        <p className="section-eyebrow">Shop</p>
        <h1 className="section-title">A collection built around meaning</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--text-muted)]">
          Browse personalized gifts, home and office decor, and architectural models designed to feel intimate, polished, and unforgettable.
        </p>
      </section>

      <section className="mt-10 rounded-[2rem] border border-[var(--border-subtle)] bg-white/60 p-5 shadow-card">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <SlidersHorizontal className="h-5 w-5 text-[var(--accent-gold)]" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    activeCategory === category
                      ? "bg-[var(--accent-charcoal)] text-[var(--bg-primary)]"
                      : "text-[var(--accent-charcoal)] hover:bg-[var(--bg-secondary)]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-[var(--text-muted)]">Sort by</span>
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value as (typeof sortOptions)[number])}
              className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-4 py-3 text-sm text-[var(--accent-charcoal)] outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="mt-10">
        {filteredProducts.length ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-dashed border-[var(--border-subtle)] bg-white/55 p-16 text-center">
            <h2 className="font-heading text-4xl italic text-[var(--accent-charcoal)]">
              Nothing here just yet
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">
              Try another category and discover a piece made for the moment you have in mind.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
