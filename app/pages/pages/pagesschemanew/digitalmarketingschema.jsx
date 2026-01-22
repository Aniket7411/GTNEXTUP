import React from 'react';

// Digital Marketing Services Schema Component
const DigitalMarketingSchema = () => {
  const serviceSchema = {
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
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Search Engine Optimization (SEO)"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Performance Marketing (Paid Ads)"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Marketing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Content Marketing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Email Marketing"
          }
        }
      ]
    }
  };

  const webPageSchema = {
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
        "name": "Digital Marketing",
        "item": "https://getraisetechnologies.com/digital-marketing-services-india"
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

export default DigitalMarketingSchema;