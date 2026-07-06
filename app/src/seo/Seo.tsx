import { useEffect } from "react";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_TITLE,
  OG_LOCALE,
  SITE_NAME,
  absoluteUrl,
} from "./siteConfig";

export interface SeoProps {
  /** Full page title. Falls back to the site default when omitted. */
  title?: string;
  /** Meta description for this page. */
  description?: string;
  /** Route path used to build the canonical URL, e.g. "/classes". */
  path?: string;
  /** Absolute URL of the social-share image. */
  image?: string;
  /** Open Graph type (e.g. "website", "article", "profile"). */
  type?: string;
  /** When true, ask search engines not to index this page. */
  noindex?: boolean;
  /** JSON-LD structured data object(s) to inject for this page. */
  jsonLd?: object | object[];
}

const JSON_LD_ATTR = "data-seo-jsonld";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(
    `link[rel="${rel}"]`
  );
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

export default function Seo({
  title,
  description,
  path = "/",
  image,
  type = "website",
  noindex = false,
  jsonLd,
}: SeoProps) {
  useEffect(() => {
    const pageTitle = title ?? DEFAULT_TITLE;
    const pageDescription = description ?? DEFAULT_DESCRIPTION;
    const canonical = absoluteUrl(path);
    const shareImage = image ?? DEFAULT_OG_IMAGE;
    const robots = noindex
      ? "noindex, nofollow"
      : "index, follow, max-image-preview:large";

    document.title = pageTitle;

    upsertMeta("name", "description", pageDescription);
    upsertMeta("name", "robots", robots);

    upsertMeta("property", "og:title", pageTitle);
    upsertMeta("property", "og:description", pageDescription);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", shareImage);
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:locale", OG_LOCALE);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", pageTitle);
    upsertMeta("name", "twitter:description", pageDescription);
    upsertMeta("name", "twitter:image", shareImage);

    upsertLink("canonical", canonical);

    // Refresh any JSON-LD this component owns.
    document
      .querySelectorAll(`script[${JSON_LD_ATTR}]`)
      .forEach((node) => node.remove());

    if (jsonLd) {
      const blocks = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      blocks.forEach((block) => {
        const script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        script.setAttribute(JSON_LD_ATTR, "");
        script.textContent = JSON.stringify(block);
        document.head.appendChild(script);
      });
    }

    return () => {
      document
        .querySelectorAll(`script[${JSON_LD_ATTR}]`)
        .forEach((node) => node.remove());
    };
  }, [title, description, path, image, type, noindex, jsonLd]);

  return null;
}
