// app/checkout/page.js
"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

const countries = [
  "台灣",
  "中國",
  "日本",
  "韓國",
  "美國",
  "加拿大",
  "英國",
  "法國",
  "德國",
  "澳大利亞",
  // 後續可以根據需要添加更多國家
];

export default function CheckoutPage() {
  const { cart, getCartTotal } = useCart();
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });
  const [paymentMethod, setPaymentMethod] =
    useState("creditCard");

  const [isCheckOut, setIsCheckOut] =
    useState(false);

  useEffect(() => {
    if (cart.length === 0) {
      setIsCheckOut(false);
      router.push("/");
    }
  }, [cart, router]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 在這裡處理結帳邏輯：發送訂單到後端

    fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formData,
        paymentMethod,
        cart,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        alert(
          "抱歉，訂單提交錯誤，請與客服聯繫:電話0800-000-001"
        );
      });

    // console.log("訂單提交", {
    //   formData,
    //   paymentMethod,
    //   cart,
    // });
    // 可以在這裡添加表單驗證邏輯？
  };

  if (cart.length === 0 && isCheckOut) {
    return null;
  }

  // 如果購物車為空，返回 null（不渲染任何內容）
  if (cart.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        結帳
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold mb-4">
              收貨資訊
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="姓名"
                className="border p-2 rounded"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="電子郵件"
                className="border p-2 rounded"
                required
              />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="地址"
                className="border p-2 rounded"
                required
              />
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="城市"
                className="border p-2 rounded"
                required
              />
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                placeholder="郵遞區號"
                className="border p-2 rounded"
                required
              />
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="border p-2 rounded"
                required
              >
                <option value="">選擇國家</option>
                {countries.map((country) => (
                  <option
                    key={country}
                    value={country}
                  >
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <h2 className="text-2xl font-semibold my-4">
              支付方式
            </h2>
            <div className="flex gap-4 mb-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="creditCard"
                  checked={
                    paymentMethod === "creditCard"
                  }
                  onChange={() =>
                    setPaymentMethod("creditCard")
                  }
                  className="mr-2"
                />
                信用卡
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={
                    paymentMethod === "paypal"
                  }
                  onChange={() =>
                    setPaymentMethod("paypal")
                  }
                  className="mr-2"
                />
                PayPal
              </label>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
            >
              確認訂單
            </button>
          </form>
        </div>

        <div className="md:w-1/3">
          <div className="bg-gray-100 p-4 rounded">
            <h2 className="text-2xl font-semibold mb-4">
              訂單摘要
            </h2>
            {cart.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex justify-between mb-2"
              >
                <span>
                  {item.name} (尺寸: {item.size})
                  x {item.quantity}
                </span>
                <span>
                  $
                  {(
                    item.price * item.quantity
                  ).toFixed(2)}
                </span>
              </div>
            ))}
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-semibold">
                <span>總計</span>
                <span>
                  ${getCartTotal().toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Link
          href="/cart"
          className="text-blue-500 hover:underline"
        >
          ← 返回購物車
        </Link>
      </div>
    </div>
  );
}
