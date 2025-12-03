import { Heart, Activity, Clock, Stethoscope, Users, Award, Star } from 'lucide-react';

export default function HomePage() {
  const services = [
    {
      icon: Heart,
      title: 'Cardiac Surgery',
      description: 'Advanced surgical procedures for complex heart conditions',
    },
    {
      icon: Activity,
      title: 'Angioplasty',
      description: 'Minimally invasive coronary interventions',
    },
    {
      icon: Stethoscope,
      title: 'Diagnostics',
      description: 'State-of-the-art cardiac diagnostic facilities',
    },
    {
      icon: Clock,
      title: '24/7 Emergency',
      description: 'Round-the-clock emergency cardiac care',
    },
    {
      icon: Users,
      title: 'ICU Care',
      description: 'Advanced intensive care for critical patients',
    },
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Highly qualified cardiac specialists',
    },
  ];

  const testimonials = [
    {
      name: 'Ramesh Kumar',
      text: 'Dr. Anjith and his team saved my life. The care and expertise at Anjio Care is unmatched. The AI-enabled technology made my procedure seamless.',
      rating: 5,
    },
    {
      name: 'Lakshmi Devi',
      text: 'Excellent hospital with world-class facilities. My father underwent angioplasty here and the results were outstanding. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Srinivas Rao',
      text: 'Professional staff, advanced equipment, and compassionate care. Dr. Anjith is truly a skilled cardiologist. Thank you for everything!',
      rating: 5,
    },
  ];

  return (
    <section id="home" className="pt-8">
      <div className="relative bg-gradient-to-br from-red-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Advanced Heart Care<br />
                <span className="text-red-600">When You Need It Most</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Experience world-class cardiac care with India's first AI-enabled Cath Lab.
                Led by Dr. Anjith Vupputuri, our team provides comprehensive heart and vascular
                treatments with cutting-edge technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#appointment"
                  className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-lg"
                >
                  Book Appointment
                </a>
                <a
                  href="tel:7036449444"
                  className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg border-2 border-red-600"
                >
                  Emergency: 7036449444
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <img
                  src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Cardiac Care"
                  className="rounded-xl w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-xl shadow-xl">
                  <p className="text-3xl font-bold">24/7</p>
                  <p className="text-sm">Emergency Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Cardiac Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From diagnostics to complex interventions, we offer complete heart care under one roof
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-gray-600">Real experiences from people we've had the privilege to serve</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.text}</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
