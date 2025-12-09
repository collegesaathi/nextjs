import { IoLogoYoutube } from "react-icons/io";
import {
    FaYoutube,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter
} from "react-icons/fa6";
import { useState } from "react";
import Image from "next/image";



export default function SocialBar() {
    const [active, setActive] = useState("youtube");

    const icons = [
        { id: "youtube", icon: <FaYoutube />, link: "https://youtube.com" },
        { id: "facebook", icon: <FaFacebookF />, link: "https://facebook.com" },
        { id: "instagram", icon: <FaInstagram />, link: "https://instagram.com" },
        { id: "linkedin", icon: <FaLinkedinIn />, link: "https://linkedin.com" },
        { id: "twitter", icon: <FaXTwitter />, link: "https://x.com" },
    ];
    return (
        < div className="py-4 md:py-8 " >
            <div className="mx-auto container sm:container md:container xl:max-w-[1230px]  md:px-4" >
                <div className="w-full flex justify-center mt-6">
                    <div className="flex items-center justify-between gap-4 bg-white rounded-full shadow-md px-6 py-3 max-w-3xl w-full">

                        {/* Left Red Icon (YouTube example) */}
                        <div className="flex items-center justify-center gap-3">
                            {icons.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.link}
                                    target="_blank"
                                    onClick={() => setActive(item.id)}
                                    className={`w-[50px] h-[50px] rounded-full flex items-center justify-center text-white text-xl transition-all duration-300 cursor-pointer hover:bg-[#FF0000] ${active === item.id ? "bg-[#FF0000]" : "bg-[#DFDFDF] text-gray-600"
                                        }`}
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>

                        {/* Right Red Icon (CS logo example) */}
                        <div className="w-12 h-12 flex items-center justify-center bg-red-600 rounded-full text-white font-semibold text-lg">
                                   <Image src="/images/collegesathi.svg" width={50} height={50} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
