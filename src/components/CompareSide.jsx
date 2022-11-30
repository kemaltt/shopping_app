import React from "react";
import { MdOutlineCompareArrows } from "react-icons/md";
import Badge from "react-bootstrap/Badge";
import { useNavigate } from "react-router-dom";

export default function CompareSide({ selectedItems, isAuthenticated }) {
  const navigate = useNavigate();
  const badge = selectedItems.length;
  return (
    <div
      onClick={() =>
        isAuthenticated
          ? navigate("/compare")
          : alert("please login before continuing")
      }
      className="compare-side"
    >
      <MdOutlineCompareArrows />
      <Badge
        style={{
          fontSize: "1.2rem",
          position: "relative",
          top: "-35px",

          width: "25px",
          height: "25px",
          borderRadius: "50%",
        }}
        bg="secondary"
      >
        {badge}
      </Badge>
    </div>
  );
}
