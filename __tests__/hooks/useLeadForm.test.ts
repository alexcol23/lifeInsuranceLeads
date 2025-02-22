import { renderHook, act } from '@testing-library/react'
import { useLeadForm } from '@/hooks/useLeadForm'

describe('useLeadForm', () => {
  it('should initialize with empty form data', () => {
    const { result } = renderHook(() => useLeadForm())
    
    expect(result.current.formData).toEqual({
      email: '',
      name: '',
      phone: '',
    })
    expect(result.current.isLoading).toBe(false)
    expect(result.current.error).toBeNull()
  })

  it('should update form data on change', () => {
    const { result } = renderHook(() => useLeadForm())
    
    act(() => {
      result.current.handleChange({
        target: { name: 'email', value: 'test@example.com' }
      } as React.ChangeEvent<HTMLInputElement>)
    })

    expect(result.current.formData.email).toBe('test@example.com')
  })

  it('should reset form data', () => {
    const { result } = renderHook(() => useLeadForm())
    
    act(() => {
      result.current.handleChange({
        target: { name: 'email', value: 'test@example.com' }
      } as React.ChangeEvent<HTMLInputElement>)
      result.current.resetForm()
    })

    expect(result.current.formData).toEqual({
      email: '',
      name: '',
      phone: '',
    })
  })
})
