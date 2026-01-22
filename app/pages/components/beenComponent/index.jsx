'use client';

import { usePathname, useRouter } from "next/navigation";
// import { useFormContext } from '../../components/formcontext'
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

const Beancomponent = () => {
  // const { openForm } = useFormContext();
  const pathname = usePathname();
  const router = useRouter();

  const pathTextMap = {
    "/digital-marketing-services-india": "Book Free Marketing Consultation",
    "/website-app-development-services": "Book Free Web App Consultation",
    "/ui-ux-design-services-india": "Book Free Design Consultation",
    "/cloud-computing-services-india": "Book Free Cloud Expert Consultation",
    "/salesforce-development-services-india":
      "Book Free Salesforce Expert Consultation",
    "/custom-software-development-company":
      "Book Free Demo Software Consultation",
  };

  const askMessage = {
    "/digital-marketing-services-india":
      "You can Book a Free Marketing Consultation and our Marketing experts will guide you and will clear all your doubts.",
    "/website-app-development-services":
      "You can Book a Free Web App Consultation and our experts will clear all your doubts.",
    "/ui-ux-design-services-india":
      "You can Book a Free Design Consultation and our design experts will guide you and will clear all your doubts.",
    "/cloud-computing-services-india":
      "You can Book a Free Cloud Expert Consultation and our cloud specialists will guide you and clear all doubts.",
    "/salesforce-development-services-india":
      "You can Book a Free Salesforce Expert Consultation and our certified Salesforce experts will guide you.",
    "/custom-software-development-company":
      "You can Book a Free Software Consultation and our experts will clear all your doubts.",
    "/products":
      "You can Book a Free Consultation and our experts will guide you and will clear all your doubts.",
  };

  // Normalize path (remove trailing slash if any)
  const currentPath = pathname.replace(/\/$/, "");

  // Get display text with fallback
  let displayText = pathTextMap[currentPath]
    ? pathTextMap[currentPath]
    : "Book Free Consultation";
  
  // Ensure text starts with "Book" not "ok" - fix any potential corruption
  if (displayText.startsWith("ok ")) {
    displayText = "Book" + displayText.substring(2);
  }
  if (displayText.startsWith("ook ")) {
    displayText = "Book" + displayText.substring(3);
  }

  const displayAskMessage = askMessage[currentPath]
    ? askMessage[currentPath]
    : "You can Book a Free Consultation and our experts will clear all your doubts.";

  return (
    <div className="flex justify-between flex-wrap p-8 px-5 items-center bg-[#000]">
      <div className="text-white h-auto mt-3 flex flex-col gap-1">
        <h1 className="text-[#FEEE99] text-2xl md:text-3xl lg:text-5xl">
          Have questions in mind?
        </h1>

        <h1 className="text-lg">Don't Worry</h1>

        <p className="text-base max-w-[600px]">{displayAskMessage}</p>

        {/* Wrapper for circular text + video */}
        <div className="relative flex items-center justify-center w-[200px] h-[200px] mt-1">
          <svg viewBox="0 0 200 200" className="absolute w-full h-full">
            <defs>
              <path
                id="circlePath"
                d="M 100, 100
                   m -75, 0
                   a 75,75 0 1,1 150,0
                   a 75,75 0 1,1 -150,0"
              />
            </defs>
            <text fill="#FEEE99" fontSize="16" fontWeight="500" letterSpacing="0.3">
              <textPath
                href="#circlePath"
                startOffset="20%"
                textAnchor="middle"
              >
                {displayText ? displayText : "Book Free Consultation"}
              </textPath>
            </text>
          </svg>

          <div className="relative w-[120px] h-[120px] cursor-pointer">
            {/* Video */}
            <video
              onClick={() =>
                router.push("/contact-getraise-technologies")
              }
              src="/assets/beanvideo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full rounded-full object-cover"
            />

            {/* Arrow Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Link href="/contact-getraise-technologies">              <MdArrowOutward className="bg-[#FDEF9E] text-black rounded-full w-10 h-10 p-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-[#fff] mb-2 md:mb-0">
        <h3 className="mb-1 text-[#FDEF9E] text-xl md:text-2xl lg:text-4xl">
          Join Our Team
        </h3>
        <p className="potential mb-5 text-center">Realize your potential</p>
        <button
          className="button-smooth-border antialiased border border-[#FDEF9E] cursor-pointer align-center w-[220px] py-4 rounded-full hover:bg-[#FDEF9E] hover:border-[#FDEF9E] z-10 transition-colors duration-500 ease-in-out"
          onClick={() => {
            router.push("/career");
          }}
        >
          Explore Careers
        </button>
      </div>
    </div>
  );
};

export default Beancomponent;
