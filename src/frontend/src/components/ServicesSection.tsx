const SERVICES = [
  {
    id: 1,
    title: "General Dentistry",
    description:
      "Comprehensive check-ups, professional cleanings, fillings, and preventive care to maintain optimal oral health for the whole family.",
    icon: <ToothSvg />,
  },
  {
    id: 2,
    title: "Orthodontics",
    description:
      "Straighten your teeth with modern braces and clear aligner therapy. Achieve a confident, perfectly aligned smile at any age.",
    icon: <BracesSvg />,
  },
  {
    id: 3,
    title: "Oral Surgery",
    description:
      "Expert surgical care including tooth extractions, dental implants, and corrective jaw procedures — performed with precision and care.",
    icon: <ScalpelSvg />,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-white"
      aria-label="Our services"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-teal text-sm font-semibold uppercase tracking-widest text-center mb-3">
          What We Offer
        </p>
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive dental care for every member of your family, delivered
          with compassion and the latest technology.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl border border-border p-8 flex flex-col items-center text-center shadow-card hover:-translate-y-2 hover:shadow-card-hover transition-all duration-300 cursor-default"
              data-ocid={`services.item.${service.id}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center mb-6 group-hover:bg-teal/20 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-dark mb-3">
                {service.title}
              </h3>
              <p className="text-slate-mid leading-relaxed text-sm">
                {service.description}
              </p>
              <div className="mt-6 w-8 h-0.5 bg-teal rounded-full group-hover:w-16 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ToothSvg() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 6C7 6 4 9 4 12c0 2.5 1.2 4.5 3 5.8L9 26h3l1.5-5h3L18 26h3l2-8.2c1.8-1.3 3-3.3 3-5.8 0-3-3-6-6-6-1.5 0-2.8.6-3.7 1.5C15.3 6.6 13.8 6 12 6h-2z"
        stroke="oklch(0.738 0.112 185)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BracesSvg() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="12"
        width="24"
        height="8"
        rx="3"
        stroke="oklch(0.738 0.112 185)"
        strokeWidth="1.8"
      />
      <circle
        cx="9"
        cy="16"
        r="2"
        stroke="oklch(0.738 0.112 185)"
        strokeWidth="1.8"
      />
      <circle
        cx="16"
        cy="16"
        r="2"
        stroke="oklch(0.738 0.112 185)"
        strokeWidth="1.8"
      />
      <circle
        cx="23"
        cy="16"
        r="2"
        stroke="oklch(0.738 0.112 185)"
        strokeWidth="1.8"
      />
      <path
        d="M9 14V12M9 18V20"
        stroke="oklch(0.738 0.112 185)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M16 14V12M16 18V20"
        stroke="oklch(0.738 0.112 185)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M23 14V12M23 18V20"
        stroke="oklch(0.738 0.112 185)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M4 16 C4 16 6 13 9 16"
        stroke="oklch(0.738 0.112 185)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M23 16 C26 13 28 16 28 16"
        stroke="oklch(0.738 0.112 185)"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

function ScalpelSvg() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 26 L22 8"
        stroke="oklch(0.738 0.112 185)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M22 8 L26 4 L28 8 L24 10 L22 8Z"
        stroke="oklch(0.738 0.112 185)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M6 26 C8 24 12 22 14 24"
        stroke="oklch(0.738 0.112 185)"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <circle
        cx="10"
        cy="21"
        r="2"
        stroke="oklch(0.738 0.112 185)"
        strokeWidth="1.6"
      />
    </svg>
  );
}
