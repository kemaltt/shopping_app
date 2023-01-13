import React from "react";
import { MdOutlineCompareArrows } from "react-icons/md";
import Badge from "react-bootstrap/Badge";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext";

export default function CompareSide({ selectedItems, isAuthenticated }) {
  // const { selectedProducts, isAuthenticated } = useProductContext();
  const navigate = useNavigate();
  const badge = selectedItems.length;
  return (
    <div
      onClick={() =>
        isAuthenticated ? navigate("/compare") : alert("please login")
      }
      className="compare-side"
    >
      <MdOutlineCompareArrows />
      <Badge bg="secondary">{badge}</Badge>
    </div>
  );
}
