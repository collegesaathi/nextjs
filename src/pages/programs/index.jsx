
import Link from "next/link";
import Layout from "../components/Layout";
import ContactSection from "../home/ContactSection";
import ProgramHero from "./ProgramHero";
import StatsCounter from "./StatsCounter";
import UniversityApplyForm from "./UniversityApplyForm";
import AudioPlayer from "./AudioPlayer";
import InfoSection from "./InfoSection";
import AcademicValueSection from "./AcademicValueSection";
import WhyPursue from "./WhyPursue";
import KeyHighlights from "./KeyHighlights";
import UniversityTable from "./UniversityTable";

import YoutubePlayer from "./YoutubePlayer";
import CollegesathiAdvantages from "./CollegesathiAdvantages";
import WorkExperienceRequirement from "./WorkExperienceRequirement";
import Durations from "./Durations";
import FinancialAidSection from "./FinancialAidSection";
import CurriculumSection from "./CurriculumSection";
import ConnectExpertForm from "./ConnectExpertForm";
import Specializations from "./Specializations";
import PlacementOpportunities from "./PlacementOpportunities";
import CareerTable from "./CareerTable";
import TopRecruiters from "./TopRecruiters";
import FutureTrends from "./FutureTrends";
import BestUniversities from "./BestUniversities";
import ConclusionFAQ from "./ConclusionFAQ";
import ProgramFuture from "./ProgramFuture";

export default function Index() {
    return (
        <Layout>
            <div className="mx-auto    px-2 md:px-4 py-4 md:mt-20 lg:mt-20 ">
                {/* Breadcrumb */}
             
                <ProgramHero />
                <StatsCounter />
                <UniversityApplyForm />
                <AudioPlayer />
                <InfoSection />
                <AcademicValueSection />
                <WhyPursue />
                <KeyHighlights />
                <YoutubePlayer  videoId="dQw4w9WgXcQ" />
                <ProgramFuture />
                <UniversityTable />
                <ConnectExpertForm />
                <CollegesathiAdvantages  bgColor="#FFFBE6" sideBgColor="#FFEDCC" yellow />
                <WorkExperienceRequirement />
                <Durations />
                <FinancialAidSection />
                <CurriculumSection />
                <ConnectExpertForm />
                <Specializations />
                <PlacementOpportunities />
                <CareerTable />
                <TopRecruiters />
                <ConnectExpertForm />
                <FutureTrends />
                <BestUniversities />
                <ConclusionFAQ />
               

      
            





            </div>
        </Layout>
    );
}
