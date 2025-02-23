import { render, screen } from '@testing-library/react'
import { FAQ } from '@/components/sections/faq'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}))

// Mock useTranslations hook
jest.mock('@/hooks/useTranslations', () => ({
  useTranslations: () => ({
    t: (key: string) => key,
  }),
}))

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
      'faq.items.support'
    ]

    faqKeys.forEach(baseKey => {
      expect(screen.getByText(`${baseKey}.question`)).toBeInTheDocument()
      expect(screen.getByText(`${baseKey}.answer`)).toBeInTheDocument()
    })
  })
})
