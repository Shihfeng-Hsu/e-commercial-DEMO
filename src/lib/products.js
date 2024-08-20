// lib/products.js

// 模擬產品數據
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

// 模擬評論數據
const reviews = {
  1: [
    {
      id: "101",
      author: "張小明",
      content: "質量很好，穿著舒適",
    },
    {
      id: "102",
      author: "李曉華",
      content: "款式簡約大方，很喜歡",
    },
  ],
  2: [
    {
      id: "201",
      author: "王大力",
      content: "圖案很酷，朋友都說好看",
    },
    {
      id: "202",
      author: "趙悅",
      content: "顏色和圖片一樣，很滿意",
    },
  ],
  // ... 更多評論
};

export async function getProductById(id) {
  // 模擬 API 請求延遲
  await new Promise((resolve) =>
    setTimeout(resolve, 100)
  );

  // 查找產品
  const product = products.find((p) => {
    return p.id === Number(id); // Must be the same type
  });

  if (!product) {
    console.log(
      `Product with id ${id} not found`
    );
    return null; // 返回 null 而不是 undefined
  }

  return product;
}
export async function getRelatedProducts(
  id,
  limit = 4
) {
  // 模擬 API 請求延遲
  await new Promise((resolve) =>
    setTimeout(resolve, 100)
  );
  return products
    .filter((p) => p.id !== id)
    .slice(0, limit);
}

export async function getProductReviews(id) {
  // 模擬 API 請求延遲
  await new Promise((resolve) =>
    setTimeout(resolve, 100)
  );
  return reviews[id] || [];
}
