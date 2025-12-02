'use client';

import { useState } from 'react';
import TypingEffect from '@/components/TypingEffect';
import GradientTypingEffect from '@/components/GradientTypingEffect';
import ScrollProgress from '@/components/ScrollProgress';
import SmoothScroll from '@/components/SmoothScroll';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. We will contact you soon!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  return (
    <>
      <ScrollProgress />
      <SmoothScroll />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <GradientTypingEffect 
                texts={["Contact Us", "Get In Touch", "Reach Out", "Connect"]} 
                className="text-transparent"
                speed={150}
                pauseTime={2500}
              />
            </h1>
            <div className="w-24 h-1 bg-gray-400 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get in touch with our expert team to discuss your metal fabrication requirements and discover how we can bring your projects to life
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Map Side by Side */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <TypingEffect 
                texts={["Get In Touch", "Contact Us", "Reach Out", "Send Message"]} 
                className="text-gray-900"
                speed={120}
                pauseTime={2000}
              />
            </h2>
            <div className="w-16 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fill out the form below or visit our factory to discuss your requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors bg-white text-gray-900"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors bg-white text-gray-900"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors bg-white text-gray-900"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors bg-white text-gray-900"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors bg-white text-gray-900"
                  >
                    <option value="">Select a Service</option>
                    <option value="laser-cutting">Laser Cutting</option>
                    <option value="cnc-bending">CNC Bending</option>
                    <option value="welding">Welding Services</option>
                    <option value="powder-coating">Powder Coating</option>
                    <option value="vmc-machining">VMC Machining</option>
                    <option value="fabrication">Fabrication Work</option>
                    <option value="assembly">Assembly Work</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mt-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors bg-white text-gray-900"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>
                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Map Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Factory</h3>
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-full">
                <div className="h-80 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-black opacity-10"></div>
                  <div className="text-center relative z-10">
                    <div className="text-6xl mb-4">🗺️</div>
                    <p className="text-gray-700 text-lg font-semibold">Interactive Map</p>
                    <p className="text-gray-600 text-sm">Gat No 1325, Near Parc Robotics, Sonawane Wasti, Chikhali, Pune 411062</p>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg">How to Reach Us</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-lg">🚗</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900">By Road</h5>
                        <p className="text-gray-600 text-sm">Located on Pune-Nashik Highway, 25 km from Pune city center</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-lg">🚆</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900">By Rail</h5>
                        <p className="text-gray-600 text-sm">30 km from Pune Railway Station, easily accessible by taxi</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-lg">✈️</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900">By Air</h5>
                        <p className="text-gray-600 text-sm">45 km from Pune International Airport</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source src="/images/enggved.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <TypingEffect 
                  texts={["Ready to Start Your Project?", "Let's Work Together", "Start Your Journey", "Begin Today"]} 
                  className="text-gray-900"
                  speed={120}
                  pauseTime={2000}
                />
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Contact us today to discuss your requirements and get a competitive quote from our expert team
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+919876543210" 
                  className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Call Now
                </a>
                <a 
                  href="mailto:info@metaspark.com" 
                  className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
