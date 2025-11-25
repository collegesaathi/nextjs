import Shape from "../asserts/home/shape11.avif";

function UnlimitedSection() {
  return (
    <div className="w-full md:w-[1230px] mx-auto relative md:h-[207px] h-auto px-4">
      {/* Background Shape */}
      <img
        src={Shape?.src}
        alt="university"
        className="w-full h-[200px] md:h-full object-cover rounded-lg"
      />

      {/* Content Overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center px-2 md:px-0">

        <h2 className="font-poppins font-semibold text-[20px] md:text-[28px] text-[#EC1E24] mb-1 md:mb-2 leading-tight">
          Unlimited Support
        </h2>

        <p className="font-normal text-[13px] md:text-[16px] text-[#282529] mb-2 md:mb-3 leading-[18px] md:leading-[22px]">
          Get unbiased support and 24*7 assistance <br className="hidden md:block" />
          from our experts.
        </p>

        <button
          type="button"
          className="bg-[#EF1E24] h-[36px] md:h-[40px] rounded-[4px] px-3 md:px-4 font-inter font-semibold text-[12px] md:text-[14px] text-white"
        >
          Schedule Your Call
        </button>
      </div>
    </div>
  );
}

export default UnlimitedSection;
