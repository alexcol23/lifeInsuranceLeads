import { render, screen } from '@testing-library/react'
import { HeroSection } from '@/components/sections/Hero'

// Mock useToast hook
jest.mock('@/hooks/use-toast', () => ({
  useToast: () => ({
    toast: jest.fn()
  })
}))

describe('Hero Section', () => {
  it('renders the main heading', () => {
    render(<HeroSection />)
    const heading = screen.getByText(/Secure Your Family's/i)
    expect(heading).toBeInTheDocument()
  })

  it('renders the lead capture form', () => {
    render(<HeroSection />)
    const nameInput = screen.getByLabelText(/Full Name/i)
    const emailInput = screen.getByLabelText(/Email Address/i)
    const phoneInput = screen.getByLabelText(/Phone Number/i)
    const submitButton = screen.getByRole('button', { name: /Get Your Free Quote/i })
    
    expect(nameInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(phoneInput).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })
})
