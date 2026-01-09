import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Cell
} from 'recharts';

const OnlineDemand = () => {
  const data = [
    { year: '2022', index1: 60, index2: 50 },
    { year: '2023', index1: 70, index2: 62 },
    { year: '2024', index1: 82, index2: 75 },
    { year: '2025', index1: 95, index2: 88 },
    { year: '2026', index1: 110, index2: 105 },
  ];

  // Custom Label component for the dot and value on top of bars
  const renderCustomizedLabel = (props) => {
    const { x, y, width, value } = props;
    const radius = 4;

    return (
      <g>
        {/* The White Dot */}
        <circle 
          cx={x + width / 2} 
          cy={y} 
          r={radius} 
          fill="white" 
          stroke="#EC1E24" 
          strokeWidth={2} 
        />
        {/* The Number Value */}
        <text
          x={x + width / 2}
          y={y - 15}
          fill="#666"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-[12px] font-medium"
        >
          {value}
        </text>
      </g>
    );
  };

  return (
    <div className="max-w-[1230px] mx-auto py-12 font-poppins text-[#282529] px-4">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-[22px] md:text-[28px] font-[600] mb-6 leading-tight">
          The Rising Demand for Online MBA Programs by 2026
        </h2>
        
        <div className="mb-10">
          <h3 className="text-[20px] font-[600] mb-3">Why Online MBA Programs are Growing So Fast</h3>
          <p className="text-[#4a4a4a] text-[16px] leading-[26px]">
            By 2026, Online MBA programs are becoming popular on account of flexibility, affordability, and global access. 
            With remote work and digital learning platforms gaining more importance, professionals are increasingly 
            preferring online MBAs for upgrading their skills without quitting their jobs. Online degrees from 
            accredited institutions have been increasingly recognized as equivalent to traditional MBAs by employers, 
            thus tending to drive further acceptance and growth.
          </p>
        </div>
      </div>

      {/* Chart Container */}
      <div className="bg-white border border-gray-100 rounded-[40px] p-6 md:p-12 shadow-sm mb-12 relative">
        {/* Y-Axis Label (Vertical) */}
        <div className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-[#666] text-[14px] font-[500] whitespace-nowrap">
          Growth Index
        </div>

        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 30, right: 10, left: 30, bottom: 0 }}
              barGap={10}
            >
              <CartesianGrid vertical={false} stroke="#f0f0f0" />
              <XAxis 
                dataKey="year" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#666', fontSize: 14, fontWeight: 500 }}
                dy={5}
              />
              <YAxis 
                domain={[0, 200]} 
                ticks={[0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200]}
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#999', fontSize: 12 }}
              />
              <Tooltip cursor={{ fill: '#f8f8f8' }} />
              
              {/* Primary Bar (Darker Red) */}

              <defs>
  <linearGradient id="barGradientRed" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stopColor="#fa0707ff" />
    <stop offset="100%" stopColor="#810606ff" />
  </linearGradient>
</defs>
              <Bar 
                dataKey="index1" 
           fill="url(#barGradientRed)"
                radius={[10, 10, 0, 0]} 
                isAnimationActive={true}
                animationDuration={1800}
                animationEasing="ease-out"
                barSize={55}
              >
                <LabelList dataKey="index1" content={renderCustomizedLabel} />
              </Bar>

              {/* Secondary Bar (Lighter/Regular Red) */}

                       <defs>
  <linearGradient id="barGradientRed2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stopColor="#810606ff" />
    <stop offset="100%" stopColor="#fa0707ff" />
  </linearGradient>
</defs>
              <Bar 
                dataKey="index2" 
           fill="url(#barGradientRed2)"
                radius={[10, 10, 0, 0]} 
                isAnimationActive={true}
                animationBegin={300} // Starts slightly after the first bar for "rising" effect
                animationDuration={1800}
                animationEasing="ease-out"
                barSize={55}
              >
                <LabelList dataKey="index2" content={renderCustomizedLabel} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* X-Axis Label */}
        <div className="text-center mt-8 text-[#666] text-[14px] font-[600]">
          Year
        </div>
      </div>

      {/* Footer Content */}
      <div className="space-y-6">
        <h3 className="text-[20px] font-[600]">Increasing Demand for HR Professionals in 2026</h3>
        <p className="text-[#4a4a4a] text-[16px] leading-[28px]">
          With increased focus by organizations on talent management, employee engagement, and transformation of the 
          workplace, skilled HR professionals are likely to be in demand through 2026. The companies are looking for 
          HR leaders who are conversant with people analytics, diversity and inclusion, performance management, and 
          digital HR tools. An online MBA in Human Resource Management equips professionals with these in-demand 
          skills, which makes them valuable assets in a competitive job market.
        </p>
        <p className="text-[#4a4a4a] text-[16px] leading-[26px]">
            Future Scope of Human Resource Management Careers The future of an HR career is good and has changing 
            roles other than traditional HR functions. In fact, by the year 2026, it is envisioned that HR.
        </p>
      </div>
    </div>
  );
};

export default OnlineDemand;