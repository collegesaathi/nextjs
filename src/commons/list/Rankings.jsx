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
            <section className="w-full px-6 py-6 mx-auto" id="rankings-section">
                <div className="max-w-[1230px]">
                    <Heading title={rankings?.title} />

                    <div
                        className="ont-poppins text-[15px] sm:text-[16px] text-[#282529] leading-6 sm:leading-7 mb-4"
                        dangerouslySetInnerHTML={{ __html: rankings?.description || "" }}
                    />
                </div>
            </section>
        </>
    );
}

export default Ranking;