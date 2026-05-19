import { motion } from 'motion/react';
import { useEffect, type ReactNode } from 'react';
import VisibilitySystemMap from '../components/VisibilitySystemMap';
import { PageTechnicalChrome } from '../components/PageTechnicalChrome';
import { ScrollProgress } from '../components/ScrollProgress';
import { ScrollReveal } from '../components/ScrollReveal';
import { ShutterWipe } from '../components/ShutterWipe';
import { SmoothCursor } from '../components/SmoothCursor';

const principles = [
  ['EVIDENCE FIRST', 'Decisions should be driven by data, not assumptions.'],
  ['SYSTEMS OVER CHECKLISTS', 'I build durable systems that compound over time.'],
  ['SEARCH IS STRUCTURE', 'Visibility depends on whether a site can be crawled, understood, and trusted.'],
  ['IMPACT > ACTIVITY', 'The goal is measurable movement, not more output.'],
];

const experience = [
  {
    role: 'FOUNDER',
    meta: 'VOID Agency · Dec 2025 — Present',
    copy: 'Built an SEO and web systems agency generating $50K+ in collected revenue through technical SEO audits, website builds, local search strategy, and AI-search visibility work.',
  },
  {
    role: 'AI PRODUCT MANAGER INTERN',
    meta: 'Chegg · Office of the Chief Product Officer · May 2026 — Aug 2026',
    copy: 'Working on AI product strategy, research, competitive analysis, user workflows, prototype review, and AI-enabled student experiences.',
  },
  {
    role: 'SEO & DIGITAL MARKETING ANALYTICS INTERN',
    meta: 'B2B Semiconductor Company · May 2026 — Present',
    copy: 'Supporting website launch analytics, GA4, Google Search Console, SEO baselines, traffic analysis, keyword performance, and prioritized recommendations.',
  },
  {
    role: 'STUDENT ASSOCIATE',
    meta: 'Jon Brumley Texas Venture Labs · Sep 2025 — Present',
    copy: 'Advising early-stage companies on market validation, customer discovery, competitive positioning, unit economics, go-to-market strategy, and financial models.',
  },
];

const skills = [
  ['TECHNICAL SEO', 90],
  ['AI SEARCH VISIBILITY', 87],
  ['AI PRODUCT STRATEGY', 83],
  ['CRAWL & INDEXATION', 82],
  ['DATA ANALYSIS', 76],
  ['PYTHON & AUTOMATION', 83],
  ['FINANCIAL MODELING', 78],
];

const workCards = [
  ['TECHNICAL SEO\nSYSTEMS', 'Crawlability, indexation, metadata, links, and performance.', 'sitemap'],
  ['AI SEARCH\nVISIBILITY', 'Make brands easier to retrieve, cite, and trust.', 'search'],
  ['AI PRODUCT\nSTRATEGY', 'Research, workflows, prototypes, and student AI experiences.', 'cube'],
  ['FINANCE & SEARCH\nANALYTICS', 'Market models, GA4/GSC analysis, and decision-ready recommendations.', 'bars'],
];

const metrics = [
  ['$50K+', 'Collected revenue through VOID Agency'],
  ['SCRAPER ATLAS', 'Python + SQLite audit console'],
  ['CHEGG', 'AI product strategy'],
  ['GA4 + GSC', 'Search analytics and launch tracking'],
  ['TEXAS VENTURE LABS', 'Market validation and financial models'],
];

function DarkNoise() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 opacity-[0.055]"
      style={{
        backgroundImage:
          'radial-gradient(circle at 22% 28%, rgba(232,230,223,0.24) 0 1px, transparent 1.6px), radial-gradient(circle at 70% 64%, rgba(232,230,223,0.16) 0 1px, transparent 1.7px)',
        backgroundSize: '17px 21px, 25px 31px',
      }}
    />
  );
}

