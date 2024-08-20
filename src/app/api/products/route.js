// app/api/products/route.js

import { NextResponse } from "next/server";
import { products } from "@/data/products"; // 假設你有一個產品數據文件

export async function GET() {
  return NextResponse.json(products);
}

// export async function POST(request) {
//   const body = await request.json();
//   const newProduct = {
//     id: products.length + 1,
//     ...body,
//   };
//   products.push(newProduct);
//   return NextResponse.json(newProduct, {
//     status: 201,
//   });
// }
