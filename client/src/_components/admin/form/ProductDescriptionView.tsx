import React from "react";
import useModal from "../../../_hook/useModal";
import RichTextView from "../../editor/RichTextView";
import TextEditor from "../../editor/TextEditor";

const ProductDescriptionView = () => {
  const { payload } = useModal();
  return (
    <div className="grid place-items-center h-full w-full">
      <RichTextView value={payload || ""} />
    </div>
  );
};

export default ProductDescriptionView;
