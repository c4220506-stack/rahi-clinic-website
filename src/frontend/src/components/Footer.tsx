const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "Twitter X",
    href: "https://x.com",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.5C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon
          fill="white"
          points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
        />
      </svg>
    ),
  },
];

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer id="contact" className="bg-slate-footer" aria-label="Footer">
      {/* Top CTA Banner */}
      <div className="bg-teal py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-2xl font-bold">
              Ready for Your Best Smile?
            </h3>
            <p className="text-white/80 mt-1">
              Book your consultation today — we&apos;re accepting new patients.
            </p>
          </div>
          <a
            href="tel:+912244556677"
            className="flex-shrink-0 px-8 py-3.5 bg-white text-teal font-bold rounded-full hover:bg-slate-light hover:scale-105 transition-all duration-200 shadow-card"
            data-ocid="footer.primary_button"
          >
            Call Now: +91 22 4455 6677
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand + Contact */}
        <div>
          <div className="flex items-center gap-2 mb-4">
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
            <span className="text-white text-xl font-bold">Rahi Clinic</span>
          </div>
          <p className="text-white/70 text-sm leading-relaxed mb-6">
            Delivering world-class dental care with compassion and precision in
            the heart of Mumbai since 2009.
          </p>

          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <MapPinIcon />
              <span>
                123 Marine Lines, Fort,
                <br />
                Mumbai, Maharashtra 400001
              </span>
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon />
              <a
                href="tel:+912244556677"
                className="hover:text-teal transition-colors"
                data-ocid="footer.link"
              >
                +91 22 4455 6677
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MailIcon />
              <a
                href="mailto:hello@rahiclinic.in"
                className="hover:text-teal transition-colors"
                data-ocid="footer.link"
              >
                hello@rahiclinic.in
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 text-white/70 flex items-center justify-center hover:bg-teal hover:text-white transition-all duration-200"
                data-ocid="footer.link"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav Links */}
        <div>
          <h4 className="text-white font-bold mb-5 text-base">Quick Links</h4>
          <ul className="space-y-3">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white/70 text-sm hover:text-teal transition-colors flex items-center gap-2"
                  data-ocid="footer.link"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal inline-block" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hours */}
          <div className="mt-8">
            <h4 className="text-white font-bold mb-4 text-base">
              Clinic Hours
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex justify-between">
                <span>Monday &ndash; Saturday</span>
                <span className="text-white font-medium">
                  9:00 &ndash; 20:00
                </span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white font-medium">
                  10:00 &ndash; 15:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Map Placeholder */}
        <div>
          <h4 className="text-white font-bold mb-5 text-base">Find Us</h4>
          <div
            className="rounded-2xl border-2 overflow-hidden"
            style={{ borderColor: "oklch(0.738 0.112 185)" }}
          >
            {/* Map visual placeholder */}
            <div className="relative bg-slate-dark/40 h-48 flex flex-col items-center justify-center gap-3">
              {/* Grid lines for map feel */}
              <svg
                className="absolute inset-0 w-full h-full opacity-10"
                viewBox="0 0 200 150"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {[0, 25, 50, 75, 100, 125, 150, 175, 200].map((x) => (
                  <line
                    key={`vline-${x}`}
                    x1={x}
                    y1="0"
                    x2={x}
                    y2="150"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                ))}
                {[0, 25, 50, 75, 100, 125, 150].map((y) => (
                  <line
                    key={`hline-${y}`}
                    x1="0"
                    y1={y}
                    x2="200"
                    y2={y}
                    stroke="white"
                    strokeWidth="0.5"
                  />
                ))}
                <path
                  d="M60 90 Q80 50 100 40 Q120 30 140 60"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M40 110 Q60 100 80 90"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>

              {/* Pin */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-teal flex items-center justify-center shadow-lg">
                <MapPinIconLg />
              </div>
              <div className="relative z-10 text-center">
                <p className="text-white font-semibold text-sm">Rahi Clinic</p>
                <p className="text-white/70 text-xs mt-0.5">
                  123 Marine Lines, Mumbai
                </p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Marine+Lines+Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-teal text-white text-center text-sm font-semibold py-2.5 hover:bg-teal-dark transition-colors"
              data-ocid="footer.link"
            >
              Get Directions &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/60 text-sm">
            &copy; {year} Rahi Clinic. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <a
              href="https://rahiclinic.in/privacy"
              className="hover:text-teal transition-colors"
              data-ocid="footer.link"
            >
              Privacy Policy
            </a>
            <span>&middot;</span>
            <a
              href="https://rahiclinic.in/terms"
              className="hover:text-teal transition-colors"
              data-ocid="footer.link"
            >
              Terms of Service
            </a>
            <span>&middot;</span>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal transition-colors"
              data-ocid="footer.link"
            >
              Built with caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MapPinIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="oklch(0.738 0.112 185)"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="flex-shrink-0 mt-0.5"
    >
      <path d="M8 1a4.5 4.5 0 0 0-4.5 4.5c0 3 4.5 8 4.5 8s4.5-5 4.5-8A4.5 4.5 0 0 0 8 1z" />
      <circle cx="8" cy="5.5" r="1.5" />
    </svg>
  );
}

function MapPinIconLg() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 16 16"
      fill="none"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 1a4.5 4.5 0 0 0-4.5 4.5c0 3 4.5 8 4.5 8s4.5-5 4.5-8A4.5 4.5 0 0 0 8 1z" />
      <circle cx="8" cy="5.5" r="1.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="oklch(0.738 0.112 185)"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <path d="M1.5 2a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 .5.4L6 5a.5.5 0 0 1-.2.5L4.3 6.6a9.3 9.3 0 0 0 5.1 5.1l1.1-1.5a.5.5 0 0 1 .5-.2l2.6.5a.5.5 0 0 1 .4.5V13a.5.5 0 0 1-.5.5C6.2 13.5 1.5 8.8 1.5 3V2z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="oklch(0.738 0.112 185)"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <rect x="1" y="3" width="14" height="10" rx="1.5" />
      <path d="M1 4l7 5 7-5" />
    </svg>
  );
}
