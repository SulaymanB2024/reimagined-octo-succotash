import { motion } from 'motion/react';
import { useEffect, type ReactNode } from 'react';
import AtlasCrawlMap from '../components/AtlasCrawlMap';
import { PageTechnicalChrome } from '../components/PageTechnicalChrome';
import { ScrollProgress } from '../components/ScrollProgress';
import { ScrollReveal } from '../components/ScrollReveal';
import { ShutterWipe } from '../components/ShutterWipe';
import { SmoothCursor } from '../components/SmoothCursor';

type ProcessStepProps = {
  index: string;
  title: string;
  copy: string;
  icon: 'crawl' | 'extract' | 'interpret' | 'score' | 'report';
};

type OutputCardProps = {
  title: string;
  copy: string;
  cta: string;
  children: ReactNode;
};

const processSteps: ProcessStepProps[] = [
  {
    index: '01',
    title: 'CRAWL',
    icon: 'crawl',
    copy: 'High-fidelity crawling with smart rate control, JS rendering, and adaptive discovery to map the site as search engines do.',
  },
  {
    index: '02',
    title: 'EXTRACT',
    icon: 'extract',
    copy: 'Extract content, links, directives, structured data, signals, and performance artifacts from every discovered URL.',
  },
  {
    index: '03',
    title: 'INTERPRET',
    icon: 'interpret',
    copy: 'Normalize and connect signals into an understanding of architecture, intent, and indexation potential.',
  },
  {
    index: '04',
    title: 'SCORE',
    icon: 'score',
    copy: 'Score issues by impact, confidence, and effort using proprietary heuristics and historical patterns.',
  },
  {
    index: '05',
    title: 'REPORT',
    icon: 'report',
    copy: 'Generate operator-ready reports, exports, and task lists with evidence and recommended actions.',
  },
];

const issueRows = [
  ['Blocked by robots.txt', '9.6'],
  ['Orphaned pages', '8.7'],
  ['Missing canonical', '7.2'],
  ['Soft 404', '6.4'],
  ['Duplicate without canon.', '5.9'],
];

const indexationRows = [
  ['Indexable', '18,394', '34.8%'],
  ['Noindex', '6,372', '12.1%'],
  ['Blocked', '9,112', '17.2%'],
  ['Other', '19,846', '35.9%'],
];

function ProcessIcon({ type }: { type: ProcessStepProps['icon'] }) {
  const common = 'stroke-current fill-none';

  if (type === 'crawl') {
    return (
      <svg viewBox="0 0 72 72" className="h-14 w-14" aria-hidden="true">
        <circle className={common} cx="36" cy="36" r="7" strokeWidth="1.2" />
        {[12, 64, 36, 19, 54].map((x, index) => (
          <g key={x}>
            <line className={common} x1="36" y1="36" x2={x} y2={[17, 24, 60, 50, 54][index]} strokeWidth="0.8" opacity="0.55" />
            <circle className={common} cx={x} cy={[17, 24, 60, 50, 54][index]} r="3.5" strokeWidth="1" />
          </g>
        ))}
      </svg>
    );
  }

  if (type === 'extract') {
    return (
      <svg viewBox="0 0 72 72" className="h-14 w-14" aria-hidden="true">
        <rect className={common} x="13" y="14" width="46" height="44" strokeWidth="1.2" />
        <path className={common} d="M22 25 H50 M22 36 H42 M22 47 H33" strokeWidth="1" />
        <path className={common} d="M49 43 L59 53 M59 43 L49 53" strokeWidth="1" opacity="0.65" />
      </svg>
    );
  }

  if (type === 'interpret') {
    return (
      <svg viewBox="0 0 72 72" className="h-14 w-14" aria-hidden="true">
        <path className={common} d="M16 18 H32 C42 18 42 31 53 31 H59" strokeWidth="1.1" />
        <path className={common} d="M16 54 H31 C43 54 42 41 53 41 H59" strokeWidth="1.1" />
        <circle className={common} cx="16" cy="18" r="4" strokeWidth="1" />
        <circle className={common} cx="16" cy="54" r="4" strokeWidth="1" />
        <circle className={common} cx="59" cy="31" r="4" strokeWidth="1" />
        <circle className={common} cx="59" cy="41" r="4" strokeWidth="1" />
      </svg>
    );
  }

  if (type === 'score') {
    return (
      <svg viewBox="0 0 72 72" className="h-14 w-14" aria-hidden="true">
        <circle className={common} cx="36" cy="36" r="25" strokeWidth="1" opacity="0.45" />
        <circle className={common} cx="36" cy="36" r="16" strokeWidth="1" opacity="0.65" />
        <circle className={common} cx="36" cy="36" r="6" strokeWidth="1.4" />
        <path className={common} d="M36 11 V18 M36 54 V61 M11 36 H18 M54 36 H61" strokeWidth="1" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 72 72" className="h-14 w-14" aria-hidden="true">
      <path className={common} d="M20 12 H45 L55 22 V60 H20 Z" strokeWidth="1.2" />
      <path className={common} d="M45 12 V23 H55 M28 34 H46 M28 43 H46 M28 52 H39" strokeWidth="1" />
    </svg>
  );
}

function AtlasProcessStep({ index, title, copy, icon }: ProcessStepProps) {
  return (
    <motion.div
      className="group relative min-h-[280px] border-ink/15 p-5 transition-colors duration-500 hover:bg-ink/[0.025] md:border-r last:border-r-0"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div className="mb-10 flex items-start justify-between text-[10px] uppercase tracking-[0.3em] text-ink/45">
        <span>{index}</span>
        <span>PROCESS</span>
      </div>
      <div className="mb-8 text-ink/75 transition-transform duration-500 group-hover:-translate-y-1">
        <ProcessIcon type={icon} />
      </div>
      <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.34em]">{title}</h3>
      <p className="max-w-[21rem] text-sm leading-relaxed text-ink/62">{copy}</p>
      {index !== '05' && (
        <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 text-[10px] tracking-[0.3em] text-ink/35 lg:block">-&gt;</div>
      )}
    </motion.div>
  );
}

