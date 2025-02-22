import '@testing-library/jest-dom'

// Mock IntersectionObserver
class MockIntersectionObserver {
  observe() {
    return null;
  }
  disconnect() {
    return null;
  }
  unobserve() {
    return null;
  }
}

global.IntersectionObserver = MockIntersectionObserver;
