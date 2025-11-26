import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo.png"
                  alt="MetaSpark Engineers Pvt Ltd"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl">MetaSpark Engineers Pvt Ltd</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional sheet metal profile manufacturing and processing company with over 20 years of experience in metal fabrication.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">f</span>
              </div>
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">t</span>
              </div>
              <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-red-400 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-red-400 transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-red-400 transition-colors">Portfolio</Link></li>
              <li><Link href="/machinery" className="text-gray-400 hover:text-red-400 transition-colors">Machinery</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-red-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span> Office & Factory :
                  Gat No 1325,Near Parc Robotics,Sonawane
                  Wasti,Chikhali,Pune-411062</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                <span>info@metaspark.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MetaSpark Engineers Pvt Ltd. All rights reserved. | Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
}
