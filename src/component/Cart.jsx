import { NavLink } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Cart = () => {
  const { cart, cartCount, cartTotal, increaseQuantity, decreaseQuantity } =
    useShop();
  const [couponData, setCouponData] = useState({
    coupon: "",
  });
  const [errors, setErrors] = useState({});

  if (cart.length === 0)
    return (
      <div className="my-12 my-max-width w-11/12 mx-auto flex justify-center items-center min-h-100">
        <h3 className="font-heading font-semibold text-3xl">
          Your cart is empty
        </h3>
      </div>
    );

  const handleChanges = (c) => {
    setCouponData({
      ...couponData,
      [c.target.name]: c.target.value,
    });
  };

  const handleSubmit = (c) => {
    c.preventDefault();

    let newError = {};

    if (!couponData.coupon.trim()) {
      newError.coupon = "Enter coupon code";
    }

    setErrors(newError);
    if (Object.keys(newError).length > 0) return;
  };

  return (
    <section className="my-12">
      <div className="my-max-width w-11/12 mx-auto min-h-150">
        <div className="flex flex-col">
          <div className="flex justify-between items-center shadow-md p-2 font-body text-sm mb-5">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          <div className="flex flex-col gap-3 mb-5">
            {cart.map((e) => (
              <div
                key={e.id}
                className="flex gap-5 md:gap-20 justify-between items-center  shadow-md p-2"
              >
                <NavLink to={`/product/${e.id}`} className="flex-1/4">
                  <img
                    className="w-10 h-10 object-contain"
                    src={e.image}
                    alt={e.title}
                  />
                  <p className="font-body text-xs text-wrap w-25">{e.title}</p>
                </NavLink>
                <div className="flex-3/4 flex justify-between">
                  <p className="font-body">${e.price}</p>
                  <div className="flex items-center gap-1">
                    <span className="font-body">{e.quantity}</span>
                    <div>
                      <ChevronUp
                        onClick={() => increaseQuantity(e.id)}
                        className="size-4"
                      />
                      <ChevronDown
                        onClick={() => decreaseQuantity(e.id)}
                        className="size-4"
                      />
                    </div>
                  </div>
                  <p className="font-body">
                    ${(e.price * e.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mb-10">
            <NavLink className="border py-1.5 px-5 text-xs font-body rounded-sm">
              Return To Shop
            </NavLink>
            <NavLink className="border py-1.5 px-5 text-xs font-body rounded-sm">
              Update Cart
            </NavLink>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <form onSubmit={handleSubmit} className="mb-5 flex md:w-5/12">
              <label className="flex flex-col w-[65%]" htmlFor="coupon">
                <input
                  type="text"
                  name="coupon"
                  id="coupon"
                  value={couponData.coupon}
                  onChange={handleChanges}
                  placeholder="Coupon Code"
                  className="font-body text-xs p-2 h-10 border rounded-xs"
                />
                {errors.coupon && (
                  <p className="text-red-500 text-xs">{errors.coupon}</p>
                )}
              </label>
              <button
                type="submit"
                className="ml-5 font-body h-10 text-xs w-[35%] bg-red-500 text-white rounded-xs active:scale-99 ease-in-out transition"
              >
                Apply Coupon
              </button>
            </form>
            <div className="md:w-4/12 p-3 border flex flex-col items-cente">
              <div className="mb-5">
                <h4 className="font-heading text-sm font-semibold">
                  Cart Total
                </h4>
                <p className="flex justify-between font-body text-sm py-2 border-b">
                  Total items <span>{cartCount}</span>
                </p>
                <p className="flex justify-between font-body text-sm py-2 border-b">
                  {" "}
                  Shipping <span>Free</span>
                </p>
                <p className="flex justify-between font-body text-sm py-2">
                  Total <span>${cartTotal}</span>
                </p>
              </div>

              <NavLink
                to="/checkout"
                className="rounded-xs bg-red-500 text-white text-sm py-1.5 px-4 mx-auto cursor-pointer"
              >
                Proceed to checkout
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
