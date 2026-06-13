import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import ServicesSection from "@/components/ServicesSection";
import RecentWorkSection from "@/components/RecentWorkSection";
import CraftSection from "@/components/CraftSection";
import WhyKeentel from "@/components/WhyKeentel";
import ReviewCarousel from "@/components/ReviewCarousel";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStats />
      <ServicesSection />
      <RecentWorkSection />
      <CraftSection />
       <WhyKeentel />
      <ReviewCarousel />
      <ServiceAreaMap />
      <CTASection />
    </>
  );
}