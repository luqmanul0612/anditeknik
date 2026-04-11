import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      // Rule 1: Use SVGR for standard SVG imports
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
      // Rule 2: Support ?url query for static asset paths
      '*.svg?url': {
        loaders: ['next-image-loader'],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;