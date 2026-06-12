
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Search, Heart, ShoppingCart, Menu, X, User} from "lucide-react";
import { useShop } from "../context/ShopContext";

function Navbar() {
  const [searchBtn, setSearchBtn] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const { category } = useShop();

  const NavBarLinks = ["Home", "Contact", "About", "Sign up"];

  const NavlinkStyle = ({ isActive }) => ({
    textDecoration: isActive ? "underline" : "none"
  });

  return (
    <>
      <nav className="border-b items-center py-4 sticky top-0 z-50 bg-white">
        <div className="flex my-max-width w-11/12 mx-auto items-center sticky top-0">
          <button onClick={() => setSideBar(!sideBar)}>
            {sideBar ? (
              <X className="md:hidden mr-3" />
            ) : (
              <Menu className="md:hidden mr-3" />
            )}
          </button>
          <div className="flex-1">
            <NavLink to="/">
              <h1 className="font-heading font-extrabold text-2xl">
                Exclusive
              </h1>
            </NavLink>
          </div>

          <div className="hidden flex-6 md:flex gap-7 justify-end">
            <div className="flex items-center">
              <ul className="flex gap-5">
                {NavBarLinks.map((links) => (
                  <li key={links}>
                    <button>
                      <NavLink
                        className="px-2 py-1 rounded-full"
                        style={NavlinkStyle}
                        to={
                          links === "Home"
                            ? "/"
                            : `/${links.toLowerCase().replace(" ", "-")}`
                        }
                      >
                        {links}
                      </NavLink>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-5 items-center">
              <div className="flex items-center p-1.5 gap-1 bg-white rounded-2xl">
                <input
                  type="text"
                  className="outline-0"
                  placeholder="Search on Exclusive"
                />
                <button>
                  <Search />
                </button>
              </div>

              <button>
                <Heart />
              </button>

              <button className="flex">
                <ShoppingCart className="relative" />
                <span className="-top-3 -right-2 absolute bg-black w-6 h-6 flex justify-center items-center text-xs rounded-full text-white">
                  17
                </span>
              </button>

              <NavLink to="./my-profile" ><User/></NavLink>
            </div>
          </div>

          <div className="flex-4 md:hidden justify-end flex gap-5 items-center">
            <button
              onClick={() => {
                searchBtn ? setSearchBtn(false) : setSearchBtn(true);
              }}
            >
              {searchBtn ? <X /> : <Search />}
            </button>

            <button>
              <Heart />
            </button>

            <button>
              <ShoppingCart />
            </button>

             <button><NavLink to="/MyProfile"><User/></NavLink></button>
          </div>
        </div>
      </nav>

      {/* ---MOBILE SEARCH */}
      {searchBtn ? (
        <div className="flex items-center justify-center bg-gray-200 p-4 border gap-2 fixed w-full z-10">
          <input
            type="text"
            className="border w-6/12 p-1.5 rounded-3xl"
            placeholder="Search on Exclusive"
          />
          <button>
            <Search />
          </button>
        </div>
      ) : (
        <></>
      )}
      {/* -----MOBILE SIDEBAR------*/}
      {sideBar && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 top-16 z-40">
        <div
          className={`h-full w-7/12 inset-y-0 p-5 left-0 fixed bg-white shadow-lg transform transition-transform duration-300 ease-in-out overflow-scroll
        ${sideBar ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div>
            <ul className="flex flex-col gap-5">
              {NavBarLinks.map((links) => (
                <li key={links}>
                  <button>
                    <NavLink
                      className="px-2 py-1 rounded-full"
                      style={NavlinkStyle}
                      to={
                        links === "Home"
                          ? "/"
                          : `/${links.toLowerCase().replace(" ", "-")}`
                      }
                    >
                      {links}
                    </NavLink>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5 h-full flex flex-col border-t">
            <NavLink className="flex justify-between text-sm mt-2 bg-gray-100 items-center">
              <p className="font-body ">Our category</p>
              <>See all</>
            </NavLink>
            {category.map((c) => (
              <button
                className="flex mt-3 gap-3 font-body text-md font-normal p-1.5 rounded-lg hover:bg-black/20"
                key={c.category}
              >
                <span>{c.category}</span>
                {/* <span>{c.title}</span> */}
              </button>
            ))}
          </div>
        </div>
      </div>
      )}
    </>
  );
}

export default Navbar;
