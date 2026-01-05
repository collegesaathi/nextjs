// components/SVGIcon.jsx
import React from "react";

const icons = {
    marketing: (
        <svg viewBox="0 0 24 24">
            <path d="M3 13h2v6H3v-6zm4-6h2v12H7V7zm4 4h2v8h-2v-8zm4-6h2v14h-2V5zm4-2h2v16h-2V3z" />
        </svg>
    ),

    download: (
        <svg viewBox="0 0 24 24">
            <path
                d="M12 3v10m0 0 4-4m-4 4-4-4M4 19h16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
        </svg>
    ),

    male: (
        <svg viewBox="0 0 24 24">
            <circle cx="8" cy="8" r="4" stroke="currentColor" fill="none" strokeWidth="1.6" />
            <path d="M14 2h8v8" stroke="currentColor" strokeWidth="1.6" fill="none" />
        </svg>
    ),

    female: (
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="6" r="4" stroke="currentColor" fill="none" strokeWidth="1.6" />
            <path d="M12 10v6M9 18h6" stroke="currentColor" strokeWidth="1.6" fill="none" />
        </svg>
    ),

    rank:(
                                   <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5532 0H17.2359C17.4245 0 17.5854 0.0668299 17.7187 0.200489C17.852 0.334149 17.9187 0.49549 17.9187 0.684513V15.5704C17.9187 15.7594 17.852 15.9207 17.7187 16.0544C17.5854 16.188 17.4245 16.2549 17.2359 16.2549L1.36553 16.2549L0.682764 16.2549C0.494225 16.2549 0.333296 16.188 0.199977 16.0544C0.0666585 15.9207 0 15.7594 0 15.5704V0.684513C0 0.49549 0.0666597 0.334149 0.199978 0.200489C0.333296 0.0668299 0.494225 0 0.682764 0H16.5532Z" fill="url(#paint0_linear_0_79636)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.3094 7.37389L5.38618 2L5 2.50797L6.62813 7.37389L5 12.2398L5.38618 12.7478L15.3094 7.37389V7.37389Z" fill="url(#paint1_linear_0_79636)"/>
<defs>
<linearGradient id="paint0_linear_0_79636" x1="0.677703" y1="0.597771" x2="0.677703" y2="15.623" gradientUnits="userSpaceOnUse">
<stop stop-color="#FDECED"/>
<stop offset="1" stop-color="#FAC7C8"/>
</linearGradient>
<linearGradient id="paint1_linear_0_79636" x1="15.3095" y1="2.00157" x2="5.00308" y2="2.00157" gradientUnits="userSpaceOnUse">
<stop stop-color="#F0565B"/>
<stop offset="1" stop-color="#F7A1A4"/>
</linearGradient>
</defs>
</svg>
    ),
    phone: (
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="6" r="4" stroke="currentColor" fill="none" strokeWidth="1.6" />
            <path d="M12 10v6M9 18h6" stroke="currentColor" strokeWidth="1.6" fill="none" />
        </svg>
    ),

    pen:(
             <svg viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M46.426 37.9315H17.035L40.5368 14.3608C42.0107 12.649 41.8984 10.3835 40.4415 8.70989C39.235 7.32304 37.8477 6.01254 36.4598 4.70137L36.4597 4.70131L36.4597 4.70127C35.1898 3.50166 33.9193 2.30149 32.7862 1.04175C31.1873 -0.30733 28.9235 -0.364602 27.3035 0.978117L0.436842 27.9004C0.201782 28.2483 0.129782 28.6492 0.0831938 29.0607C0.181604 30.7121 0.124964 32.4331 0.0683584 34.153C0.00681078 36.0231 -0.0546958 37.892 0.0831938 39.6688C0.159429 40.6721 0.722726 41.4145 1.75191 41.5291H46.426C48.0142 41.2491 48.5182 39.1915 47.1714 38.2582C47.038 38.167 46.5615 37.9315 46.426 37.9315ZM29.9359 3.60845C29.8321 3.62118 29.7135 3.6827 29.633 3.7527L25.4189 8.03752L33.574 16.219C34.1789 15.5859 34.8067 14.974 35.4342 14.3623C36.2764 13.5414 37.1183 12.7208 37.9046 11.8493C37.9999 11.616 37.9808 11.3466 37.7966 11.1705L30.4568 3.81633C30.3001 3.69542 30.1455 3.58088 29.9359 3.60845ZM3.67452 37.8382V29.7585L3.67452 29.7606L22.8075 10.6104L31.0198 18.7792L11.8974 37.9336H3.76981L3.67452 37.8382Z"    fill="currentColor" />
                        </svg>
    ),
    plus:(
             <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    stroke="red"
                                    className="w-4 h-4"
                                >
                                    <path
                                        d="M12 5V19M5 12H19"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

    )
};

export default function SVGIcon({ name, size = 24, className = "", color = "currentColor" }) {
    const IconSvg = icons[name];

    if (!IconSvg) return null;

    return (
        <div
            className={className}
            style={{
                width: size,
                height: size,
                display: "inline-block",
                color: color,
            }}
        >
            {IconSvg}
        </div>
    );
}


{/* <SVGIcon name="phone" size={20} className="text-gray-600" /> */ }
