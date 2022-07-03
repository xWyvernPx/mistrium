import { IconDots } from "@tabler/icons";
import React, { useState } from "react";
import StatusTag from "../../../_components/admin/common/tag/StatusTag";
interface Account {
  account: {
    email: string;
    avatar: string;
    account_detail: {
      name: string;
      phone: string;
      gender: string;
    };
    account_charge: {
      customer_id: string;
    };
    active: boolean;
    created_at: Date;
  };
}

const AccountTableRow: React.FC<Account> = ({ account }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <tr className="">
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        <div className="flex items-center">
          <label className="inline-flex">
            <span className="sr-only">Select</span>
            <input
              className="table-item form-checkbox"
              type="checkbox"
              // @click="uncheckParent"
            />
          </label>
        </div>
      </td>
      {/* <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="flex items-center relative">
          <button>
            <svg
              className="w-4 h-4 shrink-0 fill-current text-yellow-500"
              viewBox="0 0 16 16"
            >
              <path d="M8 0L6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934h-6L8 0z" />
            </svg>
          </button>
        </div>
      </td> */}
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="flex items-center">
          <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
            <img
              className="rounded-full h-full aspect-square m-0"
              src={account?.avatar || "https://source.unsplash.com/random"}
              alt="User 07"
            />
          </div>
          <div className="font-medium text-gray-800">
            {account?.account_detail?.name}
          </div>
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{account?.email}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{account?.account_detail?.phone}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-center">
          {account?.account_detail?.gender ? "Male" : "Female"}
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left font-medium text-green-500">
          {account?.account_charge?.customer_id}
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left font-medium text-green-500">
          {account?.created_at?.toISOString()}
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left font-medium text-green-500">
          {/* TODO : status tag */}
          {account?.active ? (
            <StatusTag color={"success"} name={"Active"} />
          ) : (
            <StatusTag color={"danger"} name="Inactive" />
          )}
        </div>
      </td>

      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-fit relative ">
        <button
          className="text-gray-400 hover:text-gray-500 rounded-full w-6 "
          onClick={() => setOpen(!isOpen)}
          onBlur={() => setOpen(false)}
        >
          <IconDots />
          {isOpen && (
            <div className="absolute bottom-0 right-0 translate-x-1/2 bg-white py-2 px-4 drop-shadow-lg rounded-md">
              <span className="hover:text-indigo-500 transition-colors">
                {account?.active ? "Block" : "Unblock"}
              </span>
            </div>
          )}
        </button>
      </td>
    </tr>
  );
};

export default AccountTableRow;
