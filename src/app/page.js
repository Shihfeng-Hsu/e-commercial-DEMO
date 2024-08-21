import React from "react";
import Carousel from "@/components/Carousel";
import ProductCard from "@/components/ProductCard";
import CartButton from "@/components/CartButton";

const featuredProducts = [
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

const carouselImages = [
  {
    src: "https://picsum.photos/800/600?random=1",
    alt: "T恤新品上市",
    title: "夏日新品",
    description: "清涼舒適，盡情展現自我",
  },
  {
    src: "https://picsum.photos/800/600?random=2",
    alt: "環保系列",
    title: "綠色時尚",
    description: "環保面料，時尚與責任並重",
  },
  {
    src: "https://picsum.photos/800/600?random=3",
    alt: "限量聯名",
    title: "藝術聯名系列",
    description: "與知名藝術家合作，限量發售",
  },
];

export default function Home() {
  return (
    <div className="space-y-8">
      <CartButton />
      <section>
        <Carousel images={carouselImages} />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">
          精選T恤
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              price={product.price}
              name={product.name}
              description={product.description}
              imageUrl={product.image}
              imagePath={product.image}
              productID={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
