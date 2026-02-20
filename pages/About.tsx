import React from 'react';
import { COMPANY_INFO } from '../constants';
import { ASSETS } from '../config/assets';
import { CircleCheck } from 'lucide-react';

const About: React.FC = () => {
  // Reduced padding
  const fluidPadding = "px-4 md:px-8 lg:px-16 xl:px-20";

  return (
    <div className="min-h-screen bg-white">
       {/* Hero - Adjusted padding for fixed nav */}
       <div className="bg-gray-50 pt-40 pb-32 rounded-b-[4rem] mb-20">
         <div className={`w-full ${fluidPadding}`}>
            <h1 className="text-6xl md:text-8xl font-bold text-pms-navy mb-6 tracking-tight">About PMS</h1>
            <p className="text-2xl md:text-3xl text-gray-500 font-light max-w-4xl">Engineering innovation in flexible packaging since 2002.</p>
         </div>
       </div>

       <div className={`w-full ${fluidPadding} pb-32`}>
         <div className="flex flex-col xl:flex-row gap-20 items-start">
            
            {/* Founder Profile */}
            <div className="xl:w-5/12 w-full">
                <div className="bg-pms-navy rounded-[3rem] overflow-hidden shadow-2xl xl:sticky xl:top-32">
                    <div className="h-[500px] overflow-hidden">
                        <img 
                            src={ASSETS.common.founder}
                            alt={COMPANY_INFO.founder} 
                            className="w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity hover:scale-105 duration-700"
                        />
                    </div>
                    <div className="p-10 text-white text-center bg-gradient-to-b from-pms-navy/50 to-pms-navy">
                        <h3 className="text-4xl font-bold mb-2">{COMPANY_INFO.founder}</h3>
                        <p className="text-pms-orange font-bold uppercase tracking-widest text-sm mb-8">Founder & CEO</p>
                        <div className="w-16 h-1 bg-white/20 mx-auto mb-8"></div>
                        <p className="text-gray-300 text-xl italic leading-relaxed font-light">
                            "Machines are only as good as the engineers behind them. At PMS, we sell reliability, not just iron."
                        </p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="xl:w-7/12 w-full pt-4">
                <h2 className="text-4xl md:text-5xl font-bold text-pms-navy mb-10 leading-tight">A Legacy of Technical Excellence</h2>
                <div className="prose prose-xl prose-slate text-gray-600 leading-relaxed mb-16 max-w-none">
                    <p className="mb-6">
                        Packaging Machinery Solutions (PMS) was founded with a singular vision: to bridge the gap between high-end machine manufacturing and local engineering support. 
                    </p>
                    <p className="mb-6">
                        Led by <strong>{COMPANY_INFO.founder}</strong>, a veteran with over 24 years of hands-on experience in the polymer and printing industry, PMS has grown from a consultancy firm to a full-scale machinery supplier and service provider.
                    </p>
                    <p>
                        We understand that for a factory owner, a machine is an investment that must yield returns. That is why every machine we sell is pre-inspected, and every service call is treated with urgency.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
                    <div className="bg-gray-50 p-10 rounded-3xl border-l-4 border-pms-orange hover:shadow-lg transition-shadow">
                        <h4 className="font-bold text-pms-navy mb-4 text-2xl">Our Mission</h4>
                        <p className="text-gray-600 text-lg leading-relaxed">To empower the packaging industry with affordable, high-tech machinery backed by uncompromising engineering support.</p>
                    </div>
                    <div className="bg-gray-50 p-10 rounded-3xl border-l-4 border-pms-navy hover:shadow-lg transition-shadow">
                        <h4 className="font-bold text-pms-navy mb-4 text-2xl">Our Vision</h4>
                        <p className="text-gray-600 text-lg leading-relaxed">To be the #1 trusted partner for flexible packaging plants, known for fixing the unfixable.</p>
                    </div>
                </div>

                <h3 className="text-3xl font-bold text-pms-navy mb-8">Core Competencies</h3>
                <div className="bg-white border border-gray-100 shadow-2xl rounded-[2.5rem] p-10 md:p-12">
                    <ul className="space-y-6">
                        {['Rotogravure Process Engineering', 'Flexographic Printing Optimization', 'Solvent-less Lamination Tech', 'Plant Layout & Workflow Design'].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-6 text-gray-700 text-xl font-medium">
                                <div className="bg-pms-orange/10 p-2 rounded-full">
                                    <CircleCheck size={28} className="text-pms-orange shrink-0" />
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
         </div>
       </div>
    </div>
  );
};

export default About;