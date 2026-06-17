import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getRecipes = (ingredients) => {
  return API.get(`/recipes?ingredients=${ingredients}`);
};
