import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import orderApi from "../_api/order.api";
import { Pagination } from "../_api/product.api";

const useAdminOrder = () => {
  const [statusFilter, setStatusFilter] = useState<1 | 2 | 3 | 0 | -1>();
  const [pagination, setPagination] = useState<Pagination>();
  const [serverPagination, setServerPagi] = useState<Pagination>();
  useEffect(() => {
    setStatusFilter(-1);
    setPagination({
      limit: 10,
      page: 1,
      order: "asc",
      order_by: "id",
    });
    setDateFilter(() => {
      const d = new Date();
      return {
        from: "01/01/2010",
        to: d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear(),
      };
    });
  }, []);
  const [dateFilter, setDateFilter] = useState<{ from: string; to: string }>();
  const [orderList, setOrders] = useState<any>();
  useEffect(() => {
    setPagination({ limit: 10, page: 1, order: "asc", order_by: "id" });
  }, [dateFilter]);
  useEffect(() => {
    setPagination({ limit: 10, page: 1, order: "asc", order_by: "id" });
  }, [statusFilter]);
  useEffect(() => {
    console.log(pagination);
    // if (pagination?.page <= 1) {
    getOrders().then((orders) => {
      setOrders(orders.data);
      setServerPagi(orders.pagination);
    });
    // } else {
    //   getOrders().then((orders) => setOrders([...orderList, ...orders]));
    // }
  }, [pagination]);
  const getOrders = useCallback(async () => {
    const res = await orderApi.getAllAdmin(
      pagination,
      dateFilter,
      statusFilter
    );
    return res;
  }, [pagination, dateFilter, statusFilter, orderList]);
  const setFromDateFilter = useCallback(
    (fromDate: string) => {
      setDateFilter({ ...dateFilter, from: fromDate });
    },
    [dateFilter]
  );
  const setStatus = useCallback(
    (status: 1 | 2 | 3 | 0 | -1) => {
      setStatusFilter(status);
    },
    [statusFilter]
  );
  const setToDateFilter = useCallback(
    (toDate: string) => {
      setDateFilter({ ...dateFilter, to: toDate });
    },
    [dateFilter]
  );
  const cancelOrder = useCallback(async (order_id: number) => {
    const result = await orderApi.cancelOrder(order_id);
    if (result) {
      setPagination({ limit: 10, page: 1, order: "desc", order_by: "id" });
      toast.success("Cancel order success!");
    } else toast.error("Cancel order failed!");
  }, []);

  const reorder = useCallback(async (order_id: number) => {
    const result = await orderApi.reorder(order_id);
    if (result) {
      setPagination({ limit: 10, page: 1, order: "desc", order_by: "id" });
      toast.success("Reorder order success!");
    } else toast.error("Reorder order failed!");
  }, []);
  const nextPage = useCallback(() => {
    setPagination({ ...pagination, page: pagination.page + 1 });
  }, [pagination]);
  const prevPage = useCallback(() => {
    setPagination({ ...pagination, page: pagination.page - 1 });
  }, [pagination]);
  return {
    setDateFilter,
    setPagination,
    setStatus,
    dateFilter,
    setFromDateFilter,
    setToDateFilter,
    orderList,
    reorder,
    cancelOrder,
    page: serverPagination?.page,
    limit: serverPagination?.limit,
    total: serverPagination?.total,
    total_pages: serverPagination?.total_pages,
    nextPage,
    prevPage,
  };
};

export default useAdminOrder;
