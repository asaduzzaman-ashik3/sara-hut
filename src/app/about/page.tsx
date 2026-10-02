import React from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Award, Users, Globe, Shield } from "lucide-react";

export const metadata = {
  title: "About Us - Sara Hut",
  description: "Learn more about Sara Hut, your trusted destination for premium electronics and home appliances.",
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen py-10">
      <div className="w-full px-4 sm:px-6">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Heading */}
        <div className="border-b border-gray-200 pb-6 mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            About Sara Hut
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mt-1">
            Pioneering Quality in Home Appliances
          </h1>
          <p className="text-base text-gray-600 mt-3 max-w-3xl leading-relaxed">
            Sara Hut provides the highest standard of modern electronics, electrical,
            and home appliances. Through reliable quality and authentic warranty
            support, we empower thousands of happy homes across the nation.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          <div className="p-6 rounded-none border border-gray-200 bg-gray-50">
            <Award className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="font-bold text-gray-900 text-lg mb-2">
              Global Quality Standards
            </h3>
            <p className="text-sm text-gray-600">
              State-of-the-art manufacturing complying with ISO and international safety benchmarks.
            </p>
          </div>

          <div className="p-6 rounded-none border border-gray-200 bg-gray-50">
            <Globe className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="font-bold text-gray-900 text-lg mb-2">
              International Reach
            </h3>
            <p className="text-sm text-gray-600">
              Exporting high-performance consumer electronics to more than 40 countries across continents.
            </p>
          </div>

          <div className="p-6 rounded-none border border-gray-200 bg-gray-50">
            <Shield className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="font-bold text-gray-900 text-lg mb-2">
              Customer First Service
            </h3>
            <p className="text-sm text-gray-600">
              The largest dedicated after-sales service network with over 80+ official service centers.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="bg-blue-50 border border-blue-100 rounded-none p-8 my-8">
          <h2 className="text-xl font-bold text-blue-900 mb-4">
            Why Choose Walton Sara Hut?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">
                100% Genuine Walton Factory Manufactured Products
              </span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">
                Official Comprehensive Compressor & Panel Warranties
              </span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">
                Inverter Intelligent Power Saving Engineering
              </span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">
                Fast Nationwide Delivery and Professional Installation
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
