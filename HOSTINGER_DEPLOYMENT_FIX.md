# Fix Hostinger "Unsupported Framework" Error

## Problem
Hostinger shows: "Unsupported framework or invalid project structure"

## Solution Options

### Option 1: Manual Deployment (Recommended for Hostinger)

Since Hostinger's Git import doesn't auto-detect Next.js, deploy manually:

#### Step 1: Build Your App Locally
```bash
cd my-app
npm run build
```

#### Step 2: Upload to Hostinger via FTP/File Manager

Upload these folders/files to your Hostinger hosting root:

**Required Files:**
- `.next/` folder (entire folder)
- `public/` folder (entire folder)  
- `package.json`
- `package-lock.json`
- `next.config.ts`
- `tsconfig.json`
- `node_modules/` (or install on server)

#### Step 3: Configure on Hostinger

1. **SSH into your Hostinger account** (if available)
2. **Navigate to your project directory**
3. **Install dependencies:**
   ```bash
   npm install --production
   ```
4. **Set up Node.js:**
   - Node.js version: 18.x or 20.x
   - Start command: `npm start`
   - Port: Check Hostinger panel

#### Step 4: Configure Reverse Proxy (if needed)

If Hostinger uses Apache, create `.htaccess`:
```apache
RewriteEngine On
RewriteRule ^(.*)$ http://localhost:3000/$1 [P,L]
```

---

### Option 2: Use Static Export (If Node.js Not Available)

If Hostinger doesn't support Node.js:

1. **Enable static export in `next.config.ts`:**
   ```typescript
   output: 'export',
   images: {
     unoptimized: true,
   },
   ```

2. **Build static:**
   ```bash
   npm run build
   ```

3. **Upload `out/` folder contents to `public_html/`**

⚠️ **Note:** This loses SSR benefits.

---

### Option 3: Deploy to Vercel (Easiest - Recommended)

**Why Vercel is better:**
- ✅ Free forever
- ✅ Auto-detects Next.js
- ✅ Full SSR support
- ✅ Zero configuration
- ✅ Better performance

**Steps:**
1. Push code to GitHub
2. Connect to Vercel (vercel.com)
3. Auto-deploys with SSR
4. Add custom domain (free)

---

## Why Hostinger Git Import Fails

Hostinger's auto-detection looks for:
- Framework in root directory
- Standard project structure
- Specific config files

Your project structure is correct, but Hostinger may not support Next.js App Router auto-detection yet.

---

## Quick Fix: Try This

1. **Ensure `package.json` is in repo root** (not in subfolder)
2. **Make sure `next` is in dependencies** ✅ (it is)
3. **Try manual deployment** (Option 1 above)

---

## Recommendation

**Use Vercel instead:**
- Free
- Made for Next.js
- Works immediately
- Better than Hostinger for Next.js

Your code is ready - just push to GitHub and connect to Vercel!
