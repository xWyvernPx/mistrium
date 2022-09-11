import axiosClient from "./axiosClient";
import { Pagination } from "./product.api";

export const accountAPI = {
  getAll: async (pagination: Pagination, term: string) => {
    const url = "/account/all";
    const result = await axiosClient.get(url, {
      params: {
        term: term ? term : "",
        page: pagination.page,
        limit: pagination.limit,
        order_by: pagination.order_by,
        order: pagination.order,
      },
    });
    return result.data;
  },
  toggleActive: async (account_id: number) => {
    const url = "/account/toggle";
    const result = await axiosClient.get(url, {
      params: {
        account_id,
      },
    });
    return result.data;
  },
  updateProfile: async (profile: Profile) => {
    const url = "/account/profile";
    const result = await axiosClient.post(url, { ...profile });
    return result;
  },
};

interface Profile {
  name: string;
  phone: string;
  gender: boolean;
  district: number;
  province: number;
  ward: number;
}
