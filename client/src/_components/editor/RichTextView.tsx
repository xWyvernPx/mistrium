import React from "react";
import ReactQuill from "react-quill";

const RichTextView: React.FC<{ value: string }> = ({ value }) => {
  return (
    <ReactQuill
      style={{ width: "100%", border: "none", padding: "1rem" }}
      theme="snow"
      readOnly
      modules={{ toolbar: null }}
      formats={[
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
      ]}
      value={value}
    >
      <div style={{ border: "none" }}></div>
    </ReactQuill>
  );
};

export default RichTextView;
