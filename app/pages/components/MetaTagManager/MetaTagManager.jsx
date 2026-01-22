"use client";
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getMetadataForPath } from '../../utils/metadata';

const MetaTagManager = () => {
    const pathname = usePathname();
    const meta = getMetadataForPath(pathname);

    useEffect(() => {
        // Only run in browser
        if (typeof window === 'undefined') return;

        // Basic meta
        const title = meta.title || '';
        const description = meta.description || '';

        // Open Graph
        const og = meta.openGraph || {};
        // Twitter
        const twitter = meta.twitter || {};
        // Canonical
        const canonical = meta.alternates?.canonical || '';
        // Robots
        const robotsContent = meta.robots ? (meta.robots.index ? 'index, follow' : 'noindex, nofollow') : '';

        // Update document title
        if (title) {
            document.title = title;
        }

        // Helper function to update or create meta tag
        const updateMetaTag = (attr, value, content) => {
            const selector = attr === 'property' ? `meta[property="${value}"]` : `meta[name="${value}"]`;
            let metaTag = document.querySelector(selector);

            if (!metaTag) {
                metaTag = document.createElement('meta');
                if (attr === 'property') {
                    metaTag.setAttribute('property', value);
                } else {
                    metaTag.setAttribute('name', value);
                }
                document.head.appendChild(metaTag);
            }
            metaTag.setAttribute('content', content);
        };

        // Update or create meta tags
        if (title) {
            updateMetaTag('name', 'title', title);
        }
        if (description) {
            updateMetaTag('name', 'description', description);
        }

        // Open Graph tags
        if (og.title) updateMetaTag('property', 'og:title', og.title);
        if (og.description) updateMetaTag('property', 'og:description', og.description);
        if (og.url) updateMetaTag('property', 'og:url', og.url);
        if (og.siteName) updateMetaTag('property', 'og:site_name', og.siteName);
        if (og.type) updateMetaTag('property', 'og:type', og.type);

        // Twitter Card tags
        if (twitter.card) updateMetaTag('name', 'twitter:card', twitter.card);
        if (twitter.title) updateMetaTag('name', 'twitter:title', twitter.title);
        if (twitter.description) updateMetaTag('name', 'twitter:description', twitter.description);

        // Robots
        if (robotsContent) updateMetaTag('name', 'robots', robotsContent);

        // Canonical link
        if (canonical) {
            let canonicalLink = document.querySelector('link[rel="canonical"]');
            if (!canonicalLink) {
                canonicalLink = document.createElement('link');
                canonicalLink.setAttribute('rel', 'canonical');
                document.head.appendChild(canonicalLink);
            }
            canonicalLink.setAttribute('href', canonical);
        }
    }, [location.pathname, meta]);

    return null;
};

export default MetaTagManager;