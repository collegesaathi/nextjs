import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { MdAdd, MdEdit, MdDelete } from "react-icons/md";
import "react-quill-new/dist/quill.snow.css";
import ReactQuillEditor from "@/common/ReactQuillEditor";
import ImagePreview from "@/common/ImagePreview";

// ✅ Dynamic import ReactQuill (SSR false)
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const AddPlacements = ({ setPlacementAdd, PlacementAdd, formData, handleQuillChange, handleChange }) => {
    const addPattern = () => {
        setPlacementAdd([...PlacementAdd, { image: "", name: "", description: "" }]);
    };

    const deletePattern = (index) => {
        setPlacementAdd(PlacementAdd.filter((_, i) => i !== index));
    };

    const handlePatternChange = (index, field, value) => {
        const updated = [...PlacementAdd];
        updated[index][field] = value;
        setPlacementAdd(updated);
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
                </label>
                <input
                    type="text"
                    name="placementname"
                    value={formData?.placementname}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                    placeholder="Enter name"
                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                    required
                />
            </div>
            <ReactQuillEditor
                label="Description"
                desc={formData?.placementdescription}
                handleBioChange={(val) => handleQuillChange("placementdescription", val)}
            />


            <div className="flex justify-between items-center mb-5">
                <h2 className="text-xl font-semibold text-[#CC2828]">Multiple Placement</h2>
            </div>

            {PlacementAdd && PlacementAdd?.map((item, index) => (
                <div key={index} className="grid grid-cols-1 gap-4 items-center mb-4 border-b border-gray-200 pb-4">
                    {/* Image */}
                      <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-[#CC2828] font-medium">Name</label>
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={() => deletePattern(index)}
                                    className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                                >
                                    <MdDelete />
                                </button>
                            </div>
                        </div>
                        <input
                            type="text"
                            disabled={item?._id}
                            value={item.name}
                            onChange={(e) => handlePatternChange(index, "name", e.target.value)}
                            placeholder="Enter Name"
                            className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2"
                        />
                    </div>
                    <div>
                        <label className="block text-[#CC2828] font-medium mb-2">Image</label>
                        <input
                            type="file"
                            disabled={item?._id}
                            onChange={(e) => handlePatternChange(index, "image", e.target.files[0])}
                            className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2"
                        />
                        <img
                            src={
                                typeof item?.image === "string"
                                    ? item.image
                                    : item?.image instanceof File || item?.image instanceof Blob
                                        ? URL.createObjectURL(item.image)
                                        : ""
                            }
                            alt="Preview"
                            className="w-48 h-48 object-cover rounded border"
                        />
                    </div>
                    <div>
                        <label className="block text-[#CC2828] font-medium mb-2">Description</label>
                        <textarea
                            rows={5}
                            type="text"
                            disabled={item?._id}
                            value={item.description}
                            onChange={(e) => handlePatternChange(index, "description", e.target.value)}
                            placeholder="Enter Pattern Desc"
                            className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2"
                        />
                    </div>
                    {/* Description */}
                  



                    {/* Pattern Name */}


                </div>
            ))}

            <div className="flex justify-end items-center mb-5">
                <button
                    type="button"
                    onClick={addPattern}
                    className="border border-[#CC2828] bg-[#CC2828] hover:bg-red-700 text-white px-6 py-2 rounded-[10px] text-base transition"
                >
                    + Add Placement
                </button>
            </div>
        </div>
    );
};

export default AddPlacements;
