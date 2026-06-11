import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Homepage from "./pages/Homepage";
import Contactpage from "./pages/Contactpage";
import Aboutpage from "./pages/Aboutpage";
import Footer from "./component/Footer";
import ProductDetailPage from "./pages/ProductDetailPage";
import Signup from "./component/Signup";
import LogIn from "./component/Login";
import MyProfile from "./component/MyProfile";
import Error from "./component/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/MyProfile" element={<MyProfile/>}/>
          <Route path="/error" element={<Error/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
