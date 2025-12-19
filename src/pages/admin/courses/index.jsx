import React, { useEffect, useState } from "react";
import AdminLayout from "../common/AdminLayout";
import MCA from "../../assets/home/Media.png"
import Listing from "@/pages/api/Listing";
import Delete from "../common/Delete";
import Link from "next/link";
import { MdAdd, MdEdit } from "react-icons/md";
import { Loader } from "@/common/Loader";

export default function Index() {
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [buttonLoading, setButtonLoading] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchData = async (page = 1) => {
        try {
            if (page === 1) { setLoading(true); }
            else { setButtonLoading(true); }
            const main = new Listing();
            const response = await main.CourseAll(page);
            if (response.data) {
                const newData = response.data.data || {};
                setData((prev) => {
                    if (page === 1) {
                        // First page → replace entire object
                        return newData;
                    }
                    // Next pages → append universities array
                    return {
                        ...prev,
                        courses: [
                            ...(prev?.courses || []),
                            ...(newData?.courses || [])
                        ]
                    };
                });
            }
            setLoading(false);
            setButtonLoading(false);
        } catch (error) {
            console.log("error", error);
            setLoading(false);

            setButtonLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const LoadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchData(nextPage);
    }

    return (
        <AdminLayout page={"course Panel"}>
            <div className="min-h-screen p-5 lg:p-[30px]">
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 lg:mb-5">
                    <h1 className="capitalize font-inter text-lg lg:text-2xl font-bold text-[#FF1B1B] tracking-[-0.04em] mb-6">
                        Manage course
                    </h1>
                    <Link href="/admin/courses/add"
                        className="cursor-pointer text-[#CECECE] h-[30px] w-[30px] bg-[#FF1B1B] bg-opacity-10 hover:bg-opacity-30 rounded inline-flex items-center justify-center"
                    >
                        <MdAdd size={24} />
                    </Link>
                    {/* <Addcourse data={null}
                        fetchData={fetchData}
                    /> */}
                </div>
                {loading ? (
                    <Loader />
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
                        {data &&
                            data?.courses?.map((item, index) => (
                                <div
                                    key={index}
                                    className={` rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 
                                    ${item?.deleted_at ? "opacity-80 bg-gray-300" : ""}
                                    border border-gray-100 max-w-sm flex flex-col`}
                                >
                                    <div className="relative">
                                        <img
                                            src={item?.cover_image || MCA?.src || "/Placeholder.png"}
                                            alt={item?.name}
                                            width={400}
                                            height={250}
                                            className="w-full h-[220px] object-cover"
                                        />
                                        <Delete step={5} fetch={fetchData} deleteAt={item?.deleted_at} Id={item?.id} />

                                        {!item.deleted_at && (
                                            <Link href={`/admin/courses/add/${item?.slug}`}
                                                className="cursor-pointer absolute top-2 left-2 bg-white bg-opacity-80 hover:bg-[#CECECE] p-2 rounded-full shadow-sm transition-all"
                                            >
                                                <MdEdit size={24} className="text-red-600 hover:text-red-700" />
                                            </Link>
                                        )}


                                        <div
                                            className="cursor-pointer absolute bottom-2 left-2 bg-white bg-opacity-80 hover:bg-[#CECECE] p-2 rounded-full shadow-sm transition-all"
                                        >
                                            <img
                                                src={item?.icon || MCA?.src || "/Placeholder.png"}
                                                alt={item?.name}
                                                width={50}
                                                height={50}
                                                className="w-full h-[50px] object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* Make the inner content stretch to push the button down */}
                                    <div className="p-4 flex flex-col flex-grow">
                                        <h3 className="text-black text-lg font-semibold">
                                            {item?.name}
                                        </h3>
                                        {/* <p className="text-gray-500 text-sm mb-4 flex-grow">
                                            {item?.description}
                                        </p> */}

                                        {/* Keep the button fixed at the bottom */}
                                        <Link
                                            href={`/admin/courses/${item?.slug}`}
                                            target="_blank"
                                            className="mt-auto block text-center w-full py-2.5 rounded-full bg-[#FF1B1B] hover:bg-[#ad0e0e] text-white font-semibold transition-all"
                                        >
                                            View
                                        </Link>
                                    </div>
                                </div>
                            ))}

                    </div>
                )}
                {data?.pagination?.page < data?.pagination?.totalPages ?
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={LoadMore}
                            className="w-fit px-2 px-4 xl:px-8 py-2  h-[44px] hover:bg-white hover:text-[#FF1B1B] border border-[#FF1B1B] rounded-full tracking-[-0.06em] text-sm font-medium bg-[#FF1B1B] text-white cursor-pointer"
                        >
                            {buttonLoading ? "Loading..." : "See More"}
                        </button>
                    </div>
                    :
                    <></>
                }
            </div>
        </AdminLayout>
    );
}
