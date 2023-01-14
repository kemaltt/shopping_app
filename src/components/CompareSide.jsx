import React from "react";
import { MdOutlineCompareArrows } from "react-icons/md";
import Badge from "react-bootstrap/Badge";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext";

export default function CompareSide() {
  const { selectedCompareProducts, isAuthenticated } = useProductContext();
  const navigate = useNavigate();
  const badge = selectedCompareProducts.length;
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
