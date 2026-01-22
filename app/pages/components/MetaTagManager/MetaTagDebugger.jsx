"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import { getMetaDetails } from '../../pages/metadetails';

const MetaTagDebugger = () => {
    const pathname = usePathname();
    const metaDetails = getMetaDetails(pathname);

    // Only show in development
    if (process.env.NODE_ENV !== 'development') {
        return null;
    }

    return (
        <>
            {/* <div style={{
                position: 'fixed',
                bottom: '10px',
                right: '10px',
                background: '#000',
                color: '#fff',
                padding: '10px',
                borderRadius: '5px',
                fontSize: '12px',
                zIndex: 9999,
                maxWidth: '300px',
                opacity: 0.8
            }}>
                <h4>Meta Debug Info</h4>
                <p><strong>Path:</strong> {pathname}</p>
                <p><strong>Title:</strong> {metaDetails.metTitle}</p>
                <p><strong>Description:</strong> {metaDetails.MetaDescription?.substring(0, 100)}...</p>
            </div> */}
        </>
    );
};

export default MetaTagDebugger;
