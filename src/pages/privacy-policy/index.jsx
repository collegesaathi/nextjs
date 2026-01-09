import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import Head from 'next/head'

export default function PrivacyPolicy() {
const sections = [
    { id: "introduction", label: "Introduction" },
    { id: "purpose", label: "Purpose of this Policy" },
    { id: "scope", label: "Scope" },

    {
        id: "information",
        label: "Information We Collect",
        subpoints: [
            { id: "info_provided", label: "Information Provided by You" },
            { id: "info_auto", label: "Automatically Collected Information" },
            { id: "info_thirdparty", label: "Third-Party Information" }
        ]
    },

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
  const handleScroll = () => {
    const offset = 120; // header height / top gap
    let currentSection = sections[0]?.id;

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (!el) return;

      const top = el.getBoundingClientRect().top;

      if (top <= offset) {
        currentSection = sec.id;
      }
    });

    setActiveSection(currentSection);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll(); // initial run

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

useEffect(() => {
  if (window.innerWidth < 768) { // सिर्फ मोबाइल व्यू के लिए
    const activeTab = document.getElementById(`tab-${activeSection}`);
    if (activeTab) {
      activeTab.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center", // यह टैब को हॉरिजॉन्टल बार के सेंटर में लाएगा
      });
    }
  }
}, [activeSection]);





