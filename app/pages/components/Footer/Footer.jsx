'use client';

import React, { useState } from 'react'
import './Footer.css'
import { motion } from "framer-motion";
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
const linkedIn = '/assets/Frame%205.svg';
const insta = '/assets/Frame%206.svg';
const x = '/assets/Frame%207.svg';
const whatsapp = '/assets/Frame%208.svg';
const fb = '/assets/Frame%209.svg';
const ind = '/assets/ind.svg';
const can = '/assets/can.svg';
const uk = '/assets/uk.svg';
const uae = '/assets/uae.svg';
const il = '/assets/il.svg';
const msme = '/assets/msme.svg';
const mapView = '/assets/mapView.svg';
const brandLogo = '/assets/brandLogo.png';
const planeGif = '/assets/planeGif.gif';
import './fadeIn.css';
import { useInView } from "react-intersection-observer";
import { MdAddCall } from 'react-icons/md';
import { IoIosMail } from "react-icons/io";
import Beancomponent from '../beenComponent';



const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();


  const [hoveredCountry, setHoveredCountry] = useState("");

  const countries = [
    {
      name: "India",
      img: ind,
      address: `
     Jaipur (Headquarter): 
      70/38, Patel Marg, Mansarovar, Jaipur, India. 
    
    Kota:
      86/87-A, Shrinathpuram, Sector- A, Kota, India.
    `,
    },

    {
      name: "United Kingdom",
      img: uk,
      address: "123 Baker Street, London, UK, ZIP: W1U 6RT",
    },
    {
      name: "Ireland",
      img: il,
      address: "4 Curlew Road, Dublin 12, Ireland",
    },
    {
      name: "Canada",
      img: can,
      address: "2224 Speers Road, Oakville, Ontario, Canada",
    },
    {
      name: "UAE",
      img: uae,
      address: "OEM Enterprises LLC, Sharjah, UAE",
    },
  ];

  const fadeVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3, // 300ms stagger
        duration: 0.5,
        ease: "easeOut"
      }
    }),
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  const isAboutPage = pathname === '/about-getraise-technologies' || pathname === '/about';

  // const navigate = useRouter();

  const links = [
    { label: 'Privacy Policy', path: '/privacy_policy' },
    { label: 'Cookie Policy', path: '/cookies_policy' }
  ];


  return (
    <footer className="bg-black text-white pt-2">
      <Beancomponent />
      <div className="mx-auto px-4 flex flex-col justify-between mb-6">
        {
          !isAboutPage &&
          <>

            <hr className='w-[95%]  my-1' style={{
              color: '#ADADAD'
            }} />
          </>
        }
        <img src={msme} className='flex mx-auto' alt="" />
        <div className='m-auto w-[95%] gap-5 md:gap-3 flex flex-col items-center md:flex-row md:justify-between'>
          <div className="text-start">
            <p className="social mb-2">Social</p>
            <p className="followUs mb-2">Follow us for the latest updates</p>

            <div className="flex gap-8 mb-3">
              <img src={linkedIn} onClick={() => window.open("https://www.linkedin.com/company/getraisetechnologies/", "_blank")} alt="" className="cursor-pointer" />
              <img src={insta} alt="" onClick={() => window.open("https://www.instagram.com/getraise_private_limited?igsh=MTIyeXNhYWh6bmwweg==", "_blank")} className="cursor-pointer" />
              {/* <img src={x} alt="" className="cursor-pointer" /> */}
              <img src={whatsapp} alt="" onClick={() => window.open("https://api.whatsapp.com/send?phone=9374455555", "_blank")} className="cursor-pointer" />
              <img src={fb} alt="" onClick={() => window.open("https://m.facebook.com/Getraise-Technologies-109273644798382/", "_blank")} className="cursor-pointer" />
            </div>


            <div className="flex flex-col items-start gap-4 text-sm md:text-base mt-5">
              {/* Email Section */}
              <div className="flex items-center gap-2">
                <IoIosMail className="text-lg text-[#FDEF9E]" />
                <a href="mailto:info@getraisetechnologies.com" className="text-[12px] hover:underline text-[#fff]">
                  info@getraisetechnologies.com
                </a>
              </div>

              {/* Phone Section */}
              <div className="flex items-center gap-2">
                <MdAddCall className="text-lg text-[#FDEF9E]" />
                <a href="tel:9374455555" className="text-[12px] hover:underline text-[#fff]">
                  +91 - 9374455555
                </a>
              </div>
            </div>

          </div>


          <div className="relative  overflow-hidden w-[95%] md:w-[69%] lg:w-[50%]">
            {/* Background GIF */}
            <img src={planeGif} alt="Plane Moving" className="object-contain h-[50vh]" />



            <div
              ref={ref}
              className="absolute  top-0 left-0 w-full h-full flex items-center justify-center"
            >
              <div className="flex  flex-wrap gap-3 h-auto justify-center relative">
                {countries.map((country, i) => (
                  <motion.div
                    key={country.name}
                    className="coutriesStyle flex items-center text-white relative"
                    variants={fadeVariants}
                    initial="hidden"
                    custom={i}
                    animate={inView ? "visible" : "hidden"}
                    onMouseEnter={() => setHoveredCountry(country.name)}
                    onMouseLeave={() => setHoveredCountry("")}
                  >

                    <div className='flex flex-wrap items-center gap-2'>
                      <img
                        src={country.img}
                        alt={country.name}
                        className="cursor-pointer mr-1"
                      />
                      <p className="cursor-pointer">
                        {country.name}
                      </p>

                    </div>

                    {hoveredCountry === country.name && (
                      <div className="absolute -bottom-12 md:-bottom-16 min-h-max text-sm  bg-gray-800 p-3 font-[300] text-white  rounded-md shadow-lg text-left z-10">
                        <span className='mt-2'>
                          {country.address}
                        </span>

                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>



          </div>

        </div>
      </div>

      <hr className='m-auto my-5 mt-10' style={{
        color: '#434343'
      }} />
      {/* <div className="py-8 ">
        <div className="w-[95%] mx-auto px-4 flex flex-wrap justify-between gap-4">
          {['Industry', 'Services', 'Products and Platforms', 'Insights'].map((section, index) => (
            <p key={index} className="min-w-[23%] text-lg font-semibold">{section}</p>
          ))}
        </div>
      </div> */}
      <div className="bg-[#2F2F2F] py-4 text-start flex align-center text-white px-4">
        <div className='w-[95%] m-auto flex items-center  justify-between flex-col lg:flex-row gap-5'>
          <img src={brandLogo} className='h-[30px]' alt="" />
          {/* <div className=''> */}
          <div className='text-center'>
            <p className="mb-2">&copy; 2025  – All Rights Reserved – Getraise Pvt. Ltd</p>
            <p className='text-[10px]'>Disclaimer: All trademarks, logos and brand names are the property of their respective owners/companies.
            </p>
          </div>
          <div className="text-sm gap-x-4">
            {/* {['Privacy Policy', 'Cookie Policy'].map((link, index) => (
              <span key={index} className="hover:underline cursor-pointer me-3.5">{link}</span>
            ))} */}
            {links.map((link, index) => (
              <span
                key={index}
                onClick={() => router.push(link.path)}
                className="hover:underline cursor-pointer me-3.5"
              >
                {link.label}
              </span>
            ))}
            {/* 'Accessibility Declaration', 'Disclaimer', 'Security Policy', 'California Notice at Collection', 'Customer Cookies' */}
          </div>
          {/* </div> */}
        </div>
        {/* <div className="flex justify-center gap-4 mt-4">
          {['linkedin', 'instagram', 'twitter', 'whatsapp', 'facebook'].map((icon, index) => (
            <div key={index} className="bg-gray-700 p-3 rounded-full">
              <span className="text-white text-2xl">{icon[0].toUpperCase()}</span>
            </div>
          ))}
        </div> */}
      </div>
    </footer>
  )
}

export default Footer