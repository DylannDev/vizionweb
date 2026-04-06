// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co", pathname: "/**" },
      { protocol: "https", hostname: "framerusercontent.com", pathname: "/**" },
      { protocol: "https", hostname: "randomuser.me", pathname: "/**" },
    ],
  },
};

export default nextConfig;
