import { getPageSchemas, getAllSchemas } from './schemaConfig.js';

// Dynamic Schema Generator Utility
export class SchemaGenerator {
    constructor() {
        this.baseUrl = 'https://getraisetechnologies.com';
    }

    // Generate schemas for a specific pathname
    generateSchemas(pathname) {
        const schemas = getAllSchemas(pathname);
        return schemas.length > 0 ? schemas : this.getDefaultSchema();
    }

    // Get default schema for unknown pages
    getDefaultSchema() {
        return [{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Getraise Technologies",
            "url": this.baseUrl,
            "logo": `${this.baseUrl}/assets/brandLogo-BYO1j6iC.png`,
            "description": "Looking for affordable & best custom software development services? Our expert software developers with 10+ years of industry knowledge create solutions backed by marketing research",
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "telephone": "+91-9374455555",
                "email": "info@getraisetechnologies.com",
                "availableLanguage": ["English", "Hindi"]
            },
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
            }
        }];
    }

    // Inject schemas into the DOM
    injectSchemas(pathname) {
        const schemas = this.generateSchemas(pathname);
        const schemaScriptTag = document.getElementById("dynamic-schema");

        if (schemaScriptTag && schemas.length > 0) {
            schemaScriptTag.innerHTML = JSON.stringify(
                schemas.length === 1 ? schemas[0] : schemas
            );
        }
    }

    // Update schemas when route changes
    updateSchemas(pathname) {
        this.injectSchemas(pathname);
    }
}

// Create global instance only in the browser
if (typeof window !== 'undefined') {
    window.schemaGenerator = new SchemaGenerator();
}

// Export for use in other files
export default SchemaGenerator;


