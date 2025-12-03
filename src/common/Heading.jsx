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
          md:leading-[100%]
          tracking-[0px]
          text-[#282529]
          mb-4 md:mb-[30px]
          w-2/3
          ${classes}
        `}
      >
        {title} <span className="text-[#EC1E24]">{midtitle}</span> {lattitle}
      </h2>
  )
}