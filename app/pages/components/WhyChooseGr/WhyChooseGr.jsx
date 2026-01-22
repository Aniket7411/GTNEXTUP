import React from 'react'
import img1 from '../../assets/wcu1.svg'
import img2 from '../../assets/wcu2.svg'
import img3 from '../../assets/wcu3.svg'
import img4 from '../../assets/wcu4.svg'
import img5 from '../../assets/wcu5.svg'


const WhyChooseGr = () => {

  const img = [
    img1,
    img2,
    img3,
    img4,
    img5
  ]

  const data = [
    {
      id: 1,
      title: 'Data-Backed Strategies',
      description:
        'We use real-time analytics and market insights to craft marketing strategies that are precise, measurable, and optimized for performance.',
      image: img1,
    },
    {
      id: 2,
      title: 'Campaigns That Focus on ROI',
      description:
        'Every campaign is designed with a single goal: delivering results. We prioritize conversions, lead generation, and revenue growth.',
      image: img2,
    },
    {
      id: 3,
      title: 'In-House Creative, Technical & Analytics Teams',
      description:
        'From design and copy to targeting and tracking, our in-house experts work seamlessly to execute cohesive, high-impact campaigns.',
      image: img3,
    },
    {
      id: 4,
      title: 'Industry-Specific Marketing Solutions',
      description:
        'We tailor our strategies to your niche, ensuring messaging, platforms, and content resonate with your target audience.',
      image: img4,
    },
    {
      id: 5,
      title: 'Transparent Reporting & Performance Dashboards',
      description:
        'Track every click, lead, and conversion with real-time dashboards and clear, actionable performance reports.',
      image: img5,
    },
  ];
  return (
    <>

      <section className="py-8 text-black">
        {/* <div className="flex items-center space-x-2 mb-2">
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <h3 className="text-lg font-semibold text-gray-900 ml-2">Why Choose Us</h3>
                </div> */}
        <h2 className="text-4xl font-medium mb-8 text-start">Why Choose Getraise for Marketing?</h2>
      </section>

      <div className="w-full  space-y-4">
        {data.map((item, index) => (
          <>

            <div
              key={item.id}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                } gap-6 items-center bg-white py-4 rounded-lg`}
            >
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
              </div>
              <div className="flex-1 rounded-xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[160px] object-cover rounded-xl"
                />
              </div>
            </div>
            <hr className='m-4 border border-gray-200' />
          </>

        ))}
      </div>
    </>

  )
}

export default WhyChooseGr
