import { IconEye } from "@tabler/icons";
import React, { useEffect, useState } from "react";
import { categoryAPI } from "../../../_api/category.api";
import StatusTag from "../common/tag/StatusTag";
interface RowProps {
  product: {
    id: number;
    name: string;
    desc: string;
    price: number;
    stock: number;
    thumbnail: string;
    category_id: number;
    active: boolean;
  };
}
const ProductTableRow: React.FC<RowProps> = ({ product }) => {
  const [category, setCate] = useState<any>();
  useEffect(() => {
    if (product) {
      categoryAPI
        .getCategoryById(product?.category_id)
        .then((data) => setCate(data));
    }
  }, [product]);

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
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{product?.id}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="flex gap-3 items-center">
          <div className="w-[5rem] aspect-square">
            <img
              className="w-full h-full object-cover object-center"
              src={product?.thumbnail || "https://source.unsplash.com/random"}
              alt=""
            />
          </div>
          <div className="text-left text-xl font-[500]">{product?.name}</div>
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left ">{product?.price}đ</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{product?.stock}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left ">
          <button className="flex gap-1 text-[color:var(--gray)] hover:text-indigo-400">
            overview
            <IconEye />
          </button>
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">
          {product?.active ? (
            <StatusTag color="success" name="Active" />
          ) : (
            <StatusTag color="danger" name="Inactive" />
          )}
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{category?.name || "Unknown"}</div>
      </td>
    </tr>
  );
};

export default ProductTableRow;
