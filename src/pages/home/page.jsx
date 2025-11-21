import Layout from "../components/Layout";
import AdvantagesSection from "./AdvantagesSection";
import AwardsCarousel from "./AwardsCarousel";
import Banner from "./Banner";
import BestPartnerCount from "./BestPartnerCount";
import Blogs from "./Blogs";
import Confusion from "./Confusion";
import ContactSection from "./ContactSection";
import ExploreUniversities from "./ExploreUniversities";
import FAQSection from "./FAQSection";
import HelpSection from "./HelpSection";
import IndustryExpertsSection from "./IndustryExperts";
import Logo from "./Logo";
import LogoSlider from "./LogoSlider";
import MediaCarousel from "./MediaCarousel";
import Programs from "./Programs";
import QuickTipsCarousel from "./QuickTipsCarousel";
import Trending from "./Trending";
import University from "./University";

function Page() {
    return (<>
        <Layout>
            <Banner />
            <Logo />
            <LogoSlider />
            <Programs />
            <HelpSection />
            <AdvantagesSection universities={[{ id: 1, name: "Amity", location: "Noida" }]} />
            <University />
            {/* <IndustryExpertsSection />
            <BestPartnerCount />
            <ExploreUniversities />
            <Confusion />
            <Blogs />
            <MediaCarousel />
            <AwardsCarousel />
            <QuickTipsCarousel />
            <FAQSection />
            <ContactSection />
            <Trending /> */}
        </Layout>
    </>);
}

export default Page;