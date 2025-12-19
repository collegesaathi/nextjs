import React from "react";
import AdminLayout from "../common/AdminLayout";
import 'swiper/css';
import 'swiper/css/navigation';
import Facts from "../../../commons/list/Facts";
import StepsSection from "@/commons/list/StepsSection";
import Advantages from "@/commons/list/Advantages";
import Financial from "@/commons/list/Financial";
import Ranking from "@/commons/list/Rankings";
import CourseFess from "@/commons/list/CourseFees";
import Aboutdetails from "@/commons/list/Aboutdetails";
import FAQSection from "@/commons/list/FAQSection";
import ExaminationPattern from "@/commons/list/ExaminationPattern";
import SampleCertificate from "@/commons/list/SampleCertificate";
import Hero from "@/commons/list/Hero";
import Listing from "@/pages/api/Listing";
import Approvals from "@/commons/list/Approvals";
import CareerServices from "@/commons/list/CareerServices";
import CoursesSwiper from "@/commons/list/CoursesSwiper";
import PlacementPartners from "@/commons/list/PlacementPartners";
import Reviews from "@/commons/list/Reviews";
import SimilarUniversities from "@/commons/list/SimilarUniversities";
import Universities from "@/commons/list/Universities";
import UniversityCampusCarousel from "@/commons/list/UniversityCampusCarousel";
function Details({ data }) {
    return (<>
        <AdminLayout page={"university"}>
            <div className="py-4 md:py-8 ">
                <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4">
                    {/* <Approvals />  */}
                    <Hero data={data?.university} exisitng={"university"} />
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
            </div>

        </AdminLayout>
    </>);
}

export default Details;

export async function getServerSideProps(context) {
    try {
        const { slug } = context.query;
        const main = new Listing();
        const res = await main.UniveristyGet(slug);
        if (res?.data?.status) {
            return {
                props: {
                    data: res.data.data,
                },
            };
        }
        return {
            notFound: true,
        };
    } catch (error) {
        console.error("SSR Error:", error);

        return {
            notFound: true,
        };
    }
}
