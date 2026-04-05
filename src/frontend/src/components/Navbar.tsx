import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileBooking = () => {
    setMenuOpen(false);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 group"
          data-ocid="nav.link"
        >
          <ToothIcon />
          <span className="text-xl font-bold text-teal tracking-tight">
            Rahi Clinic
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-5 py-2 bg-teal text-white font-semibold text-sm rounded-full hover:bg-teal-dark hover:scale-105 transition-all duration-200 shadow-sm"
            data-ocid="nav.primary_button"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-md text-slate-dark hover:bg-slate-light transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          data-ocid="nav.toggle"
        >
          <span
            className={`block w-5 h-0.5 bg-current transition-all duration-200 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current transition-all duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-4 pb-4 pt-2 flex flex-col gap-3 shadow-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-dark font-medium py-2 hover:text-teal transition-colors"
              onClick={() => setMenuOpen(false)}
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            className="mt-1 px-5 py-2.5 bg-teal text-white font-semibold text-sm rounded-full text-center hover:bg-teal-dark transition-all duration-200"
            onClick={handleMobileBooking}
            data-ocid="nav.primary_button"
          >
            Book Appointment
          </button>
        </div>
      )}
    </header>
  );
}

function ToothIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M9 5C6.2 5 4 7.2 4 10c0 2.2 1 4 2.5 5.2L8 22h2l1-5h2l1 5h2l1.5-6.8C19 14 20 12.2 20 10c0-2.8-2.2-5-5-5-1.1 0-2 .4-2.8 1C11.4 5.4 10.3 5 9 5z"
        stroke="oklch(0.738 0.112 185)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
