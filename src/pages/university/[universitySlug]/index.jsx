import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "@/pages/components/Layout";
import Hero from "@/commons/list/Hero";
import CourseFees from "@/commons/list/CourseFees";
import CoursesSwiper from "@/commons/list/CoursesSwiper";
import Aboutdetails from "@/commons/list/Aboutdetails";
import Advantages from "@/commons/list/Advantages";
import Facts from "@/commons/list/Facts";
import SampleCertificate from "@/commons/list/SampleCertificate";
import ExaminationPattern from "@/commons/list/ExaminationPattern";
import Financial from "@/commons/list/Financial";
import UniversityCampusCarousel from "@/commons/list/UniversityCampusCarousel";
import Approvals from "@/commons/list/Approvals";
import Ranking from "@/commons/list/Rankings";
import StepsSection from "@/commons/list/StepsSection";
import CareerServices from "@/commons/list/CareerServices";
import PlacementPartners from "@/commons/list/PlacementPartners";
import FAQSection from "@/commons/list/FAQSection";
import Reviews from "@/commons/list/Reviews";
import SimilarUniversities from "@/commons/list/SimilarUniversities";
import Universities from "@/commons/list/Universities";
import FrontendSidebar from "@/pages/common/FrontendSidebar";
import EnquiryBox from "@/commons/list/EnquiryForm";
import Listing from "@/pages/api/Listing";
import { fetchDetails } from "@/lib/ssrFetch";

export default function UniversityPage({ data }) {
    console.log("data" ,data)
  const router = useRouter();

  const uniId = data?.university?.id;
  const [loading, setLoading] = useState(false);
  const [courseData, setCourseData] = useState([]);

  // Fetch courses dynamically
  const fetchCourse = async (uniId) => {
    setLoading(true);
    try {
      const main = new Listing();
      const response = await main.UniveristyCourseGet(uniId);
      setCourseData(response?.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (uniId) fetchCourse(uniId);
  }, [uniId]);

  return (
    <>
      <Head>
        <title>{data?.university?.name} - University</title>
      </Head>
      <Layout>
        <div className="md:py-8">
          <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1430px] px-2 md:px-4">
            <Hero
              data={data?.university}
              approvalsdata={data?.approvalsData}
              exisitng={"university"}
            />
          </div>

          <div className="w-full flex items-start pt-10 justify-center h-full relative flex-wrap">
            {/* Sidebar */}
            <div className="w-full lg:w-3/12 bg-[#f9fafb] mx-2 lg:mx-0 lg:shadow-[4px_4px_4px_rgba(0,0,0,0.06)] h-full overflow-y-auto justify-end flex lg:pr-4 relative animate-slide-fade-right animate-delay-200">
              <FrontendSidebar
                data={data?.university}
                courseData={courseData?.data}
              />
            </div>

            {/* Main content */}
            <div
              className="w-full lg:w-9/12 h-full lg:h-[100vh] overflow-y-auto"
              style={{ scrollbarWidth: "none" }}
            >
              {data?.university?.about && (
                <Aboutdetails about={data?.university?.about} />
              )}

              {courseData?.data?.length > 0 && (
                <CourseFees courseData={courseData?.data} />
              )}

              {data?.university?.approvals && (
                <Approvals
                  approvals={data?.university?.approvals}
                  approvalsdata={data?.approvalsData}
                />
              )}

              {data?.university?.rankings && (
                <Ranking rankings={data?.university?.rankings} />
              )}

              {courseData?.data?.length > 0 && (
                <CoursesSwiper
                  courseData={courseData}
                  name={"university"}
                  title={`${data?.university?.name} - Course`}
                  slug={`${data?.university?.slug}`}
                />
              )}

              <EnquiryBox />

              {data?.university?.advantages && (
                <Advantages advantages={data?.university?.advantages} />
              )}
              {data?.university?.facts && <Facts facts={data?.university?.facts} />}
              {data?.university?.certificates && (
                <SampleCertificate certificates={data?.university?.certificates} />
              )}
              {data?.university?.examPatterns && (
                <ExaminationPattern examPatterns={data?.university?.examPatterns} />
              )}
              {data?.university?.financialAid && (
                <Financial
                  financialAid={data?.university?.financialAid}
                  name={data?.university?.name}
                />
              )}
              {data?.university?.universityCampuses && (
                <UniversityCampusCarousel
                  universityCampuses={data?.university?.universityCampuses}
                  name={data?.university?.name}
                />
              )}
              {data?.university?.partners && (
                <PlacementPartners
                  partners={data?.university?.partners}
                  PlacementPartners={data?.placementPartners}
                />
              )}
              {data?.university?.services && (
                <CareerServices services={data?.university?.services} />
              )}
              {data?.university?.admissionProcess && (
                <StepsSection admissionProcess={data?.university?.admissionProcess} />
              )}
              {data?.university?.faq?.length > 0 && (
                <FAQSection faq={data?.university?.faq} />
              )}

              <SimilarUniversities />
              <Universities />
              <Reviews name={data?.university?.name} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

// Server-side fetch
export async function getServerSideProps(context) {
  return fetchDetails(context, "university");
}
