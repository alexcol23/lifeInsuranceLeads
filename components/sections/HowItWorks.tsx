'use client';

import { ClipboardList, Search, Phone, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Fill Out the Form',
    description: 'Complete our simple questionnaire to help us understand your needs.',
    icon: ClipboardList,
  },
  {
    title: 'Get Recommendations',
    description: 'Our experts analyze your information to find the best options.',
    icon: Search,
  },
  {
    title: 'Free Consultation',
    description: 'Schedule a call with our advisors to discuss your options.',
    icon: Phone,
  },
  {
    title: 'Secure Coverage',
    description: 'Choose your preferred plan and get immediate coverage.',
    icon: CheckCircle,
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

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting the right life insurance coverage is easier than you think. Follow these simple steps:
          </p>
        </div>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {/* Connecting Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 transform -translate-y-1/2" />
          
          {steps.map((step, index) => (
            <motion.div key={index} variants={item} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg relative z-10 h-full group hover:shadow-xl transition-shadow duration-300">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-lg font-semibold text-purple-600 border-2 border-purple-200 relative">
                      {index + 1}
                    </div>
                  </div>
                </div>
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <step.icon className="w-8 h-8 text-purple-600" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-4 text-center group-hover:text-purple-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-center">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
