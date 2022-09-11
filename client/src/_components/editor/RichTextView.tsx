import React from "react";
import { Quill } from "react-quill";
import ReactQuill from "react-quill";
const Font = Quill.import("formats/font"); // <<<< ReactQuill exports it
Font.whitelist = ["Geomanist", "mirza", "roboto"]; // allow ONLY these fonts and the default
Quill.register(Font, true);
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
      value={value ? value : ""}
    >
      <div style={{ border: "none" }}></div>
    </ReactQuill>
  );
};

export default RichTextView;
