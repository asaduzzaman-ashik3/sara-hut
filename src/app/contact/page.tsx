"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className="bg-white min-h-screen py-10">
      <div className="w-full px-4 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="border-b border-gray-200 pb-6 mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mt-1">
            Contact Sara Hut
          </h1>
          <p className="text-base text-gray-600 mt-2">
            Have questions about products, wholesale pricing, or distribution? Send us a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-start gap-4 p-5 rounded-none border border-gray-200 bg-gray-50">
              <MapPin className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Corporate Office</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Plot-1088, Block-I, Sabrina Sobhan Road, P.O.-Khilkhet, P.S.-Vatara, Bashundhara R/A, Dhaka-1229
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-none border border-gray-200 bg-gray-50">
              <Phone className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Phone Hotline</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  16267 / +880-9606116267
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-none border border-gray-200 bg-gray-50">
              <Mail className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Email Address</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  info@waltonbd.com / support@sarahut.com
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-none border border-gray-200 bg-white shadow-xs">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Send a Message</h3>
            {submitted ? (
              <div className="p-6 bg-blue-50 border border-blue-200 rounded-none text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-blue-600 mx-auto" />
                <h4 className="text-lg font-bold text-blue-900">Message Received!</h4>
                <p className="text-sm text-gray-600">
                  Thank you for reaching out. Our customer care specialist will respond within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-semibold text-blue-600 hover:underline pt-2"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Phone / Email
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your contact phone or email"
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we assist you?"
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0066cc] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-none transition-colors cursor-pointer"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
