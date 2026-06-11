import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState([]);
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

        console.log(data);
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

  return (
    <ShopContext.Provider value={{ products, isError, category, mainCategory }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  return useContext(ShopContext);
};
