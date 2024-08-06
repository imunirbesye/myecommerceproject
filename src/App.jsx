import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { axiosInstance } from "./ApiControl";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductPage";
import Blog from "./pages/Blog";
import Team from "./pages/Team";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { setUser } from "./actions/clientReducerActions";
import { Toaster } from "react-hot-toast";
  fetchProducts,

let products = null;
let user = null;
function App() {
  const dispatch = useDispatch();

  if (categories[0] == null) {
    dispatch(fetchCategories(dispatch));
  if (products == null) {
    dispatch(fetchProducts(dispatch));
    products = 1;
  }

  const getTkn = localStorage.getItem("Authorization");
  if (getTkn && user == null) {
    axiosInstance.defaults.headers.common["Authorization"] = getTkn;
    axiosInstance
      .get("/verify")
      .then((response) => {
        dispatch(setUser(response.data));
        user = 1;
      })
      .catch((error) => {
        axiosInstance.defaults.headers.common["Authorization"].delete;
        localStorage.removeItem("Authorization");
      });
  }

  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/product/:id">
          <ProductPage />
        </Route>
        <Route path="/shop">
          <ProductListPage />
        </Route>
        <Route path="/shop/:gender/:category">
          <ProductListPage />
        </Route>
        <Route path="/shop/:filter">
          <ProductListPage />
        </Route>
        <Route path="/blog/:id">
          <Blog />
        </Route>
        <Route path="/aboutUs">
          <AboutUs />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
