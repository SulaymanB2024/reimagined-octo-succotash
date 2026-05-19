import { motion } from 'motion/react';

type VisibilitySystemMapProps = {
  className?: string;
};

const messySignals = Array.from({ length: 54 }, (_, index) => {
  const x = 76 + ((index * 37) % 205);
  const y = 140 + ((index * 61) % 330);
  const size = 2 + (index % 5);
  const square = index % 6 === 0;
  return { x, y, size, square };
});

const evidenceRows = Array.from({ length: 16 }, (_, index) => ({
  y: 118 + index * 26,
  width: 46 + ((index * 31) % 100),
}));

const retrievalPoints = Array.from({ length: 34 }, (_, index) => {
  const angle = (index * 47) % 360;
  const radius = 48 + ((index * 29) % 92);
  const theta = (angle * Math.PI) / 180;
  return {
    x: 505 + Math.cos(theta) * radius,
    y: 330 + Math.sin(theta) * radius,
  };
});

const visibilityDots = Array.from({ length: 108 }, (_, index) => ({
  x: 655 + (index % 12) * 18,
  y: 188 + Math.floor(index / 12) * 22,
  opacity: 0.12 + (index % 7) * 0.055,
}));

const clarityRays = Array.from({ length: 9 }, (_, index) => {
  const y = 198 + index * 34;
  return {
    fromX: 814,
    fromY: y,
    controlX: 870,
    controlY: y - 28 + (index % 3) * 18,
    toX: 918,
    toY: 252 + index * 13,
  };
});

const topLabels = [
  { lines: ['MESSY WEB', 'SIGNALS'], x: 58 },
  { lines: ['STRUCTURED', 'CRAWL EVIDENCE'], x: 252 },
  { lines: ['AI RETRIEVAL', 'LAYER'], x: 462 },
  { lines: ['SEARCH', 'VISIBILITY'], x: 658 },
  { lines: ['BUSINESS', 'CLARITY'], x: 846 },
];

