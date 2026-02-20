import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PenTool, Activity } from 'lucide-react';
import { MACHINES, COMPANY_INFO } from '../constants';
import { ASSETS } from '../config/assets';
import SmartContactForm from '../components/SmartContactForm';

const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Common padding class for consistent alignment across wide screens - Reduced side padding
  const fluidPadding = "px-4 md:px-8 lg:px-16 xl:px-20";

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* 
        Modern Hero Section 
        Style: Full Screen, Bottom Aligned Text, Clean Typography
      */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
           <video 
             autoPlay 
             muted 
             loop 
             playsInline
             className="w-full h-full object-cover"
             poster={ASSETS.hero.poster}
           >
             <source src={ASSETS.hero.video} type="video/mp4" />
             {/* Fallback image if video is not supported or missing */}
             <img 
              src={ASSETS.hero.poster}
              alt="Modern Industrial Machinery" 
              className="w-full h-full object-cover" 
             />
           </video>
           
           {/* Gradient Overlay for Text Readability - Bottom Heavy */}
           <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10"></div>
        </div>
        
        {/* Content Container */}
        <div className={`absolute inset-0 flex flex-col justify-end pb-20 md:pb-32 ${fluidPadding}`}>
           <div className="w-full max-w-[1920px] mx-auto flex flex-col lg:flex-row justify-between items-end gap-8 md:gap-12">
              
              {/* Left Side: Headline */}
              <div className="w-full lg:w-2/3">
                <p className={`text-pms-orange font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base transition-all duration-1000 delay-500 ease-out ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  Since 2002
                </p>
                
                {/* Slide-in Animation Headline (From Left) */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-6 lg:mb-0">
                  <span className={`block transition-all duration-1000 ease-out delay-100 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                      Packaging
                  </span>
                  <span className={`block transition-all duration-1000 ease-out delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                      Machinery <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Solutions.</span>
                  </span>
                </h1>
              </div>

              {/* Right Side: Description */}
              <div className="w-full lg:w-1/3 lg:pb-2">
                {/* Slide-in Animation Description (From Right) - Left Aligned Text */}
                <p className={`text-lg md:text-xl text-gray-300 leading-relaxed transition-all duration-1000 delay-700 ease-out lg:pl-8 text-left ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                  Your trusted partner for high-performance Rotogravure, Flexo, and Lamination machinery. 
                  Delivering expert engineering services and reliable production solutions globally.
                </p>
              </div>

           </div>
        </div>
      </section>

      {/* Modern Stats Section - Floating */}
      <div className="bg-pms-navy relative z-10 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
           {[
             { label: "Years Experience", value: "24+" },
             { label: "Projects Delivered", value: "150+" },
             { label: "Service Response", value: "24/7" },
             { label: "Global Partners", value: "12" }
           ].map((stat, idx) => (
             <div key={idx} className="py-16 px-6 text-center hover:bg-white/5 transition-colors group">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 group-hover:text-pms-orange transition-colors">{stat.value}</h3>
                <p className="text-gray-400 text-xs md:text-sm uppercase tracking-widest">{stat.label}</p>
             </div>
           ))}
        </div>
      </div>

      {/* Featured Machinery - Full Width Cards Style */}
      <section className="bg-gray-50 py-32">
        <div className={`w-full ${fluidPadding}`}>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
             <div className="max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-bold text-pms-navy mb-6">Engineered for Performance</h2>
                <div className="h-2 w-32 bg-pms-orange mb-6"></div>
                <p className="text-gray-500 text-lg leading-relaxed">
                  Discover our range of advanced machinery, built to handle the most demanding production environments with precision and speed.
                </p>
             </div>
             <Link to="/machinery" className="hidden md:flex items-center gap-3 text-pms-navy font-bold text-lg hover:text-pms-orange transition-colors group">
                View Full Catalog <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform"/>
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {MACHINES.slice(0, 3).map((machine, index) => (
              <div key={machine.id} className={`group relative h-[600px] overflow-hidden rounded-3xl shadow-xl ${index === 1 ? 'md:-mt-16' : ''}`}>
                <div className="absolute inset-0 bg-gray-900">
                   <img 
                    src={machine.image} 
                    alt={machine.name} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000" 
                   />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
                
                <div className="absolute bottom-0 left-0 p-10 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                   <p className="text-pms-orange text-sm font-bold uppercase tracking-widest mb-3">{machine.category}</p>
                   <h3 className="text-3xl font-bold text-white mb-6 leading-tight">{machine.name}</h3>
                   <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                      <p className="text-gray-300 text-base line-clamp-2 mb-6">{machine.description}</p>
                      <Link to="/machinery" className="inline-flex items-center gap-2 text-white border-b-2 border-white pb-1 hover:text-pms-orange hover:border-pms-orange transition-colors font-medium">
                        View Specifications <ArrowRight size={18} />
                      </Link>
                   </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 md:hidden">
            <Link to="/machinery" className="inline-block bg-pms-navy text-white px-10 py-4 rounded-full font-bold shadow-lg">
              View All Machines
            </Link>
          </div>
        </div>
      </section>

      {/* Modern "Open Service" Section */}
      <section className="bg-black text-white py-32 relative overflow-hidden">
         {/* Abstract geometric background */}
         <div className="absolute top-0 right-0 w-2/3 h-full bg-pms-navy opacity-20 -skew-x-12 transform translate-x-32"></div>
         
         <div className={`w-full ${fluidPadding} relative z-10`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-24 items-center">
               <div>
                  <div className="flex items-center gap-4 mb-8">
                     <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                        <PenTool className="text-pms-orange" size={32} />
                     </div>
                     <span className="text-2xl font-light tracking-wide text-gray-300">Engineering Services</span>
                  </div>
                  
                  <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-8">
                     We fix what others <br/>
                     <span className="text-pms-orange italic">can't.</span>
                  </h2>
                  
                  <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-lg">
                     Our "Open Service Policy" means we support your entire factory floor. 
                     Regardless of the machine brand, our engineers diagnose and solve complex drive, 
                     registration, and mechanical issues.
                  </p>
                  
                  <div className="space-y-6">
                     {[
                        "Any Brand, Any Model",
                        "Complex PLC Retrofitting",
                        "Urgent Breakdown Support"
                     ].map((item, i) => (
                        <div key={i} className="flex items-center gap-6 group cursor-default">
                           <div className="h-0.5 w-12 bg-gray-700 group-hover:bg-pms-orange transition-colors"></div>
                           <span className="text-xl group-hover:translate-x-2 transition-transform font-medium">{item}</span>
                        </div>
                     ))}
                  </div>

                  <div className="mt-16">
                     <Link to="/services" className="text-white font-bold text-xl border-b-2 border-pms-orange pb-2 hover:text-pms-orange transition-colors">
                        Explore Engineering Capabilities
                     </Link>
                  </div>
               </div>
               
               <div className="relative mt-12 lg:mt-0">
                  {/* Glassmorphism Card */}
                  <div className="absolute -top-20 -left-20 w-96 h-96 bg-pms-orange/10 rounded-full blur-[100px]"></div>
                  <div className="bg-white/5 border border-white/10 backdrop-blur-md p-12 rounded-[2.5rem] relative shadow-2xl">
                     <Activity className="text-pms-orange mb-8" size={64} />
                     <blockquote className="text-2xl md:text-3xl font-light leading-snug mb-10 text-white">
                        "We don't just sell machines; we sell uptime. My team understands that every minute of downtime is lost revenue."
                     </blockquote>
                     <div className="flex items-center gap-6">
                        <div className="w-20 h-20 bg-gray-700 rounded-full overflow-hidden border-2 border-pms-orange">
                           <img src={ASSETS.common.founder} alt="Founder" className="w-full h-full object-cover" />
                        </div>
                        <div>
                           <div className="font-bold text-2xl text-white">{COMPANY_INFO.founder}</div>
                           <div className="text-base text-gray-500 uppercase tracking-wider">Founder & CEO</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Clean Contact Section */}
      <section className="py-32 bg-white">
        <div className={`w-full ${fluidPadding}`}>
           <div className="bg-pms-silver rounded-[3rem] p-8 md:p-16 lg:p-24 overflow-hidden relative shadow-inner">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full mix-blend-overlay opacity-50 filter blur-[80px] transform translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="flex flex-col xl:flex-row gap-16 relative z-10">
                 <div className="xl:w-5/12">
                    <h2 className="text-4xl md:text-5xl font-bold text-pms-navy mb-8">Let's talk production.</h2>
                    <p className="text-xl text-gray-600 mb-12 font-light leading-relaxed">
                       Ready to upgrade your line or need urgent support? 
                       Our team responds within 24 hours.
                    </p>
                    
                    <div className="space-y-10">
                       <div>
                          <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3">Call Us Direct</p>
                          <p className="text-3xl md:text-4xl font-bold text-pms-navy">{COMPANY_INFO.phone}</p>
                       </div>
                       <div>
                          <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3">Visit HQ</p>
                          <p className="text-2xl text-pms-navy leading-relaxed">{COMPANY_INFO.address}</p>
                       </div>
                    </div>
                 </div>
                 <div className="xl:w-7/12">
                    <SmartContactForm />
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;