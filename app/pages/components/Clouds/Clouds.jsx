// CloudCard.js
import React from 'react';

const CloudCard = ({ svgPath, icon, title, description, style }) => {
  return (
    <div className="relative w-[280px] md:w-[320px]" style={style}>
      <svg
        viewBox="0 0 500 300"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={svgPath}
          fill="#fde68a"
          stroke="#fff"
          strokeWidth="8"
        />
        <foreignObject x="50" y="70" width="400" height="180">
          <div className="flex flex-col items-center text-center p-4">
            <div className="text-3xl mb-2">{icon}</div>
            <h3 className="font-bold text-base mb-1">{title}</h3>
            <p className="text-sm text-gray-700">{description}</p>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default CloudCard;
