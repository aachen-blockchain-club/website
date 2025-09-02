/**
 * Get the correct image path for the current environment
 * @param {string} imagePath - The image path (e.g., 'images/profiles/mike.png' or '/images/profiles/mike.png')
 * @returns {string} - The correct path for the current environment
 */
export function getImagePath(imagePath: string): string {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // Check if we're in production and on GitHub Pages
  const isProduction = process.env.NODE_ENV === 'production';
  const isGitHubPages = process.env.GITHUB_PAGES === 'true' || 
                       (typeof window !== 'undefined' && window.location.hostname.includes('github.io'));
  const isCustomDomain = process.env.CUSTOM_DOMAIN === 'true' ||
                        (typeof window !== 'undefined' && window.location.hostname === 'aachen-blockchain.de');
  
  // For GitHub Pages deployment with custom domain, use root path
  if (isProduction && isCustomDomain) {
    return `/${cleanPath}`;
  }
  
  // For GitHub Pages deployment without custom domain, use basePath
  if (isProduction && isGitHubPages && !isCustomDomain) {
    return `/website/${cleanPath}`;
  }
  
  // For local development, use absolute path
  return `/${cleanPath}`;
}

export default getImagePath;
