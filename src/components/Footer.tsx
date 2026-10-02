import React from "react";
import WaltonLogo from "./WaltonLogo";

export default function Footer() {
  return (
    <footer className="relative bg-white pt-16 pb-8 border-t border-gray-100 overflow-hidden">
      {/* Subtle top organic wave contour like Reference Image 4 */}
      <div className="absolute top-0 inset-x-0 -translate-y-full overflow-hidden leading-none pointer-events-none text-white">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-8"
        >
          <path
            d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,40 L1200,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="w-full px-4 sm:px-6">
        {/* Centered Brand Logo at the top of footer */}
        <div className="flex justify-center mb-12">
          <WaltonLogo size="lg" />
        </div>

        {/* 4 Main Footer Columns matching reference image 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-gray-200">
          {/* Column 1: Who We Are */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#0066cc] tracking-tight">
              Who We Are
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-600 font-normal">
              <li>
                <span className="cursor-default hover:text-gray-900 transition-colors">
                  Home
                </span>
              </li>
              <li>
                <span className="cursor-default hover:text-gray-900 transition-colors">
                  About
                </span>
              </li>
              <li>
                <span className="cursor-default hover:text-gray-900 transition-colors">
                  Message from Chairman
                </span>
              </li>
              <li>
                <span className="cursor-default hover:text-gray-900 transition-colors">
                  Global Operation
                </span>
              </li>
              <li>
                <span className="cursor-default hover:text-gray-900 transition-colors">
                  Certificates
                </span>
              </li>
              <li>
                <span className="cursor-default hover:text-gray-900 transition-colors">
                  Accreditation
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2: How we can help you? */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#0066cc] tracking-tight">
              How we can help you?
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-600 font-normal">
              <li>
                <span className="cursor-default hover:text-gray-900 transition-colors">
                  Contact Us
                </span>
              </li>
              <li>
                <span className="cursor-default hover:text-gray-900 transition-colors">
                  Sales Outlet
                </span>
              </li>
              <li>
                <span className="cursor-default hover:text-gray-900 transition-colors">
                  Store Locator
                </span>
              </li>
              <li>
                <span className="cursor-default hover:text-gray-900 transition-colors">
                  Customer Care
                </span>
              </li>
              <li>
                <span className="cursor-default hover:text-gray-900 transition-colors">
                  About Product Registration
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#0066cc] tracking-tight">
              Support
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-600 font-normal">
              <li className="font-semibold text-gray-800">
                16267/08000016267
              </li>
              <li>
                <span className="cursor-default hover:text-gray-900 transition-colors">
                  Service Request
                </span>
              </li>
              <li>
                <span className="cursor-default hover:text-gray-900 transition-colors">
                  Service Status
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: FOLLOW SARA HUT */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-gray-900 tracking-tight uppercase">
              FOLLOW SARA HUT
            </h3>
            <p className="text-xs text-blue-600 font-medium">
              We want to hear from you!
            </p>

            {/* Social Icons matching Reference Image 4 */}
            <div className="flex items-center gap-2.5 pt-1">
              {/* Facebook */}
              <button
                type="button"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-gray-400 hover:bg-blue-600 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>

              {/* X / Twitter */}
              <button
                type="button"
                aria-label="Twitter X"
                className="w-8 h-8 rounded-full bg-gray-400 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>

              {/* YouTube */}
              <button
                type="button"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-gray-400 hover:bg-red-600 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </button>

              {/* Instagram */}
              <button
                type="button"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-gray-400 hover:bg-pink-600 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </button>

              {/* LinkedIn */}
              <button
                type="button"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-gray-400 hover:bg-blue-700 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </button>

              {/* Pinterest */}
              <button
                type="button"
                aria-label="Pinterest"
                className="w-8 h-8 rounded-full bg-gray-400 hover:bg-red-700 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.373-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-500 font-normal">
            Copyright © 2026 and all rights reserved by - Sara Hut
          </p>
        </div>
      </div>
    </footer>
  );
}
