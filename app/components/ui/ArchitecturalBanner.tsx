"use client";
import React, { useState } from "react";

const ArchitecturalBanner = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white">
      <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        {/* <!-- Blueprint Background --> */}
        <rect x="0" y="0" width="400" height="400" fill="#f0f8ff" />

        {/* <!-- Grid Lines --> */}
        <g stroke="#cce" strokeWidth="0.5">
          <g id="vertical-lines">
            <path d="M40 40 V360" />
            <path d="M80 40 V360" />
            <path d="M120 40 V360" />
            <path d="M160 40 V360" />
            <path d="M200 40 V360" />
            <path d="M240 40 V360" />
            <path d="M280 40 V360" />
            <path d="M320 40 V360" />
            <path d="M360 40 V360" />
          </g>
          <g id="horizontal-lines">
            <path d="M40 40 H360" />
            <path d="M40 80 H360" />
            <path d="M40 120 H360" />
            <path d="M40 160 H360" />
            <path d="M40 200 H360" />
            <path d="M40 240 H360" />
            <path d="M40 280 H360" />
            <path d="M40 320 H360" />
            <path d="M40 360 H360" />
          </g>
        </g>

        {/* <!-- Floor Plan --> */}
        <g stroke="#2c3e50" strokeWidth="2" fill="none">
          {/* <!-- Outer Walls --> */}
          <rect x="80" y="80" width="240" height="240" />

          {/* <!-- Interior Walls --> */}
          <path d="M200 80 V320" />
          <path d="M80 200 H320" />

          {/* <!-- Doors --> */}
          <path d="M190 200 A 10 10 0 0 1 210 200" stroke="#3498db" />
          <path d="M200 310 A 10 10 0 0 0 200 330" stroke="#3498db" />

          {/* <!-- Windows --> */}
          <g stroke="#3498db">
            <path d="M120 80 V100 M140 80 V100" />
            <path d="M260 80 V100 M280 80 V100" />
            <path d="M80 120 H100 M80 140 H100" />
            <path d="M300 120 H320 M300 140 H320" />
          </g>
        </g>

        {/* <!-- Dimensions --> */}
        <g fontFamily="Arial" fontSize="10" fill="#2c3e50">
          <text x="200" y="50" textAnchor="middle">
            24.0 m
          </text>
          <text
            x="50"
            y="200"
            textAnchor="middle"
            transform="rotate(-90 50 200)"
          >
            24.0 m
          </text>
        </g>

        {/* <!-- Title Block --> */}
        <g transform="translate(280, 330)">
          <rect
            x="0"
            y="0"
            width="70"
            height="40"
            fill="none"
            stroke="#2c3e50"
          />
          <text
            x="35"
            y="15"
            textAnchor="middle"
            fontFamily="Arial"
            fontSize="8"
          >
            Engineer Mantra
          </text>
          <text
            x="35"
            y="25"
            textAnchor="middle"
            fontFamily="Arial"
            fontSize="6"
          >
            Floor Plan
          </text>
          <text
            x="35"
            y="35"
            textAnchor="middle"
            fontFamily="Arial"
            fontSize="6"
          >
            Scale 1:100
          </text>
        </g>
      </svg>
    </div>
  );
};

export default ArchitecturalBanner;

// {/* <svg viewBox="0 0 800 300" className="h-auto w-full">
// <defs>
//   <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
//     <stop
//       offset="0%"
//       style={{ stopColor: "#87CEEB", stopOpacity: 1 }}
//     />
//     <stop
//       offset="100%"
//       style={{ stopColor: "#e6f3ff", stopOpacity: 1 }}
//     />
//   </linearGradient>
// </defs>

// {/* Background */}

// <rect x="0" y="0" width="800" height="300" fill="url(#skyGradient)" />
// <rect x="0" y="250" width="800" height="50" fill="#f0f0f0" />

// {/* Blueprint Section */}
// <g
//   transform="translate(50, 50)"
//   //   opacity={hoveredSection && hoveredSection !== "blueprint" ? 0.6 : 1}
//   //   onMouseEnter={() => handleMouseEnter("blueprint")}
//   //   onMouseLeave={handleMouseLeave}
//   className="transition-opacity duration-300"
// >
//   <g stroke="#b8b8e3" strokeWidth="0.5">
//     {[0, 30, 60, 90, 120].map((x, i) => (
//       <path key={`v-${i}`} d={`M${x} 0 V150`} />
//     ))}
//     {[0, 30, 60, 90, 120, 150].map((y, i) => (
//       <path key={`h-${i}`} d={`M0 ${y} H120`} />
//     ))}
//   </g>
//   <rect
//     x="10"
//     y="10"
//     width="100"
//     height="130"
//     fill="none"
//     stroke="#2c3e50"
//     strokeWidth="2"
//   />
//   <path d="M60 10 V140" stroke="#2c3e50" strokeWidth="2" fill="none" />
//   <path d="M10 75 H110" stroke="#2c3e50" strokeWidth="2" fill="none" />
// </g>

// {/* Modern Building */}
// <g
//   transform="translate(250, 50)"
//   //   opacity={hoveredSection && hoveredSection !== "building" ? 0.6 : 1}
//   //   onMouseEnter={() => handleMouseEnter("building")}
//   //   onMouseLeave={handleMouseLeave}
//   className="transition-opacity duration-300"
// >
//   <rect
//     x="0"
//     y="0"
//     width="300"
//     height="200"
//     fill="#fff"
//     stroke="#333"
//     strokeWidth="2"
//   />
//   <g fill="#a8d1ff" stroke="#666">
//     {[0, 1, 2].map((row) =>
//       [0, 1, 2].map((col) => (
//         <rect
//           key={`window-${row}-${col}`}
//           x={20 + col * 100}
//           y={20 + row * 60}
//           width="60"
//           height="40"
//         />
//       )),
//     )}
//   </g>
//   <path
//     d="M-20 0 L150 -30 L320 0"
//     fill="none"
//     stroke="#333"
//     strokeWidth="3"
//   />
// </g>

// {/* Interior Design Section */}
// <g
//   transform="translate(600, 50)"
//   //   opacity={hoveredSection && hoveredSection !== "interior" ? 0.6 : 1}
//   //   onMouseEnter={() => handleMouseEnter("interior")}
//   //   onMouseLeave={handleMouseLeave}
//   className="transition-opacity duration-300"
// >
//   <rect
//     x="0"
//     y="0"
//     width="150"
//     height="200"
//     fill="#f8f8f8"
//     stroke="#333"
//     strokeWidth="2"
//   />
//   <rect
//     x="20"
//     y="30"
//     width="50"
//     height="30"
//     fill="#d4a373"
//     stroke="#333"
//   />
//   <rect
//     x="90"
//     y="30"
//     width="40"
//     height="40"
//     fill="#d4a373"
//     stroke="#333"
//   />
//   <path
//     d="M30 105 Q75 150 120 105"
//     fill="none"
//     stroke="#333"
//     strokeWidth="2"
//   />
//   <rect
//     x="20"
//     y="150"
//     width="110"
//     height="20"
//     fill="#d4a373"
//     stroke="#333"
//   />
// </g>

// {/* Company Name */}
// <g transform="translate(400, 280)">
//   <text
//     textAnchor="middle"
//     fontFamily="Arial"
//     fontSize="24"
//     fill="#333"
//     fontWeight="bold"
//   >
//     Engineer Mantra
//   </text>
// </g>
// </svg> */}
