import { useShop } from "../context/ShopContext";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useRef } from "react";

const Categories = () => {
  const { category } = useShop();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="my-12 md:px-5">
      <div className="my-max-width w-11/12 mx-auto">
        <div className="flex flex-col mb-5 gap-3">
          <div className="flex items-center gap-2">
            <span className="h-6 w-3 bg-red-500 rounded-2xl"></span>
            <p className="font-body text-sm">Categories</p>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-heading font-semibold">
              Browse by Category
            </h3>
            <div className="flex gap-2">
              <button onClick={() => scroll("left")} className="cursor-pointer items-center flex w-7 h-7 p-1 rounded-full bg-gray-300">
                <ArrowLeft />
              </button>
              <button onClick={() => scroll("right")} className="cursor-pointer items-center flex  w-7 h-7 p-1 rounded-full bg-gray-300">
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div ref={scrollRef} className="flex gap-5 justify-start items-center overflow-x-scroll scrollbar-none">
          {category.map((c) => (
            <div className="text-center" key={c.category}>
              <div className="h-28 w-28 rounded-full  bg-gray-100 ">
                <img
                  src={c.image}
                  alt={c.category}
                  className="w-full h-full rounded-full"
                  loading="lazy"
                />
              </div>
              <p className="text-xs">{c.category}</p>
            </div>
          ))})
        </div>
      </div>
    </div>
  );
};

export default Categories;
