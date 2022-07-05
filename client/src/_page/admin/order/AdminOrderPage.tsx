import { IconFilter, IconPlus } from "@tabler/icons";
import React, { useState } from "react";
import Pagination from "../../../_components/admin/common/table/Pagination";
import Table from "../../../_components/admin/common/table/Table";
import { AdminTextField } from "../../../_components/admin/form/AdminTextField";
import OrderTableRow from "../../../_components/admin/order/OrderTableRow";
import useAdminOrder from "../../../_hook/useAdminOrder";
import useOrder from "../../../_hook/useOrder";

const AdminOrderPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const {
    orderList,
    setStatus,
    page,
    limit,
    total,
    nextPage,
    prevPage,
    setPagination,
    setFromDateFilter,
    setToDateFilter,
  } = useAdminOrder();
  return (
    <div className="w-full h-full">
      <div className="w-full flex justify-between mb-3">
        <span className="text-xl font-medium ">Orders</span>
        <div className="flex gap-3">
          <AdminTextField width="100%">
            <input
              type="date"
              onChange={(e) => {
                const dateValue = e.target.value.split("-").reverse();
                const temp = dateValue[1];
                dateValue[1] = dateValue[0];
                dateValue[0] = temp;
                setFromDateFilter(dateValue.join("/"));
              }}
              placeholder=" "
            />
            <label htmlFor="">From</label>
          </AdminTextField>
          <AdminTextField width="100%">
            <input
              type="date"
              onChange={(e) => {
                const dateValue = e.target.value.split("-").reverse();
                const temp = dateValue[1];
                dateValue[1] = dateValue[0];
                dateValue[0] = temp;
                setToDateFilter(dateValue.join("/"));
              }}
              placeholder=" "
            />
            <label htmlFor=""> To</label>
          </AdminTextField>
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            onBlur={() => setFilterOpen(false)}
            className="border-2 border-indigo-400 basis-[fit-content] grow-0 shrink-0 border-solid py-2 px-2 self-center rounded-[5px] h-fit hover:border-indigo-500 transition-all relative"
          >
            <IconFilter />
            {filterOpen && (
              <div
                className="absolute left-0 bottom-0
            translate-y-full -translate-x-full px-5
            py-2 bg-[color:var(--white)] rounded-sm drop-shadow-lg flex flex-col gap-3"
              >
                <span
                  onClick={() => setStatus(-1)}
                  className="uppercase text-xs font-semibold hover:text-indigo-600"
                >
                  All
                </span>
                <span
                  onClick={() => setStatus(1)}
                  className="uppercase text-xs font-semibold hover:text-indigo-600"
                >
                  Process
                </span>
                <span
                  onClick={() => setStatus(0)}
                  className="uppercase text-xs font-semibold hover:text-indigo-600"
                >
                  Cancel
                </span>
                <span
                  onClick={() => setStatus(3)}
                  className="uppercase text-xs font-semibold hover:text-indigo-600"
                >
                  Done
                </span>
              </div>
            )}
          </button>
        </div>
      </div>
      <Table
        fields={[
          "id",
          "name",
          "phone",
          "process",
          "delivery type",
          "created_at",
          "total",
          "payment intent id",
        ]}
      >
        {orderList?.map((order: any, i: number) => (
          <OrderTableRow order={order} />
        ))}
      </Table>
      <Pagination
        page={page}
        limit={limit}
        total={total}
        handleNext={nextPage}
        handlePrevious={prevPage}
      />
    </div>
  );
};

export default AdminOrderPage;
