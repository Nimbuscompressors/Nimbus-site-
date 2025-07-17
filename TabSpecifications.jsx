import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const TabSpecifications = ({ product, onDownloadSpec }) => {
  const additionalData = {
    'Noise Level': '≤ 75 dB(A)',
    'Ambient Temperature': '-10°C to +40°C',
    'Humidity': '≤ 95% RH',
    'Vibration Level': '≤ 0.5 mm/s',
    'Protection Class': 'IP54',
    'Certification': 'CE, UL, CSA'
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-2xl font-bold text-white mb-6">Technical Specifications</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-700/30 rounded-lg p-6">
          <h4 className="text-xl font-bold text-white mb-4">Performance Specifications</h4>
          <div className="space-y-3">
            {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center py-2 border-b border-slate-600/30">
                <span className="text-gray-300 font-medium capitalize">{key.replace(/_/g, ' ')}</span>
                <span className="text-white font-semibold">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-700/30 rounded-lg p-6">
          <h4 className="text-xl font-bold text-white mb-4">Additional Technical Data</h4>
          <div className="space-y-3">
            {Object.entries(additionalData).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center py-2 border-b border-slate-600/30">
                <span className="text-gray-300 font-medium">{key}</span>
                <span className="text-white font-semibold">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-lg p-6 border border-blue-500/20">
        <h4 className="text-xl font-bold text-white mb-4">Performance Curves & Data</h4>
        <p className="text-gray-300 mb-4">
          Detailed performance curves, efficiency charts, and operational data are available in our comprehensive technical documentation.
        </p>
        <Button 
          onClick={() => onDownloadSpec(product)}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <Download className="mr-2 h-4 w-4" />
          Download Complete Technical Package
        </Button>
      </div>
    </div>
  );
};

export default TabSpecifications;
