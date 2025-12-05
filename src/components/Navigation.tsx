import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Equipment', href: '#equipment' },
    { name: 'Contact', href: '#contact' },
    { name: 'Book Appointment', href: '#appointment', highlight: true },
  ];

  return (
    <>
      <div className="bg-red-600 text-white py-2 px-4 text-center text-sm font-medium sticky top-0 z-50">
        <div className="flex items-center justify-center gap-2">
          <Phone className="w-4 h-4" />
          <span>24/7 Emergency:</span>
          <a href="tel:7036449444" className="font-bold hover:underline">
            7036449444
          </a>
        </div>
      </div>

      <nav className="bg-white shadow-md sticky top-8 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="#home" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <img
                src="/anjio-care-logo.png"
                alt="Anjio Care Logo"
                className="h-16 w-auto"
              />
            </a>

            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`${
                    link.highlight
                      ? 'bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors'
                      : 'text-gray-700 hover:text-red-600 transition-colors font-medium'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block ${
                    link.highlight
                      ? 'bg-red-600 text-white px-4 py-3 rounded-lg text-center font-medium'
                      : 'text-gray-700 hover:text-red-600 px-4 py-2 font-medium'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
