import { Phone } from "lucide-react";
import { business } from "../config";
import { openWhatsApp, telUrl } from "../utils/whatsapp";
import "./FloatingButtons.css";

/**
 * Floating actions — mobile-first conversion:
 * LEFT = Call (tel: link), RIGHT = WhatsApp (wa.me prefilled).
 * Dono ≥56px tap target, safe-area aware.
 */
export default function FloatingButtons() {
  return (
    <div className="fab-wrap" aria-hidden="false">
      <a className="fab fab--call" href={telUrl()} aria-label={`Call ${business.name}`}>
        <Phone size={22} strokeWidth={2.3} />
      </a>
      <button
        type="button"
        className="fab fab--whatsapp"
        onClick={() => openWhatsApp()}
        aria-label={`Chat with ${business.name} on WhatsApp`}
      >
        {/* WhatsApp brand glyph (lucide has no WhatsApp icon) */}
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
          <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.11.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.28-.2-.57-.35ZM12.05 21.79h-.01a9.82 9.82 0 0 1-5-1.37l-.36-.21-3.72.97.99-3.62-.23-.37a9.77 9.77 0 0 1-1.5-5.21c0-5.4 4.4-9.79 9.83-9.79a9.75 9.75 0 0 1 9.82 9.8c0 5.4-4.42 9.8-9.82 9.8Zm8.35-18.15A11.72 11.72 0 0 0 12.05 0C5.5 0 .16 5.33.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.31-1.65a11.9 11.9 0 0 0 5.68 1.44h.01c6.55 0 11.89-5.33 11.89-11.9 0-3.18-1.24-6.16-3.55-8.4Z" />
        </svg>
      </button>
    </div>
  );
}
