"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* DESKTOP FOOTER */}
      <footer className="bg-[#001136] relative overflow-hidden shadow-[0px_4px_4px_0px_#00000040] pt-16 lg:block hidden">

        {/* TOP CTA */}
        <div className="w-[1314px] mx-auto relative">
          <Image src="/img/university-main/footer/bg.png" alt="bg" width={1314} height={200} />

          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-[40px]">
            <h2 className="font-semibold text-[48px] leading-[100%] tracking-[0px] text-white">
              Get Clarity with Us!
            </h2>

            <div className="flex items-center space-x-3">

              <button
                className="w-[273px] h-[79px] rounded-[17px] border-[1.5px] border-white text-white flex items-center justify-center space-x-2"
              >
                <Image src="/img/university-main/footer/1.svg" alt="icon" width={20} height={20} />
                <span>Schedule Your Call</span>
              </button>

              <button
                className="w-[273px] h-[79px] rounded-[17px] bg-[#EC1E24] text-white flex items-center justify-center space-x-2"
              >
                <Image src="/img/university-main/footer/2.svg" alt="icon" width={20} height={20} />
                <span>Let's Talk Now</span>
              </button>

            </div>
          </div>
        </div>

        {/* MAIN FOOTER CONTENT */}
        <div className="w-[1174px] mx-auto py-[50px]">

          <div className="flex items-start justify-between">

            {/* LOGO + SOCIAL */}
            <div className="w-[244px] space-y-8">
              <Image src="/img/university-main/footer/logo.png" alt="logo" width={200} height={80} />
              <Image src="/img/university-main/footer/1.png" alt="partners" width={200} height={80} />

              <ul className="flex items-center space-x-3 mt-4 text-white">
                {[
                  "ri-facebook-fill",
                  "ri-instagram-line",
                  "ri-twitter-x-line",
                  "ri-youtube-line",
                  "ri-linkedin-fill",
                ].map((icon, i) => (
                  <li
                    key={i}
                    className="w-[30px] h-[30px] rounded-full bg-[#EC1E24] flex items-center justify-center"
                  >
                    <i className={icon}></i>
                  </li>
                ))}
              </ul>

              <button className="w-[149px] h-[43px] rounded-[6px] border border-white text-white relative">
                9785-800-008
                <div className="absolute top-0 left-1.5 bg-[#EC1E24] w-[65px] h-[14px] rounded-full flex items-center justify-center text-white text-[12px] -translate-y-1.5">
                  HELPLINE
                </div>
              </button>
            </div>

            {/* COLUMN — COMPANY */}
            <div className="w-[278px]">
              <h2 className="text-white text-[14px]">Company</h2>
              <div className="bg-[#EC1E24] w-full h-[1px] my-3"></div>

              <ul className="grid grid-cols-2 gap-4 text-white text-[14px]">
                <li><Link href="#">About Us</Link></li>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="#">Contact Us</Link></li>
                <li><Link href="#">Terms & Conditions</Link></li>
                <li><Link href="/faq">FAQs</Link></li>
                <li><Link href="#">Disclaimer</Link></li>
                <li><Link href="/blogs">Blogs</Link></li>

                <li className="relative whitespace-pre">
                  <Link href="#">
                    Cs Careers
                    <div className="absolute -right-20 top-0 bg-[#5CD670D1] text-white text-[9px] w-[77px] h-[14px] rounded-[3px] flex items-center justify-center">
                      We are Hiring
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            {/* COLUMN — Quick Links */}
            <div className="w-[278px]">
              <h2 className="text-white text-[14px]">Quick Links</h2>
              <div className="bg-[#EC1E24] w-full h-[1px] my-3"></div>

              <ul className="grid grid-cols-2 gap-4 text-white text-[14px]">
                <li><Link href="/all-university">Top Universities</Link></li>
                <li><Link href="#">Sitemap</Link></li>
                <li className="col-span-2"><Link href="#">Experts</Link></li>
                <li className="col-span-2"><Link href="#">Scholarships</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* FINAL TEXT */}
        <div className="w-[1174px] mx-auto text-white text-center">
          <div className="bg-[#EEEEEE] h-[2px] my-[50px]"></div>

          <p className="text-[14px] leading-[38px]">
            Disclaimer / Terms & Conditions / Our Policy
          </p>

          <p className="text-[14px] leading-[24px] my-3.5">
            College Sathi aims to provide unbiased and precise information…
          </p>

          <p className="text-[14px] py-4">© Collegesathi 2025. All Right Reserved.</p>
        </div>

      </footer>

      {/* MOBILE FOOTER */}
      <footer className="bg-[#001136] overflow-hidden shadow-[0px_4px_4px_0px_#00000040] pt-16 lg:hidden block px-4 pb-20">

        {/* MOBILE CTA */}
        <div className="w-full relative h-[108px]">
          <Image src="/img/university-main/footer/bg.png" alt="bg" fill className="object-cover" />

          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-[40px]">
            <h2 className="text-[20px] font-semibold text-white">Get Clarity with Us!</h2>

            <div className="flex flex-col space-y-2">
              <button className="w-[146px] h-[33px] text-white border-white border text-[12px] rounded-[5px] flex items-center justify-center space-x-2">
                <Image src="/img/university-main/footer/1.svg" alt="icon" width={12} height={12} />
                <span>Schedule Your Call</span>
              </button>

              <button className="w-[146px] h-[33px] bg-[#EC1E24] text-white text-[12px] rounded-[5px] flex items-center justify-center space-x-2">
                <Image src="/img/university-main/footer/2.svg" alt="icon" width={12} height={12} />
                <span>Let's Talk Now</span>
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE FOOTER SMALL CONTENT */}
        <div className="py-[50px]">
          <div className="space-y-8 mb-9">
            <Image src="/img/university-main/footer/logo.png" alt="logo" width={200} height={80} />
            <Image src="/img/university-main/footer/1.png" alt="partners" width={200} height={80} />

            <ul className="flex space-x-3 text-white">
              {[
                "ri-facebook-fill",
                "ri-instagram-line",
                "ri-twitter-x-line",
                "ri-youtube-line",
                "ri-linkedin-fill",
              ].map((icon, i) => (
                <li key={i} className="w-[30px] h-[30px] rounded-full bg-[#EC1E24] flex items-center justify-center">
                  <i className={icon}></i>
                </li>
              ))}
            </ul>

            <button className="w-[149px] h-[43px] rounded-[6px] border border-white text-white relative">
              9785-800-008
              <div className="absolute top-0 left-1.5 bg-[#EC1E24] w-[65px] h-[14px] rounded-full text-[12px] text-white flex justify-center items-center -translate-y-1.5">
                HELPLINE
              </div>
            </button>
          </div>
        </div>

        <div className="text-center text-white">
          <div className="bg-[#EEEEEE] h-[2px] my-6"></div>

          <h1 className="text-[14px]">Disclaimer / Terms & Conditions / Our Policy</h1>
          <p className="text-[14px] my-3.5">
            College Sathi aims to provide unbiased and precise information…
          </p>
          <p className="text-[14px]">© Collegesathi 2025. All Right Reserved.</p>
        </div>
      </footer>
    </>
  );
}
