import React, { useState } from "react";
import { MdDelete, MdAdd } from "react-icons/md";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import ReactQuillEditor from "@/common/ReactQuillEditor";

// Dynamic import for Quill editor (SSR safe)
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export default function AddExperince({ setExperinces, Experinces, htitle, formData, handleQuillChange, handleChange }) {

    // Add new advantage
    const addAdvantage = () => {
        setExperinces([...Experinces, { title: "", }]);
    };

    // Handle field change (title or description)
    const handleAdvantageChange = (index, field, value) => {
        const updated = [...Experinces];
        updated[index][field] = value;
        setExperinces(updated);
    };

    // Delete advantage
    const deleteAdvantage = (index) => {
        setExperinces(Experinces.filter((_, i) => i !== index));
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
                    name="experincename"
                    value={formData.experincename}
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
                    desc={formData.experincedesc}
                    handleBioChange={(val) => handleQuillChange("experincedesc", val)}
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
                <h2 className="text-xl font-semibold text-[#CC2828]">{htitle || "Experinces"} Section</h2>
                <button
                    type="button"
                    onClick={addAdvantage}
                    className="border border-[#CC2828] bg-[#CC2828] hover:bg-red-700 text-white px-6 py-2 rounded-[10px] text-base transition"
                >
                    + Add More
                </button>
            </div>

            {/* Experinces List */}
            {Experinces?.map((adv, index) => (
                <div key={index} className="grid grid-cols-1 gap-4 mb-6 border-b border-gray-200 pb-4">

                    {/* Title */}
                    <div>
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
            </div>
                        <input
                            type="text"
                            value={adv.title}
                            onChange={(e) => handleAdvantageChange(index, "title", e.target.value)}
                            placeholder="Enter Title"
                            className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2 focus:outline-none"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
