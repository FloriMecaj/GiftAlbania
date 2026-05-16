import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { ReactNode } from "react";

import "@/styles/globals.css";
import { LayoutShell } from "@/components/LayoutShell";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://giftalbania.example"),
  title: {
    default: "Gift Albania | Personalized Gifts, Decor & 3D Models",
    template: "%s | Gift Albania",
  },
  description:
    "Gift Albania creates personalized gifts, home and office decor, and 3D architectural scale models with a warm boutique aesthetic.",
  icons: {
    icon: "/images/logo.jpg",
    shortcut: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  openGraph: {
    title: "Gift Albania",
    description: "Let's create memories that last a lifetime.",
    url: "https://giftalbania.example",
    siteName: "Gift Albania",
    locale: "sq_AL",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cormorant.variable} ${jost.variable} font-body text-[var(--text-primary)]`}>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
