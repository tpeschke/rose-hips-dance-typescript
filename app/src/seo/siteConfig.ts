// Central SEO configuration for Rose Hips Dance.
// Update SITE_URL to the studio's live domain if it changes; it is used to build
// canonical URLs, Open Graph URLs, the sitemap, and structured data.
export const SITE_URL = "https://rosehipsdance.com";

export const SITE_NAME = "Rose Hips Dance";

export const DEFAULT_TITLE =
  "Rose Hips Dance | Belly Dance & Healing Movement in Ogden, UT";

export const DEFAULT_DESCRIPTION =
  "Rose Hips Dance offers belly dance and therapeutic movement classes in Ogden, Utah and online. Where Middle Eastern dance meets modern healing, gently restoring your body, your confidence, and your connection to your aliveness.";

// Absolute URL to the default social-share image (lives in app/public).
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const OG_LOCALE = "en_US";

// Studio details used to build LocalBusiness structured data.
export const BUSINESS_INFO = {
  founder: "Tiarra Anaya",
  addressLocality: "Ogden",
  addressRegion: "UT",
  postalCode: "84401",
  streetAddress: "2580 Jefferson Ave",
  addressCountry: "US",
};

/** Build an absolute URL from a route path (e.g. "/classes"). */
export function absoluteUrl(path = "/"): string {
  if (!path.startsWith("/")) {
    path = `/${path}`;
  }
  return `${SITE_URL}${path === "/" ? "" : path}`;
}
