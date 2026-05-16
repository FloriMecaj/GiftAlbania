"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: number;
  name: string;
  slug: string;
  price: number;
  image: string;
  quantity: number;
  customization?: string;
};

type CartStore = {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: number, customization?: string) => void;
  updateQuantity: (id: number, quantity: number, customization?: string) => void;
  toggleCart: (next?: boolean) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      isOpen: false,
      addItem: (item) =>
        set((state) => {
          const existing = state.items.find(
            (cartItem) =>
              cartItem.id === item.id && cartItem.customization === item.customization,
          );

          if (existing) {
            return {
              items: state.items.map((cartItem) =>
                cartItem.id === item.id && cartItem.customization === item.customization
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem,
              ),
            };
          }

          return {
            items: [...state.items, { ...item, quantity: 1 }],
          };
        }),
      removeItem: (id, customization) =>
        set((state) => ({
          items: state.items.filter(
            (item) => !(item.id === id && item.customization === customization),
          ),
        })),
      updateQuantity: (id, quantity, customization) =>
        set((state) => ({
          items:
            quantity <= 0
              ? state.items.filter(
                  (item) => !(item.id === id && item.customization === customization),
                )
              : state.items.map((item) =>
                  item.id === id && item.customization === customization
                    ? { ...item, quantity }
                    : item,
                ),
        })),
      toggleCart: (next) => set((state) => ({ isOpen: next ?? !state.isOpen })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "gift-albania-cart",
      partialize: (state) => ({ items: state.items }),
    },
  ),
);

export const cartSubtotal = (items: CartItem[]) =>
  items.reduce((sum, item) => sum + item.price * item.quantity, 0);
