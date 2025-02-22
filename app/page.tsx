import { HeroSection } from '@/components/sections/hero';
import { BenefitsSection } from '@/components/sections/benefits';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { BlogSection } from '@/components/sections/BlogSection';
import { CtaSection } from '@/components/sections/CtaSection';

export default function Home() {
  return (
    <main className="pt-16">
      <HeroSection />
      <BenefitsSection />
      <HowItWorks />
      <TestimonialsSection />
      <BlogSection />       
      <CtaSection />
    </main>
  );
}