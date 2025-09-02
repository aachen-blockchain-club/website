/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const isCustomDomain = process.env.CUSTOM_DOMAIN === 'true';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [],
    domains: [],
  },
  // Only use basePath for GitHub Pages, not for custom domains
  basePath: (isGitHubPages && !isCustomDomain) ? '/website' : '',
  assetPrefix: (isGitHubPages && !isCustomDomain) ? '/website' : '',
};

export default nextConfig;
