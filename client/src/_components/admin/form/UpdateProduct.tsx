import ImageKit from "imagekit-javascript";
import React, { useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import useAdminProduct from "../../../_hook/useAdminProduct";
import useCategory from "../../../_hook/useCategory";
import TextEditor from "../../editor/TextEditor";
import { AdminTextField, MultipleTextField } from "./AdminTextField";
import ReactNumberFormat from "react-number-format";
const UpdateProduct: React.FC<{
  payload: { product?: any; handleUpdate?: Function };
}> = ({ payload: { product, handleUpdate } }) => {
  const { categories } = useCategory();
  const { register, handleSubmit, setValue, control } = useForm({
    mode: "onSubmit",
  });
  const [isChange, setChange] = useState(false);

  useEffect(() => {
    if (setValue && product) {
      setValue("thumbnail", product?.thumbnail);
      setValue("price", product?.price);
      setValue("stock", product?.stock);
      setValue("category_id", product?.category_id);
      setValue("name", product?.name);
      setValue("id", product?.id);
      setValue("desc", product?.desc);
    }
  }, [setValue, product]);
  useEffect(() => {
    if (register) {
      register("id");
      register("desc");
    }
  }, [register]);
  const handleDescChange = async (value: any) => {
    if (value === product?.desc) setChange(false);
    else setChange(true);
    setValue("desc", value);
  };
  return (
    <div className="w-full h-full flex flex-col items-center">
      <h2 className="">Update Product</h2>
      <form
        className=""
        onSubmit={handleSubmit((value) => {
          if (typeof value.thumbnail == "string") {
            handleUpdate(value);
          } else {
            const file = value.thumbnail[0];
            const fileName = file.name;
            const imagekit = new ImageKit({
              urlEndpoint: "https://ik.imagekit.io/flamefoxeswyvernp/",
              authenticationEndpoint: "http://localhost:4321/sign",
              publicKey: "public_6ay+ZjGEHi0n1WzG3MHQpMcOhkM=",
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
                handleUpdate(value);
              }
            );
          }
        })}
      >
        <AdminTextField>
          <input
            type="text"
            placeholder=" "
            {...register("name", {
              onChange: (e) => {
                if (e.target.value === product?.name) setChange(false);
                else setChange(true);
              },
            })}
          />
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
                  onChange={(e: any) => {
                    if (e.target.value == product?.stock) setChange(false);
                    else setChange(true);

                    field.onChange(e);
                  }}
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
                  onChange={(e: any) => {
                    if (e.target.value == product?.price) setChange(false);
                    else setChange(true);
                    field.onChange(e);
                  }}
                />
              )}
            />

            <label htmlFor="">Price</label>
          </AdminTextField>
          <AdminTextField>
            <select
              name=""
              id=""
              {...register("category_id", {
                onChange: (e) => {
                  if (e.target.value == product?.category_id) setChange(false);
                  else setChange(true);
                },
              })}
            >
              {categories?.map((category, i) => (
                <option
                  value={category?.id}
                  selected={product?.category_id === category.id}
                >
                  {category?.name}
                </option>
              ))}
            </select>
          </AdminTextField>
        </MultipleTextField>
        <h5 className="mb-1">Product Description</h5>
        <MultipleTextField>
          <TextEditor
            initValue={product?.desc}
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
          disabled={!isChange}
          className="mx-auto my-0 w-fit px-4 py-2 items-center text-[color:var(--white)] flex gap-1 bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-200 rounded-md"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
