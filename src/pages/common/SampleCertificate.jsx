import Image from "next/image";

export default function SampleCertificate() {
  return (
    <>
      {/* ================= DESKTOP ================= */}
      <section className="w-full py-8 mt-28" id="certificate-section">
        <div className="p-8 relative overflow-hidden">
          <div className="flex items-center justify-between xl:w-[860px] mx-auto">

            {/* LEFT CONTENT */}
            <div className="w-[373px]">
              <h2 className="font-poppins font-semibold text-[28px] leading-[42px] text-justify text-[#282529] mb-4">
                NMIMS Sample Certificate
              </h2>

              <p className="font-poppins text-[17px] leading-[25px] text-[#282529]">
                The students will get a recognized certificate which will be similar of traditional
                program, which will help you get admission for higher studies or upgrading prospects at
                higher professional roles.
              </p>
            </div>

            {/* CERTIFICATE IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-[360px] h-[355px] relative">
                <Image src="/img/hd.png" alt="frame" fill className="object-contain" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/img/certificate.png"
                    alt="certificate"
                    width={230}
                    height={160}
                    className="object-contain"
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
