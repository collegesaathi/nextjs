import { useState } from "react";

export default function StorySection() {
  const [active, setActive] = useState("who");

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          The Story Behind Your <span className="text-red-500">‘Sathi’</span>
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mt-6">
          <div className="bg-white shadow-md rounded-full flex p-1">
            <TabButton label="Who We Are" active={active === "who"} onClick={() => setActive("who")} />
            <TabButton label="Our Mission" active={active === "mission"} onClick={() => setActive("mission")} />
            <TabButton label="Our Vision" active={active === "vision"} onClick={() => setActive("vision")} />
          </div>
        </div>

        {/* Content */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Left Image */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/images/team.jpg"
              alt="Team"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Right Content Box */}
          <div className="bg-white p-8 rounded-2xl shadow-md text-left">
            {active === "who" && (
              <Content
                title="Who We Are"
                text="At Collegesathi, we're not just an education platform – we're your companion in making life-changing decisions. From choosing the right university to discovering your dream career, our expert team simplifies the journey so you never feel lost or alone."
              />
            )}
            {active === "mission" && (
              <Content
                title="Our Mission"
                text="To empower every student with the knowledge, guidance, and confidence to make smart career decisions and achieve their aspirations."
              />
            )}
            {active === "vision" && (
              <Content
                title="Our Vision"
                text="To become India’s most trusted career guidance partner by simplifying education choices for every learner."
              />
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

function TabButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full text-sm font-medium transition-all
        ${active ? "bg-red-500 text-white shadow" : "text-gray-600 hover:text-red-500"}
      `}
    >
      {label}
    </button>
  );
}

function Content({ title, text }) {
  return (
    <>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{text}</p>
    </>
  );
}
