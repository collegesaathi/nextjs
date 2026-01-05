"use client";

import dynamic from "next/dynamic";
import React from "react";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    ["code-block"],
    ["link", "image"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "list",
  "bullet",
  "script",
  "code-block",
  "link",
  "image",
];

const ReactQuillEditor = ({ label, desc = "", handleBioChange }) => {
  return (
    <div className="mb-3 mt-3">
      <label className="block text-[#FF1B1B] font-semibold mb-2">
        {label}
      </label>

      <div className="border border-gray-300 bg-white rounded-md">
        <ReactQuill
          theme="snow"
          value={desc || ""}
          onChange={handleBioChange}
          modules={modules}
          formats={formats}
        />
      </div>
    </div>
  );
};

export default ReactQuillEditor;
