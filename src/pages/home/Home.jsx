import Layout from "../components/Layout";
import AdvantagesSection from "./AdvantagesSection";
import AwardsCarousel from "./AwardsCarousel";
import Banner from "./Banner";
import BestPartnerCount from "./BestPartnerCount";
import Blogs from "./Blogs";
import Confusion from "./Confusion";
import ContactSection from "./ContactSection";
import ExploreUniversities from "./ExploreUniversities";
import FAQSection from "../common/FAQSection";
import HelpSection from "./HelpSection";
import Logo from "./Logo";
import LogoSlider from "./LogoSlider";
import Programs from "./Programs";
import QuickTipsCarousel from "./QuickTipsCarousel";
import University from "./University";
import IndustryExpertsSection from "./IndustryExperts";
import Trending from "./Trending";
import MediaCarousel from "./MediaCarousel";

function Home() {
    return (<>
        <Layout>
            <Banner />
            <Logo />
            <LogoSlider />
            <Programs />
            <HelpSection />
            <AdvantagesSection universities={[{ id: 1, name: "Amity", location: "Noida" }]} />
            <University />
            <IndustryExpertsSection />
            <ExploreUniversities />
            <BestPartnerCount />
            <Trending />
            <Confusion />
            <Blogs />
            <MediaCarousel />
            <AwardsCarousel />
            <QuickTipsCarousel />
            <FAQSection />
            <ContactSection />


     
  
        </Layout>
    </>);
}

export default Home;