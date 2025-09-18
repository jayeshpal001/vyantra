import React from "react";
import { useCart } from "../context/CartContext";
import { Plus, Minus, Trash2 } from "lucide-react"; // prettier icons

function Cart() {
  const { cart, removeFromCart, updateQty } = useCart();

  // Calculate total price
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">
        🛒 Your Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          Your cart is empty. Start adding some products!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left side - Cart Items */}
          <div className="md:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 bg-white shadow-lg p-5 rounded-2xl border hover:shadow-xl transition"
              >
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-28 object-cover rounded-lg border"
                />

                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {item.description?.slice(0, 60)}...
                  </p>
                  <p className="font-medium text-gray-700">
                    Price:{" "}
                    <span className="text-green-600 font-bold">
                      ${item.price}
                    </span>
                  </p>

                  {/* Quantity Control */}
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      disabled={item.qty <= 1}
                      className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 disabled:opacity-50"
                    >
                      <Minus size={18} />
                    </button>
                    <span className="text-lg font-semibold">{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </div>

                {/* Right Side - Price & Remove */}
                <div className="flex flex-col items-end">
                  <span className="text-lg font-bold text-gray-800">
                    ${(item.price * item.qty).toFixed(2)}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-3 flex items-center gap-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  >
                    <Trash2 size={16} /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Order Summary */}
          <div className="bg-white shadow-lg p-6 rounded-2xl border">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Order Summary
            </h3>
            <div className="space-y-3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-gray-700"
                >
                  <span>
                    {item.title} x {item.qty}
                  </span>
                  <span>${(item.price * item.qty).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="border-t mt-4 pt-4 flex justify-between text-lg font-semibold text-gray-800">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
