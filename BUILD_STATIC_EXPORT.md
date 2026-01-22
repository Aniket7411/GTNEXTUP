# Build Static Export - Generate `out` Folder

## Configuration Updated ✅

I've enabled static export in `next.config.ts`. Now you need to build:

## Steps to Generate `out` Folder:

### 1. Clean Previous Build (Recommended)
```bash
cd my-app
Remove-Item -Recurse -Force .next
```

### 2. Build Static Export
```bash
npm run build
```

### 3. Find the `out` Folder
After build completes, you'll see:
- `out/` folder created in `my-app/` directory
- Contains all static HTML files ready for upload

### 4. Upload to Hostinger
Upload **all contents** of the `out/` folder to `public_html/` on Hostinger.

## What's in the `out` Folder?

- `index.html` - Home page
- `about-getraise-technologies/` - About page
- `products/` - Products page
- `blog/` - Blog pages
- `assets/` - All static assets
- All other pages as HTML files

## ⚠️ Important Notes:

1. **Dynamic Routes Won't Work**: `/jobs/[id]` routes won't work with static export
2. **No SSR**: You'll lose server-side rendering benefits
3. **Images Unoptimized**: Images won't be optimized (larger file sizes)
4. **Forms Still Work**: EmailJS forms will work (client-side)

## To Revert Back to SSR:

If you need SSR later, comment out these lines in `next.config.ts`:
```typescript
// output: 'export',
// images: {
//   unoptimized: true,
// },
```

Then rebuild and use `.next/` folder instead.
