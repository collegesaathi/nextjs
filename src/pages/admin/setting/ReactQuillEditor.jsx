"use client";

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

/* ✅ DEFINE ONCE */
const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
];

export default function ReactQuillEditor({
  label,
  desc = "",
  handleBioChange,
}) {
  return (
    <div className="mb-3 mt-3">
      <label className="block text-[#FF1B1B] font-semibold mb-2">
        {label}
      </label>
      <ReactQuill
        theme="snow"
        value={desc || ""}   
        onChange={handleBioChange}
        modules={modules}
        formats={formats}
      />
    </div>
  );
}
