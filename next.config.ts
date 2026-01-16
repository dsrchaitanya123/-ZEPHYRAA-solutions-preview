import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // If you are using images from external domains (like Unsplash for your blog),
  // you will eventually need to add them here:
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;