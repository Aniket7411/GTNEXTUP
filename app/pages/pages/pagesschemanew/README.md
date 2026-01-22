# Dynamic Page Schema System

This directory contains a comprehensive dynamic schema system for Getraise Technologies website pages. The system provides structured data (JSON-LD) for better SEO and search engine understanding.

## 📁 File Structure

```
src/pages/pagesschema/
├── index.js                    # Main exports and schema mapping
├── schemaConfig.js             # Centralized schema configuration
├── schemaGenerator.js          # Dynamic schema generator utility
├── contactschema.jsx           # Contact page schema component
├── aboutuschemajsx            # About page schema component
├── customsoftware.jsx         # Custom software development schema
├── salesforceschema.jsx       # Salesforce development schema
├── cludserviceschema.jsx      # Cloud services schema
├── webandappschema.jsx        # Website & app development schema
├── digitalmarketingschema.jsx # Digital marketing schema
├── uiuxschema.jsx             # UI/UX design schema
├── resourceallocation.jsx     # Resource allocation schema
└── README.md                  # This documentation
```

## 🚀 Features

### 1. **Centralized Configuration**
- All schemas are defined in `schemaConfig.js`
- Easy to maintain and update
- Consistent structure across all pages

### 2. **Dynamic Schema Generation**
- Automatically generates appropriate schemas based on current pathname
- Supports multiple schema types per page (Organization, Service, WebPage, BreadcrumbList)
- Fallback to default schema for unknown pages

### 3. **React Components**
- Each schema is a reusable React component
- Proper JSX format with `dangerouslySetInnerHTML`
- Easy to integrate into any React page

### 4. **SEO Optimized**
- Structured data for better search engine understanding
- Breadcrumb navigation for better UX
- Service catalogs for detailed service information

## 📋 Supported Pages

| Page | Path | Schema Types |
|------|------|--------------|
| Home | `/` | Organization, WebPage, BreadcrumbList |
| About | `/about-getraise-technologies` | AboutPage, BreadcrumbList |
| Contact | `/contact-getraise-technologies` | ContactPage, BreadcrumbList |
| Digital Marketing | `/digital-marketing-services-india` | Service, WebPage, BreadcrumbList |
| Web & App Dev | `/website-app-development-services` | Service, WebPage, BreadcrumbList |
| UI/UX Design | `/ui-ux-design-services-india` | Service, WebPage, BreadcrumbList |
| Custom Software | `/custom-software-development-company` | Service, WebPage, BreadcrumbList |
| Cloud Services | `/cloud-computing-services-india` | Service, WebPage, BreadcrumbList |
| Salesforce | `/salesforce-development-services-india` | Service, WebPage, BreadcrumbList |
| Resource Allocation | `/resource-allocation-white-label-services` | Service, WebPage, BreadcrumbList |
| Products | `/products` | WebPage, BreadcrumbList |

## 🔧 Usage

### 1. **Using Schema Components in React**

```jsx
import { ContactSchema, AboutSchema } from './pagesschema';

function ContactPage() {
  return (
    <div>
      <ContactSchema />
      {/* Your page content */}
    </div>
  );
}
```

### 2. **Using Dynamic Schema Generator**

```javascript
import { SchemaGenerator } from './pagesschema/schemaGenerator.js';

const generator = new SchemaGenerator();
generator.injectSchemas('/contact-getraise-technologies');
```

### 3. **Using Configuration Directly**

```javascript
import { getPageSchemas, getAllSchemas } from './pagesschema/schemaConfig.js';

const schemas = getPageSchemas('/about-getraise-technologies');
const allSchemas = getAllSchemas('/about-getraise-technologies');
```

## 🎯 Schema Types

### **Organization Schema**
- Company information
- Contact details
- Social media links
- Address information

### **Service Schema**
- Service type and description
- Provider information
- Service catalog with offerings
- Area served

### **WebPage Schema**
- Page title and description
- URL and language
- Part of website structure

### **BreadcrumbList Schema**
- Navigation hierarchy
- Position-based structure
- SEO-friendly navigation

### **AboutPage Schema**
- About page specific information
- Company details and history
- Founder information

### **ContactPage Schema**
- Contact-specific information
- Contact points and methods
- Support information

## 🔄 Dynamic Updates

The system automatically updates schemas when:
- Page loads initially
- User navigates between pages
- URL changes (SPA routing)

## 📈 SEO Benefits

1. **Rich Snippets**: Enhanced search results with structured data
2. **Better Indexing**: Search engines understand page content better
3. **Breadcrumb Navigation**: Improved user experience in search results
4. **Service Information**: Detailed service catalogs for better visibility
5. **Local SEO**: Address and contact information for local search

## 🛠️ Customization

### Adding New Pages

1. Add schema configuration to `schemaConfig.js`
2. Create React component in appropriate file
3. Update `schemaMap` in `index.js`
4. Add to dynamic schemas in `index.html`

### Modifying Existing Schemas

1. Update the configuration in `schemaConfig.js`
2. Update the corresponding React component
3. Test the changes

## 📝 Best Practices

1. **Keep schemas up-to-date** with actual page content
2. **Use consistent naming** across all schema files
3. **Validate schemas** using Google's Rich Results Test
4. **Test thoroughly** after making changes
5. **Monitor performance** and search console for issues

## 🔍 Testing

Use these tools to validate your schemas:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [Google Search Console](https://search.google.com/search-console)

## 📞 Support

For questions or issues with the schema system, please contact the development team or create an issue in the project repository.


