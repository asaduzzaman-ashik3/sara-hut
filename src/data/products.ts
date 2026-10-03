export interface Product {
  id: string;
  code: string;
  name: string;
  categorySlug: string;
  image: string;
  price: string;
  originalPrice?: string;
  discountPrice?: string;
  features?: string[];
  badges?: string[];
}

export interface CategoryData {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  landingImage: string;
  bannerImage: string;
  bannerImages: string[];
  products: Product[];
}

export const categoriesData: Record<string, CategoryData> = {
  "refrigerator": {
    slug: "refrigerator",
    title: "Refrigerator",
    tagline: "Intelligent Inverter & Direct Cool Refrigerators",
    description: "Keep your food fresher for longer with Walton's advanced intelligent inverter and frost-free refrigeration technology.",
    landingImage: "/category_images/refrigerator.webp",
    bannerImage: "/category_pages_banner/refrigerator.jpeg",
    bannerImages: [
      "/category_pages_banner/refrigerator.jpeg",
      "/banners/banner-1.webp",
      "/banners/banner-2.webp",
    ],
    products: [
      {
        id: "ref-1",
        code: "WNI-6A9-GDSD-DD",
        name: "Walton Inverter Non-Frost Refrigerator",
        categorySlug: "refrigerator",
        image: "https://i.ibb.co.com/XZYVCkNX/wni-6a9-gdsd-dd-v7-id-1-200x200.jpg",
        price: "Tk.125,490",
        originalPrice: "Tk.135,000",
        discountPrice: "Tk.125,490",
      },
      {
        id: "ref-2",
        code: "WNI-6A9-GDNE-DD",
        name: "Walton Double Door Side-by-Side Refrigerator",
        categorySlug: "refrigerator",
        image: "https://i.ibb.co.com/5gFRX2Vy/wni-6a9-gdne-dd-v7-id-1-200x200.jpg",
        price: "Tk.129,390",
        originalPrice: "Tk.139,990",
        discountPrice: "Tk.129,390",
      },
      {
        id: "ref-3",
        code: "WNI-5F3-GDEL-DD",
        name: "Walton Multi-Door Glass Door Refrigerator",
        categorySlug: "refrigerator",
        image: "https://i.ibb.co.com/DH0Sn9Q0/wni-5f3-gdel-dd-v9-id-1-200x200.jpg",
        price: "Tk.109,990",
        originalPrice: "Tk.118,500",
        discountPrice: "Tk.109,990",
      },
      {
        id: "ref-4",
        code: "WNH-3H6-GDEL-XX (Inverter)",
        name: "Walton Inverter Direct Cool Refrigerator",
        categorySlug: "refrigerator",
        image: "https://i.ibb.co.com/DH2tkZ3d/wnh-3h6-gdel-xx-inverter-v4-id-1-200x200.jpg",
        price: "Tk.65,990",
        originalPrice: "Tk.71,990",
        discountPrice: "Tk.65,990",
      },
    ],
  },
  "air-conditioner": {
    slug: "air-conditioner",
    title: "Air Conditioner",
    tagline: "Energy Efficient & Eco Friendly",
    description: "Walton Air Conditioner is integrated with intelligent inverter technology that saves maximum electricity.",
    landingImage: "/category_images/air-conditionar.webp",
    bannerImage: "/category_pages_banner/air_conditioner.jpg",
    bannerImages: [
      "/category_pages_banner/air_conditioner.jpg",
      "/banners/banner-2.webp",
      "/banners/banner-3.webp",
    ],
    products: [
      {
        id: "ac-1",
        code: "WSI-DIAMOND-12J [FROST CLEAN]",
        name: "Walton Inverter Frost Clean AC",
        categorySlug: "air-conditioner",
        image: "https://i.ibb.co.com/JWt8z2VS/wsi-diamond-12j-frost-clean-v2-200x200.jpg",
        price: "Tk.52,990",
        originalPrice: "Tk.58,500",
        discountPrice: "Tk.52,990",
      },
      {
        id: "ac-2",
        code: "WSI-INVERNA (EXTREME SAVER)-18H [SMART PLASMA]",
        name: "Walton Inverna Smart Plasma Split AC",
        categorySlug: "air-conditioner",
        image: "https://i.ibb.co.com/sv1L4PkP/wsi-inverna-extreme-saver-18h-smart-plasma-id-image-with-t3-ac-200x200.jpg",
        price: "Tk.81,990",
        originalPrice: "Tk.89,000",
        discountPrice: "Tk.81,990",
      },
      {
        id: "ac-3",
        code: "WSI-AVIAN (SUPERSAVER)-24H [PLASMA]",
        name: "Walton Avian Supersaver Heavy Duty AC",
        categorySlug: "air-conditioner",
        image: "https://i.ibb.co.com/fzjPw7cZ/wsi-avian-supersaver-24h-plasma-v2-200x200.jpg",
        price: "Tk.92,600",
        originalPrice: "Tk.101,000",
        discountPrice: "Tk.92,600",
      },
      {
        id: "ac-4",
        code: "WSI-KRYSTALINE-30H",
        name: "Walton Krystaline High Capacity Smart AC",
        categorySlug: "air-conditioner",
        image: "https://i.ibb.co.com/dhgPDzm/wsi-krystaline-30h-v2-200x200.jpg",
        price: "Tk.129,900",
        originalPrice: "Tk.139,900",
        discountPrice: "Tk.129,900",
      },
    ],
  },
  "tv": {
    slug: "tv",
    title: "Television",
    tagline: "Immersive 4K Google TV & Smart Visuals",
    description: "Experience ultra-high definition clarity, vivid colors, and Dolby Atmos audio with Walton Smart 4K Google TVs.",
    landingImage: "/category_images/tv.webp",
    bannerImage: "/category_pages_banner/tv.jpg",
    bannerImages: [
      "/category_pages_banner/tv.jpg",
      "/banners/banner-3.webp",
      "/banners/banner-1.webp",
    ],
    products: [
      {
        id: "tv-1",
        code: "CLARITY+ 65 4K GOOGLE TV - W65G5Y",
        name: "Walton Clarity+ 65 Inch 4K Google TV",
        categorySlug: "tv",
        image: "https://i.ibb.co.com/8DFbhmnN/front-ID-364x364.jpg",
        price: "Tk.114,990",
        originalPrice: "Tk.125,000",
        discountPrice: "Tk.114,990",
      },
      {
        id: "tv-2",
        code: "WE55RUG (1.397M) UHD ANDROID TV",
        name: "Walton 55 Inch Frameless UHD Android TV",
        categorySlug: "tv",
        image: "https://i.ibb.co.com/Gf4pyXrS/front-ID-364x364-Copy.jpg",
        price: "Tk.99,900",
        originalPrice: "Tk.109,000",
        discountPrice: "Tk.99,900",
      },
      {
        id: "tv-3",
        code: "WE55RUGP",
        name: "Walton 55 Inch Ultra Smart Android TV",
        categorySlug: "tv",
        image: "https://i.ibb.co.com/rKSPBZwB/01-364x364.jpg",
        price: "Tk.92,900",
        originalPrice: "Tk.99,900",
        discountPrice: "Tk.92,900",
      },
      {
        id: "tv-4",
        code: "CLARITY+ 55 4K GOOGLE TV - W55G5Y",
        name: "Walton Clarity+ 55 Inch 4K Google TV",
        categorySlug: "tv",
        image: "https://i.ibb.co.com/Q34g661M/1-364x364.jpg",
        price: "Tk.88,990",
        originalPrice: "Tk.97,500",
        discountPrice: "Tk.88,990",
      },
    ],
  },
  "washing-machine": {
    slug: "washing-machine",
    title: "Washing Machine",
    tagline: "Smart Cleaning & Advanced Fabric Care",
    description: "Walton Smart Inverter Washing Machines ensure superior fabric care, high energy efficiency, and ultra-quiet washing cycles.",
    landingImage: "/category_images/washing-machine.webp",
    bannerImage: "/category_pages_banner/washing-mchine.jpg",
    bannerImages: [
      "/category_pages_banner/washing-mchine.jpg",
      "/banners/banner-1.webp",
      "/banners/banner-2.webp",
    ],
    products: [
      {
        id: "wm-1",
        code: "WWM-AFB90 (9 KG FRONT LOADING WASHER)",
        name: "Walton Front Loading Inverter Washing Machine",
        categorySlug: "washing-machine",
        image: "https://i.ibb.co.com/Kp7JDsNw/AFB90-06-200x200.jpg",
        price: "Tk.59,900",
        originalPrice: "Tk.65,500",
        discountPrice: "Tk.59,900",
      },
      {
        id: "wm-2",
        code: "WWM-AFC12M (12+8 kg Washer & Dryer combo)",
        name: "Walton Washer & Dryer Combo Smart Wash",
        categorySlug: "washing-machine",
        image: "https://i.ibb.co.com/jvdn9NHS/AFC12-M-200x200.jpg",
        price: "Tk.82,900",
        originalPrice: "Tk.89,900",
        discountPrice: "Tk.82,900",
      },
      {
        id: "wm-3",
        code: "WWM-AFC90W (9+5.5 kg Washer & Dryer combo)",
        name: "Walton Eco Inverter Washer & Dryer Combo",
        categorySlug: "washing-machine",
        image: "https://i.ibb.co.com/kgL4jtLC/afc90w-1-200x200.jpg",
        price: "Tk.80,900",
        originalPrice: "Tk.87,500",
        discountPrice: "Tk.80,900",
      },
      {
        id: "wm-4",
        code: "WWM-AFD80 (8 KG DD FRONT LOADING WASHER)",
        name: "Walton Heavy Duty Direct Drive Front Loading Washer",
        categorySlug: "washing-machine",
        image: "https://i.ibb.co.com/Ng13SP6G/AFD80-10-200x200.jpg",
        price: "Tk.66,900",
        originalPrice: "Tk.73,000",
        discountPrice: "Tk.66,900",
      },
    ],
  },
  "microwave": {
    slug: "microwave",
    title: "Microwave Oven",
    tagline: "Modern Cooking & Healthy Living",
    description: "Experience seamless cooking, quick defrosting, and grill baking with Walton smart multi-functional Microwave Ovens.",
    landingImage: "/category_images/microwave.webp",
    bannerImage: "/category_pages_banner/microwave.jpg",
    bannerImages: [
      "/category_pages_banner/microwave.jpg",
      "/banners/banner-3.webp",
      "/banners/banner-2.webp",
    ],
    products: [
      {
        id: "mo-1",
        code: "MICROWAVE OVEN",
        name: "Walton 30L Microwave Oven",
        categorySlug: "microwave",
        image: "https://i.ibb.co.com/2wqs32v/electric-oven-400x472.png",
        price: "Tk.18,900",
        originalPrice: "Tk.21,500",
        discountPrice: "Tk.18,900",
      },
      {
        id: "mo-2",
        code: "ELECTRIC OVEN",
        name: "Walton Multi-Functional Electric Oven",
        categorySlug: "microwave",
        image: "https://i.ibb.co.com/gF44fS02/microwave-oven-400x472.jpg",
        price: "Tk.14,500",
        originalPrice: "Tk.16,800",
        discountPrice: "Tk.14,500",
      },
    ],
  },
};

export const categoriesList = Object.values(categoriesData);

export function getCategoryBySlug(slug: string): CategoryData | undefined {
  return categoriesData[slug];
}

export function getAllCategories(): CategoryData[] {
  return Object.values(categoriesData);
}
