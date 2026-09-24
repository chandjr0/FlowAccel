import { Link } from "@tanstack/react-router";
import { Linkedin, Youtube, Mail, Phone } from "lucide-react";
import { Logo } from "./Logo";

const socialLinkClass =
  "p-2.5 min-h-11 min-w-11 grid place-items-center rounded-md border border-border hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all duration-200 focus-ring";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-[color:var(--ink)]" role="contentinfo">
      <div className="container-90 py-12 sm:py-16">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block focus-ring rounded-md" aria-label="Flowaccel home">
              <Logo />
            </Link>
            <p className="mt-5 max-w-md text-sm text-muted-foreground leading-relaxed">
              Silicon engineering leadership and workflow-acceleration consulting.
              Building the operational capability required to deliver the roadmap.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/company/flowaccel-llc/"
                target="_blank"
                rel="noreferrer"
                aria-label="Flowaccel on LinkedIn"
                className={socialLinkClass}
              >
                <Linkedin className="h-4 w-4" aria-hidden />
              </a>
              <a
                href="https://www.youtube.com/channel/UCr4GhWqTyIY8ZdvY1WySx9g"
                target="_blank"
                rel="noreferrer"
                aria-label="Flowaccel on YouTube"
                className={socialLinkClass}
              >
                <Youtube className="h-4 w-4" aria-hidden />
              </a>
              <a href="tel:9168369272" aria-label="Call Flowaccel at 916-836-9272" className={socialLinkClass}>
                <Phone className="h-4 w-4" aria-hidden />
              </a>
              <a href="mailto:joel@flow-accel.com" aria-label="Email joel@flow-accel.com" className={socialLinkClass}>
                <Mail className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Navigate</h2>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link to="/about-joel" className="hover:text-foreground transition-colors focus-ring rounded-sm inline-block py-1">
                  About Joel
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-foreground transition-colors focus-ring rounded-sm inline-block py-1">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground transition-colors focus-ring rounded-sm inline-block py-1">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:text-foreground transition-colors focus-ring rounded-sm inline-block py-1">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-foreground transition-colors focus-ring rounded-sm inline-block py-1">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Contact</h2>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href="tel:9168369272"
                  className="inline-flex items-center gap-2 min-h-11 hover:text-foreground transition-colors focus-ring rounded-sm"
                >
                  <Phone className="h-3.5 w-3.5" aria-hidden /> 916-836-9272
                </a>
              </li>
              <li>
                <a
                  href="mailto:joel@flow-accel.com"
                  className="inline-flex items-center gap-2 min-h-11 hover:text-foreground transition-colors focus-ring rounded-sm"
                >
                  <Mail className="h-3.5 w-3.5" aria-hidden /> joel@flow-accel.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>© {year} Flowaccel LLC. All rights reserved.</p>
          <p>
            Powered by{" "}
            <a
              href="https://www.involiq.tech/"
              target="_blank"
              rel="noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors focus-ring rounded-sm"
            >
              The Involiq
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
