import { NavLink, useParams } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import displayStar from "../utils/DisplayStar";
import { CiDeliveryTruck, CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { RotateCcw, Heart } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const {
    products,
    cart,
    addToCart,
    decreaseQuantity,
    toggleWishList,
    wishList,
  } = useShop();
  const product = products.find((p) => p.id === Number(id));
  if (!product) return <p className="flex justify-center">Product not found</p>;

  const cartItem = cart.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;
  const isWishlisted = wishList?.some((item) => item.id === product.id);
  const wishListed = isWishlisted ? (
    <Heart className="fill-red-500 stroke-red-500" />
  ) : (
    <Heart />
  );

  return (
    <section className="md:px-5 my-7">
      <div
        className="my-max-width w-11/12 mx-auto
      "
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1/6 flex md:flex-col gap-5 order-2 md:order-1 shrink-0">
            {product.images.map((img) => (
              <div key={img} className="bg-gray-100 p-3">
                <img
                  src={img}
                  alt={product.title}
                  className="w-full h-24 object-contain cursor-pointer"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="flex-3/6 order-1 md:order-2 flex items-center justify-center bg-gray-100">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="object-contain cursor-pointer"
              loading="lazy"
            />
          </div>
          <div className="flex-2/6 order-3 flex flex-col p-2">
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
              <p className="font-body text-xs text-green-400">
                {product.availabilityStatus}
              </p>
            </div>
            <p className="font-body font-normal mb-2 text-xl">{`$${product.price}`}</p>
            <p className="font-body font-light leading-3 text-xs mb-2">
              {product.description}
            </p>

            <p className="font-body text-sm mb-2">Brand: {product.brand}</p>

            <div className="flex gap-5 items-center mb-3">
              <div className="flex flex-1/3 items-center gap-1">
                <button
                  className="cursor-pointer"
                  onClick={() => addToCart(product)}
                >
                  <CiCirclePlus className="size-6.5" />
                </button>
                <span className="rounded-sm py-1 px-3  border bg-black text-white text-sm">
                  {quantity}
                </span>
                <button
                  className="cursor-pointer"
                  onClick={() => decreaseQuantity(product.id)}
                >
                  <CiCircleMinus className="size-6.5" />
                </button>
              </div>
              <div className="flex-2/3 flex items-center justify-end gap-4">
                <NavLink
                onClick={() => addToCart(product)}
                  to="/checkout"
                  className="text-white text-xs bg-black p-2 rounded-sm cursor-pointer w-[50%] text-center active:scale-99"
                >
                  Buy Now
                </NavLink>
                <button
                  onClick={() => toggleWishList(product)}
                  className="rounded-md cursor-pointer"
                >
                  {wishListed}
                </button>
              </div>
            </div>

            <div className="border rounded-xs flex flex-col">
              <div className="flex gap-2 items-center p-2">
                <CiDeliveryTruck className="size-7" />
                <div>
                  <p className="font-body text-sm">Free Delivery</p>
                  <p className="font-body text-xs underlin cursor-pointer">
                    Enter your posstal code for delivery
                  </p>
                </div>
                <hr />
              </div>
              <div className="flex gap-2 items-center p-2 border-t">
                <RotateCcw className="size-7" />
                <div>
                  <p className="font-body text-sm">Return Delivery</p>
                  <p className="font-body text-xs">
                    Free 30 days delivery returns.{" "}
                    <span className="underline cursor-pointer">Details</span>
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
