'use client';

export default function ClickPickCard() {
  return (
    <div className="hidden lg:block w-64 mt-4 p-4 bg-gradient-to-b from-white to-[#EFEFEF] border-2 border-white rounded-md mb-4">
      <h2 className="text-[21px] font-bold text-[#EC1E24] text-center">
        CS ClickPick
      </h2>

      <p className="text-sm text-[#282529] mt-2 text-center">
        Identify verified online universities and compare your favourite
        universities with a single click.
      </p>

      {/* Animated Image Cluster */}
      <div className="relative flex justify-center mt-4 h-40 overflow-visible">
        {/* Main items */}
        <img 
          src="/animation/clickcard/clickshape.svg" 
          className="absolute top-[5.5rem] w-2 animate-twinkle" 
          alt="CS ClickPick Logo" 
        />
        <img 
          src="/animation/clickcard/clickshape1.svg"
          className="absolute top-[4.25rem] w-8" 
          alt="CS ClickPick Logo" 
        />
        <img 
          src="/animation/clickcard/clickshape3.svg"
          className="absolute top-[4.5rem] w-4" 
          alt="CS ClickPick Logo" 
        />

        {/* Side items */}
        <img 
          src="/animation/clickcard/clickshape1.svg" 
          className="absolute top-[9rem] left-[6rem] w-10" 
          alt="CS ClickPick Logo" 
        />

        {/* Floating small items */}
        <img 
          src="	https://collegesathi.co.in/icons/clickpick-items/it_4.svg" 
          className="absolute top-[1.5rem] left-[11rem] w-1.5 animate-float-fast" 
          alt="Spark" 
        />
        <img 
          src="	https://collegesathi.co.in/icons/clickpick-items/it_4.svg" 
          className="absolute top-[1.25rem] left-[5rem] w-1 animate-float-fast" 
          alt="Spark" 
        />
        <img 
          src="	https://collegesathi.co.in/icons/clickpick-items/it_4.svg" 
          className="absolute top-[3rem] left-[3.75rem] w-1.5 animate-float-fast" 
          alt="Spark" 
        />
        <img 
          src="	https://collegesathi.co.in/icons/clickpick-items/it_4.svg" 
          className="absolute top-[3.75rem] left-[7.25rem] w-1 animate-float-fast" 
          alt="Spark" 
        />

        {/* Mid floating dots */}
        <img 
          src="	https://collegesathi.co.in/icons/clickpick-items/it_5.svg" 
          className="absolute top-[4.5rem] left-[2.5rem] w-1 animate-float" 
          alt="Mini" 
        />
        <img 
          src="	https://collegesathi.co.in/icons/clickpick-items/it_5.svg" 
          className="absolute top-[5rem] right-[2.5rem] w-1 animate-float" 
          alt="Mini" 
        />
        <img 
          src="	https://collegesathi.co.in/icons/clickpick-items/it_5.svg" 
          className="absolute top-[2.5rem] left-[6rem] w-1.5 animate-float" 
          alt="Mini" 
        />
        <img 
          src="	https://collegesathi.co.in/icons/clickpick-items/it_5.svg" 
          className="absolute top-[2.5rem] left-[9.5rem] w-1 animate-float" 
          alt="Mini" 
        />
        <img 
          src="	https://collegesathi.co.in/icons/clickpick-items/it_5.svg" 
          className="absolute top-[3.25rem] left-[10.5rem] w-1 animate-float" 
          alt="Mini" 
        />

        {/* Twinkling side dots */}
        <img 
          src="	https://collegesathi.co.in/icons/clickpick-items/it_8.svg" 
          className="absolute top-[8.75rem] left-[2.5rem] w-1 animate-twinkle" 
          alt="Spark" 
        />
        <img 
          src="	https://collegesathi.co.in/icons/clickpick-items/it_12.svg" 
          className="absolute top-[8.75rem] left-[3rem] w-1.5 animate-twinkle" 
          alt="Spark" 
        />
        <img 
          src="	https://collegesathi.co.in/icons/clickpick-items/it_8.svg" 
          className="absolute top-[8.75rem] right-[2.5rem] w-1 animate-twinkle" 
          alt="Spark" 
        />
        <img 
          src="	https://collegesathi.co.in/icons/clickpick-items/it_12.svg" 
          className="absolute top-[8.75rem] right-[3rem] w-1.5 animate-twinkle" 
          alt="Spark" 
        />

        {/* Right cluster */}
        <img 
          src="	https://collegesathi.co.in/icons/clickpick-items/it_7.svg" 
          className="absolute top-[7.5rem] right-[4rem] w-3" 
          alt="Mini" 
        />
        <img 
          src="	https://collegesathi.co.in/icons/clickpick-items/it_10.svg" 
          className="absolute top-[7rem] right-[3.75rem] w-4" 
          alt="Mini" 
        />
        <img 
          src="	https://collegesathi.co.in/icons/clickpick-items/it_9.svg" 
          className="absolute top-[6.5rem] right-[4rem] w-3" 
          alt="Mini" 
        />

        {/* Random orbits */}
        <img 
          src="	https://collegesathi.co.in/icons/clickpick-items/it_11.svg" 
          className="absolute top-[5rem] right-[4.25rem] w-4 animate-orbit" 
          alt="Orbit" 
        />
        <img 
          src="	https://collegesathi.co.in/icons/clickpick-items/it_11.svg" 
          className="absolute top-[8.25rem] left-[7rem] w-4 animate-orbit-slow" 
          alt="Orbit" 
        />
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-4">
        <button className="bg-[#EC1E24] text-white px-4 py-2 rounded hover:bg-[#d81a1f] transition-colors text-base">
          Start Now!
        </button>
      </div>

      <style jsx>{`
     
      `}</style>
    </div>
  );
}