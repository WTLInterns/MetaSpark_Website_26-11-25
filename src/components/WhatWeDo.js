import Image from 'next/image';

export default function WhatWeDo() {
  const services = [
    {
      title: "Industrial Design",
      description: "2D Design and Flat pattern developments.",
      image: "/images/industrial-design.jpg"
    },
    {
      title: "Cutting Services",
      description: "Mild steel, Stainless steel Aluminum and copper plate.",
      image: "/images/cutting-services.jpg"
    },
    {
      title: "Bending Services",
      description: "CNC Bending",
      image: "/images/bending-services.jpg"
    },
    {
      title: "Powder coating service",
      description: "MS and GI Coating.",
      image: "/images/powder-coating.jpg"
    }
  ];

  return (
    <>
      {/* Original Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-gradient-to-br from-gray-300 via-gray-400 to-gray-300"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">What we do:</h2>
            {/* <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div> */}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Section - Service Cards */}
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-4">
                  {/* Blue Box */}
                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 border-2 border-blue-800 rounded-lg px-6 py-4 shadow-lg min-w-[180px]">
                      <h3 className="text-white font-bold text-lg">{service.title}</h3>
                    </div>
                  </div>
                  
                  {/* Gray Box */}
                  <div className="relative -ml-2 mt-2">
                    <div className="bg-gray-100 border border-gray-300 rounded-lg px-6 py-3 shadow-md min-w-[200px]">
                      <p className="text-gray-700 text-sm">• {service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Right Section - Image Collage */}
            <div className="relative h-[500px]">
              {/* Main Image - Top Left */}
              <div className="absolute top-0 left-0 w-70 h-70 bg-white rounded-lg shadow-xl border-4 border-white overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Industrial Design</span>
                </div>
              </div>
              
              {/* Second Image - Top Right */}
              <div className="absolute top-1 right-1 w-75 h-50 bg-white rounded-lg shadow-xl border-4 border-white overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center">
                  <span className="text-blue-600 text-sm">Cutting Services</span>
                </div>
              </div>
              
              {/* Third Image - Bottom Left */}
              <div className="absolute bottom-1 left-1 w-75 h-50 bg-white rounded-lg shadow-xl border-4 border-white overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-green-200 to-green-300 flex items-center justify-center">
                  <span className="text-green-600 text-sm">Bending Services</span>
                </div>
              </div>
              
              {/* Fourth Image - Bottom Right */}
              <div className="absolute bottom-0 right-0 w-70 h-70 bg-white rounded-lg shadow-xl border-4 border-white overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center">
                  <span className="text-purple-600 text-sm">Powder Coating</span>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-red-500/10 rounded-full blur-xl"></div>
              <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-blue-500/10 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-gradient-to-br from-gray-300 via-gray-400 to-gray-300"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative">
         
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Section - Image Collage */}
            <div className="relative h-[500px]">
              {/* Main Image - Top Left */}
              <div className="absolute top-0 left-0 w-70 h-70 bg-white rounded-lg shadow-xl border-4 border-white overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Architectural Griils</span>
                </div>
              </div>
              
              {/* Second Image - Top Right */}
              <div className="absolute top-1 right-1 w-75 h-50 bg-white rounded-lg shadow-xl border-4 border-white overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center">
                  <span className="text-blue-600 text-sm">Fabrication Works</span>
                </div>
              </div>
              
              {/* Third Image - Bottom Left */}
              <div className="absolute bottom-1 left-1  w-75 h-50 bg-white rounded-lg shadow-xl border-4 border-white overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-green-200 to-green-300 flex items-center justify-center">
                  <span className="text-green-600 text-sm">VMC Machining</span>
                </div>
              </div>
              
              {/* Fourth Image - Bottom Right */}
              <div className="absolute bottom-0 right-0 w-70 h-70 bg-white rounded-lg shadow-xl border-4 border-white overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center">
                  <span className="text-purple-600 text-sm">Assembly</span>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-red-500/10 rounded-full blur-xl"></div>
              <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-blue-500/10 rounded-full blur-lg"></div>
            </div>
            
            {/* Right Section - Service Cards */}
            <div className="space-y-6">
              {[
                {
                  title: "Architectural Griils",
                  description: "MS and SS architectural grills for offices and homes "
                },
                {
                  title: "Fabrication Works", 
                  description: "Structure and product fabrication ,Finishing worked of developed products"
                },
                {
                  title: "VMC Machining",
                  description: "VMC Machinings as per clients requirements"
                },
                {
                  title: "Assembly",
                  description: "Manufactured parts assembly"
                }
              ].map((service, index) => (
                <div key={index} className="flex items-start space-x-4">
                  {/* Blue Box */}
                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 border-2 border-blue-800 rounded-lg px-6 py-4 shadow-lg min-w-[180px]">
                      <h3 className="text-white font-bold text-lg">{service.title}</h3>
                    </div>
                  </div>
                  
                  {/* Gray Box */}
                  <div className="relative -ml-2 mt-2">
                    <div className="bg-gray-100 border border-gray-300 rounded-lg px-6 py-3 shadow-md min-w-[200px]">
                      <p className="text-gray-700 text-sm">• {service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
