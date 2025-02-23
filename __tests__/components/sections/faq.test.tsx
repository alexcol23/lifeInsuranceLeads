import { render, screen } from '@testing-library/react'
import { FAQ } from '@/components/sections/FAQ'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  },
}));

// Mock useTranslations hook
jest.mock('@/hooks/useTranslations', () => ({
  useTranslations: () => ({
    t: (key: string) => key,
  }),
}));

describe('FAQ Section', () => {
  it('renders section title and description', () => {
    render(<FAQ />)
    
    expect(screen.getByText('faq.title')).toBeInTheDocument()
    expect(screen.getByText('faq.description')).toBeInTheDocument()
  })

  it('renders all FAQ items', () => {
    render(<FAQ />)
    
    const faqKeys = [
      'faq.items.howWorks',
      'faq.items.accuracy',
      'faq.items.cost',
      'faq.items.support',
    ]

    faqKeys.forEach(key => {
      expect(screen.getByText(`${key}.question`)).toBeInTheDocument()
      expect(screen.getByText(`${key}.answer`)).toBeInTheDocument()
    })
  })
})
