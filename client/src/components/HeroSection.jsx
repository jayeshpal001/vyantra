import React from "react";
import { ArrowRight, ShoppingBag } from "lucide-react";
import heroImg from "../assets/heroImage.png";

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 bg-gradient-to-r from-indigo-50 to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 items-center gap-12">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              VYANTRA
            </span>
          </h1>
          <p className="mt-5 text-gray-600 text-lg max-w-xl">
            Discover premium electronics, fashion, and lifestyle products.
            Experience innovation, quality, and style in every purchase.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-lg shadow-md hover:scale-105 transition-transform">
              Shop Now <ShoppingBag size={18} />
            </button>
            <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition-colors">
              Explore Categories <ArrowRight size={18} />
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <p className="text-2xl font-bold text-gray-900">50K+</p>
              <p className="text-gray-500 text-sm">Happy Customers</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">10K+</p>
              <p className="text-gray-500 text-sm">Products</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">99%</p>
              <p className="text-gray-500 text-sm">Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src={heroImg}
            alt="Vyantra Products"
            className="rounded-2xl shadow-xl"
          />

          {/* Free Shipping Tag */}
          <div className="absolute -bottom-6 left-6 bg-white rounded-xl shadow-lg px-5 py-3 flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center bg-indigo-50 rounded-full">
              <ShoppingBag className="text-indigo-500" size={20} />
            </div>
            <div>
              <p className="font-semibold text-gray-800">Free Shipping</p>
              <p className="text-sm text-gray-500">On orders over $50</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
