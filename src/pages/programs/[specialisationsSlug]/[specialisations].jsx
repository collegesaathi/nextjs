
import Link from "next/link";
import Layout from "@/pages/components/Layout";
import ContactForm from "@/pages/contact-us/ContactFormCard";
import ProgramHero from "../ProgramHero";
import StatsCounter from "../StatsCounter";
import UniversityApplyForm from "../UniversityApplyForm";
import AudioPlayer from "../AudioPlayer";
import InfoSection from "../InfoSection";
import AcademicValueSection from "../AcademicValueSection";
import WhyPursue from "../WhyPursue";
import KeyHighlights from "../KeyHighlights";
import UniversityTable from "../UniversityTable";

import YoutubePlayer from "../YoutubePlayer";
import CollegesathiAdvantages from "../CollegesathiAdvantages";
import WorkExperienceRequirement from "../WorkExperienceRequirement";
import Durations from "../Durations";
import FinancialAidSection from "../FinancialAidSection";
import CurriculumSection from "../CurriculumSection";
import ConnectExpertForm from "../ConnectExpertForm";
import Specializations from "../Specializations";
import PlacementOpportunities from "../PlacementOpportunities";
import CareerTable from "../CareerTable";
import TopRecruiters from "../TopRecruiters";
import FutureTrends from "../FutureTrends";
import BestUniversities from "../BestUniversities";
import ConclusionFAQ from "../ConclusionFAQ";
import Syllabus from "../Syllabus";
import AdmissionProcess from "../AdmissionProcess";
import Jobroles from "../Jobroles";
import SalaryTrends from "../SalaryTrends";
import OnlineDemand from "../OnlineDemand";

export default function TermsConditions() {
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
                {/* <KeyHighlights /> */}

                <UniversityTable />
                <ConnectExpertForm />
                <CollegesathiAdvantages bgColor="#E6E7FF" sideBgColor="#CCD5FF" />

                <Durations />


                <ConnectExpertForm />
                <Syllabus />
                <Specializations />
                <AdmissionProcess />
                {/* <Whychoosespecialization /> */}
                <CareerTable />

                <Jobroles />
                <SalaryTrends />

                <TopRecruiters />
                <OnlineDemand />
                <ConnectExpertForm />
                <FutureTrends />
                <BestUniversities />
                <ConclusionFAQ />









            </div>
        </Layout>
    );
}
