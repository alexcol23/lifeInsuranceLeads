import { HeroSection } from '@/components/sections/hero';
import { BenefitsSection } from '@/components/sections/benefits';
import { HowItWorksSection } from '@/components/sections/HowItWorks';
import { TestimonialsSection } from '@/components/sections/Testimonials';
import { FAQSection } from '@/components/sections/FAQ';
import { CTASection } from '@/components/sections/CTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}