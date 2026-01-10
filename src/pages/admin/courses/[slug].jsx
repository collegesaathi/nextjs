
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
import CourseFees from "@/commons/list/CourseFees";
import Ranking from "@/commons/list/Rankings";
import { fetchDetails } from "@/lib/ssrFetch";
import Eligibility from "@/commons/list/Eligibility";
import Curriculum from "@/commons/list/Curriculum";
import Skills from "@/commons/list/Skills";
import AdminLayout from "../common/AdminLayout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Listing from "@/pages/api/Listing";
import CoursesSwiper from "@/commons/list/CoursesSwiper";
import CarreerOppurtunity from "@/commons/list/CarreerOppurtunity";
import UpdatedFee from "@/commons/list/UpdatedFee";
function Index() {
    const router = useRouter();
    const id = router.query.slug;
    const [data, setData] = useState("");
    useEffect(() => {
        if (!id) return; // wait for router to provide slug

        const fetchData = async () => {
            try {
                const main = new Listing();
                const response = await main.CourseGet(id);
                setData(response.data.data); // set your fetched data
            } catch (error) {
                console.error("Error fetching course:", error);
            }
        };

        fetchData();
    }, [id]);
    return (<>
        <AdminLayout>
            <div className="py-4 md:py-8 ">
                <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1430px]  px-4">
                    <Hero data={data?.CourseData} />
                </div>
                <div className="w-full lg:w-9/12 h-full lg:h-[100vh] overflow-y-auto " style={{ scrollbarWidth: "none", }}>

                    {data?.CourseData?.about && (<Aboutdetails about={data?.CourseData?.about} />)}
                    {data?.CourseData?.fees && (<UpdatedFee fees={data?.CourseData?.fees} />)}
                    {data?.CourseData?.approvals && (<Approvals approvals={data?.CourseData?.approvals} approvalsdata={data?.approvalsData} />)}
                    {data?.CourseData?.advantages && (<Advantages advantages={data?.CourseData?.advantages} />)}
                    {data?.CourseData?.rankings && (<Ranking rankings={data?.CourseData?.rankings} />)}
                    {/* <CoursesSwiper courseData={courseData} name={"specialisation"} title={`${data?.CourseData?.name} - Specialisation`} /> */}
                    {data?.CourseData?.eligibilitycriteria && (
                        <Eligibility eligibilitycriteria={data?.CourseData?.eligibilitycriteria} />
                    )}
                    <Curriculum curriculum={data?.CourseData?.curriculum} />
                    {data?.CourseData?.certificates && (<SampleCertificate certificates={data?.CourseData?.certificates} />)}

                    {data?.CourseData?.skills && (<Skills skills={data?.CourseData?.skills} />)}

                    <ExaminationPattern examPatterns={data?.CourseData?.examPatterns} />
                    <Financial financialAid={data?.CourseData?.financialAid} />
                    <CarreerOppurtunity career={data?.CourseData?.career} />
                    <PlacementPartners partners={data?.CourseData?.partners} PlacementPartners={data?.placementPartners} />
                    <CareerServices services={data?.CourseData?.services} />
                    <StepsSection admissionProcess={data?.CourseData?.admissionprocess} />
                    <FAQSection Faq={data?.CourseData?.faq?.faqs} />
                    <SimilarUniversities />
                    <Universities />
                    <Reviews />
                </div>
            </div>
        </AdminLayout>
    </>);
}
export default Index;
