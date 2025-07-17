import React from 'react';
import { Shield, Zap, Star } from 'lucide-react';

const TabOverview = ({ product }) => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div>
        <h3 className="text-2xl font-bold text-white mb-4">Product Overview</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          The {product.title} represents the pinnacle of Nimbus Compressors' engineering excellence. 
          Designed for demanding industrial applications, this compressor delivers unmatched reliability, 
          efficiency, and performance. Built with premium materials and advanced technology, it ensures 
          years of trouble-free operation while minimizing energy consumption and maintenance costs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-700/30 rounded-lg p-6">
          <h4 className="text-xl font-bold text-white mb-4 flex items-center">
            <Shield className="mr-2 h-5 w-5 text-blue-400" />
            Reliability & Durability
          </h4>
          <ul className="space-y-2 text-gray-300">
            <li>• Cast iron construction for maximum durability</li>
            <li>• Precision-engineered components</li>
            <li>• Rigorous quality testing standards</li>
            <li>• Extended warranty coverage</li>
          </ul>
        </div>

        <div className="bg-slate-700/30 rounded-lg p-6">
          <h4 className="text-xl font-bold text-white mb-4 flex items-center">
            <Zap className="mr-2 h-5 w-5 text-blue-400" />
            Performance & Efficiency
          </h4>
          <ul className="space-y-2 text-gray-300">
            <li>• High-efficiency motor design</li>
            <li>• Optimized compression ratios</li>
            <li>• Advanced cooling systems</li>
            <li>• Energy-saving operation modes</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-lg p-6 border border-blue-500/20">
        <h4 className="text-xl font-bold text-white mb-4">Key Highlights</h4>
        <div className="grid md:grid-cols-3 gap-4">
          {product.features.slice(0, 6).map((feature, index) => (
            <div key={index} className="flex items-center text-gray-300">
              <Star className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabOverview;
