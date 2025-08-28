import React from "react";
import { ShoppingCart } from "lucide-react";
import featuredP1 from "../assets/featuredP1.png";
import featuredP2 from "../assets/featuredP2.png";
import featuredP3 from "../assets/featuredP3.png";
import featuredP4 from "../assets/featuredP4.png";

const products = [
  {
    id: 1,
    title: "Premium Smartphone",
    tag: "Best Seller",
    rating: 4.8,
    reviews: 128,
    price: 899,
    oldPrice: 1099,
    discount: "18% off",
    image:featuredP1,
  },
  {
    id: 2,
    title: "Wireless Headphones",
    tag: "New",
    rating: 4.9,
    reviews: 95,
    price: 299,
    oldPrice: 399,
    discount: "25% off",
   image:featuredP2,
  },
  {
    id: 3,
    title: "Gaming Laptop",
    tag: "Hot Deal",
    rating: 4.7,
    reviews: 203,
    price: 1299,
    oldPrice: 1599,
    discount: "19% off",
  image:featuredP3,
  },
  {
    id: 4,
    title: "Smart Watch",
    tag: "Limited",
    rating: 4.6,
    reviews: 87,
    price: 399,
    oldPrice: 499,
    discount: "20% off",
    image:featuredP4,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured Products
          </h2>
          <p className="text-gray-500 mt-2">
            Handpicked premium products with unbeatable quality and value
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-50 rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-500"
            >
              {/* Image + Tag */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-52 object-contain p-6 transform group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-indigo-500 text-white text-xs px-3 py-1 rounded-full shadow">
                  {product.tag}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-2">
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-gray-300">★</span>
                  <p className="text-sm text-gray-500 ml-2">
                    {product.rating} ({product.reviews})
                  </p>
                </div>

                {/* Price */}
                <div className="mt-3">
                  <span className="text-xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <span className="ml-2 text-gray-400 line-through">
                    ${product.oldPrice}
                  </span>
                  <span className="ml-2 text-green-600 font-medium">
                    {product.discount}
                  </span>
                </div>

                {/* Button */}
                <button className="mt-5 w-full flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
                  Add to Cart <ShoppingCart size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 border rounded-lg text-gray-700 hover:bg-gray-100 transition">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
