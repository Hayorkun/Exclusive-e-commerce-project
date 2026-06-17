import { useShop } from "../context/ShopContext";
import { NavLink } from "react-router-dom";

const Checkout = () => {
  const { cart, cartTotal } = useShop();
  const [paymentMethod, setPaymentMethod] = "";

  return (
    <section className="my-12">
      <div className="w-11/12 my-max-width mx-auto min-h-130">
        <h1 className="font-heading text-2xl mb-7">Billing Details</h1>
        <div className="flex flex-col md:flex-row gap-10 md:justify-between">
          <div className="w-[40%]">
            <form className="flex flex-col gap-5">
              <label
                htmlFor="fullName"
                className="flex flex-col gap-1.5 font-body text-gray-400 text-sm"
              >
                {" "}
                Full Name
                <input
                  className="bg-gray-300/60 p-1.5 text-black rounded-sm"
                  type="text"
                  id="fullName"
                  name="fullName"
                />
              </label>
              <label
                className="flex flex-col gap-1.5 font-body text-gray-400 text-sm"
                htmlFor="companyName"
              >
                Company Name
                <input
                  className="bg-gray-300/60 p-1.5 text-black rounded-sm"
                  type="text"
                  id="compayName"
                  name="companyName"
                />
              </label>
              <label
                className="flex flex-col gap-1.5 font-body text-gray-400 text-sm"
                htmlFor="streetAddress"
              >
                Street Address
                <input
                  className="bg-gray-300/60 p-1.5 text-black rounded-sm"
                  type="text"
                  id="streetAddress"
                  name="streetAddress"
                />
              </label>
              <label
                className="flex flex-col gap-1.5 font-body text-gray-400 text-sm"
                htmlFor="Apartment"
              >
                Apartment,floor (optional)
                <input
                  className="bg-gray-300/60 p-1.5 text-black rounded-sm"
                  type="text"
                  id="apartment"
                  name="apartment"
                />
              </label>
              <label
                className="flex flex-col gap-1.5 font-body text-gray-400 text-sm"
                htmlFor="town"
              >
                Town
                <input
                  className="bg-gray-300/60 p-1.5 text-black rounded-sm"
                  type="text"
                  id="town"
                  name="town"
                />
              </label>
              <label
                className="flex flex-col gap-1.5 font-body text-gray-400 text-sm"
                htmlFor="phoneNumber"
              >
                Phone Number
                <input
                  className="bg-gray-300/60 p-1.5 text-black rounded-sm"
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                />
              </label>
              <label
                className="flex flex-col gap-1.5 font-body text-gray-400 text-sm"
                htmlFor="email"
              >
                Email Address
                <input
                  className="bg-gray-300/60 p-1.5 text-black rounded-sm"
                  type="email"
                  id="email"
                  name="email"
                />
              </label>
              <label
                htmlFor="checkbox"
                className="flex gap-2 font-body text-sm"
              >
                <input type="checkbox" />
                Save this information for faster check-out next time
              </label>
            </form>
          </div>
          <div className="w-[50%] flex flex-col gap-2 shadow-md">
            {cart.map((c) => (
              <div
                key={c.id}
                className="flex items-center justify-between border-b p-2"
              >
                <NavLink>
                  <img
                    className="w-16 h-16 object-contain"
                    src={c.image}
                    alt={c.title}
                  />{" "}
                  <p className="font-body text-xs">{c.title}</p>
                </NavLink>

                <p>${c.price}</p>
              </div>
            ))}
            <div className="p-2 font-body flex flex-col gap-2">
              <p className="flex justify-between ">
                Total: <span>${cartTotal.toFixed(2)}</span>
              </p>
              <p className="flex justify-between">
                Shipping: <span>Free</span>
              </p>

              <div>
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  Credit Card
                </label>

                <label className="flex items-center gap-3 jus">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={paymentMethod === "cash"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  Cash on Delivery
                </label>
              </div>
              <div className="flex gap-5">
                <input
                  type="text"
                  placeholder="coupon code"
                  className="text-sm w-[60%] bg-gray-300/60 p-1 rounded-sm"
                />{" "}
                <button className="bg-red-500 text-white w-[35%] p-2.5 text-xs rounded-sm active:scale-99">
                  Apply coupon
                </button>
              </div>
              <button
                type="submit"
                className="bg-red-500 text-white w-[30%] py-2 rounded-sm active:scale-99 "
              >
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
