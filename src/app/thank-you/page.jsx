// app/thank-you/page.js
"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ThankYouPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          感謝您的購買！
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          您的訂單已經成功提交。
        </p>
        {orderId && (
          <p className="text-lg font-semibold text-blue-600 mb-8">
            訂單編號：{orderId}
          </p>
        )}
        <p className="text-sm text-gray-600 mb-8">
          我們已經發送一封確認郵件到您的電子郵箱。如有任何問題，請隨時與我們聯繫。
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200"
        >
          返回首頁
        </Link>
      </div>
    </div>
  );
}
