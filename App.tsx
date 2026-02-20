import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Machinery from './pages/Machinery';
import Services from './pages/Services';
import About from './pages/About';
import SmartContactForm from './components/SmartContactForm';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Common fluid padding - Reduced for better full-width feel
const fluidPadding = "px-4 md:px-8 lg:px-16 xl:px-20";

// Simple wrapper for Contact page to reuse SmartContactForm
const ContactPage = () => (
  <div className="bg-gray-50 min-h-screen py-16 pt-32">
    <div className={`w-full ${fluidPadding}`}>
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-pms-navy mb-4">Contact PMS</h1>
        <p className="text-gray-600 text-xl max-w-2xl mx-auto">Whether sales or service, our team is ready to assist you immediately.</p>
      </div>
      <div className="max-w-4xl mx-auto">
         <SmartContactForm />
      </div>
    </div>
  </div>
);

// Placeholder for Spare Parts (reusing Machinery logic or simple page)
const PartsPage = () => (
    <div className="bg-white min-h-screen py-24 pt-40">
        <div className={`w-full ${fluidPadding} text-center`}>
            <h1 className="text-6xl font-bold text-pms-navy mb-8">Spare Parts Inventory</h1>
            <p className="text-2xl text-gray-600 mb-20 font-light max-w-3xl mx-auto">Original and OEM compatible parts for all major brands. Minimize your downtime.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {['Printing Cylinders', 'Doctor Blades', 'Rubber Rollers', 'Servo Motors', 'Tension Controllers', 'Electronic Cards'].map((item, idx) => (
                    <div key={idx} className="p-12 border border-gray-100 rounded-[2.5rem] hover:shadow-2xl transition-all group bg-gray-50 hover:bg-white hover:-translate-y-2 duration-300">
                        <h3 className="font-bold text-3xl text-pms-navy group-hover:text-pms-orange transition-colors mb-4">{item}</h3>
                        <p className="text-gray-500 text-lg">Available in stock or quick order.</p>
                    </div>
                ))}
            </div>
            <div className="mt-24">
                <a href="#/contact" className="bg-pms-orange text-white px-12 py-5 rounded-full font-bold shadow-lg hover:bg-pms-navy transition-colors text-xl">Inquire About Parts</a>
            </div>
        </div>
    </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/machinery" element={<Machinery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/parts" element={<PartsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;