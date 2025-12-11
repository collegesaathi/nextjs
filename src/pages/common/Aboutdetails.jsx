import Heading from "@/common/Heading";

function Aboutdetails({ about }) {
    console.log("about", about);

    return (
        <section className="w-full px-6 py-6 mx-auto" id="about-section">
            <div className="max-w-[1230px]">
                    <div >
                        <Heading title={about?.title} />
                        <div
                            className="font-poppins font-[400] text-[17px] leading-[25px] text-[#282529]"
                            dangerouslySetInnerHTML={{ __html: about?.description || "" }}
                        />
                    </div>
            </div>
        </section>
    );
}

export default Aboutdetails;
