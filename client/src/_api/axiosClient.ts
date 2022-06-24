import axios from "axios";
import Qs from "query-string";
const config = {
  baseUrl: "http://localhost:8080/mistrium/",
};
const axiosClient = axios.create({
  baseURL: config.baseUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    // Access-Control-Allow-Origin : "*",
  },
  paramsSerializer: (params) => Qs.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => config);
axiosClient.interceptors.response.use((res) => {
  try {
    if (res) {
      return res.data;
    } else return res;
  } catch (error) {
    return res.data;
  }
});

export default axiosClient;
