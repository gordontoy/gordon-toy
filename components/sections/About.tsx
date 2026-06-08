import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-h">
      <span className="eyebrow">Profile</span>
      <h2 id="about-h">
        About <em>Gordon</em>
      </h2>
      <Reveal className="about-grid">
        <div className="about-body">
          <p>
            Gordon Toy works at the intersection of{" "}
            <strong>
              investment analysis, data storytelling, and strategic
              communications
            </strong>
            . Over a career spanning financial media, political consulting, and
            content marketing, he has built rare fluency across disciplines that
            rarely speak to each other.
          </p>
          <p>
            His writing cuts through noise — translating market complexity,
            policy shifts, and data into intelligence that decision-makers use.
            Whether it is a long-form investment thesis, an interactive data
            graphic, or a campaign narrative, Gordon brings structure and clarity
            to complicated material.
          </p>
          <p>
            Clients include{" "}
            <strong>
              fund managers, listed companies, political offices, and media
              organisations
            </strong>{" "}
            seeking clear and credible communication. His work has appeared
            across major Australian and international platforms.
          </p>
        </div>
        <ul className="kv-list" role="list">
          <li className="kv-row" role="listitem">
            <span className="kv-key">Based</span>
            <span className="kv-val">Melbourne, VIC</span>
          </li>
          <li className="kv-row" role="listitem">
            <span className="kv-key">Experience</span>
            <span className="kv-val">20+ years</span>
          </li>
          <li className="kv-row" role="listitem">
            <span className="kv-key">Background</span>
            <span className="kv-val">Finance / Media</span>
          </li>
          <li className="kv-row" role="listitem">
            <span className="kv-key">Availability</span>
            <span className="kv-val">Open to briefs</span>
          </li>
          <li className="kv-row" role="listitem">
            <span className="kv-key">Engagement</span>
            <span className="kv-val">Retainer / Project</span>
          </li>
        </ul>
      </Reveal>
    </section>
  );
}
