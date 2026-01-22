# Deployment Guide for Hostinger

## Important: Next.js Requirements

Your Next.js application uses **Server-Side Rendering (SSR)**, which requires **Node.js hosting**. Regular static hosting (public_html) will NOT work.

## Option 1: Hostinger Node.js Hosting (Recommended)

If your Hostinger plan supports Node.js:

### Steps:

1. **Build your application:**
   ```bash
   cd my-app
   npm run build
   ```

2. **Upload these files/folders to Hostinger:**
   - `.next/` folder (build output)
   - `public/` folder (static assets)
   - `package.json`
   - `package-lock.json`
   - `next.config.ts`
   - `tsconfig.json`
   - `node_modules/` (or run `npm install` on server)

3. **On Hostinger, set up:**
   - Node.js version: 18.x or 20.x
   - Start command: `npm start`
   - Port: Usually provided by Hostinger (check your hosting panel)

4. **Create `.htaccess` or configure reverse proxy** (if needed):
   ```
   RewriteEngine On
   RewriteRule ^(.*)$ http://localhost:3000/$1 [P,L]
   ```

## Option 2: Static Export (Limited - No SSR)

If you only have static hosting, you can export as static HTML (but you'll lose SSR benefits):

### Configure Static Export:

1. **Update `next.config.ts`:**
   ```typescript
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   };

   export default nextConfig;
   ```

2. **Build static export:**
   ```bash
   npm run build
   ```

3. **Upload to `public_html`:**
   - Upload the entire `out/` folder contents to `public_html/`
   - All files from `out/` should be in the root of `public_html/`

### ⚠️ Limitations of Static Export:
- No server-side rendering (SEO impact)
- No dynamic routes with `[id]` (like `/jobs/[id]`)
- No API routes
- Some Next.js features won't work

## Option 3: Deploy to Vercel (Easiest - Recommended)

Vercel is made by Next.js creators and offers free hosting:

1. **Push code to GitHub**
2. **Connect to Vercel** (vercel.com)
3. **Auto-deploy** - Vercel handles everything

## Option 4: Other Platforms

- **Netlify** - Supports Next.js
- **Railway** - Node.js hosting
- **Render** - Free tier available
- **DigitalOcean App Platform**

## Recommended: Check Your Hostinger Plan

1. Log into Hostinger control panel
2. Check if you have "Node.js" or "Application Hosting" option
3. If yes → Use Option 1
4. If no → Consider Option 3 (Vercel) or upgrade Hostinger plan

## Files to Upload (Node.js Hosting):

```
my-app/
├── .next/          ← Build output (IMPORTANT)
├── public/         ← Static assets
├── node_modules/   ← Or install on server
├── package.json
├── package-lock.json
├── next.config.ts
└── tsconfig.json
```

## Quick Start Commands:

```bash
# On your local machine
npm run build

# On Hostinger server (if Node.js available)
npm install --production
npm start
```

## Need Help?

- Check Hostinger documentation for Node.js setup
- Contact Hostinger support to confirm Node.js availability
- Consider Vercel for easiest Next.js deployment
