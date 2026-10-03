import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BannerCarousel from "@/components/BannerCarousel";

export default function Home() {
  const heroBanners = [
    "/banners/banner-1.webp",
    "/banners/banner-2.webp",
    "/banners/banner-3.webp",
  ];

  return (
    <div className="bg-white w-full">
      {/* Top Hero Carousel using Swiper.js - Gap at bottom */}
      <section className="w-full mb-1 sm:mb-2 md:mb-2">
        <BannerCarousel
          images={heroBanners}
          aspectRatioClass="aspect-[1920/750]"
          className="rounded-none w-full"
        />
      </section>

      {/* Main Category Sections Container - Zero vertical gap between sections */}
      <div className="w-full flex flex-col gap-0 p-0 m-0">
        {/* ========================================================================= */}
        {/* SECTION 1: REFRIGERATOR (Single Full Image with click to category page) */}
        {/* ========================================================================= */}
        <section className="w-full p-0 m-0">
          <Link
            href="/category/refrigerator"
            className="group block relative w-full overflow-hidden rounded-none bg-white hover:opacity-95 transition-all duration-300 cursor-pointer"
          >
            <div className="relative w-full aspect-[1920/750]">
              <Image
                src="/category_images/refrigerator.webp"
                alt="Walton Refrigerator"
                fill
                priority
                unoptimized
                className="object-cover object-center rounded-none transition-transform duration-500 group-hover:scale-[1.01]"
                sizes="(max-width: 1920px) 100vw, 1920px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center md:justify-start p-4 sm:p-6 text-center md:text-left">
                <span className="inline-flex items-center gap-2 text-white font-bold text-sm sm:text-base bg-blue-600 px-4 py-2 rounded-none shadow-md">
                  Explore Refrigerators <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: AIR CONDITIONER (Reference Image 1: Split Left Text / Right Image) */}
        {/* ========================================================================= */}
        <section className="w-full p-0 m-0">
          <Link
            href="/category/air-conditioner"
            className="group block bg-white rounded-none hover:bg-gray-50/50 transition-all duration-300 overflow-hidden cursor-pointer"
          >
            <div className="flex flex-col md:flex-row items-stretch w-full bg-white">
              {/* Left Column: Text Container (Centered on Mobile, Left-aligned on Desktop) */}
              <div className="w-full md:w-[45%] p-6 sm:p-10 lg:p-14 flex flex-col justify-center bg-gray-100 text-center md:text-left">
                <p className="text-base sm:text-lg lg:text-xl font-semibold text-gray-700 tracking-wide mb-2">
                  Energy Efficient & Eco Friendly
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">
                  Air Conditioner
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed font-normal">
                  Walton Air Conditioner is integrated with intelligent inverter
                  technology that saves maximum electricity.
                </p>
              </div>

              {/* Right Column: Image with exact 1050x750 aspect ratio - 100% uncropped */}
              <div className="w-full md:w-[55%] relative aspect-[1050/750] bg-white">
                <Image
                  src="/category_images/air-conditionar.webp"
                  alt="Walton Air Conditioner"
                  fill
                  unoptimized
                  className="object-cover object-center rounded-none transition-transform duration-500 group-hover:scale-[1.01]"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
              </div>
            </div>
          </Link>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: TV (Single Image with click to category page) */}
        {/* ========================================================================= */}
        <section className="w-full p-0 m-0">
          <Link
            href="/category/tv"
            className="group block relative w-full overflow-hidden rounded-none bg-white hover:opacity-95 transition-all duration-300 cursor-pointer"
          >
            <div className="relative w-full aspect-[1920/750]">
              <Image
                src="/category_images/tv.webp"
                alt="Walton Television"
                fill
                unoptimized
                className="object-cover object-center rounded-none transition-transform duration-500 group-hover:scale-[1.01]"
                sizes="(max-width: 1920px) 100vw, 1920px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center md:justify-start p-4 sm:p-6 text-center md:text-left">
                <span className="inline-flex items-center gap-2 text-white font-bold text-sm sm:text-base bg-blue-600 px-4 py-2 rounded-none shadow-md">
                  Explore Televisions <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: WASHING MACHINE (Split Left Text / Right Image) */}
        {/* ========================================================================= */}
        <section className="w-full p-0 m-0">
          <Link
            href="/category/washing-machine"
            className="group block bg-white rounded-none hover:bg-gray-50/50 transition-all duration-300 overflow-hidden cursor-pointer"
          >
            <div className="flex flex-col md:flex-row items-stretch w-full bg-white">
              {/* Left Column: Text Container (Centered on Mobile, Left-aligned on Desktop) */}
              <div className="w-full md:w-[45%] p-6 sm:p-10 lg:p-14 flex flex-col justify-center bg-gray-100 text-center md:text-left">
                <p className="text-base sm:text-lg lg:text-xl font-semibold text-gray-700 tracking-wide mb-2">
                  Smart Cleaning & Fabric Care
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">
                  Washing Machine
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed font-normal">
                  Walton Smart Inverter Washing Machines ensure superior fabric
                  care, whisper-quiet operation, and ultimate energy efficiency.
                </p>
              </div>

              {/* Right Column: Image with exact 1050x750 aspect ratio - 100% uncropped */}
              <div className="w-full md:w-[55%] relative aspect-[1050/750] bg-white">
                <Image
                  src="/category_images/washing-machine.webp"
                  alt="Walton Washing Machine"
                  fill
                  unoptimized
                  className="object-cover object-center rounded-none transition-transform duration-500 group-hover:scale-[1.01]"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
              </div>
            </div>
          </Link>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: MICROWAVE OVEN (Split Left Image / Right Text) */}
        {/* ========================================================================= */}
        <section className="w-full p-0 m-0">
          <Link
            href="/category/microwave"
            className="group block bg-white rounded-none hover:bg-gray-50/50 transition-all duration-300 overflow-hidden cursor-pointer"
          >
            <div className="flex flex-col md:flex-row items-stretch w-full bg-white">
              {/* Left Column: Image with exact 1050x750 aspect ratio - 100% uncropped */}
              <div className="w-full md:w-[55%] relative aspect-[1050/750] bg-white order-2 md:order-1">
                <Image
                  src="/category_images/microwave.webp"
                  alt="Walton Microwave Oven"
                  fill
                  unoptimized
                  className="object-cover object-center rounded-none transition-transform duration-500 group-hover:scale-[1.01]"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
              </div>

              {/* Right Column: Text Container (Centered on Mobile, Left-aligned on Desktop) */}
              <div className="w-full md:w-[45%] p-6 sm:p-10 lg:p-14 flex flex-col justify-center bg-gray-100 order-1 md:order-2 text-center md:text-left">
                <p className="text-base sm:text-lg lg:text-xl font-semibold text-gray-700 tracking-wide mb-2">
                  Modern Cooking & Healthy Living
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">
                  Microwave Oven
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed font-normal">
                  Experience seamless cooking, fast defrosting, and gourmet
                  baking with Walton smart multi-functional Microwave Ovens.
                </p>
              </div>
            </div>
          </Link>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: HOME APPLIANCES (Split Left Text / Right Image) */}
        {/* ========================================================================= */}
        <section className="w-full p-0 m-0">
          <Link
            href="/category/home-applies"
            className="group block bg-white rounded-none hover:bg-gray-50/50 transition-all duration-300 overflow-hidden cursor-pointer"
          >
            <div className="flex flex-col md:flex-row items-stretch w-full bg-white">
              {/* Left Column: Text Container (Centered on Mobile, Left-aligned on Desktop) */}
              <div className="w-full md:w-[45%] p-6 sm:p-10 lg:p-14 flex flex-col justify-center bg-gray-100 text-center md:text-left">
                <p className="text-base sm:text-lg lg:text-xl font-semibold text-gray-700 tracking-wide mb-2">
                  Everyday Comfort & Smart Living
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">
                  Home Appliances
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed font-normal">
                  Upgrade your living space with Walton&apos;s innovative, reliable, and energy-efficient Home Appliances designed for everyday ease and convenience.
                </p>
              </div>

              {/* Right Column: Image with exact 1050x750 aspect ratio - 100% uncropped */}
              <div className="w-full md:w-[55%] relative aspect-[1050/750] bg-white">
                <Image
                  src="/category_images/home-applies.webp"
                  alt="Walton Home Appliances"
                  fill
                  unoptimized
                  className="object-cover object-center rounded-none transition-transform duration-500 group-hover:scale-[1.01]"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
              </div>
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
}
