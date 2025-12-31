import React, { useState } from "react";
import dynamic from "next/dynamic";
import { MdAdd, MdEdit, MdDelete } from "react-icons/md";
import "react-quill-new/dist/quill.snow.css";

// ✅ Dynamic import ReactQuill (SSR false)
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const FactAdd = ({ facts, setFacts }) => {

    // Add new fact
    const addFacts = () => {
        setFacts([...facts, { patternName: "", description: "" }]);
    };

    // Delete fact
    const deleteFacts = (index) => {
        setFacts(facts.filter((_, i) => i !== index));
    };

    // Handle changes for patternName or description
    const handleFactsChange = (index, field, value) => {
        const updated = [...facts];
        updated[index][field] = value;
        setFacts(updated);
    };

    // Placeholder save / submit function
    const handlefactsSubmit = (index) => {
        console.log("Saving fact:", facts[index]);
    };

    // Placeholder edit function
    const openfactEdit = (item) => {
        console.log("Edit fact:", item);
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
            <div className="flex justify-between items-center mb-5">
                <h2 className="text-xl font-semibold text-[#CC2828]"> Multiple Key Hightlights </h2>
           
            </div>

            {facts.map((item, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-4 border-b border-gray-200 pb-4">

                    {/* Pattern Name */}
                    <div>
                        <label className="block text-[#CC2828] font-medium mb-2">Key Hightlights Name</label>
                        <input
                            type="text"
                            value={item.patternName}
                            onChange={(e) => handleFactsChange(index, "patternName", e.target.value)}
                            placeholder="Enter Facts Name"
                            className="w-full h-[100px] bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2"
                        />
                    </div>

                    {/* Facts Description */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-[#CC2828] font-medium">Key Hightlights Description</label>

                            <div className="flex items-center gap-2">
                                <button
                                type="button"
                                    onClick={() => handlefactsSubmit(index)}
                                    className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                                    title="Save Fact"
                                >
                                    <MdAdd />
                                </button>
                                <button
                                type="button"
                                    onClick={() => deleteFacts(index)}
                                    className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                                    title="Delete Fact"
                                >
                                    <MdDelete />
                                </button>
                            </div>
                        </div>

                        <div className="border border-gray-300 rounded-md">
                        

                            <textarea
            name="description"
            value={item.description}
            // ✅ Fix: Pass index, field name, and the target value
            onChange={(e) => handleFactsChange(index, "description", e.target.value)}
            rows={4}
            placeholder="Enter Facts Description"
            className="w-full  text-[#727272]  px-4 py-2 focus:outline-none "
        />
                        </div>
                    </div>
                </div>
            ))}

 <div className="flex justify-end items-center ">
          <button
        type="button"
          onClick={addFacts}
          className="border border-[#CC2828] bg-[#CC2828] hover:bg-red-700 text-white px-6 py-2 rounded-[10px] text-base transition"
        >
           + Add Hightlights
        </button>
        </div>
             
        </div>
    );
};

export default FactAdd;
