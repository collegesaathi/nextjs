import { useState } from "react";
import Layout from "../components/Layout";
import HeroGallery from "./HeroGallery";
import StorySection from "./StorySection";
import ClaritySection from "./ClaritySection";
import VisionaryLeaders from "./VisionaryLeaders";
import TeamAndAchievements from "./TeamAndAchievements";
import AwardsCarousel from "../home/AwardsCarousel";
import IndustryExperts from "../home/IndustryExperts";
import ContactSection from "../home/ContactSection";
import WhyChooseUs from "./WhyChooseUs";
import AcrossIndia from "./AcrossIndia";


function Index() {

    return (<>

        <Layout>
{/* 
            <div className="mx-auto container sm:container md:container xl:max-w-[1230px]  px-4 py-4 md:mt-20 lg:mt-20 "> */}
                <HeroGallery />
                <StorySection />
                <ClaritySection />
                <VisionaryLeaders />
                <TeamAndAchievements />
                <AwardsCarousel/>
                <IndustryExperts />
                <AcrossIndia />
                <WhyChooseUs/>
                <ContactSection/>
            {/* </div> */}

        </Layout>

    </>);
}

export default Index;