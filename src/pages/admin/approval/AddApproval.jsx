import React, { useState } from "react";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";
import Listing from "../../Api/Listing";
import toast from "react-hot-toast";
import Popup from "@/common/Popup";

export default function AddApproval({ IsEdit, Id, fetch, item }) {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen);
    const handleClose = () => setIsOpen(false);

    const [preview, setPreview] = useState(item?.image || "");

    const [formData, setFormData] = useState({
        title: item?.title || "",
        image: null,
        id : item?.id
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file || !file.type.startsWith("image/")) {
            toast.error("Upload a valid image!");
            return;
        }

        setFormData((prev) => ({
            ...prev,
            image: file,
        }));

        setPreview(URL.createObjectURL(file));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // ⭐ Add & Edit API (same code)
    const onSubmit = async () => {
        try {
            setLoading(true);
            const main = new Listing();
            const data = new FormData();
            data.append("title", formData.title);
            data.append("id", item.id);
            if (formData.image) data.append("image", formData.image);
            let res;
            if (IsEdit) {
                res = await main.UpdateApprovals(data);
            } else {
                res = await main.AddApprovals(data);
            }
            if (res?.data) {
                toast.success(res.data.message);
                fetch(); // refresh parent table
                handleClose();
            } else {
                toast.error(res?.data?.message || "Something went wrong.");
            }
        } catch (error) {
            console.error("Approval Error:", error);
            toast.error(error?.response?.data?.message || "Failed!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col">
            {/* Button */}
            <button
                onClick={toggleModal}
                className="cursor-pointer text-white h-[30px] w-[30px] bg-[#FF1B1B] hover:bg-opacity-80 rounded inline-flex items-center justify-center"
            >
                {IsEdit ? <MdEdit size={20} /> : <MdAdd size={20} />}
            </button>

            {/* Modal */}
            {isOpen && (
                <Popup
                    isOpen={isOpen}
                    onClose={handleClose}
                    size={"max-w-[540px]"}
                    title={IsEdit ? "Edit Approval" : "Add Approval"}
                >
                    {/* Title */}
                    <div className="mb-5 md:mt-[23px]">
                        <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                            Title <span className="text-sm text-gray-500">({formData.title?.length}/50)</span>
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={(e) => {
                                if (e.target.value.length <= 50) handleChange(e);
                            }}
                            placeholder="Enter Title"
                            className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                            required
                        />
                    </div>

                    {/* Image Upload */}
                    <div className="mb-5">
                        <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full p-2 bg-gray-100 rounded-md cursor-pointer text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                        />
                    </div>

                    {/* Preview */}
                    {preview && (
                        <img src={preview} alt="preview" className="w-[120px] h-[120px] object-cover rounded-md mb-4" />
                    )}

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 mt-4">
                        <button
                            onClick={handleClose}
                            className="px-4 py-2 border border-gray-300 rounded-md"
                        >
                            Cancel
                        </button>

                        <button
                            onClick={onSubmit}
                            disabled={loading}
                            className={`px-5 py-2 rounded text-white ${loading ? "bg-gray-400" : "bg-[#FF1B1B] hover:bg-red-700"}`}
                        >
                            {loading ? "Processing..." : "Submit"}
                        </button>
                    </div>
                </Popup>
            )}
        </div>
    );
}
