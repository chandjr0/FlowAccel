import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SiteLayout } from "@/components/site/SiteLayout";
import joelPhoto from "@/assets/joel.png";
import { buildPageMeta, canonicalLink } from "@/lib/seo";

export const Route = createFileRoute("/about-joel")({
  head: () => ({
    meta: buildPageMeta({
      title: "About Joel Jorgensen — Founder, Flowaccel",
      description:
        "25 years in silicon development, 12 technology ramps, and 20+ years improving how engineering organizations work.",
      path: "/about-joel",
      keywords: ["Joel Jorgensen", "silicon engineering leader", "Flowaccel founder"],
    }),
    links: [canonicalLink("/about-joel")],
  }),
  component: AboutJoel,
});

function AboutJoel() {
  const reduce = useReducedMotion();
  const anim = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <SiteLayout>
      <section className="pt-16 sm:pt-24 pb-12 sm:pb-16 relative" aria-labelledby="about-heading">
        <div className="absolute inset-0 circuit-grid opacity-[0.08]" aria-hidden />
        <div className="container-90 relative">
          <motion.div {...anim}>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">About Joel</p>
            <h1 id="about-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] max-w-4xl">
              A career spent building the <span className="text-gradient-teal">operational capability</span> to ship.
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="container-90 grid gap-12 lg:gap-20 lg:grid-cols-[1fr_1.4fr]">
          <div className="relative">
            <div className="lg:sticky lg:top-28 rounded-2xl overflow-hidden border border-border teal-glow bg-card group">
              <img
                src={joelPhoto}
                alt="Joel Jorgensen, Founder of Flowaccel"
                className="w-full h-auto img-zoom"
                loading="lazy"
                decoding="async"
              />
              <div className="p-6 bg-gradient-to-t from-background via-background/80 to-transparent">
                <p className="text-xs uppercase tracking-[0.3em] text-primary">Founder</p>
                <p className="mt-1 text-xl font-semibold">Joel Jorgensen</p>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <a href="tel:9168369272" className="flex items-center gap-2 min-h-11 hover:text-primary transition-colors focus-ring rounded-sm">
                    <Phone className="h-3.5 w-3.5" aria-hidden /> 916-836-9272
                  </a>
                  <a href="mailto:joel@flow-accel.com" className="flex items-center gap-2 min-h-11 hover:text-primary transition-colors focus-ring rounded-sm">
                    <Mail className="h-3.5 w-3.5" aria-hidden /> joel@flow-accel.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 text-base sm:text-lg leading-relaxed text-foreground/90">
            <p className="text-xl sm:text-2xl italic border-l-2 border-primary pl-6 text-foreground">
              "Because the challenge isn't building the roadmap. It's building the
              operational capability required to deliver it."
            </p>
            <p>
              Joel Jorgensen has spent 25 years inside silicon engineering — across
              Requirements, Architecture, Design, Manufacturing, and Engineering
              Operations. Over that time he has led and supported 12 technology
              ramps, in organizations navigating exactly the kind of complexity,
              change, and scale pressure that defines the industry today.
            </p>
            <p>
              For more than 20 of those years, the through-line has been the same:
              improving how engineering organizations actually work. Not the tools.
              Not the process framework of the moment. The underlying work system —
              the way decisions travel, complexity surfaces, and capacity is created
              or lost.
            </p>

            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 pt-4">
              {[
                { n: "25", l: "Years in silicon development" },
                { n: "12", l: "Technology ramps led or supported" },
                { n: "20+", l: "Years improving engineering orgs" },
                { n: "5", l: "Disciplines spanned end-to-end" },
              ].map((c) => (
                <div key={c.l} className="card-interactive rounded-xl border border-border bg-card/40 p-5 sm:p-6">
                  <div className="text-3xl sm:text-4xl font-bold font-display text-gradient-teal">{c.n}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{c.l}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold pt-8">Philosophy</h2>
            <p>
              Programs rarely slip because engineers aren't working hard enough.
              They slip because the work system was designed for a smaller, less
              complex roadmap than the one the organization is now trying to
              deliver. Flowaccel exists to change that.
            </p>
            <p>
              The Silicon Development Flow Architecture™ is the distilled result
              of two decades of that work: a four-stage methodology that makes
              reality visible, complexity manageable, and capacity something you
              intentionally design — not something you hope for.
            </p>

            <div className="pt-6">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 min-h-11 text-sm font-semibold text-primary-foreground"
              >
                Start the conversation <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
