import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-h">
      <span className="eyebrow">Contact</span>
      <h2 id="contact-h">
        Start a <em>Conversation</em>
      </h2>
      <Reveal className="contact-grid">
        <div>
          <p className="contact-desc">
            Available for writing commissions, consulting retainers, data
            visualisation projects, and strategic advisory. Based in Melbourne,
            working with clients globally.
          </p>
          <a href="mailto:hello@gordontoy.com" className="clink">
            <span>hello@gordontoy.com</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div
          className="terminal"
          role="img"
          aria-label="Terminal showing Gordon Toy's profile"
        >
          <div className="term-bar">
            <div className="term-dots" aria-hidden="true">
              <div className="tdot"></div>
              <div className="tdot"></div>
              <div className="tdot"></div>
            </div>
            <span className="term-name">gordon-toy — profile</span>
          </div>
          <div className="term-body">
            <div className="tline">
              <span className="tp">$</span> <span className="tv">whoami</span>
            </div>
            <div className="tline">
              <span className="tv">gordon.toy</span>
            </div>
            <div className="tline">
              <span className="tp">$</span>{" "}
              <span className="tv">cat brief.txt</span>
            </div>
            <div className="tline">
              <span className="tv">Investment writer. Data visualiser.</span>
            </div>
            <div className="tline">
              <span className="tv">Content strategist. Melbourne.</span>
            </div>
            <div className="tline">
              <span className="tp">$</span>{" "}
              <span className="tv">availability</span>
            </div>
            <div className="tline">
              <span className="tv">Open to new briefs.</span>
            </div>
            <div className="tline">
              <span className="tp">$</span>{" "}
              <span className="cur" aria-hidden="true"></span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
