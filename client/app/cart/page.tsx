import { Metadata } from "next";

import { CartPageClient } from "@/components/CartPageClient";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review your selected Gift Albania pieces and continue checkout on WhatsApp.",
};

export default function CartPage() {
  return <CartPageClient />;
}
