import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import ImageKit from "imagekit-javascript";
import "react-quill/dist/quill.snow.css";
import path from "path";
interface EditorProps {
  editable: boolean;
  initValue: string;
  onSave?: Function;
  onChange?: Function;
}

const TextEditor: React.FC<EditorProps> = ({
  editable,
  initValue,
  onSave,
  onChange,
}) => {
  const [value, setValue] = useState(() => initValue);
  const [isChange, setChange] = useState(false);
  const quillObj = useRef<any>();
  useEffect(() => {
    setValue(initValue);
  }, [initValue]);

  const imageHandler = useCallback(async () => {
    const input = document.createElement("input");

    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      var file: any = input.files[0];
      var formData = new FormData();

      formData.append("image", file);

      var fileName = file.name;
      console.log(file, fileName);
      //upload
      const imagekit = new ImageKit({
        urlEndpoint: "https://ik.imagekit.io/flamefoxeswyvernp/",
        authenticationEndpoint: "http://localhost:4321/sign",
        publicKey: "public_6ay+ZjGEHi0n1WzG3MHQpMcOhkM=",
      });

      // imagekit.upload(
      //   {
      //     folder: "/mistrium/product/image",
      //     file: file,
      //     fileName: `${fileName}.jpg`,
      //     tags: ["product"],
      //   },
      //   function (err: any, result: any) {
      //     console.log(arguments);
      //     const url = imagekit.url({
      //       src: result.url,
      //     });
      //     // quillObj.current.getEditor().insertEmbed(range.index, "image", url);
      //   }
      //   );
      const range = quillObj.current.getEditorSelection();
      const localUrl = URL.createObjectURL(file);
      console.log(localUrl);
      quillObj.current.getEditor().insertEmbed(range.index, "image");

      //END
    };
  }, []);
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image"],
        ["clean"],
      ],
      handlers: {
        image: imageHandler,
      },
    },
  };
  return (
    <>
      <ReactQuill
        ref={(el: any) => {
          quillObj.current = el;
        }}
        style={{ width: "100%" }}
        theme="snow"
        readOnly={!editable}
        modules={editable ? modules : { ...modules, toolbar: null }}
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
        onChange={(content) => {
          if (onChange) onChange(content);
          setValue(content);
        }}
      />
      {onSave && (
        <button
          onClick={() => onSave(value)}
          className="w-fit px-4 py-2 items-center text-[color:var(--white)] flex gap-1 bg-indigo-500 hover:bg-indigo-600 rounded-md"
        >
          Save
        </button>
      )}
    </>
  );
};

export default TextEditor;
