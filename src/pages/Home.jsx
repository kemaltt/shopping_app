import React from "react";
import { useState } from "react";
import CartSide from "../components/CartSide";
import CompareSide from "../components/CompareSide";
import Loading from "../components/Loading";
import ProductCard from "../components/ProductCard";
import Search from "../components/Search";
import { useProductContext } from "../contexts/ProductContext";

export default function ProductComparison() {
  const [message, setMessage] = useState("");
  const { isLoading, products, filterProducts } = useProductContext();

  return isLoading ? (
    <Loading />
  ) : (
    <div className="main">
      <CompareSide />
      <CartSide />
      <Search
        // products={products}
        // setProducts={setProducts}
        setMessage={setMessage}
        // isAuthenticated={isAuthenticated}
      />
      <p style={{ textAlign: "center" }}> {message}</p>

      <div className="products_container">
        {filterProducts(products).map((product, i) => (
          <ProductCard
            key={i}
            product={product}
            id={product.product_id}
            i={i}
          />
        ))}
      </div>
    </div>
  );
}
