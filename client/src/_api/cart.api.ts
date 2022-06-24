import axiosClient from "./axiosClient";

export const cartAPI = {
  getCart: async () => {
    const response = await axiosClient.get("/cart");
    return response.data;
  },
  addToCart: async (product_id: number, quantity: number) => {
    const response = await axiosClient.post("/cart", {
      product_id,
      quantity,
    });
    return response.data;
  },
  removeFromCart: async (cart_detail_id: number) => {
    const response = await axiosClient.delete(
      `/cart?cart_detail_id=${cart_detail_id}`
    );
    return response.data;
  },
  updateCartItem: async (cart_detail_id: number, quantity: number) => {
    const response = await axiosClient.post(`/cart/update`, {
      quantity,
      cart_detail_id,
    });
    return response.data;
  },
};
