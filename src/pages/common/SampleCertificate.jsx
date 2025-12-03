import Image from "next/image";
import Heading from "@/common/Heading";

export default function SampleCertificate() {
  return (
    <>
      <section className="w-full px-4 md:px-6 mt-[50px]" id="certificate-section">
        <div className="relative overflow-hidden">

          <div className="flex flex-col lg:flex-row items-center justify-between max-w-[860px] mx-auto gap-10 lg:gap-0">

            {/* LEFT CONTENT */}
            <div className="w-full lg:w-1/2">
              <Heading title="NMIMS Sample Certificate" />

              <p className="font-poppins text-[15px] md:text-[16px] leading-[22px] md:leading-[25px] text-[#282529] mt-3">
                The students will get a recognized certificate which will be similar of traditional
                program, which will help you get admission for higher studies or upgrading prospects at
                higher professional roles.
              </p>
            </div>

            {/* CERTIFICATE IMAGE */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-[260px] h-[250px] sm:w-[300px] sm:h-[290px] md:w-[340px] md:h-[330px] lg:w-[360px] lg:h-[355px]">

                {/* Frame */}
                <Image
                  src="/images/hd.png"
                  alt="frame"
                  fill
                  className="object-contain"
                />

                {/* Inner Certificate */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/images/certificate.png"
                    alt="certificate"
                    width={220}
                    height={150}
                    className="object-contain w-[180px] sm:w-[200px] md:w-[220px]"
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
