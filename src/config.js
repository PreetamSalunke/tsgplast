/* =====================================================================
   config.js — TSG Plast India ki SAARI details yahin hain (single source).
   Number / address / hours / reviews badalna ho → SIRF yeh file edit karo.
   Kahin aur koi number hard-code NAHI hai.

   ⚠️ PLACEHOLDERS jo REPLACE karne hain (owner se confirm karke):
   - phone, whatsapp      → abhi SAMPLE number hai (91 98765 43210)
   - email, addressLines  → abhi khali hai → UI me auto-hide ho jaata hai
   - hours, mapEmbedUrl, rating, reviews
   ===================================================================== */

export const business = {
  name: "TSG Plast India",
  tagline: "FRP & PP industrial tanks, fabricated in Pune",
  city: "Pune",
  state: "Maharashtra",
  established: 2002,

  // --- LOGO ---
  // Original logo file ho (PNG/JPG/SVG) → public/img/logo.png me daalo aur
  // yahan "/img/logo.png" likh do. Khali ("") rahe to built-in SVG logo dikhega.
  logo: "/img/logo.jpg",

  // --- HERO BACKGROUND ---
  // ✅ APNI PHOTO YAHAN DAALO (sirf file copy karo, code nahi badalna):
  //
  //        public/img/plant-dusk.jpg
  //
  // Aap .jpg / .jpeg / .png / .webp — KOI BHI extension use kar sakte ho,
  // aur naam "plant-dusk" nahi bhi ho to neeche wali list me us naam add kar do.
  // Jo file sabse pehle mil jaati hai wahi dikhti hai.
  heroImages: [
    "/img/plant-dusk.jpg",
    "/img/plant-dusk.jpeg",
    "/img/plant-dusk.png",
    "/img/plant-dusk.webp",
    // Fallback: ye files abhi folder me hain, isliye kuch na ho to yeh dikhta hai
    "/img/factory.jpg",
    "/img/hero.jpg",
  ],

  // --- IndiaMART profile se confirm facts ---
  gstin: "27BFMPT4987D1ZR",
  gstRegistrationDate: "2021",
  natureOfBusiness: "Manufacturer",
  alsoProvides: "Service Provider",
  ceo: "V Tiwari",
  contactPerson: "Vivek Shashidhar Tiwari",
  contactRole: "Manager",
  employees: "Up to 10 people",
  legalStatus: "Proprietorship",
  banker: "State Bank of India",

  // --- ⚠️ SAMPLE / PLACEHOLDER — replace with real values ---
  phone: "+91 9834777565", // display format (SAMPLE)
  whatsapp: "919834777565", // digits only, country code 91 + number (SAMPLE)
  email: "", // e.g. "sales@tsgplast.in" — khali rahe to email row hide rahegi
  instagram: "", // e.g. "tsgplastindia" — khali rahe to Instagram pill hide
  hours: "", // e.g. "Mon–Sat: 9:30 AM – 6:30 PM" — khali rahe to "Call to confirm"
  addressLines: ["Pune, Maharashtra, India"], // full address milte hi update karo
  mapEmbedUrl: "", // Google Maps iframe src milne par yahan daalo
  googleReviewUrl: "", // real Google reviews link
  rating: 5.0, // e.g. 4.9 — sirf REAL rating daalna
  reviewCount: 3,

  // Get Directions fallback (embed na ho to yeh button dikhta hai)
  mapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=TSG+Plast+India+Pune+Maharashtrahttps://maps.app.goo.gl/yYa3RoxZMHEHQtUS7",
};

/* WhatsApp message templates — encode helper whatsapp.js me hota hai */
export const messages = {
  general: `Hello ${business.name}, I found your website and I have a requirement. Please contact me.`,
  product: (productName) =>
    `Hello ${business.name}, I am interested in your ${productName}. Please share the best price and specifications.`,
};

/* ---------------------------------------------------------------------
   Products — IndiaMART listing ke 8 categories.
   NOTE: images abhi AI-GENERATED "representative" photos hain —
   factory ki asli photos aate hi public/img/ me same naam se replace
   kar do (ya yahan path badal do). Naya item add karna ho → ek line add karo.
   --------------------------------------------------------------------- */
export const products = [
  {
    name: "Chemical Storage Tank",
    available: 6,
    img: "/img/cat-chemical-tank.jpg",
    alt: "Representative photo of a vertical FRP chemical storage tank",
    blurb: "PP & FRP tanks sized for acids, alkalis and process chemicals.",
  },
  {
    name: "Pickling Tank",
    available: 2,
    img: "/img/cat-pickling-tank.jpg",
    alt: "Representative photo of rectangular polypropylene pickling tanks",
    blurb: "Acid-resistant PP tanks for pickling and surface-treatment lines.",
  },
  {
    name: "FRP Lining Tanks",
    available: 2,
    img: "/img/cat-frp-lining.jpg",
    alt: "Representative photo of FRP fibreglass lining being applied inside a tank",
    blurb: "Corrosion-proof FRP lining for steel tanks, pits and vessels.",
  },
  {
    name: "FRP Dosing Tanks",
    available: 1,
    img: "/img/cat-dosing-tank.jpg",
    alt: "Representative photo of a chemical dosing tank with metering pump",
    blurb: "Compact dosing tanks with level gauge, ready for metering pumps.",
  },
  {
    name: "UPVC Cylinder Cover",
    available: 1,
    img: "/img/cat-cylinder-cover.jpg",
    alt: "Representative photo of white UPVC pipe and cylinder covers",
    blurb: "UPVC protective covers and casing for pipes and cylinders.",
  },
  {
    name: "Electroplating Plant",
    available: 1,
    img: "/img/cat-electroplating.jpg",
    alt: "Representative photo of an electroplating plant tank line",
    blurb: "Complete PP tank lines for electroplating and finishing shops.",
  },
  {
    name: "Air Line Filter",
    available: 1,
    img: "/img/cat-air-filter.jpg",
    alt: "Representative photo of an industrial compressed air line filter",
    blurb: "Compressed-air line filters for pneumatic and plant air setups.",
  },
  {
    name: "Scrubber System",
    available: 1,
    img: "/img/cat-scrubber.jpg",
    alt: "Representative photo of a tall FRP wet scrubber column",
    blurb: "FRP fume scrubbers for exhaust and pollution-control systems.",
  },
];

