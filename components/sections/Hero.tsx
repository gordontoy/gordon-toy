import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" aria-label="Introduction">
      <div className="hero-layout">
        <div>
          <span className="eyebrow">Melbourne, Australia</span>
          <h1>
            Gordon<span className="h1-sub">Toy.</span>
          </h1>
          <p className="hero-roles">
            Investment Writer · Data Visualiser · Content Strategist
          </p>
          <p className="hero-desc">
            Translating markets, data, and politics into writing that is clear,
            credible, and built to last.
          </p>
          <div className="btn-row">
            <Link href="/blog" className="btn btn-primary">
              Read the Work
            </Link>
            <Link href="/#contact" className="btn btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="hero-panel" aria-hidden="true">
          <div className="panel-cell">
            <div className="cell-label">Experience</div>
            <div className="cell-value">20+</div>
          </div>
          <div className="panel-cell">
            <div className="cell-label">Location</div>
            <div className="cell-value" style={{ fontSize: "1.1rem" }}>
              MEL
            </div>
          </div>
          <div className="panel-cell">
            <div className="cell-label">Primary Sector</div>
            <div className="cell-value" style={{ fontSize: "1rem" }}>
              Finance
            </div>
          </div>
          <div className="panel-cell">
            <div className="cell-label">Domains</div>
            <div className="cell-value">4</div>
          </div>
          <div className="panel-cell wide">
            <div className="cell-label">Specialisation</div>
            <p className="cell-prose">
              Investment writing, data visualisation, content marketing, media,
              and political consulting — applied across finance, government, and
              media organisations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
