import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow serving images from the custom domain after deployment
    remotePatterns: [],
    // Serve local images from /public directory — no extra config needed
  },
};

export default nextConfig;
