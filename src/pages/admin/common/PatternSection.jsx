import React, { useState } from "react";
import dynamic from "next/dynamic";
import { MdAdd, MdEdit, MdDelete } from "react-icons/md";
import "react-quill-new/dist/quill.snow.css";
import ReactQuillEditor from "@/common/ReactQuillEditor";

// ✅ Dynamic import ReactQuill (SSR false)
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const PatternSection = ({ setPatterns, patterns, formData, handleQuillChange, handleChange }) => {


  const addPattern = () => {
    setPatterns([...patterns, { image: "", patternName: "", percentage: "", description: "" }]);
  };

  const deletePattern = (index) => {
    setPatterns(patterns.filter((_, i) => i !== index));
  };

  const handlePatternChange = (index, field, value) => {
    const updated = [...patterns];
    updated[index][field] = value;
    setPatterns(updated);
  };

  const handlePatternSubmit = (index) => {
    console.log("Saving pattern:", patterns[index]);
  };

  const openPatternEdit = (item) => {
    console.log("Editing pattern:", item);
  };

  // ReactQuill modules & formats
  const quillModules = {
    toolbar: [
      [{ font: [] }],
      [{ size: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header", "font", "size", "bold", "italic", "underline", "strike", "blockquote",
    "list", "bullet", "indent", "align", "color", "background", "link", "image", "video"
  ];

  return (
    <div>

      <div>
        <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
          Name{" "}
          <span className="text-sm text-gray-500">
            ({formData?.patternname?.length}/50)
          </span>
        </label>
        <input
          type="text"
          name="patternname"
          value={formData?.patternname}
          onChange={(e) => {
            if (e.target.value.length <= 50) handleChange(e);
          }}
          placeholder="Enter name"
          className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
          required
        />
      </div>
      <ReactQuillEditor
        label="Description"
        desc={formData?.patterndescription}
        handleBioChange={(val) => handleQuillChange("patterndescription", val)}
      />
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold text-[#CC2828]">Multiple Pattern</h2>
        <button
          onClick={addPattern}
          className="border border-[#CC2828] bg-[#CC2828] hover:bg-red-700 text-white px-6 py-2 rounded-[10px] text-base transition"
        >
          + Add Pattern
        </button>
      </div>

      {patterns.map((item, index) => (
        <div key={index} className="grid grid-cols-1 gap-4 items-center mb-4 border-b border-gray-200 pb-4">

          {/* Image */}
          <div>
            <label className="block text-[#CC2828] font-medium mb-2">Image</label>
            <input
              type="file"
              disabled={item?._id}
              onChange={(e) => handlePatternChange(index, "image", e.target.files[0])}
              className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2"
            />
          </div>

          {/* Preview */}
          {item.image && (
            <img
              src={typeof item.image === "string" ? item.image : URL.createObjectURL(item.image)}
              alt="preview"
              className="w-20 h-20 object-contain"
            />
          )}

          {/* Pattern Name */}
          <div>
            <label className="block text-[#CC2828] font-medium mb-2">Pattern Name</label>
            <input
              type="text"
              disabled={item?._id}
              value={item.patternName}
              onChange={(e) => handlePatternChange(index, "patternName", e.target.value)}
              placeholder="Enter Pattern Name"
              className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2"
            />
          </div>

          {/* Percentage */}
          <div>
            <label className="block text-[#CC2828] font-medium mb-2">Percentage</label>
            <input
              type="text"
              disabled={item?._id}
              value={item.percentage}
              onChange={(e) => handlePatternChange(index, "percentage", e.target.value)}
              placeholder="Enter % (example: 30%)"
              className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2"
            />
          </div>

          {/* Description */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-[#CC2828] font-medium">Description</label>

              <div className="flex items-center gap-2">
                {item._id ? (
                  <button
                    onClick={() => openPatternEdit(item)}
                    className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                  >
                    <MdEdit />
                  </button>
                ) : (
                  <button
                    onClick={() => handlePatternSubmit(index)}
                    className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                  >
                    <MdAdd />
                  </button>
                )}
                <button
                  onClick={() => deletePattern(index)}
                  className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                >
                  <MdDelete />
                </button>
              </div>
            </div>

            <div className="border border-gray-300 rounded-md">
              <ReactQuill
                value={item.description}
                onChange={(value) => handlePatternChange(index, "description", value)}
                modules={quillModules}
                formats={quillFormats}
                theme="snow"
                className="editor-wrapper"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PatternSection;
