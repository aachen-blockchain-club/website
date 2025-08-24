/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [],
    domains: [],
  },
  // Only add basePath for GitHub Pages deployment
  ...(process.env.GITHUB_PAGES && {
    basePath: '/website',
    assetPrefix: '/website/',
  }),
};

export default nextConfig;
