import Listing from "@/pages/api/Listing";
import { useEffect, useState } from "react";
import { Loader } from "./Loader";

function ApprovalAndPartner({ toggleApproval, selectedApprovals, step, togglePartners, selectedPartners }) {
    const [Loading, setLoading] = useState(false);
    const [approvalOptions, setapprovalOptions] = useState([]);
    const [PartnersOptions, setPartnersOptions] = useState([]);
console.log("PartnersOptions" ,PartnersOptions)
    // Fetch data
    const fetchApprovalandPartnerLists = async () => {
        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.ApprovalandPartners();
            setPartnersOptions(response?.data?.data?.placements || [])
            setapprovalOptions(response?.data?.data?.approvals || []);
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
            {Loading ? (
                <Loader />
            ) : (

                <>
                    {step === 1 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {approvalOptions && approvalOptions?.map((item) => (
                                <label
                                    key={item.id}
                                    className="flex items-center gap-3 border p-3 rounded-lg cursor-pointer shadow-sm bg-white"
                                >
                                    {/* Checkbox */}
                                    <input
                                        type="checkbox"
                                        checked={selectedApprovals?.includes(item.id)}
                                        onChange={() => toggleApproval(item.id)}
                                        className="h-4 w-4"
                                    />

                                    {/* Image + Title */}
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-10 h-10 object-contain"
                                        />
                                        <span className="text-sm font-medium">{item.title}</span>
                                    </div>
                                </label>
                            ))}

                        </div>
                    )}


                    {step === 2 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

                            {PartnersOptions && PartnersOptions?.map((item) => (
                                <label
                                    key={item.id}
                                    className="flex items-center gap-3 border p-3 rounded-lg cursor-pointer shadow-sm bg-white"
                                >
                                    {/* Checkbox */}
                                    <input
                                        type="checkbox"
                                        checked={selectedPartners?.includes(item.id)}
                                        onChange={() => togglePartners(item.id)}
                                        className="h-4 w-4"
                                    />

                                    {/* Image + Title */}
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-10 h-10 object-contain"
                                        />
                                        <span className="text-sm font-medium">{item.title}</span>
                                    </div>
                                </label>
                            ))}

                        </div>
                    )}
                </>
            )}

        </>
    );
}

export default ApprovalAndPartner;