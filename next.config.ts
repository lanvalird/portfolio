import type { NextConfig } from 'next'

import createMDX from "@next/mdx";
 
const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
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

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
