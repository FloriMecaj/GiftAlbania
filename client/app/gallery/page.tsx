import { InstagramGrid } from "@/components/InstagramGrid";

export const metadata = {
  title: "Gallery",
  description:
    "Browse inspiration from Gift Albania, including personalized gifts, decor styling, and 3D model craftsmanship.",
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-10 lg:px-8">
      <section className="rounded-[2.5rem] border border-[var(--border-subtle)] bg-white/65 p-8 shadow-card">
        <p className="section-eyebrow">Inspiration gallery</p>
        <h1 className="section-title">Moments, details, and pieces in the wild</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--text-muted)]">
          Discover recent Instagram posts from Gift Albania, with fallback inspiration from our curated local gallery whenever the feed is unavailable.
        </p>
      </section>

      <section className="mt-10">
        <InstagramGrid />
      </section>
    </div>
  );
}
