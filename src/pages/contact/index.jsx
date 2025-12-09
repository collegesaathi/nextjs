import { useState } from "react";
import Layout from "../components/Layout";
import ContactForm from "./ContactFormCard";
import SocialBar from "./SocialBar";
import VisitUs from "./VisitUs";
import { Mail, Phone, MessageCircle, Users } from "lucide-react";
import { RiChatSmileFill } from "react-icons/ri";
import Oval  from "../assets/home/Oval.png";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { IoMailUnreadOutline } from "react-icons/io5";
import { MdPhoneCallback } from "react-icons/md";
import Image from "next/image";


function Index() {
     const [active ,setActive] =useState(null)


    return (<>
 
        <Layout>
             <div className={`absolute inset-0 bg-[url("/images/Oval.png")] opacity-80 pointer-events-none   [mask-image:linear-gradient(to_bottom,black,transparent)]`}></div>
            <div className="mx-auto container sm:container md:container xl:max-w-[1230px]  px-4 py-4 md:mt-20 lg:mt-20 ">
                <section className="relative w-full py-16 px-4 ">

                    {/* Background Grid Pattern */}
                   

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center">

                        {/* CS Logo Circle */}
                        <div className="w-14 h-14 flex items-center justify-center bg-red-600 text-white text-xl font-semibold rounded-full shadow-md">
                            <Image src="/images/collegesathi.svg" width={50} height={50} />
                        </div>

                        {/* Heading */}
                        <h1 className="text-[30px] md:text-[50px] font-[600] font-poppins mt-[10px] md:mt-[25px]">Contact Our Friendly Team</h1>
                        <p className="text-gray-600 nt-[18px] md:mt-[20px]">
                            Let’s Make It Happen Together
                        </p>

                        {/* Cards Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full" >

                            {/* Support */}
                            <div className="bg-white shadow-md rounded-2xl  p-6 flex flex-col gap-3 hover:shadow-lg cursor-pointer  transition font-poppins"  onClick={() => setActive("support")}>
                                <div className="flex flex-col justify-start items-start md:gap-10 gap-6">
                                        <div className={`w-12 h-12 border border-[#DFDFDF] flex items-center justify-center rounded-[9px]  ${active === "support" ? "bg-[#ED1F24] text-white" : "bg-transparent text-bvlack"}` }>
                                  <RiChatSmileFill size={27} />
                                </div>
                                <div className=" flex flex-col justify-start items-start gap-2">
                                       <h3 className="font-[700] text-[14px] font-poppins">Chat to support</h3>
                                <p className="text-gray-500 font-[400] text-[12px] font-poppins">Let’s Connect</p>
                                <a href="mailto:support@collegesathi.com" className="text-[#4DAFF1] font-[400] font-poppins text-[15px] underline">
                                    support@collegesathi.com
                                </a>
                                </div>
                             
                                </div>
                            
                            </div>

                               <div className="bg-white shadow-md rounded-2xl  p-6 flex flex-col gap-3 hover:shadow-lg cursor-pointer  transition font-poppins"  onClick={() => setActive("hr")}>
                                <div className="flex flex-col justify-start items-start md:gap-10 gap-6 ">
                                        <div className={`w-12 h-12 border border-[#DFDFDF] flex items-center justify-center rounded-[9px]  ${active === "hr" ? "bg-[#ED1F24] text-white" : "bg-transparent text-black"}` }>
                                  <IoMailUnreadOutline size={27} />
                                </div>
                                <div className=" flex flex-col justify-start items-start gap-2">
                                       <h3 className="font-[700] text-[14px] font-poppins">Mail to HR</h3>
                                <p className="text-gray-500 font-[400] text-[12px] font-poppins">Join Our Communityt</p>
                                <a href="mailto:hr@collegesathi.com" className="text-[#4DAFF1] font-[400] font-poppins text-[15px] underline">
                                   hr@collegesathi.com
                                </a>
                                </div>
                             
                                </div>
                            
                            </div>

                              <div className="bg-white shadow-md rounded-2xl  p-6 flex flex-col gap-3 hover:shadow-lg cursor-pointer transition font-poppins" onClick={() => setActive("DM")}>
                                <div className="flex flex-col justify-start items-start md:gap-10 gap-6 ">
                                        <div className={`w-12 h-12 border border-[#DFDFDF] flex items-center justify-center rounded-[9px]  ${active === "DM" ? "bg-[#ED1F24] text-white" : "bg-transparent text-bvlack"}` }>
                                  <PiWhatsappLogoLight size={27} />
                                </div>
                                <div className=" flex flex-col justify-start items-start gap-2">
                                       <h3 className="font-[700] text-[14px] font-poppins">DM Us</h3>
                                <p className="text-gray-500 font-[400] text-[12px] font-poppins">Start a Conversation</p>
                                <a href="mailto:support@collegesathi.com" className="text-black font-[400] font-poppins text-[15px]">
                                 xxxx-xxx-xxx
                                </a>
                                </div>
                             
                                </div>
                            
                            </div>

                        

                    
                                <div className="bg-white shadow-md rounded-2xl  p-6 flex flex-col gap-3 hover:shadow-lg cursor-pointer  transition font-poppins" onClick={() => setActive("Call")}>
                                <div className="flex flex-col justify-start items-start gap-10 ">
                                        <div className={`w-12 h-12 border border-[#DFDFDF] flex items-center justify-center rounded-[9px]  ${active === "Call" ? "bg-[#ED1F24] text-white" : "bg-transparent text-bvlack"}` }>
                                  <MdPhoneCallback size={27} />
                                </div>
                                <div className=" flex flex-col justify-start items-start gap-2">
                                       <h3 className="font-[700] text-[14px] font-poppins">Call Us</h3>
                                <p className="text-gray-500 font-[400] text-[12px] font-poppins">Let’s Talk</p>
                                <a href="mailto:support@collegesathi.com" className="text-black font-[400] font-poppins text-[15px]">
                             9785-800-008
                                </a>
                                </div>
                             
                                </div>
                            
                            </div>

                   

                        </div>
                    </div>
                </section>

                <ContactForm />
                <VisitUs />
                <SocialBar />
            </div>

        </Layout>

    </>);
}

export default Index;