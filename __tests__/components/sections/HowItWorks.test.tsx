import { render, screen } from '@testing-library/react'
import { HowItWorks } from '@/components/sections/HowItWorks'

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
}))

describe('How It Works Section', () => {
  it('renders the main heading', () => {
    render(<HowItWorks />)
    const heading = screen.getByText(/How Our AI Finds Your Perfect Plan/i)
    expect(heading).toBeInTheDocument()
  })

  it('renders all steps in the process', () => {
    render(<HowItWorks />)
    
    const steps = [
      'Fill Out the Form',
      'Get AI Recommendations',
      'Review Your Options',
      'Connect with an Advisor'
    ]

    steps.forEach(step => {
      const stepElement = screen.getByText(step)
      expect(stepElement).toBeInTheDocument()
    })
  })

  it('renders AI-related content in step descriptions', () => {
    render(<HowItWorks />)
    
    const aiDescriptions = [
      /help our AI understand your needs/i,
      /Our advanced AI agent analyzes your profile/i,
      /AI-recommended options/i
    ]

    aiDescriptions.forEach(description => {
      const element = screen.getByText(description)
      expect(element).toBeInTheDocument()
    })
  })

  it('renders step numbers', () => {
    render(<HowItWorks />)
    
    // Verificar que se muestran los números del 1 al 4
    for (let i = 1; i <= 4; i++) {
      const numberElement = screen.getByText(i.toString())
      expect(numberElement).toBeInTheDocument()
    }
  })
})
