import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import GallerySlider from "./components/GallerySlider";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySlider />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
