import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import {
  AboutPreviewSection,
  AudienceSplitSection,
  BeforeAfterSection,
  BrandsSection,
  ContactSection,
  FinalCtaSection,
  HeroSection,
  PaintTransitionPlaceholderSection,
  PlasterTransition,
  ProcessSection,
  ServicesOverviewSection,
  TestimonialsSection,
  TrustIntroStrip,
  WhyChooseSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustIntroStrip />
        <AboutPreviewSection />
        <PlasterTransition />
        <ServicesOverviewSection />
        <PaintTransitionPlaceholderSection />
        <BeforeAfterSection />
        <WhyChooseSection />
        <ProcessSection />
        <AudienceSplitSection />
        <TestimonialsSection />
        <BrandsSection />
        <FinalCtaSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
