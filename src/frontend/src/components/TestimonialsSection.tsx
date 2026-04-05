import { useCallback, useEffect, useState } from "react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Orthodontics Patient",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    quote:
      "Dr. Rahi and his team are absolutely wonderful. My Invisalign treatment was painless and I saw results within weeks. The clinic is spotlessly clean and the staff are so warm and professional.",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    role: "Dental Implant Patient",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    quote:
      "I was extremely nervous about my implant procedure but Dr. Rahi made me feel completely at ease. The implants look so natural \u2014 no one can tell they aren't my real teeth. Life-changing!",
  },
  {
    id: 3,
    name: "Anjali Singh",
    role: "General Dentistry Patient",
    avatar:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80",
    quote:
      "I've been bringing my entire family to Rahi Clinic for three years now. The children feel completely comfortable here \u2014 no tears, no fear! Dr. Rahi explains every step clearly and is truly patient with kids.",
  },
  {
    id: 4,
    name: "Vikram Patel",
    role: "Oral Surgery Patient",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    quote:
      "Had a complex wisdom tooth extraction and was dreading it. The procedure was smooth, recovery was fast, and the post-op care was exceptional. Best dental clinic in Mumbai, without a doubt.",
  },
  {
    id: 5,
    name: "Kavitha Nair",
    role: "Cosmetic Dentistry Patient",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&q=80",
    quote:
      "My smile makeover at Rahi Clinic was the best investment I've ever made. The veneers look stunning and completely natural. Dr. Rahi has an incredible eye for aesthetics and truly listens to what you want.",
  },
];

const STARS = [1, 2, 3, 4, 5];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
    );
  }, []);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [paused, next]);

  const visibleCards = [0, 1].map(
    (offset) => TESTIMONIALS[(current + offset) % TESTIMONIALS.length],
  );

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-slate-light"
      aria-label="Patient testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-teal text-sm font-semibold uppercase tracking-widest text-center mb-3">
          Patient Stories
        </p>
        <h2 className="section-title">What Our Patients Say</h2>
        <p className="section-subtitle">
          Real experiences from real patients \u2014 because your trust means
          everything to us.
        </p>

        <div className="mt-12 relative">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleCards.map((testimonial, idx) => (
              <TestimonialCard
                key={`${testimonial.id}-${idx}`}
                testimonial={testimonial}
                index={idx + 1}
              />
            ))}
          </div>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={prev}
              className="w-11 h-11 rounded-full border-2 border-teal text-teal flex items-center justify-center hover:bg-teal hover:text-white transition-all duration-200"
              aria-label="Previous testimonial"
              data-ocid="testimonials.pagination_prev"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M10 12L6 8l4-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((t, idx) => (
                <button
                  type="button"
                  key={t.id}
                  onClick={() => setCurrent(idx)}
                  className={`rounded-full transition-all duration-200 ${
                    idx === current
                      ? "w-6 h-2.5 bg-teal"
                      : "w-2.5 h-2.5 bg-slate-mid/40 hover:bg-teal/50"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  data-ocid="testimonials.toggle"
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="w-11 h-11 rounded-full border-2 border-teal text-teal flex items-center justify-center hover:bg-teal hover:text-white transition-all duration-200"
              aria-label="Next testimonial"
              data-ocid="testimonials.pagination_next"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="oklch(0.78 0.155 76)"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M8 1l1.8 3.6L14 5.4l-3 2.9.7 4.1L8 10.4l-3.7 2 .7-4.1L2 5.4l4.2-.8L8 1z" />
    </svg>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
  index: number;
}) {
  return (
    <article
      className="bg-white rounded-2xl p-7 shadow-card flex flex-col gap-4 border border-border"
      data-ocid={`testimonials.item.${index}`}
    >
      {/* Stars */}
      <div className="flex gap-0.5">
        {STARS.map((n) => (
          <StarIcon key={n} />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-slate-mid leading-relaxed text-sm flex-1">
        <span className="text-teal font-bold text-2xl leading-none mr-1">
          &ldquo;
        </span>
        {testimonial.quote}
        <span className="text-teal font-bold text-2xl leading-none ml-1">
          &rdquo;
        </span>
      </blockquote>

      {/* Patient */}
      <div className="flex items-center gap-3 pt-2 border-t border-border">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-teal/20 flex-shrink-0 bg-teal/10">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
        <div>
          <p className="font-bold text-slate-dark text-sm">
            {testimonial.name}
          </p>
          <p className="text-slate-mid text-xs">{testimonial.role}</p>
        </div>
      </div>
    </article>
  );
}
