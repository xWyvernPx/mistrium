import axiosClient from "./axiosClient";

export interface Pagination {
  page: number | 0;
  limit: number | 10;
  total?: number | 0;
  total_pages?: number | 0;
  order_by: string | "id";
  order: String | "asc";
}
const ProductAPI = {
  getAll: async (pagination: Pagination) => {
    const { page, limit, order, order_by } = pagination;
    const url = `/products?page=${page}&limit=${limit}&order=${order}&order_by=${order_by}`;
    const response = await axiosClient.get(url);
    console.log(response);
    return response;
  },
  search: async (
    pagination: Pagination,
    search: string,
    category_slug: string
  ) => {
    const { page, limit, order, order_by } = pagination;
    const url = `/products/search?page=${page}&limit=${limit}&order=${order}&order_by=${order_by}&q=${search}&category_slug=${category_slug}`;
    const response = await axiosClient.get(url);
    console.log(response);
    return response;
  },
  getCategoryId: async (slug: string) => {
    const url = `/category/id?slug=${slug}`;
    const response: any = await axiosClient.get(url);
    if (response.status === "SUCCESS") {
      return response.data;
    } else return null;
  },
};
export default ProductAPI;
