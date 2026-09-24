/** Site-wide SEO configuration and helpers for Flowaccel. */

export const SITE = {
  name: "Flowaccel",
  legalName: "Flowaccel LLC",
  url: "https://flow-accel.com",
  locale: "en_US",
  twitter: "@flowaccel",
  email: "joel@flow-accel.com",
  phone: "916-836-9272",
  defaultTitle: "Flowaccel — Accelerate Workflows for Silicon Engineering Leaders",
  defaultDescription:
    "Flowaccel helps silicon engineering leaders deliver roadmaps while adapting to AI, increasing complexity, and accelerating change.",
  defaultKeywords: [
    "silicon engineering",
    "engineering leadership",
    "workflow acceleration",
    "semiconductor operations",
    "product development",
    "engineering operations",
    "Flowaccel",
    "Joel Jorgensen",
    "Silicon Development Flow Architecture",
  ],
  ogImage: "https://flow-accel.com/og-default.png",
} as const;

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
};

type MetaEntry =
  | { title: string }
  | { name: string; content: string }
  | { property: string; content: string }
  | { charSet: string };

/** Build a complete meta tag set for a page (title, description, OG, Twitter, keywords). */
export function buildPageMeta(page: PageSeo): MetaEntry[] {
  const url = `${SITE.url}${page.path === "/" ? "" : page.path}`;
  const image = page.image ?? SITE.ogImage;
  const keywords = [...SITE.defaultKeywords, ...(page.keywords ?? [])].join(", ");
  const type = page.type ?? "website";

  const meta: MetaEntry[] = [
    { title: page.title },
    { name: "description", content: page.description },
    { name: "keywords", content: keywords },
    { name: "author", content: SITE.legalName },
    { name: "robots", content: page.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large" },
    { property: "og:title", content: page.title },
    { property: "og:description", content: page.description },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:site_name", content: SITE.name },
    { property: "og:locale", content: SITE.locale },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: page.title },
    { name: "twitter:description", content: page.description },
    { name: "twitter:image", content: image },
  ];

  return meta;
}

export function canonicalLink(path: string) {
  const href = `${SITE.url}${path === "/" ? "" : path}`;
  return { rel: "canonical" as const, href };
}
