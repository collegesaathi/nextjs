import { fetchDetails } from "@/lib/ssrFetch";
import Layout from "@/pages/components/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Reviews from "@/commons/list/Reviews";
import Universities from "@/commons/list/Universities";
import SimilarUniversities from "@/commons/list/SimilarUniversities";
import FAQSection from "@/commons/list/FAQSection";
import StepsSection from "@/commons/list/StepsSection";
import CareerServices from "@/commons/list/CareerServices";
import PlacementPartners from "@/commons/list/PlacementPartners";
import Financial from "@/commons/list/Financial";
import ExaminationPattern from "@/commons/list/ExaminationPattern";
import SampleCertificate from "@/commons/list/SampleCertificate";
import Advantages from "@/commons/list/Advantages";
import Approvals from "@/commons/list/Approvals";
import Aboutdetails from "@/commons/list/Aboutdetails";
import Hero from "@/commons/list/Hero";
import Ranking from "@/commons/list/Rankings";
import FrontendSidebar from "@/pages/common/FrontendSidebar";
import Eligibility from "@/commons/list/Eligibility";
import Curriculum from "@/commons/list/Curriculum";
import Skills from "@/commons/list/Skills";
import UpdatedFee from "@/commons/list/UpdatedFee";
import CoursesSwiper from "@/commons/list/CoursesSwiper";
import CarreerOppurtunity from "@/commons/list/CarreerOppurtunity";
export default function Specialization({ data }) {
    const router = useRouter();
    const { universitySlug, courseSlug, specializationSlug } = router.query;
    const uniId = data?.SpecialisationData?.id;

    return (
        <Layout>
        
          <div className=" md:py-8 ">
                <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1430px] px-2 md:px-4">
                    <Hero data={data?.SpecialisationData} approvalsdata={data?.approvalsData} exisitng={"course"} />
                </div>
                <div className="w-full flex items-start pt-10 justify-center h-full relative flex-wrap">
                    <div className="w-full lg:w-3/12 bg-[#f9fafb] lg:shadow-[4px_4px_4px_rgba(0,0,0,0.06)] h-full overflow-y-auto justify-end flex lg:pr-4 relative animate-slide-fade-right animate-delay-200"
                    >
                        <FrontendSidebar data={data?.SpecialisationData} />
                    </div>
                    <div className="w-full lg:w-9/12 h-full lg:h-[100vh] overflow-y-auto " style={{ scrollbarWidth: "none", }}>
                        {data?.SpecialisationData?.about && (<Aboutdetails about={data?.SpecialisationData?.about} />)}
                        {data?.SpecialisationData?.fees && (<UpdatedFee fees={data?.SpecialisationData?.fees} />)}
                        {data?.SpecialisationData?.approvals && (<Approvals approvals={data?.SpecialisationData?.approvals} approvalsdata={data?.approvalsData} />)}
                        {data?.SpecialisationData?.advantages && (<Advantages advantages={data?.SpecialisationData?.advantages} />)}
                        {data?.SpecialisationData?.rankings && (<Ranking rankings={data?.SpecialisationData?.rankings} />)}
                        <Eligibility eligibilitycriteria={data?.SpecialisationData?.eligibilitycriteria} />
                        <Curriculum curriculum={data?.SpecialisationData?.curriculum} />
                        {data?.SpecialisationData?.certificates && (<SampleCertificate certificates={data?.SpecialisationData?.certificates} />)}
                        {data?.SpecialisationData?.skills && (<Skills skills={data?.SpecialisationData?.skills} />)}
                        <ExaminationPattern examPatterns={data?.SpecialisationData?.examPatterns} />
                        <Financial financialAid={data?.SpecialisationData?.financialAid} />
                        <CarreerOppurtunity career={data?.SpecialisationData?.career} />
                        <PlacementPartners partners={data?.SpecialisationData?.partners} PlacementPartners={data?.placementPartners} />
                        <CareerServices services={data?.SpecialisationData?.services} />
                        <StepsSection admissionProcess={data?.SpecialisationData?.admissionprocess} />
                        <FAQSection faq={data?.SpecialisationData?.faq} />
                        <SimilarUniversities />
                        <Universities />
                        <Reviews />
                    </div>
                </div>
            </div>
        </Layout>
    );
}


export async function getServerSideProps(context) {
    return fetchDetails(context, "specialisation");
}