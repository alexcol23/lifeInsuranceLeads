'use client';

import { Hero } from '@/components/sections/hero';
import { Benefits } from '@/components/sections/benefits';
import { HowItWorks } from '@/components/sections/how-it-works';
import { BlogSection } from '@/components/sections/blog-section';
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