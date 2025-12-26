import Heading from "@/common/Heading";

function Advantages({ advantages }) {

    return (

        <section className="px-2 md:px-6 py-6 " id="advantages-section">
            <div className="max-w-[1230px]">
                <div className="mb-8">

                    <Heading title={advantages?.title} />

                    <div
                        className="font-poppins text-[14px] sm:text-[16px] text-[#282529] leading-6 sm:leading-7 mb-4"
                        dangerouslySetInnerHTML={{ __html: advantages?.description || "" }}
                    />

                </div>

                <div className="overflow-hidden mt-[30px]">
                    <div className="flex flex-wrap">
                        {/* Header */}
                        <div className="bg-[#ec1e24] text-white p-4 font-poppins font-semibold text-[14px] md:text-[17px] border-r-2 border-[#f47c80] h-[65px] flex items-center w-5/12 sm:w-4/12">
                            Advantages
                        </div>
                        <div className="bg-[#ec1e24] text-white p-4 font-poppins font-semibold text-[14px] md:text-[17px] h-[65px] flex items-center w-7/12 sm:w-8/12">
                            Description
                        </div>

                        {/* Rows */}
                        {advantages && advantages?.advantages?.map((advantage, index) => (
                            <div key={index} className="flex w-full">
                                <div className="bg-white border-b-2 border-l-2 border-r-2 border-[#f47c80] p-2 md:p-4 font-poppins flex flex-col justify-start w-5/12 sm:w-4/12">
                                    <h3 className=" text-[11px] md:text-[17px] text-[#282529] mb-2">
                                        {advantage.title}
                                    </h3>
                                </div>

                                <div className="bg-white border-b-2 border-r-2 border-[#f47c80] p-2 md:p-4 font-poppins w-7/12 sm:w-8/12">
                                    <div
                                        className=" text-[12px] md:text-[17px] font-[400] text-[#363535] leading-relaxed  line-clamp-4 md:line-clamp-none"
                                        dangerouslySetInnerHTML={{
                                            __html: advantage.description,
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Advantages;