function AtlasOutputCard({ title, copy, cta, children }: OutputCardProps) {
  return (
    <motion.article
      className="group relative flex min-h-[420px] flex-col overflow-hidden border border-canvas/20 p-5 text-canvas transition-[border-color,background-color] duration-500 before:absolute before:left-0 before:top-0 before:h-px before:w-0 before:bg-canvas/45 before:transition-all before:duration-700 hover:border-canvas/40 hover:bg-canvas/[0.025] hover:before:w-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div className="mb-8 flex items-start justify-between gap-4 border-b border-canvas/15 pb-5">
        <div>
          <h3 className="text-[10px] font-medium uppercase tracking-[0.32em] text-canvas/88">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-canvas/55">{copy}</p>
        </div>
        <span className="mt-1 block h-2 w-2 rounded-full border border-canvas/50 transition-colors duration-500 group-hover:bg-canvas/70" />
      </div>
      <div className="flex flex-1 items-center">{children}</div>
      <a href="#next-steps" className="hover-target mt-8 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-canvas/74">
        {cta}
        <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">-&gt;</span>
      </a>
    </motion.article>
  );
}

function MetricTable() {
  return (
    <table className="w-full border-collapse text-left text-[11px] uppercase tracking-[0.13em]">
      <tbody>
        {issueRows.map(([label, score]) => (
          <tr key={label} className="border-b border-canvas/12 last:border-b-0">
            <td className="py-3 text-canvas/55">{label}</td>
            <td className="py-3 text-right font-medium text-canvas/82">{score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function MiniGraph() {
  const nodes = [
    [32, 42],
    [74, 24],
    [118, 45],
    [162, 30],
    [205, 58],
    [70, 92],
    [130, 104],
    [188, 112],
  ];

  return (
    <svg viewBox="0 0 240 150" className="w-full text-canvas" aria-hidden="true">
      <rect x="1" y="1" width="238" height="148" fill="none" stroke="currentColor" opacity="0.16" />
      {nodes.slice(0, -1).map(([x, y], index) => {
        const [nextX, nextY] = nodes[index + 1];
        return <line key={index} x1={x} y1={y} x2={nextX} y2={nextY} stroke="currentColor" opacity="0.22" />;
      })}
      <path d="M32 42 C90 18 118 118 188 112" fill="none" stroke="currentColor" opacity="0.18" />
      {nodes.map(([x, y], index) => (
        <circle key={index} cx={x} cy={y} r={index % 3 === 0 ? 5 : 3} fill="currentColor" opacity={index % 3 === 0 ? 0.72 : 0.42} />
      ))}
    </svg>
  );
}

function MiniDonut() {
  return (
    <div className="grid w-full gap-6">
      <svg viewBox="0 0 140 140" className="mx-auto h-36 w-36 -rotate-90 text-canvas" aria-hidden="true">
        <circle cx="70" cy="70" r="43" fill="none" stroke="currentColor" strokeWidth="16" opacity="0.1" />
        {[
          ['94 270', 0, 0.78],
          ['33 270', -100, 0.5],
          ['46 270', -140, 0.32],
          ['97 270', -191, 0.18],
        ].map(([dash, offset, opacity], index) => (
          <motion.circle
            key={String(dash)}
            cx="70"
            cy="70"
            r="43"
            fill="none"
            stroke="currentColor"
            strokeWidth="16"
            strokeDasharray={String(dash)}
            strokeDashoffset={Number(offset)}
            opacity={Number(opacity)}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </svg>
      <div className="space-y-2">
        {indexationRows.map(([label, count, pct]) => (
          <div key={label} className="grid grid-cols-[1fr_auto_auto] gap-3 text-[10px] uppercase tracking-[0.16em] text-canvas/58">
            <span>{label}</span>
            <span>{count}</span>
            <span className="text-canvas/82">{pct}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AtlasPage() {
  useEffect(() => {
    document.title = 'Atlas | Sulayman Bowles';
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-canvas text-ink selection:bg-ink selection:text-canvas md:cursor-none">
      <ShutterWipe />
      <div className="bg-noise pointer-events-none" />
      <PageTechnicalChrome tone="light" />
      <div className="hidden md:block">
        <SmoothCursor />
      </div>
      <ScrollProgress tone="dark" />

      <header className="fixed left-1/2 top-0 z-50 w-full max-w-[1680px] -translate-x-1/2 px-4 py-5 text-canvas mix-blend-difference md:px-10 lg:px-14">
        <div className="grid grid-cols-[1fr_auto_1fr] items-start border-b border-canvas/20 pb-4 text-[10px] uppercase tracking-[0.28em]">
          <div>
            <a href="/" className="hover-target font-medium" data-cursor-text="HOME">SULAYMAN BOWLES</a>
            <div className="mt-2 font-serif text-sm italic normal-case tracking-normal text-canvas/62">Technical SEO · AI Search · Finance/Data</div>
          </div>
          <div className="hidden text-center text-canvas/62 sm:block">
            <div>PROJECT INDEX</div>
            <div className="mt-2 flex items-center justify-center gap-3">
              <span>02 / 06</span>
              <span className="h-1.5 w-1.5 rounded-full bg-canvas/55" />
              <span>ATLAS</span>
            </div>
          </div>
          <nav className="flex flex-col items-end gap-2">
            <a href="/#selected-works" className="hover-target transition-opacity hover:opacity-70" data-cursor-text="WORK">WORK</a>
            <a href="/method" className="hover-target transition-opacity hover:opacity-70" data-cursor-text="METHOD">METHOD</a>
            <a href="/about" className="hover-target transition-opacity hover:opacity-70" data-cursor-text="ABOUT">ABOUT</a>
          </nav>
        </div>
      </header>

      <section className="relative mx-auto grid min-h-screen w-full max-w-[1680px] grid-cols-1 gap-12 px-4 pb-16 pt-32 md:px-10 lg:grid-cols-12 lg:px-14 lg:pb-24 lg:pt-40">
        <ScrollReveal className="lg:col-span-4">
          <div className="mb-8 text-xs uppercase tracking-[0.36em] text-ink/48">( 02 )</div>
          <h1 className="font-serif text-[clamp(4.6rem,10vw,10.75rem)] italic leading-[0.82] tracking-[-0.055em]">ATLAS</h1>
          <p className="mt-10 max-w-[25rem] font-serif text-[clamp(2rem,4vw,4.25rem)] italic leading-[0.92] tracking-[-0.025em]">
            Crawl-based evidence engine for search.
          </p>
          <p className="mt-8 max-w-[28rem] text-base leading-relaxed text-ink/62">
            Atlas is a technical SEO audit system that crawls, interprets, and scores websites to surface what search engines see across architecture, indexation, performance, and AI-search readiness.
          </p>
          <dl className="mt-12 grid max-w-[30rem] grid-cols-[0.6fr_1fr] gap-x-8 gap-y-5 border-t border-ink/20 pt-6 text-[10px] uppercase tracking-[0.24em]">
            <dt className="text-ink/45">ROLE</dt>
            <dd>BUILDER / OPERATOR</dd>
            <dt className="text-ink/45">OUTPUT</dt>
            <dd>CRAWL DATA, ISSUE LOGIC, INSIGHTS, REPORTS</dd>
          </dl>
        </ScrollReveal>

        <ScrollReveal className="lg:col-span-8" delay={0.1} yOffset={18} blur={false}>
          <div className="group">
            <AtlasCrawlMap className="aspect-[1000/820] w-full transition-transform duration-700 group-hover:-translate-y-1" />
          </div>
          <div className="mt-4 flex items-center justify-between border-b border-ink/15 pb-4 text-[10px] uppercase tracking-[0.28em] text-ink/55">
            <span>DATASET: EXAMPLE.COM</span>
            <span>CRAWLED: APR 18, 2024</span>
          </div>
        </ScrollReveal>
      </section>

      <section className="mx-auto grid max-w-[1680px] grid-cols-1 gap-12 border-y border-ink/16 px-4 py-16 md:px-10 lg:grid-cols-12 lg:px-14 lg:py-24">
        <ScrollReveal className="border-l border-ink/22 pl-6 lg:col-span-4">
          <blockquote className="max-w-[420px] font-serif text-[clamp(2rem,3.6vw,4.8rem)] italic leading-[0.95] tracking-[-0.025em]">
            I built Atlas to turn raw crawl data into structured, defensible evidence. Not just what's wrong - but why it matters.
          </blockquote>
        </ScrollReveal>
        <div className="grid gap-10 md:grid-cols-3 lg:col-span-8">
          {[
            ['BEYOND BASIC CRAWLS', 'Atlas goes deeper than surface reports. It interprets signals, correlates patterns, and prioritizes issues by impact on indexation and visibility.'],
            ['AI-SEARCH AWARE', 'Atlas evaluates content and structure for AI-search discoverability: entity clarity, source signals, freshness, and retrievability.'],
            ['BUILT FOR OPERATORS', 'Designed for SEO operators and technical teams who need reliable evidence, clear logic, and exportable outputs to drive decisions.'],
          ].map(([title, copy], index) => (
            <div key={title}>
              <ScrollReveal delay={index * 0.08} yOffset={18} blur={false}>
                <div className="mb-6 h-px w-10 bg-ink/35" />
                <h2 className="mb-5 text-[10px] font-medium uppercase tracking-[0.32em]">{title}</h2>
                <p className="text-sm leading-relaxed text-ink/62">{copy}</p>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="mx-auto max-w-[1680px] px-4 py-16 md:px-10 lg:px-14 lg:py-24">
        <ScrollReveal>
          <div className="border border-ink/18">
            <div className="flex items-center justify-between border-b border-ink/18 px-5 py-5 text-[10px] uppercase tracking-[0.32em]">
              <h2>THE ATLAS PROCESS</h2>
              <span className="text-ink/45">SYSTEM PATH</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
              {processSteps.map((step) => (
                <div key={step.index} className="contents">
                  <AtlasProcessStep {...step} />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-ink px-4 py-16 text-canvas md:px-10 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-[1680px]">
          <ScrollReveal className="mb-10 flex flex-col justify-between gap-5 border-b border-canvas/18 pb-6 md:flex-row md:items-end" blur={false}>
            <div>
              <div className="mb-5 h-px w-16 bg-canvas/45" />
              <h2 className="font-serif text-[clamp(3rem,7vw,8rem)] italic leading-none tracking-[-0.04em]">EVIDENCE &amp; OUTPUTS</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-canvas/55">
              Structured artifacts that make crawler observations reviewable, exportable, and defensible across technical teams.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
            <AtlasOutputCard title="ISSUE DETECTION" copy="Prioritized technical issues with impact scoring." cta="VIEW ALL">
              <MetricTable />
            </AtlasOutputCard>

            <AtlasOutputCard title="INTERNAL LINK GRAPH" copy="Understand flow, depth, and orphan risk." cta="EXPLORE GRAPH">
              <MiniGraph />
            </AtlasOutputCard>

            <AtlasOutputCard title="INDEXATION OVERVIEW" copy="Crawlable vs. indexable at a glance." cta="VIEW BREAKDOWN">
              <MiniDonut />
            </AtlasOutputCard>

            <AtlasOutputCard title="TECHNICAL FINDINGS" copy="Examples with evidence and remediation." cta="VIEW DETAILS">
              <div className="w-full border border-canvas/18 p-4">
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.26em] text-canvas/82">Missing Canonical</h4>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-canvas/48">312 pages</p>
                  </div>
                  <span className="text-xl font-serif italic text-canvas/58">7.2</span>
                </div>
                <p className="mb-5 text-sm leading-relaxed text-canvas/58">Multiple pages missing self-referencing canonicals.</p>
                <div className="space-y-2 border-t border-canvas/12 pt-4 text-[10px] uppercase tracking-[0.15em] text-canvas/48">
                  <div>Affected URLs:</div>
                  <div>/blog/how-to-audit</div>
                  <div>/pricing/plans</div>
                  <div>/resources/seo-tools</div>
                </div>
              </div>
            </AtlasOutputCard>

            <AtlasOutputCard title="EXPORTS & DASHBOARDS" copy="Shareable reports and operator dashboards." cta="OPEN DASHBOARD">
              <ul className="w-full space-y-4 text-[11px] uppercase tracking-[0.18em] text-canvas/62">
                {['Executive Summary (PDF)', 'Technical Audit (PDF)', 'Issue Export (CSV)', 'Crawl Data (Parquet)', 'Looker Studio Dashboard'].map((item) => (
                  <li key={item} className="flex items-center justify-between border-b border-canvas/12 pb-3">
                    <span>{item}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-canvas/45" />
                  </li>
                ))}
              </ul>
            </AtlasOutputCard>
          </div>
        </div>
      </section>

      <section id="next-steps" className="mx-auto grid max-w-[1680px] grid-cols-1 gap-12 px-4 py-16 md:px-10 lg:grid-cols-12 lg:px-14 lg:py-24">
        <ScrollReveal className="lg:col-span-4">
          <h2 className="max-w-[32rem] font-serif text-[clamp(3.5rem,8vw,9rem)] italic leading-[0.84] tracking-[-0.045em]">
            System intelligence you can act on.
          </h2>
          <p className="mt-8 max-w-[28rem] text-base leading-relaxed text-ink/62">
            Atlas turns complexity into clarity - so teams can fix what matters and prove the impact.
          </p>
          <a href="mailto:sulayman.bowles@gmail.com" aria-label="Contact Sulayman Bowles" data-cursor-text="CONTACT" className="hover-target mt-10 block h-12 w-12 rounded-full border border-ink/35 transition-colors hover:bg-ink hover:text-canvas" />
        </ScrollReveal>

        <ScrollReveal className="lg:col-span-5" delay={0.1} blur={false}>
          <div className="border-y border-ink/16 py-6 text-[10px] uppercase tracking-[0.32em] text-ink/48">NEXT STEPS</div>
          <div className="grid gap-0 md:grid-cols-2">
            {[
              ['01', 'VIEW RELATED WORK', 'See other projects in SEO, finance, and data.'],
              ['02', 'WORK WITH ME', "Let's build systems that move the needle."],
            ].map(([index, title, copy]) => (
              <a key={title} href={index === '01' ? '/#selected-works' : 'mailto:sulayman.bowles@gmail.com'} data-cursor-text={index === '01' ? 'WORK' : 'CONTACT'} className="hover-target group border-b border-ink/16 py-8 md:border-r md:pr-8 md:last:border-r-0 md:last:pl-8">
                <div className="mb-8 text-[10px] uppercase tracking-[0.28em] text-ink/42">{index}</div>
                <h3 className="mb-4 text-xs uppercase tracking-[0.3em]">{title}</h3>
                <p className="mb-7 text-sm leading-relaxed text-ink/62">{copy}</p>
                <span className="inline-block text-xs tracking-[0.28em] transition-transform group-hover:translate-x-1">-&gt;</span>
              </a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="lg:col-span-3" delay={0.16} blur={false}>
          <div className="border border-ink/18 p-5 text-[10px] uppercase tracking-[0.28em]">
            <div className="mb-10 flex items-center justify-between border-b border-ink/14 pb-5">
              <span className="text-ink/45">PROJECT</span>
              <span>02 / 06</span>
            </div>
            <a href="/#systems" data-cursor-text="PREV" className="hover-target mb-8 grid grid-cols-[auto_1fr_auto] items-center gap-4 transition-opacity hover:opacity-70">
              <span className="text-ink/42">PREV</span>
              <span>01 / FINANCE</span>
              <span>UP</span>
            </a>
            <a href="/method" data-cursor-text="NEXT" className="hover-target grid grid-cols-[auto_1fr_auto] items-center gap-4 transition-opacity hover:opacity-70">
              <span className="text-ink/42">NEXT</span>
              <span>03 / VOID</span>
              <span>DOWN</span>
            </a>
          </div>
        </ScrollReveal>
      </section>

      <footer className="mx-auto flex max-w-[1680px] items-center justify-between border-t border-ink/18 px-4 py-7 text-[10px] uppercase tracking-[0.32em] text-ink/52 md:px-10 lg:px-14">
        <span>[</span>
        <span>TRACE THE WORK</span>
      </footer>
    </main>
  );
}
