import axios from "axios";
import Qs from "query-string";
const config = {
  baseUrl: import.meta.env.VITE_BE_URL,
};
const axiosClient = axios.create({
  baseURL: config.baseUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params:any) => Qs.stringify(params),
});

axiosClient.interceptors.request.use(async (config:any) => config);
axiosClient.interceptors.response.use((res:any) => {
  try {
    if (res) {
      return res.data;
    } else return res;
  } catch (error) {
    return res.data;
  }
});

export default axiosClient;
