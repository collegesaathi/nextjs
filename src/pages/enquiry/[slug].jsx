import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Hero from "../../commons/list/Hero";
import UniversitySidebar from "../common/FrontendSidebar";
import Reviews from "../common/Reviews";
import Universities from "../common/Universities";
import SimilarUniversities from "../common/SimilarUniversities";
import FAQSection from "../../commons/list/FAQSection";
import StepsSection from "../../commons/list/StepsSection";
import CareerServices from "../common/CareerServices";
import UniversityCampusCarousel from "../common/UniversityCampusCarousel";
import Financial from "../../commons/list/Financial";
import ExaminationPattern from "../../commons/list/ExaminationPattern";
import SampleCertificate from "../../commons/list/SampleCertificate";
import Facts from "../../commons/list/Facts";
import Advantages from "../../commons/list/Advantages";
import CoursesSwiper from "../common/CoursesSwiper";
import Ranking from "../../commons/list/Rankings";
import PlacementPartners from "../common/PlacementPartners";
import CourseFees from "../../commons/list/CourseFees";
import Aboutdetails from "../../commons/list/Aboutdetails";
import Approvals from "../common/Approvals";
import UpdatedFee from "../../commons/list/UpdatedFee";
import Eligibility from "../../commons/list/Eligibility";
import Curriculum from "../../commons/list/Curriculum";
import EnquiryForm from "../common/EnquiryForm";
import MarketingManagement from "../common/MarketingManagement";

function Index() {
    const router = useRouter();
    return (<>
        <Layout>
            <div className="py-4 md:py-6 ">
              
                <div className="w-full flex items-start pt-10 justify-center h-full relative flex-wrap">
                  
                    <div className="w-full lg:w-9/12 h-full lg:h-[100vh] overflow-y-auto " style={{ scrollbarWidth: "none", }}>

                    <EnquiryForm />

                    <MarketingManagement />
                        <UpdatedFee />
              
                        <Approvals />
                        <Ranking />
                        <Eligibility />
                        <Curriculum />
                             <SampleCertificate />
                     
                        <Advantages />
                     
                   
                        <ExaminationPattern />
                        <Financial />
                   
                        <PlacementPartners />
                        <CareerServices />
                        <StepsSection />
                        <FAQSection />
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