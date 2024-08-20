"use client";
import { createContext, useContext } from "react";

const products = [
  {
    id: 1,
    name: "經典純色T恤",
    price: 599,
    image: "tee-img-2.jpeg",
    category: "基本款",
    rating: 4.5,
    description: "柔軟舒適，多色可選",
  },
  {
    id: 2,
    name: "復古印花T恤",
    price: 699,
    image: "tee-img-3.jpeg",
    category: "圖案款",
    rating: 4.3,
    description: "獨特復古設計，彰顯個性",
  },
  {
    id: 3,
    name: "運動機能T恤",
    price: 799,
    image: "tee-img-4.jpeg",
    category: "運動款",
    rating: 4.7,
    description: "吸濕排汗，適合運動穿著",
  },
  {
    id: 4,
    name: "寬鬆oversize T恤",
    price: 649,
    image: "tee-img-5.jpeg",
    category: "時尚款",
    rating: 4.2,
    description: "慵懶隨性，街頭潮流首選",
  },
  {
    id: 5,
    name: "條紋海軍風T恤",
    price: 749,
    image: "tee-img-6.jpeg",
    category: "條紋款",
    rating: 4.4,
    description: "經典條紋設計，清新自然",
  },
  {
    id: 6,
    name: "環保有機棉T恤",
    price: 899,
    image: "tee-img-7.jpeg",
    category: "環保款",
    rating: 4.6,
    description: "100%有機棉，環保舒適",
  },
  {
    id: 7,
    name: "漸層色彩T恤",
    price: 729,
    image: "tee-img-8.jpeg",
    category: "特色款",
    rating: 4.1,
    description: "獨特漸層染色，吸睛亮眼",
  },
  {
    id: 8,
    name: "插畫藝術T恤",
    price: 779,
    image: "Z.jpeg",
    category: "藝術款",
    rating: 4.5,
    description: "原創藝術插畫，展現品味",
  },
];

export const ProductsContext = createContext();

export default function ProductsProvider({
  children,
}) {
  return (
    <ProductsContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProduct() {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error(
      "useCart must be used within a CartProvider"
    );
  }
  return context;
}
