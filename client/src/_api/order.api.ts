import axiosClient from "./axiosClient";
import { Pagination } from "./product.api";
interface DateFilter {
  from: string;
  to: string;
}
const orderApi = {
  getAll: async (
    pagination: Pagination,
    filter: DateFilter,
    statusFilter: number
  ) => {
    const url = "/order/all";
    const res = await axiosClient.get(url, {
      params: {
        limit: pagination.limit,
        page: pagination.page,
        order: pagination.order,
        order_by: pagination.order_by,
        from: filter.from,
        to: filter.to,
        status: statusFilter,
      },
    });
    return res.data;
  },
  getAllAdmin: async (
    pagination: Pagination,
    filter: DateFilter,
    statusFilter: number
  ) => {
    const url = "/order/all/admin";
    const res = await axiosClient.get(url, {
      params: {
        limit: pagination.limit,
        page: pagination.page,
        order: pagination.order,
        order_by: pagination.order_by,
        from: filter.from,
        to: filter.to,
        status: statusFilter,
      },
    });
    return res.data;
  },
  cancelOrder: async (order_id: number) => {
    const url = "/order/cancel?order_id=" + order_id;
    const res = await axiosClient.post(url);
    if (res.data > 0) return true;
    return false;
  },
  reorder: async (order_id: number) => {
    const url = "/order/reorder?order_id=" + order_id;
    const res = await axiosClient.post(url);
    if (res.data > 0) return true;
    return false;
  },
};
export default orderApi;
