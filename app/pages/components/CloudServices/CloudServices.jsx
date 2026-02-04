// CloudCard.jsx
import React from "react";

const CloudCard = ({ svgSrc, icon, title, description, className }) => {
  const renderDescription = (value, key) => {
    if (typeof value !== "string") return null;

    const hasLinkHtml = /<a\s/i.test(value);
    if (!hasLinkHtml) {
      return (
        <p key={key} className="text-[10px] lg:text-sm text-gray-700 mb-4">
          {value}
        </p>
      );
    }

    return (
      <p
        key={key}
        className="text-[10px] lg:text-sm text-gray-700 mb-4"
        dangerouslySetInnerHTML={{ __html: value }}
      />
    );
  };

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
          /<a\s/i.test(line) ? (
            <p
              key={i}
              className="text-[10px] lg:text-sm text-gray-700"
              dangerouslySetInnerHTML={{ __html: line }}
            />
          ) : (
            <p key={i} className="text-[10px] lg:text-sm text-gray-700">
              {line}
            </p>
          )
        ))
      ) : (
        renderDescription(description, "single")
      )}
    </div>
  </div>
</div>

  );
};

export default CloudCard;
