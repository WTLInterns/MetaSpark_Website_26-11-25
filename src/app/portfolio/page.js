"use client";

import Link from 'next/link';
import { useState } from 'react';
import TypingEffect from '@/components/TypingEffect';
import GradientTypingEffect from '@/components/GradientTypingEffect';
import ScrollProgress from '@/components/ScrollProgress';
import SmoothScroll from '@/components/SmoothScroll';
import AnimatedSection from '@/components/AnimatedSection';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Automotive Components",
      category: "Automotive",
      description: "Precision sheet metal components for automotive assembly lines",
      image: "/api/placeholder/400/300?text=Automotive",
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
      image: "/api/placeholder/400/300?text=Engineering",
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
      image: "/api/placeholder/400/300?text=Textile",
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
      image: "/api/placeholder/400/300?text=PowerPlant",
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
      image: "/api/placeholder/400/300?text=Agriculture",
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
      image: "/api/placeholder/400/300?text=Construction",
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
      image: "/api/placeholder/400/300?text=Enclosures",
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
      image: "/api/placeholder/400/300?text=StainlessSteel",
      technologies: ["TIG Welding", "Polishing", "Fabrication"],
      client: "Food Processing Co.",
      duration: "3 months",
      featured: true
    }
  ];

  const categories = ["All", "Automotive", "Textile", "Power Plant", "Earth Moving", "Agricultural", "General Engineering"];

  // State for carousel navigation
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredProjects = projects.filter(project => project.featured);
  const cardsToShow = 3; // Number of cards to show at once

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === featuredProjects.length - cardsToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredProjects.length - cardsToShow : prevIndex - 1
    );
  };

  return (
    <>
      <ScrollProgress />
      <SmoothScroll />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our <GradientTypingEffect 
                texts={["Portfolio", "Projects", "Work", "Success Stories"]} 
                className="text-transparent"
                speed={150}
                pauseTime={2500}
              />
            </h1>
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
                className="px-6 py-2 rounded-full border border-gray-300 hover:bg-slate-600 hover:text-black hover:border-slate-600 transition-colors duration-200 text-black"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <TypingEffect 
                texts={["Featured Projects", "Success Stories", "Recent Work", "Client Projects"]} 
                className="text-gray-900"
                speed={120}
                pauseTime={2000}
              />
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Some of our most notable and challenging projects
            </p>
          </div>
          
          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200 -ml-6"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200 -mr-6"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Cards Container */}
            <div className="overflow-hidden px-8">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
              >
                {featuredProjects.map((project) => (
                  <div key={project.id} className="w-1/3 flex-shrink-0">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 h-[400px] flex flex-col">
                      <div className="h-44 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative p-4">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover rounded-lg"
                          onError={(e) => {
                            e.target.src = `https://picsum.photos/seed/${project.category}${project.id}/400/300.jpg`;
                          }}
                        />
                        <div className="absolute top-3 right-3">
                          <span className="bg-slate-700 text-white text-xs px-3 py-1 rounded-full font-medium">
                            {project.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-4 flex-grow flex flex-col">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">{project.title}</h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-grow">{project.description}</p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                          <div className="flex items-center flex-1 min-w-0">
                            <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                            </svg>
                            <span className="truncate">{project.client}</span>
                          </div>
                          <div className="flex items-center flex-shrink-0 ml-2">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                            </svg>
                            {project.duration}
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 2).map((tech, idx) => (
                              <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-md font-medium whitespace-nowrap">
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 2 && (
                              <span className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-md font-medium whitespace-nowrap">
                                +{project.technologies.length - 2}
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex gap-2 mt-auto">
                          <button className="flex-1 bg-slate-700 hover:bg-slate-800 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            View
                          </button>
                          <button className="flex-1 border border-slate-300 hover:bg-slate-50 text-slate-700 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 4.026a9.001 9.001 0 01-7.432 0m9.032-4.026A9.001 9.001 0 0112 3c-4.474 0-8.268 2.943-9.543 7a9.001 9.001 0 019.543 7z" />
                            </svg>
                            Similar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-slate-700' : 'bg-gray-300'
                  }`}
                  disabled={index >= featuredProjects.length - cardsToShow + 1}
                />
              ))}
            </div>
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
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://picsum.photos/seed/${project.category}${project.id}/400/300.jpg`;
                    }}
                  />
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
      <section className="py-20 bg-gradient-to-r from-slate-700 to-slate-800 text-white relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/images/enggved.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
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
    </>
  );
}
