import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
  setCart((prevCart) => {
    const exist = prevCart.find((item) => item.id === product.id);
    if (exist) {
      // Agar product already cart me hai to kuch mat karo
      return prevCart;
    } else {
      // Pehli baar add ho raha hai
      return [...prevCart, { ...product, qty: 1 }];
    }
  });
};


  // Update qty manually (+ / - button ke liye)
  const updateQty = (id, qty) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, qty: qty } : item
      )
    );
  };

  // Remove item
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty }}>
      {children}
    </CartContext.Provider>
  );
}

// custom hook
export const useCart = () => useContext(CartContext);
