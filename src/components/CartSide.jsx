import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import Badge from "react-bootstrap/Badge";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext";

export default function Cart() {
  const { selectedCartProducts, isAuthenticated } = useProductContext();
  const navigate = useNavigate();
  const badge = selectedCartProducts.length;
  return (
    <div
      onClick={() =>
        isAuthenticated ? navigate("/cart") : alert("please login")
      }
      className="cart_container"
    >
      <FaCartArrowDown />
      <Badge bg="secondary">{badge}</Badge>
      <span className="visually-hidden">unread messages</span>
    </div>
  );
}
