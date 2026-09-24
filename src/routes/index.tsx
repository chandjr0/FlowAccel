import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight, Target, Cpu, Zap, TrendingUp, Eye, Layers, Gauge, Settings,
  Users, Mail, Phone, Compass, Radar, Rocket,
} from "lucide-react";
import { useId, type ReactNode } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroWafer from "@/assets/hero-wafer.jpg";
import joelPhoto from "@/assets/joel.png";
import { posts } from "@/data/blog";
import { buildPageMeta, canonicalLink } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: buildPageMeta({
      title: "Flowaccel — Design Your Work Like You Design Your Circuits",
      description:
        "Silicon engineering leadership and workflow acceleration. Build the operational capability required to deliver the roadmap.",
      path: "/",
      keywords: ["silicon roadmap", "engineering delivery", "workflow design"],
    }),
    links: [canonicalLink("/")],
  }),
  component: Home,
});

function useFadeUp() {
  const reduce = useReducedMotion();
  if (reduce) {
    return {
      initial: { opacity: 1, y: 0 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0 },
    };
  }
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  };
}

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <WeightSection />
      <BeliefSection />
      <FlowArchitecture />
      <OutcomeSection />
      <WhyFlowAccel />
      <BlogPreview />
      <ChallengeSection />
      <ContactSection />
    </SiteLayout>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative min-h-[calc(100svh-4rem)] sm:min-h-[calc(100vh-5rem)] flex items-center overflow-hidden" aria-labelledby="hero-heading">
      <div className="absolute inset-0">
        <img
          src={heroWafer}
          alt="Silicon wafer close-up representing semiconductor engineering"
          className="h-full w-full object-cover opacity-40"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        <div className="absolute inset-0 circuit-grid opacity-[0.12]" aria-hidden />
      </div>

      <svg className="absolute inset-0 h-full w-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1600 900" aria-hidden>
        <g fill="none" stroke="var(--teal)" strokeWidth="1" opacity="0.35">
          <path className="animate-trace" d="M0 200 L400 200 L440 240 L900 240" />
          <path className="animate-trace" style={{ animationDelay: "1s" }} d="M0 500 L300 500 L340 460 L800 460 L840 500 L1600 500" />
          <path className="animate-trace" style={{ animationDelay: "2s" }} d="M0 720 L500 720 L540 680 L1600 680" />
          <path className="animate-trace" style={{ animationDelay: "0.5s" }} d="M200 0 L200 300 L240 340 L240 900" />
          <path className="animate-trace" style={{ animationDelay: "1.5s" }} d="M1200 0 L1200 400 L1240 440 L1240 900" />
        </g>
      </svg>

      <div className="container-90 relative py-16 sm:py-24">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft" aria-hidden />
            Silicon Engineering Leadership
          </div>
          <h1 id="hero-heading" className="mt-6 sm:mt-8 max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Design Your Work <br className="hidden md:block" />
            <span className="text-gradient-teal">Like You Design</span> Your Circuits.
          </h1>
          <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg md:text-xl text-foreground/85 leading-relaxed">
            We help silicon engineering leaders deliver roadmaps while adapting to AI,
            increasing complexity, and accelerating change.
          </p>
          <p className="mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
            Most roadmaps grow faster than an organization's ability to deliver them.
            We help engineering leaders build the operational capability required to close the gap.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="btn-primary group inline-flex items-center gap-2 rounded-md bg-primary px-5 sm:px-6 py-3.5 min-h-11 text-sm font-semibold text-primary-foreground"
            >
              What's your challenge?
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
            <Link
              to="/about-joel"
              className="btn-secondary inline-flex items-center gap-2 rounded-md border border-border bg-background/40 backdrop-blur px-5 sm:px-6 py-3.5 min-h-11 text-sm font-medium text-foreground"
            >
              Meet Joel
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- WEIGHT / WHY THIS MATTERS ---------- */
function WeightSection() {
  const fadeUp = useFadeUp();
  const items = [
    { icon: Target, label: "Delivering milestones" },
    { icon: Cpu, label: "Product quality" },
    { icon: Zap, label: "Power and performance targets" },
    { icon: TrendingUp, label: "Revenue-driving roadmaps" },
    { icon: Rocket, label: "AI adoption" },
  ];
  return (
    <section className="py-16 sm:py-24 lg:py-28 relative" aria-labelledby="weight-heading">
      <div className="container-90 grid gap-12 lg:gap-24 lg:grid-cols-2 items-center">
        <motion.div {...fadeUp}>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Why This Matters</p>
          <h2 id="weight-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            The Weight <br />Nobody Talks About.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Silicon engineering leaders carry accountability for outcomes that
            depend on hundreds of people, thousands of decisions, and a roadmap
            that never stops moving.
          </p>
          <div className="mt-8 space-y-3">
            {items.map((i, idx) => (
              <motion.div
                key={i.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="card-interactive flex items-center gap-4 rounded-lg border border-border bg-card/40 p-4"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
                  <i.icon className="h-5 w-5" aria-hidden />
                </div>
                <span className="text-sm font-medium">{i.label}</span>
              </motion.div>
            ))}
          </div>
          <p className="mt-10 border-l-2 border-primary pl-5 text-base sm:text-lg italic text-foreground/90 leading-relaxed">
            "Most organizations are still relying on the same ways of working
            they used when the roadmap was smaller and complexity was lower."
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="relative aspect-square max-w-lg mx-auto w-full lg:max-w-none">
          <PressureDiagram />
        </motion.div>
      </div>
    </section>
  );
}

function PressureDiagram() {
  return (
    <div className="relative h-full w-full rounded-2xl border border-border bg-card/40 overflow-hidden teal-glow" role="img" aria-label="Diagram showing roadmap pressure radiating from the center across six operational vectors">
      <div className="absolute inset-0 circuit-grid opacity-20" aria-hidden />
      <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden>
        <defs>
          <radialGradient id="pg" cx="50%" cy="50%">
            <stop offset="0%" stopColor="var(--teal)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--teal)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="140" fill="url(#pg)" />
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const x = 200 + Math.cos(rad) * 140;
          const y = 200 + Math.sin(rad) * 140;
          return (
            <g key={deg}>
              <line x1="200" y1="200" x2={x} y2={y} stroke="var(--teal)" strokeWidth="1" className="animate-trace" style={{ animationDelay: `${i * 0.3}s` }} />
              <circle cx={x} cy={y} r="6" fill="var(--teal-bright)" />
            </g>
          );
        })}
        <circle cx="200" cy="200" r="50" fill="var(--background)" stroke="var(--teal-bright)" strokeWidth="2" />
        <text x="200" y="196" textAnchor="middle" fill="var(--teal-bright)" fontSize="11" fontFamily="Sora" fontWeight="600">ROADMAP</text>
        <text x="200" y="212" textAnchor="middle" fill="var(--muted-foreground)" fontSize="9" fontFamily="Inter">pressure</text>
      </svg>
    </div>
  );
}

