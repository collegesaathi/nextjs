import Image from "next/image";
import { useState } from "react";

function Ranking() {
    const [activeTab, setActiveTab] = useState("indian");

    const RankingIcon = "/assets/icons/ranking.png";
    const EduIcon = "/assets/icons/education.png";
    const GradeIcon = "/assets/icons/grade.png";
    const WorkIcon = "/assets/icons/work.png";
    return (
        <>
            <div>
                <h2 className="text-[26px] font-bold mb-4 text-[#282529] font-poppins">
                    Rankings of NMIMS CDOE
                </h2>

                <p className="text-[16.5px] font-medium text-[#363535] font-poppins">
                    <strong>NMIMS CDOE</strong> has earned several prestigious rankings and awards that
                    highlight its commitment to delivering quality online education across the globe.
                    Below is an overview of the key achievements:
                </p>

                <ul className="list-none space-y-5 lg:space-y-2 pt-4">
                    {[
                        "NIRF Ranking:#21 under Management Category.",
                        "NAAC Accreditation:A+ Grade.",
                        "Excellence in Distance Learning:#6 in India by DNA Indus Learning Survey.",
                        "Recognition from UGC:Category 1 Autonomy from UGC.",
                        "Education Innovation Awards 2022:Best University with an Online Degree by Entrepreneur India.",
                        "World Education Congress 2021:Multiple Awards for Excellence in Online Education.",
                    ].map((item, index) => {
                        const [title, desc] = item.split(":");
                        return (
                            <li
                                key={index}
                                className="flex items-start text-[#363535] text-[16px] font-poppins gap-2"
                            >
                                <Image src={RankingIcon} alt="ranking" width={18} height={18} />

                                <div className="w-[90%]">
                                    <strong>{title}</strong>{" "}
                                    {desc.includes("#21") && (
                                        <span className="font-bold bg-[#aeefa5] px-2 rounded-xl mx-2">#21</span>
                                    )}
                                    {desc.includes("A+") && (
                                        <span className="font-bold bg-[#aeefa5] px-2 rounded-xl mx-2">A+</span>
                                    )}
                                    {desc.includes("#6") && (
                                        <span className="font-bold bg-[#aeefa5] px-2 rounded-xl mx-2">#6</span>
                                    )}
                                    {desc.replace("#21", "").replace("A+", "").replace("#6", "")}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* Eligibility Section */}
            <div className="mt-12">
                <h2 className="text-[26px] font-bold mb-4 text-[#282529] font-poppins">
                    Eligibility Criteria : NMIMS Online MBA in Marketing Management
                </h2>

                <p className="text-[16px] font-poppins font-medium mb-4 text-[#363535]">
                    To apply for the Online MBA in Marketing Management course with NMIMS CDOE, you need
                    to meet the following requirements:
                </p>

                <div className="border border-[#D8D8D8] bg-[#FCF0EE] rounded-[10px]">
                    {/* Tabs */}
                    <div className="flex w-full">
                        <button
                            onClick={() => setActiveTab("indian")}
                            className={`w-1/2 h-[40px] text-[12px] sm:text-[16.5px] font-poppins flex items-center justify-center
                ${activeTab === "indian"
                                    ? "font-bold bg-[#FCF0EE]"
                                    : "font-medium bg-white"
                                }`}
                        >
                            Indian Students
                        </button>

                        <button
                            onClick={() => setActiveTab("nri")}
                            className={`w-1/2 h-[40px] text-[12px] sm:text-[16.5px] font-poppins flex items-center justify-center
                ${activeTab === "nri"
                                    ? "font-bold bg-[#FCF0EE]"
                                    : "font-medium bg-white"
                                }`}
                            style={activeTab === "nri" ? { borderBottomLeftRadius: "30px" } : {}}
                        >
                            NRI & Foreign Students
                        </button>
                    </div>

                    {/* Indian Students */}
                    {activeTab === "indian" && (
                        <div className="grid md:grid-cols-3 bg-white shadow rounded-lg m-4">
                            {[
                                {
                                    title: "Educational Qualification",
                                    desc: "You must have at least a Bachelor's degree (10+2+3 pattern) in any discipline from a recognised university.",
                                    icon: EduIcon,
                                },
                                {
                                    title: "Grades",
                                    desc: "You must have achieved at least 50% marks in your graduation.",
                                    note:
                                        "*If you belong to the SC/ST/OBC/PwD categories, a minimum of 45% aggregate is required in your undergraduate.",
                                    icon: GradeIcon,
                                },
                                {
                                    title: "Work Experience",
                                    desc: "Work experience is not mandatory but gives you an advantage in learning.",
                                    icon: WorkIcon,
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start space-x-4 border-b md:border-r border-[#FCF0EE] p-4"
                                >
                                    <div className="w-[34px] h-[34px] rounded-full bg-[#FCF0EE] flex items-center justify-center">
                                        <Image src={item.icon} alt="icon" width={18} height={18} />
                                    </div>

                                    <div className="w-[80%]">
                                        <h3 className="text-[#282529] font-semibold text-[16px]">
                                            {item.title}
                                        </h3>
                                        <p className="text-[#363535] text-[14px] font-medium">
                                            {item.desc}
                                        </p>
                                        {item.note && (
                                            <p className="text-[10px] text-[#363535] font-light mt-1">
                                                {item.note}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* NRI Students */}
                    {activeTab === "nri" && (
                        <div className="grid md:grid-cols-3 bg-white shadow rounded-lg m-4">
                            {[
                                {
                                    title: "Educational Qualification",
                                    desc: "Qualifications must be recognized by the Association of Indian Universities (AIU).",
                                    icon: EduIcon,
                                },
                                {
                                    title: "Grades",
                                    desc: "Minimum equivalent to 50% marks in Indian grading system.",
                                    note:
                                        "*For reserved categories, minimum equivalent to 45% aggregate.",
                                    icon: GradeIcon,
                                },
                                {
                                    title: "Additional Requirements",
                                    desc: "Students must submit equivalence certificate and visa/passport.",
                                    icon: WorkIcon,
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start space-x-4 border-b md:border-r border-[#FCF0EE] p-4"
                                >
                                    <div className="w-[34px] h-[34px] rounded-full bg-[#FCF0EE] flex items-center justify-center">
                                        <Image src={item.icon} alt="icon" width={18} height={18} />
                                    </div>

                                    <div className="w-[80%]">
                                        <h3 className="text-[#282529] font-semibold text-[16px]">
                                            {item.title}
                                        </h3>
                                        <p className="text-[#363535] text-[14px] font-medium">
                                            {item.desc}
                                        </p>
                                        {item.note && (
                                            <p className="text-[10px] text-[#363535] font-light mt-1">
                                                {item.note}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Ranking;