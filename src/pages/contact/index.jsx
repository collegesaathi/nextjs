import Layout from "../components/Layout";
import ContactForm from "./ContactFormCard";
import SocialBar from "./SocialBar";
import VisitUs from "./VisitUs";
import { Mail, Phone, MessageCircle, Users } from "lucide-react";
import Oval  from "../assets/home/Oval.png"
function Index() {
    return (<>

        <Layout>
            <div className="mt-[150px]">
                <section className="relative w-full py-16 px-4 md:px-10 lg:px-20">

                    {/* Background Grid Pattern */}
                    <div className={`absolute inset-0 bg-[url(${Oval})] opacity-20 pointer-events-none`}></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center">

                        {/* CS Logo Circle */}
                        <div className="w-14 h-14 flex items-center justify-center bg-red-600 text-white text-xl font-semibold rounded-full shadow-md">
                            CS
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl font-bold mt-6">Contact Our Friendly Team</h1>
                        <p className="text-gray-600 mt-2">
                            Let’s Make It Happen Together
                        </p>

                        {/* Cards Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full">

                            {/* Support */}
                            <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-3 hover:shadow-lg transition">
                                <div className="w-12 h-12 bg-red-100 text-red-600 flex items-center justify-center rounded-xl">
                                    <MessageCircle size={22} />
                                </div>
                                <h3 className="font-semibold text-lg">Chat to support</h3>
                                <p className="text-gray-500 text-sm">Let’s Connect</p>
                                <a href="mailto:support@collegesathi.com" className="text-red-600 font-medium">
                                    support@collegesathi.com
                                </a>
                            </div>

                            {/* HR Mail */}
                            <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-3 hover:shadow-lg transition">
                                <div className="w-12 h-12 bg-red-100 text-red-600 flex items-center justify-center rounded-xl">
                                    <Users size={22} />
                                </div>
                                <h3 className="font-semibold text-lg">Mail to HR</h3>
                                <p className="text-gray-500 text-sm">Join Our Community</p>
                                <a href="mailto:hr@collegesathi.com" className="text-red-600 font-medium">
                                    hr@collegesathi.com
                                </a>
                            </div>

                            {/* DM Us */}
                            <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-3 hover:shadow-lg transition">
                                <div className="w-12 h-12 bg-red-100 text-red-600 flex items-center justify-center rounded-xl">
                                    <Mail size={22} />
                                </div>
                                <h3 className="font-semibold text-lg">DM Us</h3>
                                <p className="text-gray-500 text-sm">Start a Conversation</p>
                                <p className="text-gray-700 font-medium">xxxx-xxx-xxx</p>
                            </div>

                            {/* Call Us */}
                            <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-3 hover:shadow-lg transition">
                                <div className="w-12 h-12 bg-red-100 text-red-600 flex items-center justify-center rounded-xl">
                                    <Phone size={22} />
                                </div>
                                <h3 className="font-semibold text-lg">Call Us</h3>
                                <p className="text-gray-500 text-sm">Let’s Talk</p>
                                <p className="text-gray-700 font-medium">9785-800-008</p>
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