import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Gallery from "./components/Gallery";
import WhyUs from "./components/WhyUs";
import Reviews from "./components/Reviews";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

/**
 * Page order (B2B industrial buyer ke hisaab se):
 * Hero → Products (kya banate ho) → Gallery (proof) → Why Us + Factsheet (trust)
 * → Reviews (sirf jab real screenshots hon) → FAQ → Contact → Footer
 */
export default function App() {
  // Ek hi IntersectionObserver sab [data-reveal] elements ko animate karta hai
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Gallery />
        <WhyUs />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
