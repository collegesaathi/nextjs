import React, { useEffect, useState, useRef } from "react";
import AdminLayout from "../common/AdminLayout";
import MCA from "../../assets/home/Media.png";
import Listing from "@/pages/api/Listing";
import Delete from "../common/Delete";
import Link from "next/link";
import { MdAdd, MdEdit } from "react-icons/md";
import { Loader } from "@/common/Loader";
import { useRouter } from "next/router";
import { Search } from "lucide-react";

export default function Index() {
    const router = useRouter();

    const [page, setPage] = useState(1);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [buttonLoading, setButtonLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const debounceRef = useRef(null);

    // ================= FETCH DATA =================
    const fetchData = async (pageNo = 1, search = searchQuery) => {
        try {
            pageNo === 1 ? setLoading(true) : setButtonLoading(true);

            const main = new Listing();
            const response = await main.AdminUniveristy(pageNo, search);

            if (response?.data?.data) {
                const newData = response.data.data;

                setData((prev) => {
                    if (pageNo === 1) return newData;

                    return {
                        ...prev,
                        universities: [
                            ...(prev?.universities || []),
                            ...(newData?.universities || []),
                        ],
                        pagination: newData.pagination,
                    };
                });
            }
        } catch (error) {
            console.log("Fetch Error:", error);
        } finally {
            setLoading(false);
            setButtonLoading(false);
        }
    };

    // ================= INITIAL LOAD =================
    useEffect(() => {
        fetchData(1);
    }, []);

    // ================= SEARCH WITH DEBOUNCE =================
    useEffect(() => {
        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }

        debounceRef.current = setTimeout(() => {
            if (searchQuery.length === 0 || searchQuery.length >= 3) {
                setPage(1);
                fetchData(1, searchQuery);
            }
        }, 500);

        return () => clearTimeout(debounceRef.current);
    }, [searchQuery]);

    // ================= LOAD MORE =================
    const loadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchData(nextPage);
    };

    return (
        <AdminLayout page={"University Panel"}>
            <div className="min-h-screen p-5 lg:p-[30px]">

                {/* HEADER */}
                <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center mb-6">
                    <h1 className="font-bold text-2xl text-[#FF1B1B]">
                        Manage University
                    </h1>

                    {/* SEARCH */}
                    <div className="relative w-full md:w-[350px]">
                        <Search className="absolute top-3 left-4 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder='Search "University" (Min 3 characters)'
                            className="w-full h-[45px] rounded-full pl-12 pr-4 text-sm border text-black outline-none focus:border-red-400"
                        />
                    </div>

                    {/* ADD BUTTON */}
                    <button
                        onClick={() => router.push("/admin/university/add")}
                        className="flex items-center gap-2 bg-[#FF1B1B] text-white px-4 py-2 rounded"
                    >
                        <MdAdd size={22} />
                        Add University
                    </button>
                </div>

                {/* TABLE */}
                {loading ? (
                    <Loader />
                ) : (
                    <div className="overflow-x-auto bg-white shadow rounded">
                        <table className="min-w-full border">
                            <thead className="bg-gray-100 text-sm !text-black">
                                <tr>
                                    <th className="p-3 border">#</th>
                                    <th className="p-3 border">Cover</th>
                                    <th className="p-3 border">Name</th>
                                    <th className="p-3 border">Icon</th>
                                    <th className="p-3 border">Status</th>
                                    <th className="p-3 border">Actions</th>
                                    <th className="p-3 border">Course</th>
                                </tr>
                            </thead>

                            <tbody>
                                {data?.universities?.length > 0 ? (
                                    data.universities.map((item, index) => (
                                        <tr key={item.id} className="hover:bg-gray-50 !text-black">
                                            <td className="p-3 border">
                                                {(page - 1) * (data?.pagination?.limit || 10) + index + 1}
                                            </td>

                                            <td className="p-3 border">
                                                <img
                                                    src={item.cover_image || MCA?.src}
                                                    className="w-24 h-14 object-cover rounded"
                                                    alt=""
                                                />
                                            </td>

                                            <td className="p-3 border font-semibold">
                                                {item.name}
                                            </td>

                                            <td className="p-3 border">
                                                <img
                                                    src={item.icon || MCA?.src}
                                                    className="w-10 h-10 object-contain"
                                                    alt=""
                                                />
                                            </td>

                                            <td className="p-3 border">
                                                <span className={`px-3 py-1 rounded-full text-white text-xs ${
                                                    item.deleted_at ? "bg-gray-400" : "bg-green-500"
                                                }`}>
                                                    {item.deleted_at ? "Deleted" : "Active"}
                                                </span>
                                            </td>

                                            <td className="p-3 border">
                                                <div className="flex gap-2 justify-center">
                                                    {!item.deleted_at && (
                                                        <Link
                                                            href={`/admin/university/add/${item.slug}`}
                                                            className="bg-yellow-400 p-2 rounded text-white"
                                                        >
                                                            <MdEdit />
                                                        </Link>
                                                    )}

                                                    <Delete
                                                        step={1}
                                                        fetch={() => fetchData(1)}
                                                        deleteAt={item.deleted_at}
                                                        Id={item.id}
                                                    />

                                                    <Link
                                                        href={`/admin/university/${item.slug}`}
                                                        target="_blank"
                                                        className="bg-[#FF1B1B] px-3 py-1 rounded text-white"
                                                    >
                                                        View
                                                    </Link>
                                                </div>
                                            </td>

                                            <td className="p-3 border text-center">
                                                <Link
                                                    href={`/admin/courses?university_id=${item.id}`}
                                                    target="_blank"
                                                    className="bg-[#FF1B1B] px-3 py-1 rounded text-white"
                                                >
                                                    Add Course
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7" className="text-center p-6 text-gray-500">
                                            No universities found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* LOAD MORE */}
                {data?.pagination?.page < data?.pagination?.totalPages && (
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={loadMore}
                            disabled={buttonLoading}
                            className="px-6 py-2 rounded-full bg-[#FF1B1B] text-white border hover:bg-white hover:text-[#FF1B1B]"
                        >
                            {buttonLoading ? "Loading..." : "See More"}
                        </button>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
