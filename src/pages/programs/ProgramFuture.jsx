import React from 'react';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList
} from 'recharts';

const ProgramFuture = () => {
  // Data updated to have 'barValue' (growing) and 'lineValue' (zigzagging)
  const data = [
    { year: '2025', barValue: 40, lineValue: 110 },
    { year: '2026', barValue: 60, lineValue: 160 },
    { year: '2027', barValue: 85, lineValue: 120 },
    { year: '2028', barValue: 105, lineValue: 190 },
    { year: '2029', barValue: 125, lineValue: 170 },
    { year: '2030', barValue: 145, lineValue: 220 },
    { year: '2031', barValue: 170, lineValue: 220 },
    { year: '2032', barValue: 200, lineValue: 280 },
    { year: '2033', barValue: 230, lineValue: 280 },
    { year: '2034', barValue: 260, lineValue: 330 },
    { year: '2035', barValue: 300, lineValue: 390 },
  ];

  return (
    <div className="max-w-[1230px] mx-auto py-10 px-4 font-poppins">


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

      <div className="bg-white border border-gray-100 rounded-[20px] shadow-sm p-6  relative overflow-hidden">
        
        {/* Vertical Y-Axis Label: "Growth in Index" */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-gray-500 text-[14px] font-medium tracking-tight whitespace-nowrap">
          Growth in Index
        </div>

        <div className="h-[300px] w-full mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data} margin={{ top: 20, right: 30, left: 40, bottom: 20 }}>
              
              {/* HORIZONTAL LINES: vertical={false} ensures only horizontal lines show */}
              <CartesianGrid 
                vertical={false} 
                stroke="#f0f0f0" 
                strokeWidth={1}
              />
              
              <XAxis 
                dataKey="year" 
                hide={true} // Matches image where only the bottom footer text shows the years
              />
              
              <YAxis 
                hide={true} 
                domain={[0, 450]} 
                 tickCount={20} 
              />
              
              <Tooltip cursor={{ fill: 'transparent' }} />

              {/* THE RED BARS */}
              <Bar 
                dataKey="barValue" 
                fill="#cc1d24" 
                barSize={50} 
                radius={[12, 12, 0, 0]} 
              >
                {/* Number Labels sitting above bars */}
                <LabelList 
                  dataKey="barValue" 
                  position="top" 
                  offset={10} 
                  style={{ fill: '#999', fontSize: '11px', fontWeight: '500' }} 
                />
              </Bar>

              {/* THE "Z" ZIG-ZAG LINE */}
              <Line
                type="linear"
                dataKey="lineValue"
                stroke="#666"
                strokeWidth={0.8}
                // Red dots at the peaks and valleys
                dot={{ 
                  r: 3, 
                  fill: '#cc1d24', 
                  stroke: '#cc1d24', 
                  strokeWidth: 1 
                }}
                activeDot={{ r: 6 }}
                // This creates the sharp Z-look rather than a smooth curve
                connectNulls={true}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* X-Axis Footer Label */}
        <div className="text-center mt-6 text-gray-400 text-[15px] font-medium">
          Year: 2025–2035
        </div>
      </div>

            <div className="space-y-6 mt-6">
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

export default ProgramFuture;