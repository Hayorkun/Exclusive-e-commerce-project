import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Outlet } from "react-router-dom";

const MyProfile = () => {
  const { user, logOut } = useAuth();

  const navStyle = ({ isActive }) => ({
    color: isActive ? "red" : "black",
  });
 
  return (
    <section className="my-12">
      <div className="my-max-width w-11/12 mx-auto h-full">
        <div className="flex gap-7 flex-col">
          <div className="h-full flex justify-between items-center">
            <p className="font-body text-xs">My Account</p>
            <p className="font-body text-xs text-red-500">
              Welcome! <span className="text-black">{user?.displayName}</span>
            </p>
          </div>
          <div className="flex min-h-120 flex-col md:flex-row">
            <div className="flex-1/4 md:border-r border-gray-300 flex flex-col justify-between">
              <div className="mb-7">
                <div className="mb-5">
                  <p className="font-body text-sm mb-3 border-b">
                    Manage my account
                  </p>
                  <div className=" flex flex-col md:ml-10 gap-2">
                    <NavLink
                      to="/my-profile/profile"
                      style={navStyle}
                      className="font-body text-xs"
                    >
                      My profile
                    </NavLink>
                    <NavLink
                      to="/my-profile/address-book"
                      style={navStyle}
                      className="font-body text-xs"
                    >
                      Address book
                    </NavLink>
                    <NavLink
                      to="/my-profile/payment-options"
                      style={navStyle}
                      className="font-body text-xs"
                    >
                      My payment options
                    </NavLink>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="font-body text-sm mb-3 border-b">My orders</p>
                  <div className=" flex flex-col md:ml-10 gap-2">
                    <NavLink
                      to="/my-profile/returns"
                      style={navStyle}
                      className="font-body text-xs"
                    >
                      My returns
                    </NavLink>
                    <NavLink
                      to="/my-profile/cancellations"
                      style={navStyle}
                      className="font-body text-xs"
                    >
                      My cancellations
                    </NavLink>
                  </div>
                </div>
                <div>
                  <p className="font-body text-xs border-b">My wishlist</p>
                </div>
              </div>
              <button
                onClick={logOut}
                className="bg-red-500 text-white font-body w-[80%] p-1.5 mx-auto rounded-sm text-sm"
              >
                Log out
              </button>
            </div>
            <div className="flex-3/4 mt-7 md:my-0 md:p-7">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
