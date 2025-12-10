import Layout from "../components/Layout";

export default function TermsConditions() {
    return (
        <Layout>
            <div className="mx-auto container sm:container md:container xl:max-w-[1230px]  px-4 py-4 md:mt-20 lg:mt-20 ">
                {/* Breadcrumb */}
                <div className="  px-4 py-4 text-sm text-gray-500 mt-6">
                    <nav className="flex items-center gap-2">
                        <span className="text-gray-400">Home</span>
                        <span>{">"}</span>
                        <span className="text-red-600 font-medium">Terms & Conditions</span>
                    </nav>
                </div>

                {/* Header */}
                <div className="text-center  px-4 py-4">
                    <div className="flex  justify-center  items-center text-center mt-3  mb-3">
                        <svg width="48" height="42" viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M46.426 37.9315H17.035L40.5368 14.3608C42.0107 12.649 41.8984 10.3835 40.4415 8.70989C39.235 7.32304 37.8477 6.01254 36.4598 4.70137L36.4597 4.70131L36.4597 4.70127C35.1898 3.50166 33.9193 2.30149 32.7862 1.04175C31.1873 -0.30733 28.9235 -0.364602 27.3035 0.978117L0.436842 27.9004C0.201782 28.2483 0.129782 28.6492 0.0831938 29.0607C0.181604 30.7121 0.124964 32.4331 0.0683584 34.153C0.00681078 36.0231 -0.0546958 37.892 0.0831938 39.6688C0.159429 40.6721 0.722726 41.4145 1.75191 41.5291H46.426C48.0142 41.2491 48.5182 39.1915 47.1714 38.2582C47.038 38.167 46.5615 37.9315 46.426 37.9315ZM29.9359 3.60845C29.8321 3.62118 29.7135 3.6827 29.633 3.7527L25.4189 8.03752L33.574 16.219C34.1789 15.5859 34.8067 14.974 35.4342 14.3623C36.2764 13.5414 37.1183 12.7208 37.9046 11.8493C37.9999 11.616 37.9808 11.3466 37.7966 11.1705L30.4568 3.81633C30.3001 3.69542 30.1455 3.58088 29.9359 3.60845ZM3.67452 37.8382V29.7585L3.67452 29.7606L22.8075 10.6104L31.0198 18.7792L11.8974 37.9336H3.76981L3.67452 37.8382Z" fill="#282529" />
                        </svg>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Terms & Conditions
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Read these terms & conditions carefully as it<br />
                        contains important information
                    </p>
                </div>

                <div className="border-t border-gray-200  my-6"></div>

                {/* Content */}
                <div className=" px-4 py-4 pb-20 text-gray-700 leading-relaxed">
                    <p className="mb-4">
                        Further to the Terms of Use provided on <b>"Collegesathi.com"</b> we disclaim all
                        liabilities and warranties with respect to payment of fees (“Fees”) that are
                        applicable to the programs you have opted for through our platform. Such Fees
                        shall include but not be limited to course fees of the University/Institution’s
                        online degree/certificate program which the user/student directly pays to the
                        university/institution.
                    </p>

                    <ul className="list-disc ml-6 mb-6 space-y-2">
                        <li>The User must make all necessary payments to the university/institution directly.</li>
                        <li>Collegesathi.com does not charge or claim any course fee except for a nominal fee for career counselling services.</li>
                    </ul>

                    <p className="mb-4">
                        The online payment facility provided by <b>"Collegesathi.com"</b> is neither banking
                        nor a financial service but merely a facilitator for ease of payment. The Payment
                        Gateway Service Provider handles the collection and remittance of funds using secure
                        banking and credit card networks.
                    </p>

                    <ul className="list-disc ml-6 mb-6 space-y-2">
                        <li>
                            All payments made through the Payment Gateway may take 0–2 working days to be processed.
                        </li>
                        <li>
                            Collegesathi.com is not responsible for any failure/delay caused by the payment gateway.
                        </li>
                    </ul>

                    <p className="mb-3 font-semibold">
                        Collegesathi.com shall not be liable for any loss caused due to:
                    </p>
                    <ul className="list-disc ml-6 mb-6 space-y-2">
                        <li>Network failure</li>
                        <li>Data processing errors</li>
                        <li>Telecommunication or computer issues</li>
                        <li>Any issues under the Payment Gateway Service Provider’s control</li>
                    </ul>

                    <p className="mb-3 font-semibold">Rejection of Services</p>
                    <p className="mb-4">
                        In case of delayed payments, the User must submit a written request for validation
                        of payment. Refund requests (if applicable) are handled as per internal policies of
                        Collegesathi.com within 10 working days.
                    </p>

                    <p className="mb-6">
                        These terms form an essential part of the agreement between the Student and the
                        Institution. Collegesathi.com acts only as a platform and does not claim any course
                        fee from the student.
                    </p>

                    <p className="mb-2 font-semibold">Accuracy of Information</p>
                    <p className="mb-6">
                        We strive to ensure accuracy in all course data. Institutions may revise academic
                        content at any time. Collegesathi.com is not responsible for these changes.
                    </p>

                    <p className="mb-2 font-semibold">Institution Rights</p>
                    <p>
                        The Institution reserves the right to discontinue any program or make modifications.
                        In such cases, reasonable measures will be taken to minimize disruption.
                    </p>
                </div>

            </div>
        </Layout>
    );
}
