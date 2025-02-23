'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const insuranceCompanies = [
  { name: 'AXA', logo: '/images/companies/axa.svg' },
  { name: 'MetLife', logo: '/images/companies/metlife.svg' },
  { name: 'Prudential', logo: '/images/companies/prudential.svg' },
];

export function InsuranceLogos() {
  return (
    <div className="w-full py-8 sm:py-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-600">
            Respaldado por las mejores aseguradoras
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 items-center justify-items-center max-w-3xl mx-auto px-4">
          {insuranceCompanies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="w-full flex justify-center"
            >
              <div className="insurance-logo-wrapper relative w-full max-w-[180px] h-16">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  fill
                  className="insurance-logo"
                  sizes="(max-width: 640px) 140px, 180px"
                  priority={index < 3}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InsuranceLogos;
