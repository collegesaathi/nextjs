import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Hero from "../common/Hero";
import UniversitySidebar from "../common/UniversitySidebar";
import Reviews from "../common/Reviews";
import Universities from "../common/Universities";
import SimilarUniversities from "../common/SimilarUniversities";
import FAQSection from "../common/FAQSection";
import StepsSection from "../common/StepsSection";
import CareerServices from "../common/CareerServices";
import UniversityCampusCarousel from "../common/UniversityCampusCarousel";
import Financial from "../common/Financial";
import ExaminationPattern from "../common/ExaminationPattern";
import SampleCertificate from "../common/SampleCertificate";
import Facts from "../common/Facts";
import Advantages from "../common/Advantages";
import CoursesSwiper from "../common/CoursesSwiper";
import Ranking from "../common/Rankings";
import PlacementPartners from "../common/PlacementPartners";
import CourseFees from "../common/CourseFees";
import Aboutdetails from "../common/Aboutdetails";
import Approvals from "../common/Approvals";

function Index() {
    const router = useRouter();
    return (<>
        <Layout>

            <div className="py-4 md:py-8 ">

                <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4">
                    {/* <Approvals />  */}
                    <Hero />
                    <div className="w-full flex items-start pt-10 justify-center h-full relative flex-wrap">
                        <div
                            className="w-full lg:w-3/12 bg-[#f9fafb] lg:shadow-[4px_4px_4px_rgba(0,0,0,0.06)] h-full overflow-y-auto justify-end flex lg:pr-4 relative animate-slide-fade-right animate-delay-200"
                        
                        >
                            <UniversitySidebar />
                        </div>
                        <div className="w-full lg:w-9/12 h-full lg:h-[100vh] overflow-y-auto "  style={{ scrollbarWidth: "none",}}>
                            <Aboutdetails />
                             <CourseFees />
                             <Approvals />
                            <PlacementPartners />
                            <Ranking />
                            <CoursesSwiper />
                           <Advantages />
                             <Facts />
                           <SampleCertificate />
                              <ExaminationPattern />
                          <Financial />
                            <UniversityCampusCarousel />
                           <CareerServices />
                           <StepsSection />
                               <FAQSection />
                            <SimilarUniversities />
                             <Universities />
                           <Reviews />
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    </>);
}

export default Index;