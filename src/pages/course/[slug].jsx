
import Reviews from "@/commons/list/Reviews";
import Listing from "../api/Listing";
import Layout from "../components/Layout";
import Universities from "@/commons/list/Universities";
import SimilarUniversities from "@/commons/list/SimilarUniversities";
import FAQSection from "@/commons/list/FAQSection";
import StepsSection from "@/commons/list/StepsSection";
import CareerServices from "@/commons/list/CareerServices";
import PlacementPartners from "@/commons/list/PlacementPartners";
import UniversityCampusCarousel from "@/commons/list/UniversityCampusCarousel";
import Financial from "@/commons/list/Financial";
import ExaminationPattern from "@/commons/list/ExaminationPattern";
import SampleCertificate from "@/commons/list/SampleCertificate";
import Facts from "@/commons/list/Facts";
import Advantages from "@/commons/list/Advantages";
import CoursesSwiper from "@/commons/list/CoursesSwiper";
import Approvals from "@/commons/list/Approvals";
import Aboutdetails from "@/commons/list/Aboutdetails";
import Hero from "@/commons/list/Hero";
import CourseFees from "@/commons/list/CourseFees";
import Ranking from "@/commons/list/Rankings";
import FrontendSidebar from "../common/FrontendSidebar";
function Index({ data }) {
    return (<>
        <Layout>
            <div className="py-4 md:py-8 ">
                <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1430px]  px-4">
                    <Hero data={data?.CourseData} />
                </div>
                <div className="w-full flex items-start pt-10 justify-center h-full relative flex-wrap">
                    <div
                        className="w-full lg:w-3/12 bg-[#f9fafb] lg:shadow-[4px_4px_4px_rgba(0,0,0,0.06)] h-full overflow-y-auto justify-end flex lg:pr-4 relative animate-slide-fade-right animate-delay-200"
                    >
                        <FrontendSidebar />
                    </div>
                    <div className="w-full lg:w-9/12 h-full lg:h-[100vh] overflow-y-auto " style={{ scrollbarWidth: "none", }}>
                        <Aboutdetails about={data?.CourseData?.about} />
                        <CourseFees />
                        <Approvals approvals={data?.CourseData?.approvals} approvalsdata={data?.approvalsData} />
                        <Ranking rankings={data?.CourseData?.rankings} />
                        <CoursesSwiper />
                        <Advantages advantages={data?.CourseData?.advantages} />
                        <Facts facts={data?.CourseData?.facts} />
                        <SampleCertificate certificates={data?.CourseData?.certificates} />
                        <ExaminationPattern examPatterns={data?.CourseData?.examPatterns} />
                        <Financial financialAid={data?.CourseData?.financialAid} />
                        <UniversityCampusCarousel universityCampuses={data?.CourseData?.universityCampuses} />
                        <PlacementPartners placements={data?.CourseData?.partners} PlacementPartners={data?.placementPartners} />
                        <CareerServices services={data?.CourseData?.services} />
                        <StepsSection admissionProcess={data?.CourseData?.admissionProcess} />
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
    try {
        const { slug } = context.query;
        const main = new Listing();
        const res = await main.CourseGet(slug);
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