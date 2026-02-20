import React, { useState } from 'react';
import { InquiryType } from '../types';
import { Send, Wrench, ShoppingBag, CircleHelp } from 'lucide-react';

const SmartContactForm: React.FC = () => {
  const [inquiryType, setInquiryType] = useState<InquiryType>('quote');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    machineModel: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form Submitted", { inquiryType, ...formData });
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center animate-fade-in">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
          <Send className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Inquiry Received</h3>
        <p className="text-gray-600">
          Thank you for contacting PMS. Our engineering team has received your {inquiryType} request and will respond within 24 hours.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="mt-6 text-pms-navy font-semibold underline hover:text-pms-orange"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-t-4 border-pms-orange">
      <div className="p-8">
        <h3 className="text-2xl font-bold text-pms-navy mb-6">How can we help you?</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <button
            type="button"
            onClick={() => setInquiryType('quote')}
            className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all ${inquiryType === 'quote' ? 'border-pms-orange bg-orange-50 text-pms-orange' : 'border-gray-200 hover:border-gray-300 text-gray-500'}`}
          >
            <ShoppingBag className="mb-2" />
            <span className="font-bold">Get a Quote</span>
          </button>
          
          <button
            type="button"
            onClick={() => setInquiryType('service')}
            className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all ${inquiryType === 'service' ? 'border-pms-orange bg-orange-50 text-pms-orange' : 'border-gray-200 hover:border-gray-300 text-gray-500'}`}
          >
            <Wrench className="mb-2" />
            <span className="font-bold">Request Service</span>
          </button>
          
          <button
            type="button"
            onClick={() => setInquiryType('parts')}
            className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all ${inquiryType === 'parts' ? 'border-pms-orange bg-orange-50 text-pms-orange' : 'border-gray-200 hover:border-gray-300 text-gray-500'}`}
          >
            <CircleHelp className="mb-2" />
            <span className="font-bold">Spare Parts</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input 
                required 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pms-orange focus:border-pms-orange" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
              <input 
                required 
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pms-orange focus:border-pms-orange" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
              <input 
                required 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                type="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pms-orange focus:border-pms-orange" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <input 
                required 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                type="tel" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pms-orange focus:border-pms-orange" 
              />
            </div>
          </div>

          {/* Conditional Field for Service */}
          {inquiryType === 'service' && (
            <div className="bg-red-50 p-4 rounded-md border border-red-100 animate-fade-in">
              <label className="block text-sm font-bold text-red-800 mb-1">Machine Brand/Model (Important for rapid diagnosis)</label>
              <input 
                name="machineModel"
                value={formData.machineModel}
                onChange={handleInputChange}
                type="text" 
                placeholder="e.g., Rotomec 4000, Uteco Onyx, or 'Unknown'"
                className="w-full px-4 py-2 border border-red-200 rounded-md focus:ring-red-500 focus:border-red-500" 
              />
              <p className="text-xs text-red-600 mt-1">We service ALL brands, not just machines we sell.</p>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {inquiryType === 'quote' ? 'Machine Requirements / Specifications' : inquiryType === 'service' ? 'Describe the issue' : 'Part Name / Number'} *
            </label>
            <textarea 
              required
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4} 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pms-orange focus:border-pms-orange"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-pms-navy hover:bg-pms-blue text-white font-bold py-4 rounded-md transition-colors shadow-lg flex justify-center items-center gap-2"
          >
            <Send size={20} />
            {inquiryType === 'quote' ? 'Request Price Quote' : inquiryType === 'service' ? 'Request Technician' : 'Check Part Availability'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SmartContactForm;