import Image from "next/image";
import Heading from "@/common/Heading";

export default function SampleCertificate({ certificates }) {
  return (
    <>
    {certificates?.title && (
    <section className="w-full px-2 sm:px-6 py-8 mx-auto" id="certificate-section">
      <div className="max-w-[1230px] ">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2">
            <Heading title={certificates?.title} />
          <div
  className="font-poppins text-[14px] sm:text-[16px] md:text-[17px] 
             text-[#282529] leading-6 sm:leading-7 break-words whitespace-normal custom-description
             "
  dangerouslySetInnerHTML={{
    __html: certificates?.description || "",
  }}
/>

          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative 
              w-[240px] h-[230px] 
              sm:w-[300px] sm:h-[290px] 
              md:w-[350px] md:h-[340px] 
              lg:w-[380px] lg:h-[360px]"
            >
              {/* Frame Image */}
              <Image
                src="/images/university/certificatebg.png"
                alt="Certificate Frame"
                fill
                className="object-contain"
                priority
              />

              {/* Inner Certificate */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={certificates?.image}
                  alt="Certificate"
                  width={260}
                  height={180}
                  className="object-contain 
                    w-[170px] 
                    sm:w-[210px] 
                    md:w-[240px]"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    )}
    </>
  );
}
