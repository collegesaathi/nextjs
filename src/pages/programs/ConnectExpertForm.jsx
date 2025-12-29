import React from 'react';

const ConnectExpertForm = () => {
  return (
    <div className="bg-[#FEF8F6] text-[23px] md:rounded-[30px] p-2 py-6 md:p-8 mb-10 shadow-xl max-w-[850px] mx-auto my-10 font-poppins border-4 border-white">
      {/* Heading Section */}
      <div className=" text-center mb-10">
        <h2 className="text-[20px] md:text-[30px] font-[600] text-[#282529] mb-2 tracking-0 leading-[24px] md:leading-[40px] ">
          Connect With Our Experts
        </h2>
        <p className="text-[#282529] text-[12px] md:text-[14px] text-center tracking-0  leading-[14px]">
          Provide your details and get an expert career counselling for free!
        </p>
      </div>

      <form className="space-y-6">
        {/* Input Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
          
          {/* Full Name */}
          <div className="flex flex-col space-y-1">
            <label className="text-[14px] font-[400] font-poppins leading-[14px] tracking-0 text-[#282529] px-1">Full name<span className='text-[#EE1E24] ml-1'>*</span></label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="px-4 py-2 rounded-lg border border-gray-100 bg-white text-sm placeholder:text-gray-300 focus:outline-none focus:ring-1 focus:ring-red-400 transition-all"
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col space-y-1">
            <label className="text-[14px] font-[400] font-poppins leading-[14px] tracking-0 text-[#282529] px-1">Email address<span className='text-[#EE1E24] ml-1'>*</span></label>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg border border-gray-100 bg-white text-sm placeholder:text-gray-300 focus:outline-none focus:ring-1 focus:ring-red-400 transition-all"
            />
          </div>

          {/* Mobile Number */}
          <div className="flex flex-col space-y-1">
            <label className="text-[14px] font-[400] font-poppins leading-[14px] tracking-0 text-[#282529] px-1">Mobile number<span className='text-[#EE1E24] ml-1'>*</span></label>
            <input
              type="tel"
              placeholder="Enter your number"
              className="px-4 py-2 rounded-lg border border-gray-100 bg-white text-sm placeholder:text-gray-300 focus:outline-none focus:ring-1 focus:ring-red-400 transition-all"
            />
          </div>

          {/* OTP Field */}
          <div className="flex flex-col space-y-1">
            <label className="text-[14px] font-[400] font-poppins leading-[14px] tracking-0 text-[#282529] px-1">Otp<span className='text-[#EE1E24] ml-1'>*</span></label>
            <input
              type="text"
              placeholder="Enter 6 digit number"
              className="px-4 py-2 rounded-lg border border-gray-100 bg-white text-sm placeholder:text-gray-300 focus:outline-none focus:ring-1 focus:ring-red-400 transition-all"
            />
          </div>
        </div>

        {/* Authorization Checkbox */}
        <div className="flex items-start space-x-3 pt-2">
          <div className="relative flex items-center mt-1">
            <input
              type="checkbox"
              className="h-4 w-4 bg-[#EE1E24] rounded border-gray-300 text-red-600 focus:ring-red-500 cursor-pointer"
              defaultChecked
            />
          </div>
          <p className="text-[12px] text-[#282529] leading-relaxed font-[400] leading-[14px]">
            I hereby authorize you to send notifications via SMS/RCS Messages, Promotional/Informational Messages.
          </p>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="bg-[#EE1E24] text-white px-12 py-3 rounded-[25px] font-[600] leading-[16px] text-[14px] md:text-[16px] hover:bg-red-700 transition-colors shadow-md active:scale-95"
          >
            Enquire Now!
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConnectExpertForm;