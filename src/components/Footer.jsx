import React from "react";

export default function Footer({ isAuthenticated }) {
  return (
    <div className="footer_container">
      <p> &copy;{new Date().getFullYear()} The Compare App </p>
      <h4>Created with love by Kemal</h4>
    </div>
  );
}
