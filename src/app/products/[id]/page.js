import Image from "next/image";
import { getProductById } from "@/lib/products";
import AddToCartButton from "./AddToCartButton";

export default async function ProductPage({
  params,
}) {
  const product = await getProductById(params.id);

  console.log(params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row -mx-4">
        <div className="md:flex-1 px-4">
          <div className="rounded-lg bg-gray-300 mb-4 ">
            <Image
              src={require(`@/image/${product.image}`)}
              alt={product.name}
              width={400}
              height={400}
              priority={true}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:flex-1 px-4">
          <h2 className="text-2xl font-bold mb-2">
            {product.name}
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            {product.description}
          </p>
          <div className="flex mb-4">
            <div className="mr-4">
              <span className="font-bold text-gray-700">
                價格:
              </span>
              <span className="text-gray-600">
                ${product.price}
              </span>
            </div>
            {/* <div>
              <span className="font-bold text-gray-700">
                Availability:
              </span>
              <span className="text-gray-600">
                {product.inStock
                  ? "In Stock"
                  : "Out of Stock"}
              </span>
            </div> */}
          </div>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
