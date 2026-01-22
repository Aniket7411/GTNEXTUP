import React from 'react';

// Resource Allocation Services Schema Component
const ResourceAllocationSchema = () => {
    const serviceSchema = {
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
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Hire Frontend Developers"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Hire Backend Developers"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Hire UI/UX Designers"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Hire Digital Marketing Experts"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Hire Full-stack Developers"
                    }
                }
            ]
        }
    };

    const webPageSchema = {
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
                "name": "Resource Allocation",
                "item": "https://getraisetechnologies.com/resource-allocation-white-label-services"
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

export default ResourceAllocationSchema;

