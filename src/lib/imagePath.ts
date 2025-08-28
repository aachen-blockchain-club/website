/**
 * Get the correct image path for the current environment
 * @param {string} imagePath - The image path (e.g., 'images/profiles/mike.png' or '/images/profiles/mike.png')
 * @returns {string} - The correct path for the current environment
 */
export function getImagePath(imagePath: string): string {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // For GitHub Pages deployment, we need to add the basePath
  // The GITHUB_PAGES environment variable should be set to 'true' as a string
  if (process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES === 'true') {
    return `/website/${cleanPath}`;
  }
  
  // For local development, use absolute path
  return `/${cleanPath}`;
}

export default getImagePath;
