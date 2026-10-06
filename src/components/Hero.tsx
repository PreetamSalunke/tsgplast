import { Phone, Send, ShieldCheck } from "lucide-react";
import { business, products } from "../config";
import { openWhatsApp, telUrl } from "../utils/whatsapp";
import LeadForm from "./LeadForm";
import SmartImage from "./SmartImage";
import "./Hero.css";

export default function Hero() {
  const marqueeItems = [...products.map((p) => p.name), "Fabricating since 2002", "GST-registered", "Pune, Maharashtra"];

  return (
    <section className="hero" id="top">
      {/* Background = aapki real plant photo. SmartImage config.heroImages ki
          list ko order me try karta hai — pehli mili hui file dikhti hai.
          Kuch na mile to gradient fallback dikhta hai, broken icon kabhi nahi. */}
      <div className="hero__bg" aria-hidden="true">
        <SmartImage sources={business.heroImages} alt="" loading="eager" fetchPriority="high" className="hero__img" />
        <div className="hero__overlay" />
      </div>

      <div className="container hero__inner">
        <div className="hero__copy">
          <div className="hero__chips" data-reveal>
            <span className="chip">Est. {business.established}</span>
            <span className="chip">GST-registered</span>
            <span className="chip">
              {business.city}, {business.state}
            </span>
          </div>

          <h1 className="hero__title" data-reveal style={{ transitionDelay: "80ms" }}>
            Tough tanks for <span>harsh chemicals.</span>
          </h1>

          <p className="hero__sub" data-reveal style={{ transitionDelay: "160ms" }}>
            {business.name} fabricates FRP &amp; PP chemical storage tanks, pickling tanks, dosing systems, fume
            scrubbers and complete electroplating plants — at our own unit in {business.city}, since{" "}
            {business.established}.
          </p>

          <div className="hero__cta" data-reveal style={{ transitionDelay: "240ms" }}>
            <button type="button" className="btn btn--whatsapp" onClick={() => openWhatsApp()}>
              <Send size={18} strokeWidth={2.4} aria-hidden="true" />
              Send on WhatsApp
            </button>
            <a className="btn btn--ghost-light" href={telUrl()}>
              <Phone size={18} strokeWidth={2.4} aria-hidden="true" />
              Call Now
            </a>
          </div>

          <p className="hero__meta" data-reveal style={{ transitionDelay: "320ms" }}>
            <ShieldCheck size={16} aria-hidden="true" />
            GSTIN {business.gstin} · Manufacturer &amp; Service Provider
          </p>
        </div>

        <aside className="hero__form" aria-label="Quick enquiry form">
          <LeadForm idPrefix="hero" />
        </aside>
      </div>

      {/* Product marquee strip */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[0, 1].map((copyIndex) => (
            <div className="marquee__copy" key={copyIndex}>
              {marqueeItems.map((item) => (
                <span className="marquee__item" key={`${copyIndex}-${item}`}>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
