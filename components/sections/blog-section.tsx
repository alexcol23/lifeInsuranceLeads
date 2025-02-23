'use client';

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useTranslations } from '@/hooks/useTranslations';
import type { TranslationKey } from '@/hooks/useTranslations';

const blogPosts = [
  {
    id: 'insuranceTypes',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80',
    slug: 'understanding-life-insurance-types',
    titleKey: 'blog.posts.insuranceTypes.title' as const,
    excerptKey: 'blog.posts.insuranceTypes.excerpt' as const,
    dateKey: 'blog.posts.insuranceTypes.date' as const,
    readTimeKey: 'blog.posts.insuranceTypes.readTime' as const,
  },
  {
    id: 'coverageCalculation',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80',
    slug: 'how-much-coverage-do-you-need',
    titleKey: 'blog.posts.coverageCalculation.title' as const,
    excerptKey: 'blog.posts.coverageCalculation.excerpt' as const,
    dateKey: 'blog.posts.coverageCalculation.date' as const,
    readTimeKey: 'blog.posts.coverageCalculation.readTime' as const,
  },
  {
    id: 'youngFamilies',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80',
    slug: 'life-insurance-young-families',
    titleKey: 'blog.posts.youngFamilies.title' as const,
    excerptKey: 'blog.posts.youngFamilies.excerpt' as const,
    dateKey: 'blog.posts.youngFamilies.date' as const,
    readTimeKey: 'blog.posts.youngFamilies.readTime' as const,
  },
] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function BlogSection() {
  const { t } = useTranslations();

  return (
    <section id="blog" className="py-24 sm:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {t('blog.title' as const)}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('blog.description' as const)}
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={item}>
              <Card className="group overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={t(post.titleKey)}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>{t(post.dateKey)}</span>
                    <span>•</span>
                    <span>{t(post.readTimeKey)}</span>
                  </div>
                  <CardTitle className="line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
                    {t(post.titleKey)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">
                    {t(post.excerptKey)}
                  </p>
                </CardContent>
                <CardFooter>
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                  >
                    {t('blog.readMore' as const)}
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
