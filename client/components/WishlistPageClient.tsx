"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/data";
import { useWishlistStore } from "@/store/wishlistStore";

export function WishlistPageClient() {
  const items = useWishlistStore((state) => state.items);
  const wishlistProducts = products.filter((product) =>
    items.some((wishlistItem) => wishlistItem.id === product.id),
  );

  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-10 lg:px-8">
      <section className="rounded-[2.5rem] border border-[var(--border-subtle)] bg-white/65 p-8 shadow-card">
        <p className="section-eyebrow">Wishlist</p>
        <h1 className="section-title">Pieces you want to come back to</h1>
      </section>

      {wishlistProducts.length ? (
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {wishlistProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-[2.5rem] border border-dashed border-[var(--border-subtle)] bg-white/60 p-16 text-center shadow-card">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
            <Heart className="h-8 w-8 text-[var(--accent-rose)]" />
          </div>
          <h2 className="mt-6 font-heading text-4xl italic text-[var(--accent-charcoal)]">Your wishlist is waiting</h2>
          <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">
            Save the gifts and decor pieces that feel most like someone you love.
          </p>
          <Link href="/shop" className="button-primary mx-auto mt-8 w-fit">
            Explore the shop
          </Link>
        </div>
      )}
    </div>
  );
}
