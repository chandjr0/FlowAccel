import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { buildPageMeta, canonicalLink } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: buildPageMeta({
      title: "Privacy Policy — Flowaccel LLC",
      description:
        "Privacy policy for Flowaccel LLC — how we handle information collected through our website and engagements.",
      path: "/privacy-policy",
      keywords: ["privacy policy", "data protection"],
    }),
    links: [canonicalLink("/privacy-policy")],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <SiteLayout>
      <section className="pt-16 sm:pt-24 pb-20 sm:pb-28" aria-labelledby="privacy-heading">
        <div className="container-90">
          <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Legal</p>
          <h1 id="privacy-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="mt-10 sm:mt-12 space-y-8 text-foreground/85 leading-relaxed">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">Information We Collect</h2>
              <p>
                We collect only information you voluntarily provide through the contact form (name, company, role,
                email, phone, message) and standard server logs (IP, browser, page requests).
              </p>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">How We Use It</h2>
              <p>
                To respond to your inquiry, to deliver services you engage us to provide, and to improve our website.
                We do not sell or rent personal information.
              </p>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">Cookies</h2>
              <p>
                We use minimal cookies required for basic site function and, if enabled, aggregate analytics. You may
                disable cookies in your browser at any time.
              </p>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">Sharing</h2>
              <p>
                We do not share personal information with third parties except (a) trusted service providers acting on
                our behalf under confidentiality, or (b) as required by law.
              </p>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">Data Retention</h2>
              <p>
                We retain personal information only as long as needed to fulfill the purpose for which it was collected,
                or as required by law.
              </p>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">Your Rights</h2>
              <p>
                You may request access to, correction of, or deletion of your personal information at any time by
                contacting joel@flow-accel.com.
              </p>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">Contact</h2>
              <p>joel@flow-accel.com · 916-836-9272 · Flowaccel LLC.</p>
            </div>
          </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
