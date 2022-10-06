import { useState, createContext, useEffect } from "react";
import { getProducts } from "../services/apiServices";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [helpProducts, setHelpProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setHelpProducts(data);
    });
  }, []);

  const filterProducts = (searchTerm) => {
    const newProducts = helpProducts.filter((val) => {
      if (searchTerm === "" || val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
      // } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      //   console.log("estoy buscando ", searchTerm);
      //   return val;
      // }
    });
    return newProducts;
  };

  const handleSearch = (e) => {
    if(e.target.value==="") {
      setProducts(helpProducts);
    } else {
      const newFilter = filterProducts(e.target.value);
      setProducts(newFilter);
    }
  };

  return (
    <SearchContext.Provider value={{ handleSearch, products }}>
      {children}
    </SearchContext.Provider>
  );
};

/////////////////////////////

// useEffect(() => {
//   getProducts().then((data) => {
//     setProducts(data);
//   });
// }, []);

// useEffect(() => {
//   const newFilter = filterProducts(context.searchTerm);
//   setProducts(newFilter);
// }, [context.searchTerm]);
