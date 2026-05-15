// next.config.ts
import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co", pathname: "/**" },
      { protocol: "https", hostname: "framerusercontent.com", pathname: "/**" },
      { protocol: "https", hostname: "randomuser.me", pathname: "/**" },
    ],
  },
  // Redirections 301 — Phase B refonte massive 2026-05-03
  // Préservent le SEO juice des anciens slugs services
  async redirects() {
    return [
      {
        source: "/services/mvp-proof-of-concept",
        destination: "/services/mvp",
        permanent: true,
      },
      {
        source: "/services/landing-page",
        destination: "/services/developpement-web",
        permanent: true,
      },
      {
        source: "/services/site-vitrine",
        destination: "/services/developpement-web",
        permanent: true,
      },
      {
        source: "/services/site-web-avance",
        destination: "/services/developpement-web",
        permanent: true,
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
