import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import CardButton from "@/components/ui/CardButton";
import Image from "next/image";
import OnNavigation from "./ui/OnNavigation";

// import { useCart } from "@/context/CartContext";

const ProductCard = ({ product }) => {
  const price = product.price;
  const name = product.name;
  const description = product.description;
  const imagePath = product.image;
  const productID = product.id;

  return (
    <Card className=" max-w-xl">
      <OnNavigation
        url={`/products/${productID}`}
      >
        <CardHeader>
          <Image
            src={require(`@/image/${imagePath}`)}
            alt={name}
            priority={true}
            className="rounded-t-lg"
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="text-xl font-bold mb-2">
            {name}
          </CardTitle>
          <p className="text-gray-600 mb-4">
            {description}
          </p>
          <p className="text-lg font-semibold">
            ${price.toFixed(2)}
          </p>
        </CardContent>
      </OnNavigation>
      <CardFooter>
        <CardButton
          className="w-full"
          product={product}
        >
          加入購物車
        </CardButton>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
