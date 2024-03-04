import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

import CardDetails from "../pages/CardDetail";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/card-details/:id" element={<CardDetails />} />
    </Routes>
  );
};

export default AllRoutes;
