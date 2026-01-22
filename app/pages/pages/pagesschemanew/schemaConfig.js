// Centralized Schema Configuration
export const pageSchemas = {
    // Homepage Schema
    "/": {
        organization: {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Getraise Technologies",
            "url": "https://getraisetechnologies.com/",
            "logo": "https://getraisetechnologies.com/assets/brandLogo-BYO1j6iC.png",
            "description": "Getraise Technologies is an IT company offering website & app development, digital marketing, custom software solutions, Salesforce development, UI/UX design, SaaS products, cloud services, and resource allocation.",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "telephone": "+91-9374455555",
                "email": "info@getraisetechnologies.com",
                "availableLanguage": ["English", "Hindi"]
            },
            "sameAs": [
                "https://www.instagram.com/getraise_private_limited/",
                "https://www.linkedin.com/company/getraisetechnologies/",
                "https://www.facebook.com/getraisetechnologies/"
            ]
        },
        webPage: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Best IT Solutions, Consulting & Outsourcing Company ",
            "url": "https://getraisetechnologies.com/",
            "description": "Grow your business with Getraise Technologies - a digital partner offering website and app development, digital marketing, branding, UI/UX, cloud solutions, and SaaS products tailored to your goals.",
            "inLanguage": "en-IN",
            "isPartOf": {
                "@type": "WebSite",
                "url": "https://getraisetechnologies.com/"
            }
        },
        breadcrumb: {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://getraisetechnologies.com/"
                }
            ]
        }
    },

    // About Page Schema
    "/about-getraise-technologies": {
        aboutPage: {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Us – Getraise Technologies",
            "url": "https://getraisetechnologies.com/about-getraise-technologies",
            "description": "Get to know Getraise Technologies – an IT company offering website & app development, digital marketing, custom software, Salesforce, cloud services, and expert tech resource allocation. We empower brands through tailored tech solutions.",
            "mainEntity": {
                "@type": "Organization",
                "name": "Getraise Technologies",
                "url": "https://getraise-tech.vercel.app/",
                "logo": "https://getraise-tech.vercel.app/logo.png",
                "email": "info@getraisetechnologies.com",
                "telephone": "+91-9374455555",
                "description": "An innovative IT company delivering scalable software, marketing, and development solutions to businesses across India and beyond.",
                "sameAs": [
                    "https://www.linkedin.com/company/getraise-technologies/",
                    "https://www.instagram.com/getraise.tech/",
                    "https://www.facebook.com/getraisetech/"
                ],
                "foundingDate": "2021",
                "founder": {
                    "@type": "Person",
                    "name": "Kanisha Tater"
                },
                "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "IN"
                }
            }
        },
        breadcrumb: {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://getraisetechnologies.com/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "About Us",
                    "item": "https://getraisetechnologies.com/about-getraise-technologies"
                }
            ]
        }
    },

    // Contact Page Schema
    "/contact-getraise-technologies": {
        contactPage: {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Us – Getraise Technologies",
            "url": "https://getraisetechnologies.com/contact-getraise-technologies",
            "description": "Get in touch with Getraise Technologies for website development, digital marketing, app development, Salesforce, cloud services, and hiring expert developers or marketers.",
            "mainEntity": {
                "@type": "Organization",
                "name": "Getraise Technologies",
                "url": "https://getraise-tech.vercel.app/",
                "logo": "https://getraise-tech.vercel.app/logo.png",
                "email": "info@getraisetechnologies.com",
                "telephone": "+91-9374455555",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-9374455555",
                    "email": "info@getraisetechnologies.com",
                    "contactType": "Customer Support",
                    "areaServed": "IN",
                    "availableLanguage": ["English", "Hindi"]
                },
                "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "IN"
                }
            }
        },
        breadcrumb: {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://getraisetechnologies.com/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Contact Us",
                    "item": "https://getraisetechnologies.com/contact-getraise-technologies"
                }
            ]
        }
    },

    // Digital Marketing Services
    "/digital-marketing-services-india": {
        service: {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Digital Marketing Services",
            "provider": {
                "@type": "Organization",
                "name": "Getraise Technologies",
                "url": "https://getraisetechnologies.com/digital-marketing-services-india",
                "logo": "https://getraisetechnologies.com/assets/brandLogo-BYO1j6iC.png",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-9374455555",
                    "email": "info@getraisetechnologies.com",
                    "contactType": "Customer Service"
                }
            },
            "areaServed": {
                "@type": "Country",
                "name": "India"
            },
            "description": "Getraise Technologies offers performance-driven digital marketing services including SEO, paid ads, social media, content marketing, email marketing, and full-funnel strategy to boost your business growth.",
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Digital Marketing Services",
                "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Search Engine Optimization (SEO)" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Performance Marketing (Paid Ads)" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Marketing" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Email Marketing" } }
                ]
            }
        },
        webPage: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Top & affordable digital marketing Agency- Getraise Technologies",
            "url": "https://getraisetechnologies.com/digital-marketing-services-india",
            "description": "Explore Getraise Technologies' result-driven digital marketing services including SEO, paid ads, social media, content marketing, and more to scale your business.",
            "inLanguage": "en-IN",
            "isPartOf": {
                "@type": "WebSite",
                "url": "https://getraisetechnologies.com/"
            }
        },
        breadcrumb: {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://getraisetechnologies.com/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Digital Marketing",
                    "item": "https://getraisetechnologies.com/digital-marketing-services-india"
                }
            ]
        }
    },

    // Website & App Development Services
    "/website-app-development-services": {
        service: {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Website & App Development Services",
            "provider": {
                "@type": "Organization",
                "name": "Getraise Technologies",
                "url": "https://getraisetechnologies.com/website-app-development-services",
                "logo": "https://getraise-tech.vercel.app/logo.png",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-9374455555",
                    "email": "info@getraisetechnologies.com",
                    "contactType": "Customer Service"
                }
            },
            "areaServed": {
                "@type": "Country",
                "name": "India"
            },
            "description": "Getraise Technologies offers custom website and mobile app development services with a focus on performance, scalability, and user experience.",
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Web & App Development Services",
                "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Website Development" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "eCommerce Website Development" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development (Android & iOS)" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Application Development" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Responsive Design & UI Integration" } }
                ]
            }
        },
        webPage: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Best website and app development company in jaipur, India",
            "url": "https://getraisetechnologies.com/website-app-development-services",
            "description": "We develop performance-driven websites and mobile apps tailored to your brand's needs. From eCommerce platforms to custom software, Getraise delivers scalable tech solutions.",
            "inLanguage": "en-IN",
            "isPartOf": {
                "@type": "WebSite",
                "url": "https://getraisetechnologies.com/"
            }
        },
        breadcrumb: {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://getraisetechnologies.com/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Website & App Development",
                    "item": "https://getraisetechnologies.com/website-app-development-services"
                }
            ]
        }
    },

    // UI/UX Design Services
    "/ui-ux-design-services-india": {
        service: {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "UI/UX Design Services",
            "provider": {
                "@type": "Organization",
                "name": "Getraise Technologies",
                "url": "https://getraisetechnologies.com/ui-ux-design-services-india",
                "logo": "https://getraise-tech.vercel.app/logo.png",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-9374455555",
                    "email": "info@getraisetechnologies.com",
                    "contactType": "Customer Service"
                }
            },
            "areaServed": {
                "@type": "Country",
                "name": "India"
            },
            "description": "Getraise Technologies offers creative and user-focused UI/UX design services to build seamless digital experiences across websites, mobile apps, and web platforms.",
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "UI/UX Design Services",
                "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website UI/UX Design" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App UI/UX Design" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom User Interface Design" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "User Research & Wireframing" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Prototyping and Interaction Design" } }
                ]
            }
        },
        webPage: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Getraise Technologies- Best & Creative UI UX design agency in India",
            "url": "https://getraisetechnologies.com/ui-ux-design-services-india",
            "description": "Explore user-centered UI/UX design services at Getraise Technologies. We design modern, intuitive websites and apps to improve digital experiences and business results.",
            "inLanguage": "en-IN",
            "isPartOf": {
                "@type": "WebSite",
                "url": "https://getraisetechnologies.com/"
            }
        },
        breadcrumb: {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://getraisetechnologies.com/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "UI/UX Design",
                    "item": "https://getraisetechnologies.com/ui-ux-design-services-india"
                }
            ]
        }
    },

    // Custom Software Development
    "/custom-software-development-company": {
        service: {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Custom Software Development",
            "provider": {
                "@type": "Organization",
                "name": "Getraise Technologies",
                "url": "https://getraisetechnologies.com/custom-software-development-company",
                "logo": "https://getraise-tech.vercel.app/logo.png",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-9374455555",
                    "email": "info@getraisetechnologies.com",
                    "contactType": "Customer Service"
                }
            },
            "areaServed": {
                "@type": "Country",
                "name": "India"
            },
            "description": "Getraise Technologies provides end-to-end custom software development services, including enterprise solutions, SaaS platforms, automation tools, and tailored business software built to meet your specific needs.",
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Custom Software Solutions",
                "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Enterprise Software Development" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SaaS Product Development" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom CRM/ERP Development" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Software Maintenance & Support" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Automation Tools" } }
                ]
            }
        },
        webPage: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Leading custom software development company India",

            "url": "https://getraise-tech.vercel.app/services/custom-software-development",
            "description": "Getraise Technologies builds secure, scalable, and custom software solutions for startups and enterprises. From SaaS platforms to CRMs and automation tools – we deliver powerful, tailored systems.",
            "inLanguage": "en-IN",
            "isPartOf": {
                "@type": "WebSite",
                "url": "https://getraisetechnologies.com/"
            }
        },
        breadcrumb: {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://getraisetechnologies.com/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Custom Software Development",
                    "item": "https://getraisetechnologies.com/custom-software-development-company"
                }
            ]
        }
    },

    // Cloud Computing Services
    "/cloud-computing-services-india": {
        service: {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Cloud Services",
            "provider": {
                "@type": "Organization",
                "name": "Getraise Technologies",
                "url": "https://getraisetechnologies.com/cloud-computing-services-india",
                "logo": "https://getraise-tech.vercel.app/logo.png",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-9374455555",
                    "email": "info@getraisetechnologies.com",
                    "contactType": "Customer Service"
                }
            },
            "areaServed": {
                "@type": "Country",
                "name": "India"
            },
            "description": "Getraise Technologies provides end-to-end cloud services including cloud migration, infrastructure setup, DevOps, and cloud-based application development for businesses of all sizes.",
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Cloud Solutions",
                "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloud Infrastructure Setup" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloud Migration Services" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DevOps and CI/CD Solutions" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloud App Development" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloud Management and Optimization" } }
                ]
            }
        },
        webPage: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Best Cloud Service Provider India",
            "url": "https://getraisetechnologies.com/cloud-computing-services-india",
            "description": "Secure, scalable, and reliable cloud services from Getraise Technologies including cloud setup, migration, DevOps solutions, and cloud-native development.",
            "inLanguage": "en-IN",
            "isPartOf": {
                "@type": "WebSite",
                "url": "https://getraisetechnologies.com/"
            }
        },
        breadcrumb: {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://getraisetechnologies.com/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Cloud Services",
                    "item": "https://getraisetechnologies.com/cloud-computing-services-india"
                }
            ]
        }
    },

    // Salesforce Development Services
    "/salesforce-development-services-india": {
        service: {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Salesforce Development Services",
            "provider": {
                "@type": "Organization",
                "name": "Getraise Technologies",
                "url": "https://getraisetechnologies.com/salesforce-development-services-india",
                "logo": "https://getraise-tech.vercel.app/logo.png",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-9374455555",
                    "email": "info@getraisetechnologies.com",
                    "contactType": "Customer Service"
                }
            },
            "areaServed": {
                "@type": "Country",
                "name": "India"
            },
            "description": "Getraise Technologies offers professional Salesforce development services including Salesforce customization, integration, app development, consulting, and automation to help businesses optimize their CRM operations.",
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Salesforce Development Solutions",
                "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Salesforce Customization & Configuration" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Salesforce App Development" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Salesforce Integration Services" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Salesforce Consulting" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Salesforce Automation & Workflow Setup" } }
                ]
            }
        },
        webPage: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Top & Affordable Salesforce development Services in India ",
            "url": "https://getraisetechnologies.com/salesforce-development-services-india",
            "description": "Getraise Technologies provides top-notch Salesforce development services, including app development, integration, consulting, customization, and automation tailored to your business CRM needs.",
            "inLanguage": "en-IN",
            "isPartOf": {
                "@type": "WebSite",
                "url": "https://getraisetechnologies.com/"
            }
        },
        breadcrumb: {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://getraisetechnologies.com/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Salesforce Development",
                    "item": "https://getraisetechnologies.com/salesforce-development-services-india"
                }
            ]
        }
    },

    // Resource Allocation Services
    "/resource-allocation-white-label-services": {
        service: {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Resource Allocation Services",
            "provider": {
                "@type": "Organization",
                "name": "Getraise Technologies",
                "url": "https://getraisetechnologies.com/resource-allocation-white-label-services",
                "logo": "https://getraise-tech.vercel.app/logo.png",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-9374455555",
                    "email": "info@getraisetechnologies.com",
                    "contactType": "Customer Service"
                }
            },
            "areaServed": {
                "@type": "Country",
                "name": "India"
            },
            "description": "Getraise Technologies provides reliable resource allocation services by offering skilled developers, designers, and marketing experts on-demand to meet your project requirements and deadlines efficiently.",
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Tech Resource Allocation",
                "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hire Frontend Developers" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hire Backend Developers" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hire UI/UX Designers" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hire Digital Marketing Experts" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hire Full-stack Developers" } }
                ]
            }
        },
        webPage: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Best White Label Services - Hire Expert Teams in India",
            "url": "https://getraisetechnologies.com/resource-allocation-white-label-services",
            "description": "Need extra hands for your tech projects? Getraise Technologies offers flexible resource allocation services to hire skilled developers, designers, and marketers on a project or hourly basis.",
            "inLanguage": "en-IN",
            "isPartOf": {
                "@type": "WebSite",
                "url": "https://getraisetechnologies.com/"
            }
        },
        breadcrumb: {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://getraisetechnologies.com/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Resource Allocation",
                    "item": "https://getraisetechnologies.com/resource-allocation-white-label-services"
                }
            ]
        }
    },

    // Products Page
    "/products": {
        webPage: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Best White Label Services - Hire Expert Teams in India",
            "url": "https://getraisetechnologies.com/products",
            "description": "We provide best ready made software solutions & customizable SaaS products online. Such as CRM, ERP, E-commerce, Hospital Management, Astro Etc.",
            "inLanguage": "en-IN",
            "isPartOf": {
                "@type": "WebSite",
                "url": "https://getraisetechnologies.com/"
            }
        },
        breadcrumb: {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://getraisetechnologies.com/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Products",
                    "item": "https://getraisetechnologies.com/products"
                }
            ]
        }
    }
};

// Function to get schemas for a specific page
export const getPageSchemas = (pathname) => {
    return pageSchemas[pathname] || null;
};

// Function to get all schemas as an array
export const getAllSchemas = (pathname) => {
    const pageSchema = getPageSchemas(pathname);
    if (!pageSchema) return [];

    return Object.values(pageSchema);
};


