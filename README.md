###這是使用 Next.js 跟 TailwindCSS 建構起來的 DEMO 購物網站
資料架構如下
my-nextjs-ecommerce/
│
├── src/
│ ├── app/
│ │ ├── layout.js # 根布局
│ │ ├── page.js # 主頁面 (含推薦商品)
│ │ ├── cart/
│ │ │ └── page.js # 購物車頁面
│ │ ├── checkout/
│ │ │ └── page.js # 結帳頁面
│ │ ├── products/
│ │ │ └── [id]/
│ │ │ └── page.js # 單個商品詳情頁面
│ │ │
│ │ └── api/ # API 路由
│ │ ├── products/
│ │ │ └── route.js
│ │ ├── cart/
│ │ │ └── route.js
│ │ └── checkout/
│ │ └── route.js
│ │
│ ├── components/
│ │ ├── Header.js
│ │ ├── Footer.js
│ │ ├── ProductCard.js
│ │ ├── CartItem.js
│ │ └── CheckoutForm.js
│ │
│ ├── lib/
│ │ ├── db.js # 數據庫連接
│ │ └── api.js # API 函數
│ │
│ └── context/
│ └── CartContext.js # 購物車狀態管理
│
├── public/
│ └── images/
│
├── next.config.js
├── package.json
└── README.md
