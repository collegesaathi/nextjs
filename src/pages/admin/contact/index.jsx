import Listing from "@/pages/api/Listing";
import { useEffect, useState } from "react";
import AdminLayout from "../common/AdminLayout";
import NoData from "@/common/NoData";
import { TableLoader } from "@/common/Loader";

function Index() {
    const [Loading, setLoading] = useState(false);
    const [Leads, setLeads] = useState([]);
    const LeadManageement = async () => {
        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.ContactGet();
            console.log("response", response)
            setLeads(response?.data?.data || [])
            setLoading(false);

        } catch (error) {
            console.error("Error fetching projects:", error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        LeadManageement();
    }, []);

    return (<>
        <AdminLayout page={"    Manage Leads"}>
            <div className="min-h-screen p-5 lg:p-[30px]">
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 lg:mb-5">
                    <h1 className="capitalize font-inter text-lg lg:text-2xl font-bold text-[#FF1B1B] tracking-[-0.04em] mb-6">
                        Manage Leads
                    </h1>
                </div>
                <div className="rounded-[5px] border border-[rgba(204,40,40,0.3)] overflow-x-auto">
                    <table className="min-w-full text-sm text-center rounded-[20px]">
                        <thead className="bg-[rgba(204,40,40,0.1)] text-[#535353] tracking-[-0.04em] font-inter rounded-[20px] whitespace-nowrap">
                            <tr>
                                <th className="font-normal text-sm lg:text-base px-3 lg:px-4 py-2 lg:py-3 border-t border-[rgba(204,40,40,0.2)] capitalize">
                                    Index
                                </th>
                                <th className="font-normal text-sm lg:text-base px-3 lg:px-4 py-2 lg:py-3 border-t border-[rgba(204,40,40,0.2)] capitalize">
                                    Name
                                </th>
                                <th className="font-normal text-sm lg:text-base px-3 lg:px-4 py-2 lg:py-3 border-t border-[rgba(204,40,40,0.2)] capitalize">
                                    Email
                                </th>
                                <th className="font-normal text-sm lg:text-base px-3 lg:px-4 py-2 lg:py-3 border-t border-[rgba(204,40,40,0.2)] capitalize">
                                    phone Number
                                </th>
                                <th className="font-normal text-sm lg:text-base px-3 lg:px-4 py-2 lg:py-3 border-t border-[rgba(204,40,40,0.2)] capitalize">
                                    State &   City
                                </th>
                                <th className="font-normal text-sm lg:text-base px-3 lg:px-4 py-2 lg:py-3 border-t border-[rgba(204,40,40,0.2)] capitalize">
                                    Universirty & Course
                                </th>
                                <th className="font-normal text-sm lg:text-base px-3 lg:px-4 py-2 lg:py-3 border-t border-[rgba(204,40,40,0.2)] capitalize">
                                    Content
                                </th>
                            </tr>
                        </thead>
                        {Loading ? (
                            <TableLoader length={6} />
                        ) : (
                            <tbody>
                                {Leads && Leads?.length > 0 ? (
                                    Leads?.map((item, index) => (
                                        <tr key={index} className="hover:bg-[rgba(204,40,40,0.1)] border-t border-[rgba(204,40,40,0.2)]" >
                                            <td className="px-3 lg:px-4 py-2 lg:py-3 text-black text-sm lg:text-base font-medium font-inter ">
                                                {index + 1}
                                            </td>
                                            <td className="px-3 lg:px-4 py-2 lg:py-3 text-black text-sm lg:text-base font-medium font-inter whitespace-nowrap ">
                                                {item?.name}
                                            </td>
                                            <td className="capitalize px-3 lg:px-4 py-2 lg:py-3 text-black text-sm lg:text-base font-medium font-inter ">
                                                {item?.email}
                                            </td>
                                            <td className="px-3 lg:px-4 py-2 lg:py-3 text-black text-sm lg:text-base font-medium font-inter text-center whitespace-nowrap">
                                                {item?.phone_number}
                                            </td>
                                            <td className="capitalize px-3 lg:px-4 py-2 lg:py-3 text-black text-sm lg:text-base font-medium font-inter whitespace-nowrap">
                                                {item?.state} /{item?.city}
                                            </td>
                                            <td className="capitalize px-3 lg:px-4 py-2 lg:py-3 text-black text-sm lg:text-base font-medium font-inter ">
                                                {item?.university?.name}  /
                                                {item?.course?.name}
                                            </td>
                                            <td className="capitalize px-3 lg:px-4 py-2 lg:py-3 text-black text-sm lg:text-base font-medium font-inter ">
                                                {item.content}
                                            </td>

                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={6}>
                                            <div className="mt-2">
                                                <NoData
                                                    Heading={"No Leads found"}
                                                    content={
                                                        "No Leads Request Found."
                                                    }
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        )}
                    </table>
                </div>
            </div>
        </AdminLayout>
    </>);
}

export default Index;