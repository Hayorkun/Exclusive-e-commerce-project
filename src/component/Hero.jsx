import { useState } from "react";
import Images from "../assets/Image";
import { useShop } from "../context/ShopContext";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

function Hero() {
  const [openCat, setOpenCat] = useState(null);
  const { category, mainCategory } = useShop();

  return (
    <>
      <div className="my-10">
        <div className="flex gap-3 my-max-width w-11/12 mx-auto h-100">
          <div
            className="flex-1 border border-gray-200 bg-white hidden md:block p-2 relative"
            onMouseLeave={() => setOpenCat(null)}
          >
            <div className="bg-white hidden md:flex flex-col p-1 justify-between overflow-y-scroll h-full">
              {mainCategory.map((c) => (
                <button
                  onMouseEnter={() => setOpenCat(c)}
                  key={c}
                  className="flex gap-2 font-body text-md font-normal p-1 rounded-lg hover:bg-black/20 transition"
                >
                  <span>{c}</span>
                </button>
              ))}
            </div>

            {openCat && (
              <div className="ml-3 absolute top-0 left-full w-65 bg-white shadow-lg border z-50 p-4">
                <p className="font-bold text-md mb-3">All Categories</p>
                {category
                  .filter((sub) => sub.category.startsWith(openCat))
                  .map((c) => (
                    <button
                      key={c.category}
                      className="flex gap-2 items-center w-full p-2 hover:bg-gray-100 rounded-lg text-sm"
                    >
                      <span>{c.category}</span>
                    </button>
                  ))}
              </div>
            )}
          </div>

          <div className="flex-3 border h-full">
            <div className="flex flex-col md:flex-row md:gap-0 text-white bg-black h-full p-5 md:p-10">
              <div className="flex-2 flex flex-col h-[40%]">
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

                <div>
                  <h1 className="font-heading font-bold text-3xl text-wrap lg:text-6xl md:text-5xl md:leading-15 mb-7 md:mb-10">
                    Up to 10% off voucher
                  </h1>

                  <NavLink to="/" className="flex gap-0.5 items-center font-body underline decoration-solid text-md font-light">
                    Shop now <ArrowRight className="size-4 mt-1" />
                  </NavLink>
                </div>
              </div>
              <div className="flex-2 h-[60%] md:h-full flex justify-center md:items-center md:justify-center">
                <img
                  className="h-full object-contain object-center"
                  src={Images.Iphone14}
                  alt="Iphone 14"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
