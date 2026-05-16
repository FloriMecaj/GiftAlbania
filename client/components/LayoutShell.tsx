import { ReactNode } from "react";

import { CartSidebar } from "@/components/CartSidebar";
import { CustomCursor } from "@/components/CustomCursor";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { PageTransition } from "@/components/PageTransition";
import { WishlistSidebar } from "@/components/WishlistSidebar";

type LayoutShellProps = {
  children: ReactNode;
};

export function LayoutShell({ children }: LayoutShellProps) {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <CartSidebar />
      <WishlistSidebar />
      <PageTransition>
        <main className="pt-24">{children}</main>
        <Footer />
      </PageTransition>
    </>
  );
}
