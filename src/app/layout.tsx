import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sara Hut - Electronics & Home Appliances",
  description:
    "Explore premium home appliances at Sara Hut including Refrigerators, Air Conditioners, 4K TVs, Washing Machines, and Microwave Ovens.",
  icons: {
    icon: "/logo/fav-icon.png",
    shortcut: "/logo/fav-icon.png",
    apple: "/logo/fav-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900 selection:bg-blue-600 selection:text-white">
        <Navbar />
        <main className="flex-1 bg-white w-full lg:w-[70%] mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
