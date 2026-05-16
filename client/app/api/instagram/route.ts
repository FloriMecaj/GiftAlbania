import { NextResponse } from "next/server";

import { galleryFallback, type GalleryItem } from "@/lib/data";

export const dynamic = "force-dynamic";

const profileUrl = "https://www.instagram.com/gift.albania/";

function normalizeCaption(caption: string | undefined, index: number) {
  return caption?.trim() || `Gift Albania post ${index + 1}`;
}

function inferCategory(caption: string): GalleryItem["category"] {
  const lower = caption.toLowerCase();

  if (lower.includes("model") || lower.includes("architect")) {
    return "3D Models";
  }
  if (lower.includes("home") || lower.includes("decor")) {
    return "Home Decor";
  }
  if (lower.includes("studio") || lower.includes("behind")) {
    return "Behind the Scenes";
  }
  return "Gifts";
}

export async function GET() {
  try {
    const response = await fetch(profileUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error("Instagram feed unavailable");
    }

    const html = await response.text();
    const imageMatches = [...html.matchAll(/"display_url":"([^"]+)"/g)].slice(0, 12);
    const captionMatches = [...html.matchAll(/"accessibility_caption":"([^"]*)"/g)].slice(0, 12);

    if (!imageMatches.length) {
      throw new Error("No posts found");
    }

    const items: GalleryItem[] = imageMatches.map((match, index) => {
      const image = match[1].replaceAll("\\u0026", "&").replaceAll("\\", "");
      const caption = normalizeCaption(captionMatches[index]?.[1]?.replaceAll("\\", ""), index);

      return {
        id: `instagram-${index}`,
        image,
        caption,
        category: inferCategory(caption),
        permalink: profileUrl,
      };
    });

    return NextResponse.json({ items });
  } catch {
    return NextResponse.json({ items: galleryFallback, fallback: true });
  }
}
