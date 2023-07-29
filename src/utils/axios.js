import axios from "axios";
import { AppConfig } from "./config";

const axiosWithAuthHeaders = axios.create({
  baseURL: AppConfig.api.baseUrl,
  withCredentials: true,
});

const axiosWithoutAuthHeaders = axios.create({
  baseURL: AppConfig.api.baseUrl,
});

axiosWithAuthHeaders.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${window.localStorage.getItem(
    "accessToken"
  )}`;

  config.headers.RefreshToken = window.localStorage.getItem("refreshToken");

  return config;
});

export { axiosWithAuthHeaders, axiosWithoutAuthHeaders };
