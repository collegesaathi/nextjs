import Layout from "../components/Layout";
import Banner from "./Banner";
import HelpSection from "./HelpSection";
import Logo from "./Logo";
import LogoSlider from "./LogoSlider";
import Programs from "./Programs";
import University from "./University";

function Page() {
    return (<>
        <Layout>
            <Banner />
            <Logo />
            <LogoSlider />
            <Programs />
            <HelpSection />
            <University/>
        </Layout>
    </>);
}

export default Page;