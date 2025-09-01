import React from "react";
import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-200 to-indigo-300 text-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <Mail size={40} className="text-indigo-700 animate-bounce" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay in the Loop
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-700">
          Get exclusive deals, new product launches, and insider updates
          delivered straight to your inbox
        </p>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
            Subscribe
          </button>
        </div>

        {/* Privacy Note */}
        <p className="text-sm text-gray-600 mb-12">
          No spam, unsubscribe at any time. We respect your privacy.
        </p>

        {/* Bottom Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-gray-300 pt-8">
          <div>
            <h3 className="text-xl font-bold text-indigo-700">24/7</h3>
            <p className="text-sm text-gray-700">Customer Support</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-indigo-700">Free</h3>
            <p className="text-sm text-gray-700">Shipping & Returns</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-indigo-700">1 Year</h3>
            <p className="text-sm text-gray-700">Warranty</p>
          </div>
        </div>
      </div>
    </section>
  );
}
