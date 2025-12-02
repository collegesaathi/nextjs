import React, { useState } from "react";
import { MdDelete, MdAdd } from "react-icons/md";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

// Dynamic import for Quill editor (SSR safe)
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export default function AdvantagesSection({setAdvantages ,advantages }) {

  // Add new advantage
  const addAdvantage = () => {
    setAdvantages([...advantages, { title: "", description: "" }]);
  };

  // Handle field change (title or description)
  const handleAdvantageChange = (index, field, value) => {
    const updated = [...advantages];
    updated[index][field] = value;
    setAdvantages(updated);
  };

  // Delete advantage
  const deleteAdvantage = (index) => {
    setAdvantages(advantages.filter((_, i) => i !== index));
  };

  // Save advantage (example)
  const saveAdvantage = (index) => {
    console.log("Saving advantage:", advantages[index]);
    // Add API call here
  };

  // Quill modules & formats
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
      {/* Header + Add Button */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold text-[#CC2828]">Advantages Section</h2>
        <button
          onClick={addAdvantage}
          className="border border-[#CC2828] bg-[#CC2828] hover:bg-red-700 text-white px-6 py-2 rounded-[10px] text-base transition"
        >
          + Add Advantage
        </button>
      </div>

      {/* Advantages List */}
      {advantages.map((adv, index) => (
        <div key={index} className="grid grid-cols-1 gap-4 mb-6 border-b border-gray-200 pb-4">

          {/* Title */}
          <div>
            <label className="block text-[#CC2828] font-medium mb-2">Title</label>
            <input
              type="text"
              value={adv.title}
              onChange={(e) => handleAdvantageChange(index, "title", e.target.value)}
              placeholder="Enter Title"
              className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2 focus:outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-[#CC2828] font-medium">Description</label>
              <button
                onClick={() => deleteAdvantage(index)}
                className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                title="Delete Advantage"
              >
                <MdDelete />
              </button>
            </div>

            <div className="border border-gray-300 rounded-md">
              <ReactQuill
                value={adv.description}
                onChange={(value) => handleAdvantageChange(index, "description", value)}
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
}
