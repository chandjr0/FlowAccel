import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { posts } from "@/data/blog";
import { buildPageMeta, canonicalLink } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: buildPageMeta({
      title: "Blog — Flowaccel Field Notes for Engineering Leaders",
      description:
        "Case studies, leadership, and business perspective from Flowaccel on silicon engineering delivery.",
      path: "/blog",
      keywords: ["engineering blog", "silicon case studies", "leadership"],
    }),
    links: [canonicalLink("/blog")],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const cats = ["All", "Case Studies", "Leadership", "Business"];
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? posts : posts.filter((p) => p.categories.includes(active));

  return (
    <SiteLayout>
      <section className="pt-16 sm:pt-24 pb-10 sm:pb-12" aria-labelledby="blog-index-heading">
        <div className="container-90">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Blog</p>
          <h1 id="blog-index-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] max-w-3xl">
            Field notes for <span className="text-gradient-teal">engineering leaders.</span>
          </h1>
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter articles by category">
            {cats.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                aria-pressed={active === c}
                className={`px-4 py-2.5 min-h-11 rounded-full text-xs uppercase tracking-wider border transition-all duration-200 focus-ring ${
                  active === c
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_24px_-6px_var(--teal)]"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28" aria-live="polite">
        <div className="container-90 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article
              key={p.slug}
              className="card-interactive group flex flex-col rounded-xl border border-border bg-card/50 overflow-hidden"
            >
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="block aspect-[16/10] overflow-hidden focus-ring">
                <img
                  src={p.image}
                  alt={`Cover image for ${p.title}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover img-zoom"
                />
              </Link>
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <div className="text-[10px] uppercase tracking-wider text-primary mb-3">
                  {p.categories.join(" · ")} · <span className="text-muted-foreground">{p.readTime}</span>
                </div>
                <h2 className="text-lg sm:text-xl font-semibold leading-snug group-hover:text-primary transition-colors">
                  <Link to="/blog/$slug" params={{ slug: p.slug }} className="focus-ring rounded-sm">
                    {p.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{p.excerpt}</p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground gap-3">
                  <Link
                    to="/blog/author/joel-jorgensen"
                    className="flex items-center gap-2 hover:text-primary transition-colors focus-ring rounded-sm min-w-0"
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/15 text-primary font-semibold text-[10px]" aria-hidden>
                      JJ
                    </span>
                    <span className="truncate">{p.author}</span>
                  </Link>
                  <time dateTime={p.date}>{p.date}</time>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
