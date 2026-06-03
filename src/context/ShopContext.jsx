import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState([]);
 const [ mainCategory, setMainCategory] =useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products?limit=200");
        const data = await response.data.products;

        setProducts(data);
        setCategory(getCategoriesWithRepImages(data));
        
         console.log(data)
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    function getCategoriesWithRepImages(products) {
      const categoryMap = new Map();

      for (const product of products) {

        const mainCategory = product.category.split("-")[0]

        if (!categoryMap.has(mainCategory)) {
          categoryMap.set(mainCategory, {
            category: mainCategory,
            image: product.images[0],
          });
        }
      }

      return Array.from(categoryMap.values());
      
    }

    fetchProducts()
   

  }, []);

  return <ShopContext.Provider value={{ products, cart, category }}>{children}</ShopContext.Provider>;
};

export const useShop = () => {
  return useContext(ShopContext);
};
