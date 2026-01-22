import React from 'react';

// Website & App Development Services Schema Component
const WebAndAppSchema = () => {
    const serviceSchema = {
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
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Custom Website Development"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "eCommerce Website Development"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Mobile App Development (Android & iOS)"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Web Application Development"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Responsive Design & UI Integration"
                    }
                }
            ]
        }
    };

    const webPageSchema = {
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
                "name": "Website & App Development",
                "item": "https://getraisetechnologies.com/website-app-development-services"
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

export default WebAndAppSchema;