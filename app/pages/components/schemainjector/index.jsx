"use client";
// SchemaInjector - Clean implementation for react-snap
import React from 'react';
import { usePathname } from "next/navigation";
import { Helmet } from "react-helmet";
import { getSchemasForUrl } from '../../utils/schemaLoader';

const SchemaInjector = () => {
    const pathname = usePathname();

    // Get all schemas for current page using new schema loader system
    const schemas = getSchemasForUrl(pathname);

    // Update page title based on schema (but don't override MetaTagManager)
    const pageSchema = schemas.find(s => s["@type"] === "WebPage" || s["@type"] === "AboutPage" || s["@type"] === "ContactPage");
    const pageTitle = pageSchema?.name || "Getraise Technologies";

    console.log(`📋 SchemaInjector: ${pathname} - ${schemas.length} schemas`);

    return (
        <Helmet>
            {/* Only inject schemas, let MetaTagManager handle title and meta tags */}
            {schemas.length > 0 ? schemas.map((schema, index) => (
                <script key={index} type="application/ld+json">
                    {JSON.stringify(schema, null, 2)}
                </script>
            )) : (
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Getraise Technologies",
                        "url": "https://getraisetechnologies.com/"
                    }, null, 2)}
                </script>
            )}
        </Helmet>
    );
};

export default SchemaInjector;