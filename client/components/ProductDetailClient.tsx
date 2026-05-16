"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ChevronRight } from "lucide-react";

import { ProductCard } from "@/components/ProductCard";
import { WishlistButton } from "@/components/WishlistButton";
import { Product, formatPrice, getRelatedProducts } from "@/lib/data";
import { useCartStore } from "@/store/cartStore";

type ProductDetailClientProps = {
  product: Product;
};

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState(product.gallery[0] ?? product.image);
  const [customText, setCustomText] = useState("");
  const addItem = useCartStore((state) => state.addItem);

  const relatedProducts = useMemo(
    () => getRelatedProducts(product.slug, product.category),
    [product.category, product.slug],
  );

  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-10 lg:px-8">
      <nav className="mb-8 flex items-center gap-2 text-sm text-[var(--text-muted)]">
        <Link href="/">Home</Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/shop">Shop</Link>
        <ChevronRight className="h-4 w-4" />
        <span>{product.name}</span>
      </nav>

      <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[var(--border-subtle)] bg-white/70 shadow-card">
            <div className="group relative aspect-[4/4.6] overflow-hidden">
              <Image src={selectedImage} alt={product.name} fill className="object-cover transition duration-700 group-hover:scale-110" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.gallery.map((image) => (
              <button
                key={image}
                onClick={() => setSelectedImage(image)}
                className={`relative aspect-square overflow-hidden rounded-[1.5rem] border ${
                  selectedImage === image ? "border-[var(--accent-gold)]" : "border-[var(--border-subtle)]"
                }`}
              >
                <Image src={image} alt={product.name} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[2.5rem] border border-[var(--border-subtle)] bg-white/70 p-8 shadow-card">
          <p className="section-eyebrow">{product.category}</p>
          <div className="mt-4 flex items-start justify-between gap-4">
            <h1 className="font-heading text-5xl italic text-[var(--accent-charcoal)]">
              {product.name}
            </h1>
            <WishlistButton
              item={{
                id: product.id,
                slug: product.slug,
                name: product.name,
                price: product.price,
                image: product.image,
              }}
            />
          </div>
          <p className="mt-5 text-2xl text-[var(--accent-charcoal)]">{formatPrice(product.price)}</p>
          <p className="mt-6 text-base leading-8 text-[var(--text-muted)]">{product.description}</p>

          <div className="mt-8 space-y-3 rounded-[1.75rem] bg-[var(--bg-secondary)]/70 p-6">
            <h2 className="font-heading text-3xl italic text-[var(--accent-charcoal)]">
              Personalization
            </h2>
            <p className="text-sm leading-7 text-[var(--text-muted)]">
              Add names, dates, engraving notes, or design direction. We&apos;ll confirm the final details with you before production.
            </p>
            {product.customizable ? (
              <textarea
                value={customText}
                onChange={(event) => setCustomText(event.target.value)}
                rows={5}
                className="input-field resize-none"
                placeholder="Example: Add 'Elira & Ardit · 14.06.2026' in an elegant script."
              />
            ) : (
              <p className="rounded-[1.25rem] border border-[var(--border-subtle)] bg-white/70 px-4 py-3 text-sm text-[var(--text-muted)]">
                This piece is crafted as shown, but we can still discuss custom variations on request.
              </p>
            )}
          </div>

          <ul className="mt-8 space-y-3">
            {product.details.map((detail) => (
              <li key={detail} className="rounded-[1.3rem] border border-[var(--border-subtle)] bg-white/55 px-4 py-3 text-sm text-[var(--text-muted)]">
                {detail}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() =>
                addItem({
                  id: product.id,
                  name: product.name,
                  slug: product.slug,
                  price: product.price,
                  image: product.image,
                  customization: customText.trim() || undefined,
                })
              }
              className="button-primary"
            >
              Add to Cart
            </button>
            <Link href="/custom" className="button-secondary">
              Request a Custom Order
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="section-eyebrow">Related pieces</p>
            <h2 className="section-title">You may also love</h2>
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </section>
    </div>
  );
}
