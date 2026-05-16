"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";

import { cartSubtotal, useCartStore } from "@/store/cartStore";
import { formatPrice, whatsappNumber } from "@/lib/data";

export function CartSidebar() {
  const { items, isOpen, toggleCart, removeItem, updateQuantity } = useCartStore();
  const subtotal = cartSubtotal(items);
  const orderMessage = encodeURIComponent(
    `Hello Gift Albania, I would like to place an order:\n${items
      .map((item) => `- ${item.name} x${item.quantity}`)
      .join("\n")}\nSubtotal: ${formatPrice(subtotal)}`,
  );

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => toggleCart(false)}
            className="fixed inset-0 z-40 bg-[rgba(42,40,37,0.45)] backdrop-blur-sm"
            aria-label="Close cart"
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
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">Your Bag</p>
                <h2 className="mt-2 font-heading text-3xl italic">Curated memories</h2>
              </div>
              <button
                onClick={() => toggleCart(false)}
                className="rounded-full border border-white/15 p-2 text-white/70 transition hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="rounded-full border border-white/10 p-5">
                    <ShoppingBag className="h-10 w-10 text-[var(--accent-gold-light)]" />
                  </div>
                  <h3 className="mt-6 font-heading text-3xl italic">Your cart feels a little empty</h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/65">
                    Add a piece worth gifting, keeping, or celebrating.
                  </p>
                  <Link
                    href="/shop"
                    onClick={() => toggleCart(false)}
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
                      key={`${item.id}-${item.customization ?? "default"}`}
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
                              onClick={() => removeItem(item.id, item.customization)}
                              className="text-xs uppercase tracking-[0.25em] text-white/50 transition hover:text-white"
                            >
                              Remove
                            </button>
                          </div>
                          {item.customization ? (
                            <p className="mt-2 text-xs leading-5 text-white/60">{item.customization}</p>
                          ) : null}
                          <div className="mt-4 flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1, item.customization)}
                              className="rounded-full border border-white/15 p-2"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="min-w-6 text-center text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1, item.customization)}
                              className="rounded-full border border-white/15 p-2"
                            >
                              <Plus className="h-4 w-4" />
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
              <div className="mb-4 flex items-center justify-between text-sm text-white/75">
                <span>Subtotal</span>
                <span className="text-lg text-white">{formatPrice(subtotal)}</span>
              </div>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${orderMessage}`}
                target="_blank"
                rel="noreferrer"
                className="block rounded-full bg-[var(--accent-gold)] px-5 py-4 text-center text-sm uppercase tracking-[0.28em] text-[var(--accent-charcoal)] transition hover:bg-[var(--accent-gold-light)]"
              >
                Proceed to Checkout
              </a>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
