import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  MessageSquare,
  Phone,
  User,
} from "lucide-react";
import { useState } from "react";

type FormState = {
  patientName: string;
  phone: string;
  message: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

const DENTAL_PROBLEMS = [
  {
    id: "routine_checkup",
    label: "Routine Checkup & Cleaning",
    sub: "Preventive care",
    icon: "🦷",
  },
  {
    id: "tooth_ache",
    label: "Tooth Ache or Sharp Pain",
    sub: "Emergency / Urgent care",
    icon: "😣",
  },
  {
    id: "whitening",
    label: "Teeth Whitening & Brightening",
    sub: "Cosmetic",
    icon: "✨",
  },
  {
    id: "gum_issues",
    label: "Bleeding or Swollen Gums",
    sub: "Gum health",
    icon: "🩸",
  },
  {
    id: "broken_tooth",
    label: "Broken or Chipped Tooth",
    sub: "Restorative",
    icon: "🔧",
  },
  {
    id: "implants",
    label: "Missing Tooth / Dental Implants",
    sub: "Replacement",
    icon: "🏅",
  },
  {
    id: "braces",
    label: "Straightening / Braces / Aligners",
    sub: "Orthodontics",
    icon: "😬",
  },
  {
    id: "bad_breath",
    label: "Bad Breath (Halitosis) Treatment",
    sub: "General hygiene",
    icon: "💨",
  },
  {
    id: "wisdom_tooth",
    label: "Wisdom Tooth Consultation",
    sub: "Surgical",
    icon: "🦴",
  },
  {
    id: "sensitivity",
    label: "Sensitivity to Hot or Cold",
    sub: "Nerve / Enamel issues",
    icon: "🌡️",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    patientName: "",
    phone: "",
    message: "",
  });
  const [selectedProblems, setSelectedProblems] = useState<string[]>([]);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleProblem = (id: string) => {
    setSelectedProblems((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id],
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const selectedLabels = DENTAL_PROBLEMS.filter((p) =>
      selectedProblems.includes(p.id),
    )
      .map((p) => p.label)
      .join(", ");

    try {
      const payload = {
        access_key: "f5d8849a-990e-40ac-970c-af12635ea46e",
        "Patient Name": form.patientName,
        "Phone Number": form.phone,
        "Dental Concerns": selectedLabels || "Not specified",
        "Brief Message": form.message,
        botcheck: "",
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setForm({ patientName: "", phone: "", message: "" });
        setSelectedProblems([]);
      } else {
        setStatus("error");
        setErrorMsg(
          result.message || "Something went wrong. Please try again.",
        );
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section
      id="contact-form"
      className="py-20 px-4 bg-slate-light"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-teal text-sm font-semibold tracking-widest uppercase mb-3">
            Get in Touch
          </span>
          <h2 id="contact-heading" className="section-title">
            Book a Consultation
          </h2>
          <p className="section-subtitle">
            Ready to take the first step toward your best smile? Leave us your
            details and our team will reach out to schedule your appointment at
            your convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Info Panel */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-teal rounded-2xl p-8 text-white shadow-card">
              <h3 className="text-xl font-bold mb-2">
                Why Choose Rahi Clinic?
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Experience dental care that combines modern technology with a
                gentle, patient-first approach — trusted by thousands of
                families across Mumbai.
              </p>

              <ul className="space-y-4">
                {[
                  {
                    icon: "🦷",
                    text: "Certified specialists with 15+ years of experience",
                  },
                  { icon: "⏰", text: "Same-day appointments often available" },
                  {
                    icon: "🏥",
                    text: "State-of-the-art sterilised treatment rooms",
                  },
                  { icon: "💳", text: "Flexible payment & insurance plans" },
                ].map(({ icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="text-xl leading-none mt-0.5">{icon}</span>
                    <span className="text-white/90 text-sm">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Quick Info */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-border">
              <h4 className="font-bold text-slate-dark mb-4">Direct Contact</h4>
              <div className="space-y-3 text-sm text-slate-mid">
                <a
                  href="tel:+912244556677"
                  className="flex items-center gap-3 hover:text-teal transition-colors"
                  data-ocid="contact.link"
                >
                  <span className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={14} className="text-teal" />
                  </span>
                  +91 22 4455 6677
                </a>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare size={14} className="text-teal" />
                  </span>
                  Mon – Sat &nbsp;9:00 – 20:00
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div
            className="lg:col-span-3 bg-white rounded-2xl shadow-card border border-border p-8 md:p-10"
            data-ocid="contact.card"
          >
            {status === "success" ? (
              <div
                className="flex flex-col items-center justify-center py-12 gap-4 text-center"
                data-ocid="contact.success_state"
              >
                <CheckCircle2
                  size={56}
                  className="text-teal"
                  strokeWidth={1.5}
                />
                <h3 className="text-xl font-bold text-slate-dark">
                  Message Sent!
                </h3>
                <p className="text-slate-mid text-sm max-w-xs">
                  Thank you for reaching out. Our team will contact you within
                  24 hours to confirm your appointment.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="mt-2 border-teal text-teal hover:bg-teal hover:text-white transition-colors"
                  onClick={() => setStatus("idle")}
                  data-ocid="contact.secondary_button"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                method="POST"
                action="https://api.web3forms.com/submit"
                onSubmit={handleSubmit}
                noValidate
                data-ocid="contact.modal"
              >
                {/* Web3Forms hidden fields */}
                <input
                  type="hidden"
                  name="access_key"
                  value="f5d8849a-990e-40ac-970c-af12635ea46e"
                />
                <input
                  type="checkbox"
                  name="botcheck"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  aria-hidden="true"
                />

                <div className="space-y-6">
                  {/* Patient Name */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="patientName"
                      className="text-slate-dark font-semibold text-sm"
                    >
                      Patient Name <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-mid pointer-events-none">
                        <User size={15} />
                      </span>
                      <Input
                        id="patientName"
                        name="patientName"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="e.g. Priya Sharma"
                        value={form.patientName}
                        onChange={handleChange}
                        className="pl-9 h-11 border-border focus-visible:ring-teal focus-visible:border-teal"
                        aria-required="true"
                        data-ocid="contact.input"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="phone"
                      className="text-slate-dark font-semibold text-sm"
                    >
                      Phone Number <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-mid pointer-events-none">
                        <Phone size={15} />
                      </span>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="e.g. +91 98765 43210"
                        value={form.phone}
                        onChange={handleChange}
                        className="pl-9 h-11 border-border focus-visible:ring-teal focus-visible:border-teal"
                        aria-required="true"
                        data-ocid="contact.input"
                      />
                    </div>
                  </div>

                  {/* Dental Problems Section */}
                  <div className="space-y-3">
                    <div>
                      <Label className="text-slate-dark font-semibold text-sm">
                        What brings you in today?
                      </Label>
                      <p className="text-slate-mid text-xs mt-1">
                        Select all that apply — you can choose more than one.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {DENTAL_PROBLEMS.map((problem) => {
                        const isSelected = selectedProblems.includes(
                          problem.id,
                        );
                        return (
                          <button
                            key={problem.id}
                            type="button"
                            onClick={() => toggleProblem(problem.id)}
                            aria-pressed={isSelected}
                            className={`flex items-start gap-3 rounded-xl border px-3.5 py-3 text-left transition-all duration-150 cursor-pointer ${
                              isSelected
                                ? "border-teal bg-teal/8 ring-1 ring-teal"
                                : "border-border bg-slate-50 hover:border-teal/40 hover:bg-teal/5"
                            }`}
                          >
                            <span
                              className={`mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded border transition-colors ${
                                isSelected
                                  ? "border-teal bg-teal"
                                  : "border-slate-300 bg-white"
                              }`}
                            >
                              {isSelected && (
                                <svg
                                  aria-hidden="true"
                                  viewBox="0 0 10 8"
                                  className="h-2.5 w-2.5 fill-white"
                                >
                                  <path
                                    d="M1 4l2.5 2.5L9 1"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                  />
                                </svg>
                              )}
                            </span>
                            <span className="flex flex-col min-w-0">
                              <span
                                className={`text-xs font-semibold leading-snug ${
                                  isSelected ? "text-teal" : "text-slate-dark"
                                }`}
                              >
                                {problem.icon} {problem.label}
                              </span>
                              <span className="text-[11px] text-slate-mid mt-0.5">
                                {problem.sub}
                              </span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Brief Message */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="message"
                      className="text-slate-dark font-semibold text-sm"
                    >
                      Brief Message
                    </Label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-slate-mid pointer-events-none">
                        <MessageSquare size={15} />
                      </span>
                      <Textarea
                        id="message"
                        name="message"
                        rows={3}
                        placeholder="Any additional details you'd like to share with our team…"
                        value={form.message}
                        onChange={handleChange}
                        className="pl-9 pt-2.5 border-border focus-visible:ring-teal focus-visible:border-teal resize-none"
                        data-ocid="contact.textarea"
                      />
                    </div>
                  </div>

                  {/* Error Message */}
                  {status === "error" && (
                    <div
                      className="flex items-start gap-3 rounded-lg bg-destructive/10 border border-destructive/30 px-4 py-3"
                      role="alert"
                      aria-live="polite"
                      data-ocid="contact.error_state"
                    >
                      <AlertCircle
                        size={18}
                        className="text-destructive mt-0.5 flex-shrink-0"
                      />
                      <p className="text-destructive text-sm">
                        {errorMsg || "Something went wrong. Please try again."}
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full h-12 bg-teal hover:bg-teal-dark text-white font-semibold rounded-full text-base shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
                    data-ocid="contact.submit_button"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>

                  <p className="text-xs text-slate-mid text-center">
                    We respect your privacy. Your information will never be
                    shared with third parties.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
