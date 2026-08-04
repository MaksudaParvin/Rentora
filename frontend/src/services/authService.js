import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

export const registerUser = async (userData) => {
  const response = await API.post("/accounts/register/", userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await API.post("/login/", userData);

  localStorage.setItem("access", response.data.access);
  localStorage.setItem("refresh", response.data.refresh);

  return response.data;
};

export const getProfile = async () => {
  const token = localStorage.getItem("access");

  const response = await API.get("/accounts/profile/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};