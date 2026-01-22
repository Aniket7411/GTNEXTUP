import React from 'react';

// UI/UX Design Services Schema Component
const UIUXSchema = () => {
    const serviceSchema = {
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
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Website UI/UX Design"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Mobile App UI/UX Design"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Custom User Interface Design"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "User Research & Wireframing"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Prototyping and Interaction Design"
                    }
                }
            ]
        }
    };

    const webPageSchema = {
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
                "name": "UI/UX Design",
                "item": "https://getraisetechnologies.com/ui-ux-design-services-india"
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

export default UIUXSchema;