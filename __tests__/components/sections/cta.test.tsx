import { render, screen } from '@testing-library/react'
import { CTASection } from '@/components/sections/CTA'

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

describe('CTA Section', () => {
  it('renders all text elements', () => {
    render(<CTASection />)
    
    expect(screen.getByText('cta.title')).toBeInTheDocument()
    expect(screen.getByText('cta.description')).toBeInTheDocument()
    expect(screen.getByText('cta.button')).toBeInTheDocument()
    expect(screen.getByText('cta.secondary')).toBeInTheDocument()
  })

  it('renders the action button', () => {
    render(<CTASection />)
    
    const button = screen.getByRole('button', { name: 'cta.button' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-white', 'text-purple-600')
  })
})
