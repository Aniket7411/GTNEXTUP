'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import './header.css'
import { X, Menu } from 'lucide-react';




const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);


  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine colors based on route and scroll position
  const isHomePage = pathname === '/';
  const isAboutPage = pathname === '/about-getraise-technologies';
  const iswebAppPage = pathname === '/services';
  const resourcePage = pathname === '/resource-allocation-white-label-services';
  const addServices = pathname === '/add-services';
  const isbusinessPage = pathname === '/products';
  const dataDrivenPage = pathname === '/digital-marketing-services-india';
  const isContactUsPage = pathname === '/contact-getraise-technologies';
  const isCareerPage = pathname === '/career';
  const webAndApp = pathname === '/website-app-development-services';

  const isJobsPage = pathname.includes('jobs');
  const isblogPage = pathname.includes('blog');
  const isPrivacyPage = pathname === '/privacy_policy';
  const isCookiesPage = pathname === '/cookies_policy';
  const isuiuxdesignPage = pathname === '/ui-ux-design-services-india';
  const cloudServicesPage = pathname === '/cloud-computing-services-india';
  const customSoftServicesPage = pathname === '/custom-software-development-company';
  const customSalesforcePage = pathname === '/salesforce-development-services-india';
  const mortgageServicesPage = pathname === '/mortgage-services';

  console.log("jhjahj")



  const textColor = (isHomePage || resourcePage || addServices) ? 'text-white' : (isScrolled ? 'text-black' : 'text-black');
  const bgColor = isHomePage ? 'bg-black' : (isAboutPage) ? 'bgbeige' : (iswebAppPage) ? 'bg-[#FFFDEF]' : (resourcePage || addServices)
    ? (isScrolled ? 'bg-black' : 'transparent') // **Black when scrolled**
    : (isScrolled ? 'bg-white' : 'bg-white');

  return (
    <header className={`min-h-[65px] fixed top-0 left-0 right-0 w-full md:pb-2 py-5 md:py-2 px-4 md:px-10 flex justify-between items-center z-50 transition-all duration-300 ${bgColor} ${textColor}`}>
      {/* <div className="text-2xl font-bold">Getraise</div> */}

      <div onClick={() => router.push('/')} className="cursor-pointer">
        <img className='h-[30px] md:h-[35px]' src={(isAboutPage || isbusinessPage || dataDrivenPage || iswebAppPage || isContactUsPage || isCareerPage || isJobsPage || isblogPage || isPrivacyPage || isCookiesPage || isuiuxdesignPage || webAndApp || cloudServicesPage || customSoftServicesPage || customSalesforcePage || mortgageServicesPage) ? "/assets/getraiseBlackLogo.png" : "/assets/brandLogo.png"}
          alt="" />
      </div>
      {/* <nav className="absolute left-0 right-0 flex justify-center gap-8"> */}
      <div className='hidden lg:block'>

        <nav className={`flex justify-center gap-8 nav ${pathname === "/resource-allocation-white-label-services"
          ? "text-gray-500"
          : ""
          }`}
        >

          <div onClick={() => router.push('/resource-allocation-white-label-services')} className='li cursor-pointer'>
            <li className="list-none cursor-pointer">
              Resource Allocation
            </li>
          </div>
          <div onClick={() => router.push('/products')} className='li cursor-pointer'>
            <li className="list-none cursor-pointer">
              Products
            </li>
          </div>




          <div
            className="relative"
            onMouseLeave={() => setIsHovered(false)}
            onMouseEnter={() => setIsHovered(true)}
          >
            {/* Button */}
            <button
              className="font-medium cursor-pointer focus:outline-none rounded-lg text-md text-center inline-flex items-center transition duration-200 group"
              type="button"
            >
              Services
              <svg
                className="w-4 h-4 ml-1 mt-1 transform transition-transform duration-300 group-hover:rotate-180"
                fill="none"
                stroke="yellow"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute left-0 mr-[50px] mt-4 min-w-max bg-gray-700 shadow-md rounded-lg transition-all duration-300 ease-in-out overflow-hidden ${isHovered ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            >
              <ul className="flex flex-col text-sm text-[#fff]">
                <div onClick={() => { router.push('/digital-marketing-services-india'); setIsHovered(false); }} className='li cursor-pointer'>
                  <li className="block cursor-pointer px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    Digital & Performance Marketing
                  </li>
                </div>
                <div onClick={() => { router.push('/website-app-development-services'); setIsHovered(false); }} className='li cursor-pointer'>
                  <li className="block cursor-pointer px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    Website & App Development
                  </li>
                </div>
                <div onClick={() => { router.push('/ui-ux-design-services-india'); setIsHovered(false); }} className='li cursor-pointer'>
                  <li className="block cursor-pointer px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    UI/UX Design
                  </li>
                </div>
                <div onClick={() => { router.push('/cloud-computing-services-india'); setIsHovered(false); }} className='li cursor-pointer'>
                  <li className="block cursor-pointer px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    Cloud Services
                  </li>
                </div>
                <div onClick={() => { router.push('/salesforce-development-services-india'); setIsHovered(false); }} className='li cursor-pointer'>
                  <li className="block cursor-pointer px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    Salesforce Development
                  </li>
                </div>
                <div onClick={() => { router.push('/custom-software-development-company'); setIsHovered(false); }} className='li cursor-pointer'>
                  <li className="block cursor-pointer px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    Custom Software Solutions
                  </li>
                </div>
                <div onClick={() => { router.push('/mortgage-services'); setIsHovered(false); }} className='li cursor-pointer'>
                  <li className="block cursor-pointer px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    Mortgage Services
                  </li>
                </div>
                {/* <li
                  onClick={() => {
                    setIsHovered(false);
                    router.push("/services", {
                      state: { focusSlide: "Performance Marketing" },
                    });
                  }}
                  className="block cursor-pointer px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Performance Marketing
                </li> */}
              </ul>
            </div>
          </div>


          <div onClick={() => router.push('/about-getraise-technologies')} className='li cursor-pointer'>
            About Us
          </div>

          <div onClick={() => router.push('/contact-getraise-technologies')} className='li cursor-pointer'>
            Contact
          </div>


        </nav>
      </div>
      {/* Hamburger Menu Button */}
      <button className="lg:hidden text-[#454545] focus:outline-none" onClick={() => setIsMenuOpen(true)}>
        <Menu className="w-8 h-8" />
      </button>


      {/* Mobile Menu (Full-Screen Shutter) */}
      <div
        className={`ps-8 fixed inset-0 bg-black text-white flex flex-col items-start justify-center z-[60] transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        {/* Close Button */}
        <button className="absolute top-5 right-5 text-white" onClick={() => setIsMenuOpen(false)}>
          <X className="w-8 h-8" />
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-6 text-xl" >
          <li className="list-none hover:text-yellow-400" onClick={() => {
            router.push('/resource-allocation-white-label-services');
            setIsMenuOpen(false);
          }}>Resource Allocation</li>
          <li className="list-none hover:text-yellow-400" onClick={() => {
            router.push('/products');
            setIsMenuOpen(false);
          }}>Products</li>
          <div>
            <h3 className="text-lg font-semibold mb-2">Services</h3>
            <ul className="ml-4 text-base">
              <li className="cursor-pointer hover:text-yellow-400 mb-2" onClick={() => {
                router.push("/digital-marketing-services-india");
                setIsMenuOpen(false);
              }}>
                Digital & Performance Marketing
              </li>
              <li className="cursor-pointer hover:text-yellow-400 mb-2" onClick={() => {
                router.push("/website-app-development-services");
                setIsMenuOpen(false);
              }}>
                Website & App Development
              </li>
              <li className="cursor-pointer hover:text-yellow-400 mb-2" onClick={() => {
                router.push("/ui-ux-design-services-india");
                setIsMenuOpen(false);
              }}>
                UI/UX Design
              </li>
              <li className="cursor-pointer hover:text-yellow-400 mb-2" onClick={() => {
                router.push("/cloud-computing-services-india");
                setIsMenuOpen(false);
              }}>
                Cloud Services
              </li>
              <li className="cursor-pointer hover:text-yellow-400 mb-2" onClick={() => {
                router.push("/salesforce-development-services-india");
                setIsMenuOpen(false);
              }}>
                Salesforce Development
              </li>
              <li className="cursor-pointer hover:text-yellow-400 mb-2" onClick={() => {
                router.push("/custom-software-development-company");
                setIsMenuOpen(false);
              }}>
                Custom Software Solutions
              </li>
              <li className="cursor-pointer hover:text-yellow-400 mb-2" onClick={() => {
                router.push("/mortgage-services");
                setIsMenuOpen(false);
              }}>
                Mortgage Services
              </li>
              {/* <li className="cursor-pointer hover:text-yellow-400" onClick={() => {
                router.push("/services", { state: { focusSlide: "Performance Marketing" } });
                setIsMenuOpen(false);
              }}>
                Performance Marketing
              </li> */}
            </ul>
          </div>

          {/* <li className="list-none hover:text-yellow-400" onClick={() => {
            router.push('/about-getraise-technologies');
            setIsMenuOpen(false);
          }}>About Us</li> */}

          {/* <li className="list-none hover:text-yellow-400" onClick={() => {
            router.push('/contact-getraise-technologies');
            setIsMenuOpen(false);
          }}>Contact</li> */}

          {/* <a href="#" className="hover:text-yellow-400" onClick={(e) => {
            e.preventDefault();
            setIsMenuOpen(false);
            router.push('/services');
          }}>Services</a>
          <a href="/about" className="hover:text-yellow-400" onClick={() => {
             setIsMenuOpen(false); navigate('/about');
          }}>About Us</a>
          <a href="/contact-getraise-technologies" className="hover:text-yellow-400">Contact</a> */}
        </nav>
      </div>




    </header>
  )
}

export default Header