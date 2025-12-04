import Image from "next/image";
import { useState } from "react";
import Heading from "@/common/Heading";

function Ranking() {
    const [activeTab, setActiveTab] = useState("indian");

    const RankingIcon = "/assets/icons/ranking.png";
    const EduIcon = "/assets/icons/education.png";
    const GradeIcon = "/assets/icons/grade.png";
    const WorkIcon = "/assets/icons/work.png";
    return (
        <>
            <section className="w-full px-6 py-6 mx-auto" id="rankings-section">
                <div className="max-w-[1100px]">
                    <Heading title={"Rankings of NMIMS CDOE "} />
                    <p className="text-[15px] md:text-[17px] font-[400] text-[#363535] font-poppins">
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
                                    className="flex items-start text-[#363535] text-[17px] font-poppins gap-2"
                                >
                                    <Image src={RankingIcon} alt="ranking" width={18} height={18} />

                                    <div className="w-[90%]">
                                        <strong>{title}</strong>{" "}
                                        {desc.includes("#21") && (
                                            <span className="font-poppins font-[600] bg-[#aeefa5] px-2 rounded-xl mx-2 text-[17px] leading-[37px] tracking-[0px]">#21</span>
                                        )}
                                        {desc.includes("A+") && (
                                            <span className="font-poppins font-[600]  bg-[#aeefa5] px-2 rounded-xl mx-2 text-[17px] leading-[37px] tracking-[0px]">A+</span>
                                        )}
                                        {desc.includes("#6") && (
                                            <span className="font-poppins font-[600]  bg-[#aeefa5] px-2 rounded-xl mx-2 text-[17px] leading-[37px] tracking-[0px]">#6</span>
                                        )}
                                        <span className="font-poppins font-[500] text-[17px] leading-[37px] tracking-[0px]">
                                            {desc.replace("#21", "").replace("A+", "").replace("#6", "")}
                                        </span>

                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Ranking;