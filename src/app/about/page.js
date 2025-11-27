import Link from 'next/link';
import WhatWeDo from '@/components/WhatWeDo';
import TypingEffect from '@/components/TypingEffect';
import GradientTypingEffect from '@/components/GradientTypingEffect';
import ScrollProgress from '@/components/ScrollProgress';
import SmoothScroll from '@/components/SmoothScroll';

export default function About() {
  return (
    <>
      <ScrollProgress />
      <SmoothScroll />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 text-white py-20 overflow-hidden">
        {/* Industrial pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About <GradientTypingEffect 
                texts={["MetaSpark Engineers", "Quality Excellence", "20+ Years Experience"]} 
                className="text-transparent"
                speed={150}
                pauseTime={3000}
              />
            </h1>
            <div className="w-24 h-1 bg-slate-600 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Professional sheet metal profile manufacturing and processing company with over 20 years of excellence in metal fabrication
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Who We Are: <TypingEffect 
                  texts={["Professionals", "Experts", "Leaders", "Innovators"]} 
                  className="text-slate-700"
                  speed={100}
                  pauseTime={2000}
                />
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong>The MetaSpark Engineers Private Limited</strong> is a company that rapidly transforms into a professional sheet metal profile manufacturing and processing company.
                </p>
                <p>
                  Always adhering to the <span className="text-slate-700 font-semibold">"quality-oriented, honest and pragmatic, diligent and enterprising, service oriented"</span> business philosophy, and apply it to the company's management and operation.
                </p>
                <p>
                  We offers precision and productive Fabrication resources that delivers high quality products. We are committed to providing world class customer service and solutions in the field of fully integrated bespoke metal work and precision sheet metal fabrication.
                </p>
                <p>
                  Our highly skilled workforces have over <span className="font-bold text-slate-700">20 years'</span> of cumulative experience in metal fabrication. With on-site facilities for TIG and MIG welding in both Mild Steel & stainless steel, we are able to offer a comprehensive service to all our customers.
                </p>
                <p>
                  Working with industries as diverse as <span className="font-semibold">automotive, Textile, power plant, earth moving, Agricultural and general engineering</span> has given us unrivalled experience in producing product to the very highest standard.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-lg p-4 text-center border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-3xl font-bold text-slate-700 mb-2">20+</div>
                  <div className="text-gray-700">Years Experience</div>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-lg p-4 text-center border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-3xl font-bold text-slate-700 mb-2">500+</div>
                  <div className="text-gray-700">Projects Delivered</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-slate-200 shadow-lg">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-8 h-8 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">👁️</span>
                    </span>
                    Our Vision
                  </h3>
                  <p className="text-gray-600 italic">
                    "To be a renowned supplier of quality products and services in our domain of work. We want to be recognized as quality and best of service provider."
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-8 h-8 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">⚙️</span>
                    </span>
                    How We Work
                  </h3>
                  <p className="text-gray-600">
                    Our Company is backed by reputable vendors and manufacturers of the various products and services that we offer. We always maintain the quality standards with our vendors and suppliers and prioritize the satisfaction of our customers and maintain our reputation. The advantage of working with us is having a professional business assist to you or your clients in securing the product.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-8 h-8 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">💎</span>
                    </span>
                    Core Values
                  </h3>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-slate-600 mr-2">•</span>
                      <span><strong>Quality-oriented</strong> approach</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-600 mr-2">•</span>
                      <span><strong>Honest</strong> and pragmatic operations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-600 mr-2">•</span>
                      <span><strong>Diligent</strong> and enterprising mindset</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-600 mr-2">•</span>
                      <span><strong>Service-oriented</strong> commitment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Policy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <TypingEffect 
                texts={["Quality Policy", "Our Commitment", "Excellence Standard", "ISO Certified"]} 
                className="text-gray-900"
                speed={120}
                pauseTime={2500}
              />
            </h2>
            <div className="w-32 h-1 bg-slate-600 rounded-full mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Quality Policy Content */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl p-8 border border-slate-200 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-700 mb-6">Our Commitment to Quality</h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-gray-700 font-medium">
                      We are committed to achieve customer satisfaction by delivering quality products and services.
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-gray-700 font-medium">
                      We shall strive for continual improvement of our Quality Management System.
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-gray-700 font-medium">
                      We shall comply with all applicable statutory and regulatory requirements.
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-gray-700 font-medium">
                      We shall provide adequate resources and training to enhance employee competence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quality Objectives */}
              <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-6 border border-slate-200 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Quality Objectives</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-slate-600 mr-2">•</span>
                    <span>Enhance customer satisfaction through quality products and services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-600 mr-2">•</span>
                    <span>Continual improvement of processes and systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-600 mr-2">•</span>
                    <span>Compliance with international quality standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-600 mr-2">•</span>
                    <span>Regular training and skill development for employees</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side - Quality Certifications */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-slate-200 shadow-lg">
                <div className="w-32 h-32 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">ISO 9001:2015 Certified</h3>
                <p className="text-gray-600 mb-6">
                  Our quality management system is certified to international standards, ensuring consistent quality and continuous improvement.
                </p>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-md">
                    <p className="font-semibold text-gray-900">Quality Management System</p>
                    <p className="text-sm text-gray-600">ISO 9001:2015</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-md">
                    <p className="font-semibold text-gray-900">Certification Valid</p>
                    <p className="text-sm text-gray-600">2024 - 2027</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What We Do Section */}
      <WhatWeDo />


      {/* Our Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <GradientTypingEffect 
                texts={["Team", "Experts", "Professionals", "Leaders"]} 
                className="text-transparent"
                speed={100}
                pauseTime={2000}
                gradientColors={["from-slate-600", "via-slate-700", "to-slate-800"]}
              />
            </h2>
            <div className="w-32 h-1 bg-slate-600 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals behind MetaSpark Engineers' success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="h-64 bg-gradient-to-br from-slate-100 to-gray-100 flex items-center justify-center">
                <img src="/images/team.png" alt="Team Member" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Managing Director</h3>
                <p className="text-gray-600 mb-4">Leadership & Strategic Planning</p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Experience:</span> 25+ Years
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Expertise:</span> Business Strategy, Operations Management
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="h-64 bg-gradient-to-br from-slate-100 to-gray-100 flex items-center justify-center">
                <img src="/images/team.png" alt="Team Member" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Technical Manager</h3>
                <p className="text-gray-600 mb-4">Engineering & Production</p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Experience:</span> 20+ Years
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Expertise:</span> Manufacturing, Quality Control
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="h-64 bg-gradient-to-br from-slate-100 to-gray-100 flex items-center justify-center">
                <img src="/images/team.png" alt="Team Member" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Manager</h3>
                <p className="text-gray-600 mb-4">Quality Assurance & Control</p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Experience:</span> 15+ Years
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Expertise:</span> ISO Standards, Process Improvement
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="h-64 bg-gradient-to-br from-slate-100 to-gray-100 flex items-center justify-center">
                <img src="/images/team.png" alt="Team Member" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Operations Manager</h3>
                <p className="text-gray-600 mb-4">Operations & Logistics</p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Experience:</span> 18+ Years
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Expertise:</span> Supply Chain, Project Management
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-700 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied clients and experience the MetaSpark difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-slate-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
              Get Started
            </Link>
            <Link href="/portfolio" className="border-2 border-white hover:bg-white hover:text-slate-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
