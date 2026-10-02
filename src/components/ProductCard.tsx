import React from "react";
import Image from "next/image";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-white border border-gray-200 hover:border-[#0066cc] hover:shadow-md transition-all duration-300 flex flex-col justify-between p-2 sm:p-2.5 lg:p-3 h-full rounded-none">
      {/* Top: Product Code / Title (Compact) */}
      <div className="pt-0.5 pb-1 text-center min-h-[36px] sm:min-h-[40px] flex items-center justify-center">
        <h3 className="text-[11px] sm:text-xs lg:text-sm font-bold text-[#0066cc] group-hover:text-blue-700 transition-colors line-clamp-2 leading-tight">
          {product.code}
        </h3>
      </div>

      {/* Center: Product Image (1:1 Aspect Ratio, Compact) */}
      <div className="relative w-full aspect-square my-1 flex items-center justify-center p-1 sm:p-2 overflow-hidden bg-white">
        <div className="relative w-full h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            priority={false}
          />
        </div>
      </div>

      {/* Bottom: Price & Discount (Compact) */}
      <div className="pt-1.5 pb-0.5 text-center flex flex-col items-center justify-center">
        <div className="text-xs sm:text-sm lg:text-base font-extrabold text-[#0066cc] tracking-tight">
          {product.price}
        </div>
        {product.originalPrice && product.originalPrice !== product.price && (
          <div className="text-[10px] sm:text-[11px] text-gray-400 line-through font-medium">
            Regular: {product.originalPrice}
          </div>
        )}
      </div>
    </div>
  );
}
