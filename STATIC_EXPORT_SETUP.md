# How to Generate `out` Folder for Static Export

## Current Status

Your Next.js app is configured for **Server-Side Rendering (SSR)**. This creates a `.next` folder when you run `npm run build`.

The `out` folder is **only created** when you configure Next.js for **static export**.

## Option 1: Generate Static Export (for Static Hosting)

If you need static HTML files for `public_html` on Hostinger:

### Step 1: Update `next.config.ts`

Uncomment these lines in `next.config.ts`:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // ← Uncomment this
  images: {
    unoptimized: true,  // ← Uncomment this
  },
};

export default nextConfig;
```

### Step 2: Build Static Export

```bash
cd my-app
npm run build
```

### Step 3: Find the `out` Folder

After building, you'll see:
- `out/` folder (contains all static HTML files)
- Upload contents of `out/` to `public_html/`

### ⚠️ Important Limitations:

1. **No dynamic routes** - `/jobs/[id]` won't work
2. **No SSR** - Loses SEO benefits
3. **No API routes** - If you add any later
4. **Images unoptimized** - Larger file sizes

## Option 2: Keep SSR (Recommended)

If you have Node.js hosting on Hostinger:

### Current Setup (SSR):
- Build creates `.next/` folder
- Upload `.next/`, `public/`, `package.json`, etc.
- Run `npm start` on server
- Full SSR benefits maintained

## Quick Decision Guide:

**Do you have Node.js hosting on Hostinger?**
- ✅ **YES** → Keep current setup, upload `.next/` folder
- ❌ **NO** → Use static export, upload `out/` folder

## To Generate `out` Folder Now:

1. I've updated `next.config.ts` with commented static export config
2. Uncomment the lines in `next.config.ts`
3. Run `npm run build`
4. You'll see `out/` folder appear
