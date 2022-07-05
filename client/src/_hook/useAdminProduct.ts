import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import ProductAPI, { Pagination } from "../_api/product.api";
import adminProductAtom from "../_atom/adminProductAtom";
import useModal from "./useModal";

interface Product {
  name?: string;
  stock?: number;
  price?: number;
  desc?: string;
  thumbnail?: string;
  category_id?: number;
}
const useAdminProduct = () => {
  const [products, setProducts] = useRecoilState(adminProductAtom);
  const [pagination, setPagination] = useState<Pagination>();
  const [serverPagination, setServerPagi] = useState<Pagination>();
  const { setModalState } = useModal();
  useEffect(() => {
    setPagination(() => ({ page: 1, limit: 10, order: "asc", order_by: "id" }));
  }, []);
  useEffect(() => {
    console.log(products);
  }, [products]);
  useEffect(() => {
    if (pagination)
      getProducts().then((data) => {
        setServerPagi(data.pagination);
        setProducts(data.data);
      });
  }, [pagination]);
  const getProducts = useCallback(async () => {
    const result = await ProductAPI.search(pagination, "", "");
    console.log(result.data);
    return result.data;
  }, [pagination]);
  const addNewProduct = useCallback(async (product: Product) => {
    const res = (await ProductAPI.addNewProduct(product)) as any;
    if (res.status === "SUCCESS") {
      toast.success(res.message);
      setPagination({ ...serverPagination });

      setModalState({ componentName: "", payload: null, isOpen: false });
    } else {
      toast.error(res.message);
      setModalState({ componentName: "", payload: null, isOpen: false });
    }
  }, []);
  const updateProduct = useCallback(async (product: Product) => {
    const res = (await ProductAPI.updateProduct(product)) as any;
    if (res.status === "SUCCESS") {
      toast.success(res.message);
      setPagination({ ...serverPagination });
      setModalState({ componentName: "", payload: null, isOpen: false });
    } else {
      toast.error(res.message);
      setModalState({ componentName: "", payload: null, isOpen: false });
    }
  }, []);
  const toggleActive = useCallback(async (product_id: number) => {
    const res = (await ProductAPI.toggleActive(product_id)) as any;
    if (res.status === "SUCCESS") {
      toast.success(res.message);
      setPagination({ ...serverPagination });

      setModalState({ componentName: "", payload: null, isOpen: false });
    } else {
      toast.error(res.message);
      setModalState({ componentName: "", payload: null, isOpen: false });
    }
  }, []);
  const nextPage = useCallback(() => {
    setPagination({ ...pagination, page: pagination.page + 1 });
  }, [pagination]);
  const prevPage = useCallback(() => {
    setPagination({ ...pagination, page: pagination.page - 1 });
  }, [pagination]);
  return {
    products,
    pagination,
    setPagination,
    addNewProduct,
    nextPage,
    prevPage,
    toggleActive,
    updateProduct,
    page: pagination?.page,
    limit: pagination?.limit,
    total: serverPagination?.total,
  };
};

export default useAdminProduct;
