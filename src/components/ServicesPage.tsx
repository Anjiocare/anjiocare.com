import { Heart, Activity, Zap, Radio, Layers } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Heart,
      title: 'Coronary Angiogram & Angioplasty',
      description:
        'Comprehensive diagnostic and therapeutic procedures for coronary artery disease. Our advanced angiography suite enables precise visualization of coronary arteries, followed by minimally invasive angioplasty to restore blood flow. We use state-of-the-art stents and balloons for optimal outcomes.',
      procedures: [
        'Diagnostic coronary angiography',
        'Primary and elective angioplasty',
        'Drug-eluting stent placement',
        'Balloon angioplasty',
      ],
    },
    {
      icon: Layers,
      title: 'Complex Coronary Interventions',
      description:
        'Advanced procedures for challenging coronary cases including chronic total occlusions, left main disease, and bifurcation lesions. Our expertise in complex interventions ensures optimal results even in the most difficult cases.',
      procedures: [
        'Chronic Total Occlusion (CTO) interventions',
        'Left main stenting',
        'Bifurcation lesion treatment',
        'Rotational atherectomy',
        'Intravascular lithotripsy',
      ],
    },
    {
      icon: Activity,
      title: 'Structural & Neuro Interventions',
      description:
        'Minimally invasive procedures for structural heart disease and neurovascular conditions. We offer cutting-edge treatments including device closures, valve interventions, and neurological procedures.',
      procedures: [
        'ASD/VSD/PDA device closure',
        'TAVR (Transcatheter Aortic Valve Replacement)',
        'Left atrial appendage closure',
        'Carotid artery stenting',
        'Cerebral aneurysm coiling',
      ],
    },
    {
      icon: Zap,
      title: 'Pacemaker/ICD/CRTD Implantation',
      description:
        'Advanced cardiac rhythm management devices for treating arrhythmias and heart failure. Our experienced team performs all types of device implantations with precision and care.',
      procedures: [
        'Single & dual chamber pacemaker',
        'ICD (Implantable Cardioverter Defibrillator)',
        'CRT-D (Cardiac Resynchronization Therapy)',
        'Loop recorder implantation',
        'Device upgrades and replacements',
      ],
    },
    {
      icon: Radio,
      title: 'Electrophysiology 3D Mapping',
      description:
        'State-of-the-art electrophysiology studies and ablation procedures for complex arrhythmias. Our 3D mapping system provides precise identification and treatment of abnormal heart rhythms.',
      procedures: [
        'Atrial fibrillation ablation',
        'Supraventricular tachycardia ablation',
        'Ventricular tachycardia ablation',
        '3D electroanatomical mapping',
        'Diagnostic EP studies',
      ],
    },
  ];

  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Comprehensive cardiac care with advanced procedures and expert medical professionals
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                </div>
                <div className="lg:col-span-2">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Available Procedures:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.procedures.map((procedure, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 bg-red-50 rounded-lg p-3"
                      >
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-800">{procedure}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Need a Consultation?</h3>
          <p className="text-lg mb-6 opacity-90">
            Our expert team is ready to help you with personalized cardiac care
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#appointment"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Appointment
            </a>
            <a
              href="tel:7036449444"
              className="bg-red-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-900 transition-colors"
            >
              Call: 7036449444
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
