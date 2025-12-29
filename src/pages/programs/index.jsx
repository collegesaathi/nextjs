
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

export default function TermsConditions() {
    return (
        <Layout>
            <div className="mx-auto container sm:container md:container xl:max-w-[1230px]  px-2 md:px-4 py-4 md:mt-20 lg:mt-20 ">
                {/* Breadcrumb */}
                <div className=" py-4 text-sm text-gray-500 mt-6">
                    <nav className="flex items-center gap-2">
                        <span className="text-gray-400">Home</span>
                        <span>{">"}</span>
                        <span className="text-[#EC1E24] font-medium">All Online Programs</span>
                    </nav>
                </div>
                <ProgramHero />
                <StatsCounter />
                <UniversityApplyForm />
                <AudioPlayer />
                <InfoSection />
                <AcademicValueSection />
                <WhyPursue />
                {/* <KeyHighlights /> */}
                <YoutubePlayer  videoId="dQw4w9WgXcQ" />
                <UniversityTable />
                <CollegesathiAdvantages />
                <WorkExperienceRequirement />

      
            





            </div>
        </Layout>
    );
}
