import Listing from "@/pages/api/Listing";
import { useEffect, useState } from "react";
import { Loader } from "./Loader";

function AllUniversity({ toggleApproval, selectedApprovals, formData, handleChange }) {
    // Fetch data
    const [compareUniversities, setcompareUniversities] = useState("")
    const [Loading, setLoading] = useState(false)

    console.log("compareUniversities", compareUniversities)
    const fetchData = async () => {
        try {

            const main = new Listing();
            const response = await main.UniversityAll();
            const universities = response?.data?.data?.universities || [];
            console.log("universities", universities)
            setcompareUniversities(universities);
        } catch (error) {
            console.log("error", error);
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);



    return (

        <>
            {Loading ? (
                <Loader />
            ) : (

                <>

                
                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                     university title{" "}
                                </label>
                                <input
                                    type="text"
                                    name="universitytitle"
                                    value={formData?.universitytitle}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    placeholder="Enter short title"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

                        {compareUniversities && compareUniversities?.map((item) => (
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
                                        src={item.icon}
                                        alt={item.title}
                                        className="w-10 h-10 object-contain"
                                    />
                                    <span className="text-sm font-medium">{item.name}</span>
                                </div>
                            </label>
                        ))}

                    </div>
                </>
            )}

        </>
    );
}

export default AllUniversity;