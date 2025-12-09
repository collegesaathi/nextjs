import React, { useEffect, useState } from "react";
import AdminLayout from "../common/AdminLayout";
import Image from "next/image";
import MCA from "../../assets/home/Media.png"
import Listing from "@/pages/api/Listing";
import toast from "react-hot-toast";
import Delete from "../common/Delete";
import Link from "next/link";
import { MdAdd, MdEdit } from "react-icons/md";

export default function Index() {

    const datas = [
        {
            "_id": "1",
            "title": "Web Development Course",
            "description": "Learn full stack web development from scratch including HTML, CSS, JavaScript and React.",
            "thumbnail": "/images/web-dev.jpg",
            "link": "/admin/university/aaa",
            "is_deleted": false
        },
        {
            "_id": "2",
            "title": "Mobile App Development",
            "description": "Build modern mobile applications using React Native and Flutter.",
            "thumbnail": "/images/mobile-dev.jpg",
            "link": "/admin/university/aaa",

            "is_deleted": false
        },
        {
            "_id": "3",
            "title": "Digital Marketing",
            "description": "Master SEO, social media marketing, and paid ads with real-world projects.",
            "thumbnail": "/images/digital-marketing.jpg",
            "link": "/admin/university/aaa",

            "is_deleted": true
        },
        {
            "_id": "4",
            "title": "UI/UX Design",
            "description": "Design user-friendly interfaces using Figma and Adobe XD.",
            "thumbnail": "/images/ui-ux.jpg",
            "link": "https://example.com/ui-ux-design",
            "is_deleted": false
        }
    ]

    const [isOpen, setIsOpen] = useState(false);
    const closePopup = () => setIsOpen(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const closeDeletePopup = () => setIsDeleteOpen(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [data, setData] = useState(datas);

    const fetchData = async () => {
        try {
            // setLoading(true);
            const main = new Listing();
            const response = await main.AdminCourseGet();
            if (response.data) {
                setData(response.data.data);
            }
            // setLoading(false);
        } catch (error) {
            console.log("error", error);
            // setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const enableCourse = (Id) => {
        const main = new Listing();
        main
            .AdminCourseDelete(Id)
            .then((r) => {
                toast.success(r?.data?.message);
                fetchData();
            })
            .catch((err) => {
                toast.error(err?.response?.data?.message);
                console.log("error", err);
            });
    };

    return (
        <AdminLayout page={"Courses"}>
            <div className="min-h-screen p-5 lg:p-[30px]">
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 lg:mb-5">
                    <h1 className="capitalize font-inter text-lg lg:text-2xl font-bold text-[#FF1B1B] tracking-[-0.04em] mb-6">
                        Manage Courses
                    </h1>
                    <Link href="/admin/courses/add"
                        className="cursor-pointer text-[#CECECE] h-[30px] w-[30px] bg-[#FF1B1B] bg-opacity-10 hover:bg-opacity-30 rounded inline-flex items-center justify-center"
                    >
                        <MdAdd size={24} />
                    </Link>
                    {/* <AddUniversity data={null}
                        fetchData={fetchData}
                    /> */}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {data &&
                        data?.map((item, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 
                                    ${item?.is_deleted ? "opacity-80" : ""}
                                    border border-gray-100 max-w-sm flex flex-col`}
                            >
                                <div className="relative">
                                    <Image
                                        src={item?.thumbnail?.src || MCA?.src || "/Placeholder.png"}
                                        alt={item?.title}
                                        width={400}
                                        height={250}
                                        className="w-full h-[220px] object-cover"
                                    />
                                    <Delete step={2} />
                                    <Link href="/admin/courses/add/aaa"
                                        className="cursor-pointer absolute top-2 left-2 bg-white bg-opacity-80 hover:bg-[#CECECE] p-2 rounded-full shadow-sm transition-all"
                                    >
                                        <MdEdit size={24} className="text-red-600 hover:text-red-700" />
                                    </Link>
                                </div>

                                {/* Make the inner content stretch to push the button down */}
                                <div className="p-4 flex flex-col flex-grow">
                                    <h3 className="text-black text-lg font-semibold">
                                        {item?.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-4 flex-grow">
                                        {item?.description}
                                    </p>

                                    {/* Keep the button fixed at the bottom */}
                                    <a
                                        href={"/admin/university/aaa"}
                                        target="_blank"
                                        className="mt-auto block text-center w-full py-2.5 rounded-full bg-[#FF1B1B] hover:bg-[#ad0e0e] text-white font-semibold transition-all"
                                    >
                                        View
                                    </a>
                                </div>
                            </div>
                        ))}

                </div>
            </div>


        </AdminLayout>
    );
}
