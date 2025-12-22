"use client";
import React from "react";
import BR from "../assets/home/Budget.png"
import BG from "../assets/home/Budget.png"
import Image from "next/image";


export default function Confusion() {
    return (
        <>
            <div className="py-4 md:py-8  ">
                <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4">
                    <section className=" lg:block hidden">
                        <div
                            className=" rounded-[25px] relative mx-auto"
                            data-aos="slide-left"
                            data-aos-duration="500"
                            data-aos-delay="200"
                            data-aos-once="true"
                        >
                            <Image
                                src={BG?.src}
                                alt="Blog background"
                                className="w-full h-full object-cover rounded-[25px]"
                                width={800} height={600}
                            />
                            <div className="absolute top-0 left-0 w-full h-full px-[94px] py-[50px] space-y-2">
                                <h2 className="font-semibold text-[38px] leading-[48px] tracking-[0px] text-[#282529]">
                                    Don't Let Confusion <br />
                                    Take Over
                                </h2>
                                <div
                                    className="w-[373px] h-[48px] rounded-[22px] bg-gradient-to-r from-[#D70E1B] via-[#EC1E24] to-[#C20713] font-poppins font-normal text-[18px] leading-[54px] tracking-[0px] flex justify-center items-center text-white space-x-1.5"
                                >
                                    Compare online universities for <span className="font-semibold text-[20px] ps-1.5">Free</span>
                                </div>
                            </div>
                            <div className="absolute top-13 -right-[30px] w-[587px]">
                                <Image src={BR?.src} alt="Blog illustration" className="w-full h-auto" width={800} height={600} />
                            </div>
                        </div>
                    </section>

                    {/* Mobile Version */}
                    <section className=" lg:hidden block">
                        <div className="w-full rounded-[25px] relative mx-auto">
                            <Image
                                src={BG?.src}
                                alt="Blog background"
                                className="w-full h-[200px] object-cover rounded-[25px]"
                                width={800} height={600}
                            />
                            <div className="absolute top-0 left-0 w-full h-full text-center px-[20px] flex flex-col justify-center items-center space-y-2">
                                <h2 className="font-semibold text-[20px] tracking-[0px] text-[#282529]">
                                    Don't Let Confusion Take Over
                                </h2>
                                <div
                                    className="w-full h-[40px] rounded-[22px] bg-gradient-to-r from-[#D70E1B] via-[#EC1E24] to-[#C20713] font-poppins font-normal text-[14px] tracking-[0px] flex justify-center items-center text-white space-x-1.5"
                                >
                                    Compare online universities for <span className="font-semibold text-[20px] ps-1.5">Free</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
