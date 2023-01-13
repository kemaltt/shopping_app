import React from "react";
import { useState } from "react";
import { useProductContext } from "../contexts/ProductContext";

export default function Search({
  products,
  setProducts,
  setMessage,
  isAuthenticated,
}) {
  // const {
  //   products,
  //   setProducts,
  //   setMessage,
  //   isAuthenticated,
  //   searchInput,
  //   setSearchInput,
  //   filterProducts,
  // } = useProductContext();
  const [input, setInput] = useState("");
  const getProduct = (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      alert("please log in before continuing");
    } else {
      if (!input) {
        alert("enter a product");
      } else {
        const search = products.filter(
          // (el) => el.name.toLowerCase().indexOf(input.toLowerCase()) !== -1,
          (el) => el.title.toLowerCase().includes(input.toLowerCase())
        );

        if (search.length === 0) {
          setMessage(
            <span style={{ color: "red" }}>No matching information</span>
          );
        } else {
          setProducts(search);
          setMessage(
            <span style={{ color: "yellowgreen" }}>
              There are {search.length} matches
            </span>
          );
        }
      }
    }
    setInput("");
  };
  return (
    <div className="search_container">
      <form onSubmit={getProduct} action="">
        <input
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search a product..."
          type="text"
          value={input}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
