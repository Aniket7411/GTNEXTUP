# Hostinger Git Deployment Guide

## Current Setup
Your project is in `my-app/` folder. When you push to GitHub, make sure you're pushing from the `my-app/` directory or the entire `gtnext` folder.

## Step-by-Step: Deploy to Hostinger via Git

### Step 1: Prepare Git Repository

**Option A: Push `my-app` folder as root (Recommended)**

```bash
cd my-app
git init
git add .
git commit -m "Initial commit - Next.js app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

**Option B: Push entire `gtnext` folder**

```bash
cd ..
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2: In Hostinger Git Import

1. **Select your repository** (GTnext)
2. **If you see "Unsupported framework" error:**
   - Look for "Advanced Settings" or "Manual Configuration"
   - Select "Node.js" or "Custom Framework"
   - Enter these settings:

**Build Settings:**
- **Build Command:** `npm run build`
- **Start Command:** `npm start`
- **Node Version:** 18.x or 20.x
- **Root Directory:** (leave empty if `my-app` is root, or enter `my-app` if entire repo)

**If your repo structure is:**
```
gtnext/
  my-app/
    package.json
    app/
    ...
```

Then set **Root Directory:** `my-app`

**If your repo structure is:**
```
gtnext/
  package.json
  app/
  ...
```

Then leave **Root Directory** empty.

### Step 3: Environment Variables (if needed)

Hostinger might ask for environment variables. You don't need any for this project (EmailJS uses public keys).

### Step 4: Deploy

Click "Deploy" or "Import" and wait for Hostinger to:
1. Clone the repository
2. Run `npm install`
3. Run `npm run build`
4. Start the app with `npm start`

---

## Troubleshooting

### If Hostinger Still Shows "Unsupported Framework"

**Solution 1: Check Repository Structure**

Make sure `package.json` is in the root of what Hostinger sees:
- If Root Directory is empty → `package.json` should be in repo root
- If Root Directory is `my-app` → `package.json` should be in `my-app/`

**Solution 2: Verify package.json**

Ensure `package.json` has:
- `"next"` in dependencies ✅
- `"scripts"` with `build` and `start` ✅

**Solution 3: Manual Deployment**

If Git import fails completely:
1. Build locally: `npm run build`
2. Upload via FTP/File Manager:
   - `.next/` folder
   - `public/` folder
   - `package.json`, `package-lock.json`
   - `next.config.ts`, `tsconfig.json`
3. SSH into Hostinger
4. Run: `npm install --production && npm start`

---

## Recommended: Use Vercel Instead

Vercel is free and works perfectly with Next.js:
1. Push to GitHub
2. Connect to Vercel
3. Auto-detects Next.js ✅
4. Deploys in 2 minutes

No configuration needed!

---

## Quick Checklist

Before pushing to Git:
- [ ] `package.json` is in correct location
- [ ] `next.config.ts` exists
- [ ] `.gitignore` includes `.next/` and `node_modules/`
- [ ] All code is committed
- [ ] Repository is public or Hostinger has access

After Hostinger import:
- [ ] Check build logs for errors
- [ ] Verify Node.js version (18.x or 20.x)
- [ ] Check if app starts successfully
- [ ] Test your domain
