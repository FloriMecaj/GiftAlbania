"use client";

import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { clsx } from "clsx";

import { useWishlistStore } from "@/store/wishlistStore";

type WishlistButtonProps = {
  item: {
    id: number;
    slug: string;
    name: string;
    price: number;
    image: string;
  };
  className?: string;
};

export function WishlistButton({ item, className }: WishlistButtonProps) {
  const { toggleItem, items } = useWishlistStore();
  const isActive = items.some((wishlistItem) => wishlistItem.id === item.id);

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.08 }}
      onClick={() => toggleItem(item)}
      className={clsx(
        "inline-flex h-11 w-11 items-center justify-center rounded-full border transition",
        isActive
          ? "border-[var(--accent-rose)] bg-[var(--accent-rose)]/15 text-[var(--accent-rose)]"
          : "border-[var(--border-subtle)] bg-white/70 text-[var(--accent-charcoal)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)]",
        className,
      )}
      aria-label={isActive ? "Remove from wishlist" : "Add to wishlist"}
    >
      <motion.span
        key={isActive ? "active" : "inactive"}
        initial={{ scale: 0.8, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <Heart className={clsx("h-5 w-5", isActive && "fill-current")} />
      </motion.span>
    </motion.button>
  );
}
