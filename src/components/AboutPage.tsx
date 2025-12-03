import { Award, CheckCircle, Heart, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  const achievements = [
    "India's First AI-enabled Cath Lab",
    'Gold Medalist in DM Cardiology',
    'Fellowship in Interventional Cardiology AIMS',
    'FESC & AFSCAI USA Certified',
    '24/7 Emergency Cardiac Services',
    'Advanced ICU Facilities',
  ];

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Anjio Care</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Leading the way in advanced cardiac care with state-of-the-art technology and expert medical professionals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Hospital Facility"
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              At Anjio Care Heart and Vascular Hospital, we are committed to providing world-class cardiac
              care with compassion and excellence. Our state-of-the-art facility is equipped with India's
              first AI-enabled Cath Lab, ensuring the most advanced diagnostic and treatment capabilities.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We believe in patient-centered care, combining cutting-edge technology with personalized
              attention to deliver optimal outcomes. Our team works tirelessly to ensure every patient
              receives the highest standard of cardiac care.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <TrendingUp className="w-8 h-8 text-red-600 mb-2" />
                <p className="font-semibold text-gray-900">Advanced Technology</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <Heart className="w-8 h-8 text-red-600 mb-2" />
                <p className="font-semibold text-gray-900">Compassionate Care</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <img
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Dr. Anjith Vupputuri"
                className="rounded-xl shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-10 h-10 text-red-600" />
                <h3 className="text-3xl font-bold text-gray-900">Dr. Anjith Vupputuri</h3>
              </div>
              <p className="text-lg text-red-600 font-semibold mb-4">
                Lead Interventional Cardiologist
              </p>
              <div className="space-y-3 mb-6">
                <p className="text-gray-700 flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>MD, DM Cardiology Gold Medalist</span>
                </p>
                <p className="text-gray-700 flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Fellowship in Interventional Cardiology, AIMS</span>
                </p>
                <p className="text-gray-700 flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Fellow of European Society of Cardiology (FESC)</span>
                </p>
                <p className="text-gray-700 flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Associate Fellow of SCAI USA (AFSCAI)</span>
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Dr. Anjith Vupputuri is a highly accomplished interventional cardiologist with extensive
                training and expertise in complex cardiac procedures. His commitment to excellence and
                patient care has made Anjio Care a leading cardiac center in the region.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow"
              >
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 font-medium">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
