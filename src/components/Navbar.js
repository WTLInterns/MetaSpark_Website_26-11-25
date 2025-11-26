'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-lg text-gray-900 shadow-2xl sticky top-0 z-50 border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-40 h-12 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="MetaSpark Engineers Pvt Ltd"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" className="px-4 py-2 rounded-lg text-gray-900 font-medium transition-all duration-300 hover:scale-105 hover:text-slate-600 relative group focus:outline-none focus:ring-0 active:outline-none active:ring-0">
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link href="/about" className="px-4 py-2 rounded-lg text-gray-900 font-medium transition-all duration-300 hover:scale-105 hover:text-slate-600 relative group focus:outline-none focus:ring-0 active:outline-none active:ring-0">
              About Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link href="/services" className="px-4 py-2 rounded-lg text-gray-900 font-medium transition-all duration-300 hover:scale-105 hover:text-slate-600 relative group focus:outline-none focus:ring-0 active:outline-none active:ring-0">
              Services
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link href="/portfolio" className="px-4 py-2 rounded-lg text-gray-900 font-medium transition-all duration-300 hover:scale-105 hover:text-slate-600 relative group focus:outline-none focus:ring-0 active:outline-none active:ring-0">
              Portfolio
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link href="/machinery" className="px-4 py-2 rounded-lg text-gray-900 font-medium transition-all duration-300 hover:scale-105 hover:text-slate-600 relative group focus:outline-none focus:ring-0 active:outline-none active:ring-0">
              Machinery
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link href="/contact" className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 text-white font-semibold">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-slate-600 focus:outline-none p-2 rounded-lg transition-all duration-300 hover:scale-110"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-lg rounded-lg mt-2 p-4 border border-gray-200/50 shadow-xl">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="px-4 py-3 rounded-lg text-gray-900 font-medium transition-all duration-300 hover:text-slate-600 hover:translate-x-1 focus:outline-none focus:ring-0 active:outline-none active:ring-0" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="px-4 py-3 rounded-lg text-gray-900 font-medium transition-all duration-300 hover:text-slate-600 hover:translate-x-1 focus:outline-none focus:ring-0 active:outline-none active:ring-0" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
              <Link href="/services" className="px-4 py-3 rounded-lg text-gray-900 font-medium transition-all duration-300 hover:text-slate-600 hover:translate-x-1 focus:outline-none focus:ring-0 active:outline-none active:ring-0" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link href="/portfolio" className="px-4 py-3 rounded-lg text-gray-900 font-medium transition-all duration-300 hover:text-slate-600 hover:translate-x-1 focus:outline-none focus:ring-0 active:outline-none active:ring-0" onClick={() => setIsOpen(false)}>
                Portfolio
              </Link>
              <Link href="/machinery" className="px-4 py-3 rounded-lg text-gray-900 font-medium transition-all duration-300 hover:text-slate-600 hover:translate-x-1 focus:outline-none focus:ring-0 active:outline-none active:ring-0" onClick={() => setIsOpen(false)}>
                Machinery
              </Link>
              <Link href="/contact" className="px-4 py-3 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-all duration-300 text-white font-semibold" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
