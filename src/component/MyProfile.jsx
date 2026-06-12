import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext"
import { Outlet } from "react-router-dom";

const MyProfile = () => {

const { user } = useAuth();

  const navStyle = ({isActive}) => ({
    color: isActive ? "red" : "black"
  });


  return (
    <section className="my-12">
      <div className="my-max-width w-11/12 mx-auto h-full">
        <div className="flex flex-col">
         <div className="h-full flex justify-between items-center mb-5">
           <p className="font-body text-xs">My Account</p>
          <p className="font-body text-xs">Welcome! {user?.name}</p>
         </div>
          <div className="flex min-h-120">
            <div className="flex-1/4 border-r border-gray-300">
            <div className="mb-5">
              <p className="font-body text-sm mb-3">Manage my account</p>
              <div className=" flex flex-col ml-10 gap-2">
                <NavLink to="/my-profile/profile" style={navStyle} className="font-body text-xs">My profile</NavLink>
                <NavLink to="/my-profile/address-book" style={navStyle} className="font-body text-xs">Address book</NavLink>
                <NavLink to="/my-profile/payment-options" style={navStyle} className="font-body text-xs">My payment options</NavLink>
              </div>
            </div>
            <div className="mb-5">
              <p className="font-body text-sm mb-3">My orders</p>
              <div className=" flex flex-col ml-10 gap-2">
                <NavLink to="/my-profile/returns" style={navStyle} className="font-body text-xs">My returns</NavLink>
                <NavLink to="/my-profile/cancellations" style={navStyle} className="font-body text-xs">My cancellations</NavLink>
              </div>
            </div>
            <div>
              <p className="font-body text-sm">My wishlistt</p>
            </div>
            </div>
            <div className="flex-3/4 p-7">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyProfile