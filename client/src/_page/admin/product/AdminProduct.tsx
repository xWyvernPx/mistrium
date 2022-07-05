import { IconFilter, IconPlus } from "@tabler/icons";
import React from "react";
import CategoryTableRow from "../../../_components/admin/category/CategoryTableRow";
import Pagination from "../../../_components/admin/common/table/Pagination";
import Table from "../../../_components/admin/common/table/Table";
import ProductTableRow from "../../../_components/admin/product/ProductTableRow";
import useAdminProduct from "../../../_hook/useAdminProduct";
import useModal from "../../../_hook/useModal";

const AdminProduct = () => {
  const { setModalState } = useModal();
  const {
    products,
    nextPage,
    prevPage,
    page,
    limit,
    total,
    updateProduct,
    toggleActive,
    addNewProduct,
  } = useAdminProduct();
  return (
    <div className="w-full h-full">
      {" "}
      <div className="w-full flex justify-between mb-3">
        <span className="text-xl font-medium ">Products</span>
        <div className="flex gap-3 relative">
          <button
            onClick={() =>
              setModalState({
                isOpen: true,
                componentName: "ADD_PRODUCT",
                payload: addNewProduct,
              })
            }
            className="w-fit px-4 py-2 items-center text-[color:var(--white)] flex gap-1 bg-indigo-500 hover:bg-indigo-600 rounded-md"
          >
            <IconPlus />
            {"Add new product"}
          </button>
          <button className=" p-2 rounded-md border-indigo-300 border-1 border-solid hover:border-indigo-500 transition-colors ">
            <IconFilter />
          </button>
          <div className="absolute py-[1rem] px-[2rem]"></div>
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
          <ProductTableRow
            product={product}
            handleToggle={toggleActive}
            handleUpdate={updateProduct}
          />
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

export default AdminProduct;
