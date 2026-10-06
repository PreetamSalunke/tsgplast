import { ArrowUp } from "lucide-react";
import { business, products } from "../config";
import Logo from "./Logo";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear(); // copyright year — automatic
  const half = Math.ceil(products.length / 2);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <a href="#top" className="brand" aria-label={`${business.name} — back to top`}>
              <Logo variant="full" className="brand__logo brand__logo--full" />
              <span className="brand__text">
                <strong>TSG PLAST INDIA</strong>
                <span>
                  {business.city} · Est. {business.established}
                </span>
              </span>
            </a>
            <p>
              {business.natureOfBusiness} &amp; {business.alsoProvides.toLowerCase()} of FRP &amp; PP industrial tanks
              and process equipment. GSTIN {business.gstin}.
            </p>
          </div>

          <nav className="site-footer__col" aria-label="Footer — company">
            <h4>Company</h4>
            <a href="#products">Products &amp; Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#why-us">Why Us</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </nav>

          <nav className="site-footer__col" aria-label="Footer — products">
            <h4>Products</h4>
            {products.slice(0, half).map((p) => (
              <a key={p.name} href="#products">
                {p.name}
              </a>
            ))}
          </nav>

          <nav className="site-footer__col" aria-label="Footer — more products">
            <h4>More</h4>
            {products.slice(half).map((p) => (
              <a key={p.name} href="#products">
                {p.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="site-footer__bottom">
          <p>
            © {year} {business.name}, {business.city}, {business.state}. All rights reserved.
          </p>
          <a href="#top" className="site-footer__top-btn" aria-label="Back to top">
            <ArrowUp size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
