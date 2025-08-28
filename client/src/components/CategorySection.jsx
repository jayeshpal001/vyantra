import React from "react";
import { motion } from "framer-motion";
import electronic from "../assets/Electronic1.png";
import fashion from "../assets/Fashion.png";
import home from "../assets/Home.png"
const products = [
  {
    id: 1,
    title: "Electronics",
    subtitle: "Latest gadgets and tech",
    items: "2,500+ Items",
    img: electronic,
  },
  {
    id: 2,
    title: "Fashion",
    subtitle: "Trendy clothing and accessories",
    items: "1,800+ Items",
    img: fashion,
  },
  {
    id: 3,
    title: "Home & Living",
    subtitle: "Beautiful home decor",
    items: "2,000+ Items",
    img: home,
  },
];

const CategorySection = () => {
  return (
    <section className="py-12 px-6 md:px-16 lg:px-24 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Product Section
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Explore our carefully curated collections designed to meet your every need
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
          >
            {/* Background Image */}
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

            {/* Content */}
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-200">{product.subtitle}</p>
              <p className="text-xs mt-1">{product.items}</p>
              <button className="mt-3 px-4 py-2 text-sm bg-white text-gray-900 rounded-full shadow-md hover:bg-gray-200 transition">
                Shop Now →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
