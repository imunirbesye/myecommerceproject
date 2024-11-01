import React from "react";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
  headers: localStorage.getItem("Authorization")
    ? {
        Authorization: localStorage.getItem("Authorization"),
      }
    : {},
});
