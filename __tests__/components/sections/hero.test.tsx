import { render, screen } from '@testing-library/react'
import { Hero } from '@/components/sections/hero'

// Mock useToast hook
jest.mock('@/hooks/use-toast', () => ({
  useToast: () => ({
    toast: jest.fn()
  })
}))

describe('Hero Section', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    const heading = screen.getByText(/Find Your Perfect/i)
    expect(heading).toBeInTheDocument()
  })

  it('renders AI-related content', () => {
    render(<Hero />)
    const aiTag = screen.getByText(/AI-Powered Insurance Recommendations/i)
    const aiDescription = screen.getByText(/Let our AI analyze your profile/i)
    
    expect(aiTag).toBeInTheDocument()
    expect(aiDescription).toBeInTheDocument()
  })

  it('renders the lead capture form', () => {
    render(<Hero />)
    const nameInput = screen.getByLabelText(/Full Name/i)
    const emailInput = screen.getByLabelText(/Email Address/i)
    const phoneInput = screen.getByLabelText(/Phone Number/i)
    const submitButton = screen.getByRole('button', { name: /Get AI-Powered Recommendations/i })
    
    expect(nameInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(phoneInput).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })
})
