import Heading from "@/common/Heading";

function Aboutdetails({ about }) {

    return (
        <>
            {about?.title && (
                <section className="w-full px-2 md:px-6 py-6 mx-auto" id="about-section">
                    <div className="max-w-[1230px]">
                        <div >
                            <Heading title={about?.title} />
                           <div
  className="font-poppins font-[400] text-[14px] md:text-[17px] leading-[25px] text-[#282529]
  break-words whitespace-normal"
  dangerouslySetInnerHTML={{ __html: about?.description || "" }}
/>
                        </div>
                    </div>
                </section>
            )}
        </>

    );
}

export default Aboutdetails;
