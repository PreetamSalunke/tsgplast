import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star, ExternalLink } from "lucide-react";
import { business, reviews } from "../config";
import "./Reviews.css";

/**
 * Reviews — sirf REAL Google review screenshots dikhte hain.
 * config.js me `reviews` array khali hai → poori section return null (hide).
 *
 * Owner se kaho:
 *  1. Google Business Profile se review screenshots lo (public/img/reviews/)
 *  2. Jin customers ke naam/photo dikhte hain — unki permission lo
 *  3. business.rating / reviewCount / googleReviewUrl me REAL values daalo
 */
export default function Reviews() {
  if (!reviews.length) return null;

  return (
    <section className="section" id="reviews">
      <div className="container">
        <div className="reviews__head" data-reveal>
          <span className="kicker">Google reviews</span>
          <h2 className="section-title">
            {business.rating ? (
              <>
                {business.rating.toFixed(1)}
                <Star size={30} fill="currentColor" aria-hidden="true" /> on Google
              </>
            ) : (
              "What customers say"
            )}
          </h2>
          {business.reviewCount > 0 && (
            <p className="section-sub">Based on {business.reviewCount} Google reviews.</p>
          )}
        </div>

        <div className="reviews__slider" data-reveal style={{ transitionDelay: "120ms" }}>
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1.1}
            spaceBetween={14}
            loop={reviews.length > 2}
            autoplay={{ delay: 4000, pauseOnMouseEnter: true, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2.1 },
              1024: { slidesPerView: 3.1, spaceBetween: 20 },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.img}>
                <figure className="review-card">
                  <img src={review.img} alt={`Google review by ${review.name}`} loading="lazy" />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {business.googleReviewUrl && (
          <div className="reviews__more" data-reveal>
            <a
              className="btn btn--ghost-dark"
              href={business.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read all reviews on Google
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
