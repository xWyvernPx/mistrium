import React, { useCallback, useEffect, useState } from "react";
import { accountAPI } from "../_api/account.api";
import { Pagination } from "../_api/product.api";

const useAdminAccount = () => {
  const [accounts, setAccounts] = useState<any[]>();
  const [pagination, setPagination] = useState<Pagination>(() => ({
    page: 1,
    limit: 10,
    order: "asc",
    order_by: "id",
  }));
  const [serverPagination, setServerPagi] = useState<Pagination>();
  const [term, setTerm] = useState("");
  useEffect(() => {
    setPagination({ page: 1, limit: 10, order: "asc", order_by: "id" });
  }, []);

  useEffect(() => {
    if (pagination.page)
      getAll().then((res) => {
        console.log(res);
        setServerPagi(res.pagination);
        setAccounts(res.data);
      });
  }, [pagination]);
  useEffect(() => {
    setPagination({ page: 1, limit: 10, order_by: "id", order: "asc" });
  }, [term]);
  const getAll = useCallback(async () => {
    return await accountAPI.getAll(pagination, term);
  }, [pagination, term]);
  const toggleActive = useCallback(async (account_id: number) => {
    const result = await accountAPI.toggleActive(account_id);
    if (result) setPagination({ ...pagination });
  }, []);
  const nextPage = useCallback(() => {
    setPagination({ ...pagination, page: pagination.page + 1 });
  }, [pagination]);
  const prevPage = useCallback(() => {
    setPagination({ ...pagination, page: pagination.page - 1 });
  }, [pagination]);
  return {
    accounts,
    toggleActive,
    page: serverPagination?.page,
    limit: serverPagination?.limit,
    total: serverPagination?.total,
    nextPage,
    prevPage,
    setTerm,
  };
};

export default useAdminAccount;
