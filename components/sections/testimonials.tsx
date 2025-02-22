'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Business Owner',
    image: '/testimonials/sarah.jpg',
    content: "The AI recommendations were spot-on! I was amazed at how well the system understood my needs and found plans that perfectly matched my requirements.",
  },
  {
    name: 'Michael Chen',
    role: 'Software Engineer',
    image: '/testimonials/michael.jpg',
    content: "As someone who appreciates technology, I loved how the AI analyzed different plans and provided data-driven recommendations. The process was efficient and the results were excellent.",
  },
  {
    name: 'Emily Rodriguez',
    role: 'Healthcare Professional',
    image: '/testimonials/emily.jpg',
    content: "The personalized recommendations I received were exactly what I needed. The AI system considered all my preferences and found options I wouldn't have discovered otherwise.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            What Our Clients Say About Our AI Recommendations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how our AI-powered platform has helped others find their perfect insurance plans.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 mb-6">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.name[0]}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}