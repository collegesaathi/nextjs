import Heading from "@/common/Heading";
import { sanitizeHtml } from "@/common/sanitizeHtml";

function Aboutdetails({ about }) {

    return (
        <>
            {about?.title && (
                <section className="w-full px-2 md:px-6 py-6 mx-auto" id="about-section">
                    <div className="max-w-[1230px]" data-aos="fade-up">
                        <div >
                            <Heading title={about?.title} />
 <div className="custom-description" dangerouslySetInnerHTML={{ __html: sanitizeHtml(about?.description || "") }} />

                        </div>
                    </div>
                </section>
            )}
        </>

    );
}

export default Aboutdetails;
