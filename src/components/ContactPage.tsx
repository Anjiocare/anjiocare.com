import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Get in touch with us for appointments, inquiries, or emergency care
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                  <a
                    href="tel:7036449444"
                    className="text-red-600 text-xl font-bold hover:underline"
                  >
                    7036449444
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Available 24/7 for emergencies</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Old Club Road, Kothapeta<br />
                    Guntur, Andhra Pradesh<br />
                    522001
                  </p>
                  <a
                    href="https://maps.google.com/?q=Old+Club+Road+Kothapeta+Guntur+Andhra+Pradesh+522001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-red-600 font-medium hover:underline"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <a
                    href="mailto:info@anjiocare.com"
                    className="text-red-600 hover:underline"
                  >
                    info@anjiocare.com
                  </a>
                  <p className="text-sm text-gray-600 mt-1">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <div className="w-full">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Working Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Emergency Services:</span>
                      <span className="font-semibold text-red-600">24/7</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">OPD Timings:</span>
                      <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Days:</span>
                      <span className="font-semibold text-gray-900">Monday - Saturday</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.0!2d80.4365!3d16.3067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDE4JzI0LjEiTiA4MMKwMjYnMTEuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Anjio Care Location"
            ></iframe>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Have Questions?</h3>
          <p className="text-lg mb-6 opacity-90">
            Our team is here to help. Call us now or book an appointment online
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:7036449444"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call Now
            </a>
            <a
              href="#appointment"
              className="bg-red-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-900 transition-colors"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
