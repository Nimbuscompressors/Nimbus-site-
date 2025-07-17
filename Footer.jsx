
import React from 'react';
import Logo from '@/components/common/Logo';

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-400 mb-4">
              Leading manufacturer of industrial air compression solutions worldwide.
            </p>
          </div>
          
          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Products</span>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#products" className="hover:text-blue-400 transition-colors">Reciprocating</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition-colors">Rotary Screw</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition-colors">Air Dryers & Filters</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition-colors">Spare Parts</a></li>
            </ul>
          </div>
          
          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Services</span>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Installation</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Maintenance</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Support</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Training</a></li>
            </ul>
          </div>
          
          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Company</span>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">News</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Nimbus Compressors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
