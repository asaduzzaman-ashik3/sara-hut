import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { getCategoryBySlug, categoriesData } from "@/data/products";
import type { Metadata } from "next";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all 5 categories
export async function generateStaticParams() {
  return Object.keys(categoriesData).map((slug) => ({
    slug,
  }));
}

// Generate SEO Metadata dynamically
export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Category Not Found - Sara Hut",
    };
  }

  return {
    title: `${category.title} - Sara Hut`,
    description: `${category.description} Explore our latest ${category.title} models with top energy efficiency and smart technology at Sara Hut.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const bannerSrc = category.bannerImage || category.bannerImages[0];

  return (
    <div className="bg-white min-h-screen pb-12">
      {/* 1. Top Single Banner Image - Exact 1920x750 Aspect Ratio */}
      <section className="w-full relative aspect-[1920/750] overflow-hidden bg-gray-100">
        <Image
          src={bannerSrc}
          alt={`${category.title} Banner`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 70vw"
          className="object-cover w-full h-full"
        />
      </section>

      {/* 2. Products Section (Compact Cards + SEE MORE Button) */}
      <section className="w-full px-3 sm:px-4 lg:px-0 py-4 sm:py-6">
        {/* Product Cards Grid: 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-5">
          {category.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* SEE MORE Button */}
        <div className="mt-6">
          <button
            type="button"
            className="w-full py-2.5 sm:py-3 px-6 border-2 border-black text-black hover:border-[#0066cc] hover:text-[#0066cc] bg-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-colors duration-200 text-center rounded-none cursor-pointer focus:outline-hidden"
          >
            SEE MORE
          </button>
        </div>
      </section>
    </div>
  );
}
