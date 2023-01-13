import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { BsCartCheckFill } from "react-icons/bs";
import { MdCompareArrows } from "react-icons/md";

export default function ProductCard({
  product,
  i,
  id,
  selected,
  addToCompare,
  removeToCompare,
  addToCart,
  removeToCart,
  selectedProducts,
  isAuthenticated,
}) {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const removeCart = () => {
    !isAuthenticated ? alert("please log") : removeToCart(product);
  };
  const addCart = () => {
    !isAuthenticated ? alert("please login") : addToCart(product);
  };

  const productDetail = () => {
    navigate(isAuthenticated ? `/productdetail/${id}` : alert("please login"));
    setToggle(!toggle);
  };

  return (
    <div key={i} className="product_card">
      <img onClick={productDetail} src={product.image} alt={product.title} />
      <div className="product_body">
        <h3>{product.title} </h3>
        <p className="price">${product.price}</p>

        <div className="card_buttons">
          {selected && selected.includes(product) ? (
            <MdCompareArrows
              onClick={() =>
                !isAuthenticated
                  ? alert("please login")
                  : removeToCompare(product)
              }
              style={{ color: "red" }}
            />
          ) : (
            <MdCompareArrows
              onClick={() =>
                !isAuthenticated ? alert("please login") : addToCompare(product)
              }
              style={{ color: "yellowgreen" }}
            />
          )}
          <div className="cart_buttons">
            {selectedProducts && selectedProducts.includes(product) ? (
              <BsCartCheckFill
                style={{ color: "green" }}
                onClick={removeCart}
              />
            ) : (
              <BsCartPlus style={{ color: "orange" }} onClick={addCart} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
