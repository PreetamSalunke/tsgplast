import { business } from "../config";
import "./Logo.css";

type LogoProps = {
  /** "mark" = sirf oval + TSG (header ke liye chhota), "full" = PLAST INDIA ke saath */
  variant?: "mark" | "full";
  className?: string;
};

/**
 * LOGO — TSG Plast India ka vector (SVG) recreation.
 * Kyun SVG? Har screen size par crisp, ~1 KB, koi HTTP request nahi.
 *
 * Agar aapke paas original logo file hai (PNG/SVG): use
 *   public/img/logo.png  me daal do aur src/config.js me
 *   business.logo = "/img/logo.png"  set kar do —
 * tab yeh component AUTOMATICALLY asli file dikha dega (SVG ki jagah).
 */
export default function Logo({ variant = "mark", className = "" }: LogoProps) {
  // Owner ne asli logo file diya ho to wahi use karo
  if (business.logo) {
    return (
      <img
        src={business.logo}
        alt={`${business.name} logo`}
        className={`logo-img ${className}`}
        width={160}
        height={100}
      />
    );
  }

  const isFull = variant === "full";

  return (
    <svg
      viewBox={isFull ? "0 0 240 152" : "0 0 240 140"}
      className={`logo ${className}`}
      role="img"
      aria-label={`${business.name} logo`}
    >
      {/* Oval ring — logo ka black outline */}
      <ellipse
        cx="120"
        cy={isFull ? 68 : 68}
        rx="112"
        ry="60"
        fill="var(--logo-plate, #ffffff)"
        stroke="currentColor"
        strokeWidth="9"
      />

      {/* TSG wordmark — thoda skew taaki logo jaisa italic feel aaye */}
      <text
        x="120"
        y="90"
        textAnchor="middle"
        fontFamily="Archivo, Arial Black, sans-serif"
        fontWeight="900"
        fontSize="62"
        letterSpacing="-1"
        fill="currentColor"
        transform="skewX(-6)"
        style={{ transformOrigin: "120px 68px" }}
      >
        TSG
      </text>

      {/* Blue swoosh — logo ka signature cut */}
      <path
        d="M56 97 C104 112 142 74 198 66 L198 78 C148 86 110 120 56 106 Z"
        fill="var(--accent, #0f76b4)"
      />

      {/* PLAST INDIA — sirf full variant me */}
      {isFull && (
        <text
          x="120"
          y="132"
          textAnchor="middle"
          fontFamily="Archivo, Arial, sans-serif"
          fontWeight="700"
          fontSize="21"
          letterSpacing="2.4"
          fill="var(--accent, #0f76b4)"
        >
          PLAST INDIA
        </text>
      )}
    </svg>
  );
}
