"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function AddToCartButton({
  product,
}) {
  const [selectedSize, setSelectedSize] =
    useState("");
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({
        ...product,
        size: selectedSize,
      });
      alert("商品已添加到購物車！");
    } else {
      alert("請選擇尺寸");
    }
  };

  return (
    <div>
      <div className="mb-4">
        <span className="font-bold text-gray-700">
          選擇 Size:
        </span>
        <div className="flex items-center mt-2">
          {["S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              className={`bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 ${
                selectedSize === size
                  ? "bg-blue-500 text-white"
                  : ""
              }`}
              onClick={() =>
                setSelectedSize(size)
              }
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white py-2 px-4 rounded-full font-bold hover:bg-blue-600"
      >
        加入購物車
      </button>
    </div>
  );
}
