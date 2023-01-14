import React from "react";
import { useProductContext } from "../contexts/ProductContext";

export default function Search({ setMessage }) {
  const { isAuthenticated, searchInput, setSearchInput, filterProducts } =
    useProductContext();

  const getProduct = (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      alert("please log in before continuing");
    } else {
      if (!searchInput) {
        alert("enter a product");
      } else {
        filterProducts();

        if (filterProducts().length === 0) {
          setMessage(
            <span style={{ color: "red" }}>No matching information</span>
          );
        } else {
          filterProducts();
          setMessage(
            <span style={{ color: "yellowgreen" }}>
              There are {filterProducts().length} matches
            </span>
          );
        }
      }
    }
    setSearchInput("");
  };
  return (
    <div className="search_container">
      <form onSubmit={getProduct} action="">
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search a product..."
          type="text"
          value={searchInput}
        />
        {/* <button type="submit">Search</button> */}
      </form>
    </div>
  );
}
