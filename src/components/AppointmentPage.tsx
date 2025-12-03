import { useState, FormEvent } from 'react';
import { Calendar, User, Phone, Mail, FileText, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    email: '',
    preferredDoctor: 'Dr. Anjith Vupputuri',
    medicalConcern: '',
    preferredDate: '',
    preferredTime: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('appointments').insert([
        {
          patient_name: formData.patientName,
          phone: formData.phone,
          email: formData.email || null,
          preferred_doctor: formData.preferredDoctor,
          medical_concern: formData.medicalConcern,
          preferred_date: formData.preferredDate || null,
          preferred_time: formData.preferredTime || null,
        },
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        patientName: '',
        phone: '',
        email: '',
        preferredDoctor: 'Dr. Anjith Vupputuri',
        medicalConcern: '',
        preferredDate: '',
        preferredTime: '',
      });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting appointment:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to book appointment. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="appointment" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Book an Appointment
          </h2>
          <p className="text-gray-600 text-lg">
            Schedule your consultation with our expert cardiac team
          </p>
        </div>

        {submitStatus === 'success' && (
          <div className="mb-8 bg-green-50 border border-green-200 rounded-xl p-6 flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-green-900 mb-1">Appointment Request Received!</h3>
              <p className="text-green-800">
                Thank you for booking with Anjio Care. Our team will contact you shortly to confirm
                your appointment. You will receive an SMS confirmation on your registered mobile number.
              </p>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-8 bg-red-50 border border-red-200 rounded-xl p-6">
            <p className="text-red-800">{errorMessage}</p>
            <p className="text-red-700 mt-2">
              Please call us at <a href="tel:7036449444" className="font-bold underline">7036449444</a> for immediate assistance.
            </p>
          </div>
        )}

        <div className="bg-gray-50 rounded-2xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="w-4 h-4 text-red-600" />
                    <span>Patient Name *</span>
                  </div>
                  <input
                    type="text"
                    required
                    value={formData.patientName}
                    onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="Enter full name"
                  />
                </label>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4 text-red-600" />
                    <span>Phone Number *</span>
                  </div>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="10-digit mobile number"
                    pattern="[0-9]{10}"
                  />
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-4 h-4 text-red-600" />
                  <span>Email Address</span>
                </div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </label>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                <div className="flex items-center gap-2 mb-2">
                  <User className="w-4 h-4 text-red-600" />
                  <span>Preferred Doctor</span>
                </div>
                <select
                  value={formData.preferredDoctor}
                  onChange={(e) => setFormData({ ...formData, preferredDoctor: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                >
                  <option value="Dr. Anjith Vupputuri">Dr. Anjith Vupputuri</option>
                  <option value="Any Available Doctor">Any Available Doctor</option>
                </select>
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-red-600" />
                    <span>Preferred Date</span>
                  </div>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                </label>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-red-600" />
                    <span>Preferred Time</span>
                  </div>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  >
                    <option value="">Select time slot</option>
                    <option value="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</option>
                    <option value="11:00 AM - 1:00 PM">11:00 AM - 1:00 PM</option>
                    <option value="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</option>
                    <option value="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</option>
                  </select>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 text-red-600" />
                  <span>Medical Concern *</span>
                </div>
                <textarea
                  required
                  value={formData.medicalConcern}
                  onChange={(e) => setFormData({ ...formData, medicalConcern: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none"
                  placeholder="Please describe your symptoms or reason for consultation"
                ></textarea>
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-red-600 text-white py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Book Appointment'}
            </button>

            <p className="text-sm text-gray-600 text-center">
              By submitting this form, you agree to our privacy policy and terms of service.
              For immediate assistance, call{' '}
              <a href="tel:7036449444" className="text-red-600 font-semibold hover:underline">
                7036449444
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
