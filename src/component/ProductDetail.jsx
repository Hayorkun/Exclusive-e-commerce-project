import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import displayStar from "../utils/DisplayStar";
import { CiDeliveryTruck, CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { RotateCcw } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useShop();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found</p>;

  const [quantity, setQuantity] = useState(0);

  return (
    <section className="md:px-5 my-10">
      <div className="my-max-width w-11/12 mx-auto">
        <div className="flex flex-col md:flex-row gap-4 h-100">
          <div className="flex-1/6 flex md:flex-col gap-5 order-2 md:order-1 shrink-0">
            {product.images.map((img) => (
              <div key={img} className="bg-gray-100 p-3">
                <img
                  src={img}
                  alt={product.title}
                  className="w-full h-24 object-contain cursor-pointer"
                />
              </div>
            ))}
          </div>
          <div className="flex-3/6 order-1 md:order-2 flex items-center justify-center bg-gray-100">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="object-contain cursor-pointer"
            />
          </div>
          <div className="flex-2/5 order-3 bg-gray-100 flex flex-col p-2">
            <h1 className="font-heading text-lg font-bold mb-1">
              {product.title}
            </h1>
            <div className="flex gap-3 items-center mb-1">
              <div className="flex gap-2 items-center">
                {displayStar(product.rating)}
                <p className="font-body text-xs text-gray-400">
                  ( {product.reviews.length} reviews )
                </p>
              </div>
              <hr className="border border-gray-400 h-3 flex items-center" />
              <p className="fot-body text-xs text-green-400">
                {product.availabilityStatus}
              </p>
            </div>
            <p className="font-body font-normal mb-2 text-xl">{`$${product.price}`}</p>
            <p className="font-body font-light leading-3 text-xs mb-2">
              {product.description}
            </p>

            <p className="font-body text-sm mb-2">Brand: {product.brand}</p>

            <div className="flex gap-5 items-center mb-3">
              <div className="flex items-center w-2/5 p-1 gap-2">
               <button onClick={() => setQuantity(q => Math.max(1, q + 1))}>
                <CiCirclePlus className="size-6.5"/>
               </button>
                <span className="rounded-sm py-1 px-5  border bg-black text-white text-sm">{quantity}</span>
               <button onClick={() => setQuantity(q => Math.max(1, q - 1))}><CiCircleMinus className="size-6.5"/></button>
              </div>
              <div className="flex items-center justify-center bg-black rounded-sm w-3/5 p-1">
                <button className="text-white">Buy Now</button>
              </div>
            </div>

            <div className="border rounded-xs flex flex-col gap-2">
              <div className="flex gap-2 items-center px-1">
                <CiDeliveryTruck className="size-7" />
                <div>
                  <p className="font-body text-sm">Free Delivery</p>
                  <p className="font-body text-xs underline">
                    Enter your posstal code for delivery
                  </p>
                </div>
                <hr />
              </div>
              <div className="flex gap-2 items-center px-1">
                <RotateCcw className="size-7" />
                <div>
                  <p className="font-body text-sm">Return Delivery</p>
                  <p className="font-body text-xs">
                    Free 30 days delivery returns.{" "}
                    <span className="underline">Details</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
