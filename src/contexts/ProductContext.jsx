import { createContext, useContext, useState } from "react";
import data from "../products";

const ProductContext = createContext();
export const useProductContext = () => useContext(ProductContext);

export const ProductContextProvider = (props) => {
  const [selectedCartProducts, setSelectedCartProducts] = useState([]);
  const [selectedCompareProducts, setSelectedCompareProducts] = useState([]);
  const [products, setProducts] = useState(data);
  const [searchInput, setSearchInput] = useState("");

  const filterProducts = (item) => {
    return item.filter((el) =>
      el.title.toLowerCase().includes(searchInput.toLowerCase())
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        selectedCartProducts,
        selectedCompareProducts,
        setSelectedCartProducts,
        setSelectedCompareProducts,
        filterProducts,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
