import axios from "axios";
import { axiosInstance } from "../ApiControl";
import toast from "react-hot-toast";

export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";

export const setUser = (user) => {
  return { type: SET_USER, payload: user };
};

export const setRoles = (roles) => {
  return { type: SET_ROLES, payload: roles };
};

export const setTheme = (theme) => {
  return { type: SET_THEME, payload: theme };
};

export const setLanguage = (language) => {
  return { type: SET_LANGUAGE, payload: language };
};

export const fetchRoles = () => {
  return async (dispatch, getState) => {
    const { client } = getState();
    if (client.roles.length === 0) {
      try {
        const response = await axiosInstance.get("/roles");
        dispatch(setRoles(response.data));
      } catch (error) {
        console.error("Failed to fetch roles", error);
      }
    }
  };
};

export const loginUser = (email, password, rememberMe) => async (dispatch) => {
  return axiosInstance
    .post("/login", {
      email: email,
      password: password,
    })
    .then(function (response) {
      const user = {
        email: response.data.email,
        role_id: response.data.role_id,
      };
      const token = response.data.token;
      if (rememberMe) {
        localStorage.setItem("Authorization", token);
      }

      dispatch(setUser(user));
      return true;
    })
    .catch(function (error) {
      toast("Wrong email or password");
      return false;
    });
};
