import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // For Docker deployment
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
