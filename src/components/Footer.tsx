import React from 'react';
import { ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-gold">ART</span> DETAILING
            </h3>
            <p className="text-gray-400 mb-6">
              Premium car detailing services that transform your vehicle into a work of art. We specialize in high-end detailing for luxury and exotic vehicles.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-gold transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-gold transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-400 hover:text-gold transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-gold transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Exterior Detailing
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Interior Detailing
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Paint Correction
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Ceramic Coating
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Paint Protection Film
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates, promotions, and detailing tips.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gold text-white w-full"
                />
                <button
                  type="submit"
                  className="bg-gold text-black px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
            </form>
            <p className="text-gray-400 text-sm">
              We respect your privacy. Your information will never be shared with third parties.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Art Detailing Service. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;