import Heading from "@/common/Heading";

function Advantages() {

    const advantages = [
        {
            title: "Recognized and Accredited Institution",
            subtitle: "",
            description: `One of the best features of <strong>NMIMS CDOE</strong> is that it is accredited and approved by University Grants Commission- Distance Education Bureau (UGC-DEB) and is ranked with an 'A' Grade by National Assessment and Accreditation Council (NAAC). This accreditation proves the credibility of the online programs.`,
        },
        {
            title: "Flexible Learning Approach",
            subtitle: "",
            description: `The <strong>NMIMS CDOE courses</strong> are offered with a flexible approach, providing proper freedom of learning and managing studies with other commitments. This allows the students to design their study schedule accordingly.`,
        },
        {
            title: "Industry-Relevant Curriculum",
            subtitle: "",
            description: `The <strong>NMIMS CDOE courses</strong> curriculum is designed by industry professionals, which covers the latest developments in the world. This provides updated skills and expertise that are important for getting placed in a better role.`,
        },
        {
            title: "Strong Placement and Career Support",
            subtitle: "",
            description: `This university has always maintained relationships with leading recruiters in many different sectors, thus giving students good placement and career assistance. Career support includes resume building, interviews tips and tricks, and other employment gateways. Students also have access to a large alumni base who can assist with jobs and provide guidance.`,
        },
        {
            title: "Affordable and Value for Money",
            subtitle: "",
            description: `Compared to full-time programs, <strong>NMIMS CDOE fees</strong> are flexible and affordable, which is a good investment. Also, many EMI facilities and discounts are provided for the students to get the degree at the minimum possible cost.`,
        },
        {
            title: "Cutting-Edge Digital Learning Platform",
            subtitle: "",
            description: `The digital learning platform at <strong>NMIMS CDOE</strong> is supported with an AI powered Learning Management System (LMS), which promises cutting-edge advancement. Students interact through discussion forums, case studies, and projects. Students can access e-books, video lectures, and assessments any time and from anywhere through digital means.`,
        },
    ];
    return (

        <section className=" mt-[50px] px-6 " id="advantages-section">
            <div className="mb-8">

                <Heading title="NMIMS CDOE Advantages" />


                <p className="text-[17px] text-[#363535] font-poppins">
                    The NMIMS CDOE offers a variety of advantages and benefits, helping
                    students transform their lives and careers. These advantages are:
                </p>
            </div>

            <div className="overflow-hidden mt-[30px]">
                <div className="flex flex-wrap">
                    {/* Header */}
                    <div className="bg-[#ec1e24] text-white p-4 font-poppins font-semibold text-[17px] border-r-2 border-[#f47c80] h-[65px] flex items-center w-5/12 sm:w-4/12">
                        Advantages
                    </div>
                    <div className="bg-[#ec1e24] text-white p-4 font-poppins font-semibold text-[17px] h-[65px] flex items-center w-7/12 sm:w-8/12">
                        Description
                    </div>

                    {/* Rows */}
                    {advantages && advantages?.map((advantage, index) => (
                        <div key={index} className="flex w-full">
                            <div className="bg-white border-b-2 border-l-2 border-r-2 border-[#f47c80] p-4 font-poppins flex flex-col justify-center w-5/12 sm:w-4/12">
                                <h3 className=" text-[11px] md:text-[17px] text-[#282529] mb-2">
                                    {advantage.title}
                                </h3>
                                {advantage.subtitle && (
                                    <p className="text-[11px] md:text-[17px] text-[#666]">
                                        {advantage.subtitle}
                                    </p>
                                )}
                            </div>

                            <div className="bg-white border-b-2 border-r-2 border-[#f47c80] p-4 font-poppins w-7/12 sm:w-8/12">
                                <div
                                    className=" text-[11px] md:text-[17px] font-[400] text-[#363535] leading-relaxed"
                                    dangerouslySetInnerHTML={{
                                        __html: advantage.description,
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Advantages;