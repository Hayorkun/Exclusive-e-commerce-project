import { Link, useNavigate, useLocation } from "react-router-dom";
import Images from "../assets/Image";
// import { db } from "../services/Firebase";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { FaSpinner } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const from = location.state?.from?.pathname || "/";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newError = {};

    if (!formData.email.trim()) {
      newError.email = "Email required";
    }

    if (!formData.password.trim()) {
      newError.password = "Password required";
    }

    setErrors(newError);

    if (Object.keys(newError).length > 0) return;

    try {
      setLoading(true);

      await logIn(formData.email, formData.password);

      navigate(from, { replace: true });
    } catch (error) {
      let backendErrors = {};
      switch (error.code) {
        case "auth/invalid-credential":
        case "auth/wrong-password":
          backendErrors.currentPassword =
            "The current password you entered is incorrect.";
          break;
        case "auth/email-already-in-use":
          backendErrors.email =
            "This email address is already registered to another account.";
          break;
        case "auth/invalid-email":
          backendErrors.email =
            "Please enter a valid email address structure (e.g., name@example.com).";
          break;
        case "auth/weak-password":
          backendErrors.newPassword =
            "The new password must be at least 6 characters long.";
          break;
        case "auth/requires-recent-login":
          backendErrors.general =
            "For security reasons, please log out and log back in before making these changes.";
          break;
        default:
          // Fallback for unexpected network or database issues
          backendErrors.general =
            error.message || "An unexpected error occurred. Please try again.";
      }
    setErrors(backendErrors)
    } finally {
      setLoading(false);
    }
  };

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
          {errors.general && (
            <p className="text-red-500 text-xs font-body mb-5">
              {errors.general}
            </p>
          )}
          <div className="w-10/12">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="text"
                placeholder="Email or Phone Number"
                className="border-b"
              />
              {errors.email && (
                <p className="text-red-500 font-body text-sm">{errors.email}</p>
              )}
              <input
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                placeholder="Password"
                className="border-b"
              />
              {errors.password && (
                <p className="text-red-500 font-body text-sm">
                  {errors.password}
                </p>
              )}
              <div className="flex justify-between items-center text-red-500">
                <button
                  type="submit"
                  disabled={loading}
                  className="border p-2.5 bg-red-500 text-white rounded-sm text-xs w-30 active:scale-98 ease-in-out transition"
                >
                  {loading ? <FaSpinner /> : "Log in"}
                </button>
                <p className="font-body text-sm cursor-not-allowed text-gray-400">
                  Forgot password?
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
