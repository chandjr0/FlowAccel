import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { useId } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { buildPageMeta, canonicalLink } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: buildPageMeta({
      title: "Contact Flowaccel — Start the Conversation",
      description:
        "Contact Flowaccel LLC. Phone 916-836-9272 · joel@flow-accel.com. Start the conversation on your engineering delivery challenge.",
      path: "/contact",
      keywords: ["contact Flowaccel", "silicon consulting", "engineering leadership consulting"],
    }),
    links: [canonicalLink("/contact")],
  }),
  component: Contact,
});

function Contact() {
  const messageId = useId();
  return (
    <SiteLayout>
      <section className="pt-16 sm:pt-24 pb-10 sm:pb-12" aria-labelledby="contact-page-heading">
        <div className="container-90">
          <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Contact</p>
          <h1 id="contact-page-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05]">
            What's your <span className="text-gradient-teal">challenge?</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Tell us where the pressure is. We'll respond with a short, direct read
            on where the leverage is and what a first engagement could look like.
          </p>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="container-90 grid gap-10 lg:gap-20 lg:grid-cols-[1fr_1.4fr] items-start">
          <div className="space-y-5">
            <a
              href="tel:9168369272"
              className="card-interactive flex items-center gap-4 rounded-xl border border-border bg-card/40 p-5 sm:p-6 group focus-ring"
            >
              <Phone className="h-5 w-5 text-primary shrink-0" aria-hidden />
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Phone</p>
                <p className="text-lg font-medium group-hover:text-primary transition-colors">916-836-9272</p>
              </div>
            </a>
            <a
              href="mailto:joel@flow-accel.com"
              className="card-interactive flex items-center gap-4 rounded-xl border border-border bg-card/40 p-5 sm:p-6 group focus-ring"
            >
              <Mail className="h-5 w-5 text-primary shrink-0" aria-hidden />
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                <p className="text-lg font-medium group-hover:text-primary transition-colors">joel@flow-accel.com</p>
              </div>
            </a>
            <p className="pt-4 text-sm italic text-muted-foreground">
              "Let's chat about what you are seeing."
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-border bg-card/60 p-6 sm:p-8 space-y-5 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.6)]"
            aria-label="Contact Flowaccel"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                ["Name", "name", "text", "name"],
                ["Company", "company", "text", "organization"],
                ["Role", "role", "text", "organization-title"],
                ["Email", "email", "email", "email"],
                ["Phone", "phone", "tel", "tel"],
              ].map(([label, name, type, autoComplete]) => (
                <Field key={name} label={label} name={name} type={type} autoComplete={autoComplete} />
              ))}
              <div>
                <label htmlFor="challenge-area" className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Challenge area
                </label>
                <select id="challenge-area" name="challenge" className="field-input">
                  {[
                    "Roadmap pressure",
                    "Complexity visibility",
                    "AI adoption",
                    "Engineering operations",
                    "Work system design",
                    "Leadership alignment",
                    "Other",
                  ].map((o) => (
                    <option key={o} className="bg-background" value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor={messageId} className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                id={messageId}
                name="message"
                rows={5}
                className="field-input"
                placeholder="What are you seeing?"
              />
            </div>
            <button
              type="submit"
              className="btn-primary inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 min-h-11 text-sm font-semibold text-primary-foreground"
            >
              Start the conversation <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type,
  autoComplete,
}: {
  label: string;
  name: string;
  type: string;
  autoComplete: string;
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </label>
      <input id={id} name={name} type={type} autoComplete={autoComplete} className="field-input" />
    </div>
  );
}
