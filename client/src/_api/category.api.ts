import axiosClient from "./axiosClient";

export const categoryAPI = {
  getAllCategory: async () => {
    const res = await axiosClient.get("/category?action=get_all");
    return res.data;
  },
  addNewCategory: async (name: string) => {
    const res = await axiosClient.post("/category?action=add", {
      name,
    });
    return res.data;
  },

  updateCategory: async (category_id: number, newName: string) => {
    const res = await axiosClient.post("/category?action=update", {
      category_id,
      newName,
    });
    return res.data;
  },
  getCategoryById: async (id: number) => {
    const res = await axiosClient.get(`/category/full?id=${id}`);
    return res.data;
  },
};
