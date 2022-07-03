import { IconPlus } from "@tabler/icons";
import React from "react";
import styled from "styled-components";
import Pagination from "../../../_components/admin/common/table/Pagination";
import Table from "../../../_components/admin/common/table/Table";
import useAuth from "../../../_hook/useAuth";
import AccountTableRow from "./AccountTableRow";

const AdminAccount = () => {
  const { user } = useAuth();
  return (
    <div className="w-full h-full">
      {" "}
      <div className="w-full flex justify-between mb-3">
        <span className="text-xl font-medium ">Customer</span>
        <div className="flex">
          <button className="w-fit px-4 py-2 items-center text-[color:var(--white)] flex gap-1 bg-indigo-500 hover:bg-indigo-600 rounded-md">
            <IconPlus />
            {"Add new customer"}
          </button>
        </div>
      </div>
      <Table
        fields={[
          "Name",
          "Email",
          "Phone",
          "Gender",
          "Customer Id",
          "Date Join",
          "Status",
          "",
        ]}
      >
        <AccountTableRow account={user}></AccountTableRow>
      </Table>
      <Pagination
        page={10}
        limit={10}
        total={99}
        handleNext={() => {}}
        handlePrevious={() => {}}
      />
    </div>
  );
};

export default AdminAccount;
