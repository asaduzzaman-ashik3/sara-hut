import React from "react";
import Link from "next/link";
import { ArrowLeft, Phone, Mail, Clock, HelpCircle, Wrench, FileText } from "lucide-react";

export const metadata = {
  title: "Support & Customer Care - Sara Hut",
  description: "Get 24/7 dedicated customer support, warranty verification, and service center assistance for your appliances at Sara Hut.",
};

export default function SupportPage() {
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
            Customer Care
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mt-1">
            We are here to help you 24/7
          </h1>
          <p className="text-base text-gray-600 mt-2">
            Reach out to the Sara Hut customer support team or track your service request status anytime.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-none border border-gray-200 bg-gray-50 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-none bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-1">
              Call Center Hotline
            </h3>
            <p className="text-lg font-black text-blue-600 mb-1">16267</p>
            <p className="text-xs text-gray-500">or 08000016267 (Toll Free)</p>
          </div>

          <div className="p-6 rounded-none border border-gray-200 bg-gray-50 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-none bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-1">
              Service Request
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Book doorstep repair or maintenance by certified Sara Hut technicians.
            </p>
            <span className="text-xs font-semibold text-blue-600">
              Instant Scheduling
            </span>
          </div>

          <div className="p-6 rounded-none border border-gray-200 bg-gray-50 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-none bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-1">
              Working Hours
            </h3>
            <p className="text-sm font-semibold text-gray-800">
              Saturday - Thursday
            </p>
            <p className="text-xs text-gray-500">9:00 AM - 8:00 PM</p>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="border border-gray-200 rounded-none p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-blue-600" />
            <span>Frequently Asked Questions</span>
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-none">
              <h4 className="font-bold text-sm text-gray-900 mb-1">
                How do I register my product warranty?
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">
                You can register your warranty by calling 16267 with your invoice number and serial number on the product carton.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-none">
              <h4 className="font-bold text-sm text-gray-900 mb-1">
                Where can I find the nearest official Sara Hut showroom?
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">
                Sara Hut has nationwide outlets. Visit our store locator or call the customer care hotline for direct directions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
