"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasVisited = window.sessionStorage.getItem("gift-albania-loaded");
    if (!hasVisited) {
      setIsVisible(true);
      window.sessionStorage.setItem("gift-albania-loaded", "true");
      const timeout = window.setTimeout(() => setIsVisible(false), 1800);
      return () => window.clearTimeout(timeout);
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-[var(--bg-primary)]"
        >
          <motion.div
            initial={{ scale: 0.82, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border border-[var(--border-subtle)] bg-white/80 p-4 shadow-glow">
              <Image src="/images/logo.jpg" alt="Gift Albania logo" fill className="object-cover" />
            </div>
            <p className="mt-6 font-heading text-4xl italic text-[var(--accent-charcoal)]">
              Gift Albania
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
