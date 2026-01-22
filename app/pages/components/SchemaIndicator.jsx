'use client';


import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const SchemaIndicator = () => {
    const pathname = usePathname();
    const [schemas, setSchemas] = useState([]);

    // Map paths to schema file names
    const getSchemaFileName = (pathname) => {
        const schemaMap = {
            '/': 'homepageschema.jsx',
            '/about-getraise-technologies': 'aboutuschema.jsx',
            '/digital-marketing-services-india': 'digitalmarketingschema.jsx',
            '/resource-allocation-white-label-services': 'resourceallocationschema.jsx',
            '/custom-software-development-company': 'customsoftwareschema.jsx',
            '/contact-getraise-technologies': 'contactschema.jsx',
            '/website-app-development-services': 'webandappschema.jsx',
            '/ui-ux-design-services-india': 'uiuxschema.jsx',
            '/cloud-computing-services-india': 'cludserviceschema.jsx',
            '/salesforce-development-services-india': 'salesforceschema.jsx',
            '/products': 'productpageschema.jsx'
        };
        return schemaMap[pathname] || 'Unknown Schema';
    };

    useEffect(() => {
        // Only run in browser environment
        if (typeof window === 'undefined' || !document.head) {
            return;
        }

        const updateSchemas = () => {
            const schemaScripts = document.querySelectorAll('script[type="application/ld+json"]');
            const schemaData = Array.from(schemaScripts).map(script => {
                try {
                    return JSON.parse(script.textContent);
                } catch (e) {
                    return null;
                }
            }).filter(Boolean);

            setSchemas(schemaData);
        };

        // Update immediately
        updateSchemas();

        // Update after a short delay to catch dynamic injection
        const timeout = setTimeout(updateSchemas, 500);

        return () => clearTimeout(timeout);
    }, [pathname]);

    if (process.env.NODE_ENV === 'production') return null;

    return (
        <>
            {/* <div style={{
            position: 'fixed',
            top: '10px',
            right: '10px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '12px',
            borderRadius: '8px',
            fontSize: '12px',
            zIndex: 9999,
            maxWidth: '280px',
            fontFamily: 'monospace',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            border: '2px solid #fff'
        }}>
            <div style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '14px' }}>
                📊 Schema Status
            </div>
            <div style={{ marginBottom: '4px' }}>
                <strong>Page:</strong> {pathname}
            </div>
            <div style={{ marginBottom: '4px' }}>
                <strong>Schema File:</strong> {getSchemaFileName(pathname)}
            </div>
            <div style={{ marginBottom: '8px' }}>
                <strong>Schemas:</strong> {schemas.length}
            </div>
            <div style={{ fontSize: '10px', maxHeight: '100px', overflowY: 'auto' }}>
                {schemas.map((schema, index) => (
                    <div key={index} style={{ 
                        marginBottom: '3px', 
                        padding: '2px 4px',
                        background: 'rgba(255,255,255,0.2)',
                        borderRadius: '3px'
                    }}>
                        • {schema["@type"] || 'Unknown'}
                    </div>
                ))}
            </div>
            <div style={{ 
                marginTop: '8px', 
                fontSize: '10px', 
                textAlign: 'center',
                background: 'rgba(255,255,255,0.2)',
                padding: '4px',
                borderRadius: '3px'
            }}>
                ✅ View Page Source Ready
            </div>
        </div> */}
        </>
    );
};

export default SchemaIndicator;
