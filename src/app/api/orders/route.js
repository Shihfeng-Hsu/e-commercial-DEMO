// app/api/orders/route.js

import { NextResponse } from "next/server";

// 模擬數據庫
let orders = [];

export async function POST(request) {
  // 創建新訂單
  const body = await request.json();
  const newOrder = {
    id: `${
      new Date().toISOString() +
      Math.floor(1000000 * Math.random())
    }`,
    ...body,
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  orders.push(newOrder);

  return NextResponse.json(newOrder, {
    status: 201,
  });
}
