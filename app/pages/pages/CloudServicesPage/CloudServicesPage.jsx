'use client';

import React from "react";
// import CloudCard from "./CloudCard";
import { FaCloud, FaLock, FaTools, FaServer, FaSync, FaChartLine } from "react-icons/fa";

import CloudCard from "../../components/CloudServices/CloudServices";
import { motion } from "framer-motion";
import TestimonialCarousel from "../HomePage/Feedback/Feedback";
import { useRouter } from "next/navigation";
import CloudFAQ from "./cloudfaq";
import CloudCarausel from "../cloudcarausal";
import IndustryCards from "./cloudcards";
import CloudMigrationServices from "./outcloudmigration";
import CloudChallenges from "./cloudchallenges";
import Beancomponent from "../../components/beenComponent";
import MarqueeComp from "../../components/Marq/Marq";
import { useFormContext } from "../../components/formcontext";


const features = [
  {
    title: 'Platform Freedom, Your Choice',
    desc: 'Whether it is Microsoft Azure, AWS,  or Google Cloud Platform (GCP), we are platform-agnostic, which means you choose the cloud & we make it work seamlessly for your business.',
    icon: "/assets/cl01.svg",
  },
  {
    title: 'Built for Growth, Not Bottlenecks',
    desc: 'We offer scalable cloud architecture that adapts as your business expands. So, just say goodbye to performance slowdowns and hello to uninterrupted and fast service.',
    icon: "/assets/cl (1).svg",
  },
  {
    title: 'Certified Experts, Enterprise Ready',
    desc: 'Our cloud experts are certified engineers who have practical experience in providing enterprise cloud solutions. Therefore, they know what works, and they make it work for you.',
    icon: "/assets/cl (4).svg",
  },
  {
    title: '24 ×7 Real-Time Support & Monitoring',
    desc: 'With 24 ×7 monitoring and cloud infrastructure management, we proactively address issues before they affect your business — day or night.',
    icon: "/assets/cl (3).svg",
  },
  {
    title: 'Security Is in Our DNA',
    desc: 'From data encryption and firewall protections to compliance with GDPR and HIPAA, our environments are secure by design, not by afterthought.',
    icon: "/assets/cl (2).svg",
  },
];

const cloudImpact = [

  {
    desc: "Consulting & Discovery",
    bg: "/assets/impact01.svg",
  },
  {
    desc: "Architecture & Planning",
    bg: "/assets/impact02.svg",
  },
  {
    desc: "Migration & Deployment",
    bg: "/assets/impact03.svg",
  },
  {
    desc: "Monitoring & Optimization",
    bg: "/assets/impact04.svg",
  },
  {
    desc: "Support & scaling",
    bg: "/assets/impact05.svg",
  },
]

const cloudCards = [
  {
    svgSrc: "/assets/cloud (1).svg",
    icon: "/assets/cloudCons.svg",
    title: "Cloud Consulting & Strategy",
    description: "We assist you in selecting the appropriate cloud platform, such as AWS, Azure, or Google Cloud, depending on your requirements. GetRaise, as a trusted cloud consulting company, will make sure your architecture is aligned with your business objectives and that you have a future-proof architecture.",
    className: "lg:mt-5 lg:ml-5 lg:z-[5]",
  },
  {
    svgSrc: "/assets/cloud (2).svg",
    icon: "/assets/cloudMigration.svg",
    title: "Cloud Migration",
    description: "We make your cloud journey effortless. Our cloud migration services are constructed to reduce downtime and ensure smooth transitions, moving your apps, data, and systems with maximum efficiency. All planning and execution is our affair so your team remains focused and we do all the heavy lifting.",
    className: "lg:-mt-16 lg:-ml-10 lg:z-[6]",
  },
  {
    svgSrc: "/assets/cloud (3).svg",
    icon: "/assets/devOpsAuto.svg",
    title: "DevOps & Automation",
    description: "We help accelerate your development lifecycle by automating CI/CD pipelines using Kubernetes, Docker, and Terraform. GetRaise enables high availability and rapid scaling—true hallmarks of enterprise cloud services.",
    className: "lg:mt-[75px] lg:-ml-[70px] lg:z-[8]",
  },
  {
    svgSrc: "/assets/cloud (4).svg",
    icon: "/assets/cloudNativeApp.svg",
    title: "Cloud-Native App Development",
    description: "Build resilient, microservices-based apps with our cloud computing services. Whether you’re launching a startup or scaling your SaaS platform, our scalable cloud solutions can scale without limits and you get everything you need out of the box.",
    className: "lg:-mt-[90px] lg:-ml-[50px] lg:z-[5]",
  },
  {
    svgSrc: "/assets/cloud (5).svg",
    icon: "/assets/cloudSec.svg",
    title: "Cloud Security & Compliance",
    description: "Protect your infrastructure through top-tier cloud infrastructure management. We apply firewalls, IAM policies, and encryption, and ensure compliance with global standards, such as GDPR and HIPAA, as security is never optional.",
    className: "lg:-mt-[280px] lg:-ml-[140px] lg:z-[7]",
  },
  {
    svgSrc: "/assets/cloud (6).svg",
    icon: "/assets/managCloudServices.svg",
    title: "Managed Cloud Services",
    description: "As the best cloud solutions provider in India, GetRaise aims to check, maintain, and optimize your cloud ecosystem to ensure that your team can engage in what truly matters: growth, innovation, and customer experience.",
    className: "lg:-mt-[30px] lg:-ml-[170px] lg:z-[8]",
  },
];

