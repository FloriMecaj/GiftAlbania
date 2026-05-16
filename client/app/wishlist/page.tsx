import { Metadata } from "next";

import { WishlistPageClient } from "@/components/WishlistPageClient";

export const metadata: Metadata = {
  title: "Wishlist",
  description: "Save your favorite Gift Albania products and return when the moment is right.",
};

export default function WishlistPage() {
  return <WishlistPageClient />;
}
