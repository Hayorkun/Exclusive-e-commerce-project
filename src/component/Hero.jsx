import { useState } from "react";
import React from "react";
import Images from "../assets/Image";
import {
  ArrowRight,
  BriefcaseBusiness,
  CookingPot,
  Tablet,
  HeartPulse,
  Home,
  Tv,
  Shirt,
  Apple,
  Computer,
  Baby,
  Gamepad,
  CircleDot,
} from "lucide-react";
import { useShop } from "../context/ShopContext"
// import { motion, AnimatePresence } from "framer-motion"

function Hero() {

  const [openCat, setOpenCat] = useState(false);
  const { category } = useShop()

  return (
    <>
      <div className="items-center py-5">
        <div className="flex gap-3 my-max-width w-11/12 h-70 md:h-100 mx-auto overflow-visible">
          <div className="flex-1 bg-white hidden md:block p-2 h-full overflow-visible">
            <div
              className="bg-white hidden md:flex flex-col p-2 justify-between relative overflow-visible h-full overflow-y-scroll"
              onMouseEnter={() => setOpenCat(true)}
              onMouseLeave={() => setOpenCat(false)}
            >
              {category.map((c) => (
                <button
                  key={c.category}
                  className="flex gap-2 font-body text-md font-normal p-1 rounded-lg hover:bg-black/20 transition"
                >
                  <span>{c.category}</span>
                </button>
              ))}
            </div>
          </div>

          {openCat && (
            <div className="absolute top-0 left-full w-72 h-full bg-white shadow-lg border z-50 p-4">
              <p className="font-bold text-lg mb-3">All Categories</p>
              { }
              {category.map((c) => (
                <button
                  key={c.category}
                  className="flex gap-2 items-center w-full p-2 hover:bg-gray-100 rounded-lg text-sm"
                >
                  <span>{c.category}</span>
                </button>
              ))}
            </div>
          )}

          <div className="flex-3 border h-full">
            <div className="border-green-400 flex text-white bg-black h-full p-7 md:p-14">
              <div className="flex-2 flex flex-col">
                <div className="flex gap-3 items-center mb-5 md:mb-10">
                  <img
                    className="w-7"
                    src={Images.Apple_logo}
                    alt="Apple logo"
                  />
                  <p className="font-body font-light leading-5">
                    Iphone 14 series
                  </p>
                </div>

                <h1 className="font-heading font-bold text-3xl leading-8 lg:text-6xl md:text-5xl md:leading-15 mb-7 md:mb-10">
                  Up to 10% off voucher
                </h1>

                <button className="flex gap-0.5 items-center font-body underline decoration-solid text-md font-light">
                  Shop now <ArrowRight className="size-4 mt-1" />
                </button>
              </div>
              <div className="flex-2 flex justify-end">
                <img className="h-full" src={Images.Iphone14} alt="Iphone 14" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
