import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: "Industrial Design",
      description: "Professional industrial design services for custom metal components and assemblies",
      detailedDescription: "Our expert design team uses advanced CAD software to create precise engineering drawings and 3D models. We work closely with clients to develop optimal solutions that meet their specific requirements while ensuring manufacturability and cost-effectiveness.",
      features: ["CAD Design", "3D Modeling", "Engineering Analysis", "Prototype Development"],
      icon: "🎨",
      color: "blue"
    },
    {
      title: "Cutting Services",
      description: "Precision laser cutting and plasma cutting for all types of metals",
      detailedDescription: "State-of-the-art laser cutting technology provides clean, precise cuts with minimal heat-affected zones. Our cutting services handle various materials including stainless steel, aluminum, mild steel, and more with thickness ranging from thin sheets to heavy plates.",
      features: ["Laser Cutting", "Plasma Cutting", "Waterjet Cutting", "CNC Routing"],
      icon: "🔥",
      color: "red"
    },
    {
      title: "Bending Services",
      description: "Accurate CNC press brake operations for precise metal forming",
      detailedDescription: "Our advanced CNC press brakes ensure accurate bending with tight tolerances. We handle complex bending operations, multiple bends, and large-scale production runs with consistent quality and precision.",
      features: ["CNC Press Brake", "Precision Bending", "Large Capacity", "Complex Forms"],
      icon: "📐",
      color: "green"
    },
    {
      title: "Powder Coating Service",
      description: "Durable powder coating solutions for long-lasting metal finishes",
      detailedDescription: "Professional powder coating services provide superior protection against corrosion, wear, and environmental factors. We offer a wide range of colors and finishes to meet your aesthetic and functional requirements.",
      features: ["Color Matching", "Durability", "Environmental Friendly", "Quick Turnaround"],
      icon: "🎨",
      color: "purple"
    },
    {
      title: "Fabrication Work",
      description: "Complete metal fabrication from raw materials to finished products",
      detailedDescription: "Comprehensive fabrication services covering everything from simple components to complex assemblies. Our skilled fabricators combine traditional craftsmanship with modern technology to deliver exceptional results.",
      features: ["Custom Fabrication", "Assembly", "Welding", "Finishing"],
      icon: "🔧",
      color: "orange"
    },
    {
      title: "VMC Machining",
      description: "Precision vertical machining center operations for complex parts",
      detailedDescription: "Advanced VMC machining capabilities for high-precision components. Our vertical machining centers handle complex geometries, tight tolerances, and various materials with exceptional accuracy.",
      features: ["High Precision", "Complex Geometry", "Multiple Materials", "Quality Control"],
      icon: "⚙️",
      color: "indigo"
    },
    {
      title: "Assemblies",
      description: "Complete product assembly and integration services",
      detailedDescription: "Full assembly services from component integration to final product testing. We ensure proper fit, function, and quality of assembled products through systematic processes and quality checks.",
      features: ["Component Assembly", "Testing", "Quality Assurance", "Packaging"],
      icon: "",
      color: "teal"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-slate-600 to-slate-700',
      red: 'from-slate-600 to-slate-700',
      green: 'from-slate-600 to-slate-700',
      purple: 'from-slate-600 to-slate-700',
      orange: 'from-slate-600 to-slate-700',
      indigo: 'from-slate-600 to-slate-700',
      teal: 'from-slate-600 to-slate-700'
    };
    return colors[color] || 'from-slate-600 to-slate-700';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive metal fabrication solutions designed to meet your exact specifications
            </p>
          </div>
        </div>
      </section>

      {/* Trading Section - White Background with Left Info Right Images */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Logo behind info section - Updated positioning and opacity */}
        <div className="absolute left-1/4 top-1/4 transform -translate-x-1/4 -translate-y-1/4 w-1/2 opacity-10">
          <div className="w-full h-full bg-[url('/images/logo-transparent.png')] bg-center bg-contain bg-no-repeat"></div>
        </div>

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Main Trading Content - Left Info Right Images */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Left Section - Trading Information */}
              <div className="space-y-6">
                {/* Main Title */}
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Trading:
                  </h2>
                  <div className="w-32 h-1 bg-slate-600 rounded-full"></div>
                </div>

                {/* Description */}
                <div className="space-y-4">
                  <p className="text-lg font-semibold text-gray-900 leading-relaxed">
                    Engineering Machineries, Products and Consumables
                  </p>

                  <ul className="space-y-3 text-gray-600 leading-relaxed">
                    <li className="flex items-start">
                      <span className="text-slate-600 mr-2">•</span>
                      <span>We have highly qualified for all kinds of engineering equipment needs. Being in engineering sector for the past 20 Years, we have a team of engineers working on getting the best products as per your needs.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-600 mr-2">•</span>
                      <span>We are qualified for supplying all kinds of electrical engineering and renewable energy products like Cables, Switches, Solar Modules, Inverters, Power Transformers etc.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-600 mr-2">•</span>
                      <span>We also offer fully finished and developed engineering Machinery and automotive parts.</span>
                    </li>
                  </ul>
                </div>

                {/* Company Name with Logo */}
                <div className="pt-6 border-t border-gray-300 relative">
                  <div className="absolute -top-20 -left-10 transform translate-x-1/4 -translate-y-1/4 opacity-20 z-0">
                    <img src="/images/logo.png" alt="METASPARK ENGINEERS" className="w-80 h-30 object-contain" />
                    <p className="text-lg font-bold text-gray-900 relative z-10">METASPARK ENGINEERS PVT LTD</p>
                  </div>
                </div>
              </div>

              {/* Right Section - Images Grid - Updated layout to match screenshot */}
              <div className="relative">
                {/* Main Large Image with border */}
                <div className="relative mb-6">
                  <div className="w-full h-72 bg-white rounded-sm overflow-hidden border border-gray-400 shadow-sm">
                    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                      <span className="text-gray-500 font-medium">Engineering Machinery</span>
                    </div>
                  </div>
                </div>

                {/* Small Images Grid - Side by side layout */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full h-40 bg-white rounded-sm overflow-hidden border border-gray-400 shadow-sm">
                    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-gray-50 flex items-center justify-center">
                      <span className="text-slate-600 text-sm font-medium">Electrical Products</span>
                    </div>
                  </div>
                  <div className="w-full h-40 bg-white rounded-sm overflow-hidden border border-gray-400 shadow-sm">
                    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-gray-50 flex items-center justify-center">
                      <span className="text-slate-600 text-sm font-medium">Renewable Energy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Service Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Detailed Service Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In-depth look at our comprehensive metal fabrication capabilities
            </p>
          </div>
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-20 h-20 bg-gradient-to-r ${getColorClasses(service.color)} rounded-2xl flex items-center justify-center mb-6`}>
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.detailedDescription}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <span className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-slate-600 text-xs">✓</span>
                        </span>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className={`bg-gradient-to-br ${getColorClasses(service.color)} rounded-2xl p-8 h-64 flex items-center justify-center`}>
                    <div className="text-white text-center">
                      <div className="text-6xl mb-4">{service.icon}</div>
                      <p className="text-xl font-semibold">{service.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-700 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Need Custom Fabrication Solutions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your specific requirements and get a personalized quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-slate-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
              Get Quote
            </Link>
            <Link href="/portfolio" className="border-2 border-white hover:bg-white hover:text-slate-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              View Examples
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}