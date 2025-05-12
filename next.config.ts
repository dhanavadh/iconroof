import type { NextConfig } from "next";

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tvss01.iconroof.co.th'
      }
    ]
  }
}

export default nextConfig;
