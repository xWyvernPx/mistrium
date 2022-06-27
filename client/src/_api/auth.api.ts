import axiosClient from "./axiosClient";

export const authAPI = {
  getMe: async () => {
    const url = "/me";
    const res = await axiosClient.get(url);
    return res.data;
  },
  logout: async () => {
    const url = "/logout";
    await axiosClient.get(url);
  },
  login: async (email: string, password: string) => {
    const url = "/login";
    const res = await axiosClient.post(url, { email, password });
    return res;
  },
  register: async (email: string, password: string) => {
    const url = "/register";
    const res = await axiosClient.post(url, { email, password, role: false });
    return res;
  },
};
