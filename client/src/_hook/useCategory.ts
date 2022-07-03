import React, { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { categoryAPI } from "../_api/category.api";
import categoryAtom from "../_atom/categoryAtom";

const useCategory = () => {
  const [categories, setCategories] = useRecoilState(categoryAtom);
  useEffect(() => {
    getAllCategory().then((categories) => setCategories(categories));
  }, []);
  const getAllCategory = useCallback(async () => {
    return await categoryAPI.getAllCategory();
  }, []);
  const addCategory = useCallback(async (name: string) => {
    const result = await categoryAPI.addNewCategory(name);
    console.log(result);
    if (result >= 0) setCategories(await getAllCategory());
  }, []);
  const updateCategory = useCallback(
    async (category_id: number, newName: string) => {
      const result = await categoryAPI.updateCategory(category_id, newName);
      if (result) setCategories(await getAllCategory());
    },
    []
  );
  return {
    addCategory,
    getAllCategory,
    updateCategory,
    categories,
  };
};

export default useCategory;
