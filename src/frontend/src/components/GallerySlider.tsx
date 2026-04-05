import { useCallback, useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    id: 1,
    src: "/assets/generated/gallery-dental-1.dim_800x600.jpg",
    alt: "Advanced dental implant procedure at Rahi Clinic",
    caption: "Advanced Implant Procedures",
    sub: "Precision, care, and lasting results",
  },
  {
    id: 2,
    src: "/assets/generated/gallery-dental-2.dim_800x600.jpg",
    alt: "Happy patient with perfect smile after treatment",
    caption: "Smile Transformations",
    sub: "Real results that change lives",
  },
  {
    id: 3,
    src: "/assets/generated/gallery-dental-3.dim_800x600.jpg",
    alt: "Modern and welcoming clinic waiting room",
    caption: "A Comfortable Clinic Environment",
    sub: "Designed with your comfort in mind",
  },
  {
    id: 4,
    src: "/assets/generated/gallery-dental-4.dim_800x600.jpg",
    alt: "Doctor consulting patient with digital X-ray",
    caption: "Transparent Treatment Planning",
    sub: "Clear communication every step of the way",
  },
];

export default function GallerySlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent((index + SLIDES.length) % SLIDES.length);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning],
  );

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Touch / swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="gallery"
      className="py-20 md:py-28 bg-white"
      aria-label="Clinic gallery"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <p className="text-teal text-sm font-semibold uppercase tracking-widest text-center mb-3">
          Our Clinic
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-dark text-center mb-2">
          A Glimpse Inside Rahi Clinic
        </h2>
        <p className="text-slate-mid text-center max-w-xl mx-auto mb-12">
          State-of-the-art facilities designed to deliver the best dental
          experience in Mumbai.
        </p>

        {/* Slider container */}
        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          aria-roledescription="carousel"
          aria-label="Clinic gallery carousel"
        >
          {/* Slides */}
          <div className="relative w-full h-[380px] sm:h-[480px] md:h-[540px]">
            {SLIDES.map((slide, i) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  i === current
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-105 z-0"
                }`}
                aria-hidden={i !== current}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                {/* Caption overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div
                  className={`absolute bottom-0 left-0 right-0 p-8 transition-all duration-500 ${
                    i === current
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  <p className="text-teal text-sm font-semibold mb-1">
                    {slide.sub}
                  </p>
                  <h3 className="text-white text-2xl sm:text-3xl font-bold">
                    {slide.caption}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Prev / Next arrow buttons */}
          <button
            type="button"
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
            aria-label="Previous slide"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 4L6 10L12 16"
                stroke="#0d7070"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
            aria-label="Next slide"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 4L14 10L8 16"
                stroke="#0d7070"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Dot indicators + thumbnail strip */}
        <div className="mt-8 flex flex-col items-center gap-6">
          {/* Dots */}
          <div
            className="flex gap-2"
            role="tablist"
            aria-label="Slide indicators"
          >
            {SLIDES.map((slide, i) => (
              <button
                type="button"
                key={slide.id}
                role="tab"
                aria-selected={i === current}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "w-8 h-3 bg-teal"
                    : "w-3 h-3 bg-slate-300 hover:bg-teal/50"
                }`}
              />
            ))}
          </div>

          {/* Thumbnails */}
          <div className="hidden sm:flex gap-3">
            {SLIDES.map((slide, i) => (
              <button
                type="button"
                key={slide.id}
                onClick={() => goTo(i)}
                aria-label={`View slide: ${slide.caption}`}
                className={`relative rounded-xl overflow-hidden transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal ${
                  i === current
                    ? "w-24 h-16 ring-2 ring-teal scale-105 shadow-lg"
                    : "w-20 h-14 opacity-60 hover:opacity-90 hover:scale-105"
                }`}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
