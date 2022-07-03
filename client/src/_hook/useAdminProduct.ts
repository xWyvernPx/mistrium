import React, { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import ProductAPI, { Pagination } from "../_api/product.api";
import adminProductAtom from "../_atom/adminProductAtom";

const useAdminProduct = () => {
  const [products, setProducts] = useRecoilState(adminProductAtom);
  const [pagination, setPagination] = useState<Pagination>();
  useEffect(() => {
    setPagination(() => ({ page: 1, limit: 10, order: "asc", order_by: "id" }));
  }, []);
  useEffect(() => {
    console.log(products);
  }, [products]);
  useEffect(() => {
    if (pagination) getProducts().then((data) => setProducts(data.data));
  }, [pagination]);
  const getProducts = useCallback(async () => {
    const result = await ProductAPI.search(pagination, "", "");
    console.log(result.data);
    return result.data;
  }, [pagination]);
  return {
    products,
    pagination,
    setPagination,
  };
};

export default useAdminProduct;
