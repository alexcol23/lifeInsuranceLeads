import { render, screen } from '@testing-library/react'
import { Benefits } from '@/components/sections/Benefits'

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
    render(<Benefits />)
    
    // Verificar que se renderizan todos los beneficios
    const benefitTitles = [
      'Comprehensive Coverage',
      'Affordable Plans',
      'Expert Guidance',
      'Fast & Easy Process'
    ]

    benefitTitles.forEach(title => {
      const titleElement = screen.getByText(title)
      expect(titleElement).toBeInTheDocument()
    })
  })

  it('renders benefit icons', () => {
    render(<Benefits />)
    
    const cards = screen.getAllByTestId('benefit-card')
    expect(cards).toHaveLength(4)
    
    cards.forEach(card => {
      const icon = card.querySelector('svg')
      expect(icon).toBeInTheDocument()
    })
  })

  it('renders with correct styling', () => {
    render(<Benefits />)
    
    const cards = screen.getAllByTestId('benefit-card')
    cards.forEach(card => {
      const cardElement = card.querySelector('.group')
      expect(cardElement).toHaveClass('hover:scale-105')
      expect(cardElement).toHaveClass('transition-transform')
    })
  })
})
