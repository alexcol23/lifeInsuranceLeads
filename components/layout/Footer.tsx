import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react'

const navigation = {
  company: [
    { name: 'About', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Blog', href: '#' },
  ],
  support: [
    { name: 'Contact', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-background border-t">
      {/* Newsletter CTA Section */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-xl">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Stay Updated
              </h3>
              <p className="text-muted-foreground">
                Subscribe to our newsletter for the latest insurance tips and industry insights.
              </p>
            </div>
            <div className="flex w-full max-w-md gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="h-12"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 h-12 px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent inline-block mb-6">
              LeadsBolt
            </Link>
            <p className="text-muted-foreground mb-6">
              Helping families secure their future with comprehensive life insurance solutions.
            </p>
            <Button 
              variant="outline" 
              className="w-full md:w-auto border-2 border-purple-200 text-purple-600 hover:text-purple-700 hover:bg-purple-50 font-semibold"
            >
              Get Your Free Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-6 uppercase tracking-wider">Company</h3>
            <ul className="space-y-4">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-muted-foreground hover:text-purple-600 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-6 uppercase tracking-wider">Support</h3>
            <ul className="space-y-4">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-muted-foreground hover:text-purple-600 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-6 uppercase tracking-wider">Follow Us</h3>
            <div className="flex space-x-5">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-purple-600 transition-colors duration-200"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()} LeadsBolt. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-purple-600 transition-colors duration-200">Privacy Policy</Link>
              <span>•</span>
              <Link href="#" className="hover:text-purple-600 transition-colors duration-200">Terms of Service</Link>
              <span>•</span>
              <Link href="#" className="hover:text-purple-600 transition-colors duration-200">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
