import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://imcxm.exodusapi.influencedev.com/api",
});

export default axiosInstance;
