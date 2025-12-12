import React, { useEffect } from "react";
import AdminLayout from "../common/AdminLayout";
import Budget from "../../assets/home/Budget.png";
import Confusion from "../../assets/home/Confusion.png";
import EMIOptions from "../../assets/home/EMIOptions.png";
import Suggestions from "../../assets/home/Suggestions.png";
import Placements from "../../assets/home/Placements.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef, useState } from "react";
import Heading from "@/common/Heading";
import Image from "next/image";
import Facts from "../../common/Facts";
import UniversityCampusCarousel from "@/pages/common/UniversityCampusCarousel";
import PlacementPartners from "@/pages/common/PlacementPartners";
import CareerServices from "@/pages/common/CareerServices";
import StepsSection from "@/pages/common/StepsSection";
import Approvals from "../../common/Approvals";
import Advantages from "@/pages/common/Advantages";
import Financial from "@/pages/common/Financial";
import Ranking from "@/pages/common/Rankings";
import CourseFess from "@/pages/common/CourseFees";
import Aboutdetails from "@/pages/common/Aboutdetails";
import Reviews from "@/pages/common/Reviews";
import Universities from "@/pages/common/Universities";
import SimilarUniversities from "@/pages/common/SimilarUniversities";
import FAQSection from "@/pages/common/FAQSection";
import ExaminationPattern from "@/pages/common/ExaminationPattern";
import SampleCertificate from "@/pages/common/SampleCertificate";
import CoursesSwiper from "@/pages/common/CoursesSwiper";
import Hero from "@/pages/common/Hero";
import Listing from "@/pages/api/Listing";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
function Details() {
    const router = useRouter()
    const Id = router.query.slug;
    const [Loading, setLoading] = useState(false);
    const [data, setData] = useState("")
    const handleDetails = async (Id) => {
        try {
            setLoading(true);
            const main = new Listing();
            const res = await main.UniveristyGet(Id);
            console.log("res", res)
            if (res?.data?.status) {
                setData(res.data.data?.university)
                toast.success(res.data.message);
            } else {
                toast.error(res?.data?.message || "Something went wrong.");
            }

        } catch (error) {
            console.error("Package Delete Error:", error);
            toast.error(error?.response?.data?.message || "Delete failed");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (Id) {
            handleDetails(Id)
        }
    }, [Id])
    console.log("data", data)

    return (<>
        <AdminLayout page={"university"}>
            <div className="py-4 md:py-8 ">
                <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4">
                    {/* <Approvals />  */}
                    <Hero data={data} />

                    <div className="w-full flex items-start pt-10 justify-center h-full relative flex-wrap">
                        <Aboutdetails about={data.about} />
                        <CourseFess />
                        <Approvals placements={data?.partners} />
                        <Ranking rankings={data?.rankings} />
                        <CoursesSwiper />
                        <Advantages advantages={data?.advantages} />
                        <Facts facts={data?.facts} />
                        <SampleCertificate certificates={data?.certificates} />
                        <ExaminationPattern examPatterns={data?.examPatterns} />
                        <Financial financialAid={data?.financialAid} />
                        <UniversityCampusCarousel universityCampuses={data?.universityCampuses} />
                        <PlacementPartners />
                        <CareerServices services={data?.services} />
                        <StepsSection admissionProcess={data?.admissionProcess} />
                        <FAQSection faq={data?.faq} />
                        <SimilarUniversities />
                        <Universities />
                        <Reviews />
                    </div>
                </div>
            </div>
        </AdminLayout>
    </>);
}

export default Details;