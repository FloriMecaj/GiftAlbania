"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, ShoppingBag, X } from "lucide-react";

import { formatPrice } from "@/lib/data";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";

export function WishlistSidebar() {
  const { items, isOpen, toggleWishlist, toggleItem } = useWishlistStore();
  const addItem = useCartStore((state) => state.addItem);

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => toggleWishlist(false)}
            className="fixed inset-0 z-40 bg-[rgba(42,40,37,0.45)] backdrop-blur-sm"
            aria-label="Close wishlist"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-[var(--accent-charcoal)] px-6 py-6 text-[var(--bg-primary)] shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">Favorites</p>
                <h2 className="mt-2 font-heading text-3xl italic">Saved for later</h2>
              </div>
              <button
                onClick={() => toggleWishlist(false)}
                className="rounded-full border border-white/15 p-2 text-white/70 transition hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="rounded-full border border-white/10 p-5">
                    <Heart className="h-10 w-10 text-[var(--accent-rose)]" />
                  </div>
                  <h3 className="mt-6 font-heading text-3xl italic">Your favorites are empty</h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/65">
                    Save pieces that feel meaningful and come back when the moment is right.
                  </p>
                  <Link
                    href="/shop"
                    onClick={() => toggleWishlist(false)}
                    className="mt-6 rounded-full border border-[var(--accent-gold)] px-5 py-3 text-sm uppercase tracking-[0.25em] text-[var(--bg-primary)] transition hover:bg-[var(--accent-gold)] hover:text-[var(--accent-charcoal)]"
                  >
                    Visit shop
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      layout
                      key={item.id}
                      className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4"
                    >
                      <div className="flex gap-4">
                        <div className="relative h-24 w-20 overflow-hidden rounded-2xl">
                          <Image src={item.image} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <h3 className="font-heading text-2xl italic">{item.name}</h3>
                              <p className="mt-1 text-sm text-white/60">{formatPrice(item.price)}</p>
                            </div>
                            <button
                              onClick={() => toggleItem(item)}
                              className="text-xs uppercase tracking-[0.25em] text-white/50 transition hover:text-white"
                            >
                              Remove
                            </button>
                          </div>
                          <div className="mt-4 flex flex-wrap gap-3">
                            <Link
                              href={`/product/${item.slug}`}
                              onClick={() => toggleWishlist(false)}
                              className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/80 transition hover:border-[var(--accent-gold)]"
                            >
                              View
                            </Link>
                            <button
                              onClick={() =>
                                addItem({
                                  id: item.id,
                                  name: item.name,
                                  slug: item.slug,
                                  price: item.price,
                                  image: item.image,
                                })
                              }
                              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-gold)] px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--accent-charcoal)] transition hover:bg-[var(--accent-gold-light)]"
                            >
                              <ShoppingBag className="h-3.5 w-3.5" />
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-white/10 pt-5">
              <Link
                href="/wishlist"
                onClick={() => toggleWishlist(false)}
                className="block rounded-full border border-[var(--accent-gold)] px-5 py-4 text-center text-sm uppercase tracking-[0.28em] text-[var(--bg-primary)] transition hover:bg-[var(--accent-gold)] hover:text-[var(--accent-charcoal)]"
              >
                Open Wishlist Page
              </Link>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
