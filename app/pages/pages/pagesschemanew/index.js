// Centralized Schema Exports
export { default as ContactSchema } from './contactschema.jsx';
export { default as AboutSchema } from './aboutuschemajsx';
export { default as CustomSoftwareSchema } from './customsoftware.jsx';
export { default as SalesforceSchema } from './salesforceschema.jsx';
export { default as CloudServiceSchema } from './cludserviceschema.jsx';
export { default as WebAndAppSchema } from './webandappschema.jsx';
export { default as DigitalMarketingSchema } from './digitalmarketingschema.jsx';
export { default as UIUXSchema } from './uiuxschema.jsx';
export { default as ResourceAllocationSchema } from './resourceallocation.jsx';

// Configuration and utilities
export { pageSchemas, getPageSchemas, getAllSchemas } from './schemaConfig.js';
export { default as SchemaGenerator } from './schemaGenerator.js';

// Schema mapping for easy access
export const schemaMap = {
    '/contact-getraise-technologies': 'ContactSchema',
    '/about-getraise-technologies': 'AboutSchema',
    '/custom-software-development-company': 'CustomSoftwareSchema',
    '/salesforce-development-services-india': 'SalesforceSchema',
    '/cloud-computing-services-india': 'CloudServiceSchema',
    '/website-app-development-services': 'WebAndAppSchema',
    '/digital-marketing-services-india': 'DigitalMarketingSchema',
    '/ui-ux-design-services-india': 'UIUXSchema',
    '/resource-allocation-white-label-services': 'ResourceAllocationSchema'
};

// Helper function to get schema component by pathname
export const getSchemaComponent = (pathname) => {
    const schemaName = schemaMap[pathname];
    if (!schemaName) return null;

    // Return the appropriate schema component
    switch (schemaName) {
        case 'ContactSchema':
            return ContactSchema;
        case 'AboutSchema':
            return AboutSchema;
        case 'CustomSoftwareSchema':
            return CustomSoftwareSchema;
        case 'SalesforceSchema':
            return SalesforceSchema;
        case 'CloudServiceSchema':
            return CloudServiceSchema;
        case 'WebAndAppSchema':
            return WebAndAppSchema;
        case 'DigitalMarketingSchema':
            return DigitalMarketingSchema;
        case 'UIUXSchema':
            return UIUXSchema;
        case 'ResourceAllocationSchema':
            return ResourceAllocationSchema;
        default:
            return null;
    }
};


