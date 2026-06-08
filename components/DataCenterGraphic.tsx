// Abstract "data centre → AI" graphic for the featured blog card.
// Server racks on the left feed data-flow lines into a layered neural
// network on the right. Same visual language (dark panel, faint grid,
// corner glows, mono ticks) as the rest of the site; colours mirror the
// CSS variables (amber #e8823a, gold #c9a84c, dim amber #7a3e12).
const LAYER_A = [82, 126, 170];
const LAYER_B = [74, 114, 154, 194];
const LAYER_C = [108, 156];

const AX = 338;
const BX = 470;
const CX = 602;

const edgesAB = LAYER_A.flatMap((a) => LAYER_B.map((b) => [a, b] as const));
const edgesBC = LAYER_B.flatMap((b) => LAYER_C.map((c) => [b, c] as const));

const RACK_X = [44, 100, 156];

export default function DataCenterGraphic() {
  return (
    <svg
      className="post-graphic"
      viewBox="0 0 680 250"
      role="img"
      aria-label="Abstract data centre and AI graphic: server racks feeding a neural network"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="dcGlowA" cx="14%" cy="8%" r="62%">
          <stop offset="0%" stopColor="#e8823a" stopOpacity="0.20" />
          <stop offset="55%" stopColor="#e8823a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="dcGlowG" cx="88%" cy="96%" r="62%">
          <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.16" />
          <stop offset="55%" stopColor="#c9a84c" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="dcFlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e8823a" />
          <stop offset="100%" stopColor="#c9a84c" />
        </linearGradient>
        <symbol id="rack" viewBox="0 0 44 124">
          <rect
            x="0.5"
            y="0.5"
            width="43"
            height="123"
            rx="4"
            fill="#111112"
            stroke="#2a2a30"
          />
          <rect x="0.5" y="0.5" width="43" height="12" rx="4" fill="#161617" />
          <rect x="16" y="4" width="20" height="4" rx="2" fill="#1e1e22" />
          <circle cx="9" cy="6.5" r="1.7" fill="#c9a84c" />
          <g stroke="#1e1e22" strokeWidth="1">
            <line x1="6" y1="26" x2="38" y2="26" />
            <line x1="6" y1="42" x2="38" y2="42" />
            <line x1="6" y1="58" x2="38" y2="58" />
            <line x1="6" y1="74" x2="38" y2="74" />
            <line x1="6" y1="90" x2="38" y2="90" />
            <line x1="6" y1="106" x2="38" y2="106" />
          </g>
          <circle cx="35" cy="34" r="1.7" fill="#e8823a" />
          <circle cx="35" cy="58" r="1.7" fill="#c9a84c" />
          <circle cx="35" cy="82" r="1.7" fill="#7a3e12" />
          <circle cx="35" cy="106" r="1.7" fill="#c9a84c" />
        </symbol>
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
      <rect x="1" y="1" width="678" height="248" rx="17" fill="url(#dcGlowA)" />
      <rect x="1" y="1" width="678" height="248" rx="17" fill="url(#dcGlowG)" />

      <g stroke="#1e1e22" strokeWidth="1">
        <line x1="272" y1="22" x2="272" y2="228" />
        <line x1="408" y1="22" x2="408" y2="228" />
        <line x1="544" y1="22" x2="544" y2="228" />
        <line x1="240" y1="80" x2="646" y2="80" />
        <line x1="240" y1="135" x2="646" y2="135" />
        <line x1="240" y1="190" x2="646" y2="190" />
      </g>

      <g stroke="#6a5418" strokeWidth="0.8" opacity="0.45">
        {edgesAB.map(([a, b], i) => (
          <line key={`ab${i}`} x1={AX} y1={a} x2={BX} y2={b} />
        ))}
        {edgesBC.map(([b, c], i) => (
          <line key={`bc${i}`} x1={BX} y1={b} x2={CX} y2={c} />
        ))}
      </g>

      {RACK_X.map((x) => (
        <use key={x} href="#rack" x={x} y="66" width="44" height="124" />
      ))}

      <g fill="none" stroke="url(#dcFlow)" strokeWidth="2" strokeLinecap="round">
        <path d="M200 96 C255 96 292 82 334 82" />
        <path d="M200 128 C255 128 292 126 334 126" />
        <path d="M200 162 C255 162 292 170 334 170" />
      </g>
      <g fill="#c9a84c">
        <circle cx="266" cy="88" r="2" />
        <circle cx="266" cy="127" r="2" />
        <circle cx="266" cy="166" r="2" />
      </g>

      <g fill="#c9a84c">
        {LAYER_A.map((y) => (
          <circle key={`a${y}`} cx={AX} cy={y} r="4" />
        ))}
        {LAYER_B.map((y) => (
          <circle key={`b${y}`} cx={BX} cy={y} r="4" />
        ))}
      </g>
      <circle cx={CX} cy="156" r="4" fill="#e8823a" />
      <circle cx={CX} cy="108" r="10" fill="#e8823a" fillOpacity="0.16" />
      <circle cx={CX} cy="108" r="5" fill="#e8823a" />
      <circle cx={CX} cy="108" r="2.2" fill="#0a0a0b" />

      <g fill="#6a6560">
        <rect x="28" y="26" width="26" height="3.5" rx="1.75" />
        <rect x="28" y="35" width="16" height="3.5" rx="1.75" />
      </g>
    </svg>
  );
}
