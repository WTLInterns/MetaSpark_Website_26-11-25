import Link from 'next/link';
import TypingEffect from '@/components/TypingEffect';
import GradientTypingEffect from '@/components/GradientTypingEffect';
import ScrollProgress from '@/components/ScrollProgress';
import SmoothScroll from '@/components/SmoothScroll';
import AnimatedSection from '@/components/AnimatedSection';

export default function Machinery() {
  const machinery = [
    {
      name: "CNC Laser Cutting Machine",
      brand: "Trumpf",
      model: "TruLaser 3030",
      capacity: "3kW Fiber Laser",
      specifications: {
        "Cutting Area": "3000 x 1500 mm",
        "Max Thickness": "25 mm (Mild Steel)",
        "Materials": "Mild Steel, Stainless Steel, Aluminum",
        "Accuracy": "±0.1 mm"
      },
      image: "/images/CNCLaserCutting.jpg",
      featured: true
    },
    {
      name: "CNC Press Brake",
      brand: "Amada",
      model: "BD-1253",
      capacity: "125 Tons",
      specifications: {
        "Bending Length": "3200 mm",
        "Max Thickness": "8 mm (Mild Steel)",
        "CNC Control": "Amada NC9",
        "Backgauge": "1000 mm"
      },
      image: "/images/CNCPressBrake.jpg",
      featured: true
    },
    {
      name: "CNC Turret Punch Press",
      brand: "Amada",
      model: "Vipros 357",
      capacity: "33 Tons",
      specifications: {
        "Working Area": "1270 x 1270 mm",
        "Max Thickness": "6.35 mm",
        "Hit Rate": "200 hits/min",
        "Stations": "58 stations"
      },
      image: "🔌",
      featured: false
    },
    {
      name: "VMC Machine",
      brand: "Haas",
      model: "VF-2",
      capacity: "20 hp",
      specifications: {
        "Travel X-Y-Z": "762 x 406 x 508 mm",
        "Spindle Speed": "8100 rpm",
        "Tool Capacity": "24 tools",
        "Accuracy": "±0.005 mm"
      },
      image: "/images/VMCMachine.jpg",
      featured: true
    },
    {
      name: "MIG Welding Machine",
      brand: "ESAB",
      model: "Aristo 500",
      capacity: "500A",
      specifications: {
        "Materials": "Mild Steel, Stainless Steel",
        "Wire Diameter": "0.8 - 1.6 mm",
        "Gas Flow": "15-20 L/min",
        "Duty Cycle": "100% at 400A"
      },
      image: "⚡",
      featured: false
    },
    {
      name: "TIG Welding Machine",
      brand: "Fronius",
      model: "TransTig 220",
      capacity: "220A",
      specifications: {
        "Materials": "Stainless Steel, Aluminum",
        "AC/DC": "Yes",
        "Pulse Function": "Yes",
        "Gas Flow": "10-15 L/min"
      },
      image: "🔧",
      featured: false
    },
    
    {
      name: "Plasma Cutting Machine",
      brand: "Hypertherm",
      model: "HT2000",
      capacity: "200A",
      specifications: {
        "Cutting Area": "2500 x 1250 mm",
        "Max Thickness": "50 mm (Mild Steel)",
        "Pierce Height": "Auto",
        "Cutting Speed": "Variable"
      },
      image: "✂️",
      featured: false
    }
  ];

  const instruments = [
    { name: "Coordinate Measuring Machine (CMM)", brand: "Mitutoyo", accuracy: "±0.0025 mm" },
    { name: "Surface Roughness Tester", brand: "Mitutoyo", accuracy: "±0.01 μm" },
    { name: "Hardness Tester", brand: "Rockwell", accuracy: "±1 HRC" },
    { name: "Digital Caliper", brand: "Mitutoyo", accuracy: "±0.01 mm" },
    { name: "Height Gauge", brand: "Mitutoyo", accuracy: "±0.005 mm" },
    { name: "Angle Finder", brand: "Stanley", accuracy: "±0.1°" },
    { name: "Thickness Gauge", brand: "Elcometer", accuracy: "±0.01 mm" },
    { name: "Welding Gauge", brand: "G.A.L", accuracy: "±0.1 mm" }
  ];

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
                texts={["Machinery", "Equipment", "Technology", "Capabilities"]} 
                className="text-transparent"
                speed={150}
                pauseTime={2500}
              /> & Equipment
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              State-of-the-art manufacturing equipment and precision instruments for quality fabrication
            </p>
          </div>
        </div>
      </section>

      {/* Featured Machinery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <TypingEffect 
                texts={["Featured Equipment", "Key Machinery", "Advanced Tools", "Precision Equipment"]} 
                className="text-gray-900"
                speed={120}
                pauseTime={2000}
              />
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our key machinery that enables precision manufacturing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {machinery.filter(machine => machine.featured).map((item, index) => (
              <AnimatedSection key={index} direction={index % 3 === 0 ? "left" : index % 3 === 1 ? "right" : "up"}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{item.brand} {item.model}</p>
                    <p className="text-sm font-medium text-slate-700 mb-4">{item.capacity}</p>
                    <div className="space-y-2">
                      {Object.entries(item.specifications).slice(0, 3).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-sm">
                          <span className="text-gray-600">{key}:</span>
                          <span className="text-gray-900 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Inhouse Laser Cutting Machine */}
      <section className="py-12 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Inhouse Laser Cutting Machine</h2>
            <div className="w-24 h-1 bg-slate-600 rounded-full mx-auto"></div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-200 max-w-3xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-600 to-slate-700 text-white">
                    <th className="text-left py-2 px-3 font-bold">Machine</th>
                    <th className="text-left py-2 px-3 font-bold">DNE Bystronic Fiber Laser Cutting Machine</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-slate-50 hover:bg-slate-100 transition-colors">
                    <td className="py-2 px-3 font-semibold text-slate-700">Power</td>
                    <td className="py-2 px-2 text-gray-700">3000W</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50 transition-colors">
                    <td className="py-2 px-3 font-semibold text-slate-700">Laser Source</td>
                    <td className="py-2 px-2 text-gray-700">IPG Russia</td>
                  </tr>
                  <tr className="bg-slate-50 hover:bg-slate-100 transition-colors">
                    <td className="py-2 px-3 font-semibold text-slate-700">CNC</td>
                    <td className="py-2 px-2 text-gray-700">2000</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50 transition-colors">
                    <td className="py-2 px-3 font-semibold text-slate-700">Cutting Bed Size</td>
                    <td className="py-2 px-2 text-gray-700">2000 (W) x 6000 (L)</td>
                  </tr>
                  <tr className="bg-slate-50 hover:bg-slate-100 transition-colors">
                    <td className="py-2 px-3 font-semibold text-slate-700">Cutting Capability</td>
                    <td className="py-2 px-2">
                      <div className="space-y-0.5">
                        <div className="text-gray-700 text-xs">MS: Upto 20mm</div>
                        <div className="text-gray-700 text-xs">SS: Upto 12mm</div>
                        <div className="text-gray-700 text-xs">Al: Upto 8mm</div>
                        <div className="text-gray-700 text-xs">Cu: Upto 3mm</div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Available Machinery */}
      <section className="py-12 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">List of Available Machinery</h2>
            <div className="w-24 h-1 bg-slate-600 rounded-full mx-auto"></div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-200 max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-600 to-slate-700 text-white">
                    <th className="text-center py-2 px-3 font-bold">No.</th>
                    <th className="text-left py-2 px-3 font-bold">Description</th>
                    <th className="text-left py-2 px-3 font-bold">Make/Details</th>
                    <th className="text-center py-2 px-3 font-bold">Capacity</th>
                    <th className="text-center py-2 px-3 font-bold">Qty.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-slate-50 hover:bg-slate-100 transition-colors">
                    <td className="text-center py-2 px-3 font-semibold text-slate-700">01</td>
                    <td className="py-2 px-3 text-gray-700">TIGWELD</td>
                    <td className="py-2 px-3 text-gray-700">SHARP ARC</td>
                    <td className="py-2 px-3 text-gray-700">400 AMP</td>
                    <td className="text-center py-2 px-3 text-gray-700">02</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50 transition-colors">
                    <td className="text-center py-2 px-3 font-semibold text-slate-700">02</td>
                    <td className="py-2 px-3 text-gray-700">TIGWELD</td>
                    <td className="py-2 px-3 text-gray-700">MAN</td>
                    <td className="py-2 px-3 text-gray-700">400 AMP</td>
                    <td className="text-center py-2 px-3 text-gray-700">02</td>
                  </tr>
                  <tr className="bg-slate-50 hover:bg-slate-100 transition-colors">
                    <td className="text-center py-2 px-3 font-semibold text-slate-700">03</td>
                    <td className="py-2 px-3 text-gray-700">ARC WELD</td>
                    <td className="py-2 px-3 text-gray-700">-</td>
                    <td className="py-2 px-3 text-gray-700">250 & 300 AMP</td>
                    <td className="text-center py-2 px-3 text-gray-700">01</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50 transition-colors">
                    <td className="text-center py-2 px-3 font-semibold text-slate-700">04</td>
                    <td className="py-2 px-3 text-gray-700">Vertical Drilling Machine</td>
                    <td className="py-2 px-3 text-gray-700">JMC Make</td>
                    <td className="py-2 px-3 text-gray-700">Upto 20 mm thickness drilling</td>
                    <td className="text-center py-2 px-3 text-gray-700">01</td>
                  </tr>
                  <tr className="bg-slate-50 hover:bg-slate-100 transition-colors">
                    <td className="text-center py-2 px-3 font-semibold text-slate-700">05</td>
                    <td className="py-2 px-3 text-gray-700">Chopsaw Machine</td>
                    <td className="py-2 px-3 text-gray-700">Turbo Cut</td>
                    <td className="py-2 px-3 text-gray-700">Upto 125 mm height cutting capacity</td>
                    <td className="text-center py-2 px-3 text-gray-700">01</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Measuring Instruments */}
      <section className="py-12 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Measuring Instruments</h2>
            <div className="w-24 h-1 bg-slate-600 rounded-full mx-auto"></div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-200 max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-600 to-slate-700 text-white">
                    <th className="text-center py-2 px-3 font-bold">Sr. No.</th>
                    <th className="text-left py-2 px-3 font-bold">Instruments Details</th>
                    <th className="text-center py-2 px-3 font-bold">Qty.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-slate-50 hover:bg-slate-100 transition-colors">
                    <td className="text-center py-2 px-3 font-semibold text-slate-700">1</td>
                    <td className="py-2 px-3 text-gray-700">DIG. VER. CALLIPER:0-12"/300mm</td>
                    <td className="text-center py-2 px-3 text-gray-700">02</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50 transition-colors">
                    <td className="text-center py-2 px-3 font-semibold text-slate-700">2</td>
                    <td className="py-2 px-3 text-gray-700">DIG. VER. CALLIPER:0-24"/600mm</td>
                    <td className="text-center py-2 px-3 text-gray-700">01</td>
                  </tr>
                  <tr className="bg-slate-50 hover:bg-slate-100 transition-colors">
                    <td className="text-center py-2 px-3 font-semibold text-slate-700">3</td>
                    <td className="py-2 px-3 text-gray-700">O/S. MIC: 0-25mm. LC:0.01mm</td>
                    <td className="text-center py-2 px-3 text-gray-700">01</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50 transition-colors">
                    <td className="text-center py-2 px-3 font-semibold text-slate-700">4</td>
                    <td className="py-2 px-3 text-gray-700">O/S. MIC: 25-50mm. LC:0.01mm</td>
                    <td className="text-center py-2 px-3 text-gray-700">01</td>
                  </tr>
                  <tr className="bg-slate-50 hover:bg-slate-100 transition-colors">
                    <td className="text-center py-2 px-3 font-semibold text-slate-700">5</td>
                    <td className="py-2 px-3 text-gray-700">O/S. MIC: 50-75mm. LC:0.01mm</td>
                    <td className="text-center py-2 px-3 text-gray-700">01</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50 transition-colors">
                    <td className="text-center py-2 px-3 font-semibold text-slate-700">6</td>
                    <td className="py-2 px-3 text-gray-700">O/S. MIC: 75-100mm. LC:0.01mm</td>
                    <td className="text-center py-2 px-3 text-gray-700">01</td>
                  </tr>
                  <tr className="bg-slate-50 hover:bg-slate-100 transition-colors">
                    <td className="text-center py-2 px-3 font-semibold text-slate-700">7</td>
                    <td className="py-2 px-3 text-gray-700">Measuring tape (3mtr, 5mtr, 15mtr)</td>
                    <td className="text-center py-2 px-3 text-gray-700">06</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50 transition-colors">
                    <td className="text-center py-2 px-3 font-semibold text-slate-700">8</td>
                    <td className="py-2 px-3 text-gray-700">Degree protractor</td>
                    <td className="text-center py-2 px-3 text-gray-700">02</td>
                  </tr>
                  <tr className="bg-slate-50 hover:bg-slate-100 transition-colors">
                    <td className="text-center py-2 px-3 font-semibold text-slate-700">9</td>
                    <td className="py-2 px-3 text-gray-700">Right Angle</td>
                    <td className="text-center py-2 px-3 text-gray-700">04</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50 transition-colors">
                    <td className="text-center py-2 px-3 font-semibold text-slate-700">10</td>
                    <td className="py-2 px-3 text-gray-700">Scale : 300 mm</td>
                    <td className="text-center py-2 px-3 text-gray-700">02</td>
                  </tr>
                  <tr className="bg-slate-50 hover:bg-slate-100 transition-colors">
                    <td className="text-center py-2 px-3 font-semibold text-slate-700">11</td>
                    <td className="py-2 px-3 text-gray-700">Scale : 600 mm</td>
                    <td className="text-center py-2 px-3 text-gray-700">02</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>



      {/* Factory Information */}
      <section className="py-12 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Factory Information</h2>
            <div className="w-24 h-1 bg-slate-600 rounded-full mx-auto"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-200">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-slate-600 to-slate-700 text-white">
                      <th className="text-left py-2 px-3 font-bold">Factory</th>
                      <th className="text-left py-2 px-3 font-bold">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-slate-50 hover:bg-slate-100 transition-colors">
                      <td className="py-2 px-3 font-semibold text-slate-700">Factory Address</td>
                      <td className="py-2 px-3 text-gray-700">
                        <div className="text-xs">
                          Gat No 1325, Near Parc Robotics,<br/>
                          Sonawane Wasti, Chikhali, Pune 411062
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50 transition-colors">
                      <td className="py-2 px-3 font-semibold text-slate-700">Total Area</td>
                      <td className="py-2 px-3 text-gray-700">6000 Sq Ft</td>
                    </tr>
                    <tr className="bg-slate-50 hover:bg-slate-100 transition-colors">
                      <td className="py-2 px-3 font-semibold text-slate-700">Ownership</td>
                      <td className="py-2 px-3 text-gray-700">Lease Agreement for 5 Years</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50 transition-colors">
                      <td className="py-2 px-3 font-semibold text-slate-700">Other available service</td>
                      <td className="py-2 px-3 text-gray-700">5MT Crane (New)</td>
                    </tr>
                    <tr className="bg-slate-50 hover:bg-slate-100 transition-colors">
                      <td className="py-2 px-3 font-semibold text-slate-700">Office Cabin</td>
                      <td className="py-2 px-3 text-gray-700">800 Sq Ft</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50 transition-colors">
                      <td className="py-2 px-3 font-semibold text-slate-700">Total employees</td>
                      <td className="py-2 px-3 text-gray-700">15</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              {/* Factory Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-lg p-3 text-center shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="text-xl font-bold text-slate-700 mb-1">6000</div>
                  <div className="text-xs text-gray-600">Sq Ft Area</div>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-lg p-3 text-center shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="text-xl font-bold text-slate-700 mb-1">5</div>
                  <div className="text-xs text-gray-600">Years Lease</div>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-lg p-3 text-center shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="text-xl font-bold text-slate-700 mb-1">800</div>
                  <div className="text-xs text-gray-600">Sq Ft Office</div>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-lg p-3 text-center shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="text-xl font-bold text-slate-700 mb-1">15</div>
                  <div className="text-xs text-gray-600">Employees</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Infrastructure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Factory Infrastructure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern manufacturing facility designed for efficiency and quality
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Facility Overview</h3>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Manufacturing Area</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Total Area: 15,000 sq. ft.</li>
                    <li>• Production Floor: 10,000 sq. ft.</li>
                    <li>• Quality Control Area: 2,000 sq. ft.</li>
                    <li>• Storage and Warehousing: 3,000 sq. ft.</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Supporting Infrastructure</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 24/7 Power Backup</li>
                    <li>• Compressed Air System</li>
                    <li>• Ventilation and Fume Extraction</li>
                    <li>• Safety and Fire Protection</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: "Climate Control", desc: "Temperature and humidity controlled environment", icon: "🌡️" },
                  { title: "Safety Standards", desc: "OSHA compliant safety measures", icon: "🛡️" },
                  { title: "Waste Management", desc: "Environmentally friendly waste disposal", icon: "♻️" },
                  { title: "Loading Zone", desc: "Easy access for heavy vehicles", icon: "🚚" }
                ].map((feature, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">{feature.icon}</div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
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
          <h2 className="text-4xl font-bold mb-4">Ready to Leverage Our Capabilities?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our advanced equipment and skilled team are ready to handle your next project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-slate-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
              Get Quote
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
