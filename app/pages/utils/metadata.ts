import { Metadata } from 'next';

// Metadata mapping for different pages
export const metadataMap: Record<string, { title: string; description: string }> = {
    "/": {
        title: "Best IT Solutions, Consulting & Outsourcing Company",
        description: "Getraise Technologies offers IT consulting, software development, outsourcing, and digital solutions in India to help businesses grow and innovate."
    },
    "/about-getraise-technologies": {
        title: "About Getraise Technologies - Leading IT Solutions Company",
        description: "Learn about Getraise Technologies - a leading IT company offering website development, digital marketing, custom software, cloud services, and expert tech solutions in India."
    },
    "/website-app-development-services": {
        title: "Best website and app development company in jaipur, India",
        description: "Top website & app development company in India. with 10+ years of expirience. Getraise Technologies offers affordable web & mobile app solutions with expert devlopers"
    },
    "/digital-marketing-services-india": {
        title: "Top & affordable digital marketing Agency- Getraise Technologies",
        description: "Boost your brand traffic with India's top and affordable digital marketing agency, Offers SEO, PPC, social media, and custom solutions to help businesses grow online."
    },
    "/ui-ux-design-services-india": {
        title: "Getraise Technologies- Best & Creative UI UX design agency in India",
        description: "Looking for the best UI UX design services in jaipur, India? Getraise Technologies delivers custom website & mobile app design with creative, affordable solutions."
    },
    "/custom-software-development-company": {
        title: "Leading custom software development company India",
        description: "Looking for affordable & best custom software development services? Our expert software developers with 10+ years of industry knowledge create solutions backed by marketing research"
    },
    "/cloud-computing-services-india": {
        title: "Best Cloud Service Provider India",
        description: "Trusted cloud services company in India offering migration, consulting & cloud solutions with secure & affordable pricing."
    },
    "/resource-allocation-white-label-services": {
        title: "Best White Label Services - Hire Expert Teams in India",
        description: "Looking for best white label services for your agency? Our expert team offers white label software development, UI/UX, Digital marketing and IT services."
    },
    "/products": {
        title: "Ready Made  Customizable Software | SaaS Products for Businesses",
        description: "We provide best ready made software solutions & customizable SaaS products online. Such as CRM, ERP,  E-commerce, Hospital Management, Astro Etc."
    },
    "/contact-getraise-technologies": {
        title: "Contact Getraise Technologies - Get Expert IT Solutions",
        description: "Contact Getraise Technologies for website development, digital marketing, app development, Salesforce, cloud services, and hiring expert developers. Get free consultation today."
    },
    "/salesforce-development-services-india": {
        title: "Top & Affordable Salesforce development Services in India",
        description: "Looking for Best Salesforce development Company? We offer Salesforce CRM customization, app development & consulting| affordable Salesforce solutions for businesses."
    },
    "/services": {
        title: "Best IT Solutions, Consulting & Outsourcing Company",
        description: "Getraise Technologies offers IT consulting, software development, outsourcing, and digital solutions in India to help businesses grow and innovate."
    },
    "/career": {
        title: "Join Our Team - Getraise Technologies Career Opportunities",
        description: "Join Getraise Technologies - a leading IT company offering exciting career opportunities in website development, digital marketing, custom software, and cloud services."
    },
    "/mortgage-services": {
        title: "Mortgage Services - Getraise Technologies",
        description: "Comprehensive mortgage services to help you navigate the home buying process with confidence. Expert guidance, competitive rates, and streamlined solutions."
    },
    "/privacy_policy": {
        title: "Privacy Policy - Getraise Technologies",
        description: "Privacy Policy for Getraise Technologies. Learn how we collect, use, and protect your personal information."
    },
    "/cookies_policy": {
        title: "Cookies Policy - Getraise Technologies",
        description: "Cookies Policy for Getraise Technologies. Learn about how we use cookies on our website."
    },
    "/blog/performance_marketing": {
        title: "What is Performance Marketing? - Getraise Technologies Blog",
        description: "Learn about performance marketing - a results-driven digital advertising approach where you only pay for actual results like clicks, leads, or sales. Discover how it can grow your business efficiently."
    },
    "/blog/generative_ai": {
        title: "Understanding Generative AI - Getraise Technologies Blog",
        description: "Explore the world of Generative AI - how it works, its applications, and how it's transforming businesses. Learn about AI-powered solutions for your organization."
    },
    "/blog/web_developement": {
        title: "Web & App Development Impact - Getraise Technologies Blog",
        description: "Discover the impacts and effectiveness of web and app development in the modern digital world. Learn how quality development can transform your business online presence."
    },
    "/blog/cloudservices": {
        title: "How Cloud Services Are Reshaping Our World - Getraise Technologies Blog",
        description: "Riding the digital sky: Learn how cloud services are reshaping businesses worldwide. Discover what cloud services are, how they work, and their benefits for modern organizations."
    }
};

// Function to get metadata for a specific path
export function getMetadataForPath(pathname: string): Metadata {
    const metaData = metadataMap[pathname] || metadataMap["/"];

    return {
        title: metaData.title,
        description: metaData.description,
        verification: {
            google: '0XAJlYS6WzaQWB_ZhX8R6twbDOcjGGIm8j3_pJV-hek',
        },
        icons: {
            icon: '/getraisefavicon.svg',
        },
        openGraph: {
            title: metaData.title,
            description: metaData.description,
            type: 'website',
            url: `https://getraisetechnologies.com${pathname}`,
            siteName: 'Getraise Technologies',
        },
        twitter: {
            card: 'summary_large_image',
            title: metaData.title,
            description: metaData.description,
        },
        alternates: {
            canonical: `https://getraisetechnologies.com${pathname}`,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}
