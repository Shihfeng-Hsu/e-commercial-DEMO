import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartProvider from "@/context/CartContext";
import "./globals.css";
import ProductsProvider from "@/context/ProductsContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Billy衣飾",
  description: "使用Next.js創建的簡單購物網站",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <ProductsProvider>
              <main className="flex-grow container mx-auto px-4 py-8">
                {children}
              </main>
            </ProductsProvider>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
