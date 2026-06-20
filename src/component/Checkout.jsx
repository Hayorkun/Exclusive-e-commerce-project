import { useState } from "react";
import { useShop } from "../context/ShopContext";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Checkout = () => {
  const { user } = useAuth()
   const { cart, cartTotal } = useShop();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    town: "",
    phoneNumber: "",
    email: "",
    coupon: "",
  });

  const handleChange = (f) => {
    setFormData({
      ...formData,
      [f.target.name]: f.target.value,
    });
  };

  const handleSubmit = (d) => {
    d.preventDefault();

    let newError = {};

    if (!formData.fullName.trim()) {
      newError.fullName = "Full name required";
    }
    if (!formData.companyName.trim()) {
      newError.companyName = "Company name required";
    }

    if (!formData.streetAddress.trim()) {
      newError.streetAddress = "Street address required";
    }

    if (!formData.town.trim()) {
      newError.town = "Town required";
    }
    if (!formData.phoneNumber.trim()) {
      newError.phoneNumnber = "Phone number required";
    }
    if (!formData.email.trim()) {
      newError.email = "Email required";
    }
    if (!formData.coupon.trim()) {
      newError.coupon = "Coupon code required";
    }
    if (!paymentMethod) {
      newError.paymentMethod = "Please select payment method";
    }

    setErrors(newError);
  };

  if (cart.length === 0) {
    return (
      <div className="my-12 my-max-width w-11/12 mx-auto flex justify-center items-center min-h-120">
        <h3 className="font-heading font-semibold text-3xl">
          Add items to cart
        </h3>
      </div>
    );
  }

  return (
    <section className="my-12">
      <div className="w-11/12 my-max-width mx-auto min-h-130">
        <h1 className="font-heading text-2xl mb-7">Billing Details</h1>
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-10 md:justify-between"
          >
            <div className="flex flex-col gap-5 md:w-[40%]">
              <label
                htmlFor="fullName"
                className="flex flex-col gap-1.5 font-body text-gray-400 text-sm"
              >
                {" "}
                Full Name
                <input
                  className="bg-gray-300/60 p-1.5 text-black rounded-sm"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  id="fullName"
                  name="fullName"
                />
                {errors.fullName && (
                  <p className="font-body text-xs text-red-500">
                    {errors.fullName}
                  </p>
                )}
              </label>
              <label
                className="flex flex-col gap-1.5 font-body text-gray-400 text-sm"
                htmlFor="companyName"
              >
                Company Name
                <input
                  className="bg-gray-300/60 p-1.5 text-black rounded-sm"
                  type="text"
                  value={formData.companyName}
                  onChange={handleChange}
                  id="companyName"
                  name="companyName"
                />
                {errors.companyName && (
                  <p className="font-body text-xs text-red-500">
                    {errors.companyName}
                  </p>
                )}
              </label>
              <label
                className="flex flex-col gap-1.5 font-body text-gray-400 text-sm"
                htmlFor="streetAddress"
              >
                Street Address
                <input
                  className="bg-gray-300/60 p-1.5 text-black rounded-sm"
                  type="text"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  id="streetAddress"
                  name="streetAddress"
                />
                {errors.streetAddress && (
                  <p className="font-body text-xs text-red-500">
                    {errors.streetAddress}
                  </p>
                )}
              </label>
              <label
                className="flex flex-col gap-1.5 font-body text-gray-400 text-sm"
                htmlFor="Apartment"
              >
                Apartment,floor (optional)
                <input
                  className="bg-gray-300/60 p-1.5 text-black rounded-sm"
                  type="text"
                  value={formData.apartment}
                  onChange={handleChange}
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
                  value={formData.town}
                  onChange={handleChange}
                  name="town"
                />
                {errors.town && (
                  <p className="font-body text-xs text-red-500">
                    {errors.town}
                  </p>
                )}
              </label>
              <label
                className="flex flex-col gap-1.5 font-body text-gray-400 text-sm"
                htmlFor="phoneNumber"
              >
                Phone Number
                <input
                  className="bg-gray-300/60 p-1.5 text-black rounded-sm"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  id="phoneNumber"
                  name="phoneNumber"
                />
                {errors.phoneNumber && (
                  <p className="font-body text-xs text-red-500">
                    {errors.phoneNumber}
                  </p>
                )}
              </label>
              <label
                className="flex flex-col gap-1.5 font-body text-gray-400 text-sm"
                htmlFor="email"
              >
                Email Address
                <input
                  className="bg-gray-300/60 p-1.5 text-black rounded-sm"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  id="email"
                  name="email"
                />
                {errors.email && (
                  <p className="font-body text-xs text-red-500">
                    {errors.email}
                  </p>
                )}
              </label>
              <label
                htmlFor="checkbox"
                className="flex gap-2 font-body text-sm"
              >
                <input type="checkbox" />
                Save this information for faster check-out next time
              </label>
            </div>
            <div className="md:w-[50%] h-fit flex flex-col gap-2 shadow-md">
              {cart.map((c) => (
                <div
                  key={c.id}
                  className="flex items-center justify-between border-b p-2"
                >
                  <NavLink to={`/product/${c.id}`}>
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
                  {errors.paymentMethod && <p className="font-body text-xs text-red-500">{errors.paymentMethod}</p>}
                </div>
                <div className="flex gap-5 mb-3">
                  <div className="w-[60%]">
                    <label htmlFor="coupon">
                      <input
                        type="text"
                        name="coupon"
                        value={formData.coupon}
                        onChange={handleChange}
                        placeholder="Coupon code"
                        className="text-sm w-full px-2 h-full bg-gray-300/60 rounded-sm"
                      />
                    </label>
                    {errors.coupon && (
                      <p className="font-body text-xs text-red-500">
                        {errors.coupon}
                      </p>
                    )}
                  </div>
                  <button
                    type="button"
                    className="bg-red-500 text-white w-[35%] text-xs rounded-sm active:scale-99"
                  >
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
          </form>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
