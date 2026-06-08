import Reveal from "@/components/Reveal";

interface Service {
  cat: string;
  title: string;
  body: string;
  tags: string[];
}

const SERVICES: Service[] = [
  {
    cat: "Investment Writing",
    title: "Investment & Financial Writing",
    body: "Rigorous, readable content for asset managers, listed companies, fintech platforms, and financial media. Research reports, market commentary, investor letters, and editorial strategy.",
    tags: ["Equities", "Macro", "Fixed Income", "ESG"],
  },
  {
    cat: "Data Visualisation",
    title: "Data Visualisation",
    body: "Complex datasets turned into clear, publication-ready visual stories. Economic dashboards, political polling graphics, interactive charts — data that communicates before a word is read.",
    tags: ["Infographics", "Dashboards", "Interactive"],
  },
  {
    cat: "Content Marketing",
    title: "Content Marketing",
    body: "Full-spectrum content strategy and production for B2B and B2C clients. Thought leadership, SEO content, white papers, and editorial calendars that build authority and drive pipeline.",
    tags: ["Strategy", "SEO", "White Papers"],
  },
  {
    cat: "Media & Editorial",
    title: "Media & Editorial",
    body: "Editorial consulting, media strategy, and journalism for digital and print publishers. Publication launches, section editing, contributor management, and audience development.",
    tags: ["Digital", "Print", "Editorial Direction"],
  },
  {
    cat: "Political Consulting",
    title: "Political Consulting",
    body: "Strategic communications for campaigns, governments, and political organisations. Messaging frameworks, speechwriting, policy narrative, crisis comms, and media training.",
    tags: ["Campaigns", "Policy", "Crisis Comms"],
  },
  {
    cat: "Advisory",
    title: "Advisory & Consulting",
    body: "Fractional comms director and strategic advisor for organisations that need senior-level thinking without the full-time overhead. Retainer and project-based mandates available.",
    tags: ["Retainer", "Fractional", "Strategic"],
  },
];

export default function Services() {
  return (
    <section id="services" aria-labelledby="svc-h">
      <span className="eyebrow">Capabilities</span>
      <h2 id="svc-h">
        What Gordon <em>Delivers</em>
      </h2>
      <Reveal className="services-grid">
        {SERVICES.map((s) => (
          <div className="svc" key={s.title}>
            <span className="svc-cat">{s.cat}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            <div className="tag-row">
              {s.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
