"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Search,
  ChevronDown,
  Phone,
  HelpCircle,
  Tv,
  Refrigerator,
  Wind,
  Flame,
  WashingMachine as WashingMachineIcon,
} from "lucide-react";
import WaltonLogo from "./WaltonLogo";
import { categoriesList, Product, CategoryData } from "@/data/products";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProductsDropdownOpen(false);
    setIsSearchOpen(false);
  }, [pathname]);

  // Prevent background page scrolling when mobile menu drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Handle outside click for dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsProductsDropdownOpen(false);
      }
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Search filter
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    const query = searchQuery.toLowerCase();
    const allProducts = categoriesList.flatMap((c) => c.products);
    const results = allProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.code.toLowerCase().includes(query) ||
        p.categorySlug.toLowerCase().includes(query)
    );
    setSearchResults(results);
  }, [searchQuery]);

  const getCategoryIcon = (slug: string) => {
    switch (slug) {
      case "refrigerator":
        return <Refrigerator className="w-5 h-5 text-blue-600" />;
      case "air-conditioner":
        return <Wind className="w-5 h-5 text-blue-600" />;
      case "tv":
        return <Tv className="w-5 h-5 text-blue-600" />;
      case "washing-machine":
        return <WashingMachineIcon className="w-5 h-5 text-blue-600" />;
      case "microwave":
        return <Flame className="w-5 h-5 text-blue-600" />;
      default:
        return null;
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 w-full">
        <div className="w-full lg:w-[70%] mx-auto px-4 sm:px-6 lg:px-0">
          <div className="flex items-center justify-between h-12 sm:h-14">
            {/* MOBILE: Left Drawer Toggle */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1.5 -ml-1.5 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-colors cursor-pointer"
                aria-label="Open Navigation Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* DESKTOP: Left Navigation (PRODUCTS, ABOUT US) */}
            <nav className="hidden md:flex items-center space-x-7">
              {/* Products Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                  onMouseEnter={() => setIsProductsDropdownOpen(true)}
                  className={`flex items-center gap-1 text-xs sm:text-sm font-bold uppercase tracking-wider py-1.5 transition-colors cursor-pointer ${
                    pathname.startsWith("/category")
                      ? "text-blue-600"
                      : "text-gray-800 hover:text-blue-600"
                  }`}
                >
                  <span>PRODUCTS</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isProductsDropdownOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isProductsDropdownOpen && (
                  <div
                    onMouseLeave={() => setIsProductsDropdownOpen(false)}
                    className="absolute left-0 top-full mt-1 w-72 bg-white rounded-none shadow-xl border border-gray-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  >
                    <div className="px-4 py-1.5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                      CATEGORIES
                    </div>
                    {categoriesList.map((category: CategoryData) => (
                      <Link
                        key={category.slug}
                        href={`/category/${category.slug}`}
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-blue-50 transition-colors group"
                        onClick={() => setIsProductsDropdownOpen(false)}
                      >
                        <div className="p-1.5 rounded bg-gray-50 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                          {getCategoryIcon(category.slug)}
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold uppercase tracking-wide text-gray-800 group-hover:text-blue-600">
                            {category.title}
                          </div>
                          <div className="text-[11px] text-gray-500 line-clamp-1">
                            {category.tagline}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* ABOUT US */}
              <Link
                href="/about"
                className={`text-xs sm:text-sm font-bold uppercase tracking-wider py-1.5 transition-colors ${
                  pathname === "/about"
                    ? "text-blue-600"
                    : "text-gray-800 hover:text-blue-600"
                }`}
              >
                ABOUT US
              </Link>
            </nav>

            {/* CENTER: Brand Logo */}
            <div className="flex-1 flex justify-center md:flex-initial">
              <WaltonLogo size="md" />
            </div>

            {/* DESKTOP: Right Navigation (SUPPORT, CONTACT US, Search Bar) */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/support"
                className={`text-xs sm:text-sm font-bold uppercase tracking-wider py-1.5 transition-colors ${
                  pathname === "/support"
                    ? "text-blue-600"
                    : "text-gray-800 hover:text-blue-600"
                }`}
              >
                SUPPORT
              </Link>
              <Link
                href="/contact"
                className={`text-xs sm:text-sm font-bold uppercase tracking-wider py-1.5 transition-colors ${
                  pathname === "/contact"
                    ? "text-blue-600"
                    : "text-gray-800 hover:text-blue-600"
                }`}
              >
                CONTACT US
              </Link>

              {/* Search Box with Increased Height & Floating Results */}
              <div className="relative" ref={searchContainerRef}>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Search appliances..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchOpen(true)}
                    className="w-48 lg:w-60 h-8.5 sm:h-9 pl-9 pr-8 text-xs sm:text-sm bg-gray-50 border border-gray-300 rounded-full focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:bg-white focus:w-68 transition-all duration-300 font-medium"
                  />
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 pointer-events-none" />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 text-gray-400 hover:text-gray-600 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Floating Search Dropdown (Never pushes page content) */}
                {isSearchOpen && searchQuery && (
                  <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-white rounded-none shadow-2xl border border-gray-200 p-2 z-[100] animate-in fade-in slide-in-from-top-1">
                    <div className="p-2 text-xs font-bold text-gray-400 uppercase tracking-wider flex justify-between items-center border-b border-gray-100">
                      <span>Search Results ({searchResults.length})</span>
                      <button
                        type="button"
                        onClick={() => setIsSearchOpen(false)}
                        className="text-gray-400 hover:text-gray-700 cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    {searchResults.length === 0 ? (
                      <div className="p-4 text-center text-xs text-gray-500">
                        No products found for "{searchQuery}"
                      </div>
                    ) : (
                      <div className="max-h-72 overflow-y-auto divide-y divide-gray-100">
                        {searchResults.slice(0, 6).map((product) => (
                          <Link
                            key={product.id}
                            href={`/category/${product.categorySlug}`}
                            onClick={() => {
                              setIsSearchOpen(false);
                              setSearchQuery("");
                            }}
                            className="flex items-center gap-3 p-2.5 hover:bg-blue-50 rounded-none transition-colors group"
                          >
                            <div className="w-10 h-10 bg-gray-50 border border-gray-100 rounded-none flex items-center justify-center shrink-0">
                              {getCategoryIcon(product.categorySlug)}
                            </div>
                            <div className="overflow-hidden flex-1">
                              <p className="text-xs font-bold text-blue-600 truncate group-hover:text-blue-700">
                                {product.code}
                              </p>
                              <p className="text-xs text-gray-700 font-medium truncate">
                                {product.name}
                              </p>
                            </div>
                            <div className="text-xs font-bold text-[#0066cc] shrink-0">
                              {product.price}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* MOBILE: Right Search Button */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-1.5 -mr-1.5 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-hidden cursor-pointer"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* MOBILE: Floating Search Bar Overlay */}
          {isSearchOpen && (
            <div
              ref={searchContainerRef}
              className="md:hidden absolute left-0 right-0 top-full bg-white border-b border-gray-200 shadow-2xl px-4 py-3 z-[100] animate-in fade-in slide-in-from-top-2"
            >
              <div className="relative flex items-center">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search refrigerators, AC, TV..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-9 pl-9 pr-9 text-xs sm:text-sm bg-gray-50 border border-gray-300 rounded-full focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:bg-white font-medium"
                  autoFocus
                />
                <Search className="w-4 h-4 text-gray-400 absolute left-3 pointer-events-none" />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Mobile Floating Search Results */}
              {searchQuery && (
                <div className="mt-2 bg-white rounded-none border border-gray-200 shadow-xl divide-y divide-gray-100 max-h-60 overflow-y-auto">
                  {searchResults.length === 0 ? (
                    <div className="p-3 text-xs text-center text-gray-500">
                      No results for "{searchQuery}"
                    </div>
                  ) : (
                    searchResults.map((p) => (
                      <Link
                        key={p.id}
                        href={`/category/${p.categorySlug}`}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchQuery("");
                        }}
                        className="flex items-center justify-between p-2.5 hover:bg-blue-50 transition-colors"
                      >
                        <div className="overflow-hidden pr-2">
                          <div className="text-xs font-bold text-blue-600 truncate">
                            {p.code}
                          </div>
                          <div className="text-xs text-gray-600 font-medium truncate">
                            {p.name}
                          </div>
                        </div>
                        <div className="text-xs font-bold text-[#0066cc] shrink-0">
                          {p.price}
                        </div>
                      </Link>
                    ))
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      {/* MOBILE DRAWER (Left Slide-over) with Smooth Slide & Fade Transition */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "visible opacity-100 pointer-events-auto"
            : "invisible opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Backdrop overlay */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300 ease-in-out ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer content (Smooth slide from left) */}
        <div
          className={`fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-2xl z-50 flex flex-col justify-between overflow-y-auto transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-5">
            {/* Header inside drawer */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <WaltonLogo size="sm" />
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation links (Capitalized) */}
            <div className="py-3 space-y-1">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                  pathname === "/"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-800 hover:bg-gray-50"
                }`}
              >
                HOME
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                  pathname === "/about"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-800 hover:bg-gray-50"
                }`}
              >
                ABOUT US
              </Link>
              <Link
                href="/support"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                  pathname === "/support"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-800 hover:bg-gray-50"
                }`}
              >
                SUPPORT
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                  pathname === "/contact"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-800 hover:bg-gray-50"
                }`}
              >
                CONTACT US
              </Link>
            </div>

            {/* Categories Section */}
            <div className="pt-3 border-t border-gray-100">
              <div className="px-3 pb-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                PRODUCT CATEGORIES
              </div>
              <div className="space-y-0.5">
                {categoriesList.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/category/${category.slug}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wide transition-colors ${
                      pathname === `/category/${category.slug}`
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-blue-600">
                      {getCategoryIcon(category.slug)}
                    </span>
                    <span>{category.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Support Info */}
          <div className="p-4 bg-gray-50 border-t border-gray-100">
            <div className="flex items-center gap-2.5 text-xs text-gray-600 mb-1.5">
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span className="font-semibold text-gray-900">
                16267 / 08000016267
              </span>
            </div>
            <p className="text-[11px] text-gray-500">
              24/7 Customer Care & Service Hotline
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
