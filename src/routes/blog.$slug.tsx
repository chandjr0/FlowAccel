import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { getPost, posts } from "@/data/blog";
import { SITE, buildPageMeta, canonicalLink } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: buildPageMeta({
          title: "Article not found — Flowaccel",
          description: "The requested article could not be found.",
          path: "/blog",
          noindex: true,
        }),
      };
    }
    const p = loaderData.post;
    const path = `/blog/${p.slug}`;
    const image = typeof p.image === "string" && p.image.startsWith("http") ? p.image : `${SITE.url}${p.image}`;
    return {
      meta: buildPageMeta({
        title: `${p.title} — Flowaccel`,
        description: p.excerpt,
        path,
        type: "article",
        image,
        keywords: p.categories,
      }),
      links: [canonicalLink(path)],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-90 py-32 text-center">
        <h1 className="text-4xl font-bold">Article not found</h1>
        <Link to="/blog" className="mt-6 inline-flex text-primary focus-ring rounded-sm">
          Back to blog
        </Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ error, reset }) => (
    <SiteLayout>
      <div className="container-90 py-32 text-center">
        <h1 className="text-2xl font-bold">Something went wrong</h1>
        <p className="mt-2 text-muted-foreground">
          {error instanceof Error ? error.message : "An unexpected error occurred."}
        </p>
        <button
          type="button"
          onClick={reset}
          className="btn-primary mt-6 rounded-md bg-primary px-4 py-2 min-h-11 text-primary-foreground"
        >
          Retry
        </button>
      </div>
    </SiteLayout>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);
  return (
    <SiteLayout>
      <article>
        <header className="container-90 pt-16 sm:pt-20 pb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 focus-ring rounded-sm min-h-11"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden /> All articles
          </Link>
          <div className="max-w-4xl">
            <div className="text-[10px] uppercase tracking-wider text-primary mb-4">
              {post.categories.join(" · ")} · <span className="text-muted-foreground">{post.readTime}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.05]">{post.title}</h1>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/15 text-primary font-semibold text-xs" aria-hidden>
                JJ
              </span>
              <Link to="/blog/author/joel-jorgensen" className="hover:text-primary transition-colors focus-ring rounded-sm">
                {post.author}
              </Link>
              <span aria-hidden>·</span>
              <time dateTime={post.date}>{post.date}</time>
            </div>
          </div>
        </header>

        <div className="container-90">
          <div className="aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-2xl border border-border">
            <img
              src={post.image}
              alt={`Cover image for ${post.title}`}
              className="h-full w-full object-cover"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>

        <div className="container-90 py-12 sm:py-16">
          <div className="max-w-3xl mx-auto space-y-6 text-base sm:text-lg leading-relaxed text-foreground/90">
            {post.body.map((para: string, i: number) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        <section className="bg-[color:var(--ink)] py-16 sm:py-20" aria-labelledby="related-heading">
          <div className="container-90">
            <h2 id="related-heading" className="text-2xl font-bold mb-8">
              Continue reading
            </h2>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="card-interactive group flex flex-col sm:flex-row gap-5 rounded-xl border border-border bg-card/50 p-5 focus-ring"
                >
                  <img
                    src={p.image}
                    alt={`Cover image for ${p.title}`}
                    loading="lazy"
                    decoding="async"
                    className="h-40 sm:h-24 w-full sm:w-32 shrink-0 rounded-md object-cover img-zoom"
                  />
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-wider text-primary mb-2">{p.readTime}</div>
                    <h3 className="font-semibold leading-snug group-hover:text-primary transition-colors">{p.title}</h3>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-primary">
                      Read <ArrowRight className="h-3 w-3" aria-hidden />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </SiteLayout>
  );
}
