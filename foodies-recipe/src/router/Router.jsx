import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePages from "../pages/HomePages";
import Layout from "../layouts/Layout";
import RecipesPages from "../pages/RecipesPages";
import SearchedPages from "../pages/SearchedPages";
import NotFoundPages from "../pages/NotFoundPages";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePages />} />
        <Route path="/recipes" element={<RecipesPages />} />
        <Route path="/searched/:searched" element={<SearchedPages />} />
      </Route>

      <Route>
        <Route path="/404" element={<NotFoundPages />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
}

export default Router;
