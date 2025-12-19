

import React from "react";
import Image from "next/image";



function Facts({ facts }) {


  
  return (
    <>
      <div className="px-6 py-6  relative">
         
           <div className="absolute top-0 left-0 w-full h-[80%] bg-[#fcf0ee] -z-10 "></div>
                         <Image src="/images/university/factsbg.png" width={200} height={200} className="hidden lg:block absolute top-2 lg:right-10 2xl:right-60 lg:top-16 animate-float"  />
        <section className="w-full mx-auto" id="facts-section">
          <div className="">
            <div className="relative z-10  mt-[50px]">
              <h2
                className="
    font-poppins
    font-[600]
    text-[18px] md:text-[28px]
    leading-[24px] md:leading-[100%]
    tracking-[0px]
    text-[#282529]
    mb-4 md:mb-[30px]
    w-[250px]
  "
              >
                {facts?.title}

              </h2>
  
        <div className="rounded-[20px] bg-white max-w-[1230px] shadow-[0px_1px_10px_rgba(0,0,0,0.09)] p-4 md:p-8 ">
             
  <div className="flex">

    <div className="flex-1">
      {facts?.facts?.map((item, index) => (
     
        <div key={index} className="flex gap-4 relative "> 
          
        
          <div className="flex flex-col items-center min-w-[40px]  "> 
            
 
            <div className="w-7 h-7 bg-[#fcf0ee] rounded-full flex flex-none items-center justify-center z-10  ">
              <span className="font-poppins font-semibold text-[#ff8787] text-[16px] ">
                {index + 1}
              </span>
            </div>

    
            {index < facts.facts.length - 1 && (
              <div className="w-[1px] bg-[#ffd5ce] flex-grow  "></div>
            )}
          </div>

   
            <div className={`border-b  border-[#C4C4C4] mb-8 ${index < facts.facts.length - 1? "" : "border-b-0"}`}>
          <div className="md:flex w-full items-start  mb-4 ">
            <h3 className="font-poppins font-semibold text-[15px] md:text-[17px] text-[#282529] w-1/3 ">
              {item.patternName}
            </h3>

            <div
              className="font-poppins  text-[14px] md:text-[16px] leading-[20px] md:leading-[22px] text-[#282529]  w-2/3 "
              dangerouslySetInnerHTML={{ __html: item?.description || "" }}
            />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Facts;
