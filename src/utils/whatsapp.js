/* =====================================================================
   whatsapp.js — WhatsApp / Call ke liye SHARED helpers.
   Kyun: wa.me link banana, tel: link banana — sab jagah same logic,
   number sirf config.js se aata hai.
   ===================================================================== */

import { business, messages } from "../config";

/** Sirf digits rakhe (wa.me ko "+", spaces nahi chahiye) */
const digits = (str) => (str || "").toString().replace(/\D/g, "");

/** wa.me URL — message safely encode hoke */
export function waUrl(message = messages.general) {
  return `https://wa.me/${digits(business.whatsapp)}?text=${encodeURIComponent(message)}`;
}

/** Naye tab me WhatsApp kholta hai (prefilled message ke saath) */
export function openWhatsApp(message = messages.general) {
  window.open(waUrl(message), "_blank", "noopener,noreferrer");
}

/** tel:+91XXXXXXXXXX link */
export function telUrl() {
  return `tel:+${digits(business.phone)}`;
}

/** Lead form ka data → WhatsApp message text */
export function leadToMessage({ name, mobile, email }) {
  const lines = [
    `Hello ${business.name}, I am ${name}.`,
    `My mobile number: ${mobile}`,
  ];
  if (email && email.trim()) lines.push(`Email: ${email.trim()}`);
  lines.push("I have a requirement. Please contact me with details and best price.");
  return lines.join("\n");
}
