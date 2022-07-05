import { IconPlus } from "@tabler/icons";
import React, { useCallback } from "react";
import styled from "styled-components";
import Pagination from "../../../_components/admin/common/table/Pagination";
import Table from "../../../_components/admin/common/table/Table";
import { AdminTextField } from "../../../_components/admin/form/AdminTextField";
import useAdminAccount from "../../../_hook/useAdminAccount";
import useAuth from "../../../_hook/useAuth";
import AccountTableRow from "./AccountTableRow";
import { debounce } from "lodash";

const AdminAccount = () => {
  const {
    accounts,
    toggleActive,
    limit,
    page,
    total,
    nextPage,
    prevPage,
    setTerm,
  } = useAdminAccount();
  const debounceSetTerm = useCallback(
    debounce((term) => {
      setTerm(term);
    }, 300),
    []
  );

  return (
    <div className="w-full h-full">
      {" "}
      <div className="w-full flex justify-between mb-3">
        <span className="text-xl font-medium ">Customer</span>
        <div className="flex gap-3">
          <AdminTextField>
            <input
              type="text"
              placeholder=" "
              onChange={(e) => debounceSetTerm(e.target.value)}
            />
            <label htmlFor="">Search by email</label>
          </AdminTextField>
          <button className="w-fit h-fit px-4 py-2 items-center text-[color:var(--white)] flex gap-1 bg-indigo-500 hover:bg-indigo-600 rounded-md">
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
        {accounts?.map((account, i) => (
          <AccountTableRow
            key={i}
            account={account}
            functions={{ toggleActive: () => toggleActive(account.id) }}
          ></AccountTableRow>
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

export default AdminAccount;
