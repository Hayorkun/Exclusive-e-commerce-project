import { useShop } from "../context/ShopContext";
import { NavLink } from "react-router-dom";
import { Heart } from "lucide-react";
import displayStar from "../utils/DisplayStar";

const OurProduct = () => {
  const { products, toggleWishList, wishList } = useShop();

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
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 px-3">
            {products.slice(0, 16).map((f) => {
              const isWishlisted = wishList?.some(
                (item) => item.id === f.id,
              );
              return (
                <div key={f.id} className="h-40 relative">
                  <NavLink
                    to={`/product/${f.id}`}
                    className="flex justify-center bg-gray-100 h-25"
                  >
                    <img src={f.images[0]} alt={f.title} className="w-25" />
                  </NavLink>
                  <div className="absolute right-1 top-1 w-fit">
                    <button
                      onClick={() => toggleWishList(f)}
                      className="cursor-pointer"
                    >
                      {isWishlisted ? (
                        <Heart className="fill-red-500 stroke-red-500" />
                      ) : (
                        <Heart />
                      )}
                    </button>
                  </div>
                  <p className="font-body text-sm leading-4">{f.title}</p>
                  <p className="font-body text-xs">{`$${f.price}`}</p>
                  <div className="flex items-center gap-3">
                    <span className="font-body text-xs">
                      Stock: ({`${f.stock}`})
                    </span>
                    <div className="font-body">{displayStar(f.rating)}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center mt-5">
            <NavLink to="/" className="bg-black text-white px-4 py-2">
              View all products
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProduct;
