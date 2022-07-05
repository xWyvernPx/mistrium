import { IconDots, IconEye } from "@tabler/icons";
import React, { useEffect, useState } from "react";
import { categoryAPI } from "../../../_api/category.api";
import useModal from "../../../_hook/useModal";
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
  handleToggle?: Function;
  handleUpdate?: Function;
}
const ProductTableRow: React.FC<RowProps> = ({
  product,
  handleToggle,
  handleUpdate,
}) => {
  const [category, setCate] = useState<any>();
  const { setModalState } = useModal();
  useEffect(() => {
    if (product) {
      categoryAPI
        .getCategoryById(product?.category_id)
        .then((data) => setCate(data));
    }
  }, [product]);
  const [isOpen, setOpen] = useState<boolean>(false);
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
          <button
            onClick={() =>
              setModalState({
                componentName: "PREVIEW_PRODUCT_DESCRIPTION",
                isOpen: true,
                payload: product?.desc,
              })
            }
            className="flex gap-1 text-[color:var(--gray)] items-center hover:text-indigo-400"
          >
            preview
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
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left relative">
          <button
            onClick={() => setOpen(!isOpen)}
            onBlur={() => setOpen(false)}
          >
            <IconDots />
            {isOpen && (
              <div className="absolute z-20 py-[1rem] px-[2rem] left-0 bottom-0 drop-shadow-md bg-[color:var(--white)] -translate-x-full translate-y-full rounded-[5px] flex  flex-col">
                <span
                  className="cursor-pointer uppercase text-indigo-400 hover:text-indigo-500"
                  onClick={() => {
                    console.log("click");
                    setModalState({
                      componentName: "UPDATE_PRODUCT",
                      isOpen: true,
                      payload: { product, handleUpdate },
                    });
                  }}
                >
                  Update
                </span>
                <span
                  className="cursor-pointer uppercase text-indigo-400 hover:text-indigo-500"
                  onClick={() => {
                    handleToggle(product?.id);
                  }}
                >
                  {product?.active ? "Inactive" : "Active"}
                </span>
              </div>
            )}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductTableRow;
