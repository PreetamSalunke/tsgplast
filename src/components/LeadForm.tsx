import { useState } from "react";
import { Phone, Send, ShieldCheck } from "lucide-react";
import { business } from "../config";
import { leadToMessage, openWhatsApp, telUrl } from "../utils/whatsapp";
import "./LeadForm.css";

type LeadFormProps = {
  /** hero aur contact dono jagah use hota hai — ids unique rakhne ke liye */
  idPrefix: string;
  title?: string;
  note?: string;
};

type FormState = { name: string; mobile: string; email: string };
type ErrorState = Partial<FormState>;

/**
 * Lead form — koi BACKEND nahi hai.
 * Submit par user WhatsApp par jaata hai pre-filled message ke saath,
 * isliye button ka text "Send on WhatsApp" hi rakha gaya hai.
 */
export default function LeadForm({ idPrefix, title = "Get the Best Price", note }: LeadFormProps) {
  const [form, setForm] = useState<FormState>({ name: "", mobile: "", email: "" });
  const [errors, setErrors] = useState<ErrorState>({});

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: ErrorState = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name";
    const mobileDigits = form.mobile.replace(/\D/g, "");
    if (!/^[6-9]\d{9}$/.test(mobileDigits)) next.mobile = "Enter a valid 10-digit mobile number";
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "Enter a valid email (or leave it empty)";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    openWhatsApp(leadToMessage(form)); // shared helper — config se number
  };

  return (
    <div className="lead-card" data-reveal>
      <div className="lead-card__head">
        <span className="lead-card__tag">Quick enquiry</span>
        <h3>{title}</h3>
        <p>
          <ShieldCheck size={15} aria-hidden="true" />
          Details go straight to our WhatsApp. No spam, ever.
        </p>
      </div>

      <form className="lead-form" onSubmit={handleSubmit} noValidate>
        <div className="lead-form__field">
          <label htmlFor={`${idPrefix}-name`}>Name</label>
          <input
            id={`${idPrefix}-name`}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            value={form.name}
            onChange={update("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${idPrefix}-name-err` : undefined}
          />
          {errors.name && (
            <span className="lead-form__error" id={`${idPrefix}-name-err`} role="alert">
              {errors.name}
            </span>
          )}
        </div>

        <div className="lead-form__field">
          <label htmlFor={`${idPrefix}-mobile`}>Mobile number</label>
          <input
            id={`${idPrefix}-mobile`}
            name="mobile"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            placeholder="10-digit mobile"
            value={form.mobile}
            onChange={update("mobile")}
            aria-invalid={Boolean(errors.mobile)}
            aria-describedby={errors.mobile ? `${idPrefix}-mobile-err` : undefined}
          />
          {errors.mobile && (
            <span className="lead-form__error" id={`${idPrefix}-mobile-err`} role="alert">
              {errors.mobile}
            </span>
          )}
        </div>

        <div className="lead-form__field">
          <label htmlFor={`${idPrefix}-email`}>
            Email <em>(optional)</em>
          </label>
          <input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={update("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${idPrefix}-email-err` : undefined}
          />
          {errors.email && (
            <span className="lead-form__error" id={`${idPrefix}-email-err`} role="alert">
              {errors.email}
            </span>
          )}
        </div>

        <button type="submit" className="btn btn--whatsapp btn--block">
          <Send size={17} strokeWidth={2.4} aria-hidden="true" />
          Send on WhatsApp
        </button>

        <a href={telUrl()} className="btn btn--ghost-dark btn--block">
          <Phone size={17} strokeWidth={2.4} aria-hidden="true" />
          Call us — {business.phone}
        </a>

        {note && <p className="lead-form__note">{note}</p>}
        <p className="lead-form__note">
          You will be taken to WhatsApp with a pre-filled message — just press send.
        </p>
      </form>
    </div>
  );
}
