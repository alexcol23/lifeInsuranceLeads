import { render, screen } from '@testing-library/react'
import { BenefitsSection } from '@/components/sections/Benefits'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className, ...props }: any) => {
      const { initial, animate, whileInView, viewport, transition, ...rest } = props;
      return (
        <div className={className} {...rest}>
          {children}
        </div>
      );
    },
  },
  AnimatePresence: ({ children }: any) => children,
}))

describe('Benefits Section', () => {
  it('renders all benefit cards', () => {
    render(<BenefitsSection />)
    
    // Verificar que se renderizan todos los beneficios
    const benefitTitles = [
      'AI-Powered Analysis',
      'Smart Recommendations',
      'Expert Support',
      'Cost-Effective Options'
    ]

    benefitTitles.forEach(title => {
      const titleElement = screen.getByText(title)
      expect(titleElement).toBeInTheDocument()
    })
  })

  it('renders AI-related content', () => {
    render(<BenefitsSection />)
    
    const heading = screen.getByText(/The Smart Way to Choose Insurance/i)
    const description = screen.getByText(/Experience the power of AI-driven insurance recommendations/i)
    
    expect(heading).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  it('renders benefit icons', () => {
    render(<BenefitsSection />)
    
    const cards = screen.getAllByTestId('benefit-card')
    expect(cards).toHaveLength(4)
    
    cards.forEach(card => {
      const icon = card.querySelector('svg')
      expect(icon).toBeInTheDocument()
    })
  })

  it('renders with correct styling', () => {
    render(<BenefitsSection />)
    
    const cards = screen.getAllByTestId('benefit-card')
    cards.forEach(card => {
      const cardElement = card.querySelector('.group')
      expect(cardElement).toHaveClass('hover:scale-105')
      expect(cardElement).toHaveClass('transition-transform')
    })
  })
})
