import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { business } from "../config";
import { telUrl } from "../utils/whatsapp";
import Logo from "./Logo";
import "./Header.css";

const NAV = [
  { label: "Products", href: "#products" },
  { label: "Gallery", href: "#gallery" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  // Scroll par header ko solid ink background dete hain (hero ke upar transparent rehta hai)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a className="skip-link" href="#products">
        Skip to content
      </a>
      <header className={`site-header ${scrolled ? "site-header--solid" : ""}`}>
        <div className="container site-header__inner">
          <a href="#top" className="brand" aria-label={`${business.name} — home`}>
            <Logo variant="mark" className="brand__logo" />
            <span className="brand__text">
              <strong>TSG PLAST INDIA</strong>
              <span>
                {business.city} · Est. {business.established}
              </span>
            </span>
          </a>

          <nav className="site-nav" aria-label="Primary">
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="btn btn--accent site-header__call" href={telUrl()} aria-label={`Call ${business.name} now`}>
            <Phone size={17} strokeWidth={2.4} aria-hidden="true" />
            <span className="site-header__call-text">Call Now</span>
          </a>
        </div>
      </header>
    </>
  );
}
