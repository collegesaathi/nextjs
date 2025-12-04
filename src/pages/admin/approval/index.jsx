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
    console.log("approvalOptions" ,approvalOptions)
    const fetchApprovalandPartnerLists = async () => {
        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.ApprovalandPartners();
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
            <AdminLayout title={"approvals"}>

                <div className="min-h-screen p-5 lg:p-[30px]">
                    <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 lg:mb-5">
                        <h1 className="capitalize font-inter text-lg lg:text-2xl font-bold text-[#FF1B1B] tracking-[-0.04em] mb-6">
                            Manage Approvals
                        </h1>
                      <AddApproval fetch={fetchApprovalandPartnerLists}/>
                    </div>
                    {Loading ? (
                        <Loader />
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border rounded-lg shadow-sm">
                                <thead>
                                    <tr className="bg-gray-100 border-b">
                                        <th className="p-3 text-left text-sm font-semibold text-gray-700">Index</th>
                                        <th className="p-3 text-left text-sm font-semibold text-gray-700">Image</th>
                                        <th className="p-3 text-left text-sm font-semibold text-gray-700">Title</th>
                                        <th className="p-3 text-left text-sm font-semibold text-gray-700">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {approvalOptions && approvalOptions.map((item ,index) => (
                                        <tr key={item.id} className="border-b hover:bg-gray-50 cursor-pointer">
                                              <td className="p-3 text-sm font-medium">
                                                {item.id}
                                            </td>
                                            <td className="p-3">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-[100px] h-[100px] object-cover"
                                                />
                                            </td>
                                            <td className="p-3 text-sm font-medium">
                                                {item.title}
                                            </td>
                                             <td className="p-3 text-sm font-medium relative flex justify-center items-center text-center">
                                         <AddApproval item={item} fetch={fetchApprovalandPartnerLists} IsEdit={true}/>
                                              <Delete step ={3} /> 
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </AdminLayout>


        </>
    );
}

export default Index;