'use client';

import { Hero } from '@/components/sections/Hero';
import { Benefits } from '@/components/sections/benefits';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { BlogSection } from '@/components/sections/BlogSection';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <HowItWorks />
      <BlogSection />
      <FAQ />
      <CTA />
    </main>
  );
}