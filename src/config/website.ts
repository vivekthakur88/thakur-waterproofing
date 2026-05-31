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

export const images = {
  before1: "/images/pic1",
  after1: "/images/pic2",
  hero: "/images/pic5",
  gallery1: "/images/pic6"
};

export const videos = {
  hero: "/videos/vid1",
  showcase1: "/videos/vid2",
  showcase2: "/videos/vid3",
  showcase3: "/videos/vid4",
  showcase4: "/videos/vid5"
};

/**
 * Utility helper to append the correct image extension (.jpeg)
 */
export function getImageUrl(path: string): string {
  if (!path) return "";
  if (path.startsWith("http") || path.includes(".")) return path;
  return `${path}.jpeg`;
}

/**
 * Utility helper to append the correct video extension (.mp4)
 */
export function getVideoUrl(path: string): string {
  if (!path) return "";
  if (path.startsWith("http") || path.includes(".")) return path;
  return `${path}.mp4`;
}
