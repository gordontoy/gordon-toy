// Abstract "demand curve" graphic for the featured blog card.
// Colours mirror the site's CSS variables (amber #e8823a, gold #c9a84c,
// dark panel #0a0a0b, borders #1e1e22 / #2a2a30). Hex is used directly so
// the gradients render reliably across browsers.
export default function FeaturedGraphic() {
  return (
    <svg
      className="post-graphic"
      viewBox="0 0 680 250"
      role="img"
      aria-label="Abstract rising data curve over a faint grid"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="fgGlowA" cx="14%" cy="8%" r="62%">
          <stop offset="0%" stopColor="#e8823a" stopOpacity="0.20" />
          <stop offset="55%" stopColor="#e8823a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="fgGlowG" cx="88%" cy="96%" r="62%">
          <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.16" />
          <stop offset="55%" stopColor="#c9a84c" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="fgStroke" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e8823a" />
          <stop offset="100%" stopColor="#c9a84c" />
        </linearGradient>
        <linearGradient id="fgArea" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e8823a" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#e8823a" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect
        x="0.5"
        y="0.5"
        width="679"
        height="249"
        rx="18"
        fill="#0a0a0b"
        stroke="#2a2a30"
      />
      <rect x="1" y="1" width="678" height="248" rx="17" fill="url(#fgGlowA)" />
      <rect x="1" y="1" width="678" height="248" rx="17" fill="url(#fgGlowG)" />

      <g stroke="#1e1e22" strokeWidth="1">
        <line x1="136" y1="22" x2="136" y2="228" />
        <line x1="272" y1="22" x2="272" y2="228" />
        <line x1="408" y1="22" x2="408" y2="228" />
        <line x1="544" y1="22" x2="544" y2="228" />
        <line x1="34" y1="80" x2="646" y2="80" />
        <line x1="34" y1="135" x2="646" y2="135" />
        <line x1="34" y1="190" x2="646" y2="190" />
      </g>

      <g fill="#7a3e12" opacity="0.5">
        <rect x="78" y="200" width="18" height="28" rx="2" />
        <rect x="158" y="188" width="18" height="40" rx="2" />
        <rect x="238" y="196" width="18" height="32" rx="2" />
        <rect x="318" y="170" width="18" height="58" rx="2" />
        <rect x="398" y="180" width="18" height="48" rx="2" />
        <rect x="478" y="156" width="18" height="72" rx="2" />
        <rect x="558" y="144" width="18" height="84" rx="2" />
      </g>

      <line
        x1="34"
        y1="228"
        x2="646"
        y2="228"
        stroke="#2a2a30"
        strokeWidth="1"
      />

      <path
        d="M45 196 C150 188 200 160 290 156 C380 152 415 108 500 100 C565 94 600 70 635 58 L635 228 L45 228 Z"
        fill="url(#fgArea)"
      />
      <line
        x1="500"
        y1="100"
        x2="500"
        y2="228"
        stroke="#e8823a"
        strokeOpacity="0.35"
        strokeWidth="1"
        strokeDasharray="3 4"
      />
      <path
        d="M45 196 C150 188 200 160 290 156 C380 152 415 108 500 100 C565 94 600 70 635 58"
        fill="none"
        stroke="url(#fgStroke)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <circle cx="45" cy="196" r="4" fill="#c9a84c" />
      <circle cx="290" cy="156" r="4" fill="#c9a84c" />
      <circle cx="635" cy="58" r="4" fill="#c9a84c" />
      <circle cx="500" cy="100" r="10" fill="#e8823a" fillOpacity="0.16" />
      <circle cx="500" cy="100" r="5" fill="#e8823a" />
      <circle cx="500" cy="100" r="2.2" fill="#0a0a0b" />

      <g fill="#6a6560">
        <rect x="28" y="26" width="26" height="3.5" rx="1.75" />
        <rect x="28" y="35" width="16" height="3.5" rx="1.75" />
      </g>
    </svg>
  );
}
