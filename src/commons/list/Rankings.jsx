import Image from "next/image";
import { useState } from "react";
import Heading from "@/common/Heading";
import SVGIcon from '@/common/SVGIcon';

function Ranking({ rankings }) {
    const [activeTab, setActiveTab] = useState("indian");
 const getRankingItems = (description) => {
  if (!description) return [];

  // Case 1: already array
  if (Array.isArray(description)) {
    return description;
  }

  // Case 2: HTML string with <li>
  if (typeof description === "string") {
    return Array.from(
      description.matchAll(/<li[^>]*>(.*?)<\/li>/gis),
      m => m[1]
    );
  }

  return [];
};
const rankingItems = getRankingItems(rankings?.description);

    return (
        <>
            {rankings?.title && (
                <section className="w-full px-2 md:px-6 py-6 mx-auto" id="rankings-section">
                    <div className="max-w-[1230px]">
                        <Heading title={rankings?.title} />

                        {rankingItems.map((li, index) => (
                            <div
                                key={index}
                                className="w-full min-h-[46px] rounded-[12px] 
                 flex items-center justify-start px-3 py-2 gap-2 break-words"
                            >
                                {/* ✔ LEFT */}
                                <span className="flex-shrink-0 text-green-600">

                                    <SVGIcon name="rank" size={18} />
                                </span>

                                {/* Text RIGHT */}
                                <span
                                    className="font-poppins text-[14px] sm:text-[16px] text-[#282529] leading-[28px] sm:leading-[37px]"
                                    dangerouslySetInnerHTML={{ __html: li }}
                                />
                            </div>
                        ))}
                    </div>

                </section>
            )}
        </>
    );
}

export default Ranking;