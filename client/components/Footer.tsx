import Image from "next/image";
import Link from "next/link";

import { InstagramGrid } from "@/components/InstagramGrid";
import { navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/70">
      <div className="marquee-shell border-b border-[var(--border-subtle)] py-4">
        <div className="marquee-track text-xs uppercase tracking-[0.45em] text-[var(--text-muted)]">
          <span>
            Personalized Gifts · Home Decor · 3D Architectural Models · Dhurata
            te personalizuara ·{" "}
          </span>
          <span>
            Personalized Gifts · Home Decor · 3D Architectural Models · Dhurata
            te personalizuara ·{" "}
          </span>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[1fr_0.6fr_0.95fr] lg:px-8">
        <div>
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-[var(--border-subtle)] bg-white/70">
              <Image
                src="/images/logo.jpg"
                alt="Gift Albania logo"
                width={44}
                height={44}
                unoptimized
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="font-heading text-2xl italic text-[var(--accent-charcoal)]">
                Gift Albania
              </p>
              <p className="text-xs text-[var(--text-muted)]">
                Let&apos;s create memories that last a lifetime.
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-[var(--text-muted)]">
            A warm Albanian atelier for meaningful gifting, refined decor, and
            custom-made pieces that carry sentiment.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--text-muted)]">
            Quick links
          </p>
          <div className="mt-4 grid gap-2">
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-heading text-xl italic text-[var(--accent-charcoal)] transition hover:text-[var(--accent-gold)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--text-muted)]">
              Instagram preview
            </p>
            <a
              href="https://www.instagram.com/gift.albania/"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-[var(--accent-gold)]"
            >
              @gift.albania
            </a>
          </div>
          <InstagramGrid preview />
        </div>
      </div>
      <div className="border-t border-[var(--border-subtle)] px-5 py-5 text-center text-sm text-[var(--text-muted)]">
        © 2026 Gift Albania · Crafted with love in Albania
      </div>
    </footer>
  );
}
