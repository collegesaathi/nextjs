import { useState, useEffect } from "react";
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
      <HeroGallery />
      <StorySection />
      <ClaritySection />
      <VisionaryLeaders />
      <TeamAndAchievements />
      <AwardsCarousel />
      <IndustryExperts />
      <AcrossIndia />
      <WhyChooseUs />
      <ContactSection />

    </Layout>

  </>);
}

export default Index;