/* Gallery slides — ⚠️ abhi AI-generated representative images hain.
   Asli photos: public/img/ me daalo (lowercase, no spaces) aur yahan lines badlo.
   "sources" me ek se zyada naam de sakte ho — jo file pehle mil jaaye wahi dikhegi. */
export const gallery = [
  {
    caption: "Our manufacturing plant, Pune",
    sources: ["/img/plant-dusk.jpg", "/img/plant-dusk.jpeg", "/img/plant-dusk.png", "/img/factory.jpg"],
  },
  { caption: "Tank fabrication in progress", sources: ["/img/hero.jpg"] },
  { caption: "Industrial fabrication unit", sources: ["/img/factory.jpg"] },
  { caption: "FRP chemical storage tanks", sources: ["/img/cat-chemical-tank.jpg"] },
  { caption: "FRP scrubber system", sources: ["/img/cat-scrubber.jpg"] },
  { caption: "PP pickling tank line", sources: ["/img/cat-pickling-tank.jpg"] },
  { caption: "FRP lining application", sources: ["/img/cat-frp-lining.jpg"] },
];

/* Why choose us — SIRF IndiaMART profile ke real facts se */
export const whyUs = [
  {
    icon: "badge-check",
    title: "GST-registered manufacturer",
    text: "A verified manufacturing business with GSTIN 27BFMPT4987D1ZR — clean paperwork for your plant purchase.",
  },
  {
    icon: "history",
    title: "Fabricating since 2002",
    text: "Established as a proprietor firm in 2002 — over two decades of hands-on FRP and PP fabrication work.",
  },
  {
    icon: "factory",
    title: "Own manufacturing unit in Pune",
    text: "Everything is fabricated at our Pune unit and installed as a complete solution — product plus service.",
  },
  {
    icon: "users",
    title: "Small team, owner-led work",
    text: "A tight team of up to 10 people means you talk directly to the people who actually build your tank.",
  },
];

/* Factsheet — IndiaMART profile values (verbatim where possible) */
export const factsheet = [
  ["Nature of Business", business.natureOfBusiness],
  ["Additional Business", business.alsoProvides],
  ["Company CEO", business.ceo],
  ["Total Employees", business.employees],
  ["Legal Status of Firm", business.legalStatus],
  ["GST Registration Date", business.gstRegistrationDate],
  ["GST No.", business.gstin],
  ["Banker", business.banker],
];

/* ---------------------------------------------------------------------
   FAQs — ⚠️ SAMPLE ANSWERS: owner se confirm NAHI hue hain.
   Owner confirm kare tab tak inhe draft samjho; confirm hone par yahan
   hi text update kar do. Questions real product range par based hain.
   --------------------------------------------------------------------- */
export const faqs = [
  {
    q: "Do you make custom sizes and capacities?",
    // SAMPLE ANSWER — confirm with owner:
    a: "Yes. Share your required capacity (in litres or KL) and the chemical you need to store, and we fabricate the tank to your drawing or site requirement.",
  },
  {
    q: "Which materials do you work with?",
    // SAMPLE ANSWER — confirm with owner:
    a: "Primarily PP (polypropylene), FRP (fibreglass) and UPVC — chosen based on the chemical, temperature and concentration involved in your process.",
  },
  {
    q: "Do you also install and service the equipment?",
    // SAMPLE ANSWER — profile lists "Service Provider" as well, confirm scope:
    a: "Yes. Along with manufacturing, we support installation and service for the systems we build — including scrubber systems and electroplating lines.",
  },
  {
    q: "How do I get a price for my requirement?",
    // Safe process answer (no price claims):
    a: "Send your requirement on WhatsApp or call us with the capacity, chemical and quantity. You will get a quotation with the best price and delivery time.",
  },
  {
    q: "Do you deliver outside Pune?",
    // SAMPLE ANSWER — confirm with owner:
    a: "Pune and nearby industrial areas are our home ground. For other cities across Maharashtra and India, share your location and we will confirm delivery feasibility.",
  },
  {
    q: "How long does fabrication take?",
    // SAMPLE ANSWER — confirm with owner:
    a: "Timelines depend on size and material. Once your drawing or specification is final, we confirm a committed delivery date with the quotation.",
  },
];

/* ---------------------------------------------------------------------
   Reviews — REAL Google review screenshots yahan daalo (public/img/reviews/)
   aur owner se un customers ki permission le lo (names/photos dikhte hain).
   Khali rahe to poori section automatically hide ho jaati hai.
   Example item: { img: "/img/reviews/review-1.webp", name: "Rahul S.", text: "optional caption" }
   --------------------------------------------------------------------- */
export const reviews = [];
