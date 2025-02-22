import { render, screen } from '@testing-library/react'
import { TestimonialsSection } from '@/components/sections/Testimonials'

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

describe('Testimonials Section', () => {
  it('renders section title and description', () => {
    render(<TestimonialsSection />)
    
    expect(screen.getByText('testimonials.title')).toBeInTheDocument()
    expect(screen.getByText('testimonials.description')).toBeInTheDocument()
  })

  it('renders all testimonials', () => {
    render(<TestimonialsSection />)
    
    const testimonialKeys = [
      'testimonials.items.sarah',
      'testimonials.items.michael',
      'testimonials.items.emily'
    ]

    testimonialKeys.forEach(baseKey => {
      expect(screen.getByText(`${baseKey}.name`)).toBeInTheDocument()
      expect(screen.getByText(`${baseKey}.role`)).toBeInTheDocument()
      expect(screen.getByText(`"${baseKey}.content"`)).toBeInTheDocument()
    })
  })

  it('renders star ratings', () => {
    render(<TestimonialsSection />)
    
    const stars = screen.getAllByTestId('star-icon')
    expect(stars.length).toBe(15) // 5 stars * 3 testimonials
  })
})
