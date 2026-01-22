const metaDetailsMap = {
    "/": {
        metTitle: "Best IT Solutions, Consulting & Outsourcing Company",
        MetaDescription:
            "Top website & app development company in India. with 10+ years of expirience. Getraise Technologies offers affordable web & mobile app solutions with expert devlopers ",
    },
    "/Marketing": {
        metTitle: "About Getraise Technologies",
        MetaDescription:
            "Boost your brand traffic with India’s top and affordable digital marketing agency, Offers SEO, PPC, social media, and custom solutions to help businesses grow online.",
    },
    "/website-app-development-services": {
        metTitle: "Best website and app development company in jaipur, India",
        MetaDescription:
            "Top website & app development company in India. with 10+ years of expirience. Getraise Technologies offers affordable web & mobile app solutions with expert devlopers ",
    },
    "/digital-marketing-services-india": {
        metTitle: "Top & affordable digital marketing Agency- Getraise Technologies",
        MetaDescription:
            "Boost your brand traffic with India’s top and affordable digital marketing agency, Offers SEO, PPC, social media, and custom solutions to help businesses grow online.",
    },

    "/ui-ux-design-services-india": {
        metTitle: "Getraise Technologies- Best & Creative UI UX design agency in India",
        MetaDescription:
            "Looking for the best UI UX design services in jaipur, India? Getraise Technologies delivers custom website & mobile app design with creative, affordable solutions.",
    },
    "/custom-software-development-company": {
        metTitle: "Leading custom software development company India",
        MetaDescription:
            "Looking for affordable & best custom software development services? Our expert software developers with 10+ years of industry knowledge create solutions backed by marketing research",
    },
    "/cloud-computing-services-india": {
        metTitle: "Best Cloud Service Provider India",
        MetaDescription:
            "Trusted cloud services company in India offering migration, consulting & cloud solutions with secure & affordable pricing.",
    },
    "/resource-allocation-white-label-services": {
        metTitle: "Best White Label Services - Hire Expert Teams in India",
        MetaDescription:
            "Looking for best white label services for your agency? Our expert team offers white label software development, UI/UX, Digital marketing and IT services.",
    },
    "/products": {
        metTitle: "Ready Made  Customizable Software | SaaS Products for Businesses",
        MetaDescription:
            "We provide best ready made software solutions & customizable SaaS products online. Such as CRM, ERP,  E-commerce, Hospital Mangement, Astro Etc.",
    },
    "/about-getraise-technologies": {
        metTitle: "About Getraise Technologies - Leading IT Solutions Company",
        MetaDescription:
            "Learn about Getraise Technologies - a leading IT company offering website development, digital marketing, custom software, cloud services, and expert tech solutions in India.",
    },
    "/contact-getraise-technologies": {
        metTitle: "Contact Getraise Technologies - Get Expert IT Solutions",
        MetaDescription:
            "Contact Getraise Technologies for website development, digital marketing, app development, Salesforce, cloud services, and hiring expert developers. Get free consultation today.",
    },
    "/services": {
        metTitle: "IT Services - Website Development, Digital Marketing & More",
        MetaDescription:
            "Explore comprehensive IT services by Getraise Technologies including website development, digital marketing, app development, UI/UX design, cloud services, and custom software solutions.",
    },
    "/career": {
        metTitle: "Career Opportunities at Getraise Technologies",
        MetaDescription:
            "Join Getraise Technologies and build your career in IT. We offer exciting opportunities in web development, digital marketing, UI/UX design, and software development roles.",
    },
    "/salesforce-development-services-india": {
        metTitle: "Top & Affordable Salesforce development Services in India",
        MetaDescription:
            "Looking for Best Salesforce development Company? We offer Salesforce CRM customization, app development & consulting| affordable Salesforce solutions for businesses.",
    },

};

// ✅ Utility function to get meta by page
export const getMetaDetails = (page) => {
    return metaDetailsMap[page] || {
        metTitle: "Getraise Technologies",
        MetaDescription:
            "Looking for affordable & best custom software development services? Our expert software developers with 10+ years of industry knowledge create solutions backed by marketing research",
    };
};
