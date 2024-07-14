import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
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

const axiosInstance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

function App() {
  const getTkn = localStorage.getItem("Authorization");
  if (getTkn) {
    const dispatch = useDispatch();
    axiosInstance.defaults.headers.common["Authorization"] = getTkn;
    axiosInstance
      .get("/verify")
      .then((response) => {
        dispatch(setUser(response.data));
      })
      .catch((error) => {
        axiosInstance.defaults.headers.common["Authorization"].delete;
        localStorage.removeItem("Authorization");
      });
  }

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/product/:id" children={<ProductPage />} />
        <Route path="/shop" children={<ProductListPage />} />
        <Route path="/shop/:filter" children={<ProductListPage />} />
        <Route path="/blog/:id" children={<Blog />} />
        <Route path="/aboutUs" children={<AboutUs />} />
        <Route path="/contact" children={<Contact />} />
        <Route path="/team" children={<Team />} />
        <Route path="/signup" children={<SignUp />} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
