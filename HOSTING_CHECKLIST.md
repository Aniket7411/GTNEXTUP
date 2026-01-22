# Hostinger Deployment Checklist

## Before Deployment

- [ ] Check if your Hostinger plan supports Node.js
- [ ] Verify Node.js version (18.x or 20.x recommended)
- [ ] Ensure you have SSH access or file manager access

## Build Process

1. **Build the application:**
   ```bash
   cd my-app
   npm run build
   ```

2. **Test locally:**
   ```bash
   npm start
   ```
   Visit http://localhost:3000 to verify everything works

## What to Upload to Hostinger

### If Node.js Hosting Available:

Upload these to your hosting root (usually `public_html` or app directory):

```
✅ .next/              (entire folder)
✅ public/             (entire folder)
✅ package.json
✅ package-lock.json
✅ next.config.ts
✅ tsconfig.json
✅ node_modules/      (or run npm install on server)
```

### If Only Static Hosting:

1. Configure static export in `next.config.ts`
2. Run `npm run build`
3. Upload contents of `out/` folder to `public_html/`

## Server Configuration

### Node.js Hosting:
- **Start Command:** `npm start`
- **Port:** Check Hostinger panel (usually auto-assigned)
- **Node Version:** 18.x or 20.x

### Environment Variables:
- No sensitive keys needed (EmailJS uses public keys)
- All config is in code

## Post-Deployment

- [ ] Test all pages load correctly
- [ ] Verify images load from `/assets/`
- [ ] Check forms submit correctly
- [ ] Test blog routes
- [ ] Verify SEO metadata

## Troubleshooting

**404 Errors:**
- Check `.next` folder uploaded correctly
- Verify `public` folder is in root

**Images not loading:**
- Ensure `public/assets/` folder uploaded
- Check image paths use `/assets/` (absolute paths)

**Build errors:**
- Run `npm install` on server
- Check Node.js version matches local
