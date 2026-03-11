
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { BenefitsSection } from "@/components/benefits/BenefitsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black">
      {/* Hero Section with Navbar overlay */}
      <div className="relative">
        <div className="absolute left-0 right-0 top-0 z-50">
          <Navbar />
        </div>
        <HeroSection />
      </div>

      {/* Benefits Section */}
      <BenefitsSection />
    </main>
  );
}
