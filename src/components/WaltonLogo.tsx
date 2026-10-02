import React from "react";
import Link from "next/link";
import Image from "next/image";

interface WaltonLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function WaltonLogo({
  className = "",
  size = "md",
}: WaltonLogoProps) {
  const heights = {
    sm: "h-6 sm:h-7 w-auto",
    md: "h-7 sm:h-8 md:h-9 w-auto",
    lg: "h-8 sm:h-9 md:h-10 w-auto",
  };

  return (
    <Link
      href="/"
      className={`inline-flex items-center group transition-transform duration-200 hover:opacity-95 ${className}`}
      aria-label="Sara Hut Home"
    >
      <div className="relative flex items-center">
        <Image
          src="/logo/company-logo.png?v=2"
          alt="Sara Hut"
          width={240}
          height={48}
          className={`${heights[size]} object-contain`}
          priority
          unoptimized
        />
      </div>
    </Link>
  );
}
