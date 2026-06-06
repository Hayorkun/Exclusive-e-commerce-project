import { Send } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import Images from "../assets/Image";
import { SiFacebook, SiInstagram } from "react-icons/si";

const Footer = () => {
  return (
    <section className="md:px-5 py-10 bg-black text-white">
      <div className="my-max-width w-11/12 mx-auto flex flex-col md:flex-row gap-5 md:gap-10">
        <div className="">
          <h1 className="font-heading font-bold text-3xl leading-tight mb-5">
            Exclusive
          </h1>
          <p className="font-body text-sm mb-3">Subscribe</p>
          <div>
            <p className="font-body text-xs mb-1.5">
              Get 10% off your first order
            </p>
            <div className="flex border border-gray-300 rounded-sm text-sm items-center w-3/5 gap-2 p-1">
              <input type="text" className="outline-0 w-full" />
              <Send className="size-5 text-gray-300" />
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="">
            <h2 className="font-body font-normal text-base">Support</h2>
            <div className="mt-2">
              <p className="font-body text-sm mb-2 text-wrap">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </p>
              <p className="font-body text-sm mb-2">exclusive@gmail.com</p>
              <p className="font-body text-sm">+88015-45652-2363</p>
            </div>
          </div>
          <div >
            <h2 className="font-body font-normal text-base">Account</h2>
            <div className="flex flex-col mt-2">
              <NavLink className="font-body text-sm ">My Account</NavLink>
              <NavLink className="font-body text-sm ">Login / Register</NavLink>
              <NavLink className="font-body text-sm ">Cart</NavLink>
              <NavLink className="font-body text-sm ">Wishlist</NavLink>
              <NavLink className="font-body text-sm ">Shop</NavLink>
            </div>
          </div>
          <div>
            <h2 className="font-body font-normal text-base">Quick Link</h2>
            <div className="flex flex-col mt-2">
              <Link>Privacy Policy</Link>
              <Link>Terms Of Use</Link>
              <Link>FAQ</Link>
              <Link>Contact</Link>
            </div>
          </div>
          <div>
            <h2 className="font-body font-normal text-base">Download App</h2>
            <div className=" flex flex-col mt-2">
              <p className="font-body text-[9px] text-gray-300 mb-1.5">
                Save $3 with App New User Only
              </p>
              <div className="flex">
                <img
                  className="w-15"
                  src={Images.QrCode}
                  alt="Download Qr Code"
                />
                <div className="flex flex-col gap-2">
                  <img className="w-20" src={Images.GoogleStore} alt="" />
                  <img className="w-20" src={Images.AppStore} alt="" />
                </div>
              </div>
              <div className="mt-3 flex justify-between size-20">
                <SiFacebook />
                <SiInstagram />
                <SiFacebook />
                <SiInstagram />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
