import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SSR Configuration (for Vercel/Netlify/Railway)
  // Comment out the lines below if you need static export for static hosting
  // output: 'export',
  // images: {
  //   unoptimized: true,
  // },
  typescript: {
    // Ignore build errors temporarily if type generation fails
    // Remove this after cleaning .next folder
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
