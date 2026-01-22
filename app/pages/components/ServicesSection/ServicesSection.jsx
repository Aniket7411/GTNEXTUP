import rightArr from '../../assets/rightArr.svg'
import crm from '../../assets/crm.svg'
import erp from '../../assets/customErp.svg'
import ims from '../../assets/ims.svg'
import astro from '../../assets/astro.svg'
import multistore from '../../assets/multiStore.svg'
import superMarket from '../../assets/superMarket.svg'
import restaurant from '../../assets/restaurant.svg'
import hospitalMgmt from '../../assets/hospitalMgmt.svg'
import eCommerce from '../../assets/e-commerce.svg'
import rightArBg from '../../assets/rightArBg.svg'
import { useRouter } from 'next/navigation'




export const ServicesSection = () => {
  const services = [
    {
      title: "CRM",
      image: crm,
    },
    {
      title: "Custom ERP",
      image: erp,
    },
    {
      title: "Institute Management System",
      image: ims,
    },
    {
      title: "Astro",
      image: astro,
    },
    {
      title: "Multistore",
      image: multistore,
    },
    {
      title: "Supermarket",
      image: superMarket,
    },
    {
      title: "Restaurant",
      image: restaurant,
    },
    {
      title: "Hospital Management",
      image: hospitalMgmt,
    },
    {
      title: "e-Commerce",
      image: eCommerce,
    },
  ];
  const Navigate = useRouter();
  return (
    <section className="py-2 text-black">
      <div className="flex items-center space-x-2 mb-2">
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <h3 className="text-lg font-semibold text-gray-900 ml-2">Our Products</h3>
      </div>
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-start">Our Key Solutions for Business Success</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {services.map((service, index) => (
          <div key={index} className="text-black p-4 rounded-3xl w-full md:h-[350px] h-[200px] mb-4 relative" style={{
            backgroundImage: `url(${service.image})`,
            boxShadow: "inset 0 0 80px rgba(0, 0, 0, 0.95)",
            backgroundSize: 'cover'

          }}>
            <img
              src={rightArBg}
              alt="arrow-img"
              className="absolute top-0 right-0 cursor-pointer transition-transform duration-500 hover:-rotate-45"
              onClick={() => { Navigate("/contact-getraise-technologies") }}
            />
            <div className="absolute bottom-2 right-0 left-0 px-4">

              <h3 className="text-xl font-semibold mb-2 text-white px-2">{service.title}</h3>


              <button
                onClick={() => Navigate("/contact-getraise-technologies")}
                className="cursor-pointer bg-white text-black font-medium hover:bg-yellow-100 flex justify-between px-4 rounded-4xl py-2 w-full group transition-all duration-300"
              >
                Book a Demo
                <img
                  src={rightArr}
                  alt=""
                  className="transition-transform duration-500 group-hover:rotate-180"
                />
              </button>

            </div>
          </div>
        ))}

      </div>
      {/* <button className="flex mx-auto cursor-pointer align-center px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
        Explore More
      </button> */}
    </section>
  );
};
