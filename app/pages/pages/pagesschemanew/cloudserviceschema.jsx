import React from 'react';

// Cloud Services Schema Component
const CloudServiceSchema = () => {
  const serviceSchema = {
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
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Infrastructure Setup"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Migration Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DevOps and CI/CD Solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud App Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Management and Optimization"
          }
        }
      ]
    }
  };

  const webPageSchema = {
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
        "name": "Cloud Services",
        "item": "https://getraisetechnologies.com/cloud-computing-services-india"
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

export default CloudServiceSchema;