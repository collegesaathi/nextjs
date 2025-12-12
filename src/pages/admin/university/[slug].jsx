import React, { useEffect } from "react";
import AdminLayout from "../common/AdminLayout";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef, useState } from "react";
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
import { Loader } from "@/common/Loader";
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
                setData(res.data.data)
                toast.success(res.data.message);
            } else {
                toast.error(res?.data?.university?.message || "Something went wrong.");
            }

        } catch (error) {
            console.error("Package Delete Error:", error);
            toast.error(error?.response?.data?.university?.message || "Delete failed");
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
            {Loading ? (

                <Loader />
            ) : (<div className="py-4 md:py-8 ">
                <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4">
                    {/* <Approvals />  */}
                    <Hero data={data?.university} />
                    <Aboutdetails about={data?.university?.about} />
                    <CourseFess />
                    <Approvals approvals={data?.university?.approvals} approvalsdata={data?.approvalsData} />
                    <Ranking rankings={data?.university?.rankings} />
                    <CoursesSwiper />
                    <Advantages advantages={data?.university?.advantages} />
                    <Facts facts={data?.university?.facts} />
                    <SampleCertificate certificates={data?.university?.certificates} />
                    <ExaminationPattern examPatterns={data?.university?.examPatterns} />
                    <Financial financialAid={data?.university?.financialAid} />
                    <UniversityCampusCarousel universityCampuses={data?.university?.universityCampuses} />
                    <PlacementPartners placements={data?.university?.partners} PlacementPartners={data?.placementPartners} />
                    <CareerServices services={data?.university?.services} />
                    <StepsSection admissionProcess={data?.university?.admissionProcess} />
                    <FAQSection faq={data?.university?.faq} />
                    <SimilarUniversities />
                    <Universities />
                    <Reviews />
                </div>
            </div>)}

        </AdminLayout>
    </>);
}

export default Details;