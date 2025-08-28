/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [],
    domains: [],
  },
  // GitHub Pages deployment configuration
  basePath: process.env.GITHUB_PAGES ? '/website' : '',
  assetPrefix: process.env.GITHUB_PAGES ? '/website' : '',
};

export default nextConfig;
