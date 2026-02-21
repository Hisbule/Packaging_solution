import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Facebook, MessageCircle, ChevronDown, ArrowRight, Settings, Globe, ChevronUp, Phone, Mail, Youtube, Twitter } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { ASSETS } from '../config/assets';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0); 
  const [isScrolling, setIsScrolling] = useState(false);
  const location = useLocation();

  const darkHeaderPages = ['/', '/machinery', '/services'];
  const isDarkHeader = darkHeaderPages.includes(location.pathname);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollPercentage((scrollTop / docHeight) * 100);
      } else {
        setScrollPercentage(0);
      }

      setIsScrolling(true);
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1500);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navBaseClasses = "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out border-b";
  const navStateClasses = scrolled
    ? 'bg-white/95 backdrop-blur-md shadow-sm border-gray-100 py-4'
    : 'bg-transparent border-transparent py-6';

  const navClasses = `${navBaseClasses} ${navStateClasses}`;

  const textColorClass = scrolled || !isDarkHeader ? 'text-pms-navy' : 'text-white';
  const logoTextClass = scrolled || !isDarkHeader ? 'text-pms-navy' : 'text-white';
  const logoBgClass = scrolled || !isDarkHeader ? 'bg-pms-navy' : 'bg-white/10 backdrop-blur-sm';

  const linkClasses = (path: string) => `text-sm font-medium tracking-wide transition-colors ${
    location.pathname === path 
      ? 'text-pms-orange font-bold' 
      : `${textColorClass} hover:text-pms-orange`
  }`;

  const contactButtonClass = scrolled || !isDarkHeader
    ? 'bg-gray-100 text-pms-navy border-gray-200 hover:bg-white hover:border-gray-300'
    : 'bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/40 backdrop-blur-sm';

  const contactDotClass = scrolled || !isDarkHeader ? 'bg-black' : 'bg-pms-orange';
  const menuButtonClass = scrolled || !isDarkHeader 
    ? 'border-gray-200 text-pms-navy hover:bg-gray-100' 
    : 'border-white/20 text-white hover:bg-white/10';

  const fluidPadding = "px-4 md:px-8 lg:px-12 xl:px-16";

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden relative">
      
      {/* MODAL MENU OVERLAY */}
      <div 
        className={`fixed inset-0 z-[60] flex justify-center items-start pt-4 px-4 pb-4 transition-all duration-500 ${
          isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0 delay-[500ms]'
        }`}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500" onClick={toggleMenu}></div>
        <div className={`bg-white w-full max-w-[95%] xl:max-w-[1400px] rounded-[2rem] shadow-2xl relative flex flex-col overflow-hidden transition-[max-height] ${isMenuOpen ? 'max-h-[95vh] duration-[1500ms] ease-[cubic-bezier(0.19,1,0.22,1)]' : 'max-h-0 duration-[500ms] ease-out'}`}>
            
            <div className="flex justify-between items-center p-8 md:px-12 border-b border-gray-100">
                <div className="flex items-center gap-3">
                    {/* UPDATED MOBILE MENU LOGO */}
                    <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden shrink-0">
                      <img src={ASSETS.common.logo} alt="PMS Logo" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-2xl leading-none uppercase tracking-tight text-pms-navy">PMS</span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                     <div className="hidden md:flex items-center gap-1 text-sm font-bold cursor-pointer hover:text-pms-orange transition-colors text-pms-navy border border-gray-200 rounded-lg px-3 py-2">
                        <span>EN</span>
                        <ChevronDown size={14} />
                     </div>
                     <Link to="/contact" onClick={toggleMenu}>
                        <button className="hidden md:flex px-5 py-2 rounded-lg text-sm font-bold transition-all items-center gap-2 border border-gray-200 text-pms-navy hover:bg-gray-50 hover:border-gray-300">
                            <span className="bg-black rounded-full w-1.5 h-1.5"></span>
                            Contact us
                        </button>
                     </Link>
                     <button onClick={toggleMenu} className="p-2 rounded-lg border border-gray-200 text-pms-navy hover:bg-gray-50 transition-colors">
                        <X size={24} />
                     </button>
                </div>
            </div>

            <div className="flex-grow overflow-y-auto p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12">
                    <div>
                        <h3 className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-6">Company</h3>
                        <ul className="space-y-4">
                            <li><Link to="/" onClick={toggleMenu} className="text-lg font-medium text-pms-navy hover:text-pms-orange transition-colors block">Home</Link></li>
                            <li><Link to="/about" onClick={toggleMenu} className="text-lg font-medium text-pms-navy hover:text-pms-orange transition-colors block">About</Link></li>
                            <li><Link to="/machinery" onClick={toggleMenu} className="text-lg font-medium text-pms-navy hover:text-pms-orange transition-colors block">Machinery</Link></li>
                            <li><Link to="/services" onClick={toggleMenu} className="text-lg font-medium text-pms-navy hover:text-pms-orange transition-colors block">Services</Link></li>
                            <li><Link to="/parts" onClick={toggleMenu} className="text-lg font-medium text-pms-navy hover:text-pms-orange transition-colors block">Parts</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-6">Flexible (Poly)</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-base text-pms-navy mb-3">Printing Solutions</h4>
                                <ul className="space-y-2 list-disc pl-4 text-gray-600">
                                    <li><Link to="/machinery?cat=Printing" onClick={toggleMenu} className="hover:text-pms-orange transition-colors">Rotogravure (8-10 Color)</Link></li>
                                    <li><Link to="/machinery?cat=Printing" onClick={toggleMenu} className="hover:text-pms-orange transition-colors">Flexo (CI & Stack)</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-base text-pms-navy mb-3">Lamination & Coating</h4>
                                <ul className="space-y-2 list-disc pl-4 text-gray-600">
                                    <li><Link to="/machinery?cat=Lamination" onClick={toggleMenu} className="hover:text-pms-orange transition-colors">Solvent-Less Lamination</Link></li>
                                    <li><Link to="/machinery?cat=Lamination" onClick={toggleMenu} className="hover:text-pms-orange transition-colors">Dry Lamination</Link></li>
                                    <li><Link to="/machinery?cat=Lamination" onClick={toggleMenu} className="hover:text-pms-orange transition-colors">Extrusion Coating</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-base text-pms-navy mb-3">Film & Processing</h4>
                                <ul className="space-y-2 list-disc pl-4 text-gray-600">
                                    <li><Link to="/machinery?cat=Film Processing" onClick={toggleMenu} className="hover:text-pms-orange transition-colors">Blown Film Plant (3-Layer)</Link></li>
                                    <li><Link to="/machinery?cat=Film Processing" onClick={toggleMenu} className="hover:text-pms-orange transition-colors">Slitting Machine</Link></li>
                                    <li><Link to="/machinery?cat=Converting" onClick={toggleMenu} className="hover:text-pms-orange transition-colors">Bag Making Machine</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-6">Paper Sector</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-base text-pms-navy mb-3">Industrial Printing</h4>
                                <ul className="space-y-2 list-disc pl-4 text-gray-600">
                                    <li><Link to="/machinery?cat=Printing" onClick={toggleMenu} className="hover:text-pms-orange transition-colors">Rotogravure for Paper</Link></li>
                                    <li><Link to="/machinery?cat=Printing" onClick={toggleMenu} className="hover:text-pms-orange transition-colors">Offset Printing</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-base text-pms-navy mb-3">Processing & Cutting</h4>
                                <ul className="space-y-2 list-disc pl-4 text-gray-600">
                                    <li><Link to="/machinery?cat=Converting" onClick={toggleMenu} className="hover:text-pms-orange transition-colors">A4 Paper Cutting Line</Link></li>
                                    <li><Link to="/machinery?cat=Converting" onClick={toggleMenu} className="hover:text-pms-orange transition-colors">High-Speed Sheet Cutter</Link></li>
                                    <li><Link to="/machinery?cat=Converting" onClick={toggleMenu} className="hover:text-pms-orange transition-colors">Die Cutting Machine</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-base text-pms-navy mb-3">Finished Goods</h4>
                                <ul className="space-y-2 list-disc pl-4 text-gray-600">
                                    <li><Link to="/machinery?cat=Converting" onClick={toggleMenu} className="hover:text-pms-orange transition-colors">Paper Cup Machine</Link></li>
                                    <li><Link to="/machinery?cat=Converting" onClick={toggleMenu} className="hover:text-pms-orange transition-colors">Auto Box Making</Link></li>
                                    <li><Link to="/machinery?cat=Converting" onClick={toggleMenu} className="hover:text-pms-orange transition-colors">Carton Making Line</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-6">Engineering</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-base text-pms-navy mb-3">Our Services</h4>
                                <ul className="space-y-2 list-disc pl-4 text-gray-600">
                                    <li><Link to="/services" onClick={toggleMenu} className="hover:text-pms-orange transition-colors">Installation & Setup</Link></li>
                                    <li><Link to="/services" onClick={toggleMenu} className="hover:text-pms-orange transition-colors">Breakdown Repair (24/7)</Link></li>
                                    <li><Link to="/services" onClick={toggleMenu} className="hover:text-pms-orange transition-colors">Third-Party Maintenance</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-base text-pms-navy mb-3">Spare Parts Store</h4>
                                <ul className="space-y-2 list-disc pl-4 text-gray-600">
                                    <li><Link to="/parts" onClick={toggleMenu} className="hover:text-pms-orange transition-colors">Printing Cylinders</Link></li>
                                    <li><Link to="/parts" onClick={toggleMenu} className="hover:text-pms-orange transition-colors">Doctor Blades</Link></li>
                                    <li><Link to="/parts" onClick={toggleMenu} className="hover:text-pms-orange transition-colors">Motors & Drives</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-100 p-8 md:px-12 bg-white rounded-b-[2rem]">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <div className="flex flex-col gap-4">
                        <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Social</span>
                        <div className="flex gap-8 text-pms-navy font-bold text-sm">
                            <a href="#" className="hover:text-pms-orange transition-colors">LinkedIn</a>
                            <a href="#" className="hover:text-pms-orange transition-colors">Youtube</a>
                            <a href="#" className="hover:text-pms-orange transition-colors">Facebook</a>
                            <a href="#" className="hover:text-pms-orange transition-colors">X</a>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                        <div className="flex flex-col gap-1">
                            <span className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Email</span>
                            <a href={`mailto:${COMPANY_INFO.email}`} className="text-pms-navy font-medium text-lg hover:text-pms-orange">{COMPANY_INFO.email}</a>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Phone</span>
                            <a href={`tel:${COMPANY_INFO.phone}`} className="text-pms-navy font-medium text-lg hover:text-pms-orange">{COMPANY_INFO.phone}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* MAIN NAVIGATION BAR */}
      <nav className={navClasses}>
        <div className={`w-full ${fluidPadding}`}>
          <div className="flex justify-between items-center h-12">
            
            <div className="flex-shrink-0 flex items-center w-48 z-50">
              <Link to="/" className="flex items-center gap-3 group">
                {/* UPDATED DESKTOP NAVBAR LOGO */}
                <div className={`w-20 h-20 rounded-full flex items-center justify-center overflow-hidden shrink-0 transition-colors `}>
                   <img src={ASSETS.common.logo} alt="PMS Logo" className="w-full h-full object-contain p-0.5" />
                </div>
                <div className="flex flex-col">
                  <span className={`font-bold text-xl leading-none uppercase tracking-tight ${logoTextClass}`}>PMS</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-pms-orange">Solution</span>
                </div>
              </Link>
            </div>

            <div className="hidden lg:flex flex-1 justify-center items-center space-x-8 xl:space-x-10">
              <Link to="/" className={linkClasses('/')}>Home</Link>
              <Link to="/about" className={linkClasses('/about')}>About</Link>
              <Link to="/machinery" className={linkClasses('/machinery')}>Machinery</Link>
              <Link to="/services" className={linkClasses('/services')}>Services</Link>
              <Link to="/parts" className={linkClasses('/parts')}>Parts</Link>
            </div>

            <div className="flex items-center justify-end w-auto gap-4 z-50">
                <div className={`hidden md:flex items-center gap-1 text-sm font-bold cursor-pointer hover:text-pms-orange transition-colors ${textColorClass}`}>
                   <span>EN</span>
                   <ChevronDown size={14} />
                </div>
                <Link to="/contact">
                   <button className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 border shadow-sm ${contactButtonClass}`}>
                     <span className={`rounded-full w-1.5 h-1.5 ${contactDotClass}`}></span>
                     Contact us
                   </button>
                </Link>
                <button onClick={toggleMenu} className={`p-2 rounded-lg border transition-colors ${menuButtonClass}`}>
                   <Menu size={24} />
                </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
        <div className={`w-full ${fluidPadding}`}>
          <div className="flex flex-col xl:flex-row justify-between items-start gap-12 mb-16">
            <div className="max-w-md">
              <Link to="/" className="inline-block mb-8">
                <span className="text-3xl font-bold tracking-tighter text-white">PMS</span>
              </Link>
              <h3 className="text-2xl font-light leading-tight mb-6 text-gray-200">
                Experience Delivers <br/><span className="text-pms-orange font-bold">Solutions.</span>
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Packaging Machinery Solutions is a leading provider of flexible packaging machinery and expert engineering services, serving the industry with precision since 2002.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full xl:w-auto">
              <div>
                <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Explore</h4>
                <ul className="space-y-4 text-sm text-gray-400">
                  <li><Link to="/machinery" className="hover:text-white transition-colors">Machinery</Link></li>
                  <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                  <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link to="/parts" className="hover:text-white transition-colors">Spare Parts</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Connect</h4>
                <ul className="space-y-4 text-sm text-gray-400">
                  <li><a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">Email Us</a></li>
                  <li><a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} className="hover:text-white transition-colors">WhatsApp</a></li>
                  <li><Link to="/contact" className="hover:text-white transition-colors">Support Request</Link></li>
                </ul>
              </div>

              <div className="col-span-2 md:col-span-1">
                 <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Location</h4>
                 
                 <a 
                   href={COMPANY_INFO.mapLink} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-gray-400 text-sm mb-2 hover:text-pms-orange transition-colors block"
                 >
                    {COMPANY_INFO.address}
                 </a>
                 
                 <div className="mt-4 flex gap-4">
                    <Linkedin className="text-gray-400 hover:text-white cursor-pointer transition-colors" size={24} />
                    
                    <a href={COMPANY_INFO.facebook} target="_blank" rel="noopener noreferrer">
                      <Facebook className="text-gray-400 hover:text-[#1877F2] cursor-pointer transition-colors" size={24} />
                    </a>
                 </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-gray-600">
            <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Packaging Machinery Solutions. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="cursor-pointer hover:text-gray-400">Privacy Policy</span>
              <span className="cursor-pointer hover:text-gray-400">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      {!isMenuOpen && (
      <a 
        href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} fill="white" className="text-white" />
        <span className="hidden md:block absolute right-full mr-4 bg-white text-black px-3 py-1 rounded text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">Chat with Engineer</span>
      </a>
      )}

      {/* AUTO-HIDING, FLUSH-RIGHT ORANGE SCROLLBAR */}
      <div 
        className={`fixed top-1 right-0 bottom-1 w-1.5 z-[100] pointer-events-none hidden md:block transition-opacity duration-500 ease-in-out ${
          isScrolling ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="w-full h-full relative">
          <div 
            className="absolute right-0 w-full bg-pms-orange rounded-l-lg shadow-md transition-all duration-75 ease-out"
            style={{ 
              height: '15%', 
              top: `${scrollPercentage * 0.85}%` 
            }}
          />
        </div>
      </div>

    </div>
  );
};

export default Layout;