import React from 'react';

// Salesforce Development Services Schema Component
const SalesforceSchema = () => {
    const serviceSchema = {
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
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Salesforce Customization & Configuration"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Salesforce App Development"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Salesforce Integration Services"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Salesforce Consulting"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Salesforce Automation & Workflow Setup"
                    }
                }
            ]
        }
    };

    const webPageSchema = {
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
                "name": "Salesforce Development",
                "item": "https://getraisetechnologies.com/salesforce-development-services-india"
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

export default SalesforceSchema;