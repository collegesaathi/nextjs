"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CARDS = [
  { 
    id: 1, name: "KAVHOLM", textColor: "white",   img:"/images/about/card1.png",accent: ["#00d924", "#11EFE3"],
    gradient: "linear-gradient(135deg, #fcfdffff 0%, #f3f6f8ff 50%, #f2f7f5ff 100%)" 
  },
  { 
    id: 2, name: "powdur", textColor: "black", img:"/images/about/card2.png", accent: ["#9966ff", "#ff80ff"],
    gradient: "linear-gradient(135deg, #fcfdffff 0%, #f3f6f8ff 50%, #f2f7f5ff 100%)" 
  },
  { 
    id: 3, name: "ROCKET RIDES", textColor: "white",  img:"/images/about/card3.png",accent: ["#ffd848", "#ff9d00"],
    gradient: "linear-gradient(135deg, #fcfdffff 0%, #f3f6f8ff 50%, #f2f7f5ff 100%)" 
  },
  { 
    id: 4, name: "ABSTRACT", textColor: "white",  img:"/images/about/card2.png", accent: ["#0073e6", "#11EFE3"],
    gradient: "linear-gradient(135deg, #f7f7faff 0%rgba(241, 241, 245, 1)d9 50%, #f6f7f8ff 100%)" 
  },
];

export default function CardStack() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [targetIdx, setTargetIdx] = useState(0);
  const [sourceIdx, setSourceIdx] = useState(0);
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setScreenSize("mobile");
      else if (window.innerWidth < 1024) setScreenSize("tablet");
      else setScreenSize("desktop");
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CARDS.length);
      setTargetIdx(Math.floor(Math.random() * 4));
      setSourceIdx(Math.floor(Math.random() * 3)); 
    }, 2000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(timer);
    };
  }, []);

  // Responsive UI Configuration
  const config = {
    mobile: { cardW: 280, cardH: 180, stepY: 45, iconDist: 0, iconSize: 0 },
    tablet: { cardW: 320, cardH: 200, stepY: 60, iconDist: 0, iconSize: 0 },
    desktop: { cardW: 380, cardH: 230, stepY: 85, iconDist: 320, iconSize: 64 },
  }[screenSize];

  // Icons only for Desktop
  const SIDE_ICONS = [
    { id: 0, x: config.iconDist, y: -config.cardH * 0.6, icon: "/images/about/cardicon1.png" }, 
    { id: 1, x: config.iconDist + 20, y: config.cardH * 0.4, icon: "/images/about/cardicon1.png" },  
    { id: 2, x: -config.iconDist, y: -config.cardH * 0.5,icon: "/images/about/cardicon1.png"},  
    { id: 3, x: -(config.iconDist + 20), y: config.cardH * 0.6, icon: "/images/about/cardicon1.png"},  
  ];

  const stack = [
    CARDS[currentIndex],
    CARDS[(currentIndex + 1) % CARDS.length],
    CARDS[(currentIndex + 2) % CARDS.length],
  ];

  const activeAccent = CARDS[(currentIndex + sourceIdx) % CARDS.length].accent;

  const getSteppedPath = () => {
    if (screenSize !== "desktop") return "";
    const target = SIDE_ICONS[targetIdx];
    const isRight = target.x > 0;
    const startX = isRight ? config.cardW / 2 : -config.cardW / 2; 
    const startY = sourceIdx * -config.stepY; 
    const entryOffset = isRight ? -(config.iconSize / 2 + 10) : (config.iconSize / 2 + 10);
    const endX = target.x + entryOffset;
    const endY = target.y;
    const midX = startX + (isRight ? 30 : -30); 
    return `M ${startX} ${startY} L ${midX} ${startY} L ${midX} ${endY} L ${endX} ${endY}`;
  };

  return (
    <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px] flex items-center justify-center overflow-visible">
      
      {/* --- BACKGROUND DECORATION (Only on Desktop) --- */}
      {screenSize === "desktop" && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg className="overflow-visible w-1 h-1">
            <defs>
              <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={activeAccent[0]} />
                <stop offset="100%" stopColor={activeAccent[1]} />
              </linearGradient>
            </defs>
            <AnimatePresence>
              <motion.path
                key={`line-${currentIndex}`}
                d={getSteppedPath()}
                fill="none"
                stroke="url(#line-grad)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ pathLength: { duration: 1.2, ease: "easeInOut" }, opacity: { duration: 0.3 } }}
              />
            </AnimatePresence>
          </svg>

          {SIDE_ICONS.map((item, idx) => {
            const isActive = targetIdx === idx;
            return (
              <motion.div
                key={item.id}
                animate={{ 
                  scale: isActive ? 1.1 : 1, 
                  opacity: isActive ? 1 : 0.5,
                  x: item.x,
                  y: item.y 
                }}
                style={{ 
                  width: config.iconSize,
                  height: config.iconSize,
                  background: isActive 
                    ? `linear-gradient(white, white)`
                    : "white",
                 border: isActive ? "none" : "1px solid #C9C9C9",
                }}
                className="absolute    flex items-center justify-center text-xl transition-all duration-700 bg-white"
              >
             <img 
    src={item.icon} 
    alt="icon"
    style={{ 
      // Jab isActive false hoga toh filter grayscale(100%) apply ho jayega
      filter: isActive ? "grayscale(0%) " : "grayscale(100%) ",
      transition: "filter 0.7s ease" // Smooth transition ke liye
    }} 
  />
              </motion.div>
            );
          })}   
        </div>
      )}

      {/* --- CENTRAL CARD STACK --- */}
      <div 
        className="relative z-10" 
        style={{ 
            perspective: "1200px",
            width: config.cardW,
            height: config.cardH
        }}
      >
        <AnimatePresence mode="popLayout">
          {stack.map((card, index) => (
            <motion.div
              key={card.id}
              layout
              initial={{ opacity: 0, y: 80 }}
              animate={{
                opacity: 1,
                y: index * -config.stepY, 
                scale: 1,        
                z: 0,            
                rotateX: 0,
              
              }}
              exit={{
                rotateX: -90, 
                y: 50, 
                z: 0, 
                scale: 1, 
                opacity: 0, 
                zIndex: 100,      
                transition: { duration: 1, ease: [0.4, 0, 0.2, 1] }
              }}
              transition={{ type: "spring", stiffness: 100, damping: 22 }}
              style={{
                background: card.gradient,
                color: card.textColor,
                zIndex: 10 - index,
                transformStyle: "preserve-3d",
                transformOrigin: "bottom center",
              }}
              className="absolute inset-0 rounded-2xl  flex flex-col justify-between  overflow-hidden"
            >
     

                <img 
                src={card.img} 
                alt="card" 
                className="w-full h-full object-cover pointer-events-none"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}