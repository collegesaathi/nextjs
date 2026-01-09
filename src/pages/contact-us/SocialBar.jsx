"use client";

import { useState } from "react";
import { motion } from "framer-motion"; 
import Image from "next/image";
import {
    FaYoutube,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter
} from "react-icons/fa6";

export default function SocialBar() {
    const [active, setActive] = useState("youtube");

    const icons = [
        { id: "youtube", icon: <FaYoutube />, link: "https://youtube.com" },
        { id: "facebook", icon: <FaFacebookF />, link: "https://facebook.com" },
        { id: "instagram", icon: <FaInstagram />, link: "https://instagram.com" },
        { id: "linkedin", icon: <FaLinkedinIn />, link: "https://linkedin.com" },
        { id: "twitter", icon: <FaXTwitter />, link: "https://x.com" },
    ];

    // Icons ke liye Container Variants (Staggered effect)
    const iconContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Ek-ek karke icon aayenge
                delayChildren: 0.8,   // Logo ke roll hone ka wait karega (0.8s)
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20, scale: 0.5 },
        visible: { opacity: 1, x: 0, scale: 1 }
    };

    return (
        <div className="py-4 md:py-8 overflow-hidden">
            <div className="mx-auto container xl:max-w-[1230px] md:px-4">
                <div className="w-full flex justify-center mt-6">
                    
                    {/* Main Shadow Bar */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.8 }} // 80% section dikhne par start hoga
                        className="flex items-center justify-between gap-4 bg-white rounded-full shadow-sm px-4 md:px-6 py-3 max-w-3xl w-full relative overflow-hidden"
                    >

                        {/* LEFT SIDE: Social Icons (Logo ke baad reveal honge) */}
                        <motion.div 
                            variants={iconContainerVariants}
                            className="flex items-center justify-center gap-1 md:gap-3"
                        >
                            {icons.map((item) => (
                                <motion.a
                                    key={item.id}
                                    href={item.link}
                                    target="_blank"
                                    variants={itemVariants}
                                    onClick={() => setActive(item.id)}
                                    className={`w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center text-white text-lg md:text-xl transition-all duration-300 cursor-pointer hover:bg-[#FF0000] ${
                                        active === item.id ? "bg-[#FF0000]" : "bg-[#DFDFDF] text-gray-600"
                                    }`}
                                >
                                    {item.icon}
                                </motion.a>
                            ))}
                        </motion.div>

                        {/* RIGHT SIDE: CS Logo (Roll hokar apni place par aayega) */}
                        <motion.div 
                            initial={{ x: -500, rotate: -720, opacity: 0 }} // Start position (left side of screen)
                            whileInView={{ x: 0, rotate: 0, opacity: 1 }}    // End position (its place on right)
                            transition={{ 
                                duration: 1, 
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 60 
                            }}
                            viewport={{ once: true }}
                            className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-red-600 rounded-full shadow-lg z-20"
                        >
                            <Image 
                                src="/images/collegesathi.svg" 
                                width={50} 
                                height={50} 
                                alt="CS" 
                                className="p-1"
                            />
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
}