import { NavLink } from "react-router-dom";
import { useShop } from "../context/ShopContext";

const Cart = () => {
  const { cart, cartCount, cartTotal } = useShop();

  if (cart.length === 0) return <div className="my-12 my-max-width w-11/12 mx-auto flex justify-center items-center min-h-100">
    <h3 className="font-heading font-semibold text-3xl">Your cart is empty</h3>
  </div>

  return (
    <section className="my-12">
      <div className="my-max-width w-11/12 mx-auto min-h-150">
        <div className="flex flex-col">
          <div className="flex justify-between items-center shadow-md p-2 font-body text-sm mb-5">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          <div className="flex flex-col gap-3">
            {cart.map((e) => (
              <NavLink
              to={`/product/${e.id}`}
                key={e.id}
                className="flex gap-20 justify-between items-center  shadow-md p-2"
              >
                <div className="flex-1/4">
                  <img
                    className="w-10 h-10 object-contain"
                    src={e.image}
                    alt={e.title}
                  />
                  <p className="font-body text-xs text-wrap w-25">{e.title}</p>
                </div>
              <div className="flex-3/4 flex justify-between">
                  <p className="font-body">${e.price}</p>
                <p className="font-body">{e.quantity}</p>
                <p className="font-body">${e.price * e.quantity}</p>
              </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
