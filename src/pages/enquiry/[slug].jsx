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
import UpdatedFee from "../common/UpdatedFee";
import Eligibility from "../common/Eligibility";
import Curriculum from "../common/Curriculum";
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