import React from "react";
import { useNavigate } from "react-router-dom";
// import { BsCartPlus } from "react-icons/bs";
// import { BsCartCheckFill } from "react-icons/bs";
// import { MdCompareArrows } from "react-icons/md";
import { useProductContext } from "../contexts/ProductContext";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

export default function ProductCard({ product, i, id }) {
  const {
    isAuthenticated,
    selectedCartProducts,
    selectedCompareProducts,
    addToCart,
    removeFromCart,
    addToCompare,
    removeFromCompare,
  } = useProductContext();

  const navigate = useNavigate();

  const productDetail = () => {
    navigate(isAuthenticated ? `/productdetail/${id}` : alert("please login"));
  };

  return (
    <div key={i} className="product_card">
      <img onClick={productDetail} src={product.image} alt={product.title} />
      <div className="product_body">
        <h3>{product.title} </h3>
        <p className="price">${product.price}</p>

        <div className="card_buttons">
          {selectedCompareProducts &&
          selectedCompareProducts.includes(product) ? (
            // <MdCompareArrows
            //   onClick={() =>
            //     !isAuthenticated
            //       ? alert("please login")
            //       : removeFromCompare(product)
            //   }
            //   style={{ color: "red" }}
            // />
            <Button
              onClick={() => removeFromCompare(product)}
              variant="outlined"
              // style={{ color: "#fff", background: "red" }}
              color="error"
              startIcon={<CompareArrowsIcon />}
            ></Button>
          ) : (
            <Button
              onClick={() => addToCompare(product)}
              variant="outlined"
              color="success"
              startIcon={<CompareArrowsIcon />}
            ></Button>
            // <MdCompareArrows
            //   onClick={() =>
            //     !isAuthenticated ? alert("please login") : addToCompare(product)
            //   }
            //   style={{ color: "yellowgreen" }}
            // />
          )}
          <div className="cart_buttons">
            {selectedCartProducts && selectedCartProducts.includes(product) ? (
              // <BsCartCheckFill
              //   style={{ color: "green" }}
              //   onClick={
              //     !isAuthenticated
              //       ? alert("please login")
              //       : () => removeFromCart(product)
              //   }
              // />
              <Button
                onClick={() => removeFromCart(product)}
                variant="outlined"
                color="error"
                startIcon={<RemoveShoppingCartIcon />}
              >
                Del
              </Button>
            ) : (
              // <BsCartPlus
              //   style={{ color: "orange" }}
              //   onClick={
              //     !isAuthenticated
              //       ? alert("please login")
              //       : () => addToCart(product)
              //   }
              // />
              <Button
                onClick={() => addToCart(product)}
                variant="outlined"
                color="success"
                startIcon={<AddShoppingCartIcon />}
              >
                Add
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
