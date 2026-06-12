import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
   return JSON.parse(localStorage.getItem("cart")) || [];
  });
  const [category, setCategory] = useState([]);
  const [isError, setIsError] = useState(false);
  const [mainCategory, setMainCategory] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products?limit=200",
        );
        const data = response.data.products;

        setProducts(data);
        setCategory(getCategoriesWithRepImages(data));
        setMainCategory(getMainCategory(data));
      } catch {
        setIsError(true);
      }
    };

    function getMainCategory(products) {
      const categorySet = new Set();

      for (const product of products) {
        const mainCategory = product.category.split("-")[0];

        categorySet.add(mainCategory);
      }
      return Array.from(categorySet);
    }

    function getCategoriesWithRepImages(products) {
      const categoryMap = new Map();

      for (const product of products) {
        const mainCategories = product.category;

        if (!categoryMap.has(mainCategories)) {
          categoryMap.set(mainCategories, {
            category: mainCategories,
            image: product.images[0],
          });
        }
      }

      return Array.from(categoryMap.values());
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    const existingItems = cart.find((item) => item.id == product.id);

    if (existingItems) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      const newItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.images[0],
        discount: product.discountPercentage,
        quantity: 1,
      };
      setCart([...cart, newItem]);
    }
  }

  function removeFromCart(id) {
    setCart((cart) => cart.filter((item) => item.id !== id));
  }

  function increaseQuantity(id) {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  function decreaseQuantity(id) {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0,
  );

  return (
    <ShopContext.Provider
      value={{
        products,
        isError,
        category,
        cart,
        mainCategory,
        cartCount,
        cartTotal,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        addToCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  return useContext(ShopContext);
};
