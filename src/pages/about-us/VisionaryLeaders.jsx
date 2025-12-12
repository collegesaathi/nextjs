
import React from 'react';

const leaders = [
    {
        name: 'Mr. Raviraj Khatri',
        title: 'Founder',
        bio: "At Collegesathi, we envision a world where education knows no limits. The pandemic has accelerated online learning’s potential, revolutionizing the way we access knowledge. Today, online education is more than just an option – it’s a liberating choice that unlocks global opportunities. Join us on this transformative journey, where geographical boundaries disappear, and aspirations become reality.",
        imageSrc: '/images/about/founder.png',
        layoutType: 'large'
    },
    {
        name: 'Ms. Keerti Khandelwal',
        title: 'Co-founder',
        bio: "The rise of online learning is not just a phase but a window to endless opportunities. At Collegesathi, we put you first and offer the best online education possible. Balance your studies with work and personal life anytime, anywhere.",
        imageSrc: '/images/about/keerti-khandelwal.png',
        layoutType: 'small'
    },
    {
        name: 'Mr. Chirag Nagpal',
        title: 'Co-founder',
        bio: "Education is changing fast, and online learning is at the forefront. At Collegesathi, we support you at every step with personalized counseling and guidance. Let's unlock new opportunities and ensure success in this exciting world of learning!",
        imageSrc: '/images/about/chirag-nagpal.png',
        layoutType: 'small'
    },
];

const VisionaryLeaders = () => {

    const FounderCard = ({ leader }) => (
<div className="bg-gradient-to-tr from-[rgba(255,244,230,0.5)] to-[rgba(255,255,255,0.5)]
rounded-[30px] border border-[#F8E0C1] overflow-hidden p-6 sm:p-10
flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-10">
            <div className="lg:w-3/5 order-1 lg:order-1">
                <h3 className="text-[26px] md:text-[32px] font-[600] text-[#282529] leading-tight">
                    {leader.name}
                </h3>
                <p className="mt-1 text-lg font-medium text-[#282529]">
                    {leader.title}
                </p>
                <p className="mt-6 text-[16px] font-400  leading-[28px]">
                    {leader.bio}
                </p>
            </div>
            <div className="lg:w-2/5 order-2 lg:order-2 self-start rounded-xl overflow-hidden aspect-w-4 aspect-h-3">
                <img
                    src={leader.imageSrc}
                    alt={leader.name}
                    className="w-full h-full object-cover rounded-xl"
                />
            </div>
        </div>
    );

    const CoFounderCard = ({ leader }) => (
        <div className="bg-gradient-to-tl from-[rgba(255,244,230,0.5)] to-[rgba(255,255,255,0.5)] border border-[#F8E0C1] p-10 rounded-[30px] overflow-hidden ">
             
      
      <div className="">
                <img
                    src={leader.imageSrc}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className=" pt-8 flex flex-col justify-center font-poppins">
                <h4 className="text-xl sm:text-[36px] font-[600] text-[#282529] ">
                    {leader.name}
                </h4>
                <p className=" text-[18px] font-[600] text-[#282529] ">
                    {leader.title}
                </p>
                <p className="mt-4 text-[#282529] text-[16px] leading-[26px] font-[400]">
                    {leader.bio}
                </p>
            </div>

           
        </div>
    );

    return (
        <section className="py-10 md:py-10 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12 sm:mb-16 font-popins ">
                    <h2 className="text-[32px] font-[600] leading-[32px]  text-[#282529]">
                        Our Visionary Leaders
                    </h2>
                    <p className="mt-4 text-[16px] font-[400] leading-[26px] text-[#282529] max-w-3xl mx-auto">
                    Behind Collegesathi is a passionate team of educators, counselors, and innovators who share one goal: success of the student.
                    </p>
                </div>

                {leaders.filter(l => l.layoutType === 'large').map(leader => (
                    <FounderCard key={leader.name} leader={leader} />
                ))}

                <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {leaders.filter(l => l.layoutType === 'small').map(leader => (
                        <CoFounderCard key={leader.name} leader={leader} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default VisionaryLeaders;