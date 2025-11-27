import Image from "next/image";
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCard from '@/components/AnimatedCard';
import ParallaxBackground from '@/components/ParallaxBackground';
import FloatingElement from '@/components/FloatingElement';
import ScrollProgress from '@/components/ScrollProgress';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <SmoothScroll />
      <div className="min-h-scroll bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Animated background elements */}
        <ParallaxBackground speed={0.3} className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-500 rounded-full opacity-10 blur-xl"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-blue-500 rounded-full opacity-10 blur-xl"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-500 rounded-full opacity-10 blur-xl"></div>
        </ParallaxBackground>
        
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative w-16 h-16">
                  <Image
                    src="/images/logo.png"
                    alt="MetaSpark Engineers Pvt Ltd"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div>
                  <span className="font-bold text-2xl">MetaSpark Engineers Pvt Ltd</span>
                  <div className="text-sm text-gray-300">Precision Metal Fabrication</div>
                </div>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Precision Sheet Metal
                <span className="text-red-500"> Fabrication</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Professional sheet metal profile manufacturing and processing company with over 20 years of experience in metal fabrication, laser cutting, welding, and CNC operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 text-center">
                  Our Services
                </Link>
                <Link href="/contact" className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 text-center">
                  Get Quote
                </Link>
              </div>
              <div className="flex items-center space-x-8">
                <FloatingElement duration={2} delay={0.5}>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-500">20+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                </FloatingElement>
                <FloatingElement duration={2.5} delay={0.7}>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-500">500+</div>
                    <div className="text-sm text-gray-400">Projects Completed</div>
                  </div>
                </FloatingElement>
                <FloatingElement duration={3} delay={0.9}>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-500">50+</div>
                    <div className="text-sm text-gray-400">Happy Clients</div>
                  </div>
                </FloatingElement>
              </div>
            </div>
            <AnimatedSection direction="right">
              <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <AnimatedCard hover delay={0.1} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <div className="w-full h-32 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
                      <span className="text-white font-semibold">Laser Cutting</span>
                    </div>
                  </AnimatedCard>
                  <AnimatedCard hover delay={0.3} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <div className="w-full h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                      <span className="text-white font-semibold">CNC Bending</span>
                    </div>
                  </AnimatedCard>
                </div>
                <div className="space-y-4 mt-8">
                  <AnimatedCard hover delay={0.5} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <div className="w-full h-32 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center">
                      <span className="text-white font-semibold">Welding</span>
                    </div>
                  </AnimatedCard>
                  <AnimatedCard hover delay={0.7} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <div className="w-full h-32 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                      <span className="text-white font-semibold">Fabrication</span>
                    </div>
                  </AnimatedCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-gray-50 to-slate-100" direction="up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="fade" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">About MetaSpark</h2>
              <div className="w-20 h-1 bg-slate-600 rounded-full mx-auto mb-4"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Quality-oriented, honest and pragmatic, diligent and enterprising, service-oriented business philosophy
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" delay={0.4}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Who We Are</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                MetaSpark Engineers Private Limited is a professional sheet metal profile manufacturing and processing company. We offer precision and productive fabrication resources, delivering high-quality products to our valued clients.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We are committed to providing world-class customer service and solutions in fully integrated bespoke metalwork and precision sheet metal fabrication. Our highly skilled workforce brings over 20 years of experience in metal fabrication.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-slate-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Team</h4>
                    <p className="text-gray-600 text-sm">20+ years of experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-slate-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality First</h4>
                    <p className="text-gray-600 text-sm">ISO certified processes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-slate-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Advanced Tech</h4>
                    <p className="text-gray-600 text-sm">Modern machinery</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-slate-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">On-time Delivery</h4>
                    <p className="text-gray-600 text-sm">Reliable service</p>
                  </div>
                </div>
              </div>
            </div>
            <AnimatedSection direction="right" delay={0.6}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-lg p-6 text-center border border-gray-200">
                  <div className="text-3xl mb-2">🏭</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Modern Facility</h4>
                  <p className="text-gray-600 text-sm">State-of-the-art manufacturing unit</p>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-lg p-6 text-center border border-gray-200">
                  <div className="text-3xl mb-2">⚙️</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Advanced Equipment</h4>
                  <p className="text-gray-600 text-sm">Latest CNC and laser technology</p>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-lg p-6 text-center border border-gray-200">
                  <div className="text-3xl mb-2">👥</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Skilled Workforce</h4>
                  <p className="text-gray-600 text-sm">Expert technicians and engineers</p>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-lg p-6 text-center border border-gray-200">
                  <div className="text-3xl mb-2">🎯</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Precision Work</h4>
                  <p className="text-gray-600 text-sm">Micron-level accuracy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Services Preview */}
      <AnimatedSection className="py-20 bg-white" direction="up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="fade" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <div className="w-20 h-1 bg-slate-600 rounded-full mx-auto mb-4"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive metal fabrication solutions for diverse industries
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Laser Cutting", desc: "Precision laser cutting for all metals", icon: "🔥" },
              { title: "CNC Bending", desc: "Accurate CNC press brake operations", icon: "📐" },
              { title: "Welding Services", desc: "TIG & MIG welding specialists", icon: "⚡" },
              { title: "Powder Coating", desc: "Durable powder coating solutions", icon: "🎨" },
              { title: "VMC Machining", desc: "Precision vertical machining", icon: "🔧" },
              { title: "Assembly Work", desc: "Complete product assembly", icon: "🔩" }
            ].map((service, index) => (
              <AnimatedCard key={index} hover delay={0.1 + index * 0.1} className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-slate-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Link href="/services" className="text-slate-600 hover:text-slate-800 font-semibold">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
              View All Services
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us Section */}
      <AnimatedSection className="py-16 bg-gradient-to-br from-slate-50 to-gray-50 relative overflow-hidden" direction="up">
        {/* Background decoration with parallax */}
        <ParallaxBackground speed={0.2}>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-slate-200 to-transparent rounded-full opacity-20 -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-gray-200 to-transparent rounded-full opacity-20 -ml-32 -mb-32"></div>
        </ParallaxBackground>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection direction="fade" delay={0.2}>
            <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover the advantages that make MetaSpark Engineers your trusted partner</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Why Us Text */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  Why Us:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 group hover:translate-x-1 transition-transform duration-200">
                    <div className="w-8 h-8 bg-gradient-to-br from-slate-500 to-slate-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold text-base">High grade raw materials used</p>
                      <p className="text-gray-500 text-sm mt-1">Premium quality materials for superior results</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 group hover:translate-x-1 transition-transform duration-200">
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold text-base">Excellent and satisfied customer base</p>
                      <p className="text-gray-500 text-sm mt-1">Trusted by hundreds of happy clients</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 group hover:translate-x-1 transition-transform duration-200">
                    <div className="w-8 h-8 bg-gradient-to-br from-slate-500 to-slate-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold text-base">Latest technology and Mechanical supports</p>
                      <p className="text-gray-500 text-sm mt-1">Advanced equipment and technical expertise</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 group hover:translate-x-1 transition-transform duration-200">
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold text-base">Effective packaging facility</p>
                      <p className="text-gray-500 text-sm mt-1">Secure and professional packaging solutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 group hover:translate-x-1 transition-transform duration-200">
                    <div className="w-8 h-8 bg-gradient-to-br from-slate-500 to-slate-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold text-base">On-time project completion</p>
                      <p className="text-gray-500 text-sm mt-1">Meeting deadlines with precision and reliability</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 group hover:translate-x-1 transition-transform duration-200">
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold text-base">Assisted by experienced professionals</p>
                      <p className="text-gray-500 text-sm mt-1">Expert team with years of industry experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Why Choose Us Image */}
            <AnimatedSection direction="right" delay={0.6}>
              <div className="relative">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-500 to-gray-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <img src="/images/whychoose.png" alt="Why Choose Us" className="w-full h-auto rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105" />
              </div>
              
              {/* Floating badges */}
              <FloatingElement duration={2} delay={0.5}>
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-slate-600 to-slate-700 text-white px-4 py-2 rounded-full shadow-lg">
                  <span className="font-bold text-sm">20+ Years</span>
                </div>
              </FloatingElement>
              <FloatingElement duration={2.5} delay={0.7}>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-gray-600 to-gray-700 text-white px-4 py-2 rounded-full shadow-lg">
                  <span className="font-bold text-sm">500+ Projects</span>
                </div>
              </FloatingElement>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Industries Served */}
      <AnimatedSection className="py-20 bg-white" direction="up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="fade" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
              <div className="w-20 h-1 bg-slate-600 rounded-full mx-auto mb-4"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Trusted by diverse industries for their metal fabrication needs
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: "I-STRON INDIA PVT LTD", logo: "logo1.png" },
              { name: "INOVEX ENGINEERING PVT LTD", logo: "logo2.png" },
              { name: "TRUTRANCE TECHNOLOGIES", logo: "logo3.png" },
              { name: "VEERAJA INDUSTRIES", logo: "logo5.png" },
              { name: "PARIPURNA ENGINEERS", logo: "logo6.png" },
              { name: "PROLOGIC MECHATRONICS PVT.LTD", logo: "logo4.png" }
            ].map((company, index) => (
              <AnimatedCard key={index} hover delay={0.1 + index * 0.1} className="text-center">
                <div className="w-30 h-25 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md border border-gray-200">
                  <img src={`/images/${company.logo}`} alt={company.name} className="w-25 h-25 object-contain" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm leading-tight">{company.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-slate-700 to-slate-800 text-white" direction="scale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection direction="fade" delay={0.2}>
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch with our team today to discuss your metal fabrication requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-slate-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
              Contact Us
            </Link>
            <Link href="/portfolio" className="border-2 border-white hover:bg-white hover:text-slate-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              View Our Work
            </Link>
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>
    </div>
    </>
  );
}
