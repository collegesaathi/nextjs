import Layout from "../components/Layout";
import ContactSection from "../home/ContactSection";

export default function FaqSection() {
    return (
        <>
            <Layout>
                {/* Hero Section */}
                <div className="bg-[#fff7f5] py-10">
                    <div className="mx-auto container sm:container md:container xl:max-w-[1230px]  px-4 py-4 md:mt-20 lg:mt-40 ">

                        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

                            {/* Left Content */}
                            <div>
                                <p className="text-gray-500 text-sm">Home / FAQs</p>
                                <h1 className="text-4xl font-bold mt-2">Frequently Asked Questions</h1>
                                <p className="text-gray-500 mt-2">
                                    Find answers to common questions about online courses and universities.
                                </p>

                                <button className="mt-5 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md text-sm shadow">
                                    Ask Your Query
                                </button>
                            </div>

                            {/* Search Bar */}
                            <div className="w-full">
                                <div className="flex bg-white rounded-full shadow px-4 py-2 border">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="flex-1 outline-none text-sm bg-transparent"
                                    />
                                    <button className="text-red-500">🔍</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* FAQ Body */}
                <div className="mx-auto container sm:container md:container xl:max-w-[1230px]  px-4 py-4 grid grid-cols-1 md:grid-cols-4 gap-6">

                    {/* Left Menu */}
                    <div className="border-r pr-4">
                        <ul className="space-y-3 text-sm">
                            <li className="font-semibold text-red-500 border-l-4 border-red-500 pl-3">
                                General
                            </li>
                            <li className="text-gray-600 hover:text-red-500 cursor-pointer">
                                Online Universities
                            </li>
                            <li className="text-gray-600 hover:text-red-500 cursor-pointer">
                                Courses
                            </li>
                            <li className="text-gray-600 hover:text-red-500 cursor-pointer">
                                CS ClickPick
                            </li>
                        </ul>
                    </div>

                    {/* FAQs */}
                    <div className="md:col-span-3 space-y-4">

                        {/* Item 1 */}
                        <details open className="group border rounded-md p-4 bg-white shadow-sm">
                            <summary className="flex justify-between cursor-pointer font-medium">
                                What is an Online MBA and how does it work in India?
                                <span className="group-open:rotate-180 transition">⌄</span>
                            </summary>
                            <p className="mt-2 text-gray-600 text-sm">
                                An Online MBA is a management degree delivered through virtual learning platforms.
                                It is ideal for working professionals and students who cannot attend regular classes.
                            </p>
                        </details>

                        {/* Item 2 */}
                        <details className="group border rounded-md p-4 bg-white shadow-sm">
                            <summary className="flex justify-between cursor-pointer font-medium">
                                Is an Online MBA degree recognized in India?
                                <span className="group-open:rotate-180 transition">⌄</span>
                            </summary>
                            <p className="mt-2 text-gray-600 text-sm">
                                Yes, online MBA programs approved by UGC and AICTE are fully recognized.
                            </p>
                        </details>

                        {/* Item 3 */}
                        <details className="group border rounded-md p-4 bg-white shadow-sm">
                            <summary className="flex justify-between cursor-pointer font-medium">
                                Which universities are best for Online MBA in India?
                                <span className="group-open:rotate-180 transition">⌄</span>
                            </summary>
                            <p className="mt-2 text-gray-600 text-sm">
                                Amity, Manipal, LPU, Jain University, and NMIMS are among the best.
                            </p>
                        </details>

                        {/* Item 4 */}
                        <details className="group border rounded-md p-4 bg-white shadow-sm">
                            <summary className="flex justify-between cursor-pointer font-medium">
                                Can I get a job after finishing an Online MBA?
                                <span className="group-open:rotate-180 transition">⌄</span>
                            </summary>
                            <p className="mt-2 text-gray-600 text-sm">
                                Yes, companies accept online MBAs as long as the degree is recognized.
                            </p>
                        </details>

                        {/* Item 5 */}
                        <details className="group border rounded-md p-4 bg-white shadow-sm">
                            <summary className="flex justify-between cursor-pointer font-medium">
                                Is there any entrance exam?
                                <span className="group-open:rotate-180 transition">⌄</span>
                            </summary>
                            <p className="mt-2 text-gray-600 text-sm">
                                Some universities may require entrance exams, while others offer direct admission.
                            </p>
                        </details>

                        <a href="#" className="text-red-500 text-sm font-medium inline-block mt-4">
                            Load More
                        </a>

                    </div>
                </div>
                <ContactSection />
            </Layout>
        </>
    );
}
