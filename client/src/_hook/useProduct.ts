import React, { useCallback, useEffect, useState } from "react";
import ProductAPI from "../_api/product.api";
interface Product {
  name?: string;
  stock?: number;
  price?: number;
  desc?: string;
  thumbnail?: string;
  category_id?: number;
}
const useProduct = (category_slug: string) => {
  const [products, setProduct] = React.useState<any>({
    data: [],
    pagination: {
      page: 1,
      limit: 4,
      order: "asc",
      order_by: "id",
    },
  });
  const [term, setTerm] = React.useState("");
  useEffect(() => {
    getProducts("").then((data: any) =>
      setProduct({ data: data.data, pagination: data.pagination })
    );
  }, []);
  useEffect(() => {
    search(term, { page: 1, limit: 4, order: "asc", order_by: "id" }).then(
      (data: any) =>
        setProduct({ data: data.data, pagination: data.pagination })
    );
  }, [term]);
  const getProducts = useCallback(async (term: string) => {
    const response = await ProductAPI.search(
      products.pagination,
      term,
      category_slug
    );
    return response.data;
  }, []);
  const search = useCallback(async (term: string, pagination: any) => {
    const response = await ProductAPI.search(pagination, term, category_slug);
    return response.data;
  }, []);
  const loadMore = useCallback(async () => {
    const response = await ProductAPI.search(
      { ...products.pagination, page: products.pagination.page + 1 },
      term,
      category_slug
    );
    setProduct({
      data: [...products.data, ...response.data.data],
      pagination: response.data.pagination,
    });
  }, [products]);
  const addNewProduct = useCallback(async (product: Product) => {
    const res = await ProductAPI.addNewProduct(product);
  }, []);
  const setFilter = useCallback(
    async (order: string, order_by: string) => {
      search(term, { page: 1, limit: 4, order, order_by }).then((data: any) =>
        setProduct({ data: data.data, pagination: data.pagination })
      );
    },
    [products]
  );
  return {
    products,
    loadMore,
    setTerm,
    addNewProduct,
    term,
    setFilter,
  };
};

export default useProduct;
