import { useState } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link"; // Added for breadcrumbs
import ContactSection from "../home/ContactSection";

function Sitemap() {
    const [activeTab, setActiveTab] = useState("Programs");

    const sitemapTabs = ["Programs", "Blogs", "Specialization", "Other"];

    const sitemapData = {
        Programs: [
            {
                title: "MCA",
                items: [
                    "Amity University Online", "Lovely Professional University", "Chandigarh University",
                    "Manipal University Online", "Sharda University", "Bharti Vidyapeeth",
                    "Jain University", "Andhra University", "Parul University", "Gla University",
                    "Graphic Era University", "Kurukshetra University", "Vignan University",
                    "Uttarakhand University", "Mody University", "Manav Rachna University",
                    "Srm University", "Sikkim Manipal University", "Amrita Vishwa Vidyapeetham",
                    "Vgu Vivekananda Global University", "Mangalaytan Online University",
                    "Datta Meghe Institute", "Shoolini University", "University Of Mysore",
                ],
            },
            {
                title: "MA",
                items: ["Amity University Online", "Lovely Professional University", "Chandigarh University"],
            },
            // ... (rest of your data)
        ],
        Blogs: [],
        Specialization: [],
        Other: [],
    };

    return (
        <Layout>
            {/* --- HERO HEADER SECTION --- */}
            <div className="relative w-full  pt-10 pb-16 md:pt-40 md:pb-24 overflow-hidden">
                
                {/* 1. Background Wave Image (Absolute & Bottom Aligned) */}
                <div className="absolute top-0 left-0 w-full h-[100%]  z-0 pointer-events-none">
                    <Image 
                        src="/images/wave.png" 
                        alt="Background Wave" 
                        fill 
                        className="object-cover object-bottom"
                        priority
                    />
                </div>

                {/* 2. Content Container (Relative & High Z-Index) */}
                <div className="relative z-10 mx-auto container sm:container md:container xl:max-w-[1230px] px-4">
                    
                    {/* Breadcrumbs */}
                    <div className="flex items-center text-sm text-gray-500 mb-4 font-medium">
                        <Link href="/" className="hover:text-red-500 transition">Home</Link>
                        <span className="mx-2">{'>'}</span>
                        <span className="text-[#EC1E24]">Sitemap</span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-[36px] md:text-[60px] font-[600] text-[#282529] mb-12 font-poppins">
                        Sitemap
                    </h1>

                    {/* Navigation Tabs */}
                    <div className="flex flex-wrap gap-8 md:gap-16">
                        {sitemapTabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-2 text-lg md:text-[16px] font-medium transition-all font-poppins duration-300
                                    ${activeTab === tab
                                    ? "text-[#EC1E24] border-b-2 border-[#EC1E24]"
                                    : "text-[#282529] hover:text-gray-900 border-b-2 border-transparent"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

       


             <div className="max-w-7xl mx-auto mt-10 mb-5 bg-white rounded-xl p-8 shadow-md">
               {activeTab === "Programs" && (
                     <>
                         <h2 className="text-[20px] md:text-[28px] font-[700] border-b border-[#BDBDBD] py-4">Programs</h2>

                         <div className="mt-6 space-y-10">
                             {sitemapData.Programs.map((section, i) => (
                                 <div key={i}>
                                     <h3 className="text-[16px] md:text-[20px] font-[600] mb-4">{section.title}</h3>

                                     <div className="flex flex-wrap gap-3">
                                         {section.items.map((item, index) => (
                                             <span
                                                 key={index}
                                                 className="text-[14px] md:text-[16px] px-3 py-1 border border-[#FCD9D5] bg-[#FBFBFB] rounded-md text-[#EC1E24]"
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
             <ContactSection />
        </Layout>
    );
}

export default Sitemap;


// import { useState } from "react";
// import Layout from "../components/Layout";
// import Image from "next/image";

// function Sitemap() {
//     const [activeTab, setActiveTab] = useState("Programs");

//     const sitemapTabs = ["Programs", "Blogs", "Specialization", "Other"];

//     const sitemapData = {
//         Programs: [
//             {
//                 title: "MCA",
//                 items: [
//                     "Amity University Online",
//                     "Lovely Professional University",
//                     "Chandigarh University",
//                     "Manipal University Online",
//                     "Sharda University",
//                     "Bharti Vidyapeeth",
//                     "Jain University",
//                     "Andhra University",
//                     "Parul University",
//                     "Gla University",
//                     "Graphic Era University",
//                     "Kurukshetra University",
//                     "Vignan University",
//                     "Uttarakhand University",
//                     "Mody University",
//                     "Manav Rachna University",
//                     "Srm University",
//                     "Sikkim Manipal University",
//                     "Amrita Vishwa Vidyapeetham",
//                     "Vgu Vivekananda Global University",
//                     "Mangalaytan Online University",
//                     "Datta Meghe Institute",
//                     "Shoolini University",
//                     "University Of Mysore",
//                 ],
//             },
//             {
//                 title: "MA",
//                 items: [
//                     "Amity University Online",
//                     "Lovely Professional University",
//                     "Chandigarh University",
//                     "Manipal University Online",
//                     "Sharda University",
//                     "Bharti Vidyapeeth",
//                     "Jain University",
//                     "Andhra University",
//                     "Parul University",
//                     "Gla University",
//                     "Graphic Era University",
//                 ],
//             },
//             {
//                 title: "M.Com",
//                 items: [
//                     "Amity University Online",
//                     "Lovely Professional University",
//                     "Chandigarh University",
//                     "Manipal University Online",
//                     "Sharda University",
//                     "Bharti Vidyapeeth",
//                     "Jain University",
//                     "Andhra University",
//                     "Parul University",
//                     "Gla University",
//                     "Graphic Era University",
//                     "Datta Meghe Institute",
//                     "Shoolini University",
//                     "University Of Mysore",
//                 ],
//             },
//             {
//                 title: "B.Com",
//                 items: [
//                     "Amity University Online",
//                     "Lovely Professional University",
//                     "Chandigarh University",
//                     "Manipal University Online",
//                     "Sharda University",
//                     "Bharti Vidyapeeth",
//                     "Jain University",
//                     "Andhra University",
//                     "Parul University",
//                     "Gla University",
//                     "Graphic Era University",
//                 ],
//             },
//             {
//                 title: "Online BA",
//                 items: [
//                     "Amity University Online",
//                     "Lovely Professional University",
//                     "Chandigarh University",
//                     "Manipal University Online",
//                     "Sharda University",
//                     "Bharti Vidyapeeth",
//                     "Jain University",
//                     "Andhra University",
//                     "Parul University",
//                     "Gla University",
//                     "Graphic Era University",
//                 ],
//             },
//             {
//                 title: "Online MBA",
//                 items: [
//                     "Amity University Online",
//                     "Lovely Professional University",
//                     "Chandigarh University",
//                     "Manipal University Online",
//                     "Sharda University",
//                     "Bharti Vidyapeeth",
//                     "Jain University",
//                     "Andhra University",
//                     "Parul University",
//                     "Gla University",
//                     "Graphic Era University",
//                     "Kurukshetra University",
//                     "Vignan University",
//                     "Uttarakhand University",
//                     "Mody University",
//                     "Manav Rachna University",
//                     "Srm University",
//                     "Sikkim Manipal University",
//                     "Amrita Vishwa Vidyapeetham",
//                     "Vgu Vivekananda Global University",
//                     "Mangalaytan Online University",
//                     "Datta Meghe Institute",
//                     "Shoolini University",
//                     "University Of Mysore",
//                 ],
//             },
//         ],
//         Blogs: [],
//         Specialization: [],
//         Other: [],
//     };
//     return (<>
//         <Layout>

//            <div className="absolute top-0 left-0">
//             <Image src="/images/wave.png" width={200} height={200} className="w-full h-full" />
//            </div>

            
//             <div className="bg-[#fff7f5] py-10">
//                 <div className="mx-auto container sm:container md:container xl:max-w-[1230px]  px-4 py-4 md:mt-20 lg:mt-40 ">
//                     <div className="max-w-7xl mx-auto px-6">
//                         <h1 className="text-4xl font-semibold">Sitemap</h1>

//                         {/* Tabs */}
//                         <div className="flex gap-8 mt-8 border-b border-gray-300 pb-2">
//                             {sitemapTabs.map((tab) => (
//                                 <button
//                                     key={tab}
//                                     onClick={() => setActiveTab(tab)}
//                                     className={`pb-2 text-lg font-medium ${activeTab === tab
//                                         ? "text-[#D14B4B] border-b-2 border-[#D14B4B]"
//                                         : "text-gray-500 hover:text-gray-800"
//                                         }`}
//                                 >
//                                     {tab}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="max-w-7xl mx-auto mt-10 mb-5 bg-white rounded-xl p-8 shadow-sm">
//                 {activeTab === "Programs" && (
//                     <>
//                         <h2 className="text-xl font-semibold">Programs</h2>

//                         <div className="mt-6 space-y-10">
//                             {sitemapData.Programs.map((section, i) => (
//                                 <div key={i}>
//                                     <h3 className="text-lg font-semibold mb-4">{section.title}</h3>

//                                     <div className="flex flex-wrap gap-3">
//                                         {section.items.map((item, index) => (
//                                             <span
//                                                 key={index}
//                                                 className="text-sm px-3 py-1 border border-red-300 bg-red-50 rounded-md text-red-700"
//                                             >
//                                                 {item}
//                                             </span>
//                                         ))}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </>
//                 )}
//             </div>
//         </Layout>
//     </>);
// }

// export default Sitemap;