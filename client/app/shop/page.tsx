import { Metadata } from "next";

import { ShopPageClient } from "@/components/ShopPageClient";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse personalized gifts, home decor, office decor, and 3D architectural models from Gift Albania.",
};

export default function ShopPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  return <ShopPageClient initialCategory={searchParams?.category ?? "All"} />;
}
