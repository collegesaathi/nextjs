
import Reviews from "@/commons/list/Reviews";
import Universities from "@/commons/list/Universities";
import SimilarUniversities from "@/commons/list/SimilarUniversities";
import FAQSection from "@/commons/list/FAQSection";
import StepsSection from "@/commons/list/StepsSection";
import CareerServices from "@/commons/list/CareerServices";
import PlacementPartners from "@/commons/list/PlacementPartners";
import Financial from "@/commons/list/Financial";
import ExaminationPattern from "@/commons/list/ExaminationPattern";
import SampleCertificate from "@/commons/list/SampleCertificate";
import Advantages from "@/commons/list/Advantages";
import Approvals from "@/commons/list/Approvals";
import Aboutdetails from "@/commons/list/Aboutdetails";
import Hero from "@/commons/list/Hero";
import CourseFees from "@/commons/list/CourseFees";
import Ranking from "@/commons/list/Rankings";
import { fetchDetails } from "@/lib/ssrFetch";
import Eligibility from "@/commons/list/Eligibility";
import Curriculum from "@/commons/list/Curriculum";
import Skills from "@/commons/list/Skills";
import AdminLayout from "../common/AdminLayout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Listing from "@/pages/api/Listing";
import CarreerOppurtunity from "@/commons/list/CarreerOppurtunity";
import UpdatedFee from "@/commons/list/UpdatedFee";
function Index() {
    const router = useRouter();
    const id = router.query.slug;
    console.log(id);
    const [data, setData] = useState("");

    console.log(data)
    useEffect(() => {
        if (!id) return; // wait for router to provide slug

        const fetchData = async () => {
            try {
                const main = new Listing();
                const response = await main.SpecializationGet(id);
                setData(response.data.data); // set your fetched data
            } catch (error) {
                console.error("Error fetching course:", error);
            }
        };

        fetchData();
    }, [id]);
    return (<>
        <AdminLayout>
            <div className="py-4 md:py-8 ">
                <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1430px]  px-4">
                    <Hero data={data?.SpecialisationData} />
                </div>
                <div className="w-full lg:w-9/12 h-full lg:h-[100vh] overflow-y-auto " style={{ scrollbarWidth: "none", }}>
                    {data?.SpecialisationData?.about && (<Aboutdetails about={data?.SpecialisationData?.about} />)}
                    {data?.SpecialisationData?.fees && (<UpdatedFee fees={data?.SpecialisationData?.fees} />)}
                    {data?.SpecialisationData?.approvals && (<Approvals approvals={data?.SpecialisationData?.approvals} approvalsdata={data?.approvalsData} />)}
                    {data?.SpecialisationData?.advantages && (<Advantages advantages={data?.SpecialisationData?.advantages} />)}
                    {data?.SpecialisationData?.rankings && (<Ranking rankings={data?.SpecialisationData?.rankings} />)}
                    <Eligibility eligibilitycriteria={data?.SpecialisationData?.eligibilitycriteria} />
                    <Curriculum curriculum={data?.SpecialisationData?.curriculum} />
                    {data?.SpecialisationData?.certificates && (<SampleCertificate certificates={data?.SpecialisationData?.certificates} />)}
                    {data?.SpecialisationData?.skills && (<Skills skills={data?.SpecialisationData?.skills} />)}
                    <ExaminationPattern examPatterns={data?.SpecialisationData?.examPatterns} />
                    <Financial financialAid={data?.SpecialisationData?.financialAid} />
                    <CarreerOppurtunity career={data?.SpecialisationData?.career} />
                    <PlacementPartners placements={data?.SpecialisationData?.partners} PlacementPartners={data?.placementPartners} />
                    <CareerServices services={data?.SpecialisationData?.services} />
                    <StepsSection admissionProcess={data?.SpecialisationData?.admissionprocess} />
                    <FAQSection faq={data?.SpecialisationData?.faq} />
                    <SimilarUniversities />
                    <Universities />
                    <Reviews />
                </div>
            </div>
        </AdminLayout>
    </>);
}
export default Index;
