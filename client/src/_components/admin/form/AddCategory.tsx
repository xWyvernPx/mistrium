import React from "react";
import useCategory from "../../../_hook/useCategory";
import { AdminTextField } from "./AdminTextField";
import { useForm } from "react-hook-form";
import useModal from "../../../_hook/useModal";
const AddCategory = () => {
  const { addCategory } = useCategory();
  const { setModalState } = useModal();
  const { register, handleSubmit } = useForm({ mode: "onSubmit" });
  return (
    <div className="flex flex-col justify-center h-full">
      <h2 className="text-2xl font-[500] w-full text-center ">
        Add new Category
      </h2>
      <form
        onSubmit={handleSubmit((value) => {
          const { name } = value;
          if (name) {
            addCategory(name);
            setModalState({ componentName: "", isOpen: false, payload: null });
          }
        })}
        className="flex flex-col justify-center items-center"
      >
        <AdminTextField>
          <input type="text" {...register("name")} placeholder=" " />
          <label htmlFor="">Name</label>
        </AdminTextField>
        <button
          type="submit"
          className="w-fit px-4 py-2 items-center text-[color:var(--white)] flex gap-1 bg-indigo-500 hover:bg-indigo-600 rounded-md"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
