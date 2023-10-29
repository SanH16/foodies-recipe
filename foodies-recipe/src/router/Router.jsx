import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePages from "../pages/HomePages";
import Layout from "../layouts/Layout";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePages />} />
      </Route>
    </Routes>
  );
}

export default Router;
