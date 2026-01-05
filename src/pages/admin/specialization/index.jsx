import React, { useEffect, useState } from "react";
import AdminLayout from "../common/AdminLayout";
import MCA from "../../assets/home/Media.png"
import Listing from "@/pages/api/Listing";
import Delete from "../common/Delete";
import Link from "next/link";
import { MdAdd, MdEdit } from "react-icons/md";
import { Loader } from "@/common/Loader";
import { useRouter } from "next/router";

export default function Index() {
    const router = useRouter();
    const university_id = router?.query?.university_id
    const course_id = router?.query?.course_id
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [buttonLoading, setButtonLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const fetchData = async (course_id) => {
        try {
            const main = new Listing();
            const response = await main.CourseSpecialisationGet(course_id);
            if (response.data) {
                const newData = response.data.data || {};
                setData(newData);
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
        fetchData(course_id);
    }, [course_id]);

    const LoadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchData(nextPage);
    }

    return (
        <AdminLayout page={"Specialization Panel"}>
            <div className="min-h-screen p-5 lg:p-[30px]">
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 lg:mb-5">
                    <h1 className="capitalize font-inter text-lg lg:text-2xl font-bold text-[#FF1B1B] tracking-[-0.04em] mb-6">
                        Manage Specialization
                    </h1>
                    <Link href={`/admin/specialization/add?university_id=${university_id}&course_id=${course_id}`}
                        className="cursor-pointer text-[#ffffff] p-2  bg-[#FF1B1B] bg-opacity-10 hover:bg-opacity-30 rounded inline-flex items-center justify-center"
                    >
                        <MdAdd size={24} /> Add Specialization
                    </Link>
                    {/* <AddUniversity data={null}
                        fetchData={fetchData}
                    /> */}
                </div>
                {loading ? (
                    <Loader />
                ) : (
                    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                        <table className="min-w-full text-left border">
                            <thead className="bg-gray-100">
                                <tr className="text-sm font-semibold text-gray-700">
                                    <th className="p-3 border">#</th>
                                    <th className="p-3 border">Cover</th>
                                    <th className="p-3 border">Name</th>
                                    <th className="p-3 border">Icon</th>
                                    <th className="p-3 border">Status</th>
                                    <th className="p-3 border">Actions</th>

                                </tr>
                            </thead>

                            <tbody>
                                {data?.map((item, index) => (
                                    <tr
                                        key={index}
                                        className={`border hover:bg-gray-750 ${item?.deleted_at ? "bg-gray-500 !text-white " : "text-gray-800"
                                            }`}
                                    >
                                        {/* Index */}
                                        <td className="p-3 border">{index + 1}</td>

                                        {/* Cover Image */}
                                        <td className="p-3 border">
                                            <img
                                                src={item?.cover_image || MCA?.src || "/Placeholder.png"}
                                                alt={item?.name}
                                                className="w-24 h-14 object-cover rounded"
                                            />
                                        </td>

                                        {/* Name */}
                                        <td className="p-3 border font-semibold">{item?.name}</td>
                                        {/* Icon */}
                                        <td className="p-3 border">
                                            <img
                                                src={item?.icon || MCA?.src || "/Placeholder.png"}
                                                alt={item?.name}
                                                className="w-10 h-10 object-contain"
                                            />
                                        </td>
                                        {/* Status */}
                                        <td className="p-3 border">
                                            {item?.deleted_at ? (
                                                <span className="px-3 py-1 text-sm bg-gray-400 text-white rounded-full">
                                                    Deleted
                                                </span>
                                            ) : (
                                                <span className="px-3 py-1 text-sm bg-green-500 text-white rounded-full">
                                                    Active
                                                </span>
                                            )}
                                        </td>

                                        {/* Actions */}
                                        <td className="p-3 border ">
                                            <div className="flex  justify-center items-center gap-4  ">
                                                {!item?.deleted_at && (
                                                    <Link
                                                        href={`/admin/specialization/add/${item?.slug}?university_id=${university_id}&course_id=${course_id}`}
                                                        className="p-2 rounded bg-yellow-400 hover:bg-yellow-500 text-white"
                                                    >
                                                        <MdEdit size={20} />
                                                    </Link>
                                                )}

                                                {/* Delete Button */}
                                                <Delete
                                                    step={6}
                                                    fetch={fetchData}
                                                    deleteAt={item?.deleted_at}
                                                    Id={item?.id}
                                                    university_id={university_id} course_id={course_id}
                                                />

                                                {/* View Button */}
                                                <Link
                                                    href={`/admin/university/${item?.slug}`}
                                                    target="_blank"
                                                    className="px-4 py-2 rounded bg-[#FF1B1B] hover:bg-[#ad0e0e] text-white"
                                                >
                                                    View
                                                </Link>
                                            </div>
                                            {/* Edit Button */}

                                        </td>


                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Load More Button */}
                {data?.pagination?.page < data?.pagination?.totalPages && (
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={LoadMore}
                            className="w-fit px-6 h-[44px] hover:bg-white hover:text-[#FF1B1B] border border-[#FF1B1B] rounded-full text-sm font-medium bg-[#FF1B1B] text-white cursor-pointer"
                        >
                            {buttonLoading ? "Loading..." : "See More"}
                        </button>
                    </div>
                )}

            </div>
        </AdminLayout>
    );
}