/* ---------- BELIEF ---------- */
function BeliefSection() {
  const fadeUp = useFadeUp();
  const beliefs = [
    "Programs rarely slip because engineers aren't working hard enough.",
    "Complexity and change emerge where work happens.",
    "Most roadmaps outpace an organization's ability to deliver them.",
    "Engineering organizations design products, but few intentionally design how product development works.",
    "Organizational capacity must grow faster than complexity.",
  ];
  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-[color:var(--ink)] relative overflow-hidden" aria-labelledby="belief-heading">
      <div className="absolute inset-0 circuit-grid opacity-[0.08]" aria-hidden />
      <div className="container-90 relative">
        <motion.div {...fadeUp} className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Our Core Belief</p>
          <h2 id="belief-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Five convictions that <span className="text-gradient-teal">shape</span> the work.
          </h2>
        </motion.div>

        <div className="mt-12 sm:mt-16 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {beliefs.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-interactive group relative rounded-xl border border-border bg-card/60 p-6 sm:p-8 backdrop-blur"
            >
              <div className="absolute top-0 left-0 h-px w-1/2 bg-gradient-to-r from-primary to-transparent opacity-40 group-hover:opacity-100 transition" aria-hidden />
              <div className="text-primary text-3xl font-display font-bold opacity-40">0{i + 1}</div>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-foreground/90">{b}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FLOW ARCHITECTURE ---------- */
function FlowArchitecture() {
  const fadeUp = useFadeUp();
  const steps = [
    { icon: Eye, title: "Lead From Where The Work Happens", outcome: "Reality becomes visible." },
    { icon: Radar, title: "Make Complexity & Change Visible", outcome: "Complexity becomes manageable." },
    { icon: Layers, title: "Design Work Like Engineers Design Products", outcome: "More capacity is created." },
    { icon: Rocket, title: "Accelerate, Scale, and Adapt", outcome: "Product development can scale and thrive." },
  ];
  return (
    <section className="py-16 sm:py-24 lg:py-28 relative" aria-labelledby="flow-heading">
      <div className="container-90">
        <motion.div {...fadeUp} className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Methodology</p>
          <h2 id="flow-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            The Silicon Development <br />
            <span className="text-gradient-teal">Flow Architecture™</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            A proprietary four-stage methodology that turns operational reality into
            deliverable capacity — engineered for how silicon roadmaps actually behave.
          </p>
        </motion.div>

        <div className="mt-14 sm:mt-20 relative">
          <svg className="absolute top-10 left-0 w-full h-2 hidden lg:block" viewBox="0 0 1000 8" preserveAspectRatio="none" aria-hidden>
            <line x1="0" y1="4" x2="1000" y2="4" stroke="var(--teal)" strokeWidth="1" strokeDasharray="6 4" opacity="0.5" />
            <line x1="0" y1="4" x2="1000" y2="4" stroke="var(--teal-bright)" strokeWidth="2" className="animate-trace" />
          </svg>

          <ol className="grid gap-8 lg:grid-cols-4 list-none p-0 m-0">
            {steps.map((s, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative"
              >
                <div className="grid h-16 w-16 sm:h-20 sm:w-20 place-items-center rounded-xl border border-primary/40 bg-background text-primary relative z-10 mb-6 teal-glow transition-transform duration-300 hover:scale-105">
                  <s.icon className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden />
                  <span className="absolute -top-2 -right-2 grid h-6 w-6 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold leading-snug min-h-[3.5rem] sm:min-h-[4rem]">{s.title}</h3>
                <p className="mt-3 text-sm text-primary italic">{s.outcome}</p>
              </motion.li>
            ))}
          </ol>
        </div>

        <motion.p {...fadeUp} className="mt-14 sm:mt-20 text-center text-lg sm:text-xl md:text-2xl italic text-foreground/80 font-display">
          Get your operations above the <span className="text-gradient-teal not-italic font-semibold">threshold voltage</span>.
        </motion.p>
      </div>
    </section>
  );
}

/* ---------- OUTCOME ---------- */
function OutcomeSection() {
  const fadeUp = useFadeUp();
  const outcomes = [
    { icon: Compass, title: "Better leadership decisions", desc: "Decide with signal, not with noise from a hundred trackers." },
    { icon: Radar, title: "Earlier visibility into complexity and change", desc: "See risk when it emerges, not when it costs the schedule." },
    { icon: Layers, title: "Better work system design", desc: "An operating model architected for how work actually flows." },
    { icon: TrendingUp, title: "Faster organizational learning", desc: "Compound improvement cycle after cycle, ramp after ramp." },
    { icon: Gauge, title: "Improved product delivery", desc: "Milestones met with fewer heroics and better predictability." },
    { icon: Rocket, title: "Scalable product development", desc: "Capacity that grows faster than the complexity growing with it." },
  ];
  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-[color:var(--ink)] relative" aria-labelledby="outcome-heading">
      <div className="absolute inset-0 circuit-grid opacity-[0.06]" aria-hidden />
      <div className="container-90 relative">
        <motion.div {...fadeUp} className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">The Outcome</p>
          <h2 id="outcome-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Create organizational capacity <br />
            <span className="text-gradient-teal">faster than complexity grows.</span>
          </h2>
        </motion.div>

        <div className="mt-12 sm:mt-16 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="card-interactive group relative rounded-xl border border-border bg-card/50 p-6 sm:p-7"
            >
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <o.icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{o.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY FLOWACCEL ---------- */
function WhyFlowAccel() {
  const fadeUp = useFadeUp();
  const credits = [
    { n: "25", l: "Years in silicon development" },
    { n: "12", l: "Technology ramps" },
    { n: "20+", l: "Years improving how engineering orgs work" },
    { n: "5", l: "Disciplines: Requirements, Architecture, Design, Manufacturing, Ops" },
  ];
  return (
    <section className="py-16 sm:py-24 lg:py-28 relative" aria-labelledby="why-heading">
      <div className="container-90 grid gap-12 lg:gap-20 lg:grid-cols-[1fr_1.2fr] items-center">
        <motion.div {...fadeUp} className="relative">
          <div className="relative rounded-2xl overflow-hidden border border-border teal-glow bg-card group">
            <img
              src={joelPhoto}
              alt="Joel Jorgensen, Founder of Flowaccel"
              className="w-full h-auto img-zoom"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/70 to-transparent p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Founder</p>
              <p className="mt-1 text-xl font-semibold">Joel Jorgensen</p>
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeUp}>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Why FlowAccel</p>
          <h2 id="why-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Because the challenge <span className="text-gradient-teal">isn't building</span> the roadmap.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            It's building the operational capability required to deliver it. Flowaccel
            was founded on a career spent inside silicon engineering — across
            Requirements, Architecture, Design, Manufacturing, and Engineering Operations —
            and more than two decades improving how those organizations actually work.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
            {credits.map((c) => (
              <div key={c.l} className="card-interactive rounded-lg border border-border bg-card/40 p-4 sm:p-5">
                <div className="text-3xl sm:text-4xl font-bold font-display text-gradient-teal">{c.n}</div>
                <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground leading-snug">{c.l}</p>
              </div>
            ))}
          </div>
          <Link
            to="/about-joel"
            className="mt-10 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all focus-ring rounded-sm min-h-11"
          >
            More on Joel <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- BLOG PREVIEW ---------- */
function BlogPreview() {
  const fadeUp = useFadeUp();
  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-[color:var(--ink)]" aria-labelledby="blog-heading">
      <div className="container-90">
        <motion.div {...fadeUp} className="flex flex-wrap items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Right From the Blog</p>
            <h2 id="blog-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Field notes for <span className="text-gradient-teal">engineering leaders.</span>
            </h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all focus-ring rounded-sm min-h-11">
            All articles <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
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
                <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-wider text-primary mb-3">
                  {p.categories.map((c) => <span key={c}>{c}</span>).reduce((a, b, idx) => idx === 0 ? [b] : [...a, <span key={`s${idx}`} className="text-muted-foreground" aria-hidden>·</span>, b], [] as ReactNode[])}
                  <span className="text-muted-foreground">· {p.readTime}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold leading-snug group-hover:text-primary transition-colors">
                  <Link to="/blog/$slug" params={{ slug: p.slug }} className="focus-ring rounded-sm">
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{p.excerpt}</p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4 gap-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground min-w-0">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/15 text-primary font-semibold text-[10px]" aria-hidden>JJ</span>
                    <span className="truncate">{p.author} · {p.date}</span>
                  </div>
                  <Link to="/blog/$slug" params={{ slug: p.slug }} className="text-xs font-medium text-primary hover:underline focus-ring rounded-sm shrink-0">
                    Read article →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CHALLENGE ---------- */
function ChallengeSection() {
  const fadeUp = useFadeUp();
  const cards = [
    { icon: Target, title: "Roadmap pressure", desc: "The plan is bigger than the capacity." },
    { icon: Eye, title: "Complexity visibility", desc: "Change is emerging faster than you can see it." },
    { icon: Cpu, title: "AI adoption risk", desc: "New tooling without a new way of working." },
    { icon: Settings, title: "Engineering operations", desc: "The system that runs the system needs work." },
    { icon: Layers, title: "Work system design", desc: "Product is designed; the process is inherited." },
    { icon: Users, title: "Leadership alignment", desc: "Leaders acting on different pictures of reality." },
  ];
  return (
    <section className="py-16 sm:py-24 lg:py-28 relative" aria-labelledby="challenge-heading">
      <div className="container-90">
        <motion.div {...fadeUp} className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Your Challenge</p>
          <h2 id="challenge-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">What's your <span className="text-gradient-teal">challenge?</span></h2>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Every engagement starts with the pressure points you're already carrying.
            Pick the one that's loudest — we'll go from there.
          </p>
        </motion.div>

        <div className="mt-10 sm:mt-14 grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="card-interactive group rounded-xl border border-border bg-card/40 p-5 sm:p-6 cursor-default"
            >
              <c.icon className="h-6 w-6 text-primary" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} className="mt-10 sm:mt-14 flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between gap-6 rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/10 to-transparent p-6 sm:p-8">
          <p className="text-base sm:text-lg md:text-xl italic text-foreground/90">
            "Let's chat about what you are seeing."
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 min-h-11 text-sm font-semibold text-primary-foreground">
            Talk to FlowAccel <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function ContactSection() {
  const fadeUp = useFadeUp();
  const messageId = useId();
  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-[color:var(--ink)]" aria-labelledby="contact-heading">
      <div className="container-90 grid gap-12 lg:gap-24 lg:grid-cols-2 items-start">
        <motion.div {...fadeUp}>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Contact</p>
          <h2 id="contact-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Start the <span className="text-gradient-teal">conversation.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Send a note. We'll respond with a short, direct read on where we
            think the leverage is, and what a first engagement could look like.
          </p>
          <div className="mt-10 space-y-4">
            <a href="tel:9168369272" className="card-interactive flex items-center gap-4 rounded-lg border border-border bg-card/40 p-5 group focus-ring">
              <Phone className="h-5 w-5 text-primary shrink-0" aria-hidden />
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Phone</p>
                <p className="text-base font-medium group-hover:text-primary transition-colors">916-836-9272</p>
              </div>
            </a>
            <a href="mailto:joel@flow-accel.com" className="card-interactive flex items-center gap-4 rounded-lg border border-border bg-card/40 p-5 group focus-ring">
              <Mail className="h-5 w-5 text-primary shrink-0" aria-hidden />
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                <p className="text-base font-medium group-hover:text-primary transition-colors">joel@flow-accel.com</p>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.form
          {...fadeUp}
          onSubmit={(e) => e.preventDefault()}
          className="rounded-2xl border border-border bg-card/60 p-6 sm:p-8 space-y-5 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.6)]"
          aria-label="Contact Flowaccel"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" autoComplete="name" />
            <Field label="Company" name="company" autoComplete="organization" />
            <Field label="Role" name="role" autoComplete="organization-title" />
            <Field label="Email" name="email" type="email" autoComplete="email" />
            <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
            <SelectField label="Challenge area" name="challenge" options={["Roadmap pressure","Complexity visibility","AI adoption","Engineering operations","Work system design","Leadership alignment","Other"]} />
          </div>
          <div>
            <label htmlFor={messageId} className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Message</label>
            <textarea
              id={messageId}
              name="message"
              rows={4}
              className="field-input"
              placeholder="What are you seeing?"
            />
          </div>
          <button type="submit" className="btn-primary inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 min-h-11 text-sm font-semibold text-primary-foreground">
            Start the conversation <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
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

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </label>
      <select id={id} name={name} className="field-input">
        {options.map((o) => (
          <option key={o} className="bg-background" value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
