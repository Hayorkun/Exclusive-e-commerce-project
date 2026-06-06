import { useShop } from "../context/ShopContext";
import { NavLink } from "react-router-dom";
import displayStar from "../utils/DisplayStar";


const RelatedItems = ({ category, currentId }) => {
  const { products } = useShop();

  const related = products
    .filter((p) => p.category === category && p.id !== currentId)
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="md:px-5 my-12">
      <div className="my-max-width w-11/12 mx-auto">
        <div className="flex flex-col">
          <div className="flex gap-2 items-center mb-5">
            <span className="w-3 h-6 bg-red-400 rounded-2xl"></span>
            <p className="font-body text-sm">Relatable items</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {related.slice(0, 4).map((r) => {
              const discountedPrice =
                r.price - (r.price * r.discountPercentage) / 100;

                const discountPercentage = ((r.price - discountedPrice) / r.price ) * 100;

              return (
                <NavLink
                  to={`/product/${r.id}`}
                  key={r.id}
                  className="flex flex-col"
                >
                  <div className="flex justify-center bg-gray-100 relative p-1.5">
                    <img
                      src={r.images[0]}
                      alt={r.title}
                      className=" object-contain h-30"
                    />
                    <div className="absolute bg-red-500 left-1 top-1 p-0.5">
                      <p className="font-body text-white text-xs">{discountPercentage.toFixed(1)}% OFF</p>
                    </div>
                  </div>
                  <p className="font-body text-sm">{r.title}</p>
                  <div className="flex gap-3 items-center">
                    <p className="font-body text-sm text-red-400">${discountedPrice.toFixed(2)}</p>
                    <p className="font-body text-sm line-through">${r.price}</p>
                  </div>
                  {displayStar(r.rating)}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedItems;
