# Life Insurance Leads Platform

A modern, enterprise-grade lead generation platform for life insurance products, built with Next.js 14 and TypeScript.

## Overview

This platform streamlines the process of connecting potential clients with tailored life insurance recommendations. It features a sophisticated multi-step form that collects relevant user information and leverages advanced matching algorithms to suggest the most suitable insurance products.

## Key Features

- **Multi-step Smart Form**
  - Progressive data collection
  - Real-time validation
  - Responsive design
  - Optimized user experience

- **Intelligent Recommendation Engine**
  - Product matching based on user criteria
  - Dynamic scoring system
  - Comprehensive coverage analysis
  - Real-time premium calculations

- **Modern Tech Stack**
  - Next.js 14 with App Router
  - TypeScript for type safety
  - Tailwind CSS for styling
  - Shadcn UI components
  - Zod for schema validation

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/alexcol23/lifeInsuranceLeads.git

# Navigate to project directory
cd lifeInsuranceLeads

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

## Project Structure

```
project/
├── app/                    # Next.js app directory
│   ├── get-recommendations/# Form and data collection
│   └── recommendations/    # Results and product display
├── components/            # Reusable UI components
├── services/             # Business logic and API services
├── types/               # TypeScript type definitions
└── public/             # Static assets
```

## Development Guidelines

- Follow TypeScript best practices
- Use functional components with hooks
- Implement responsive design patterns
- Write clean, maintainable code
- Follow semantic versioning

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
