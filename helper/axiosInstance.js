import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_PIM_API_ROUTE,
});

export default axiosInstance;
