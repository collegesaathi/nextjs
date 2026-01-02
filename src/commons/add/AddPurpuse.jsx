import React, { useState } from "react";
import { MdDelete, MdAdd } from "react-icons/md";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import ReactQuillEditor from "@/common/ReactQuillEditor";

// Dynamic import for Quill editor (SSR safe)
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export default function AddPurpuse({ setchoose, choose, htitle, formData, handleQuillChange, handleChange, setpurpuse, purpuse }) {

    // Add new advantage
    const addAdvantage = () => {
        setchoose([...choose, { title: "", image: "" }]);
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



    const addpurpuse = () => {
        setpurpuse([...purpuse, { title: "", image: "" }]);
    };

    // Handle field change (title or description)
    const handlePurpuseChange = (index, field, value) => {
        const updated = [...purpuse];
        updated[index][field] = value;
        setpurpuse(updated);
    };

    // Delete advantage
    const deletePurpuse = (index) => {
        setpurpuse(purpuse.filter((_, i) => i !== index));
    };



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
                <div
                    key={index}
                    className="grid grid-cols-12 gap-4 items-center mb-6 border-b border-gray-200 pb-4"
                >
                    {/* Title */}
                    <div className="col-span-12 md:col-span-5">
                        <label className="block text-[#CC2828] font-medium mb-2">
                            Title
                        </label>
                        <input
                            type="text"
                            value={adv.title}
                            onChange={(e) =>
                                handleAdvantageChange(index, "title", e.target.value)
                            }
                            placeholder="Enter Title"
                            className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2 focus:outline-none"
                        />
                    </div>

                    {/* Image Upload */}
                    <div className="col-span-12 md:col-span-4">
                        <label className="block text-[#CC2828] font-medium mb-2">
                            Image
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                                handleAdvantageChange(index, "image", e.target.files[0])
                            }
                            className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2 focus:outline-none"
                        />
                    </div>

                    {/* Image Preview */}
                    <div className="col-span-8 md:col-span-2 flex items-center justify-center">
                        {adv.image && (
                            <img
                                src={
                                    typeof adv.image === "string"
                                        ? adv.image
                                        : URL.createObjectURL(adv.image)
                                }
                                alt="Preview"
                                className="h-14 w-14 object-cover rounded-lg border"
                            />
                        )}
                    </div>

                    {/* Delete Button */}
                    <div className="col-span-4 md:col-span-1 flex justify-end">
                        <button
                            type="button"
                            onClick={() => deleteAdvantage(index)}
                            className="bg-red-500 text-white rounded-full p-2 hover:bg-red-700"
                        >
                            <MdDelete size={18} />
                        </button>
                    </div>
                </div>
            ))}



            {/* Header + Add Button */}
            <div className="flex justify-between items-center mb-5">
                <h2 className="text-xl font-semibold text-[#CC2828]">Purpuse Section</h2>
                <button
                    type="button"
                    onClick={addpurpuse}
                    className="border border-[#CC2828] bg-[#CC2828] hover:bg-red-700 text-white px-6 py-2 rounded-[10px] text-base transition"
                >
                    + Add More
                </button>
            </div>

            {/* choose List */}
            {purpuse?.map((adv, index) => (
                <div
                    key={index}
                    className="grid grid-cols-12 gap-4 items-center mb-6 border-b border-gray-200 pb-4"
                >
                    {/* Title */}
                    <div className="col-span-12 md:col-span-5">
                        <label className="block text-[#CC2828] font-medium mb-2">
                            Title
                        </label>
                        <input
                            type="text"
                            value={adv.name}
                            onChange={(e) =>
                                handlePurpuseChange(index, "name", e.target.value)
                            }
                            placeholder="Enter Title"
                            className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2 focus:outline-none"
                        />
                    </div>

                    <div className="col-span-12 md:col-span-5">
                        <label className="block text-[#CC2828] font-medium mb-2">
                            Desc
                        </label>
                        <input
                            type="text"
                            value={adv.desc}
                            onChange={(e) =>
                                handlePurpuseChange(index, "desc", e.target.value)
                            }
                            placeholder="Enter Desc."
                            className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2 focus:outline-none"
                        />
                    </div>

                    {/* Image Upload */}
                    <div className="col-span-12 md:col-span-4">
                        <label className="block text-[#CC2828] font-medium mb-2">
                            Image
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                                handlePurpuseChange(index, "image", e.target.files[0])
                            }
                            className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2 focus:outline-none"
                        />
                    </div>

                    {/* Image Preview */}
                    <div className="col-span-8 md:col-span-2 flex items-center justify-center">
                        {adv.image && (
                            <img
                                src={
                                    typeof adv.image === "string"
                                        ? adv.image
                                        : URL.createObjectURL(adv.image)
                                }
                                alt="Preview"
                                className="h-14 w-14 object-cover rounded-lg border"
                            />
                        )}
                    </div>

                    {/* Delete Button */}
                    <div className="col-span-4 md:col-span-1 flex justify-end">
                        <button
                            type="button"
                            onClick={() => deletePurpuse(index)}
                            className="bg-red-500 text-white rounded-full p-2 hover:bg-red-700"
                        >
                            <MdDelete size={18} />
                        </button>
                    </div>
                </div>
            ))}


        </div>
    );
}
