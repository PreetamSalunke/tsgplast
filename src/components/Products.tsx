import { ArrowUpRight } from "lucide-react";
import { messages, products } from "../config";
import { openWhatsApp } from "../utils/whatsapp";
import "./Products.css";

export default function Products() {
  if (!products.length) return null;

  return (
    <section className="section" id="products">
      <div className="container">
        <div className="products__head">
          <div data-reveal>
            <span className="kicker">Products &amp; Services</span>
            <h2 className="section-title">What we fabricate</h2>
          </div>
          <p className="products__count" data-reveal style={{ transitionDelay: "120ms" }}>
            <strong>{products.length}</strong> product categories
            <span>Tap any card to ask the best price on WhatsApp</span>
          </p>
        </div>

        <ul className="products__grid">
          {products.map((product, index) => (
            <li
              key={product.name}
              className="product-card"
              data-reveal
              style={{ transitionDelay: `${(index % 4) * 70}ms` }}
            >
              <button
                type="button"
                className="product-card__btn"
                onClick={() => openWhatsApp(messages.product(product.name))}
                aria-label={`Ask best price for ${product.name} on WhatsApp`}
              >
                <span className="product-card__media">
                  <img src={product.img} alt={product.alt} loading="lazy" />
                  <span className="product-card__badge">
                    {product.available} product{product.available > 1 ? "s" : ""} available
                  </span>
                </span>
                <span className="product-card__body">
                  <span className="product-card__name">{product.name}</span>
                  <span className="product-card__blurb">{product.blurb}</span>
                  <span className="product-card__cta">
                    Get best price
                    <ArrowUpRight size={17} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
