import React from "react";
import { useState } from "react";
import CartSide from "../components/CartSide";
import CompareSide from "../components/CompareSide";
import Loading from "../components/Loading";
import ProductCard from "../components/ProductCard";
import Search from "../components/Search";

export default function ProductComparison({
  products,
  setProducts,
  selectedItems,
  addToCompare,
  removeToCompare,
  isAuthenticated,
  isLoading,
  addToCart,
  removeToCart,
  selectedProducts,
}) {
  const [message, setMessage] = useState("");

  return isLoading ? (
    <Loading />
  ) : (
    <div className="main">
      <CompareSide
        selectedItems={selectedItems}
        isAuthenticated={isAuthenticated}
      />
      <CartSide
        selectedProducts={selectedProducts}
        isAuthenticated={isAuthenticated}
      />
      <Search
        products={products}
        setProducts={setProducts}
        setMessage={setMessage}
        isAuthenticated={isAuthenticated}
      />
      <p style={{ textAlign: "center" }}> {message}</p>

      <div className="products_container">
        {products.map((product, i) => (
          <ProductCard
            key={i}
            product={product}
            id={product.product_id}
            i={i}
            selected={selectedItems}
            addToCompare={addToCompare}
            removeToCompare={removeToCompare}
            addToCart={addToCart}
            removeToCart={removeToCart}
            selectedProducts={selectedProducts}
            isAuthenticated={isAuthenticated}
          />
        ))}
      </div>
    </div>
  );
}
