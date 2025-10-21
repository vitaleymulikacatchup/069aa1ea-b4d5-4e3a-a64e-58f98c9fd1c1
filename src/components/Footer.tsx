import React from 'react';
import { ChevronDown } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = [
    { text: 'FAQ', href: '#' },
    { text: 'Help Center', href: '#' },
    { text: 'Terms of Use', href: '#' },
    { text: 'Privacy', href: '#' },
    { text: 'Cookie Preferences', href: '#' },
    { text: 'Corporate Information', href: '#' },
  ];

  return (
    <footer className="px-4 py-8 md:px-12 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <p className="text-netflix-gray-400 text-sm">
            Questions? Call 0800 609 226 (Toll-Free)
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-netflix-gray-400 text-sm hover:underline"
            >
              {link.text}
            </a>
          ))}
        </div>
        
        <div className="relative inline-block">
          <select className="bg-black border border-netflix-gray-600 text-white px-4 py-2 pr-8 rounded appearance-none focus:outline-none focus:border-white">
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white pointer-events-none" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;