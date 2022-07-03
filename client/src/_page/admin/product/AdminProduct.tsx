import { IconPlus } from "@tabler/icons";
import React from "react";
import CategoryTableRow from "../../../_components/admin/category/CategoryTableRow";
import Table from "../../../_components/admin/common/table/Table";
import ProductTableRow from "../../../_components/admin/product/ProductTableRow";
import useAdminProduct from "../../../_hook/useAdminProduct";
import useModal from "../../../_hook/useModal";

const AdminProduct = () => {
  const { setModalState } = useModal();
  const { products } = useAdminProduct();
  return (
    <div className="w-full h-full">
      {" "}
      <div className="w-full flex justify-between mb-3">
        <span className="text-xl font-medium ">Products</span>
        <div className="flex">
          <button
            // onClick={() =>
            //   setModalState({
            //     isOpen: true,
            //     componentName: "ADD_CATEGORY",
            //     payload: null,
            //   })
            // }
            className="w-fit px-4 py-2 items-center text-[color:var(--white)] flex gap-1 bg-indigo-500 hover:bg-indigo-600 rounded-md"
          >
            <IconPlus />
            {"Add new product"}
          </button>
        </div>
      </div>
      <Table
        fields={[
          "id",
          "name",
          "price",
          "stock",
          "description",
          "status",
          "category",
        ]}
      >
        {products?.map((product, i) => (
          <ProductTableRow product={product} />
        ))}
      </Table>
    </div>
  );
};

export default AdminProduct;
