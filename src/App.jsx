import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Homepage from "./pages/Homepage";
import Contactpage from "./pages/Contactpage";
import Aboutpage from "./pages/Aboutpage";
import Footer from "./component/Footer";
import ProductDetailPage from "./pages/ProductDetailPage";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Signup from "./component/Signup";
import LogIn from "./component/Login";
import MyProfile from "./component/MyProfile";
import Error from "./component/Error";
import AddressBook from "./component/AddressBook";
import ProfileUpdate from "./component/ProfileUpdate";
import Cart from "./component/Cart";
import Checkout from "./component/Checkout";
import ProtectedRoute from "./component/ProtectedRoute";
import Wishlist from "./component/Wishlist";

function App() {
  return (
    <>
      <SpeedInsights />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route element={<ProtectedRoute />}>
            <Route path="/my-profile" element={<MyProfile />}>
              <Route path="profile" element={<ProfileUpdate />} />
              <Route path="address-book" element={<AddressBook />} />
            </Route>
            <Route path="/checkout" element={<Checkout />} />
          </Route>
          <Route path="/error" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
