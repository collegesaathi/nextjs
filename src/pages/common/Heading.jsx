import React from 'react'

export default function Heading({ lattitle, midtitle, title, classes }) {
  return (
    <div className="my-3 md:my-6"> 
      <h2
        className={`
          font-[Poppins]
          font-semibold
          text-[28px] md:text-[32px]
          leading-[100%]
          tracking-[0px]
          text-[#282529]
          mb-4 md:mb-6
          ${classes}
        `}
      >
        {title} <span className="text-[#EC1E24]">{midtitle}</span> {lattitle}
      </h2>
    </div>
  )
}
