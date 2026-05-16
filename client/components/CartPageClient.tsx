"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingBag } from "lucide-react";

import { formatPrice, whatsappNumber } from "@/lib/data";
import { cartSubtotal, useCartStore } from "@/store/cartStore";

export function CartPageClient() {
  const { items, updateQuantity, removeItem } = useCartStore();
  const subtotal = cartSubtotal(items);

  const orderMessage = encodeURIComponent(
    `Hello Gift Albania, I would like to place this order:\n${items
      .map((item) => `- ${item.name} x${item.quantity}`)
      .join("\n")}\nSubtotal: ${formatPrice(subtotal)}`,
  );

  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-10 lg:px-8">
      <section className="rounded-[2.5rem] border border-[var(--border-subtle)] bg-white/65 p-8 shadow-card">
        <p className="section-eyebrow">Cart</p>
        <h1 className="section-title">Your selected memories</h1>
      </section>

      {items.length ? (
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={`${item.id}-${item.customization ?? "default"}`}
                className="rounded-[2rem] border border-[var(--border-subtle)] bg-white/70 p-5 shadow-card"
              >
                <div className="flex flex-col gap-5 sm:flex-row">
                  <div className="relative h-36 w-full overflow-hidden rounded-[1.5rem] sm:w-28">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h2 className="font-heading text-3xl italic text-[var(--accent-charcoal)]">{item.name}</h2>
                        <p className="mt-2 text-sm text-[var(--text-muted)]">{formatPrice(item.price)}</p>
                        {item.customization ? (
                          <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{item.customization}</p>
                        ) : null}
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.customization)}
                        className="text-sm uppercase tracking-[0.25em] text-[var(--text-muted)] transition hover:text-[var(--accent-charcoal)]"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="mt-5 flex items-center gap-3">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1, item.customization)} className="icon-button">
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-8 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1, item.customization)} className="icon-button">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--accent-charcoal)] p-8 text-[var(--bg-primary)] shadow-card">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Summary</p>
            <h2 className="mt-3 font-heading text-4xl italic">Order overview</h2>
            <div className="mt-8 flex items-center justify-between text-sm text-white/70">
              <span>Subtotal</span>
              <span className="text-lg text-white">{formatPrice(subtotal)}</span>
            </div>
            <p className="mt-5 text-sm leading-7 text-white/60">
              Checkout continues on WhatsApp so we can confirm personalization, timing, and delivery details directly with you.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${orderMessage}`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 block rounded-full bg-[var(--accent-gold)] px-5 py-4 text-center text-sm uppercase tracking-[0.28em] text-[var(--accent-charcoal)] transition hover:bg-[var(--accent-gold-light)]"
            >
              Proceed to Checkout
            </a>
          </aside>
        </div>
      ) : (
        <div className="mt-10 rounded-[2.5rem] border border-dashed border-[var(--border-subtle)] bg-white/60 p-16 text-center shadow-card">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
            <ShoppingBag className="h-8 w-8 text-[var(--accent-gold)]" />
          </div>
          <h2 className="mt-6 font-heading text-4xl italic text-[var(--accent-charcoal)]">Your cart is empty</h2>
          <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">
            Find a keepsake, decor piece, or custom model that deserves a place here.
          </p>
          <Link href="/shop" className="button-primary mx-auto mt-8 w-fit">
            Continue shopping
          </Link>
        </div>
      )}
    </div>
  );
}
