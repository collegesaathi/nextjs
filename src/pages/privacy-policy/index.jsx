import { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function PrivacyPolicy() {
    const sections = [
        { id: "introduction", label: "Introduction" },
        { id: "purpose", label: "Purpose of this Policy" },
        { id: "information", label: "Information We Collect" },
        { id: "process", label: "How We Process Your Data" },
        { id: "communication", label: "Communication and Notifications" },
        { id: "children", label: "Children’s Privacy" },
        { id: "cookies", label: "Using Cookies" },
        { id: "retention", label: "Data Retention" },
        { id: "rights", label: "Your Rights (India)" },
        { id: "responsibilities", label: "Your Responsibilities" },
        { id: "security", label: "Data Security" },
        { id: "sharing", label: "Sharing Your Information" },
        { id: "grievances", label: "Privacy Grievances" },
        { id: "amendments", label: "Policy Amendments" },
        { id: "forms", label: "Interactive Forms" },
        { id: "disclaimer", label: "Disclaimer" },
    ];

    const [activeSection, setActiveSection] = useState("introduction");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 } // Section must be 60% visible
        );

        sections.forEach((sec) => {
            const element = document.getElementById(sec.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <Layout>
            <div className="mx-auto container sm:container md:container xl:max-w-[1230px]  px-4 py-4 md:mt-20 lg:mt-20 ">
                {/* Breadcrumb */}

                {/* Breadcrumb */}
                <div className="  px-4 py-4 text-sm text-gray-500 mt-6">
                    <nav className="flex items-center gap-2">
                        <span className="text-gray-400">Home</span>
                        <span>{">"}</span>
                        <span className="text-red-600 font-medium">Privacy Policy</span>
                    </nav>
                </div>

                {/* Header Section */}
                <div className=" px-4 py-8 md:flex md:items-start md:justify-between ">

                    {/* Left Side */}
                    <div className="md:w-1/2">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Privacy Policy
                        </h1>

                        <p className="mt-4 text-gray-600">
                            <b>Last updated on 18 August 2025</b>
                        </p>

                        <p className="mt-4 text-gray-600 max-w-md">
                            This Privacy Policy includes important information about your personal data
                            and we encourage you to read it carefully.
                        </p>
                    </div>

                    {/* Right Side Image */}
                    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                        <img
                            src="/privacy-policy-illustration.png"
                            alt="Privacy Illustration"
                            className="w-72 md:w-96"
                        />
                    </div>
                </div>

                <div className="border-t border-gray-200  my-6"></div>

                {/* Main Content Section */}
                <div className=" px-4 pb-20 md:flex gap-10">

                    {/* Left Sidebar Navigation */}
                    <aside className="md:w-1/4 mb-10 md:mb-0 pl-4 space-y-2 text-gray-700 font-medium border-l-4 border-red-500">
                        {sections.map((sec) => (
                            <a
                                key={sec.id}
                                href={`#${sec.id}`}
                                className={`block cursor-pointer transition-all ${activeSection === sec.id
                                    ? "text-red-600 font-semibold"
                                    : "text-gray-700"
                                    }`}
                            >
                                {sec.label}
                            </a>
                        ))}
                    </aside>

                    {/* Right Content */}
                    <div className="md:w-3/4 text-gray-700 leading-relaxed">

                        {/* 1. Introduction */}
                        <h2 id="introduction" className="text-xl font-semibold mb-3">1. Introduction</h2>
                        <p className="mb-6">
                            At Collegesathi (and our affiliates and subsidiaries, "we", "our", or "us") we care
                            to keep your personal data safe. This Privacy Policy ("Policy") explains how we
                            collect, utilize, store, and disclose your personal information while safeguarding
                            your privacy and data rights. We intend to provide trusted services to students,
                            academicians, institutions, and partners by way of proper and lawful handling of
                            personal information.
                        </p>

                        {/* 2. Purpose of this Policy */}
                        <h2 id="purpose" className="text-xl font-semibold mb-3">2. Purpose of this Policy</h2>
                        <p className="mb-6">
                            This Policy outlines how Collegesathi gathers and processes personal information
                            via its websites and applications, including our website
                            <a href="https://www.collegesathi.com" className="text-blue-600 ml-1 underline">
                                https://www.collegesathi.com
                            </a>
                            . It also addresses how we keep your data secure, share it when needed, and
                            respond to requests from individuals whose data we process.
                        </p>

                        {/* 3. Scope */}
                        <h2 id="scope" className="text-xl font-semibold mb-3">3. Scope</h2>
                        <p className="mb-6">
                            This Policy is effective for all users of our platform, such as students, potential
                            applicants, educational institutions, affiliates, loan and placement partners, and
                            any other visitor who uses our services. It controls the collection, use, and
                            handling of their personal data.
                        </p>

                        {/* 4. Information We Collect */}
                        <h2 className="text-xl font-semibold mb-3">4. Information We Collect</h2>

                        <h3 className="font-semibold mt-4 mb-2">A. Information Provided by You</h3>
                        <ul className="list-disc ml-6 space-y-2 mb-6">
                            <li><b>Account Information:</b> Name, email, address, gender, DOB, phone number, state, city, country.</li>
                            <li><b>Communication Data:</b> When you fill forms, email, call us, etc.</li>
                            <li><b>Event Participation:</b> Registration details for seminars and webinars.</li>
                            <li><b>Marketing/Affiliate Details:</b> PAN, Aadhaar, bank information, GST, etc.</li>
                        </ul>

                        <h3 className="font-semibold mt-4 mb-2">B. Automatically Collected Information</h3>
                        <p className="mb-6">
                            This includes cookies, device information, IP address, browser details, visit logs,
                            and analytics data.
                        </p>

                    </div>
                </div>
            </div>
        </Layout>
    );
}
