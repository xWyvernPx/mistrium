import ImageKit from "imagekit-javascript";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import ReactNumberFormat from "react-number-format";
import useCategory from "../../../_hook/useCategory";
import TextEditor from "../../editor/TextEditor";
import { AdminTextField, MultipleTextField } from "./AdminTextField";

const AddProduct: React.FC<{ handleAdd?: Function }> = ({ handleAdd }) => {
  const { categories } = useCategory();
  const { register, handleSubmit, setValue, control } = useForm({
    mode: "onSubmit",
  });

  useEffect(() => {
    if (register) register("desc");
  }, [register]);
  const handleDescChange = async (value: any) => {
    setValue("desc", value);
  };
  return (
    <div className="w-full h-full flex flex-col items-center">
      <h2 className="">Create New Product</h2>
      <form
        className=""
        onSubmit={handleSubmit((value) => {
          const file = value.thumbnail[0];
          const fileName = file.name;
          const imagekit = new ImageKit({
            urlEndpoint: "https://ik.imagekit.io/flamefoxeswyvernp/",
            authenticationEndpoint: "http://localhost:4321/sign",
            publicKey: "public_S6vyU9FG56dNofgzx0hbbBAZGDs=",
          });

          imagekit.upload(
            {
              folder: "/mistrium/product/image",
              file: file,
              fileName: `${fileName}.jpg`,
              tags: ["product"],
            },

            function (err: any, result: any) {
              console.log(arguments);
              const url = imagekit.url({
                src: result.url,
              });
              value.thumbnail = url;
              console.log(value);
              handleAdd(value);
            }
          );
        })}
      >
        <AdminTextField>
          <input type="text" placeholder=" " {...register("name")} />
          <label htmlFor="">Name</label>
        </AdminTextField>
        <MultipleTextField>
          <AdminTextField>
            <Controller
              name="stock"
              control={control}
              render={({ field }) => (
                <ReactNumberFormat
                  type="text"
                  min={1}
                  placeholder=" "
                  {...field}
                />
              )}
            />
            <label htmlFor="">Stock</label>
          </AdminTextField>

          <AdminTextField>
            <Controller
              name="price"
              control={control}
              render={({ field }) => (
                <ReactNumberFormat
                  type="text"
                  min={0}
                  placeholder=" "
                  {...field}
                />
              )}
            />

            <label htmlFor="">Price</label>
          </AdminTextField>
          <AdminTextField>
            <select name="" id="" {...register("category_id")}>
              {categories?.map((category, i) => (
                <option value={category?.id}>{category?.name}</option>
              ))}
            </select>
          </AdminTextField>
        </MultipleTextField>
        <h5 className="mb-1">Product Description</h5>
        <MultipleTextField>
          <TextEditor
            initValue="<h1>demo<h1>"
            editable={true}
            onSave={null}
            onChange={handleDescChange}
          />
        </MultipleTextField>
        <AdminTextField style={{ marginTop: "4rem" }}>
          <input type="file" name="" id="" {...register("thumbnail")} />
          <label htmlFor="">Thumbnail</label>
        </AdminTextField>
        <button
          type="submit"
          className="mx-auto my-0 w-fit px-4 py-2 items-center text-[color:var(--white)] flex gap-1 bg-indigo-500 hover:bg-indigo-600 rounded-md"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
