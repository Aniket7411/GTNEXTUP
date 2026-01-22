import React from 'react';

// Contact Page Schema Component
const ContactSchema = () => {
    const contactPageSchema = {
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
                "name": "Contact Us",
                "item": "https://getraisetechnologies.com/contact-getraise-technologies"
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(contactPageSchema)
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

export default ContactSchema;