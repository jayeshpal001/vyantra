import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2c384d] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Brand Section */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-white">VYANTRA</h2>
          <p className="mt-4 text-sm leading-relaxed">
            Your premier destination for quality electronics, fashion, and
            lifestyle products. Discover innovation and style in every purchase.
          </p>

          <div className="mt-6 space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <Mail size={16} /> <span>jayashpal5@gmail.com</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} /> <span>+91 91798 98569</span>
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> <span>Delhi, India - 110001</span>
            </p>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-semibold text-white mb-4">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li>Electronics</li>
            <li>Fashion</li>
            <li>Home & Living</li>
            <li>Sports & Outdoor</li>
            <li>Beauty & Health</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Contact</li>
            <li>Sustainability</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>Help Center</li>
            <li>Shipping Info</li>
            <li>Returns</li>
            <li>Size Guide</li>
            <li>Track Order</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 px-6">
        {/* Social Links */}
        <div className="flex gap-4 text-gray-400">
          <a href="#" className="hover:text-white">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-white">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-white">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-white">
            <FaYoutube />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} VYANTRA. All rights reserved. | Designed
          by <span className="text-white font-medium">Jayesh Pal</span>
        </p>
      </div>
    </footer>
  );
}