function NavLink({ href, active, children }: { href: string; active?: boolean; children: ReactNode }) {
  return (
    <a
      href={href}
      data-cursor-text={typeof children === 'string' ? children : 'VIEW'}
      className={`hover-target pb-2 transition-colors ${active ? 'border-b border-[#e8e6df] text-[#e8e6df]' : 'border-b border-transparent text-[#e8e6df]/58 hover:text-[#e8e6df]'}`}
    >
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return <h2 className="mb-9 text-[0.72rem] uppercase tracking-[0.28em] text-[#e8e6df]/46">{children}</h2>;
}

function SkillBars() {
  return (
    <div className="space-y-6">
      {skills.map(([label, value], index) => (
        <div key={label}>
          <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-[#e8e6df]/58">
            <span>{label}</span>
            <span>{value}%</span>
          </div>
          <div className="relative h-px bg-[#e8e6df]/14">
            <motion.div
              className="absolute left-0 top-0 h-px origin-left bg-[#e8e6df]/38"
              style={{ width: `${value}%` }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-12%' }}
              transition={{ duration: 1.1, delay: 0.08 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.span
              className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border border-[#e8e6df]/70 bg-[#080808]"
              style={{ left: `calc(${value}% - 5px)` }}
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-12%' }}
              transition={{ duration: 0.7, delay: 0.42 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function WorkIcon({ type }: { type: string }) {
  const common = 'fill-none stroke-current';
  if (type === 'sitemap') {
    return (
      <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden="true">
        <rect className={common} x="22" y="8" width="20" height="12" />
        <rect className={common} x="8" y="44" width="16" height="12" />
        <rect className={common} x="24" y="44" width="16" height="12" />
        <rect className={common} x="40" y="44" width="16" height="12" />
        <path className={common} d="M32 20 V33 M16 44 V33 H48 V44 M32 33 V44" />
      </svg>
    );
  }
  if (type === 'search') {
    return (
      <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden="true">
        <circle className={common} cx="28" cy="28" r="13" />
        <path className={common} d="M38 38 L51 51 M28 9 V15 M28 41 V47 M9 28 H15 M41 28 H47" />
        <circle cx="28" cy="28" r="3" fill="currentColor" opacity="0.5" />
      </svg>
    );
  }
  if (type === 'cube') {
    return (
      <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden="true">
        <path className={common} d="M32 7 L52 18 V42 L32 55 L12 42 V18 Z M12 18 L32 30 L52 18 M32 30 V55" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden="true">
      <path className={common} d="M10 54 H56 M16 46 V26 M30 46 V16 M44 46 V32" />
      <rect className={common} x="13" y="26" width="6" height="20" />
      <rect className={common} x="27" y="16" width="6" height="30" />
      <rect className={common} x="41" y="32" width="6" height="14" />
    </svg>
  );
}

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About | Sulayman Bowles';
  }, []);

  return (
    <main id="top" className="min-h-screen overflow-x-hidden bg-[#080808] text-[#e8e6df] selection:bg-[#e8e6df] selection:text-[#080808] md:cursor-none">
      <ShutterWipe />
      <DarkNoise />
      <PageTechnicalChrome tone="dark" />
      <div className="hidden md:block">
        <SmoothCursor />
      </div>
      <ScrollProgress />

      <header className="sticky top-0 z-50 mx-auto w-full max-w-[1480px] px-4 py-6 md:px-8 xl:px-10">
        <div className="relative grid items-start gap-6 border-b border-[#e8e6df]/12 bg-[#080808]/82 pb-5 text-[10px] uppercase tracking-[0.3em] backdrop-blur-sm md:grid-cols-[1fr_auto]">
          <div className="absolute -left-4 top-0 hidden h-14 w-px bg-[#e8e6df]/28 md:block" />
          <a href="/" className="hover-target" data-cursor-text="HOME">
            <span className="block text-[#e8e6df]">SULAYMAN BOWLES</span>
            <span className="mt-2 block font-serif text-sm italic normal-case tracking-normal text-[#e8e6df]/54">Technical SEO · AI Product · Finance/Data</span>
          </a>
          <nav className="flex flex-wrap items-center gap-5 md:justify-end md:gap-8">
            <NavLink href="/#selected-works">WORK</NavLink>
            <NavLink href="/method">METHOD</NavLink>
            <NavLink href="/about" active>ABOUT</NavLink>
            <NavLink href="/#contact">NOTES</NavLink>
            <NavLink href="mailto:sulayman.bowles@gmail.com">CONTACT</NavLink>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid min-h-[calc(100vh-102px)] max-w-[1480px] grid-cols-1 gap-12 px-4 pb-20 pt-16 md:px-8 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] xl:px-10 xl:pt-20">
        <ScrollReveal yOffset={18} blur={false} className="min-w-0 self-center">
          <div className="mb-8 text-[10px] uppercase tracking-[0.34em] text-[#e8e6df]/45">ABOUT ME</div>
          <h1 className="font-serif text-[clamp(3.8rem,6.4vw,7.1rem)] italic leading-[0.92] tracking-[-0.045em]">
            <span className="block whitespace-nowrap">I build systems</span>{' '}
            <span className="block whitespace-nowrap">for visibility.</span>
          </h1>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-[#e8e6df]/62">
            <p>I’m Sulayman Bowles, a McCombs student and founder of VOID Agency. I work across technical SEO, AI search visibility, AI product strategy, and data-backed web systems.</p>
            <p>My work turns crawl data, site architecture, search signals, and market research into clearer systems for discovery, citation, conversion, and decision-making.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08} yOffset={18} blur={false} className="w-full self-center">
          <div className="group">
            <VisibilitySystemMap className="aspect-[1000/620] w-full transition-transform duration-700 group-hover:-translate-y-1" />
            <div className="mt-4 flex flex-col gap-3 border-b border-[#e8e6df]/12 pb-4 text-[10px] uppercase tracking-[0.24em] text-[#e8e6df]/44 sm:flex-row sm:items-center sm:justify-between">
              <span>SIGNAL INPUTS: CRAWL / ENTITY / MARKET</span>
              <span>OUTPUT: VISIBILITY SYSTEM</span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="mx-auto grid max-w-[1480px] grid-cols-1 gap-12 border-y border-[#e8e6df]/12 px-4 py-16 md:px-8 lg:grid-cols-3 xl:px-10 xl:py-24">
        <ScrollReveal yOffset={18} blur={false}>
          <SectionLabel>PRINCIPLES</SectionLabel>
          <div className="space-y-9">
            {principles.map(([title, copy]) => (
              <div key={title} className="group grid grid-cols-[34px_1fr] gap-4 border-b border-[#e8e6df]/10 pb-7 transition-colors duration-500 last:border-b-0 hover:border-[#e8e6df]/24">
                <span className="mt-2 h-px bg-[#e8e6df]/42 transition-all duration-500 group-hover:w-8 group-hover:bg-[#e8e6df]/75" />
                <div>
                  <h3 className="mb-3 text-[10px] uppercase tracking-[0.24em] text-[#e8e6df]">{title}</h3>
                  <p className="text-sm leading-relaxed text-[#e8e6df]/56">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal yOffset={18} blur={false} delay={0.08}>
          <SectionLabel>EXPERIENCE</SectionLabel>
          <div className="relative border-l border-[#e8e6df]/18 pl-7">
            {experience.map((item) => (
              <article key={item.role} className="relative mb-10 last:mb-0">
                <motion.span
                  className="absolute -left-[34px] top-1 h-3.5 w-3.5 rounded-full border border-[#e8e6df]/60 bg-[#080808]"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-12%' }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                />
                <h3 className="mb-2 text-[10px] uppercase tracking-[0.24em] text-[#e8e6df]">{item.role}</h3>
                <div className="mb-4 text-[10px] uppercase leading-relaxed tracking-[0.18em] text-[#e8e6df]/44">{item.meta}</div>
                <p className="text-sm leading-relaxed text-[#e8e6df]/58">{item.copy}</p>
              </article>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal yOffset={18} blur={false} delay={0.16}>
          <SectionLabel>SKILLS</SectionLabel>
          <SkillBars />
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-[1480px] px-4 py-16 md:px-8 xl:px-10 xl:py-24">
        <ScrollReveal yOffset={18} blur={false}>
          <SectionLabel>WHAT I WORK ON</SectionLabel>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {workCards.map(([title, copy, icon], index) => (
            <div key={title}>
              <ScrollReveal delay={index * 0.06} yOffset={16} blur={false}>
                <article className="group min-h-[300px] border border-[#e8e6df]/12 p-6 transition-[border-color,background-color,transform] duration-500 hover:-translate-y-1 hover:border-[#e8e6df]/34 hover:bg-[#e8e6df]/[0.025]">
                  <div className="mb-12 text-[#e8e6df]/58 transition-colors group-hover:text-[#e8e6df]/82">
                    <WorkIcon type={icon} />
                  </div>
                  <h3 className="mb-6 whitespace-pre-line text-xs uppercase leading-relaxed tracking-[0.3em]">{title}</h3>
                  <p className="max-w-xs text-sm leading-relaxed text-[#e8e6df]/58">{copy}</p>
                </article>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1480px] px-4 pb-16 md:px-8 xl:px-10 xl:pb-24">
        <div className="grid grid-cols-1 border border-[#e8e6df]/14 md:grid-cols-2 xl:grid-cols-5">
          {metrics.map(([value, label]) => (
            <motion.div
              key={value}
              className="group border-b border-[#e8e6df]/12 p-6 transition-colors duration-500 last:border-b-0 hover:bg-[#e8e6df]/[0.025] md:border-r md:last:border-r-0 xl:border-b-0"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <div className="mb-5 font-serif text-4xl italic leading-none tracking-[-0.02em] text-[#e8e6df]">{value}</div>
              <p className="text-[10px] uppercase leading-relaxed tracking-[0.22em] text-[#e8e6df]/48">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1480px] grid-cols-1 gap-12 border-y border-[#e8e6df]/12 px-4 py-16 md:px-8 lg:grid-cols-[0.48fr_0.52fr] xl:px-10 xl:py-24">
        <ScrollReveal yOffset={18} blur={false}>
          <div className="mb-6 font-serif text-7xl italic leading-none text-[#e8e6df]/32">“</div>
          <blockquote className="font-serif text-[clamp(3rem,5.8vw,7rem)] italic leading-[0.88] tracking-[-0.04em]">
            I build systems where search,
            <br />
            data, and product judgment
            <br />
            turn into visibility.
          </blockquote>
        </ScrollReveal>
        <div className="grid grid-cols-1 border-[#e8e6df]/12 md:grid-cols-3 md:border-l">
          {[
            ['LOCATION', 'Austin, Texas'],
            ['EDUCATION', 'UT Austin · McCombs\nSchool of Business'],
            ['AVAILABILITY', 'Open for select projects, partnerships, and technical SEO / AI-search work.'],
          ].map(([label, value], index) => (
            <div key={label}>
              <ScrollReveal delay={index * 0.06} yOffset={16} blur={false}>
                <div className="h-full border-b border-[#e8e6df]/12 py-6 md:border-b-0 md:border-r md:px-6 md:last:border-r-0">
                  <h3 className="mb-6 text-[10px] uppercase tracking-[0.26em] text-[#e8e6df]/42">{label}</h3>
                  <p className="whitespace-pre-line text-sm leading-relaxed text-[#e8e6df]/66">{value}</p>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      <footer className="mx-auto grid max-w-[1480px] grid-cols-1 items-start gap-8 px-4 py-8 text-[10px] uppercase tracking-[0.3em] text-[#e8e6df]/54 md:grid-cols-[1fr_auto_1fr_auto] md:px-8 xl:px-10">
        <div>
          <div className="text-[#e8e6df]">VOID AGENCY</div>
          <div className="mt-2 font-serif text-sm italic normal-case tracking-normal">Technical SEO · AI Search · Web Systems</div>
        </div>
        <nav className="flex flex-wrap gap-5">
          <NavLink href="/#selected-works">WORK</NavLink>
          <NavLink href="/method">METHOD</NavLink>
          <NavLink href="/about" active>ABOUT</NavLink>
          <NavLink href="/#contact">NOTES</NavLink>
        </nav>
        <div className="md:text-right">
          © 2026 VOID AGENCY
          <br />
          ALL RIGHTS RESERVED
        </div>
        <a href="#top" aria-label="Back to top" data-cursor-text="TOP" className="hover-target h-9 w-9 rounded-full border border-[#e8e6df]/26 transition-colors hover:bg-[#e8e6df] hover:text-[#080808]" />
      </footer>
    </main>
  );
}
