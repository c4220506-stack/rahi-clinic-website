const STATS = [
  { value: "15+", label: "Years of Experience" },
  { value: "5,000+", label: "Patients Treated" },
  { value: "12", label: "Awards & Recognitions" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-slate-light"
      aria-label="About us"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-teal text-sm font-semibold uppercase tracking-widest text-center mb-3">
          Our Expert Team
        </p>
        <h2 className="section-title">Meet Our Chief Surgeon</h2>
        <p className="section-subtitle">
          A commitment to clinical excellence and compassionate care.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Doctor Portrait */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80"
                alt="Dr. Arjun Rahi, Chief Surgeon at Rahi Clinic"
                className="w-full h-[500px] object-cover object-top"
                loading="lazy"
              />
              {/* Teal accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-teal" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 md:right-auto md:left-8 bg-white rounded-2xl shadow-card p-5 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center">
                <span className="text-2xl">🦷</span>
              </div>
              <div>
                <p className="text-xs text-slate-mid font-medium">Specialty</p>
                <p className="text-sm font-bold text-slate-dark">
                  Oral & Maxillofacial Surgery
                </p>
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="pt-6 md:pt-0">
            <h3 className="text-3xl font-bold text-slate-dark mb-2">
              Dr. Arjun Rahi
            </h3>
            <p className="text-teal font-semibold mb-6">
              MDS (Oral Surgery) · AIIMS Delhi Graduate
            </p>

            <p className="text-slate-mid leading-relaxed mb-4">
              With over 15 years of dedicated practice, Dr. Arjun Rahi has
              transformed thousands of smiles across Mumbai. A graduate of AIIMS
              Delhi, he completed his advanced training in oral and
              maxillofacial surgery in the UK and brings international standards
              to every procedure at Rahi Clinic.
            </p>
            <p className="text-slate-mid leading-relaxed mb-8">
              Dr. Rahi believes that dental care is fundamentally about trust.
              His patient-first philosophy ensures every visit is comfortable,
              transparent, and results-driven — whether it's a routine cleaning
              or complex reconstruction.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-white rounded-2xl shadow-card border border-border"
                >
                  <p className="text-3xl font-bold text-teal">{stat.value}</p>
                  <p className="text-xs text-slate-mid mt-1 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-teal text-white font-bold rounded-full hover:bg-teal-dark hover:scale-105 hover:shadow-card-hover transition-all duration-200"
              data-ocid="about.primary_button"
            >
              Book a Consultation
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
