import axios from "axios";
import { setRoles } from "./clientReducerActions";

const axiosInstance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

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
