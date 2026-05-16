import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import TrustSection from "@/components/TrustSection";
import CollectionSection from "@/components/CollectionSection";
import DocumentationSection from "@/components/DocumentationSection";
import PrivateSourcingSection from "@/components/PrivateSourcingSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative w-full max-w-full overflow-x-hidden bg-ivory text-ink">
      <Navigation />
      <Hero />
      <Marquee />
      <TrustSection />
      <CollectionSection />
      <DocumentationSection />
      <PrivateSourcingSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
