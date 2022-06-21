import React, { useCallback, useEffect, useState } from "react";
import ProductAPI from "../_api/product.api";

const useProduct = (category_slug: string) => {
  const [products, setProduct] = React.useState<any>({
    data: [],
    pagination: {
      page: 1,
      limit: 10,
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
    search(term, { page: 1, limit: 10, order: "asc", order_by: "id" }).then(
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
      data: [...products.data, ...response.data],
      pagination: response.data.pagination,
    });
  }, []);
  return {
    products,
    loadMore,
    setTerm,
    term,
  };
};

export default useProduct;
