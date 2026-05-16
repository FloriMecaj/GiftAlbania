"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Instagram, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { galleryFallback, type GalleryItem } from "@/lib/data";

const filters = ["All", "Gifts", "Home Decor", "3D Models", "Behind the Scenes"] as const;

type InstagramGridProps = {
  initialItems?: GalleryItem[];
  preview?: boolean;
};

export function InstagramGrid({ initialItems = galleryFallback, preview = false }: InstagramGridProps) {
  const [items, setItems] = useState<GalleryItem[]>(initialItems);
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (preview) {
      return;
    }

    const loadPosts = async () => {
      try {
        const response = await fetch("/api/instagram", { cache: "no-store" });
        if (!response.ok) {
          return;
        }
        const data = (await response.json()) as { items?: GalleryItem[] };
        if (data.items?.length) {
          setItems(data.items);
        }
      } catch {
        setItems(initialItems);
      }
    };

    void loadPosts();
  }, [initialItems, preview]);

  const filteredItems = useMemo(() => {
    const source = preview ? items.slice(0, 4) : items;
    if (activeFilter === "All") {
      return source;
    }
    return source.filter((item) => item.category === activeFilter);
  }, [activeFilter, items, preview]);

  return (
    <>
      {!preview ? (
        <div className="mb-8 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                activeFilter === filter
                  ? "border-[var(--accent-gold)] bg-[var(--accent-gold)] text-white"
                  : "border-[var(--border-subtle)] bg-white/60 text-[var(--accent-charcoal)] hover:border-[var(--accent-gold)]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      ) : null}
      <motion.div layout className={preview ? "grid grid-cols-4 gap-2" : "columns-1 gap-4 sm:columns-2 lg:columns-3"}>
        {filteredItems.map((item, index) => (
          <motion.button
            layout
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: preview ? 0 : index * 0.03 }}
            onClick={() => setSelected(item)}
            className="group relative mb-4 block w-full overflow-hidden rounded-[1.75rem] border border-[var(--border-subtle)] bg-white/75 text-left shadow-card"
          >
            <div className={`relative ${preview ? "aspect-square" : "min-h-[260px]"}`}>
              <Image src={item.image} alt={item.caption} fill unoptimized className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(42,40,37,0.55)] via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-6 p-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="flex items-center justify-between">
                  <p className="max-w-[80%] text-sm leading-6 text-[var(--bg-primary)]">{item.caption}</p>
                  <Instagram className="h-5 w-5 text-[var(--accent-gold-light)]" />
                </div>
              </div>
            </div>
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-[rgba(42,40,37,0.82)] px-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ y: 32, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 32, opacity: 0 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] bg-[var(--bg-primary)]"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-[var(--accent-charcoal)] p-2 text-[var(--bg-primary)]"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="grid gap-0 md:grid-cols-[1.2fr_0.8fr]">
                <div className="relative min-h-[420px]">
                  <Image src={selected.image} alt={selected.caption} fill unoptimized className="object-cover" />
                </div>
                <div className="flex flex-col justify-between p-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-[var(--text-muted)]">
                      {selected.category}
                    </p>
                    <h3 className="mt-4 font-heading text-4xl italic text-[var(--accent-charcoal)]">
                      Inspiration from Gift Albania
                    </h3>
                    <p className="mt-4 text-base leading-7 text-[var(--text-muted)]">
                      {selected.caption}
                    </p>
                  </div>
                  <a
                    href={selected.permalink ?? "https://www.instagram.com/gift.albania/"}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-[var(--accent-gold)] px-5 py-3 text-sm uppercase tracking-[0.25em] text-[var(--accent-charcoal)] transition hover:bg-[var(--accent-charcoal)] hover:text-[var(--bg-primary)]"
                  >
                    <Instagram className="h-4 w-4" />
                    View on Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
