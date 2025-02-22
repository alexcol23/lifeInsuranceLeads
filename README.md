# LeadsBolt - Life Insurance Landing Page

A modern, responsive landing page built with Next.js and Tailwind CSS for a life insurance lead generation service.

## 🚀 Features

- **Modern Design**: Clean and professional UI with attention to visual hierarchy
- **Fully Responsive**: Optimized for all device sizes
- **Interactive Elements**: Smooth animations and transitions using Framer Motion
- **Lead Generation**: Integrated form for capturing potential client information
- **Performance Optimized**: Built with Next.js for optimal loading speeds
- **SEO Ready**: Implements best practices for search engine optimization

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **UI Components**: Custom components built with [shadcn/ui](https://ui.shadcn.com/)
- **Form Handling**: Built-in form handling with API routes
- **Type Safety**: TypeScript for better development experience

## 📋 Project Structure

```
project/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── layout/           # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/         # Page sections
│   │   ├── Hero.tsx
│   │   ├── Benefits.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Testimonials.tsx
│   │   └── BlogSection.tsx
│   └── ui/               # Reusable UI components
├── public/               # Static assets
│   └── images/
└── styles/              # Global styles
```

## 🚦 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/leads-bolt.git
   cd leads-bolt
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Key Components

### Hero Section
- Eye-catching header with background image
- Lead capture form with smooth animations
- Responsive design for all devices

### Benefits Section
- Animated cards highlighting key features
- Consistent iconography
- Optimized spacing for better visual connection

### How It Works
- Step-by-step process explanation
- Visual connecting lines between steps
- Interactive animations on scroll

### Blog Section
- Featured blog posts with images
- Hover effects and smooth transitions
- Responsive grid layout

### Footer
- Newsletter subscription
- Company information and links
- Social media integration

## 📱 Responsive Design

The landing page is fully responsive and optimized for:
- Desktop (1024px and above)
- Tablet (768px to 1023px)
- Mobile (below 768px)

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_API_URL=your_api_url
```

### API Integration
The project includes API routes for:
- Lead form submission
- Newsletter subscription
- Blog post retrieval

## 📈 Analytics Integration

Ready to integrate with:
- Google Analytics
- Hotjar
- Custom analytics solutions

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work - [YourGitHub](https://github.com/alexcol23)

## 🙏 Acknowledgments

- Design inspiration from modern insurance websites
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Lucide](https://lucide.dev/) for the icon set
