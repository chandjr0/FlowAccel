import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { buildPageMeta, canonicalLink } from "@/lib/seo";

export const Route = createFileRoute("/terms-conditions")({
  head: () => ({
    meta: buildPageMeta({
      title: "Terms & Conditions — Flowaccel LLC",
      description: "Terms and conditions for Flowaccel LLC services and website.",
      path: "/terms-conditions",
      keywords: ["terms and conditions", "Flowaccel terms"],
    }),
    links: [canonicalLink("/terms-conditions")],
  }),
  component: Terms,
});

function Terms() {
  return (
    <SiteLayout>
      <section className="pt-16 sm:pt-24 pb-20 sm:pb-28" aria-labelledby="terms-heading">
        <div className="container-90">
          <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Legal</p>
          <h1 id="terms-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="mt-10 sm:mt-12 space-y-8 text-foreground/85 leading-relaxed">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">1. Agreement</h2>
              <p>
                By accessing this website or engaging Flowaccel LLC for consulting services, you agree to the terms
                below. If you do not agree, please do not use the site or engage our services.
              </p>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">2. Services</h2>
              <p>
                Flowaccel LLC provides silicon engineering leadership consulting and workflow-acceleration services.
                Specific scope, deliverables, and terms of any engagement are defined in a separate written agreement.
              </p>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">3. Intellectual Property</h2>
              <p>
                All content, methodology (including the Silicon Development Flow Architecture™), and materials on this
                site are the property of Flowaccel LLC. Reproduction without written permission is not permitted.
              </p>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">4. Confidentiality</h2>
              <p>
                Client information shared during any engagement is treated as confidential and used only for the purpose
                of delivering the engaged services.
              </p>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">5. Limitation of Liability</h2>
              <p>
                Flowaccel LLC's total liability under any engagement is limited to the fees paid for that engagement. We
                do not accept liability for indirect, incidental, or consequential damages.
              </p>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">6. Governing Law</h2>
              <p>These terms are governed by the laws of the State of California, United States.</p>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">7. Contact</h2>
              <p>Questions about these terms: joel@flow-accel.com · 916-836-9272.</p>
            </div>
          </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