const ServicesSection = () => {
  const { openForm } = useFormContext();

  const router = useRouter();

  return (
    <div className='header-spacing  text-[#000]'>
      <div className=' overflow-hidden '>
        <div className=" relative w-full h-[calc(100vh-65px)] bg-no-repeat bg-cover bg-center text-center flex flex-col items-center justify-center overflow-hidden px-4 md:px-10">

          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          >
            <source src="/assets/cloudsVideo.mp4" type="video/mp4" />
          </video>

          {/* Gradient Overlay - ensures bottom stays white */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/0 via-white/40 to-white z-0" />

          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-black text-[2.5rem] md:text-[3.5rem] lg:text-[5rem] leading-tight font-bold m-0">
              Elevate Your Business with
            </h1>
            <h1 className=" text-[2.3rem] text-[#E2B10F] md:text-[3rem] lg:text-[5rem] leading-tight font-bold m-0">Scalable, Secure
              Cloud Solutions</h1>
            <p className="text-[16px] md:text-[20px] font-medium w-[80%] mx-auto mt-2">
              At Getraise Technologies, we empower businesses to evolve with scalable,
              cost-effective, and future-ready cloud solutions — designed to perform,
              adapt, and grow with you.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-8 mb-8 md:mt-6 px-4 md:px-8 z-30">
            <button
              className="bg-transparent px-2 py-1 lg:px-4 lg:py-2 rounded-xl text-black cursor-pointer hover:bg-[#E2B10F] hover:text-white font-medium border border-[#E2B10F]"
              onClick={() => window.location.href = '/contact-getraise-technologies'}
            >
              Talk to a Cloud Expert
            </button>

            <button
              className="bg-[#E2B10F] px-2 py-1 lg:px-4 lg:py-2 rounded-xl text-black hover:bg-transparent hover:text-black border border-[#E2B10F] cursor-pointer font-medium"
              onClick={() => window.location.href = '/contact-getraise-technologies'}
            >
              Book a Free Consultation
            </button>
          </div>
        </div>


      </div>


      <div className="px-6  bg-[#fff] lg:px-12 flex flex-col md:flex-row items-center md:gap-12 m-auto min-h-[50vh]" style={{
        // marginTop:'-25rem',

      }}>
        {/* Right - Text Content */}
        <div className="w-full  md:w-1/2 z-20">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
            <h2 className="text-[1rem]  ml-2 mb-0 augmenHeading">
              What We Offer
            </h2>
          </div>
          <div className="flex items-center gap-x-2 mb-2">
            <h2 className="text-4xl font-bold mb-0 augmenHeading">End-to-End Cloud Solutions Tailored to Your Business</h2>
          </div>
          <p className="text-[#000] mt-3 mb-2 leading-relaxed"
            style={{
              fontSize: '15px',
            }}
          >
            Getraise Tech is not just another cloud services provider - we’re your growth partners in the digital sky. With more than 150+ cloud projects delivered, our team of certified experts designs custom cloud solutions that grow with your aspirations— from startups to enterprise giants. Whether it's infrastructure setup, cloud migration,  or seamless integration, we ensure that you are always future-ready.
          </p>

        </div>

        {/* Left - Image Carousel */}
        <div className="relative w-full md:w-1/2 z-20">
          <img
            src="/assets/cloudMan.svg"
            alt="About Us"
            className="w-full rounded-lg object-cover"
          />
        </div>
      </div>



      <section className="bg-[#fff]">

        <div className="flex  items-center space-x-2 mb-5 px-12">
          <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
          <h2 className="text-[1rem] font-semibold ml-2 mb-0 augmenHeading">
            Our Transformative Cloud Services
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center px-3 pb-10 relative">
          {cloudCards.map((cloud, index) => (
            <CloudCard key={index} {...cloud} />
          ))}
        </div>
        
        {/* Hidden H3 headings for SEO - Cloud Services */}
        <div className="sr-only">
          <h3>Cloud Consulting & Strategy</h3>
          <h3>Cloud Migration</h3>
          <h3>DevOps & Automation</h3>
          <h3>Cloud-Native App Development</h3>
          <h3>Cloud Security & Compliance</h3>
          <h3>Managed Cloud Services</h3>
        </div>
        <CloudChallenges />


        <div className="relative w-full bg-white py-12 px-4 md:px-12">
          <div className="flex items-center space-x-2 mb-5">
            <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
            <h2 className="text-[1.2rem]  ml-2 mb-0 augmenHeading">
              Why Choose Us
            </h2>
          </div>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-start">Why Choose Getraise Technologies?</h2>



          <div className="w-full rounded-xl overflow-hidden mb-6">
            <img
              src="/assets/career1.png" // replace with your own image
              alt="Team working"
              className="w-full h-auto object-cover bg-no-repeat"
            />
          </div>

          <div className="-mt-16">
            <div className="flex flex-wrap justify-center gap-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 w-full sm:w-[48%] lg:w-[25%] min-h-[220px] flex flex-col items-start justify-start text-left transition-all"
                  style={{
                    border: '1.5px solid #CECECE'
                  }}
                >
                  <div className="bg-yellow-200 p-3 rounded-full mb-4">
                    <img src={feature.icon} alt="" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>


        </div>

        <CloudCarausel />


        <IndustryCards />

        <CloudMigrationServices />
        <div className="px-4 md:px-12 my-12">
          <div className="flex items-center space-x-2  mb-5">
            <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
            <h2 className="text-[1rem] font-semibold ml-2 mb-0 augmenHeading">
              Our End-to-End Cloud Delivery Framework
            </h2>
          </div>
          
          {/* Hidden H3 headings for SEO - Framework Steps */}
          <div className="sr-only">
            <h3>Consulting & Discovery</h3>
            <h3>Architecture & Planning</h3>
            <h3>Migration & Deployment</h3>
            <h3>Monitoring & Optimization</h3>
            <h3>Support & Scaling</h3>
          </div>
          <div className="flex flex-wrap justify-between gap-2">
            {cloudImpact.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 w-full sm:w-[48%] lg:w-[17.8%] min-h-[220px] flex flex-col items-center justify-start text-left transition-all"
                style={{
                  border: '1.5px solid #CECECE'
                }}
              >

                <img src={feature.bg} alt="" />


                <h3 className="font-medium text-[20px] text-center text-black" style={{
                  fontFamily: 'Poppins'
                }}>{feature.desc}</h3>
              </div>
            ))}
          </div>

        </div>

        {/* Trusted By Many Companies Section */}
        <div className="px-4 md:px-12 my-12">
          <div className="flex items-center space-x-2 mb-5">
            <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
            <h2 className="text-[1.2rem] font-semibold ml-2 mb-0 augmenHeading">
              Trusted By Many Companies
            </h2>
          </div>
        </div>
        
        <MarqueeComp />

        <CloudFAQ />
      </section>











      {/* What Our Clients Say About Us Section */}
      <div className="px-4 md:px-12 my-12">
        <div className="flex items-center space-x-2 mb-5">
          <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
          <h2 className="text-[1.2rem] font-semibold ml-2 mb-0 augmenHeading">
            What Our Clients Say About Us
          </h2>
        </div>
      </div>
      
      <TestimonialCarousel />
    </div>

  );
};

export default ServicesSection;
