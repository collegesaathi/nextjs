import React, { useState } from "react";
import { MdDelete, MdAdd } from "react-icons/md";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import ReactQuillEditor from "@/common/ReactQuillEditor";

// Dynamic import for Quill editor (SSR safe)
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export default function Addcareer({ setCareers, Careers, htitle  ,formData ,handleQuillChange  ,handleChange}) {

    // Add new advantage
    const addAdvantage = () => {
        setCareers([...Careers, { title: "", description: "", salary: "" }]);
    };

    // Handle field change (title or description)
    const handleAdvantageChange = (index, field, value) => {
        const updated = [...Careers];
        updated[index][field] = value;
        setCareers(updated);
    };

    // Delete advantage
    const deleteAdvantage = (index) => {
        setCareers(Careers.filter((_, i) => i !== index));
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

             <div>
        <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
          Name{" "}
          <span className="text-sm text-gray-500">
            ({formData.careername?.length}/50)
          </span>
        </label>
        <input
          type="text"
          name="careername"
          value={formData.careername}
          onChange={(e) => {
            if (e.target.value.length <= 50) handleChange(e);
          }}
          placeholder="Enter name"
          className="w-full p-3 rounded-md bg-gray-100 text-gray-700 
                focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
          required
        />
      </div>
      <div className="mt-5 mb-5">
        <ReactQuillEditor
          label="Description"
          desc={formData.careerdesc}
          handleBioChange={(val) => handleQuillChange("careerdesc", val)}
        />
      </div>
            {/* Header + Add Button */}
            <div className="flex justify-between items-center mb-5">
                <h2 className="text-xl font-semibold text-[#CC2828]">{htitle || "Careers"} Section</h2>
                <button
                type="button"
                    onClick={addAdvantage}
                    className="border border-[#CC2828] bg-[#CC2828] hover:bg-red-700 text-white px-6 py-2 rounded-[10px] text-base transition"
                >
                    + Add More
                </button>
            </div>

            {/* Careers List */}
            {Careers?.map((adv, index) => (
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
                            type="button"
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
                    <div>
                        <label className="block text-[#CC2828] font-medium mb-2">Salary</label>
                        <input
                            type="number"
                            value={adv.salary}
                            onChange={(e) => handleAdvantageChange(index, "salary", e.target.value)}
                            placeholder="Enter salary"
                            className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2 focus:outline-none"
                        />
                    </div>

                </div>
            ))}
        </div>
    );
}
