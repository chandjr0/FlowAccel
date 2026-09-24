import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { posts } from "@/data/blog";
import { buildPageMeta, canonicalLink } from "@/lib/seo";

export const Route = createFileRoute("/blog/author/joel-jorgensen")({
  head: () => ({
    meta: buildPageMeta({
      title: "Joel Jorgensen — Author at Flowaccel",
      description: "Articles by Joel Jorgensen, founder of Flowaccel LLC.",
      path: "/blog/author/joel-jorgensen",
      keywords: ["Joel Jorgensen", "author", "engineering leadership"],
    }),
    links: [canonicalLink("/blog/author/joel-jorgensen")],
  }),
  component: AuthorPage,
});

function AuthorPage() {
  return (
    <SiteLayout>
      <section className="pt-16 sm:pt-24 pb-10 sm:pb-12" aria-labelledby="author-heading">
        <div className="container-90">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Author</p>
          <div className="flex items-center gap-4 sm:gap-5">
            <span
              className="grid h-14 w-14 sm:h-16 sm:w-16 place-items-center rounded-full bg-primary/15 text-primary font-semibold text-xl shrink-0"
              aria-hidden
            >
              JJ
            </span>
            <div>
              <h1 id="author-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Joel Jorgensen
              </h1>
              <p className="mt-2 text-muted-foreground">Founder, Flowaccel LLC</p>
            </div>
          </div>
          <p className="mt-8 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            25 years in silicon development. 12 technology ramps. Two decades
            improving how engineering organizations actually work.
          </p>
        </div>
      </section>

      <section className="pb-20 sm:pb-28" aria-label="Articles by Joel Jorgensen">
        <div className="container-90 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
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
              <div className="p-5 sm:p-6">
                <div className="text-[10px] uppercase tracking-wider text-primary mb-3">
                  {p.categories.join(" · ")} · <span className="text-muted-foreground">{p.readTime}</span>
                </div>
                <h2 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  <Link to="/blog/$slug" params={{ slug: p.slug }} className="focus-ring rounded-sm">
                    {p.title}
                  </Link>
                </h2>
                <p className="mt-2 text-xs text-muted-foreground">
                  <time dateTime={p.date}>{p.date}</time>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
