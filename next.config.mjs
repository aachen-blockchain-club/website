/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [],
    domains: [],
  },
  // GitHub Pages deployment configuration
  basePath: isGitHubPages ? '/website' : '',
  assetPrefix: isGitHubPages ? '/website' : '',
};

export default nextConfig;
