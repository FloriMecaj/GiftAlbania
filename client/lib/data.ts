export type ProductCategory =
  | "Personalized Gifts"
  | "Home Decor"
  | "Office Decor"
  | "3D Scale Models";

export type Product = {
  id: number;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  description: string;
  shortDescription: string;
  image: string;
  gallery: string[];
  customizable?: boolean;
  isNew?: boolean;
  popular?: boolean;
  details: string[];
};

export type GalleryItem = {
  id: string;
  image: string;
  caption: string;
  category: "Gifts" | "Home Decor" | "3D Models" | "Behind the Scenes";
  permalink?: string;
};

export const categories = [
  "All",
  "Personalized Gifts",
  "Home Decor",
  "Office Decor",
  "3D Scale Models",
  "New Arrivals",
] as const;

export const shopCategories = [
  {
    title: "Personalized Gifts",
    description: "Custom keepsakes made for milestones, anniversaries, and heartfelt surprises.",
    image: "/images/image1.jpg",
    href: "/shop?category=Personalized%20Gifts",
  },
  {
    title: "Home Decor",
    description: "Warm pieces that soften a room and turn houses into memory-filled homes.",
    image: "/images/image2.jpg",
    href: "/shop?category=Home%20Decor",
  },
  {
    title: "Office Decor",
    description: "Elegant desk and display pieces designed to feel personal and polished.",
    image: "/images/image3.jpg",
    href: "/shop?category=Office%20Decor",
  },
  {
    title: "3D Scale Models",
    description: "Architectural miniatures crafted with detail, emotion, and presentation in mind.",
    image: "/images/image4.jpg",
    href: "/shop?category=3D%20Scale%20Models",
  },
];

export const products: Product[] = [
  {
    id: 1,
    slug: "engraved-keepsake-box",
    name: "Engraved Keepsake Box",
    category: "Personalized Gifts",
    price: 4200,
    description:
      "A velvet-lined keepsake box finished with a custom engraved name or date, designed for jewelry, letters, and precious small memories.",
    shortDescription: "A gold-accented memory box made for names, dates, and forever moments.",
    image: "/images/image5.jpg",
    gallery: ["/images/image5.jpg", "/images/image6.jpg", "/images/image7.jpg"],
    customizable: true,
    isNew: true,
    popular: true,
    details: ["Velvet-lined interior", "Custom name or short message", "Ideal for gifting and anniversaries"],
  },
  {
    id: 2,
    slug: "rose-gold-memory-frame",
    name: "Rose Gold Memory Frame",
    category: "Home Decor",
    price: 3600,
    description:
      "A soft rose-toned standing frame for wedding portraits, newborn photos, and sentimental corners of the home.",
    shortDescription: "A romantic frame for the moments you want to keep close every day.",
    image: "/images/image6.jpg",
    gallery: ["/images/image6.jpg", "/images/image8.jpg", "/images/image2.jpg"],
    customizable: true,
    popular: true,
    details: ["Freestanding display", "Optional engraved plaque", "Warm brushed metallic finish"],
  },
  {
    id: 3,
    slug: "executive-nameplate",
    name: "Executive Nameplate",
    category: "Office Decor",
    price: 2900,
    description:
      "A refined desk nameplate with antique gold accents, suited for studios, offices, and thoughtful corporate gifts.",
    shortDescription: "A personalized desk piece with understated luxury.",
    image: "/images/image7.jpg",
    gallery: ["/images/image7.jpg", "/images/image3.jpg", "/images/image9.jpg"],
    customizable: true,
    details: ["Personalized with name and title", "Layered acrylic finish", "Gift-ready presentation"],
  },
  {
    id: 4,
    slug: "villa-architectural-model",
    name: "Villa Architectural Model",
    category: "3D Scale Models",
    price: 18500,
    description:
      "A detailed presentation model for residential concepts, real-estate showcases, and architectural gifting.",
    shortDescription: "A carefully crafted scale model that turns plans into something tangible.",
    image: "/images/image8.jpg",
    gallery: ["/images/image8.jpg", "/images/image10.jpg", "/images/image11.jpg"],
    isNew: true,
    popular: true,
    details: ["Presentation-grade finish", "Suitable for architecture firms and private commissions", "Built to scale"],
  },
  {
    id: 5,
    slug: "wedding-vow-plaque",
    name: "Wedding Vow Plaque",
    category: "Personalized Gifts",
    price: 5100,
    description:
      "A custom plaque featuring vows, dates, or a short love note, layered in clear acrylic and antique gold.",
    shortDescription: "A romantic display piece for promises worth keeping visible.",
    image: "/images/image9.jpg",
    gallery: ["/images/image9.jpg", "/images/image12.jpg", "/images/image13.jpg"],
    customizable: true,
    details: ["Custom text layout", "Ideal wedding or engagement gift", "Elegant tabletop display"],
  },
  {
    id: 6,
    slug: "signature-shelf-sculpture",
    name: "Signature Shelf Sculpture",
    category: "Home Decor",
    price: 4700,
    description:
      "A sculptural decor piece designed to bring warmth, shape, and boutique detail to open shelves and consoles.",
    shortDescription: "An atelier-style accent for layered, elegant interiors.",
    image: "/images/image10.jpg",
    gallery: ["/images/image10.jpg", "/images/image14.jpg", "/images/image2.jpg"],
    details: ["Lightweight display sculpture", "Neutral luxury palette", "Pairs beautifully with candles and frames"],
  },
  {
    id: 7,
    slug: "corporate-award-display",
    name: "Corporate Award Display",
    category: "Office Decor",
    price: 6200,
    description:
      "A bespoke award-style display piece for brand milestones, team gifts, or executive recognition.",
    shortDescription: "A personalized office statement designed to feel prestigious and personal.",
    image: "/images/image11.jpg",
    gallery: ["/images/image11.jpg", "/images/image15.jpg", "/images/image3.jpg"],
    customizable: true,
    isNew: true,
    details: ["Custom logo or recipient name", "Suitable for company gifting", "Display stand included"],
  },
  {
    id: 8,
    slug: "boutique-building-model",
    name: "Boutique Building Model",
    category: "3D Scale Models",
    price: 22900,
    description:
      "A premium 3D storefront model for developers, presentations, and memory-worthy launch moments.",
    shortDescription: "A polished miniature built to showcase vision and craft.",
    image: "/images/image12.jpg",
    gallery: ["/images/image12.jpg", "/images/image16.jpg", "/images/image17.jpg"],
    popular: true,
    details: ["Layered precision-cut construction", "Custom dimensions available", "Protected display base"],
  },
];

