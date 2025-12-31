import React, { useState } from "react";
import { MdDelete, MdAdd } from "react-icons/md";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import ReactQuillEditor from "@/common/ReactQuillEditor";

// Dynamic import for Quill editor (SSR safe)
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export default function AddPurpuse({ setchoose, choose, htitle, formData, handleQuillChange, handleChange }) {

    // Add new advantage
    const addAdvantage = () => {
        setchoose([...choose, { title: "", image:""}]);
    };

    // Handle field change (title or description)
    const handleAdvantageChange = (index, field, value) => {
        const updated = [...choose];
        updated[index][field] = value;
        setchoose(updated);
    };

    // Delete advantage
    const deleteAdvantage = (index) => {
        setchoose(choose.filter((_, i) => i !== index));
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
                </label>
                <input
                    type="text"
                    name="purpusename"
                    value={formData.purpusename}
                    onChange={(e) => {
                        handleChange(e);
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
                    desc={formData.purpsedesc}
                    handleBioChange={(val) => handleQuillChange("purpsedesc", val)}
                />
            </div>

            <div className="mt-5 mb-5">
                <ReactQuillEditor
                    label="Notes"
                    desc={formData.experincenotes}
                    handleBioChange={(val) => handleQuillChange("experincenotes", val)}
                />
            </div>
            {/* Header + Add Button */}
            <div className="flex justify-between items-center mb-5">
                <h2 className="text-xl font-semibold text-[#CC2828]">Why Choose Section</h2>
                <button
                    type="button"
                    onClick={addAdvantage}
                    className="border border-[#CC2828] bg-[#CC2828] hover:bg-red-700 text-white px-6 py-2 rounded-[10px] text-base transition"
                >
                    + Add More
                </button>
            </div>

            {/* choose List */}
            {choose?.map((adv, index) => (
                <div key={index} className="grid grid-cols-1 gap-4 mb-6 border-b border-gray-200 pb-4">
                     <div className="flex items-center justify-between gap-2">
                        <label className="block text-[#CC2828] font-medium mb-2">Title</label>
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={() => deleteAdvantage(index)}
                                className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                            >
                                <MdDelete />
                            </button>
                        </div>
                        <input
                            type="text"
                            value={adv.title}
                            onChange={(e) => handleAdvantageChange(index, "title", e.target.value)}
                            placeholder="Enter Title"
                            className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2 focus:outline-none"
                        />
                          <input
                            type="file"
                            value={adv.image}
                            onChange={(e) => handleAdvantageChange(index, "image", e.target.value)}
                            placeholder="Enter Images"
                            className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2 focus:outline-none"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
