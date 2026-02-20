import React from 'react';
import { SERVICES, COMPANY_INFO } from '../constants';
import { Wrench, Settings, Cpu, TriangleAlert, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  // Reduced padding
  const fluidPadding = "px-4 md:px-8 lg:px-16 xl:px-20";

  const getIcon = (iconName: string) => {
    switch(iconName) {
        case 'Wrench': return <Wrench size={32} />;
        case 'AlertTriangle': return <TriangleAlert size={32} />;
        case 'Settings': return <Settings size={32} />;
        case 'Cpu': return <Cpu size={32} />;
        default: return <Wrench size={32} />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero - Adjusted padding for fixed nav */}
      <div className="bg-pms-navy pt-40 pb-32 text-center text-white relative overflow-hidden rounded-b-[4rem] mb-20 shadow-xl">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className={`relative z-10 w-full ${fluidPadding}`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">World-Class Engineering</h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
                We don't just supply machines. We ensure they run at peak performance.
                Specializing in troubleshooting complex printing and packaging lines.
            </p>
        </div>
      </div>

      {/* The Open Service Policy */}
      <div className={`w-full ${fluidPadding} mb-32`}>
         <div className="bg-orange-50 rounded-[3rem] p-10 md:p-16 border border-orange-100 flex flex-col xl:flex-row items-center gap-12 shadow-lg">
            <div className="bg-white p-10 rounded-full shadow-2xl shadow-orange-200/50 shrink-0">
                <Settings className="text-pms-orange h-16 w-16" />
            </div>
            <div>
                <h2 className="text-4xl font-bold text-pms-navy mb-6">Our "Open Service Policy"</h2>
                <p className="text-gray-700 text-xl leading-relaxed">
                    Unlike other suppliers who only service what they sell, <strong>PMS offers engineering support for any machine brand</strong> in your factory. Whether it's a European Rotogravure press or an Asian Slitter, our team has the schematics and expertise to fix it.
                </p>
            </div>
         </div>
      </div>

      {/* Services Grid */}
      <div className={`py-10 w-full ${fluidPadding} mb-32`}>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
                <div key={idx} className="flex flex-col gap-8 group bg-white p-10 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="shrink-0">
                        <div className="bg-pms-navy/5 text-pms-navy p-6 rounded-2xl group-hover:bg-pms-navy group-hover:text-white transition-colors duration-300 w-fit shadow-inner">
                            {getIcon(service.icon)}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-pms-navy mb-4 group-hover:text-pms-orange transition-colors">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-900 text-white py-32 rounded-t-[4rem]">
          <div className={`w-full ${fluidPadding}`}>
            <div className="text-center mb-24">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Factory Owners Trust {COMPANY_INFO.founder}</h2>
                <div className="h-1 w-32 bg-pms-orange mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="bg-white/5 p-12 rounded-[2.5rem] backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                    <h4 className="text-3xl font-bold text-pms-orange mb-6">Technical Depth</h4>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        We understand the physics of web handling, tension control loops, and solvent evaporation rates. We don't guess; we calculate.
                    </p>
                </div>
                <div className="bg-white/5 p-12 rounded-[2.5rem] backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                    <h4 className="text-3xl font-bold text-pms-orange mb-6">Rapid Response</h4>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        Production downtime costs thousands per hour. We prioritize breakdown calls and offer remote video diagnostics via WhatsApp.
                    </p>
                </div>
                <div className="bg-white/5 p-12 rounded-[2.5rem] backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                    <h4 className="text-3xl font-bold text-pms-orange mb-6">Parts Network</h4>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        We maintain a vast network of suppliers for ceramic rollers, doctor blades, and motors, ensuring you get spare parts faster.
                    </p>
                </div>
            </div>
          </div>
      </div>

      {/* CTA */}
      <div className="bg-pms-orange py-32 text-center">
          <div className={`w-full ${fluidPadding}`}>
              <h2 className="text-5xl font-bold text-white mb-12">Machine Down? We Can Help.</h2>
              <div className="flex flex-col sm:flex-row justify-center gap-8">
                <Link to="/contact" className="bg-white text-pms-orange font-bold px-12 py-6 rounded-full shadow-2xl hover:bg-gray-100 transition-colors text-xl">
                    Request Urgent Repair
                </Link>
                <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} className="bg-black/20 backdrop-blur text-white font-bold px-12 py-6 rounded-full shadow-2xl hover:bg-black/30 transition-colors flex items-center justify-center gap-4 text-xl">
                    <Smartphone size={24} /> WhatsApp Engineer
                </a>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Services;