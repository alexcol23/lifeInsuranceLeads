import { render, screen } from '@testing-library/react'
import { CTA } from '@/components/sections/cta'

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
    render(<CTA />)
    
    expect(screen.getByText('cta.title')).toBeInTheDocument()
    expect(screen.getByText('cta.description')).toBeInTheDocument()
    expect(screen.getByText('cta.button')).toBeInTheDocument()
    expect(screen.getByText('cta.secondary')).toBeInTheDocument()
  })

  it('renders the action button', () => {
    render(<CTA />)
    
    const button = screen.getByRole('button', { name: /cta.button/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-white text-purple-600')
  })
})
