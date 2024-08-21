"use client";
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";

const CardButton = ({
  children,
  className = "",
  variant = "default",
  size = "default",
  product,
  ...props
}) => {
  const { addToCart } = useCart();
  const [
    isSelectedProduct,
    setIsSelectedProduct,
  ] = useState(false);

  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

  const variants = {
    default:
      "bg-blue-700 text-white hover:bg-blue-700/90",
    destructive:
      "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline:
      "border border-input hover:bg-gray-200 hover:text-accent-foreground",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost:
      "hover:bg-accent hover:text-accent-foreground",
    link: "underline-offset-4 hover:underline text-primary",
  };

  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
  };
  const handleAddToCart = (size) => {
    addToCart({ ...product, size: size });
    // 可以在這裡添加一些視覺反饋，比如顯示一個提示消息
    alert(`${product.name} 已添加到購物車！`);
  };

  const variantStyles = variants[variant];
  const sizeStyles = sizes[size];

  return isSelectedProduct ? (
    <div>
      {["S", "M", "L", "XL"].map((size) => {
        return (
          <button
            key={size}
            onClick={() => {
              setIsSelectedProduct(false);
              handleAddToCart(size);
            }}
            className={`${baseStyles} ${variants.outline} ${sizes.sm} mx-1`}
          >
            {size}
          </button>
        );
      })}
    </div>
  ) : (
    <button
      onClick={() => {
        setIsSelectedProduct(true);
      }}
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className} `}
      {...props}
    >
      {children}
    </button>
  );
};

export default CardButton;
