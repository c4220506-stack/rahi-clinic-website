export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[70vh] flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-dental-clinic.dim_1600x800.jpg"
          alt="Modern Rahi Clinic interior with dentist and patient"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Overlay: white gradient from left */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-white/10" />
        <div className="absolute inset-0 bg-white/15" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            <span className="text-teal text-sm font-semibold tracking-wide">
              Now accepting new patients
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-slate-dark mb-6">
            Your Smile Is <span className="text-teal">Our Priority</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg text-slate-mid leading-relaxed mb-8 max-w-md">
            Welcome to{" "}
            <strong className="text-slate-dark font-semibold">
              Rahi Clinic
            </strong>{" "}
            — Mumbai's trusted dental care centre. Experience world-class
            dentistry in a warm, modern environment tailored to your comfort.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#contact"
              className="px-8 py-3.5 bg-teal text-white font-bold rounded-full text-base shadow-card hover:bg-teal-dark hover:scale-105 hover:shadow-card-hover transition-all duration-200"
              data-ocid="hero.primary_button"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="px-8 py-3.5 border-2 border-teal text-teal font-bold rounded-full text-base hover:bg-teal/5 hover:scale-105 transition-all duration-200"
              data-ocid="hero.secondary_button"
            >
              Our Services
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 flex flex-wrap gap-6">
            <TrustBadge icon="⭐" text="4.9 / 5 Rating" />
            <TrustBadge icon="🦷" text="5,000+ Happy Patients" />
            <TrustBadge icon="🏆" text="Best Dental Clinic Mumbai 2024" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBadge({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-xs border border-white">
      <span className="text-lg">{icon}</span>
      <span className="text-slate-dark text-sm font-semibold">{text}</span>
    </div>
  );
}
