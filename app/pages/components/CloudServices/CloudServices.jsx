// CloudCard.jsx
import React from "react";

const CloudCard = ({ svgSrc, icon, title, description, className }) => {
  return (
    <div
  className={`w-full sm:w-[90%] md:w-1/2 lg:w-1/3 px-2 py-4 relative ${className}`}
>
  <div className="relative w-full aspect-[5/3] mx-auto">
    {/* Background Image */}
    <img
      src={svgSrc}
      alt="cloud shape"
      className="w-full h-full object-contain relative z-0"
    />

    {/* Content Overlay */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2 z-10">
      <img src={icon} className="hidden xl:block mb-2 -mt-4" alt="" />
      <h3 className="font-bold text-[12px] lg:text-base mb-1">{title}</h3>

      {Array.isArray(description) ? (
        description.map((line, i) => (
          <p key={i} className="text-[10px] lg:text-sm text-gray-700">
            {line}
          </p>
        ))
      ) : (
        <p className="text-[10px] lg:text-sm text-gray-700 mb-4">{description}</p>
      )}
    </div>
  </div>
</div>

  );
};

export default CloudCard;
