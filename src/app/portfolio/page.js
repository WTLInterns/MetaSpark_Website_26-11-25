import Link from 'next/link';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Automotive Components",
      category: "Automotive",
      description: "Precision sheet metal components for automotive assembly lines",
      image: "🚗",
      technologies: ["Laser Cutting", "CNC Bending", "Welding"],
      client: "Leading Automotive Manufacturer",
      duration: "3 months",
      featured: true
    },
    {
      id: 2,
      title: "Industrial Machine Parts",
      category: "General Engineering",
      description: "Custom fabricated parts for heavy machinery",
      image: "⚙️",
      technologies: ["VMC Machining", "Fabrication", "Assembly"],
      client: "Industrial Equipment Co.",
      duration: "2 months",
      featured: true
    },
    {
      id: 3,
      title: "Textile Machinery Components",
      category: "Textile",
      description: "Precision components for textile manufacturing equipment",
      image: "🧵",
      technologies: ["Precision Cutting", "Bending", "Powder Coating"],
      client: "Textile Solutions Ltd.",
      duration: "4 months",
      featured: false
    },
    {
      id: 4,
      title: "Power Plant Equipment",
      category: "Power Plant",
      description: "Heavy-duty components for power generation systems",
      image: "⚡",
      technologies: ["Heavy Fabrication", "Welding", "Assembly"],
      client: "Power Generation Corp.",
      duration: "6 months",
      featured: true
    },
    {
      id: 5,
      title: "Agricultural Machinery Parts",
      category: "Agricultural",
      description: "Durable components for farming equipment",
      image: "🌾",
      technologies: ["Laser Cutting", "Bending", "Surface Treatment"],
      client: "AgriTech Solutions",
      duration: "2 months",
      featured: false
    },
    {
      id: 6,
      title: "Construction Equipment",
      category: "Earth Moving",
      description: "Robust components for construction machinery",
      image: "🚜",
      technologies: ["Heavy Fabrication", "Welding", "Heat Treatment"],
      client: "Construction Equipment Co.",
      duration: "5 months",
      featured: true
    },
    {
      id: 7,
      title: "Custom Enclosures",
      category: "General Engineering",
      description: "Custom electrical and mechanical enclosures",
      image: "📦",
      technologies: ["Precision Cutting", "Bending", "Assembly"],
      client: "Electrical Systems Ltd.",
      duration: "1 month",
      featured: false
    },
    {
      id: 8,
      title: "Stainless Steel Fabrication",
      category: "Food Processing",
      description: "Hygienic stainless steel equipment for food industry",
      image: "🍽️",
      technologies: ["TIG Welding", "Polishing", "Fabrication"],
      client: "Food Processing Co.",
      duration: "3 months",
      featured: true
    }
  ];

  const categories = ["All", "Automotive", "Textile", "Power Plant", "Earth Moving", "Agricultural", "General Engineering"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our completed projects and see the quality of our metal fabrication work
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-gray-300 hover:bg-slate-600 hover:text-white hover:border-slate-600 transition-colors duration-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Some of our most notable and challenging projects
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.filter(project => project.featured).map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-6xl">{project.image}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                    <span className="text-gray-500 text-sm">{project.duration}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Client: {project.client}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="text-slate-600 hover:text-slate-700 font-semibold">
                    View Case Study →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">All Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete portfolio of our metal fabrication work
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-5xl">{project.image}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">{project.client}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 2).map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-white text-gray-600 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="px-2 py-1 bg-white text-gray-600 rounded text-xs">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                  <button className="text-slate-600 hover:text-slate-700 font-semibold text-sm">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Project Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we deliver exceptional results for every project
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understanding requirements and specifications" },
              { step: "02", title: "Design & Planning", desc: "Creating detailed engineering solutions" },
              { step: "03", title: "Fabrication", desc: "Precision manufacturing with quality control" },
              { step: "04", title: "Delivery", desc: "On-time delivery and client satisfaction" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What our clients say about working with us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                position: "Operations Manager",
                company: "Automotive Solutions Ltd.",
                content: "MetaSpark has been our trusted partner for precision components. Their quality and on-time delivery are exceptional."
              },
              {
                name: "Priya Sharma",
                position: "Project Director",
                company: "Power Generation Corp.",
                content: "The heavy fabrication work done by MetaSpark exceeded our expectations. Their expertise in complex projects is unmatched."
              },
              {
                name: "Amit Patel",
                position: "CEO",
                company: "Textile Innovations",
                content: "Working with MetaSpark has been a great experience. Their attention to detail and quality craftsmanship is outstanding."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-700 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create something exceptional together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-slate-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
              Start Your Project
            </Link>
            <Link href="/services" className="border-2 border-white hover:bg-white hover:text-slate-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
