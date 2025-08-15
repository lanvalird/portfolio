import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/lanvalird.png',
        search: '',
      },],
  },

};

export default nextConfig;
