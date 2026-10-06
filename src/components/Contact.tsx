import { MapPin, Phone, Clock, Mail, Navigation } from "lucide-react";
import { business } from "../config";
import { telUrl } from "../utils/whatsapp";
import LeadForm from "./LeadForm";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="section section--dark grid-lines" id="contact">
      <div className="container">
        <div className="contact__head" data-reveal>
          <span className="kicker">Contact</span>
          <h2 className="section-title">Get your quote today</h2>
          <p className="section-sub">
            Share your capacity, chemical and quantity — we reply with the best price.
          </p>
        </div>

        <div className="contact__layout">
          <div className="contact__form" data-reveal style={{ transitionDelay: "100ms" }}>
            <LeadForm idPrefix="contact" title="Tell us your requirement" />
          </div>

          <div className="contact__info" data-reveal style={{ transitionDelay: "180ms" }}>
            <ul className="contact__rows">
              <li>
                <span className="contact__row-icon">
                  <MapPin size={19} strokeWidth={2.2} aria-hidden="true" />
                </span>
                <div>
                  <strong>Address</strong>
                  <p>
                    {business.name}
                    <br />
                    {/* ⚠️ PLACEHOLDER — full address config.js me update karo */}
                    {business.addressLines.map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                    Contact: {business.contactPerson} ({business.contactRole})
                  </p>
                </div>
              </li>
              <li>
                <span className="contact__row-icon">
                  <Phone size={19} strokeWidth={2.2} aria-hidden="true" />
                </span>
                <div>
                  <strong>Call us</strong>
                  <p>
                    <a href={telUrl()}>{business.phone}</a>
                  </p>
                </div>
              </li>
              {business.email && (
                <li>
                  <span className="contact__row-icon">
                    <Mail size={19} strokeWidth={2.2} aria-hidden="true" />
                  </span>
                  <div>
                    <strong>Email</strong>
                    <p>
                      <a href={`mailto:${business.email}`}>{business.email}</a>
                    </p>
                  </div>
                </li>
              )}
              <li>
                <span className="contact__row-icon">
                  <Clock size={19} strokeWidth={2.2} aria-hidden="true" />
                </span>
                <div>
                  <strong>Hours</strong>
                  {/* ⚠️ PLACEHOLDER — real hours config.js me daalo */}
                  <p>{business.hours || "Call to confirm current timings"}</p>
                </div>
              </li>
            </ul>

            {/* Map: real embed ho to iframe, nahi to Get Directions card */}
            {business.mapEmbedUrl ? (
              <div className="contact__map">
                <iframe
                  src={business.mapEmbedUrl}
                  title={`${business.name} on Google Maps`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            ) : (
              <a
                className="contact__directions"
                href={business.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Get directions to ${business.name} on Google Maps`}
              >
                <span className="contact__directions-pin">
                  <MapPin size={26} strokeWidth={2.2} aria-hidden="true" />
                </span>
                <span className="contact__directions-text">
                  <strong>{business.name}</strong>
                  <span>
                    {business.city}, {business.state}
                  </span>
                </span>
                <span className="contact__directions-btn">
                  <Navigation size={15} aria-hidden="true" />
                  Get Directions
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
