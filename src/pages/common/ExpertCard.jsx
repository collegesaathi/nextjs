import Image from 'next/image';

const ExpertCard = ({ name, role, quote, imageUrl, isSenior }) => {
  const nameClass = isSenior ? 'text-xl' : 'text-lg';

  return (
    <div className="flex flex-col sm:flex-row items-start gap-4 p-4 
                    bg-white rounded-lg shadow-md border border-gray-200 
                    hover:shadow-lg transition-shadow duration-300">
      {/* Text Content */}
      <div className="flex-1 order-2 sm:order-1">
        <p className="text-gray-700 text-sm italic mb-2">
          {quote}
          <a href="#" className="text-red-500 hover:text-red-600 ml-1 font-semibold">
            Read More...
          </a>
        </p>
        <p className={`font-bold ${nameClass} text-gray-900`}>{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
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