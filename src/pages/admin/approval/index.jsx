import { Loader } from "@/common/Loader";
import Listing from "@/pages/api/Listing";
import { useEffect, useState } from "react";
import AdminLayout from "../common/AdminLayout";
import Link from "next/link";
import { MdAdd } from "react-icons/md";
import Delete from "../common/Delete";
import AddApproval from "./AddApproval";

function Index() {
    const [Loading, setLoading] = useState(false);
    const [approvalOptions, setapprovalOptions] = useState([]);
    console.log("approvalOptions", approvalOptions)

    
    const fetchApprovalandPartnerLists = async () => {
        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.PlacementApproval();
            setapprovalOptions(response?.data?.data?.approvals || [])
            setLoading(false);

        } catch (error) {
            console.error("Error fetching projects:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchApprovalandPartnerLists();
    }, []);

    return (
        <>
            <AdminLayout page={"approvals"}>
                <div className="min-h-screen p-5 lg:p-[30px]">
                    <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 lg:mb-5">
                        <h1 className="capitalize font-inter text-lg lg:text-2xl font-bold text-[#FF1B1B] tracking-[-0.04em] mb-6">
                            Manage Approvals
                        </h1>
                        <AddApproval fetch={fetchApprovalandPartnerLists} />
                    </div>
                    {Loading ? (
                        <Loader />
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {approvalOptions?.map((partner) => (
                                <div
                                    key={partner.id}
                                    className={`
                                w-full h-[200px] shadow-md 
                                ${partner.deleted_at ? "bg-gray-300" : "bg-[#0000000D]"}
                                p-4 rounded-[20px] relative
                                flex flex-col items-center justify-between
                                transition-all duration-300 hover:shadow-xl
                              `}
                                >
                                    {/* Edit & Delete Buttons */}
                                    {!partner.deleted_at && (
                                        <AddApproval
                                            item={partner}
                                            fetch={fetchApprovalandPartnerLists}
                                            IsEdit={true}
                                            Id={partner?.id}
                                        />
                                    )}
                                    <Delete
                                        Id={partner.id}
                                        step={4}
                                        fetch={fetchApprovalandPartnerLists}
                                        deleteAt={partner.deleted_at}
                                    />
                                    {/* Image */}
                                    <div className="bg-white w-[110px] h-[110px] rounded-[15px] flex items-center justify-center">
                                        <img
                                            src={partner.image}
                                            alt={partner.title}
                                            className="w-[80px] h-[80px] object-contain"
                                        />
                                    </div>
                                    {/* Title */}
                                    <p className="mt-3 text-[15px] md:text-[16px] font-medium text-[#363535] font-poppins text-center">
                                        {partner.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </AdminLayout>


        </>
    );
}

export default Index;