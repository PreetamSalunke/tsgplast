import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { gallery } from "../config";
import SmartImage from "./SmartImage";
import "./Gallery.css";

/* NOTE: current photos are AI-GENERATED representative images.
   Factory ki asli photos/videos (compressed, lowercase filenames) ko
   public/img/ me daal kar config.js ke `gallery` array me add kar do —
   ek line add karne se naya slide ban jaata hai. */
export default function Gallery() {
  if (!gallery.length) return null;

  return (
    <section className="section section--dark grid-lines" id="gallery">
      <div className="container">
        <div className="gallery__head" data-reveal>
          <div>
            <span className="kicker">Inside the works</span>
            <h2 className="section-title">From our fabrication floor</h2>
          </div>
          <p className="section-sub">
            Tanks, scrubbers and process lines mid-build. Real unit photos coming soon — images shown are
            representative of the products we fabricate.
          </p>
        </div>
      </div>

      <div className="gallery__slider" data-reveal style={{ transitionDelay: "140ms" }}>
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1.08}
          spaceBetween={14}
          centeredSlides
          loop
          autoplay={{ delay: 3400, pauseOnMouseEnter: true, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.7, spaceBetween: 18 },
            1024: { slidesPerView: 2.15, spaceBetween: 22 },
          }}
        >
          {gallery.map((slide) => (
            <SwiperSlide key={slide.img}>
              <figure className="gallery-slide">
                <SmartImage sources={slide.sources} alt={slide.caption} loading="lazy" />
                <figcaption className="gallery-slide__caption">{slide.caption}</figcaption>
                <span className="gallery-slide__tag">Representative image</span>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
