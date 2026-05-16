"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type WishlistItem = {
  id: number;
  slug: string;
  name: string;
  price: number;
  image: string;
};

type WishlistStore = {
  items: WishlistItem[];
  isOpen: boolean;
  toggleItem: (item: WishlistItem) => void;
  hasItem: (id: number) => boolean;
  toggleWishlist: (next?: boolean) => void;
};

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      toggleItem: (item) =>
        set((state) => ({
          items: state.items.some((wishlistItem) => wishlistItem.id === item.id)
            ? state.items.filter((wishlistItem) => wishlistItem.id !== item.id)
            : [...state.items, item],
        })),
      hasItem: (id) => get().items.some((item) => item.id === id),
      toggleWishlist: (next) => set((state) => ({ isOpen: next ?? !state.isOpen })),
    }),
    {
      name: "gift-albania-wishlist",
      partialize: (state) => ({ items: state.items }),
    },
  ),
);
