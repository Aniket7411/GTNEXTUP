# What to Upload to Hostinger

## Step 1: Build Your Application

First, build your Next.js app locally:

```bash
cd my-app
npm run build
```

This creates the `.next` folder with all compiled files.

## Step 2: Create ZIP File

Create a ZIP file with these files and folders:

### ✅ Files to Include:

```
my-app.zip
├── .next/              ← IMPORTANT: Build output folder
├── public/             ← Static assets (images, fonts, etc.)
├── app/                ← Your app directory
├── package.json        ← Dependencies list
├── package-lock.json   ← Lock file
├── next.config.ts      ← Next.js configuration
├── tsconfig.json       ← TypeScript configuration
├── postcss.config.mjs  ← PostCSS config
└── node_modules/       ← OPTIONAL: Can install on server instead
```

### ❌ Files to EXCLUDE (don't upload):

- `.git/` folder
- `node_modules/` (can install on server - saves space)
- `.next/cache/` (will be regenerated)
- Development files (`.md` files, etc.)

## Step 3: Create the ZIP

### Option A: Using PowerShell (Windows)

```powershell
cd my-app
# Exclude node_modules and cache
Compress-Archive -Path app,public,.next,package.json,package-lock.json,next.config.ts,tsconfig.json,postcss.config.mjs -DestinationPath ../my-app-deploy.zip -Force
```

### Option B: Manual ZIP Creation

1. Navigate to `my-app` folder
2. Select these folders/files:
   - `app/`
   - `public/`
   - `.next/`
   - `package.json`
   - `package-lock.json`
   - `next.config.ts`
   - `tsconfig.json`
   - `postcss.config.mjs`
3. Right-click → "Send to" → "Compressed (zipped) folder"
4. Name it `my-app-deploy.zip`

## Step 4: Upload to Hostinger

1. **Go to Hostinger File Manager** or use FTP
2. **Navigate to your hosting root** (usually `public_html` or app directory)
3. **Upload the ZIP file**
4. **Extract the ZIP** in Hostinger file manager

## Step 5: Install Dependencies on Hostinger

After uploading, you need to install dependencies:

### Via SSH (if available):
```bash
cd /path/to/your/app
npm install --production
```

### Via Hostinger Terminal/Console:
- Open Hostinger terminal
- Navigate to your app directory
- Run: `npm install --production`

## Step 6: Configure Node.js on Hostinger

1. **Set Node.js version** (18.x or 20.x)
2. **Set start command:** `npm start`
3. **Set port:** (Check Hostinger panel for assigned port)

## Step 7: Start Your App

Run:
```bash
npm start
```

Your app should be live!

---

## Alternative: Upload Without node_modules

If you exclude `node_modules` from ZIP (recommended):

1. Upload ZIP without `node_modules/`
2. Extract on Hostinger
3. Run `npm install --production` on server
4. Run `npm start`

This saves upload time and bandwidth.

---

## Quick Checklist

- [ ] Built app locally (`npm run build`)
- [ ] Created ZIP with required files
- [ ] Uploaded ZIP to Hostinger
- [ ] Extracted ZIP on server
- [ ] Installed dependencies (`npm install --production`)
- [ ] Configured Node.js (version, start command)
- [ ] Started app (`npm start`)
- [ ] Tested website

---

## Troubleshooting

**If app doesn't start:**
- Check Node.js version (needs 18.x or 20.x)
- Verify `.next` folder uploaded correctly
- Check `package.json` has correct scripts
- Ensure port is configured correctly

**If files are too large:**
- Exclude `node_modules/` from ZIP
- Install dependencies on server instead

---

## File Size Estimate

- With `node_modules/`: ~200-300 MB
- Without `node_modules/`: ~50-100 MB (recommended)
