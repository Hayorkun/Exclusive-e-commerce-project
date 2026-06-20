import { NavLink } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { Trash } from "lucide-react";

const Wishlist = () => {
  const { wishList, wishListCount, removeWishItem } = useShop();

  if (wishList.length === 0) {
    return (
      <div className="my-12 my-max-width w-11/12 mx-auto flex justify-center items-center min-h-100">
        <h3 className="font-heading font-semibold text-3xl">
          Wishlist empty Look through products
        </h3>
      </div>
    );
  }

  return (
    <section className="my-10 px-5">
      <div className="my-max-width mx-auto">
        <div className="flex justify-between items-center font-body mb-5">
          <p className="text-sm">
            Wishlist (<span>{wishListCount}</span>)
          </p>
          <button className="text-sm border border-gray-400 py-1 px-3">
            Move all to bag
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {wishList.map((w) => (
            <div key={w.id} className="rounded-sm p-1 bg-gray-50 relative">
              <NavLink
                to={`/product/${w.id}`}
                className="h-[60%] flex justify-center bg-white"
              >
                <img
                  src={w.image}
                  alt={w.title}
                  className="w-25 object-contain"
                />
              </NavLink>
              <button className="cursor-pointer" onClick={() => removeWishItem(w.id)}><Trash className="absolute top-2 right-2 size-5"/></button>
              <div className="p-1">
                <h3 className="font-heading text-sm ">{w.title}</h3>
                <p className="font-body text-sm">${w.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
