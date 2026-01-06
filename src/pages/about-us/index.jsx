import { useState,useEffect } from "react";
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
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head'
import CardStack from "./CardStack";


function Index() {



  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

    return (<>
    <Head>
            <title>About Collegesathi | Trusted Platform for Online Degrees in India</title>
            <meta
                name="description"
                content="Learn about Collegesathi, our mission and how we help students choose the right UGC-approved online degree programs."
            />

            <meta
                name="keywords"
                content=""
            />
        </Head>

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
                {/* <CardStack /> */}
                <ContactSection/>
            {/* </div> */}

        </Layout>

    </>);
}

export default Index;