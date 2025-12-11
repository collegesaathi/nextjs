import Image from "next/image";

export default function HeroGallery() {
    const images = [
        "/images/about/abouthero1.png",
        "/images/about/abouthero2.png",
        "/images/about/abouthero3.png",
        "/images/about/abouthero4.png",
        "/images/about/abouthero5.png",
        "/images/about/abouthero6.png",
        "/images/about/abouthero7.png",
        "/images/about/abouthero8.png",
        "/images/about/abouthero9.png",
        "/images/about/abouthero10.png",
        "/images/about/abouthero11.png",
        "/images/about/abouthero12.png",
        "/images/about/abouthero13.png",
    ];

    const columns = [
        images.slice(0, 2),   // Col 1: 2 Images
        images.slice(2, 4),   // Col 2: 2 Images
        images.slice(4, 5),   // Col 3: 1 Image (Center Left)
        images.slice(5, 6),
        images.slice(4, 5),
        images.slice(5, 6),   // Col 3: 1 Image (Center Left)
        images.slice(5, 6),   // Col 4: 1 Image (Center Right) // Col 4: 1 Image (Center Right)
        images.slice(6, 8),   // Col 5: 2 Images
        images.slice(8, 10),  // Col 6: 2 Images
    ];

    const mobileImages = images.slice(0, 3);

    return (


        <div className="mx-auto container sm:container md:container xl:max-w-[1230px]  px-4 py-4 md:mt-20 lg:mt-20 " >
            <div className="w-full bg-white overflow-hidden">



                     <div className="block md:hidden pt-2">
          
     
          <div className="grid grid-cols-3 gap-3 px-2">
            {mobileImages.map((img, i) => (
     
               <div key={`mobile-${i}`} className={`flex flex-col gap-2 ${i === 1 ? 'mt-8' : ''}`}>
                 
     
                 <div className="w-full rounded-[6px] bg-[#F8F8F8] h-16"></div>

     
                 <div className="relative rounded-xl overflow-hidden shadow-md aspect-[3/4] w-full">
                    <Image
                      src={img}
                      alt="Mobile Hero"
                      fill
                      className="object-cover"
                    />
                 </div>
               </div>
            ))}
          </div>

          {/* Mobile Text (Below Images) */}
          <div className="text-center mt-12 px-2 font-poppins">
            <h1 className="text-[26px] font-[600] text-[#282529] leading-tight">
              Every image tells the story <br />
              <span className="text-gray-900">of a team that cares.</span>
            </h1>

            <p className="text-[#282529] mt-4 text-[16px] font-[400] leading-[24px] max-w-xs mx-auto">
              A team that grows, creates impact and celebrate every moment together.
            </p>
          </div>
        </div>

                {/* desktop view */}
                <div className="hidden md:block ">

                    {/* GRID CONTAINER - 6 Columns */}
                    <div className="relative max-w-[1400px] mx-auto pt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-4">

                        {columns.map((colImages, colIndex) => (
                            <div key={colIndex} className="flex flex-col gap-2">

                                {/* --- TOP PLACEHOLDER DIV (#F8F8F8) --- */}
                                <div
                                    className={`
                w-full rounded-[6px] bg-[#F8F8F8] 
                ${colIndex % 2 === 0 ? 'h-32' : 'h-24'} 
              `}
                                ></div>

                                {/* ACTUAL IMAGES */}
                                {colImages.map((img, imgIndex) => {



                                    return (


                                        <div
                                            key={`${colIndex}-${imgIndex}`}
                                            className="group perspective-[1000px]" // Ye depth create karega
                                        >
                                            <div
                                                key={`${colIndex}-${imgIndex}`}
                                                className={`
                   relative overflow-hidden rounded-[6px] shadow-lg bg-gray-100
                  hover:scale-[1.02] transition-transform duration-500 ease-in-out
                  aspect-[80/110] w-full 
                    transition-all duration-500 ease-out
             
                    group-hover:[transform:rotateY(-45deg)_scale(0.95)]
            
                    group-hover:shadow-2xl
               
                `}

                                                style={{
                                                    transformStyle: 'preserve-3d', // Ensures 3D space is respected
                                                }}
                                            >
                                                <Image
                                                    src={img}
                                                    alt={`Gallery Image ${colIndex}-${imgIndex}`}
                                                    fill
                                                    className="object-cover w-full h-full"
                                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                        ))}
                    </div>

                    {/* HERO TEXT */}
                    <div className="text-center max-w-4xl mx-auto px-4 -top-22 relative z-10 font-poppins">
                        <h1 className=" text-3xl md:text-[40px] font-[600] text-gray-900 leading-[56px] tracking-tight">
                            Your Trusted Companion for <br className="hidden md:block" />
                            <span className="relative inline-block">
                                Online University
                            </span>{" "}
                            & Career Decisions.
                        </h1>

                        <p className="text-[#282529] mt-6  md:text-[16px] leading-relaxed max-w-2xl mx-auto font-poppins">
                            At Collegesathi, we're not just an education platform — we're your companion
                            in making life-changing decisions. We provide the clarity and confidence you
                            need to choose the right path, so you never feel lost or alone.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}