"use client";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

export default function Header() {
  const { cart } = useContext(CartContext);

  return (
    <header className=" bg-cyan-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold"
        >
          <span className=" font-extralight text-4xl mx-1 text-teal-200">
            BILLY
          </span>
          衣飾
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">首頁</Link>
            </li>
            <li>
              <Link href="/cart">
                購物車 ({cart.length})
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
