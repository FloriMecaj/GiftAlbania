"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Product, formatPrice } from "@/lib/data";
import { useCartStore } from "@/store/cartStore";
import { WishlistButton } from "@/components/WishlistButton";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-[2rem] border border-[var(--border-subtle)] bg-white/75 p-4 shadow-card backdrop-blur-sm transition"
    >
      <div className="absolute inset-0 rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100 card-shimmer" />
      <div className="relative z-10 flex h-full flex-col">
        <div className="relative overflow-hidden rounded-[1.6rem] bg-[var(--bg-secondary)]">
          <Link href={`/product/${product.slug}`}>
            <div className="relative aspect-[4/4.5] overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />
            </div>
          </Link>
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(42,40,37,0.30)] to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
          {product.customizable ? (
            <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-[rgba(250,247,242,0.86)] px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-[var(--accent-charcoal)]">
              Customize
            </span>
          ) : null}
          {product.isNew ? (
            <span className="absolute bottom-4 left-4 rounded-full bg-[var(--accent-gold)] px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-white">
              New
            </span>
          ) : null}
          <WishlistButton
            item={{
              id: product.id,
              slug: product.slug,
              name: product.name,
              price: product.price,
              image: product.image,
            }}
            className="absolute right-4 top-4"
          />
        </div>
        <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--text-muted)]">
            {product.category}
          </p>
          <Link href={`/product/${product.slug}`}>
            <h3 className="mt-2 font-heading text-3xl italic text-[var(--text-primary)]">
              {product.name}
            </h3>
          </Link>
          <p className="mt-2 flex-1 text-sm leading-6 text-[var(--text-muted)]">
            {product.shortDescription}
          </p>
          <div className="mt-4 flex items-end justify-between gap-3">
            <span className="text-lg font-medium text-[var(--accent-charcoal)]">
              {formatPrice(product.price)}
            </span>
            <button
              onClick={() =>
                addItem({
                  id: product.id,
                  name: product.name,
                  slug: product.slug,
                  price: product.price,
                  image: product.image,
                })
              }
              className="translate-y-3 rounded-full border border-[var(--accent-gold)] px-4 py-2 text-sm text-[var(--accent-charcoal)] opacity-0 transition duration-300 hover:bg-[var(--accent-charcoal)] hover:text-[var(--bg-primary)] group-hover:translate-y-0 group-hover:opacity-100"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
