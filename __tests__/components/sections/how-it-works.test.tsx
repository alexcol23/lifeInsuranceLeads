import { render, screen } from '@testing-library/react'
import { HowItWorks } from '@/components/sections/how-it-works'

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

describe('HowItWorks Section', () => {
  it('renders all steps', () => {
    render(<HowItWorks />)
    
    const steps = screen.getAllByTestId('step-card')
    expect(steps).toHaveLength(4)
  })

  it('renders step titles', () => {
    render(<HowItWorks />)
    
    const titles = [
      'howItWorks.steps.profile.title',
      'howItWorks.steps.analysis.title',
      'howItWorks.steps.recommendations.title',
      'howItWorks.steps.support.title'
    ]

    titles.forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })

  it('renders step descriptions', () => {
    render(<HowItWorks />)
    
    const descriptions = [
      'howItWorks.steps.profile.description',
      'howItWorks.steps.analysis.description',
      'howItWorks.steps.recommendations.description',
      'howItWorks.steps.support.description'
    ]

    descriptions.forEach(description => {
      expect(screen.getByText(description)).toBeInTheDocument()
    })
  })

  it('renders section title and description', () => {
    render(<HowItWorks />)
    
    expect(screen.getByText('howItWorks.title')).toBeInTheDocument()
    expect(screen.getByText('howItWorks.description')).toBeInTheDocument()
  })
})
