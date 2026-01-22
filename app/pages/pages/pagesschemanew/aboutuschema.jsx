import React from 'react';

// About Page Schema Component
const AboutSchema = () => {
  const aboutPageSchema = {
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
        "name": "About Us",
        "item": "https://getraisetechnologies.com/about-getraise-technologies"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema)
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

export default AboutSchema;