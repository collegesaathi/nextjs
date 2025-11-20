import Layout from "../components/Layout";
import Banner from "./Banner";
import Blogs from "./Blogs";
import HelpSection from "./HelpSection";
import Logo from "./Logo";
import LogoSlider from "./LogoSlider";
import Programs from "./Programs";
import Trending from "./Trending";
import University from "./University";

function Page() {
    return (<>
        <Layout>
            <Banner />
            <Logo />
            <LogoSlider />
            {/* <Programs />
            <HelpSection />
            <University />
            <Trending />
            <Blogs/> */}
        </Layout>
    </>);
}

export default Page;