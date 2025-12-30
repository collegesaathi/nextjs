
import Reviews from "@/commons/list/Reviews";
import Layout from "@/pages/components/Layout";
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
import { fetchDetails } from "@/lib/ssrFetch";
import Eligibility from "@/commons/list/Eligibility";
import Curriculum from "@/commons/list/Curriculum";
import Skills from "@/commons/list/Skills";
import UpdatedFee from "@/commons/list/UpdatedFee";
import CoursesSwiper from "@/commons/list/CoursesSwiper";
import CarreerOppurtunity from "@/commons/list/CarreerOppurtunity";
import { useEffect, useState } from "react";
import Listing from "@/pages/api/Listing";
import EnquiryForm from "@/pages/common/EnquiryForm";
import EnquiryBox from "@/commons/list/EnquiryForm";
function Index({ data }) {
        const uniId = data?.CourseData?.id;
        const [loading, setLoading] = useState(false);
        const [courseData, setCourseData] = useState([])



        console.log("universitydata",data)
        
    const fetchCourse = async (uniId) => {
        setLoading(true)
        try {
            const main = new Listing();
            const response = await main.UniveristyCourseGet(uniId);
            setCourseData(response?.data)
        }
        catch (error) {
            console.error("Error fetching projects:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchCourse(uniId)
    }, [uniId])
    return (<>
        <Layout>
            <div className=" md:py-8 ">
                <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1430px] px-2 md:px-4">
                    <Hero data={data?.CourseData} approvalsdata={data?.approvalsData} exisitng={"course"} />
                </div>
                <div className="w-full flex items-start pt-10 justify-center h-full relative flex-wrap">
                    <div
                        className="w-full lg:w-3/12 bg-[#f9fafb] lg:shadow-[4px_4px_4px_rgba(0,0,0,0.06)] h-full overflow-y-auto justify-end flex lg:pr-4 relative animate-slide-fade-right animate-delay-200"
                    >
                        <FrontendSidebar data={data?.CourseData} />
                    </div>
                    <div className="w-full lg:w-9/12 h-full lg:h-[100vh] overflow-y-auto " style={{ scrollbarWidth: "none", }}>

                        {data?.CourseData?.about && (<Aboutdetails about={data?.CourseData?.about} />) }
                        {data?.CourseData?.fees && (<UpdatedFee fees={data?.CourseData?.fees} />) }

                        {data?.CourseData?.approvals && (<Approvals approvals={data?.CourseData?.approvals} approvalsdata={data?.approvalsData} />) }
                        {data?.CourseData?.advantages &&(<Advantages advantages={data?.CourseData?.advantages} />) }

                        {data?.CourseData?.rankings && (<Ranking rankings={data?.CourseData?.rankings} />) }
                          <CoursesSwiper courseData={courseData} name={"course"} title={`${data?.CourseData?.name} - Specialisation`} />

                        <Eligibility eligibilitycriteria={data?.CourseData?.eligibilitycriteria} />
                        <EnquiryBox />


                        <Curriculum curriculum={data?.CourseData?.curriculum} />



                        {data?.CourseData?.certificates && (<SampleCertificate certificates={data?.CourseData?.certificates} />) }

                        {data?.CourseData?.skills &&( <Skills skills={data?.CourseData?.skills} />)}
                     
                        <ExaminationPattern examPatterns={data?.CourseData?.examPatterns} />
                        <Financial financialAid={data?.CourseData?.financialAid} />
                        <CarreerOppurtunity career={data?.CourseData?.career}/>
                        <PlacementPartners placements={data?.CourseData?.partners} PlacementPartners={data?.placementPartners} />
                        <CareerServices services={data?.CourseData?.services} />
                        <StepsSection admissionProcess={data?.CourseData?.admissionprocess} />
                        <FAQSection faq={data?.CourseData?.faq} />
                        <SimilarUniversities />
                        <Universities />
                        <Reviews />  
                    </div>
                </div>
            </div>
        </Layout>
    </>);
}
export default Index;


export async function getServerSideProps(context) {
    return fetchDetails(context, "course");
}