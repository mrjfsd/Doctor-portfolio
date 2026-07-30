import { Plus, Globe, MessageCircle, Camera, Code } from 'lucide-react'

const footerLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Expertise & Services', href: '#services' },
  { label: 'Experience', href: '#skills' },
  { label: 'Research', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: Globe, href: '#', label: 'Twitter' },
  { icon: MessageCircle, href: '#', label: 'Facebook' },
  { icon: Camera, href: '#', label: 'Instagram' },
  { icon: Code, href: '#', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-10 border-b border-gray-800">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-white transition-transform group-hover:rotate-90 duration-300">
              <Plus size={20} strokeWidth={3} />
            </div>
            <span className="text-xl font-extrabold text-white tracking-tight">Dr. Praveen</span>
          </a>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} className="w-9 h-9 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center text-gray-400 hover:text-white transition-all" aria-label={social.label}>
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-xs">
          <p>&copy; 2026 Dr. Praveen Kumar R. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="bg-gray-800 text-gray-300 px-2.5 py-1 rounded-md font-medium">Languages Spoken: Kannada | English | Hindi</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
