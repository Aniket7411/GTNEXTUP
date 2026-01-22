# Dynamic Meta Tag Management System

This system provides dynamic meta tag management for the Getraise Technologies website, including page titles, descriptions, Open Graph tags, and Twitter Cards.

## Components

### 1. MetaTagManager.jsx
The main component that handles dynamic meta tag updates using `react-helmet`. It automatically updates:
- Page title
- Meta description
- Canonical URL
- Open Graph tags (Facebook)
- Twitter Card tags
- SEO meta tags
- Mobile viewport settings

### 2. MetaTagDebugger.jsx
A development-only component that displays current meta information in a debug panel (bottom-right corner). Only shows in development mode.

## Configuration

### Meta Details Source
Meta information is stored in `src/pages/metadetails.jsx` with the following structure:

```javascript
const metaDetailsMap = {
    "/": {
        metTitle: "Page Title",
        MetaDescription: "Page description for SEO"
    },
    // ... more pages
};
```

### Adding New Pages
To add meta information for a new page:

1. Add the page path and meta data to `metaDetailsMap` in `metadetails.jsx`:
```javascript
"/new-page": {
    metTitle: "New Page Title",
    MetaDescription: "Description for the new page"
}
```

2. The system will automatically pick up the new meta data when the page is visited.

## Features

### Automatic Page Detection
- Uses React Router's `useLocation` hook to detect current page
- Automatically applies appropriate meta tags based on the current route

### Fallback System
- If no specific meta data is found for a page, uses default values
- Default title: "Getraise Technologies"
- Default description: "Looking for affordable & best custom software development services? Our expert software developers with 10+ years of industry knowledge create solutions backed by marketing research"

### SEO Optimization
- Generates canonical URLs automatically
- Includes proper Open Graph tags for social sharing
- Adds Twitter Card meta tags
- Includes robots, author, and other SEO meta tags

### Social Media Integration
- Open Graph tags for Facebook sharing
- Twitter Card tags for Twitter sharing
- Proper image and description handling

## Usage

The MetaTagManager is automatically included in the main App component and works without any additional configuration:

```jsx
// In App.jsx
<MetaTagManager />
```

## Debugging

In development mode, a debug panel will appear in the bottom-right corner showing:
- Current page path
- Applied title
- Applied description (truncated)

## Supported Pages

The system currently supports meta tags for:
- Home page (/)
- About page (/about-getraise-technologies)
- Service pages (digital marketing, web development, UI/UX, etc.)
- Contact page (/contact-getraise-technologies)
- Career page (/career)
- Products page (/products)
- Blog pages
- Legal pages (privacy policy, cookies policy)

## Technical Details

### Dependencies
- `react-helmet`: For managing document head
- `next/navigation`: For location detection

### Browser Support
- Works with all modern browsers
- Graceful fallback for older browsers

### Performance
- Lightweight implementation
- No unnecessary re-renders
- Efficient meta tag updates



