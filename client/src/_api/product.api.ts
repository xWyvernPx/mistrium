import axiosClient from "./axiosClient";

export interface Pagination {
  page: number | 0;
  limit: number | 10;
  total?: number | 0;
  total_pages?: number | 0;
  order_by: string | "id";
  order: String | "asc";
}
interface Product {
  name?: string;
  stock?: number;
  price?: number;
  desc?: string;
  thumbnail?: string;
  category_id?: number;
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
  addNewProduct: async (product: Product) => {
    const url = "/product/add";
    const res = await axiosClient.post(url, { ...product });
    return res;
  },
  updateProduct: async (product: Product) => {
    const url = "/product/update";
    const res = await axiosClient.post(url, { ...product });
    return res;
  },
  toggleActive: async (product_id: number) => {
    const url = "/product/toggle?product_id=" + product_id;
    const res = await axiosClient.post(url);
    return res;
  },
};
export default ProductAPI;