const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    // यह फंक्शन एलिमेंट को सीधे व्यूपोर्ट के टॉप पर ले जाता है
    element.scrollIntoView({
        behavior: "smooth",
        block: "start", // "start" का मतलब है कि एलिमेंट का टॉप व्यूपोर्ट के टॉप से मैच होगा
    });
};

    return (
        <>
          <Head>
            <title>Privacy Policy | Collegesathi</title>
            <meta
                name="description"
                content="Read Collegesathi’s privacy policy to understand how we collect, use and protect your personal information."
            />

            <meta
                name="keywords"
                content=""
            />
        </Head>
        <Layout>
            <div className="mx-auto container sm:container md:container xl:max-w-[1230px] px-2 md:px-4 py-4 md:mt-20 lg:mt-20 ">
                {/* Breadcrumb */}

                {/* Breadcrumb */}
                <div className="  px-4 py-4 text-sm text-gray-500 mt-6">
                    <nav className="flex items-center gap-2">
                        <span className="text-gray-400"><Link href="/" >Home </Link></span>
                        <span>{">"}</span>
                        <span className="text-red-600 font-medium">Privacy Policy</span>
                    </nav>
                </div>

                {/* Header Section */}
                <div className=" px-2 md:px-4 md:flex md:items-center md:justify-between font-poppins ">

                    {/* Left Side */}
                    <div className="md:w-1/2">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Privacy Policy
                        </h1>

                        <p className="mt-4 text-gray-600">
                            <b>
Last updated on 03 December 2025
</b>
                        </p>

                        <p className="mt-4 text-gray-600 max-w-md">
                            This Privacy Policy includes important information about your personal data
                            and we encourage you to read it carefully.
                        </p>
                    </div>

                    {/* Right Side Image */}
                    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                        <img
                            src="/images/privacy.png"
                            alt="Privacy Illustration"
                            className="w-72 md:w-96"
                        />
                    </div>
                </div>

                <div className="border-t border-gray-200  my-6"></div>

                {/* Main Content Section */}
                <div className=" px-2 md:px-4 pb-20 md:flex gap-10 relative">

                    {/* Left Sidebar Navigation */}
<aside
    className="
        /* MOBILE STICKY SETTINGS */
        sticky top-2 z-40 bg-white w-full 
        /* DESKTOP STICKY SETTINGS */
        md:w-1/4 md:sticky md:top-28 md:h-max md:bg-transparent
        
        /* LAYOUT & SCROLL */
        flex md:block
        overflow-x-auto md:overflow-visible
        gap-4 md:gap-0
       px-4 md:px-0 md:pb-0
        mb-4 md:mb-0 
        whitespace-nowrap md:whitespace-normal
        text-[#282529] font-medium
        md:border-l-2 border-gray-300
        no-scrollbar
        border-b md:border-b-0 border-gray-100 /* Mobile में नीचे एक हल्की लाइन */
    "
>
    <div className="md:block flex gap-2 mt-6 mb-2 md:mb-0 md:mt-0 md:gap-6 md:space-y-4">
        {sections.map((sec) => (
            <div key={sec.id} className="w-full">
                {/* MAIN ITEM */}
                <div
                id={`tab-${sec.id}`}
                    onClick={() => scrollToSection(sec.id)}
                    className={`
                        cursor-pointer transition-all 
                        py-2 pt-0 px-3 md:px-4 border-l-4 
                        ${activeSection === sec.id
                            ? "border-red-600 text-[#282529] font-[600]"
                            : "border-transparent text-[#282529] font-[400] text-[16px] "
                        }
                    `}
                >
                    {sec.label}
                </div>

                {/* SUB-POINTS */}
                {sec.subpoints && activeSection === sec.id && (
                    <div className="ml-6 mt-1 space-y-2  pl-3">
                        {sec.subpoints.map((sub) => (
                            <div
                                key={sub.id}
                                onClick={() => scrollToSection(sub.id)}
                                className="
                                    text-sm text-gray-600 
                                    cursor-pointer hover:text-red-600 
                                    transition-all
                                "
                            >
                                {sub.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        ))}
    </div>
</aside>



                    {/* Right Content */}
                    <div className="md:w-3/4 text-[#282529] leading-relaxed font-poppins">

                        {/* 1. Introduction */}

                        <div>
                            <h2 id="introduction" className="text-[28px] font-[600] mb-1 ">1. Introduction</h2>
                            <p className="mb-1 text-[16px] font-[400]">
                                At Collegesathi (and our affiliates and subsidiaries, "we", "our", or "us") we care to keep your personal data safe.
                                The following Privacy Policy ("Policy") explains how we collect, utilize, store, and disclose your personal information
                                while safeguarding your privacy and data rights. We intend to provide trusted services to students,
                                academicians, institutions, and partners by way of proper and lawful handling of personal information.
                            </p>
                        </div>

                        {/* 2. Purpose of this Policy */}
                        <div>
                            <h2 id="purpose" className="text-[28px] font-[600] mb-1 ">2. Purpose of this Policy</h2>
                            <p className="mb-1">
                                This Policy outlines how Collegesathi gathers and processes personal information via its websites and applications,
                                including our website  <span className="text-[#EC1E24] font-[600]">
                                    <Link href="https://www.collegesathi.com" target="_blank" className="underline" >https://www.collegesathi.com</Link></span> and related applications (together, the "Platform").
                                It also addresses how we keep your data secure, share it
                                when needed, and respond to requests from individuals whose data we process.
                            </p>
                        </div>

                        {/* 3. Scope */}
                        <div>
                            <h2 id="scope" className="text-[28px] font-[600] mb-1 ">3. Scope</h2>
                            <p className="mb-1">
                                This Policy is effective to all users of our platform, such as students, potential applicants, educational institutions,
                                affiliates, loan and placement partners,
                                and any other visitor who uses our services. It controls the collection, use, and handling of their personal data.
                            </p>
                        </div>

                        <div>
                            <h2 id="information"  className="text-[28px] font-[600] mb-1">4. Information We Collect</h2>
                            <p className="mb-1">
                                We collect only data which is relevant and required to deliver our services and enhance your experience.
                                Information can be collected in the following manner:
                            </p>

                            <h3 className="font-semibold mt-4 mb-2" id="info_provided">
                                A. Information Provided by You
                            </h3>
                            <ul className="list-disc ml-6 space-y-2 mb-1">
                                <li><span className="font-[600]">Account Information:</span> On registration, we can obtain your full name, email address, gender, location (state, city, country), date of birth, phone number, education history, work experience, and salary information (if applicable).</li>
                                <li><span className="font-[600]">Communication Data:</span> When you mail us, call us, or fill out forms, we retain communication and associate contact information.</li>
                                <li><span className="font-[600]">Event Participation:</span>For seminars, wespaninars, or outreach programs, we store your registration information.</li>
                                <li><span className="font-[600]">Marketing/Affiliate Partnership: </span> Where you engage in testimonials, campaigns, or affiliate schemes, we may gather more personal and financial data like PAN, Aadhaar, bank information, GST certificate, and site URLs.</li>
                            </ul>

                            <h3 className="font-semibold mt-4 mb-2" id="info_auto">
                                B. Automatically Collected Information
                            </h3>
                            <ul className="list-disc ml-6 space-y-2 mb-1"  id="info_thirdparty">
                                <li><span className="font-[600]">Device & Log Data: </span>IP address, browser, operating system, device identifiers, access time, referring URLs.</li>
                                <li><span className="font-[600]">Usage Data: </span> Recorded behavior with our Platform (e.g., pages viewed, features utilized).</li>
                                <li><span className="font-[600]">Cookies and Tracking Technologies:</span>Utilized to gather information which aids personalization of your experience.</li>

                            </ul>
                            <h3 className="font-semibold mt-4 mb-2">
                                C. Third-Party Information
                            </h3>
                            <p className="mb-1">
                                We can obtain name, email, or phone number information via referral programs, marketing partners, or vendors.
                            </p>
                        </div>


                        <div>
                            <h2 id="process" className="text-[28px] font-[600] mb-1">5. How We Process Your Data</h2>
                            <p className="mb-1">
                                We can process your personal data to:
                            </p>

                            <ul className="list-disc ml-6 space-y-2 mb-1">
                                <li>Provide and operate our core services and platform features.</li>
                                <li>Tailor your experience and recommendations.</li>
                                <li>Reach out to you concerning services, updates, or promotions.</li>
                                <li>Enhance our services according to user opinions and usage trends.</li>
                                <li>Work with reliable service providers and partners.</li>
                                <li>Research and introduce new products.</li>
                                <li>Adherent to relevant laws and regulations.</li>
                                <li>Anticipate and prevent fraud or unauthorized behavior.</li>

                            </ul>

                            <p className="mb-1">
                                We might merge your data from other reliable sources for legitimate business activities.
                            </p>
                        </div>


                        <div>
                            <h2 id="communication" className="text-[28px] font-[600] mb-1">6. Communication and Notifications</h2>
                            <p className="mb-1">
                                We can contact you through email, SMS, WhatsApp, or a phone call to provide service updates, promotional information,
                                or newsletters. You can opt out of promotional messages by following the unsubscribe instructions or writing to us at
                                <span>
                                    <Link
                                        href="mailto:support@collegesathi.com"
                                        className="text-[#EC1E24] underline ml-1 mr-1"
                                    >
                                        support@collegesathi.com
                                    </Link>
                                </span>
                                However, vital communications (e.g., account notification, service modification) can still be delivered unless you close your account.

                            </p>
                        </div>


                        <div>
                            <h2 id="children" className="text-[28px] font-[600] mb-1">7. Children's Privacy</h2>
                            <p className="mb-1">
                                We don't intentionally collect the personal information of users under 18 years old. If we find out that a child under 18 has provided us
                                with personal information, we will remove their details immediately.
                            </p>
                        </div>


                        <div>
                            <h2 id="cookies" className="text-[28px] font-[600] mb-1">8. Using Cookies</h2>
                            <p className="mb-1">
                                We use cookies and other technologies to:
                            </p>

                            <ul className="list-disc ml-6 space-y-2 mb-1">
                                <li>Analyze how our site is used</li>
                                <li>Remember your settings</li>
                                <li>Deliver relevant content and advertising</li>


                            </ul>

                            <p className="mb-1">
                                You can adjust cookie settings in your browser at any time.
                            </p>
                        </div>


                        <div>
                            <h2 id="retention" className="text-[28px] font-[600] mb-1">9. Data Retention</h2>
                            <p className="mb-1">
                                Your personal information is stored only for as long as is necessary to address the purposes described in this Policy. For instance:
                            </p>

                            <ul className="list-disc ml-6 space-y-2 mb-1">
                                <li>Account information is stored until you deactivate your account.</li>
                                <li>Records of communication can be stored for legal, audit, or compliance requirements.</li>
                                <li>We securely erase or anonymize information when it is no longer needed.</li>


                            </ul>

                        </div>

                        <div>
                            <h2 id="rights" className="text-[28px] font-[600] mb-1">
                                10. Your Rights (India)
                            </h2>
                            <p className="mb-1">
                                In accordance with the Digital Personal Data Protection (DPDP) Act, 2023, you have the right to:
                            </p>

                            <ul className="list-disc ml-6 space-y-2 mb-1">
                                <li><span className="font-[600]">Access: </span>Check whether we process your data and ask for access</li>
                                <li><span className="font-[600]">Correction:  </span>Ask for updates in incorrect or incomplete data</li>
                                <li><span className="font-[600]">Erasure: </span>Ask for deletion based on certain conditions</li>

                                <li><span className="font-[600]">Consent Withdrawal: </span>Withdraw previously provided consent</li>
                                <li><span className="font-[600]">Grievance Redressal: </span>Authorize a representative to act on your behalf</li>
                                <li><span className="font-[600]">Nomination: </span></li>




                            </ul>
                            <p className="mb-1">
                                To invoke these rights, write to
                                <span>
                                    <Link
                                        href="mailto:support@collegesathi.com"
                                        className="text-[#EC1E24] underline ml-1 mr-1"
                                    >
                                        support@collegesathi.com
                                    </Link>
                                </span>
                            </p>

                        </div>


                        <div>
                            <h2 id="responsibilities" className="text-[28px] font-[600] mb-1">11. Your Responsibilities</h2>
                            <p className="mb-1">
                                As a Data Principal, you are obliged to:
                            </p>

                            <ul className="list-disc ml-6 space-y-2 mb-1">
                                <li>Providing accurate and truthful data</li>
                                <li>Not impersonating others</li>
                                <li>Cooperating when exercising rights under this Policy</li>
                                <li>Complying with applicable laws when dealing with the Platform</li>


                            </ul>

                        </div>

                        <div>
                            <h2 id="security" className="text-[28px] font-[600] mb-1">12. Data Security</h2>
                            <p className="mb-1">
                                We maintain industry standard security measures to protect your personal data against unauthorized access, misuse, or loss. These are:
                            </p>

                            <ul className="list-disc ml-6 space-y-2 mb-1">
                                <li>Secure server infrastructure</li>
                                <li>Access controls</li>
                                <li>Encryption and authentication techniques</li>



                            </ul>
                            <p className="mb-1">
                                Although we make efforts to secure your data, no system is 100% secure. We advise exercising prudence, particularly when accessing third-party links from our Platform.
                            </p>

                        </div>


                        <div>
                            <h2 id="sharing" className="text-[28px] font-[600] mb-1">13. Sharing Your Information</h2>
                            <p className="mb-1">
                                Your information can be shared with the following, as required:
                            </p>

                            <ul className="list-disc ml-6 space-y-2 mb-1">
                                <li>Affiliated institutions or companies</li>
                                <li>Authorized service providers and employees</li>
                                <li>Regulatory bodies or law enforcement (as required by law)</li>
                                <li>Partners in marketing, events, or product distribution</li>
                                <li>Successors in mergers, acquisitions, or asset sales</li>

                            </ul>
                            <p className="mb-1">
                                We make sure third parties meet data protection requirements.
                            </p>

                        </div>



                        <div>
                            <h2 id="grievances" className="text-[28px] font-[600] mb-1">14. Privacy Grievances</h2>
                            <p className="mb-1">
                                If you feel uneasy about this Policy or would like to file a grievance, write to our Grievance Officer:
                            </p>
                            <p className="mb-1">
                                <span className="font-[600]"> Email: </span>       <span>
                                    <Link
                                        href="mailto:support@collegesathi.com"
                                        className="text-[#EC1E24] underline ml-1 mr-1"
                                    >
                                        support@collegesathi.com
                                    </Link>
                                </span>
                            </p>
                            <p className="mb-1">
                                Indian citizens can also approach the Data Protection Board of India under the DPDP Act, 2023.
                            </p>
                        </div>

                        <div>
                            <h2 id="amendments" className="text-[28px] font-[600] mb-1">15. Policy Amendments</h2>
                            <p className="mb-1">
                                This Policy can be amended from time to time as law, practices, or business operations change. Amendments will be uploaded here. If changes are material or required by law, we will inform you through your registered contact information.
                            </p>
                        </div>

                        <div>
                            <h2 id="forms" className="text-[28px] font-[600] mb-1">16. Interactive Forms</h2>
                            <p className="mb-1">
                                When your complete forms or send us an email, we might store your contact information to answer accordingly. Even if you have registered your number in DND, we have the right to call you or send you an SMS/email/WhatsApp for our products and updates.
                            </p>
                        </div>

                        <div>
                            <h2 id="disclaimer" className="text-[28px] font-[600] mb-1">
                                17. Disclaimer
                            </h2>
                            <p className="mb-1">
                              Collegesathi is an ed-tech platform that connects prospective students with online programs offered through partner universities, including NMIMS, Amity, and LPU. We provide program discovery, eligibility guidance, and application support, with fee payments made through the universities’ portals. Collegesathi does not issue degrees or process loans; program approval and financing are handled exclusively by the partner universities and their approved lenders. All programs are offered through our partner institutions and subject to their criteria
                            </p>
                        </div>


                    </div>
                </div>
            </div>
        </Layout>
        </>
    );
}
