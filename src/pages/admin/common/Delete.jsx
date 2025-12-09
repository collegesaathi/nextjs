import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { MdDelete, MdRestore } from "react-icons/md";
import Listing from "../../Api/Listing";
import toast from "react-hot-toast";
import Popup from "@/common/Popup";

export default function Delete({ step, Id, fetch, deleteAt }) {
    console.log(Id)
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    // ✅ Delete Package
    const handleunivesity = async () => {
        try {
            setLoading(true);
            const main = new Listing();
            const res = await main.UniveristyDelete( Id );

            if (res?.data?.status) {
                toast.success(res.data.message);
                fetch();
            } else {
                toast.error(res?.data?.message || "Something went wrong.");
            }

            toggleModal();
        } catch (error) {
            console.error("Package Delete Error:", error);
            toast.error(error?.response?.data?.message || "Delete failed");
        } finally {
            setLoading(false);
        }
    };

    // ✅ Delete User
    const handleUserDelete = async () => {
        try {
            setLoading(true);
            const main = new Listing();
            const res = await main.userDelete({ Id });

            if (res?.data?.status) {
                toast.success(res.data.message);
                fetch();
            } else {
                toast.error(res?.data?.message || "Something went wrong.");
            }

            toggleModal();
        } catch (error) {
            console.error("User Delete Error:", error);
            toast.error(error?.response?.data?.message || "Delete failed");
        } finally {
            setLoading(false);
        }
    };


    const handlePlacemntDelete = async () => {
        try {
            setLoading(true);
            const main = new Listing();
            const res = await main.PlacementDelete(Id);

            if (res?.data?.status) {
                toast.success(res.data.message);
                fetch();
            } else {
                toast.error(res?.data?.message || "Something went wrong.");
            }

            toggleModal();
        } catch (error) {
            console.error("Package Delete Error:", error);
            toast.error(error?.response?.data?.message || "Delete failed");
        } finally {
            setLoading(false);
        }
    };

    const handleApprovalDelete = async () => {
        try {
            setLoading(true);
            const main = new Listing();
            const res = await main.ApprovalDelete(Id);

            if (res?.data?.status) {
                toast.success(res.data.message);
                fetch();
            } else {
                toast.error(res?.data?.message || "Something went wrong.");
            }

            toggleModal();
        } catch (error) {
            console.error("Package Delete Error:", error);
            toast.error(error?.response?.data?.message || "Delete failed");
        } finally {
            setLoading(false);
        }
    };
    const handleClick = (e) => {
        e.preventDefault();
        if (step === 1) {
            handleunivesity();
        } else if (step === 2) {
            handleUserDelete();
        }
        else if (step === 3) {
            handlePlacemntDelete()
        }
        else if (step === 4) {
            handleApprovalDelete()
        }
        else {
            console.warn("Invalid step");
        }
    };

    return (
        <div className="flex flex-col">
            {/* Delete Icon Button */}
            <button
                onClick={toggleModal}
                className="cursor-pointer absolute top-2 right-2 bg-white bg-opacity-80 hover:bg-[#CECECE] p-2 rounded-full shadow-sm transition-all"
            >
                {deleteAt ? (
                    <MdRestore size={24} className="text-green-600 hover:text-green-700" />
                ) : (
                    <MdDelete size={24} className="text-red-600 hover:text-red-700" />
                )}
            </button>


            {/* Modal */}
            {isOpen && (
                <Popup
                    isOpen={isOpen}
                    onClose={handleClose}
                    size={"max-w-[540px] bg-white"}
                    title={deleteAt ? "Restore" : "Delete"}
                >
                    <p className="text-black text-[14px] md:text-[17px] mb-2">
                        Are you sure you want to
                        <span className="font-bold">
                            {deleteAt ? " Restore " : " Delete "}
                            {step === 1 && "University"}
                            {step === 3 && "Placements"}
                            {step === 4 && "Approvals"}

                        </span>
                        ?
                    </p>

                    <p className="text-[#f00000] mb-6 text-[13px]">
                        ({deleteAt ? "This will make it active again." : "This action cannot be undone."})
                    </p>

                    <div className="flex justify-end gap-3">
                        <button
                            onClick={toggleModal}
                            className="px-4 py-2 border border-gray-300 rounded-md"
                        >
                            Cancel
                        </button>

                        <button
                            onClick={handleClick}
                            disabled={loading}
                            className={`cursor-pointer px-5 py-2 rounded text-white 
                ${loading ? "bg-gray-400" : deleteAt ? "bg-green-600 hover:bg-green-700" : "bg-[#FF1B1B] hover:bg-red-700"}
            `}
                        >
                            {loading
                                ? deleteAt ? "Restoring..." : "Deleting..."
                                : deleteAt ? "Restore" : "Delete"
                            }
                        </button>
                    </div>
                </Popup>

            )}
        </div>
    );
}
