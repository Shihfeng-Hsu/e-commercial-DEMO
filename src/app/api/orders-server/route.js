// app/api/orders/route.js
//上傳mongoDB的版本

import { NextResponse } from "next/server";
import mongoose from "mongoose";

// 連接到MongoDB
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
const uri =
  "mongodb+srv://ga017281:xCqhvovZhIOkIPSJ@cluster0.0cz8e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 定義訂單模式
const orderSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  formData: {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  paymentMethod: { type: String, required: true },
  cart: [
    {
      id: { type: Number, required: true },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      image: { type: String, required: true },
      category: { type: String, required: true },
      rating: { type: Number, required: true },
      description: {
        type: String,
        required: true,
      },
      size: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  status: { type: String, default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

// 創建訂單模型
const Order =
  mongoose.models.Order ||
  mongoose.model("Order", orderSchema);

// 生成唯一ID的函數
function generateUniqueId() {
  return `${new Date().toISOString()}${Math.floor(
    1000000 * Math.random()
  )}`;
}

export async function POST(request) {
  try {
    const body = await request.json();

    // 生成唯一ID
    body.id = generateUniqueId();

    // 創建新訂單
    const newOrder = new Order(body);
    await newOrder.save();

    return NextResponse.json(newOrder, {
      status: 201,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      {
        status: 500,
      }
    );
  }
}

export async function GET() {
  try {
    const orders = await Order.find();
    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      {
        status: 500,
      }
    );
  }
}
