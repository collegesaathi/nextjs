import React from 'react';
import { useState } from 'react';
import { 
  Laptop, 
  TrendingUp, 
  Banknote, 
  Globe, 
  Award, 
  Briefcase,
  Users,
  ScrollText,
  Clock,
  Rocket
} from 'lucide-react';

const WhyPursue = () => {
const [active, setActive] = useState(null);

  const summaryCards = [
    { 
      id: 1, 
      label: "Flexibility with No Career Break", 
      image: "/images/programs/pursue1.png", 

    },
    { 
      id: 2, 
      label: "Career Growth & New Opportunities", 
     image: "/images/programs/pursue2.png", 
  
    },
    { 
      id: 3, 
      label: "Cost-Effective Learning", 
   image: "/images/programs/pursue3.png", 

    },
    { 
      id: 4, 
      label: "Global Networking", 
    image: "/images/programs/pursue1.png", 

    },
    { 
      id: 5, 
      label: "Recognized Degrees from Top Institutions", 
      image: "/images/programs/pursue2.png", 
     
    },
  ];

  const details = [
    {
      title: "Flexibility with No Career Break",
      desc: "An Online MBA will provide you with full flexibility and you don't have to quit your job or take any type of career break. It will allow you to create your own schedule and balance your time and study very effectively.",
      icon: <Clock size={20} />
    },
    {
      title: "Career Growth & New Opportunities",
      desc: "An Online MBA will give you a chance to learn and directly apply your learning in your work. It will enhance your practical knowledge and grab higher or senior level jobs more easily.",
      icon: <TrendingUp size={20} />
    },
    {
      title: "Cost-Effective Learning",
      desc: "A plus in choosing an Online MBA is its affordable costs as it cuts the accommodation, travelling and campus expenses. It means you can enjoy your learning with low cost and high returning benefits.",
      icon: <Banknote size={20} />
    },
    {
      title: "Global Networking",
      desc: "An Online MBA provides you with a full opportunity to interact with peers, faculty and industry experts through virtual modes. You can interact in webinars, classes and discussion forums.",
      icon: <Users size={20} />
    },
    {
      title: "Recognized Degrees from Top Institutions",
      desc: "As the demand for skilled professionals and Online MBA is increasing, many top universities have been introducing Online MBA with proper flexibility.",
      icon: <ScrollText size={20} />
    },
    {
      title: "Implement course knowledge directly to work",
      desc: "With Online MBA, you will get the opportunity of applying the skills learned in the course directly to the work. With this, you will become more efficient at work with practical expertise of your chosen domain.",
      icon: <Briefcase size={20} />
    }
  ];

  return (
    <div className="max-w-[1230px] mx-auto  py-12 font-poppins text-[#282529]">
      {/* Header Section */}
      <div className="mb-10">
        <h2 className="text-[20px] md:text-[28px] font-[600] mb-4 leading-[28px]">Why Should I Pursue Online MBA?</h2>
        <p className="text-[#282529]  text-[16px] leading-[26px] tracking-[0]">
          As the world is continuously growing, it is now becoming very important to upgrade your skills and expertise according to the industry trends and requirements to match the fast-paced business world. For career advancement, you need to enhance your skills and become capable of handling different complicated situations. Whether you are a working professional or a busy learner, an Online MBA is a perfect fit to cover theoretical and practical insights.
        </p>
      </div>

      {/* Overview Card Container */}
      <div className="bg-[#FFF4E6] rounded-[30px] p-4 md:p-6 mb-10">
        <h3 className="text-[20px] md:text-[28px] font-[400] text-center mb-4 md:mb-10">Why Choose Online MBA?</h3>
        
        <div className="grid grid-cols-2 md:flex flex-wrap justify-center gap-2 md:gap-6">
          {summaryCards.map((card) => (
            <div 
              key={card.id}
              onClick={() => setActive(card.id)}
              className={`w-full sm:w-[280px] h-[130px] bg-white rounded-[14px] md:rounded-[25px] flex flex-col items-center justify-center  lg:p-8 text-center transition-all shadow-lg
               ${active === card.id ? 'border-1 border-[#D9181E]' : ''}`}
            >
              <div className="mb-2 text-2xl  ">      <img src={card.image} /></div>
              <p className="text-[14px] md:text-[16px] font-[400] leading-[20px] px-2 ">{card.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Grid Section */}
      <div className="mb-6">
        <p className="text-[16px] mb-10 leading-[28px] tracking-[0]">
          The following are the reason for pursuing an <span className="text-[#EC1E24] font-[600]">online MBA</span> is a smart investment for:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {details.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="space-y-4 items-center gap-3">
                <div className="text-[#EC1E24]">
           {item.icon}
                </div>
                <h4 className="font-[600] text-[16px] leading-[22px]">{item.title}</h4>
              </div>
              <p className="text-[#282529] text-[16px] leading-[22px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyPursue;