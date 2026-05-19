import { motion } from 'motion/react';

type AtlasCrawlMapProps = {
  className?: string;
};

const cx = 500;
const cy = 410;

function polar(angleDeg: number, radius: number) {
  const angle = (angleDeg * Math.PI) / 180;
  return {
    x: cx + Math.cos(angle) * radius,
    y: cy + Math.sin(angle) * radius,
  };
}

const primaryNodes = [
  { angle: 12, radius: 305, size: 12, label: 'HTML' },
  { angle: 42, radius: 245, size: 8, label: 'JS' },
  { angle: 76, radius: 290, size: 10, label: 'CANON' },
  { angle: 118, radius: 250, size: 7, label: 'ROBOTS' },
  { angle: 164, radius: 330, size: 11, label: 'LINKS' },
  { angle: 212, radius: 300, size: 8, label: 'SCHEMA' },
  { angle: 248, radius: 245, size: 10, label: 'CWV' },
  { angle: 302, radius: 285, size: 9, label: 'ENTITY' },
];

const secondaryNodes = Array.from({ length: 148 }, (_, i) => {
  const angle = (i * 137.5) % 360;
  const radius = 75 + ((i * 47) % 295);
  const size = 1.2 + ((i * 7) % 4) * 0.45;
  const depth = 1 + (i % 6);
  return { angle, radius, size, depth };
});

const radialLines = Array.from({ length: 108 }, (_, i) => {
  const angle = (i * 29 + (i % 7) * 8) % 360;
  const radius = 120 + ((i * 53) % 280);
  return { angle, radius };
});

const crossLinks = [
  [12, 42],
  [42, 76],
  [76, 118],
  [118, 164],
  [164, 212],
  [212, 248],
  [248, 302],
  [302, 12],
  [12, 118],
  [164, 248],
  [42, 212],
  [76, 302],
];

export function AtlasCrawlMap({ className = '' }: AtlasCrawlMapProps) {
  return (
    <div className={`relative overflow-hidden border border-canvas/25 bg-ink ${className}`}>
      <svg viewBox="0 0 1000 820" className="h-full w-full" role="img" aria-label="Atlas crawl map for example.com">
        <rect width="1000" height="820" fill="#070707" />
        <defs>
          <pattern id="atlas-map-grid" width="42" height="42" patternUnits="userSpaceOnUse">
            <path d="M 42 0 L 0 0 0 42" fill="none" stroke="rgba(232,230,225,0.055)" strokeWidth="1" />
          </pattern>
          <radialGradient id="atlas-node-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E8E6E1" stopOpacity="1" />
            <stop offset="45%" stopColor="#E8E6E1" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#070707" stopOpacity="0.15" />
          </radialGradient>
        </defs>

        <rect width="1000" height="820" fill="url(#atlas-map-grid)" />
        <rect x="28" y="28" width="944" height="764" fill="none" stroke="rgba(232,230,225,0.22)" strokeWidth="1" />

        <g stroke="rgba(232,230,225,0.42)" strokeWidth="2" fill="none">
          <path d="M28 86 V28 H86" />
          <path d="M914 28 H972 V86" />
          <path d="M972 734 V792 H914" />
          <path d="M86 792 H28 V734" />
        </g>

        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: 'easeOut' }}
        >
          {[86, 154, 228, 304, 372].map((radius) => (
            <circle
              key={radius}
              cx={cx}
              cy={cy}
              r={radius}
              fill="none"
              stroke="rgba(232,230,225,0.12)"
              strokeWidth="1"
              strokeDasharray={radius % 2 === 0 ? '5 12' : '2 10'}
            />
          ))}

          <line x1="120" y1={cy} x2="880" y2={cy} stroke="rgba(232,230,225,0.12)" />
          <line x1={cx} y1="88" x2={cx} y2="730" stroke="rgba(232,230,225,0.12)" />
          <motion.circle
            cx={cx}
            cy={cy}
            r="304"
            fill="none"
            stroke="rgba(232,230,225,0.26)"
            strokeWidth="1"
            strokeDasharray="1 18"
            animate={{ rotate: 360, opacity: [0.16, 0.32, 0.16] }}
            transition={{ rotate: { duration: 42, repeat: Infinity, ease: 'linear' }, opacity: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />

          {radialLines.map((line, index) => {
            const start = polar(line.angle, 42);
            const end = polar(line.angle, line.radius);
            return (
              <line
                key={`${line.angle}-${index}`}
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                stroke="rgba(232,230,225,0.11)"
                strokeWidth="0.8"
              />
            );
          })}

          {crossLinks.map(([fromAngle, toAngle], index) => {
            const from = primaryNodes.find((node) => node.angle === fromAngle)!;
            const to = primaryNodes.find((node) => node.angle === toAngle)!;
            const a = polar(from.angle, from.radius);
            const b = polar(to.angle, to.radius);
            return (
              <path
                key={index}
                d={`M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`}
                fill="none"
                stroke="rgba(232,230,225,0.095)"
                strokeWidth="1"
              />
            );
          })}

          {secondaryNodes.map((node, index) => {
            const position = polar(node.angle, node.radius);
            const opacity = 0.24 + (node.depth % 4) * 0.09;
            return (
              <g key={index}>
                {index % 5 === 0 && (
                  <line
                    x1={cx}
                    y1={cy}
                    x2={position.x}
                    y2={position.y}
                    stroke="rgba(232,230,225,0.055)"
                    strokeWidth="0.6"
                  />
                )}
                <motion.circle
                  cx={position.x}
                  cy={position.y}
                  r={node.size}
                  fill="#E8E6E1"
                  fillOpacity={opacity}
                  animate={index % 13 === 0 ? { opacity: [opacity * 0.7, opacity + 0.18, opacity * 0.7] } : undefined}
                  transition={index % 13 === 0 ? { duration: 3.5 + (index % 4), repeat: Infinity, ease: 'easeInOut' } : undefined}
                />
              </g>
            );
          })}

          {primaryNodes.map((node) => {
            const position = polar(node.angle, node.radius);
            const labelPosition = polar(node.angle, node.radius + 34);
            return (
              <g key={node.angle}>
                <line
                  x1={cx}
                  y1={cy}
                  x2={position.x}
                  y2={position.y}
                  stroke="rgba(232,230,225,0.18)"
                  strokeWidth="1"
                />
                <circle
                  cx={position.x}
                  cy={position.y}
                  r={node.size + 10}
                  fill="none"
                  stroke="rgba(232,230,225,0.16)"
                  strokeWidth="1"
                />
                <circle
                  cx={position.x}
                  cy={position.y}
                  r={node.size}
                  fill="rgba(232,230,225,0.68)"
                  stroke="rgba(232,230,225,0.92)"
                  strokeWidth="1"
                />
                <text
                  x={labelPosition.x}
                  y={labelPosition.y}
                  fill="rgba(232,230,225,0.52)"
                  fontFamily="Inter, sans-serif"
                  fontSize="10"
                  letterSpacing="2"
                  textAnchor="middle"
                >
                  {node.label}
                </text>
              </g>
            );
          })}

          <circle cx={cx} cy={cy} r="58" fill="#070707" stroke="rgba(232,230,225,0.34)" strokeWidth="1" />
          <circle cx={cx} cy={cy} r="36" fill="url(#atlas-node-core)" stroke="#E8E6E1" strokeWidth="1.4" />
          <circle cx={cx} cy={cy} r="8" fill="#070707" stroke="#E8E6E1" strokeWidth="1" />
          <path d="M468 410 H532 M500 378 V442" stroke="#070707" strokeWidth="1.2" />

          <g transform="translate(62 64)">
            <text fill="#E8E6E1" fontFamily="Inter, sans-serif" fontSize="11" letterSpacing="3">CRAWL MAP</text>
            <text y="28" fill="rgba(232,230,225,0.65)" fontFamily="Inter, sans-serif" fontSize="10" letterSpacing="2">example.com</text>
            <text y="49" fill="rgba(232,230,225,0.65)" fontFamily="Inter, sans-serif" fontSize="10" letterSpacing="2">52,846 URLS</text>
            <text y="70" fill="rgba(232,230,225,0.65)" fontFamily="Inter, sans-serif" fontSize="10" letterSpacing="2">DEPTH 0-6</text>
          </g>

          <g transform="translate(64 670)">
            <text fill="rgba(232,230,225,0.78)" fontFamily="Inter, sans-serif" fontSize="10" letterSpacing="2.8">LEGEND</text>
            {[
              ['CORE', 0],
              ['CLUSTERS', 1],
              ['DISCOVERED URLS', 2],
            ].map(([label, row]) => (
              <g key={label} transform={`translate(0 ${24 + Number(row) * 24})`}>
                <circle cx="5" cy="-4" r={Number(row) === 0 ? 5 : 3} fill="#E8E6E1" fillOpacity={Number(row) === 2 ? 0.32 : 0.72} />
                <text x="20" fill="rgba(232,230,225,0.48)" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2">{label}</text>
              </g>
            ))}
          </g>

          <g transform="translate(724 634)">
            <rect width="210" height="96" fill="rgba(7,7,7,0.42)" stroke="rgba(232,230,225,0.2)" />
            <text x="16" y="24" fill="rgba(232,230,225,0.78)" fontFamily="Inter, sans-serif" fontSize="10" letterSpacing="2.4">SIGNAL TABLE</text>
            {[
              ['INDEXABLE', '34.8%'],
              ['ORPHAN RISK', '17.4%'],
              ['CANONICAL GAPS', '7.2'],
            ].map(([label, value], index) => (
              <g key={label} transform={`translate(16 ${45 + index * 17})`}>
                <text fill="rgba(232,230,225,0.42)" fontFamily="Inter, sans-serif" fontSize="8.5" letterSpacing="1.8">{label}</text>
                <text x="154" fill="rgba(232,230,225,0.78)" fontFamily="Inter, sans-serif" fontSize="8.5" letterSpacing="1.6" textAnchor="end">{value}</text>
              </g>
            ))}
          </g>
        </motion.g>
      </svg>
    </div>
  );
}

export default AtlasCrawlMap;
