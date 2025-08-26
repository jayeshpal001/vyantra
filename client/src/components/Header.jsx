import React, { useState, useEffect } from "react";
import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-indigo-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo + Menu */}
          <div className="flex items-center gap-8">
            <div className="text-2xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent transition-all duration-300 hover:scale-105">
              VYANTRA
            </div>
            <nav className="hidden md:flex gap-6 text-sm font-medium">
              {["Electronics", "Fashion", "Home & Living", "Sports", "Beauty"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-700 hover:text-indigo-400 transition-colors duration-300 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                )
              )}
            </nav>
          </div>

          {/* Search + Icons */}
          <div className="flex items-center gap-6">
            {/* Search */}
            <div className="relative hidden sm:block">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 w-64 focus:ring-2 focus:ring-indigo-300 focus:border-transparent focus:outline-none transition-all duration-300 shadow-sm focus:shadow-md"
              />
            </div>

            {/* Icons */}
            <div className="flex items-center gap-5 text-gray-600">
              <div className="p-2 rounded-full hover:bg-indigo-50 transition-colors duration-300 cursor-pointer">
                <Heart className="w-5 h-5 hover:text-indigo-400 transition-colors duration-300" />
              </div>
              <div className="p-2 rounded-full hover:bg-indigo-50 transition-colors duration-300 cursor-pointer relative">
                <ShoppingCart className="w-5 h-5 hover:text-indigo-400 transition-colors duration-300" />
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-indigo-400 to-purple-400 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow-sm">
                  3
                </span>
              </div>
              <div className="p-2 rounded-full hover:bg-indigo-50 transition-colors duration-300 cursor-pointer">
                <User className="w-5 h-5 hover:text-indigo-400 transition-colors duration-300" />
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-indigo-400 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-4 bg-white/95 backdrop-blur-md border-t border-gray-100">
          <div className="relative mt-2">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 w-full focus:ring-2 focus:ring-indigo-300 focus:border-transparent focus:outline-none"
            />
          </div>
          <nav className="flex flex-col space-y-3">
            {["Electronics", "Fashion", "Home & Living", "Sports", "Beauty"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-700 hover:text-indigo-400 transition-colors duration-300 py-2 px-3 rounded-md hover:bg-indigo-50"
                >
                  {item}
                </a>
              )
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
