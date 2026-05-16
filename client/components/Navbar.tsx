"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Instagram, Menu, Search, ShoppingBag, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navLinks } from "@/lib/data";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const items = useCartStore((state) => state.items);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const wishlistItems = useWishlistStore((state) => state.items);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition duration-500 ${
          isScrolled
            ? "border-b border-[var(--border-subtle)] bg-[rgba(250,247,242,0.82)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[var(--border-subtle)] bg-white/75">
              <Image
                src="/images/logo.jpg"
                alt="Gift Albania logo"
                width={48}
                height={48}
                priority
                unoptimized
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="font-heading text-2xl italic text-[var(--accent-charcoal)]">Gift Albania</p>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--text-muted)]">
                Dhurata te personalizuara
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} className="group relative text-sm uppercase tracking-[0.24em] text-[var(--accent-charcoal)]">
                  {link.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-px bg-[var(--accent-gold)] transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button className="icon-button" aria-label="Search">
              <Search className="h-4 w-4" />
            </button>
            <Link href="/wishlist" className="icon-button relative" aria-label="Wishlist">
              <Heart className="h-4 w-4" />
              {wishlistItems.length ? (
                <span className="badge-count">{wishlistItems.length}</span>
              ) : null}
            </Link>
            <button onClick={() => toggleCart(true)} className="icon-button relative" aria-label="Cart">
              <ShoppingBag className="h-4 w-4" />
              {cartCount ? <span className="badge-count">{cartCount}</span> : null}
            </button>
            <a
              href="https://www.instagram.com/gift.albania/"
              target="_blank"
              rel="noreferrer"
              className="icon-button"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="icon-button lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[75] bg-[rgba(250,247,242,0.98)] px-6 py-6 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <p className="font-heading text-3xl italic text-[var(--accent-charcoal)]">Gift Albania</p>
              <button onClick={() => setIsOpen(false)} className="icon-button">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-16 flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-heading text-5xl italic text-[var(--accent-charcoal)]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-12 flex items-center gap-4">
              <button onClick={() => { setIsOpen(false); toggleCart(true); }} className="icon-button relative">
                <ShoppingBag className="h-5 w-5" />
                {cartCount ? <span className="badge-count">{cartCount}</span> : null}
              </button>
              <Link href="/wishlist" onClick={() => setIsOpen(false)} className="icon-button relative">
                <Heart className="h-5 w-5" />
                {wishlistItems.length ? <span className="badge-count">{wishlistItems.length}</span> : null}
              </Link>
              <a href="https://www.instagram.com/gift.albania/" target="_blank" rel="noreferrer" className="icon-button">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
