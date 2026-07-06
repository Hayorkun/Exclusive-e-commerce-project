import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./component/Navbar";
import Homepage from "./pages/Homepage";
import Footer from "./component/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";

// Lazy load route components
const Contactpage = lazy(() => import("./pages/Contactpage"));
const Aboutpage = lazy(() => import("./pages/Aboutpage"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));
const Signup = lazy(() => import("./component/Signup"));
const LogIn = lazy(() => import("./component/Login"));
const MyProfile = lazy(() => import("./component/MyProfile"));
const Error = lazy(() => import("./component/Error"));
const AddressBook = lazy(() => import("./component/AddressBook"));
const ProfileUpdate = lazy(() => import("./component/ProfileUpdate"));
const Cart = lazy(() => import("./component/Cart"));
const Checkout = lazy(() => import("./component/Checkout"));
const ProtectedRoute = lazy(() => import("./component/ProtectedRoute"));
const Wishlist = lazy(() => import("./component/Wishlist"));
const OrderSuccess = lazy(() => import("./component/OrderSuccess"));

// Loading fallback
const LoadingFallback = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="w-12 h-12 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <>
      <SpeedInsights />
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/contact" element={<Contactpage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/cart" element={<Cart />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/my-profile" element={<MyProfile />}>
                <Route path="profile" element={<ProfileUpdate />} />
                <Route path="address-book" element={<AddressBook />} />
              </Route>
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Route>
            <Route path="/error" element={<Error />} />
            <Route path="/order-success" element={<OrderSuccess/>}/>
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
