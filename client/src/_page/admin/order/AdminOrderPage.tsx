import { IconFilter, IconPlus } from "@tabler/icons";
import React, { useState } from "react";
import Pagination from "../../../_components/admin/common/table/Pagination";
import Table from "../../../_components/admin/common/table/Table";
import OrderTableRow from "../../../_components/admin/order/OrderTableRow";
import useOrder from "../../../_hook/useOrder";

const AdminOrderPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const { orderList, setStatus, pagination, setPagination } = useOrder();
  return (
    <div className="w-full h-full">
      <div className="w-full flex justify-between mb-3">
        <span className="text-xl font-medium ">Orders</span>
        <div className="flex">
          <input type="date" name="" id="" />
          <input type="date" name="" id="" />
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            onBlur={() => setFilterOpen(false)}
            className="border-2 border-indigo-400 border-solid py-0 px-2 rounded-sm hover:border-indigo-500 transition-all relative"
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
        page={pagination?.page}
        limit={10}
        total={20}
        handleNext={() =>
          setPagination({ ...pagination, page: pagination?.page + 1 })
        }
        handlePrevious={() =>
          setPagination({ ...pagination, page: pagination?.page - 1 })
        }
      />
    </div>
  );
};

export default AdminOrderPage;
