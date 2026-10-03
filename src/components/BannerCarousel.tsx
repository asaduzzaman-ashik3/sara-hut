"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

interface BannerCarouselProps {
  images: string[];
  className?: string;
  aspectRatioClass?: string;
  autoplayDelay?: number;
}

export default function BannerCarousel({
  images,
  className = "",
  aspectRatioClass = "aspect-[1920/750]",
  autoplayDelay = 5000,
}: BannerCarouselProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  if (!images || images.length === 0) return null;

  return (
    <div className={`group/carousel relative w-full overflow-hidden bg-white ${className}`}>
      <Swiper
        modules={[Autoplay, Pagination]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        speed={800}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={images.length > 1}
        className={`w-full ${aspectRatioClass}`}
      >
        {images.map((imageSrc, index) => (
          <SwiperSlide key={index} className="relative w-full h-full bg-slate-100">
            <div className="relative w-full h-full">
              <Image
                src={imageSrc}
                alt={`Walton Banner slide ${index + 1}`}
                fill
                priority={index === 0}
                unoptimized
                className="object-cover object-center"
                sizes="(max-width: 1920px) 100vw, 1920px"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Left Arrow: Thick Bold Chevron matching reference image */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-4 sm:left-8 md:left-12 top-1/2 -translate-y-1/2 z-20 text-white/75 hover:text-white transition-all duration-200 cursor-pointer p-2 focus:outline-hidden drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] hover:scale-110 active:scale-95"
            aria-label="Previous Slide"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Custom Right Arrow: Thick Bold Chevron matching reference image */}
          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-4 sm:right-8 md:right-12 top-1/2 -translate-y-1/2 z-20 text-white/75 hover:text-white transition-all duration-200 cursor-pointer p-2 focus:outline-hidden drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] hover:scale-110 active:scale-95"
            aria-label="Next Slide"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
