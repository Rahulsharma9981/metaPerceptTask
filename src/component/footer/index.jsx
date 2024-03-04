import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div
      className="text-dark  d-flex justify-content-between shadow border-dark align-items-center"
      style={{ height: "100px" }}
    >
      <p>copy right 20021. All right reserver</p>
      <Link>Back to top</Link>
    </div>
  );
}
