import Image from "next/image";
import Heading from "@/common/Heading";

export default function SampleCertificate({certificates}) {
  return (
    <>
      <section className="w-full px-6 py-6 mx-auto" id="certificate-section">
        <div className="max-w-[1230px]">
          <div className="flex flex-col lg:flex-row items-center justify-left gap-3 ">
            {/* LEFT CONTENT */}
            <div className="w-full lg:w-1/2">
              <Heading title={certificates?.title} />
              <div
                        className="font-poppins text-[15px] sm:text-[16px] text-[#282529] leading-6 sm:leading-7 mb-4"
                        dangerouslySetInnerHTML={{ __html: certificates?.description || "" }}
                    />
            </div>

            {/* CERTIFICATE IMAGE */}
            <div className="w-full lg:w-1/2 justify-center flex">
              <div className="relative w-[260px] h-[250px] sm:w-[300px] sm:h-[290px] md:w-[340px] md:h-[330px] lg:w-[360px] lg:h-[355px]">
                {/* Frame */}
                <img
                   src="/images/university/certificatebg.png"
                  alt="frame"
                  fill
                  className="object-cover"
                />

                {/* Inner Certificate */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={certificates?.image}
                    alt="certificate"
                    width={220}
                    height={150}
                    className="object-cover w-[180px] sm:w-[200px] md:w-[220px]"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
