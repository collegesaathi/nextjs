import React, { useState } from "react";
import { MdDelete, MdAdd } from "react-icons/md";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import ReactQuillEditor from "@/common/ReactQuillEditor";

// Dynamic import for Quill editor (SSR safe)
const ReactQuill = dynamic(() => import("react-quill"), {
    ssr: false,
});

export default function AddSkills({ setSkills, skills, htitle, handleChange, formData, handleQuillChange }) {

    // Add new advantage
    const addAdvantage = () => {
        setSkills([...skills, { title: "" }]);
    };

    // Handle field change (title or description)
    const handleAdvantageChange = (index, field, value) => {
        const updated = [...skills];
        updated[index][field] = value;
        setSkills(updated);
    };

    // Delete advantage
    const deleteAdvantage = (index) => {
        setSkills(skills.filter((_, i) => i !== index));
    };

    return (
        <div>

            {/* MAIN ADVANTAGE NAME */}
            <div>
                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                    Name{" "}
                </label>
                <input
                    type="text"
                    name="skillname"
                    value={formData.skillname}
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
                    desc={formData.skilldesc}
                    handleBioChange={(val) => handleQuillChange("skilldesc", val)}
                />
            </div>
            {/* Header + Add Button */}
            <div className="flex justify-between items-center mb-5">
                <h2 className="text-xl font-semibold text-[#CC2828]">{htitle || "skills"} Section</h2>
                <button
                    type="button"
                    onClick={addAdvantage}
                    className="border border-[#CC2828] bg-[#CC2828] hover:bg-red-700 text-white px-6 py-2 rounded-[10px] text-base transition"
                >
                    + Add More
                </button>
            </div>

            {/* skills List */}
            {skills.map((adv, index) => (
                <div key={index} className="grid grid-cols-1 gap-4 mb-6 border-b border-gray-200 pb-4">
                    <button
                        type="button"
                        onClick={() => deleteAdvantage(index)}
                        className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                        title="Delete Fact"
                    >
                        <MdDelete />
                    </button>
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
                </div>
            ))}
        </div>
    );
}
