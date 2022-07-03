import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductAPI from "../../../_api/product.api";
import { AdminTextField } from "./AdminTextField";
import { PrimaryButton } from "../../common/button/Button";
import { TextField } from "../../common/form/TextField";
import { useForm } from "react-hook-form";
import useCategory from "../../../_hook/useCategory";
import useModal from "../../../_hook/useModal";
const CustomButton = styled(PrimaryButton)`
  padding: 0.15rem 1rem;
  font-size: 1.2rem;
  border-radius: 5px;
  margin-top: 1rem;
`;

const UpdateCategoryForm: React.FC<{ category: any }> = ({ category }) => {
  const { register, handleSubmit } = useForm();
  const { updateCategory } = useCategory();
  const { setModalState } = useModal();
  return (
    <div className="flex flex-col  justify-center h-full">
      <h3 className="text-2xl font-semibold my-0 mx-auto w-full mb-5 uppercase">
        Update Category
      </h3>
      <form
        onSubmit={handleSubmit((value) => {
          const { newName } = value;
          if (newName && category.id) {
            updateCategory(category?.id, newName);
            setModalState({ componentName: "", isOpen: false, payload: null });
          }
        })}
        className="flex flex-col items-center"
      >
        <AdminTextField>
          <input type="text" disabled placeholder=" " value={category?.name} />
          <label htmlFor=" ">Old name</label>
        </AdminTextField>
        <AdminTextField>
          <input
            className=""
            {...register("newName", { required: true })}
            type="text"
            placeholder=" "
          />
          <label htmlFor=" ">New name</label>
        </AdminTextField>
        <CustomButton>Save</CustomButton>
      </form>
    </div>
  );
};

export default UpdateCategoryForm;
