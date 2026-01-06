
import Link from "next/link";
import Layout from "../components/Layout";
import ContactSection from "../home/ContactSection";
import Head from 'next/head'

export default function TermsConditions() {
    return ( 
        <>  
               <Head>
            <title>Terms & Conditions | Collegesathi</title>
            <meta
                name="description"
                content="Review the terms and conditions governing the use of Collegesathi’s website, services and educational resources."
            />

            <meta
                name="keywords"
                content=""
            />
        </Head>
        <Layout>
            <div className="mx-auto container sm:container md:container xl:max-w-[1230px]   px-2 md:px-4 py-4 md:mt-20 lg:mt-20 ">
                {/* Breadcrumb */}
                <div className="  px-4 py-4 text-sm text-gray-500 mt-6">
                    <nav className="flex items-center gap-2">
                        <span className="text-gray-400">Home</span>
                        <span>{">"}</span>
                        <span className="text-[#EC1E24] font-medium">Terms & Conditions</span>
                    </nav>
                </div>

                {/* Header */}
                <div className="text-center  px-4 py-4">
                    <div className="flex  justify-center  items-center text-center mt-3  mb-3">
                        <svg width="48" height="42" viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M46.426 37.9315H17.035L40.5368 14.3608C42.0107 12.649 41.8984 10.3835 40.4415 8.70989C39.235 7.32304 37.8477 6.01254 36.4598 4.70137L36.4597 4.70131L36.4597 4.70127C35.1898 3.50166 33.9193 2.30149 32.7862 1.04175C31.1873 -0.30733 28.9235 -0.364602 27.3035 0.978117L0.436842 27.9004C0.201782 28.2483 0.129782 28.6492 0.0831938 29.0607C0.181604 30.7121 0.124964 32.4331 0.0683584 34.153C0.00681078 36.0231 -0.0546958 37.892 0.0831938 39.6688C0.159429 40.6721 0.722726 41.4145 1.75191 41.5291H46.426C48.0142 41.2491 48.5182 39.1915 47.1714 38.2582C47.038 38.167 46.5615 37.9315 46.426 37.9315ZM29.9359 3.60845C29.8321 3.62118 29.7135 3.6827 29.633 3.7527L25.4189 8.03752L33.574 16.219C34.1789 15.5859 34.8067 14.974 35.4342 14.3623C36.2764 13.5414 37.1183 12.7208 37.9046 11.8493C37.9999 11.616 37.9808 11.3466 37.7966 11.1705L30.4568 3.81633C30.3001 3.69542 30.1455 3.58088 29.9359 3.60845ZM3.67452 37.8382V29.7585L3.67452 29.7606L22.8075 10.6104L31.0198 18.7792L11.8974 37.9336H3.76981L3.67452 37.8382Z" fill="#282529" />
                        </svg>
                    </div>

                    <h1 className="text-3xl md:text-[60px] font-[600] font-poppins text-gray-800">
                        Terms & Conditions
                    </h1>
                    <p className="text-gray-600 text-[16px] font-poppins font-[400] mt-2">
                        Read these terms & conditions carefully as it<br />
                        contains important information
                    </p>
                </div>

                <div className="border-t border-gray-200  my-6"></div>

                {/* Content */}
                <div className=" px-4 py-4 pb-20 text-[#282529]  font-poppins text-[16px] leading-[28px] font-[400] ">

                    <div className="my-4">
                        <p className=" font-[600] text-[18px]">
                            1. Acceptance of Terms
                        </p>
                        <p>
                            By accessing or using Collegesathi, you confirm that you have read, understood, and agreed to these Terms.
                            If you do not agree, please refrain from using our services.
                        </p>

                    </div>

                    <div className="my-4">
                        <p className="mb-1 font-[600] text-[18px]">
                            2. Services Provided
                        </p>
                        <p className="mb-2">
                            Collegesathi provides information, guidance, and resources related to:
                        </p>
                        <ul className="list-disc ml-6 mb-3 ">
                            <li>Online colleges, universities, and educational institutions</li>
                            <li>Online and offline courses offered by these universities</li>
                            <li>Admission processes</li>
                            <li>Career counselling and related services</li>
                        </ul>
                        <p ><span className="font-[600] text-[#EC1E24]">*Note:*</span> Collegesathi is an educational guidance platform. We are not a university or college and do not directly
                            grant admissions, certificates, or degrees. </p>

                    </div>


                    <div className="my-4">
                        <p className="font-[600] text-[18px]">
                            3. Eligibility
                        </p>
                        <p className="mb-4">
                            You must be at least 18 years old or using the platform under the supervision of a parent/guardian to access our services.
                        </p>

                    </div>

                    <div className="my-4">
                        <p className=" font-[600] text-[18px]">
                            4. User Responsibilities
                        </p>
                        <p className="mb-2">
                            You will be responsible for:
                        </p>
                        <ul className="list-disc ml-6 mb-3 ">
                            <li>Provide accurate and updated information while interacting with our services.</li>
                            <li>Use the website and services for lawful purposes only.</li>
                            <li>Not misuse, copy, or resell any content, guides, or resources available on Collegesathi without written permission.</li>
                        </ul>

                    </div>

                    <div className="my-4">
                        <p className=" font-[600] text-[18px]">
                            5. Intellectual Property Rights
                        </p>
                        <p className="mb-4">
                            All content, including text, graphics, logos, design, and software, is the property of Collegesathi and protected under applicable
                            copyright and intellectual property laws. Unauthorized use of any material is prohibited.
                        </p>

                    </div>

                    <div className="my-4">
                        <p className=" font-[600] text-[18px]">
                            6. Third-Party Links & Services
                        </p>
                        <p className="mb-4">
                            Our platform may include links to third-party websites. Collegesathi is not responsible for the content, services,
                            or privacy policies of third-party platforms. Users are advised to review their terms before engaging with them.
                        </p>

                    </div>

                    <div className="my-4">
                        <p className=" font-[600] text-[18px]">
                            7. Disclaimer & Limitation of Liability
                        </p>
                        <p className="mb-2">
                            Collegesathi strives to provide accurate and updated information. However, we do not guarantee the completeness, accuracy, or reliability of the content.
                            Collegesathi has every right to discontinue the program, curriculum and facility according to the respective institutions/organizations.
                        </p>
                        <p className="mb-2">
                            We are not liable for any direct, indirect, or incidental damage arising from the use of our website or reliance on information provided.
                        </p>
                        <p className="mb-2">
                            Admission, scholarships, or job opportunities are solely at the discretion of the respective institutions/organizations.
                        </p>

                    </div>

                    <div className="my-4">
                        <p className=" font-[600] text-[18px]">
                            8. Payment & Refund Policy
                        </p>
                        <p className="mb-2">
                            Collegesathi does not charge any fees for counselling or guidance services.
                            If any third-party services or institutions require payment, such transactions will occur directly between the user and the respective organization. Collegesathi is not responsible for issues arising from such payments.

                        </p>
                        <p className="mb-2">
                            The refund policy will be applied as per the institute’s guidelines, and the refund will be processed
                            according to the university’s policies and procedure.

                        </p>

                    </div>

                    <div className="my-4">
                        <p className=" font-[600] text-[18px]">
                            9. Privacy Policy
                        </p>
                        <p className="mb-4">
                            Your personal data is protected under our <span className="text-[#EC1E24] font-[600]"> <Link href="/privacy-policy" target="blank" className="underline" > Privacy Policy</Link></span> .By using our services, you consent to the collection and use of your data as outlined in the policy.
                        </p>

                    </div>

                    <div className="my-4">
                        <p className=" font-[600] text-[18px]">
                            10. Termination of Services
                        </p>
                        <p className="mb-2">
                            Collegesathi reserves the right to suspend or terminate user access if:

                        </p>


                        <ul className="list-disc ml-6 mb-3 ">
                            <li>The user violates these Terms & Conditions.</li>
                            <li>Fraudulent, misleading, or illegal activity is suspected.</li>

                        </ul>

                    </div>



                    <div className="my-4">
                        <p className=" font-[600] text-[18px]">
                            11. Governing Law & Jurisdiction
                        </p>
                        <p className="mb-2">
                            These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall fall
                            under the jurisdiction of the courts in Jaipur/Rajasthan.

                        </p>


                    </div>

                    <div className="my-4">
                        <p className=" font-[600] text-[18px]">
                            12. Changes to Terms
                        </p>
                        <p className="mb-2">
                            Collegesathi reserves the right to update or modify these Terms & Conditions at any time without prior notice.
                            Continued use of the platform after changes indicates acceptance of the revised terms.

                        </p>


                    </div>

                    <div className="my-4">
                        <p className=" font-[600] text-[18px]">
                            13. Contact Us
                        </p>
                        <p className="mb-2">
                            For any questions or concerns regarding these Terms & Conditions, you may contact us at:

                        </p>

                        <ul className="mb-3 mt-6">
                            <li>
                                Email:
                                <Link
                                    href="mailto:support@collegesathi.com"
                                    className="text-[#EC1E24] underline ml-1"
                                >
                                    support@collegesathi.com
                                </Link>
                            </li>

                            <li>
                                Phone:
                                <Link
                                    href="tel:9785800008"
                                    className="text-[#EC1E24] underline ml-1"
                                >
                                    9785-800-008
                                </Link>
                            </li>

                            <li>
                                Website:
                                <Link
                                    href="https://www.collegesathi.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#EC1E24] underline ml-1"
                                >
                                    www.collegesathi.com
                                </Link>
                            </li>
                        </ul>




                    </div>






                </div>




                <ContactSection />

            </div>
        </Layout>
        </>
    );
}
