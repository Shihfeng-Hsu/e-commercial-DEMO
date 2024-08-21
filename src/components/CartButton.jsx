"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const CartButton = () => {
  const { cart } = useCart();
  const router = useRouter();

  const itemCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleClick = () => {
    router.push("/cart");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg transition duration-300 flex items-center justify-center"
      >
        <ShoppingCartIcon className="h-6 w-6" />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </button>
    </div>
  );
};

export default CartButton;
