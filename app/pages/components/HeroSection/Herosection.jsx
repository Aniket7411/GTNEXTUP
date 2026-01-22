import React from "react";
import rect26 from "../../../src/assets/Rectangle 26.svg";
import polar from "../../../src/assets/polar-star.svg";
import Header from "../Header/Header";

const HeroSection = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-[90vh] flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url(${rect26})`, opacity: "0.99" }}
      >
        <Header />
        <div
          className="relative"
          style={{
            lineHeight: "16px",
          }}
        >
          <h1 className="text-7xl font-bold">
            <span
              className=""
              style={{
                fontFamily: "Instrument Serif",
                fontWeight: "300",
                letterSpacing: "0",
              }}
            >
              Innovating
            </span>{" "}
            <span
              style={{
                fontWeight: "600",
                fontFamily: "Poppins sans-serif",
                fontStyle: "normal",
              }}
            >
              for a
            </span>
          </h1>
          <div className="absolute left-0 top-6">
            <div
              className="w-80 h-10"
              style={{
                borderRadius: "50%",
                transform: "rotate(-4deg)",
                backgroundColor: "#FDEF9E",
                opacity: "55%",
              }}
            ></div>
          </div>
          <br />
        </div>
        {/* <span className="">
          Smarter Future
        </span> */}
        <h1
          className="text-9xl font-light text-transparent bg-clip-text bg-gradient-to-b from-[#FFF2A5] to-[#DBB44B]"
          style={{
            marginTop: "-16px",
          }}
        >
          Smarter Future
        </h1>
        <p className="mt-4 text-lg max-w-xl text-center">
          Empowering businesses with cutting-edge technology solutions to
          enhance productivity, efficiency, and growth.
        </p>
        <div className="mt-6 flex gap-4">
          <button
            className="px-6 py-2 text-white rounded-xl"
            style={{
              background:
                "linear-gradient(264.43deg, #000000 1.11%, #282828 42.27%, #000000 95.79%)",
            }}
          >
            Get in Touch
          </button>
          <button
            className="px-6 py-2 rounded-xl text-black hover:opacity-80"
            style={{
              background:
                "linear-gradient(91.86deg, #FDEF9E 1.18%, #F2E9CC 56.13%, #F1D87C 98.09%)",
            }}
          >
            Explore Our Solutions
          </button>
        </div>
      </div>
      <div
        style={{
          background:
            "linear-gradient(91.86deg, #FDEF9E 1.18%, #F2E9CC 56.13%, #F1D87C 98.09%)",
          fontSize: "20px",
          fontWeight: "400",
          lineHeight: "30px",
          padding: "20px 10px",
        }}
        className="flex justify-between"
      >
        <div>Website & Application Development</div>
        <img
          src={polar}
          style={{
            height: "30px",
            width: "30px",
          }}
          alt=""
        />
        <div>E-Commerce & Retail</div>
        <img
          style={{
            height: "30px",
            width: "30px",
          }}
          src={polar}
          alt=""
        />
        <div>AI & Data-Driven Solutions</div>
        <img
          style={{
            height: "30px",
            width: "30px",
          }}
          src={polar}
          alt=""
        />
        <div>Business Management Solutions</div>
      </div>
    </>
  );
};

export default HeroSection;
