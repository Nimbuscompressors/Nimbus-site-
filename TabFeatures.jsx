import React from 'react';
import { Star, Award } from 'lucide-react';

const TabFeatures = ({ product }) => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-2xl font-bold text-white mb-6">Features & Benefits</h3>
      
      <div className="grid gap-6">
        {product.features.map((feature, index) => (
          <div key={index} className="bg-slate-700/30 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <Star className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-2">{feature}</h4>
                <p className="text-gray-300 leading-relaxed">
                  This advanced feature ensures optimal performance and reliability in demanding industrial environments. 
                  Engineered with precision and tested under extreme conditions to deliver consistent results.
                </p>
                <div className="mt-4 flex items-center text-sm text-blue-400">
                  <Award className="h-4 w-4 mr-1" />
                  Industry-leading technology
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabFeatures;
