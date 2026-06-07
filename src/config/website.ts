/**
 * Centralized configuration file for THAKUR WATERPROOFING.
 * All sections must use these variables instead of hardcoded values.
 */

export const companyName = "THAKUR WATERPROOFING";

export const tagline = "Professional Waterproofing Solutions for Homes, Buildings & Commercial Properties";

export const whatsappLink = "https://wa.link/24b2ra";

export const phone1 = "+918877899355";
export const phone2 = "+919507785879";

// Human-readable formatted phone numbers for display
export const phone1Display = "+91 88778 99355";
export const phone2Display = "+91 95077 85879";
export const email = "rajeevthakur9720@gmail.com";

/**
 * Cloudinary CDN base URL.
 * Replace YOUR_CLOUD_NAME with your actual Cloudinary cloud name
 * after signing up at https://cloudinary.com
 * Example: if your cloud name is "thakurwp", set:
 *   const CLOUDINARY_BASE = "https://res.cloudinary.com/thakurwp";
 */
const CLOUDINARY_BASE = "https://res.cloudinary.com/YOUR_CLOUD_NAME";

export const images = {
  before1: `${CLOUDINARY_BASE}/image/upload/q_auto,f_auto/waterproofing/pic1`,
  after1: `${CLOUDINARY_BASE}/image/upload/q_auto,f_auto/waterproofing/pic2`,
  hero: `${CLOUDINARY_BASE}/image/upload/q_auto,f_auto/waterproofing/pic5`,
  gallery1: `${CLOUDINARY_BASE}/image/upload/q_auto,f_auto/waterproofing/pic6`,
};

export const videos = {
  hero: `${CLOUDINARY_BASE}/video/upload/q_auto/waterproofing/vid1`,
  showcase1: `${CLOUDINARY_BASE}/video/upload/q_auto/waterproofing/vid2`,
  showcase2: `${CLOUDINARY_BASE}/video/upload/q_auto/waterproofing/vid3`,
  showcase3: `${CLOUDINARY_BASE}/video/upload/q_auto/waterproofing/vid4`,
  showcase4: `${CLOUDINARY_BASE}/video/upload/q_auto/waterproofing/vid5`,
};

/**
 * Utility helper — returns full Cloudinary URL with .jpeg extension
 * Falls back to raw path if already a full URL or has extension.
 */
export function getImageUrl(path: string): string {
  if (!path) return "";
  if (path.startsWith("http") || path.includes(".")) return path;
  return `${path}.jpeg`;
}

/**
 * Utility helper — returns full Cloudinary URL with .mp4 extension
 * Falls back to raw path if already a full URL or has extension.
 */
export function getVideoUrl(path: string): string {
  if (!path) return "";
  if (path.startsWith("http") || path.includes(".")) return path;
  return `${path}.mp4`;
}
