import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['127.0.0.1'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
      '*.svg?url': {
        loaders: ['next-image-loader'],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;