export default function VisibilitySystemMap({ className = '' }: VisibilitySystemMapProps) {
  return (
    <div className={`relative overflow-hidden border border-[#e8e6df]/16 bg-[#080808] ${className}`}>
      <svg viewBox="0 0 1000 620" className="h-full w-full" role="img" aria-label="Visibility system map showing messy web signals transformed into business clarity">
        <defs>
          <pattern id="visibility-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0 H0 V32" fill="none" stroke="rgba(232,230,223,0.045)" />
          </pattern>
          <filter id="visibility-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="visibility-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E8E6DF" stopOpacity="0.88" />
            <stop offset="38%" stopColor="#E8E6DF" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#080808" stopOpacity="0.12" />
          </radialGradient>
        </defs>

        <rect width="1000" height="620" fill="#080808" />
        <rect width="1000" height="620" fill="url(#visibility-grid)" />
        <rect x="24" y="24" width="952" height="572" fill="none" stroke="rgba(232,230,223,0.18)" />

        <g stroke="rgba(232,230,223,0.42)" strokeWidth="1.2" fill="none">
          <path d="M24 84 V24 H84" />
          <path d="M916 24 H976 V84" />
          <path d="M976 536 V596 H916" />
          <path d="M84 596 H24 V536" />
        </g>

        <g fontFamily="Inter, sans-serif" fontSize="7.5" letterSpacing="1.8" fill="rgba(232,230,223,0.55)">
          {topLabels.map(({ lines, x }) => (
            <g key={lines.join('-')} transform={`translate(${x} 58)`}>
              {lines.map((line, index) => (
                <text key={line} y={index * 13}>{line}</text>
              ))}
            </g>
          ))}
        </g>

        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        >
          {messySignals.map((point, index) => (
            <g key={index}>
              {point.square ? (
                <rect x={point.x - point.size / 2} y={point.y - point.size / 2} width={point.size} height={point.size} fill="none" stroke="rgba(232,230,223,0.32)" />
              ) : (
                <circle cx={point.x} cy={point.y} r={point.size / 2} fill="rgba(232,230,223,0.38)" />
              )}
              {index % 9 === 0 && <path d={`M ${point.x - 14} ${point.y + 9} H ${point.x + 24}`} stroke="rgba(232,230,223,0.14)" />}
            </g>
          ))}

          {messySignals.filter((_, index) => index % 4 === 0).map((point, index) => (
            <motion.path
              key={index}
              d={`M ${point.x} ${point.y} C 260 ${point.y - 20}, 302 ${122 + index * 24}, 352 ${122 + index * 18}`}
              fill="none"
              stroke="rgba(232,230,223,0.11)"
              strokeWidth="0.8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: index * 0.025, ease: 'easeOut' }}
            />
          ))}

          <g transform="translate(336 102)">
            <rect width="108" height="424" fill="rgba(232,230,223,0.025)" stroke="rgba(232,230,223,0.18)" />
            {evidenceRows.map((row, index) => (
              <g key={index} transform={`translate(18 ${row.y - 102})`}>
                <circle cx="0" cy="0" r="2" fill="rgba(232,230,223,0.42)" />
                <line x1="12" y1="0" x2={row.width} y2="0" stroke="rgba(232,230,223,0.24)" />
              </g>
            ))}
          </g>

          <g transform="translate(505 330)">
            {[44, 70, 98, 128].map((radius, index) => (
              <circle key={radius} r={radius} fill="none" stroke="rgba(232,230,223,0.14)" strokeDasharray={index % 2 === 0 ? '2 9' : 'none'} />
            ))}
            {Array.from({ length: 18 }, (_, index) => {
              const angle = (index * 20 * Math.PI) / 180;
              return (
                <line
                  key={index}
                  x1={Math.cos(angle) * 36}
                  y1={Math.sin(angle) * 36}
                  x2={Math.cos(angle) * 137}
                  y2={Math.sin(angle) * 137}
                  stroke="rgba(232,230,223,0.08)"
                />
              );
            })}
            <motion.circle
              r="58"
              fill="none"
              stroke="rgba(232,230,223,0.5)"
              filter="url(#visibility-glow)"
              animate={{ opacity: [0.45, 0.88, 0.45] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <circle r="36" fill="url(#visibility-core)" stroke="rgba(232,230,223,0.65)" />
            <circle r="16" fill="#080808" stroke="rgba(232,230,223,0.6)" />
          </g>

          {retrievalPoints.map((point, index) => (
            <circle key={index} cx={point.x} cy={point.y} r={1.8 + (index % 3) * 0.6} fill="rgba(232,230,223,0.36)" />
          ))}

          {visibilityDots.map((dot, index) => (
            <circle key={index} cx={dot.x} cy={dot.y} r={index % 11 === 0 ? 2.6 : 1.7} fill="rgba(232,230,223,1)" opacity={dot.opacity} />
          ))}

          {clarityRays.map((ray, index) => (
            <motion.path
              key={index}
              d={`M ${ray.fromX} ${ray.fromY} C ${ray.controlX} ${ray.controlY}, ${ray.controlX} ${ray.toY}, ${ray.toX} ${ray.toY}`}
              fill="none"
              stroke="rgba(232,230,223,0.22)"
              strokeWidth="0.9"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.08 * index, ease: 'easeOut' }}
            />
          ))}
          <circle cx="918" cy="310" r="8" fill="#E8E6DF" opacity="0.82" filter="url(#visibility-glow)" />
          <circle cx="918" cy="310" r="25" fill="none" stroke="rgba(232,230,223,0.18)" />
          <text x="888" y="356" fontFamily="Inter, sans-serif" fontSize="8.5" letterSpacing="2.5" fill="rgba(232,230,223,0.5)">CLEAR SIGNAL</text>
        </motion.g>
      </svg>
    </div>
  );
}