export const galleryFallback: GalleryItem[] = [
  {
    id: "ig-1",
    image: "/images/image1.jpg",
    caption: "Personalized gifts for the moments you never want to forget.",
    category: "Gifts",
    permalink: "https://www.instagram.com/gift.albania/",
  },
  {
    id: "ig-2",
    image: "/images/image2.jpg",
    caption: "Soft home decor styling with warm gold and blush accents.",
    category: "Home Decor",
    permalink: "https://www.instagram.com/gift.albania/",
  },
  {
    id: "ig-3",
    image: "/images/image4.jpg",
    caption: "Detailed 3D scale models crafted for presentation and pride.",
    category: "3D Models",
    permalink: "https://www.instagram.com/gift.albania/",
  },
  {
    id: "ig-4",
    image: "/images/image3.jpg",
    caption: "Office decor that feels elevated, warm, and unmistakably personal.",
    category: "Behind the Scenes",
    permalink: "https://www.instagram.com/gift.albania/",
  },
  {
    id: "ig-5",
    image: "/images/image5.jpg",
    caption: "Engraved details that turn gifting into storytelling.",
    category: "Gifts",
    permalink: "https://www.instagram.com/gift.albania/",
  },
  {
    id: "ig-6",
    image: "/images/image6.jpg",
    caption: "Atelier corners with texture, light, and memory.",
    category: "Home Decor",
    permalink: "https://www.instagram.com/gift.albania/",
  },
  {
    id: "ig-7",
    image: "/images/image8.jpg",
    caption: "Architectural stories brought into the palm of your hand.",
    category: "3D Models",
    permalink: "https://www.instagram.com/gift.albania/",
  },
  {
    id: "ig-8",
    image: "/images/image7.jpg",
    caption: "Studio scenes from custom orders in progress.",
    category: "Behind the Scenes",
    permalink: "https://www.instagram.com/gift.albania/",
  },
  {
    id: "ig-9",
    image: "/images/image9.jpg",
    caption: "Romantic keepsakes made to be held onto for years.",
    category: "Gifts",
    permalink: "https://www.instagram.com/gift.albania/",
  },
  {
    id: "ig-10",
    image: "/images/image10.jpg",
    caption: "Elegant decor layers for homes full of feeling.",
    category: "Home Decor",
    permalink: "https://www.instagram.com/gift.albania/",
  },
  {
    id: "ig-11",
    image: "/images/image12.jpg",
    caption: "Presentation-ready models for architects and dreamers.",
    category: "3D Models",
    permalink: "https://www.instagram.com/gift.albania/",
  },
  {
    id: "ig-12",
    image: "/images/image11.jpg",
    caption: "Personalized corporate pieces with warmth and polish.",
    category: "Behind the Scenes",
    permalink: "https://www.instagram.com/gift.albania/",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Custom Orders", href: "/custom" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const instagramStats = {
  followers: "34.5K",
  posts: "1,347",
};

export const whatsappNumber = "355691234567";

export const formatPrice = (price: number) => `ALL ${price.toLocaleString("en-US")}`;

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);

export const getRelatedProducts = (slug: string, category: ProductCategory) =>
  products.filter((product) => product.slug !== slug && product.category === category).slice(0, 4);
