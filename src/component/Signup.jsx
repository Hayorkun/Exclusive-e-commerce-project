import Images from "../assets/Image";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { db } from "../services/Firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";

const Signup = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newError = {};
    if (!formData.fullName.trim()) {
      newError.fullName = "Fullname required";
    }

    if (!formData.email.trim()) {
      newError.email = "Email required";
    }

    if (!formData.password.trim()) {
      newError.password = "Password required";
    }

    setErrors(newError);

    if (Object.keys(newError).length > 0) return;
    createAccount();
  };

  const createAccount = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), formData);

      console.log("Document saved succesfully", docRef.id);
    } catch (error) {
      console.log("Error adding document to firebase", error);
    }
  };

  return (
    <section className="my-12">
      <div className="my-max-width mx-auto w-11/12 min-h-150 flex flex-col gap-3 md:flex-row">
        <div className="flex-2/3 order-1">
          <img
            src={Images.SignupCart}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-1/3 md:order-2 flex flex-col justify-center items-center">
          <div className="mb-10 text-center">
            <h1 className="font-heading font-semibold text-2xl">
              Create an account
            </h1>
            <p className="font-body text-sm">Enter your details below</p>
          </div>

          <div className="w-10/12">
            <form onSubmit={handleSubmit} className=" flex flex-col gap-5">
              <input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                type="text"
                placeholder="Full Name"
                className="border-b m-0"
              />
              {errors.fullName && (
                <p className="text-red-500 font-body text-sm">
                  {errors.fullName}
                </p>
              )}
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="border-b"
              />
              {errors.email && (
                <p className="text-red-500 font-body text-sm">{errors.email}</p>
              )}

              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="border-b"
              />
              {errors.password && (
                <p className="text-red-500 font-body text-sm">
                  {errors.password}
                </p>
              )}
              <button
                type="submit"
                className="border p-2.5 bg-red-500 text-white rounded-sm text-sm hover:opacity-90 active:scale-99 transition-all ease-in-out"
              >
                Create Account
              </button>
              <button
              type="button"
              className="border p-3 rounded-sm text-xs flex items-center justify-center gap-2 mb-4 active:scale-99 transition ease-in-out">
                <FaGoogle />
                Sign Up with Google
              </button>
            </form>
          </div>
          <p className="font-body text-xs">
            Already have an account?
            <Link className="text-blue-700 ml-1" to="/login">
              {" "}
              Log in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
