'use client';

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'

const blogPosts = [
  {
    title: 'Understanding Life Insurance Types',
    excerpt: 'Learn about the different types of life insurance and which one might be right for you.',
    image: '/blog/life-insurance-types.jpg',
    date: 'March 15, 2024',
    readTime: '5 min read',
    slug: 'understanding-life-insurance-types',
  },
  {
    title: 'How Much Coverage Do You Need?',
    excerpt: 'A comprehensive guide to calculating the right amount of life insurance coverage for your situation.',
    image: '/blog/coverage-calculation.jpg',
    date: 'March 10, 2024',
    readTime: '7 min read',
    slug: 'how-much-coverage-do-you-need',
  },
  {
    title: 'Life Insurance for Young Families',
    excerpt: 'Why young families should consider life insurance and how to get started.',
    image: '/blog/young-families.jpg',
    date: 'March 5, 2024',
    readTime: '6 min read',
    slug: 'life-insurance-young-families',
  },
]

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
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed with our latest articles about life insurance and financial planning.
          </p>
        </div>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {blogPosts.map((post, index) => (
            <motion.div key={index} variants={item}>
              <Card className="group overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter>
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                  >
                    Read more 
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white hover:bg-gray-50 border-2 border-purple-200 text-purple-600 hover:text-purple-700 font-semibold px-8"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
