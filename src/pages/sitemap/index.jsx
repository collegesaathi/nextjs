import { useState } from "react";
import Layout from "../components/Layout";

function Sitemap() {
    const [activeTab, setActiveTab] = useState("Programs");

    const sitemapTabs = ["Programs", "Blogs", "Specialization", "Other"];

    const sitemapData = {
        Programs: [
            {
                title: "MCA",
                items: [
                    "Amity University Online",
                    "Lovely Professional University",
                    "Chandigarh University",
                    "Manipal University Online",
                    "Sharda University",
                    "Bharti Vidyapeeth",
                    "Jain University",
                    "Andhra University",
                    "Parul University",
                    "Gla University",
                    "Graphic Era University",
                    "Kurukshetra University",
                    "Vignan University",
                    "Uttarakhand University",
                    "Mody University",
                    "Manav Rachna University",
                    "Srm University",
                    "Sikkim Manipal University",
                    "Amrita Vishwa Vidyapeetham",
                    "Vgu Vivekananda Global University",
                    "Mangalaytan Online University",
                    "Datta Meghe Institute",
                    "Shoolini University",
                    "University Of Mysore",
                ],
            },
            {
                title: "MA",
                items: [
                    "Amity University Online",
                    "Lovely Professional University",
                    "Chandigarh University",
                    "Manipal University Online",
                    "Sharda University",
                    "Bharti Vidyapeeth",
                    "Jain University",
                    "Andhra University",
                    "Parul University",
                    "Gla University",
                    "Graphic Era University",
                ],
            },
            {
                title: "M.Com",
                items: [
                    "Amity University Online",
                    "Lovely Professional University",
                    "Chandigarh University",
                    "Manipal University Online",
                    "Sharda University",
                    "Bharti Vidyapeeth",
                    "Jain University",
                    "Andhra University",
                    "Parul University",
                    "Gla University",
                    "Graphic Era University",
                    "Datta Meghe Institute",
                    "Shoolini University",
                    "University Of Mysore",
                ],
            },
            {
                title: "B.Com",
                items: [
                    "Amity University Online",
                    "Lovely Professional University",
                    "Chandigarh University",
                    "Manipal University Online",
                    "Sharda University",
                    "Bharti Vidyapeeth",
                    "Jain University",
                    "Andhra University",
                    "Parul University",
                    "Gla University",
                    "Graphic Era University",
                ],
            },
            {
                title: "Online BA",
                items: [
                    "Amity University Online",
                    "Lovely Professional University",
                    "Chandigarh University",
                    "Manipal University Online",
                    "Sharda University",
                    "Bharti Vidyapeeth",
                    "Jain University",
                    "Andhra University",
                    "Parul University",
                    "Gla University",
                    "Graphic Era University",
                ],
            },
            {
                title: "Online MBA",
                items: [
                    "Amity University Online",
                    "Lovely Professional University",
                    "Chandigarh University",
                    "Manipal University Online",
                    "Sharda University",
                    "Bharti Vidyapeeth",
                    "Jain University",
                    "Andhra University",
                    "Parul University",
                    "Gla University",
                    "Graphic Era University",
                    "Kurukshetra University",
                    "Vignan University",
                    "Uttarakhand University",
                    "Mody University",
                    "Manav Rachna University",
                    "Srm University",
                    "Sikkim Manipal University",
                    "Amrita Vishwa Vidyapeetham",
                    "Vgu Vivekananda Global University",
                    "Mangalaytan Online University",
                    "Datta Meghe Institute",
                    "Shoolini University",
                    "University Of Mysore",
                ],
            },
        ],
        Blogs: [],
        Specialization: [],
        Other: [],
    };
    return (<>
        <Layout>
            <div className="bg-[#fff7f5] py-10">
                <div className="mx-auto container sm:container md:container xl:max-w-[1230px]  px-4 py-4 md:mt-20 lg:mt-40 ">
                    <div className="max-w-7xl mx-auto px-6">
                        <h1 className="text-4xl font-semibold">Sitemap</h1>

                        {/* Tabs */}
                        <div className="flex gap-8 mt-8 border-b border-gray-300 pb-2">
                            {sitemapTabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`pb-2 text-lg font-medium ${activeTab === tab
                                        ? "text-[#D14B4B] border-b-2 border-[#D14B4B]"
                                        : "text-gray-500 hover:text-gray-800"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-10 mb-5 bg-white rounded-xl p-8 shadow-sm">
                {activeTab === "Programs" && (
                    <>
                        <h2 className="text-xl font-semibold">Programs</h2>

                        <div className="mt-6 space-y-10">
                            {sitemapData.Programs.map((section, i) => (
                                <div key={i}>
                                    <h3 className="text-lg font-semibold mb-4">{section.title}</h3>

                                    <div className="flex flex-wrap gap-3">
                                        {section.items.map((item, index) => (
                                            <span
                                                key={index}
                                                className="text-sm px-3 py-1 border border-red-300 bg-red-50 rounded-md text-red-700"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </Layout>
    </>);
}

export default Sitemap;