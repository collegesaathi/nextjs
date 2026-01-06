

export  default function HighPay(){

      const salaryData = [
        { title: "IT Director / Head of IT", salary: "40 lakhs", industry: "Technology, SaaS, Product" },
        { title: "Chief Executive Officer (CEO) / MD", salary: "31.4 lakhs", industry: "Executive Leadership / All industries" },
    ];
    return (
        <>
            <header className="mb-8 font-poppins" >
                            <h1 className="text-3xl md:text-[50px] font-[600] text-gray-800 leading-[70px] mb-8">
                                Top High-Paying Job In India 2025 Edition
                            </h1>
        
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0">
                                        {/* Replace with Author Image */}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-700">Chetna Sharma</p>
                                        <p className="text-xs text-gray-500">Academic Expert • Jun 02, 2024</p>
                                    </div>
                                </div>
                                <button className="bg-[#ef3131] text-white text-[16px] px-6 py-4 rounded-lg flex items-center justify-center gap-2 font-[400] hover:bg-red-700 transition-colors w-fit">
                                    Share 
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                    </svg>
                                </button>
                            </div>
                        </header>

                        <div>
                                {/* Featured Image */}
                        <div className="relative w-full rounded-2xl overflow-hidden mb-8 shadow-sm border border-gray-100">
                            <img 
                                src="/images/blog/highpay.png" 
                                alt="High Paying Jobs Banner" 
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Article Text */}
                        <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed space-y-6">
                            <p>
                            Everyone wants to get that high paying job in India, so that they can accomplish their dreams and goals. But the main question is how?
India’s job market industry is developing and growing at an extremely fast pace, which is raising competition daily for the working professionals and the freshers to get their dream job. Nowadays, just completing a degree is not enough to get a job that pays a higher salary. If you are someone who wants to find ways to get the highest paying jobs that fulfills your goals, then this blog is for you!
You need to craft a strategic path for yourself to reach your dream job and to help you achieve that, this blog has mentioned the list of high-paying jobs in India in 2025 and their pathways to reach there easily. In addition, there are some bonus tips and tricks which you can use to develop a strategic mind and work effortlessly.
Let’s dive-in this blog and start building your future strategies together!
                            </p>
                         
                            
                            <h2 className="text-3xl font-bold text-gray-800 pt-6">
                                Comparison of High-paying jobs (average salaries and industries)
                            </h2>

                            {/* Salary Table */}
                            <div className="overflow-x-auto mt-8 border rounded-lg overflow-hidden">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-[#ef3131] text-white">
                                            <th className="p-4 border-r border-red-400">Benefits</th>
                                            <th className="p-4 border-r border-red-400">Details</th>
                                            <th className="p-4">Industry</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm">
                                        {salaryData.map((row, idx) => (
                                            <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-pink-50/30"}>
                                                <td className="p-4 border font-bold text-gray-800">{row.title}</td>
                                                <td className="p-4 border text-gray-700">{row.salary}</td>
                                                <td className="p-4 border text-gray-700">{row.industry}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        </div>
        </>

)

}
