import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePages from "../pages/HomePages";
import RecipesPages from "../pages/RecipesPages";
import SearchedPages from "../pages/SearchedPages";
import NotFoundPages from "../pages/NotFoundPages";
import AddRecipe from "../components/AddRecipe";
import ProtectedRouter from "./ProtectedRouter";
import PrivateRouter from "./PrivateRouter";
import LogoutSession from "../pages/LogoutSession";
import UnauthorizedPages from "../pages/UnauthorizedPages";
import Layout from "../layouts/Layout";
import { SignUpPages } from "../pages/SignUpPages";
import { LoginPages } from "../pages/LoginPages";
import DetailRecipePages from "../pages/DetailRecipePages";

function Router() {
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePages />} />
      </Route>
      <Route path="/" element={<PrivateRouter />}>
        <Route path="/recipes" element={<RecipesPages />} />
        <Route path="/searched/:searched" element={<SearchedPages />} />
        <Route path="/add-recipes" element={<AddRecipe />} />
        <Route path="/recipe/:id" element={<DetailRecipePages />} />
      </Route>

      <Route path="/" element={<ProtectedRouter />}>
        <Route path="/login" element={<LoginPages />} />
        <Route path="/signup" element={<SignUpPages />} />
        <Route path="/logoutsession" element={<LogoutSession />} />
      </Route>

      <Route>
        <Route path="/404" element={<NotFoundPages />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
        <Route path="/unauthorized" element={<UnauthorizedPages />} />
      </Route>
    </Routes>
  );
}

export default Router;
