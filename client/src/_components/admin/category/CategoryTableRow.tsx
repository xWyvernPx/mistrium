import { IconEdit } from "@tabler/icons";
import React from "react";
interface RowProps {
  category: {
    id: number;
    name: string;
    slug: string;
  };
  handleEdit: Function;
}
const CategoryTableRow: React.FC<RowProps> = ({ category, handleEdit }) => {
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
        <div className="text-left">{category?.id}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{category?.name}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{category?.slug}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <button
          onClick={() => handleEdit()}
          className="text-left text-indigo-500"
        >
          <IconEdit />
        </button>
      </td>
    </tr>
  );
};

export default CategoryTableRow;
