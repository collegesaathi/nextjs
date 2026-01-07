import React from 'react'

export default function Heading({ lattitle, midtitle, title, classes }) {
  return (
  <h2
  className={`
    font-poppins
    font-[600]
    text-[18px]
    md:text-[28px]
    leading-[24px]
    md:leading-[1.2]
    tracking-[0px]
    text-[#282529]
    mb-4 md:mb-[10px]
    ${classes}
  `}
>
  {title}{" "}
  <span className="text-[#EC1E24]">
    {midtitle}
  </span>{" "}
  {lattitle}
</h2>

  )
}

 // w-2/3
 