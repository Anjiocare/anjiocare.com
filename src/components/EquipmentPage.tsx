import { Cpu, Eye, Zap, Activity, Radio, TrendingUp } from 'lucide-react';

export default function EquipmentPage() {
  const equipment = [
    {
      icon: Cpu,
      name: 'SIEMENS ARTIS ONE Cath Lab',
      tagline: "India's First AI-Enabled System",
      description:
        'State-of-the-art catheterization laboratory equipped with artificial intelligence and advanced imaging capabilities. Features real-time 3D imaging, low radiation dose, and AI-assisted decision making for optimal patient outcomes.',
      features: [
        'AI-powered image optimization',
        '3D rotational angiography',
        'Ultra-low radiation exposure',
        'Real-time hemodynamic monitoring',
        'Advanced fusion imaging',
      ],
      highlight: true,
    },
    {
      icon: Eye,
      name: 'Intravascular Ultrasound (IVUS)',
      tagline: 'Boston Scientific Technology',
      description:
        'High-resolution imaging system that provides detailed cross-sectional views of coronary arteries from inside the vessel. Essential for complex interventions and precise stent placement.',
      features: [
        'Real-time vessel visualization',
        'Plaque characterization',
        'Stent optimization',
        'Virtual histology',
      ],
    },
    {
      icon: Zap,
      name: 'Optical Coherence Tomography (OCT)',
      tagline: 'Near-Infrared Imaging',
      description:
        'Ultra-high resolution intracoronary imaging system providing 10 times better resolution than IVUS. Enables precise assessment of vessel pathology and stent deployment.',
      features: [
        'Microscopic vessel detail',
        'Stent apposition verification',
        'Plaque vulnerability assessment',
        'Thrombus detection',
      ],
    },
    {
      icon: Activity,
      name: 'Intra Aortic Balloon Pump (IABP)',
      tagline: 'Advanced Hemodynamic Support',
      description:
        'Mechanical circulatory support device for high-risk patients undergoing complex procedures or experiencing heart failure. Improves coronary blood flow and reduces cardiac workload.',
      features: [
        'Hemodynamic stabilization',
        'Improved coronary perfusion',
        'Reduced myocardial oxygen demand',
        'Support for high-risk interventions',
      ],
    },
    {
      icon: Radio,
      name: 'Rota Pro System',
      tagline: 'Rotational Atherectomy',
      description:
        'Advanced device for treating heavily calcified coronary lesions. Uses a diamond-coated burr rotating at high speeds to modify calcified plaque before stenting.',
      features: [
        'Calcified lesion modification',
        'Improved stent delivery',
        'Enhanced procedural success',
        'Multiple burr sizes available',
      ],
    },
    {
      icon: TrendingUp,
      name: 'Intravascular Lithotripsy (IVL)',
      tagline: 'Shockwave Technology',
      description:
        'Revolutionary technology using sonic pressure waves to fracture calcium in coronary and peripheral arteries. Non-thermal, vessel-sparing approach to treating calcified lesions.',
      features: [
        'Calcium fracture technology',
        'Vessel-sparing treatment',
        'Improved vessel compliance',
        'Enhanced stent expansion',
      ],
    },
  ];

  return (
    <section id="equipment" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Advanced Medical Equipment
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Cutting-edge technology for precise diagnosis and optimal treatment outcomes
          </p>
        </div>

        <div className="space-y-8">
          {equipment.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                item.highlight
                  ? 'bg-gradient-to-br from-red-600 to-red-700 text-white'
                  : 'bg-white border border-gray-200'
              }`}
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-4 ${
                        item.highlight ? 'bg-white/20' : 'bg-red-100'
                      }`}
                    >
                      <item.icon
                        className={`w-10 h-10 ${item.highlight ? 'text-white' : 'text-red-600'}`}
                      />
                    </div>
                    <h3
                      className={`text-2xl font-bold mb-2 ${
                        item.highlight ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {item.name}
                    </h3>
                    <p
                      className={`text-sm font-semibold mb-4 ${
                        item.highlight ? 'text-red-100' : 'text-red-600'
                      }`}
                    >
                      {item.tagline}
                    </p>
                    <p
                      className={`leading-relaxed ${
                        item.highlight ? 'text-white/90' : 'text-gray-700'
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                  <div className="lg:w-2/3">
                    <h4
                      className={`text-lg font-semibold mb-4 ${
                        item.highlight ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {item.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className={`flex items-start gap-3 rounded-lg p-4 ${
                            item.highlight ? 'bg-white/10' : 'bg-red-50'
                          }`}
                        >
                          <div
                            className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                              item.highlight ? 'bg-white' : 'bg-red-600'
                            }`}
                          ></div>
                          <span
                            className={item.highlight ? 'text-white' : 'text-gray-800'}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Technology Meets Expertise
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Our world-class equipment combined with Dr. Anjith's expertise ensures you receive
            the most advanced cardiac care available
          </p>
          <a
            href="#appointment"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
