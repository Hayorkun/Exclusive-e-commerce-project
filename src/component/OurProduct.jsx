import React from "react";
import { useShop } from "../context/ShopContext";
import { NavLink } from "react-router";
import { Heart, EyeIcon, Star } from "lucide-react";
import displayStar from "../utils/DisplayStar";

const OurProduct = () => {
  const { products } = useShop();

  return (
    <section className="md:px-5 my-10">
      <div className="my-max-width w-11/12 mx-auto flex flex-col">
        <div className="mb-5">
          <div className="flex gap-2 items-center mb-3">
            <span className="w-3 h-6 bg-red-500 rounded-sm "></span>
            <p className="font-body text-sm">Our Products</p>
          </div>
          <h2 className="font-heading font-semibold text-2xl">
            Explore Our Products
          </h2>
        </div>
        <div className="">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-3">
            {products.slice(0, 12).map((f) => (
              <NavLink to={`/product/${f.id}`} key={f.id} className="h-40 relative">
                <div className="flex-3/4 flex justify-center bg-gray-100 h-25">
                  <img src={f.images[0]} alt={f.title} className="w-25" />
                  <div className="absolute right-2 top-2">
                    <span className="">
                      <Heart className="size-5"/>
                    </span>
                    <span>
                      <EyeIcon className="size-5"/>
                    </span>
                  </div>
                </div>
                <p className="font-body leading-relaxed ">{f.title}</p>
                <div className="flex items-center gap-3">
                  <p className="font-body text-sm">{`$${f.price}`}</p>
                  <div className="font-body text-xs">Stock: ({`${f.stock}`})</div>
                </div>
                <div className="font-body">{displayStar(f.rating)}</div>
              </NavLink>
            ))}
          </div>
          <div className="flex justify-center mt-5">
            <button className="bg-black text-white px-4 py-2">
              <NavLink>View all products</NavLink>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProduct;
