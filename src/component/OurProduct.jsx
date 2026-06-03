import React from "react";
import { useShop } from "../context/ShopContext";
import { NavLink } from "react-router";
import { Heart, EyeIcon, Star } from "lucide-react";

const OurProduct = () => {
  const { products } = useShop();

  const displayStar = (number) => {
    if (number <= 1 && number > 0) {
      return (
        <div className="flex items-center justify-start">
          <Star size={12} strokeWidth={0} className="fill-amber-300"/>
          <Star size={12} strokeWidth={0} className="fill-gray-300" />
          <Star size={12} strokeWidth={0} className="fill-gray-300" />
          <Star size={12} strokeWidth={0} className="fill-gray-300" />
          <Star size={12} strokeWidth={0} className="fill-gray-300" />
        </div>
      );
    } else if (number <= 2 && number > 1) {
      return (
        <div className="flex items-center justify-start">
          <Star size={12} strokeWidth={0} className="fill-amber-300" />
          <Star size={12} strokeWidth={0} className="fill-amber-300" />
          <Star size={12} strokeWidth={0} className="fill-gray-300" />
          <Star size={12} strokeWidth={0} className="fill-gray-300" />
          <Star size={12} strokeWidth={0} className="fill-gray-300" />
        </div>
      );
    }  else if (number <= 3 && number > 2) {
      return (
        <div className="flex items-center justify-start">
          <Star size={12} strokeWidth={0} className="fill-amber-300" />
          <Star size={12} strokeWidth={0} className="fill-amber-300" />
          <Star size={12} strokeWidth={0} className="fill-amber-300" />
          <Star size={12} strokeWidth={0} className="fill-gray-300" />
          <Star size={12} strokeWidth={0} className="fill-gray-300" />
        </div>
      );
    }  else if (number <= 4 && number > 3) {
      return (
        <div className="flex items-center justify-start">
          <Star size={12} strokeWidth={0} className="fill-amber-300" />
          <Star size={12} strokeWidth={0} className="fill-amber-300" />
          <Star size={12} strokeWidth={0} className="fill-amber-300" />
          <Star size={12} strokeWidth={0} className="fill-amber-300" />
          <Star size={12} strokeWidth={0} className="fill-gray-300" />
        </div>
      );
    }  else if (number <= 5 && number > 4) {
      return (
        <div className="flex items-center justify-start">
          <Star size={12} strokeWidth={0} className="fill-amber-300" /> 
          <Star size={12} strokeWidth={0} className="fill-amber-300" /> 
          <Star size={12} strokeWidth={0} className="fill-amber-300" /> 
          <Star size={12} strokeWidth={0} className="fill-amber-300" /> 
          <Star size={12} strokeWidth={0} className="fill-amber-300" /> 
        </div>
      );
    }
  };

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
              <div key={f.id} className="h-40">
                <div className="flex-3/4 flex justify-center bg-gray-100 h-25">
                  <img src={f.images} alt={f.title} className="w-25" />
                  {/* <div clas>
                    <span className="">
                      <Heart />
                    </span>
                    <span>
                      <EyeIcon />
                    </span>
                  </div> */}
                </div>
                <p className="font-body leading-relaxed ">{f.title}</p>
                <p className="font-body">{displayStar(f.rating)}</p>
              </div>
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
