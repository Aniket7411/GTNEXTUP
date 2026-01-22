import React from "react";
import group17 from "../../../src/assets/Group 17.svg";
import rect30 from "../../../src/assets/Rectangle 30.svg";
import star from "../../../src/assets/star.svg";
// import lmas from "../../../src/assets/lmas.svg";
import lmas2 from "../../../src/assets/lmas2.svg";

const AboutSection = () => {
  return (
    <section className=" my-4 py-2 bg-white text-center px-28 lg:h-[90vh] ">
      <div className="flex justify-between align-center mb-4">
        <div className="flex items-center space-x-2 w-[50%]">
          <hr
            className="hidden lg:block  lg:w-[50%] me-3"
            style={{
              borderTop: "0.5px solid #E5C25B",
            }}
          />
          <span
            className="text-4xl ms-4"
            style={{
              fontFamily: "Instrument Serif",
              fontStyle: "italic",
              fontWeight: "400",
              // height:'100%',
              alignItems: "center",
            }}
          >
            Who We Are
          </span>
        </div>
        <img src={group17} alt="" />
      </div>

      <div className="flex flex-wrap w-full">
        <div className="w-full md:w-1/2 relative">
          <img src={rect30} className="w-[100%]" alt="" />
          <img
            src={star}
            className="absolute top-[-3rem] left-0"
            alt=""
          />
          {/* <img src="" alt="" /> */}
        </div>

        <div className="w-full md:w-1/2 px-4 flex flex-col justify-around ">
          <p className="mb-8 text-start" style={{
            fontSize: '20px',
            fontWeight: 400
          }}>
            Getraise Technologies is a leading software development company
            dedicated to creating intelligent, scalable digital solutions. We
            specialize in AI-driven software, enterprise applications,
            e-commerce platforms, and cloud-based solutions to help businesses
            thrive in the digital era. Our expertise also extends to intuitive
            web and mobile UI/UX design, ensuring seamless user experiences.
          </p>
          <div className="hidden lg:block">

            <div className="flex flex-wrap justify-around">
              {/* <img src={lmas} alt="" /> */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <svg className="absolute" width="200" height="200">
                    <defs>
                      <path
                        id="circlePath"
                        d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                      ></path>
                    </defs>
                    <text fill="#000" fontSize="20" fontWeight="bold">
                      <textPath
                        href="#circlePath"
                        startOffset="25%"
                        textAnchor="middle"
                      >
                        Learn More About Us
                      </textPath>
                    </text>
                  </svg>
                  <div
                    className="w-32 h-32 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#FDEF9E" }}
                  >
                    {/* <ArrowUpRight size={32} strokeWidth={2} /> */}
                  </div>
                </div>
              </div>

              <img src={lmas2} alt="" />
            </div>
          </div>

        </div>
      </div>


    </section>
  );
};

export default AboutSection;
