import {
  BUSINESS_INFO,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from "./siteConfig";

// LocalBusiness / dance school schema for the home page.
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "DanceGroup"],
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: "Rose Hips Dance - Belly Dance for the Soul",
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
  logo: DEFAULT_OG_IMAGE,
  founder: {
    "@type": "Person",
    name: BUSINESS_INFO.founder,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS_INFO.streetAddress,
    addressLocality: BUSINESS_INFO.addressLocality,
    addressRegion: BUSINESS_INFO.addressRegion,
    postalCode: BUSINESS_INFO.postalCode,
    addressCountry: BUSINESS_INFO.addressCountry,
  },
  areaServed: [
    { "@type": "City", name: "Ogden" },
    { "@type": "AdministrativeArea", name: "Utah" },
  ],
  knowsAbout: [
    "Belly dance",
    "Middle Eastern dance",
    "Therapeutic movement",
    "Qigong",
    "Somatic healing",
  ],
} as const;

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#organization` },
} as const;

// Courses offered, surfaced on the Classes page.
export const coursesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Course",
      name: "Belly Dance for the Soul",
      description:
        "A 9-week in-person series exploring joy, healing, and self-expression through belly dance and therapeutic movement in a welcoming, community-centered space. All ages, body types, and experience levels welcome.",
      provider: { "@id": `${SITE_URL}/#organization` },
      courseMode: "onsite",
      inLanguage: "en",
      url: absoluteUrl("/classes"),
    },
    {
      "@type": "Course",
      name: "Morning Movement",
      description:
        "An online Qigong-rooted class combining breathing techniques and flowing movements for stress relief, flexibility, circulation, and mental clarity. Accessible to all ages and most health conditions.",
      provider: { "@id": `${SITE_URL}/#organization` },
      courseMode: "online",
      inLanguage: "en",
      url: absoluteUrl("/classes#online"),
    },
  ],
} as const;

/** Build a BreadcrumbList for a page. */
export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export const homeJsonLd = [organizationJsonLd, websiteJsonLd];

export const classesJsonLd = [
  coursesJsonLd,
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Classes", path: "/classes" },
  ]),
];

export const testimonialsBreadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Testimonials", path: "/testimonials" },
]);

export const contactBreadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]);
