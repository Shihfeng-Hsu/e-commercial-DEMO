// app/cart/page.js
"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
  } = useCart();

  const router = useRouter();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">
          購物車
        </h1>

        <p>您的購物車是空的。</p>

        <Link
          href="/"
          className="text-blue-500 hover:underline"
        >
          繼續購物
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">
        購物車
      </h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-3/4">
          {cart.map((item) => (
            <div
              key={`${item.id}-${item.size}`}
              className="flex items-center border-b py-4"
            >
              <div className="w-24 h-24 flex-shrink-0">
                <Image
                  src={require(`@/image/${item.image}`)}
                  alt={item.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-4 flex-grow">
                <h2 className="text-lg font-semibold">
                  {item.name}
                </h2>
                <p className="text-gray-600">
                  尺寸: {item.size}
                </p>
                <p className="text-gray-600">
                  單價: ${item.price}
                </p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() =>
                    updateQuantity(
                      item.id,
                      item.size,
                      Math.max(
                        1,
                        item.quantity - 1
                      )
                    )
                  }
                  className="bg-gray-200 px-2 py-1 rounded"
                >
                  -
                </button>
                <span className="mx-2">
                  {item.quantity}
                </span>
                <button
                  onClick={() =>
                    updateQuantity(
                      item.id,
                      item.size,
                      item.quantity + 1
                    )
                  }
                  className="bg-gray-200 px-2 py-1 rounded"
                >
                  +
                </button>
              </div>
              <div className="ml-4">
                <p className="font-semibold">
                  $
                  {(
                    item.price * item.quantity
                  ).toFixed(2)}
                </p>
              </div>
              <button
                onClick={() =>
                  removeFromCart(
                    item.id,
                    item.size
                  )
                }
                className="ml-4 text-red-500 hover:text-red-700"
              >
                移除
              </button>
            </div>
          ))}
        </div>
        <div className="md:w-1/4">
          <div className="bg-gray-100 p-4 rounded">
            <h2 className="text-lg font-semibold mb-4">
              訂單摘要
            </h2>
            <div className="flex justify-between mb-2">
              <span>小計</span>
              <span>
                ${getCartTotal().toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between mb-2">
              <span>運費</span>
              <span>$0.00</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-semibold">
                <span>總計</span>
                <span>
                  ${getCartTotal().toFixed(2)}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                router.push("./checkout/");
              }}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600 transition duration-200"
            >
              結帳
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Link
          href="/"
          className="text-blue-500 hover:underline"
        >
          ← 繼續購物
        </Link>
      </div>
    </div>
  );
}
