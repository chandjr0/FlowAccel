import { Link } from "@tanstack/react-router";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-[0_8px_30px_-18px_rgba(0,0,0,0.55)]"
          : "bg-background/40 backdrop-blur-sm"
      }`}
    >
      <div className="container-90 flex h-16 sm:h-20 items-center justify-between gap-4">
        <Link to="/" className="shrink-0 focus-ring rounded-md" aria-label="Flowaccel home">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-sm" aria-label="Primary">
          <NavDropdown
            label="Overview"
            items={[
              { to: "/about-joel", label: "About Joel" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
            ]}
          />
          <NavDropdown
            label="Documents"
            items={[
              { to: "/terms-conditions", label: "Terms and Conditions" },
              { to: "/privacy-policy", label: "Privacy Policy" },
            ]}
          />
          <Link
            to="/contact"
            className="btn-primary ml-3 inline-flex items-center rounded-md bg-primary px-4 py-2.5 min-h-11 font-medium text-primary-foreground"
          >
            What's your challenge?
          </Link>
        </nav>

        <button
          type="button"
          className="lg:hidden p-2.5 min-h-11 min-w-11 rounded-md hover:bg-muted transition-colors focus-ring"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls={menuId}
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>

      <div
        id={menuId}
        className={`lg:hidden border-t border-border bg-background/98 backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-out overflow-hidden ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 border-t-0"
        }`}
        hidden={!open}
      >
        <div className="container-90 py-4 flex flex-col gap-1 text-sm">
          {[
            { to: "/about-joel", label: "About Joel" },
            { to: "/blog", label: "Blog" },
            { to: "/contact", label: "Contact" },
            { to: "/terms-conditions", label: "Terms & Conditions" },
            { to: "/privacy-policy", label: "Privacy Policy" },
          ].map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className="py-3 min-h-11 border-b border-border/50 hover:text-primary transition-colors focus-ring rounded-sm"
              onClick={() => setOpen(false)}
            >
              {i.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-primary mt-3 inline-flex justify-center rounded-md bg-primary px-4 py-3 min-h-11 font-medium text-primary-foreground"
            onClick={() => setOpen(false)}
          >
            What's your challenge?
          </Link>
        </div>
      </div>
    </header>
  );
}

function NavDropdown({ label, items }: { label: string; items: { to: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="inline-flex items-center gap-1 px-3 py-2.5 min-h-11 rounded-md text-foreground/80 hover:text-foreground transition-colors focus-ring"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
      >
        {label}{" "}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      <div
        id={menuId}
        role="menu"
        className={`absolute top-full left-0 pt-2 min-w-[220px] transition-all duration-200 origin-top ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
        hidden={!open}
      >
        <div className="bg-card/95 backdrop-blur-xl border border-border rounded-xl shadow-2xl overflow-hidden ring-1 ring-primary/10">
          {items.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              role="menuitem"
              className="block px-4 py-3 text-sm hover:bg-muted hover:text-primary transition-colors focus-ring"
              onClick={() => setOpen(false)}
            >
              {i.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
