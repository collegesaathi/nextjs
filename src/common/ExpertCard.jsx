import Image from 'next/image';

const ExpertCard = ({ name, role, quote, imageUrl, isSenior }) => {
  const nameClass = isSenior ? 'text-xl' : 'text-lg';

  return (
    <div className="flex flex-col sm:flex-row items-start gap-4 p-4 
                    bg-white rounded-[10px] 
                    hover:shadow-lg transition-shadow duration-300">
      {/* Text Content */}
      <div className="flex-1 order-2 sm:order-1">
        <p className="text-[#282529] font-[400] font-poppins text-[12px]  mb-2">
          {quote}
          <a href="#" className="text-[#EC1E24] hover:text-red-600 text-[#282529] font-[400] font-poppins ml-1 font-semibold">
            Read More...
          </a>
        </p>
        <div className="inline-block">
          <p className={`          font-semibold font-poppins text-[12px] text-[#282529] ${nameClass}`}>
            {name}
          </p>
          <div className="w-full border-b border-[#EC1E24]" />
        </div>

        <p className="font-[400] font-poppins text-[12px] text-[#282529]">{role}</p>
      </div>

      {/* Image Container */}
      <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden order-1 sm:order-2">
        <Image
          src={imageUrl}
          alt={name}
          width={96}
          height={96}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default ExpertCard;