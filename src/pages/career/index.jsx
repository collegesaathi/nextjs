import { useState } from "react";
import Layout from "../components/Layout";
import CultureGallery from "./CultureGallery";
import OpenPositions from "./OpenPositions";
import AwardsCarousel from "../home/AwardsCarousel";
import CultureBenefits from "./CultureBenefits";
import OfficeSection from "./OfficeSection";


function Index() {
    return (<>

        <Layout>

            <div className="mx-auto container sm:container md:container xl:max-w-[1230px]  px-4 py-4 md:mt-20 lg:mt-20 ">
                <section className="py-24 md:py-32 bg-white text-center">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                            Build Your Career with Collegesathi
                        </h1>

                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                            Where passion meets purpose. Work with desire, passion, and grow with people who inspire you.
                        </p>

                        <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out">
                            Explore Open Job Roles
                        </button>
                    </div>
                </section>
                <section className="bg-white py-10 md:py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative w-full h-[500px] overflow-hidden rounded-xl shadow-2xl">
                            <div className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: "url('/placeholder-office.jpg')" }}>
                            </div>


                            <div className="absolute inset-0 bg-black opacity-30"></div>

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded text-sm font-mono">
                                1440 × 643
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <CultureGallery />
            <OpenPositions />
            <CultureBenefits/>
            <OfficeSection/>
            <AwardsCarousel />

        </Layout>

    </>);
}

export default Index;