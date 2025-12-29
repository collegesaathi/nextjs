import Image from "next/image";
import { useState } from "react";
import Heading from "@/common/Heading";

function Ranking({ rankings }) {
    const [activeTab, setActiveTab] = useState("indian");

    const RankingIcon = "/assets/icons/ranking.png";
    const EduIcon = "/assets/icons/education.png";
    const GradeIcon = "/assets/icons/grade.png";
    const WorkIcon = "/assets/icons/work.png";
    return (
        <>
        {rankings?.title &&(
            <section className="w-full px-2 md:px-6 py-6 mx-auto" id="rankings-section">
                <div className="max-w-[1230px]">
                    <Heading title={rankings?.title} />

                    <div
                        className="ont-poppins text-[14px] sm:text-[16px] text-[#282529] leading-[28px] sm:leading-[37px] mb-4 ranking  "
                        dangerouslySetInnerHTML={{ __html: rankings?.description || "" }}
                    />
                </div>
            </section>
        )}
        </>
    );
}

export default Ranking;