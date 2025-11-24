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
            {/* <Logo />
            <LogoSlider />
            <Programs /> */}
            <BestPartnerCount />

            {/* <FAQSection />
            <ContactSection />

            <HelpSection />
            <University />
            <Trending />
            <Blogs />
            <MediaCarousel />
            <AwardsCarousel />
            <QuickTipsCarousel />
            <AdvantagesSection universities={[{ id: 1, name: "Amity", location: "Noida" }]} />
            <IndustryExpertsSection />
            <ExploreUniversities />
            <Confusion /> */}
        </Layout>
    </>);
}

export default Page;