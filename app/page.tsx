import { HeroSection } from '@/components/sections/Hero';
import { BenefitsSection } from '@/components/sections/Benefits';
import { HowItWorksSection } from '@/components/sections/HowItWorks';
import { BlogSection } from '@/components/sections/BlogSection';
import { FaqSection } from '@/components/sections/FAQ';
import { TestimonialsSection } from '@/components/sections/Testimonials';
import { CtaSection } from '@/components/sections/CtaSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <BlogSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}