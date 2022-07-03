import { IconPlus } from "@tabler/icons";
import React from "react";
import CategoryTableRow from "../../../_components/admin/category/CategoryTableRow";
import Table from "../../../_components/admin/common/table/Table";
import SmallModal from "../../../_components/common/modal/SmallModal";
import useCategory from "../../../_hook/useCategory";
import useModal from "../../../_hook/useModal";
// const Modal = React.lazy(
//   () => import("../../../_components/common/modal/Modal")
// );
const AdminCategory = () => {
  const { isOpen, componentName, setModalState } = useModal();
  const { addCategory, updateCategory, categories } = useCategory();
  return (
    <div className="w-full h-full">
      {" "}
      <div className="w-full flex justify-between mb-3">
        <span className="text-xl font-medium ">Category</span>
        <div className="flex">
          <button
            onClick={() =>
              setModalState({
                isOpen: true,
                componentName: "ADD_CATEGORY",
                payload: null,
              })
            }
            className="w-fit px-4 py-2 items-center text-[color:var(--white)] flex gap-1 bg-indigo-500 hover:bg-indigo-600 rounded-md"
          >
            <IconPlus />
            {"Add new category"}
          </button>
        </div>
      </div>
      <Table fields={["id", "name", "slug"]}>
        {categories?.map((category: any, i: number) => (
          <CategoryTableRow
            handleEdit={() =>
              setModalState({
                isOpen: true,
                componentName: "UPDATE_CATEGORY",
                payload: category,
              })
            }
            category={category}
            key={i}
          />
        ))}
      </Table>
    </div>
  );
};

export default AdminCategory;
