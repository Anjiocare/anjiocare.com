import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-red-600" />
              <div>
                <h3 className="text-white font-bold text-lg">Anjio Care</h3>
                <p className="text-xs">Heart & Vascular Hospital</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Advanced cardiac care with India's first AI-enabled Cath Lab. Your heart health is our priority.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-red-600 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-red-600 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-red-600 transition-colors">Services</a></li>
              <li><a href="#equipment" className="hover:text-red-600 transition-colors">Equipment</a></li>
              <li><a href="#contact" className="hover:text-red-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-red-600 flex-shrink-0" />
                <a href="tel:7036449444" className="hover:text-red-600">7036449444</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-red-600 flex-shrink-0" />
                <span>Old Club Road, Kothapeta, Guntur, Andhra Pradesh, 522001</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-red-600 flex-shrink-0" />
                <a href="mailto:info@anjiocare.com" className="hover:text-red-600">info@anjiocare.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Working Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Emergency:</span>
                <span className="text-red-600 font-semibold">24/7</span>
              </li>
              <li className="flex justify-between">
                <span>OPD Hours:</span>
                <span>9 AM - 6 PM</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <a href="#privacy" className="hover:text-red-600 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#terms" className="hover:text-red-600 transition-colors">Terms of Use</a>
            <span>|</span>
            <a href="#disclaimer" className="hover:text-red-600 transition-colors">Medical Disclaimer</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Anjio Care Heart and Vascular Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
