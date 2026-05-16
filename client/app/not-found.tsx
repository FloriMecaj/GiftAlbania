import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-5 text-center">
      <p className="section-eyebrow">404</p>
      <h1 className="section-title">This memory could not be found</h1>
      <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">
        The page may have moved, or the piece you were looking for is no longer available.
      </p>
      <Link href="/shop" className="button-primary mt-8">
        Return to shop
      </Link>
    </div>
  );
}
