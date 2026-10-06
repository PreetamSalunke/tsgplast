import { BadgeCheck, History, Factory, Users, FileText } from "lucide-react";
import { business, factsheet, whyUs } from "../config";
import "./WhyUs.css";

/* config.js ke icon strings → lucide components */
const ICONS: Record<string, typeof BadgeCheck> = {
  "badge-check": BadgeCheck,
  history: History,
  factory: Factory,
  users: Users,
};

/* Har point SIRF IndiaMART profile ke real facts par based hai —
   koi invented claim (years, awards, client counts) nahi. */
export default function WhyUs() {
  return (
    <section className="section section--alt" id="why-us">
      <div className="container">
        <div className="why__layout">
          <div className="why__intro" data-reveal>
            <span className="kicker">Why {business.name}</span>
            <h2 className="section-title">
              Straight facts.
              <br />
              Solid fabrication.
            </h2>
            <p className="section-sub">
              No tall claims — just what is on record. A proprietor-led Pune manufacturing unit, building FRP and PP
              process equipment since {business.established}.
            </p>
          </div>

          <ul className="why__grid">
            {whyUs.map((point, index) => {
              const Icon = ICONS[point.icon] ?? BadgeCheck;
              return (
                <li key={point.title} className="why-card" data-reveal style={{ transitionDelay: `${index * 80}ms` }}>
                  <span className="why-card__icon">
                    <Icon size={22} strokeWidth={2.2} aria-hidden="true" />
                  </span>
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Factsheet — IndiaMART profile values */}
        <div className="factsheet" data-reveal>
          <div className="factsheet__head">
            <FileText size={20} strokeWidth={2.2} aria-hidden="true" />
            <h3>Company factsheet</h3>
            <span>Basic information, on record</span>
          </div>
          <dl className="factsheet__rows">
            {factsheet.map(([label, value]) => (
              <div className="factsheet__row" key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
