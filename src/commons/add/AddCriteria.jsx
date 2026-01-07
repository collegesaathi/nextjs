"use client";

import React from "react";
import { MdDelete, MdAdd } from "react-icons/md";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import ImagePreview from "@/common/ImagePreview";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

export default function AddCriteria({ setCriteria, criteria = [] }) {
  // normalize criteria to always be an array
  const safeCriteria = Array.isArray(criteria) ? criteria : [];

  const addCriteria = () => {
    setCriteria((prev) =>
      Array.isArray(prev)
        ? [...prev, { title: "", description: "", image: null, images_alt: "" }]
        : [{ title: "", description: "", image: null, images_alt: "" }]
    );
  };

  const handleChange = (index, field, value) => {
    setCriteria((prev) => {
      const arr = Array.isArray(prev) ? [...prev] : [];
      arr[index] = { ...(arr[index] || {}), [field]: value };
      return arr;
    });
  };

  const deleteItem = (index) => {
    setCriteria((prev) =>
      Array.isArray(prev) ? prev.filter((_, i) => i !== index) : []
    );
  };

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ color: [] }, { background: [] }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "color",
    "background",
    "link",
    "image",
  ];

  return (
    <div>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-red-600">
          Eligibility Criteria
        </h2>
        <button
          type="button"
          onClick={addCriteria}
          className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <MdAdd className="mr-1" /> Add New
        </button>
      </div>

      {safeCriteria.map((item, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 mb-6 bg-gray-50 shadow-sm"
        >
          {/* Title */}
          <div className="mb-3">
            <label className="text-red-600 font-medium">Title</label>
            <input
              type="text"
              value={item.title || ""}
              onChange={(e) => handleChange(index, "title", e.target.value)}
              className="w-full mt-1 p-2 border rounded"
              placeholder="Qualification / Grades / Work Experience"
            />
          </div>

          {/* Images Alt */}
          <div className="mb-3">
            <label className="text-red-600 font-medium">Images Alt</label>
            <input
              type="text"
              value={item.images_alt || ""}
              onChange={(e) => handleChange(index, "images_alt", e.target.value)}
              className="w-full mt-1 p-2 border rounded"
              placeholder="Images Alt"
            />
          </div>

          {/* Image */}
          <div className="mb-3">
            <label className="text-red-600 font-medium">Image</label>
            <input
              type="file"
              className="w-full mt-1"
              onChange={(e) =>
                handleChange(
                  index,
                  "image",
                  e.target.files && e.target.files[0] ? e.target.files[0] : null
                )
              }
            />
            <ImagePreview image={item.image} />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label className="text-red-600 font-medium">Description</label>
            <ReactQuill
              theme="snow"
              value={item.description || ""}
              onChange={(value) => handleChange(index, "description", value)}
              modules={quillModules}
              formats={quillFormats}
              className="bg-white"
            />
          </div>

          {/* Delete */}
          <div className="text-right">
            <button
              type="button"
              onClick={() => deleteItem(index)}
              className="bg-red-500 text-white px-3 py-1 rounded flex items-center"
            >
              <MdDelete className="mr-1" /> Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
