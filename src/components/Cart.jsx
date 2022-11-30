import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import Badge from "react-bootstrap/Badge";
import { useNavigate } from "react-router-dom";

export default function Cart({ selectedProducts, isAuthenticated }) {
  const navigate = useNavigate();
  const badge = selectedProducts.length;
  return (
    <div
      onClick={() =>
        isAuthenticated
          ? navigate("/cart")
          : alert("please login before continuing")
      }
      className="cart_container"
    >
      <FaCartArrowDown />
      <Badge
        style={{
          fontSize: "1.5rem",
          position: "relative",
          top: "-40px",

          width: "30px",
          height: "30px",
          borderRadius: "50%",
        }}
        bg="secondary"
      >
        {badge}
      </Badge>
      <span className="visually-hidden">unread messages</span>
    </div>
  );
}
