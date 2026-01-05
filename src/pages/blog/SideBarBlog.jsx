

export  default function SideBarBlog(){
    return (
       <aside className="lg:col-span-3">
                        <div className="sticky top-28">
                            <h2 className="text-lg font-bold mb-6 text-gray-800">Table of Contents</h2>
                            <ul className="space-y-0 text-[13px] leading-relaxed text-gray-600 border-l border-gray-100">
                                <li className="border-l-4 border-red-500 pl-4 py-2 bg-gray-50/50 font-medium text-gray-800">
                                    Comparison of High-paying jobs
                                </li>
                                <li className="border-l-4 border-transparent pl-4 py-2 hover:text-red-500 cursor-pointer">
                                    Top 10 Highest Paid Professions:
                                </li>
                                <li className="border-l-4 border-transparent pl-4 py-2 hover:text-red-500 cursor-pointer">
                                    Tips for preparing yourself for High-paying jobs
                                </li>
                                <li className="border-l-4 border-transparent pl-4 py-2 hover:text-red-500 cursor-pointer">
                                    Conclusion
                                </li>
                                <li className="border-l-4 border-transparent pl-4 py-2 hover:text-red-500 cursor-pointer">
                                    Frequently Asked Questions
                                </li>
                            </ul>
                        </div>
                    </aside>
)

}
