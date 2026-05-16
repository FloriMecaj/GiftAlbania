"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    setEnabled(media.matches);

    const handleMove = (event: MouseEvent) => {
      const next = { x: event.clientX, y: event.clientY };
      targetRef.current = next;
      setPosition(next);
    };

    const updateRing = () =>
      setRingPosition((current) => ({
        x: current.x + (targetRef.current.x - current.x) * 0.16,
        y: current.y + (targetRef.current.y - current.y) * 0.16,
      }));

    const handleMedia = () => setEnabled(media.matches);

    window.addEventListener("mousemove", handleMove);
    media.addEventListener("change", handleMedia);
    const interval = window.setInterval(updateRing, 16);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      media.removeEventListener("change", handleMedia);
      window.clearInterval(interval);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <span
        className="pointer-events-none fixed left-0 top-0 z-[70] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-gold)] mix-blend-multiply"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />
      <span
        className="pointer-events-none fixed left-0 top-0 z-[69] h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(250,247,242,0.9)] bg-[rgba(250,247,242,0.12)] backdrop-blur-sm"
        style={{ transform: `translate(${ringPosition.x}px, ${ringPosition.y}px)` }}
      />
    </>
  );
}
