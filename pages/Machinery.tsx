import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MACHINES } from '../constants';
import { MachineCategory, Machine } from '../types';
import { Download, FileText, Youtube, ArrowRight } from 'lucide-react';
import { ASSETS } from '../config/assets';

const Machinery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);
  
  const location = useLocation();
  // Reduced padding
  const fluidPadding = "px-4 md:px-8 lg:px-16 xl:px-20";

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('cat');
    if (cat) {
        setActiveCategory(cat);
    }
  }, [location]);

  const filteredMachines = activeCategory === 'All' 
    ? MACHINES 
    : MACHINES.filter(m => m.category.includes(activeCategory));

  const categories = ['All', ...Object.values(MachineCategory)];

  // Modal for Machine Details
  const MachineDetailModal = ({ machine, onClose }: { machine: Machine, onClose: () => void }) => (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md animate-fade-in overflow-y-auto">
        <div className="bg-white rounded-3xl w-full max-w-6xl overflow-hidden shadow-2xl relative flex flex-col lg:flex-row my-auto">
            <button onClick={onClose} className="absolute top-6 right-6 bg-white/80 hover:bg-white p-3 rounded-full z-20 shadow-lg transition-transform hover:scale-110">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            
            <div className="lg:w-1/2 h-64 lg:h-auto bg-gray-100 relative">
                 <img src={machine.image} alt={machine.name} className="w-full h-full object-cover" />
                 {/* Overlay to hint at video capability */}
                 <div className="absolute inset-0 flex items-center justify-center bg-black/10 group cursor-pointer hover:bg-black/20 transition-colors">
                    <div className="bg-white/90 p-6 rounded-full shadow-2xl animate-pulse">
                         <Youtube className="text-red-600" size={48} />
                    </div>
                 </div>
            </div>
            <div className="lg:w-1/2 p-10 lg:p-16 overflow-y-auto max-h-[80vh] lg:max-h-auto">
                <div className="mb-4 text-pms-orange font-bold text-sm uppercase tracking-widest">{machine.subcategory}</div>
                <h2 className="text-4xl lg:text-5xl font-bold text-pms-navy mb-6 leading-tight">{machine.name}</h2>
                <p className="text-gray-600 mb-10 text-lg leading-relaxed">{machine.description}</p>
                
                <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
                    <h3 className="font-bold text-lg text-pms-navy mb-4 border-b pb-2">Technical Specifications</h3>
                    <table className="w-full text-base">
                        <tbody>
                            {machine.specs.map((spec, idx) => (
                                <tr key={idx} className="border-b border-gray-100 last:border-0">
                                    <td className="py-3 px-2 font-medium text-gray-500">{spec.label}</td>
                                    <td className="py-3 px-2 font-bold text-pms-navy text-right">{spec.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h3 className="font-bold text-lg text-pms-navy mb-4">Key Features</h3>
                <ul className="mb-10 space-y-2">
                    {machine.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <div className="mt-1.5 h-2 w-2 rounded-full bg-pms-orange shrink-0"></div>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#contact" className="flex-1 bg-pms-navy text-white text-center py-4 rounded-xl font-bold hover:bg-pms-blue transition-colors shadow-lg text-lg">
                        Get Price Quote
                    </a>
                    <button className="flex items-center justify-center gap-3 border-2 border-gray-200 px-8 py-4 rounded-xl hover:bg-gray-50 text-gray-700 font-bold transition-colors">
                        <FileText size={20} /> Datasheet
                    </button>
                </div>
            </div>
        </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen pb-20"> 
      {/* Header - Added top padding for fixed navbar */}
      <div className="bg-pms-navy pt-32 pb-24 rounded-b-[4rem] mb-12 shadow-xl">
        <div className={`w-full text-center ${fluidPadding}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Machinery Catalog</h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-xl font-light leading-relaxed">
                Explore our range of high-performance printing, lamination, and converting machinery. 
                Engineered for durability and precision.
            </p>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-20 z-30 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-4">
        <div className={`w-full ${fluidPadding}`}>
            <div className="flex overflow-x-auto gap-4 no-scrollbar items-center md:justify-center px-2 pb-2">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`whitespace-nowrap px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                            activeCategory === cat 
                            ? 'bg-pms-navy text-white shadow-xl transform scale-105 ring-4 ring-pms-navy/20' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-pms-navy'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
      </div>

      {/* Grid */}
      <div className={`w-full ${fluidPadding} mt-16`}>
        {filteredMachines.length === 0 ? (
            <div className="text-center py-32 bg-white rounded-3xl border border-dashed border-gray-300">
                <p className="text-2xl text-gray-500 font-light">No machines found in this category.</p>
                <button onClick={() => setActiveCategory('All')} className="mt-4 text-pms-orange font-bold underline">View All Machines</button>
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
                {filteredMachines.map((machine) => (
                    <div key={machine.id} className="bg-white rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100 overflow-hidden group hover:-translate-y-2">
                        <div className="h-72 overflow-hidden relative bg-gray-200">
                            <img src={machine.image} alt={machine.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-pms-navy text-xs font-bold px-4 py-2 rounded-full shadow-sm">
                                {machine.category}
                            </div>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <div className="text-xs font-bold text-pms-orange uppercase tracking-wider mb-3">{machine.subcategory}</div>
                            <h3 className="text-2xl font-bold text-pms-navy mb-4 leading-tight group-hover:text-pms-orange transition-colors">{machine.name}</h3>
                            <div className="space-y-4 mb-8 bg-gray-50 p-4 rounded-xl">
                                {machine.specs.slice(0, 2).map((spec, idx) => (
                                    <div key={idx} className="flex justify-between text-sm pb-2 border-b border-gray-200 last:border-0 last:pb-0">
                                        <span className="text-gray-500">{spec.label}</span>
                                        <span className="font-bold text-pms-navy">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-auto">
                                <button 
                                    onClick={() => setSelectedMachine(machine)}
                                    className="w-full flex items-center justify-between bg-white border-2 border-gray-100 hover:border-pms-navy hover:bg-pms-navy hover:text-white text-pms-navy py-4 px-6 rounded-xl font-bold transition-all group-btn"
                                >
                                    <span>View Specs</span>
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedMachine && (
        <MachineDetailModal machine={selectedMachine} onClose={() => setSelectedMachine(null)} />
      )}

      {/* Download Catalog CTA */}
      <div className={`w-full ${fluidPadding} mt-32`}>
          <div className="bg-pms-navy rounded-[3rem] p-12 lg:p-20 flex flex-col xl:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl">
              {/* Used style tag here for dynamic bg since tailwind arbitrary url expects literal string in classname */}
              <div 
                className="absolute inset-0 opacity-10 bg-repeat mix-blend-overlay"
                style={{ backgroundImage: `url(${ASSETS.textures.carbonFibre})` }}
              ></div>
              <div className="relative z-10 text-center xl:text-left">
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">Need the complete product list?</h3>
                  <p className="text-gray-400 text-xl">Download our 2026 Comprehensive Machinery Brochure PDF.</p>
              </div>
              <button className="relative z-10 flex items-center gap-4 bg-pms-orange text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-pms-navy transition-all shadow-xl hover:scale-105 text-lg whitespace-nowrap">
                  <Download size={24} /> Download Catalog
              </button>
          </div>
      </div>
    </div>
  );
};

export default Machinery;