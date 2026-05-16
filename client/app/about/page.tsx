import { Metadata } from "next";

import { AboutPageClient } from "@/components/AboutPageClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Gift Albania, an Albanian boutique brand creating personalized gifts, decor, and 3D models with emotion and care.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
