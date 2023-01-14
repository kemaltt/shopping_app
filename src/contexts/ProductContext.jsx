import { createContext, useContext, useState } from "react";
import data from "../products";
import { useAuth0 } from "@auth0/auth0-react";

const ProductContext = createContext();
export const useProductContext = () => useContext(ProductContext);

export const ProductContextProvider = (props) => {
  const { loginWithRedirect, isAuthenticated, logout, isLoading, user } =
    useAuth0();
  const [selectedCartProducts, setSelectedCartProducts] = useState([]);
  const [selectedCompareProducts, setSelectedCompareProducts] = useState([]);
  const [products, setProducts] = useState(data);
  const [searchInput, setSearchInput] = useState("");

  const filterProducts = (item) => {
    return item.filter((el) =>
      el.title.toLowerCase().includes(searchInput.toLowerCase())
    );
  };
  const addToCart = (product) => {
    if (isAuthenticated) {
      if (selectedCartProducts.includes(product)) {
        product.count++;
      } else {
        product.count = 1;
        setSelectedCartProducts([...selectedCartProducts, product]);
      }
    } else {
      alert("Please login");
    }
  };
  const removeFromCart = (product) => {
    setSelectedCartProducts([
      ...selectedCartProducts.filter(
        (el) => el.product_id !== product.product_id
      ),
    ]);
  };
  const addToCompare = (product) => {
    if (isAuthenticated) {
      setSelectedCompareProducts([...selectedCompareProducts, product]);
    } else {
      alert("Please login");
    }
  };
  const removeFromCompare = (product) => {
    setSelectedCompareProducts([
      ...selectedCompareProducts.filter(
        (el) => el.product_id !== product.product_id
      ),
    ]);
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
        searchInput,
        setSearchInput,
        filterProducts,
        loginWithRedirect,
        isAuthenticated,
        logout,
        isLoading,
        user,
        addToCart,
        removeFromCart,
        addToCompare,
        removeFromCompare,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
