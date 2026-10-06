import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "../config";
import { openWhatsApp } from "../utils/whatsapp";
import "./Faq.css";

/**
 * FAQ accordion — answers config.js se aate hain.
 * ⚠️ Kuch answers SAMPLE hain (config.js me comment marked) —
 * owner se confirm hone ke baad wahi file update karni hai.
 */
export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs.length) return null;

  return (
    <section className="section" id="faq">
      <div className="container faq__layout">
        <div className="faq__intro" data-reveal>
          <span className="kicker">Common questions</span>
          <h2 className="section-title">Before you call</h2>
          <p className="section-sub">
            Quick answers about materials, custom sizes and pricing. Something specific? Ask us directly on WhatsApp.
          </p>
          <button type="button" className="btn btn--ghost-dark faq__cta" onClick={() => openWhatsApp()}>
            Ask on WhatsApp
          </button>
        </div>

        <div className="faq__list" data-reveal style={{ transitionDelay: "120ms" }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div className={`faq-item ${isOpen ? "faq-item--open" : ""}`} key={faq.q}>
                <button
                  type="button"
                  className="faq-item__q"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-button-${index}`}
                >
                  <span>{faq.q}</span>
                  <Plus size={20} strokeWidth={2.4} aria-hidden="true" />
                </button>
                <div
                  className="faq-item__a"
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                >
                  <div className="faq-item__a-inner">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
