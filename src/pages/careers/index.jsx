import { useState } from "react";
import Layout from "../components/Layout";
import CultureGallery from "./CultureGallery";
import OpenPositions from "./OpenPositions";
import AwardsCarousel from "../home/AwardsCarousel";
import CultureBenefits from "./CultureBenefits";
import OfficeSection from "./OfficeSection";
import Link from "next/link";
import Head from 'next/head'


function Index() {
    return (<>
        <Head>
            <title>Careers at Collegesathi | Join India’s Growing EdTech Platform</title>
            <meta
                name="description"
                content="Explore career opportunities at Collegesathi. Work with a fast-growing education platform shaping the future of online learning in India."
            />

            <meta
                name="keywords"
                content=""
            />
        </Head>

        <Layout>

            <div className="mx-auto container sm:container md:container xl:max-w-[1230px]  md:px-4 py-4 md:mt-20 lg:mt-20 ">


  <div className="  px-2 md:px-4 py-4 text-sm text-gray-500 mt-6">
                    <nav className="flex items-center gap-2">
                        <span className="text-gray-400"><Link href="/" >Home </Link ></span>
                        <span>{">"}</span>
                        <span className="text-[#EC1E24] font-medium">CS Careers</span>
                    </nav>
                </div>

                <section className="py-8 md:py-10 bg-white text-center">
                    <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8">
                        <h1 className="text-[26px] md:text-[60px] font-[600] text-[#282529] font-poppins leading-tight mb-6">
                            Build Your Career with Collegesathi
                        </h1>

                        <p className="text-[16px] md:text-[18px] text-[#282529] mb-10 max-w-2xl mx-auto">
                            Where passion meets purpose. Work with desire, passion, and grow with people who inspire you.
                        </p>
<Link href="#open-positions">
                        <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl shadow-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out">
                            Explore Open Job Roles
                        </button>
                        </Link>
                    </div>
                </section>
                <section className="bg-white py-10 md:py-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative w-full h-[574px] overflow-hidden rounded-xl shadow-2xl">
                            <div className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: "url('/images/careerhero.png')" }}>
                            </div>


                            <div className="absolute inset-0 bg-black opacity-30"></div>

                            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded text-sm font-mono">
                                1440 × 643
                            </div> */}
                        </div>
                    </div>
                </section>

            </div>

            <CultureGallery />
            <div id="open-positions">
                  <OpenPositions />
            </div>
          
            <CultureBenefits/>
            <OfficeSection/>
            <AwardsCarousel />

        </Layout>

    </>);
}

export default Index;