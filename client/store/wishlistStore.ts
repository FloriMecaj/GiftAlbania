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
  toggleItem: (item: WishlistItem) => void;
  hasItem: (id: number) => boolean;
};

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      toggleItem: (item) =>
        set((state) => ({
          items: state.items.some((wishlistItem) => wishlistItem.id === item.id)
            ? state.items.filter((wishlistItem) => wishlistItem.id !== item.id)
            : [...state.items, item],
        })),
      hasItem: (id) => get().items.some((item) => item.id === id),
    }),
    {
      name: "gift-albania-wishlist",
    },
  ),
);
