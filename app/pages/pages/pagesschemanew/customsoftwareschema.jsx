import React from 'react';

// Custom Software Development Schema Component
const CustomSoftwareSchema = () => {
    const serviceSchema = {
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
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Enterprise Software Development"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "SaaS Product Development"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Custom CRM/ERP Development"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Software Maintenance & Support"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Business Automation Tools"
                    }
                }
            ]
        }
    };

    const webPageSchema = {
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
    };

    const breadcrumbSchema = {
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
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(serviceSchema)
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(webPageSchema)
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema)
                }}
            />
        </>
    );
};

export default CustomSoftwareSchema;