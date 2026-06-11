import { Link } from "react-router-dom";
import Images from "../assets/Image";
import { db } from "../services/Firebase";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.value]: e.target.value
    })
  }


  return (
    <section className="my-12">
      <div className="my-max-width w-11/12 mx-auto min-h-full gap-5 flex flex-col md:flex-row">
        <div className="flex-2/3 order-2">
          <img
            src={Images.SignupCart}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-1/3  md:order-2 flex flex-col justify-center items-center">
          <div className="mb-10 text-center">
            <h1 className="font-heading font-semibold text-2xl">
              Log in to Exclusive
            </h1>
            <p className="font-body text-sm">Enter your details below</p>
          </div>

          <div className="w-10/12 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="border-b"
            />
            <input
              type="password"
              placeholder="Password"
              className="border-b"
            />
            <div className="flex justify-between items-center text-red-500">
              <button className="border p-2.5 bg-red-500 text-white rounded-sm text-xs w-30">
                Create Account
              </button>
              <Link to="/profile" className="font-body text-sm">
                Forgot password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
