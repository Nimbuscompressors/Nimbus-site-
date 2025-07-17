import React from 'react';
import { Button } from '@/components/ui/button';
import { Award, Phone } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const TabApplications = ({ product }) => {
  const { toast } = useToast();

  const handleFeatureNotImplemented = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 3000,
    });
  };

  const industrySectors = [
    'Manufacturing & Production',
    'Automotive Industry',
    'Food & Beverage',
    'Pharmaceutical',
    'Textile & Garment',
    'Electronics & Semiconductors',
    'Construction',
    'Aerospace'
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-2xl font-bold text-white mb-6">Applications & Industries</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-700/30 rounded-lg p-6">
          <h4 className="text-xl font-bold text-white mb-4">Primary Applications</h4>
          <div className="space-y-3">
            {product.applications && product.applications.map((app, index) => (
              <div key={index} className="flex items-center text-gray-300">
                <Award className="h-4 w-4 text-blue-400 mr-3 flex-shrink-0" />
                {app}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-700/30 rounded-lg p-6">
          <h4 className="text-xl font-bold text-white mb-4">Industry Sectors</h4>
          <div className="space-y-3">
            {industrySectors.map((sector, index) => (
              <div key={index} className="flex items-center text-gray-300">
                <Award className="h-4 w-4 text-blue-400 mr-3 flex-shrink-0" />
                {sector}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-lg p-6 border border-blue-500/20">
        <h4 className="text-xl font-bold text-white mb-4">Application Engineering Support</h4>
        <p className="text-gray-300 mb-4">
          Our application engineers work closely with customers to ensure optimal compressor selection and configuration 
          for specific industrial requirements. We provide comprehensive system design support and performance optimization.
        </p>
        <Button 
          onClick={handleFeatureNotImplemented}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <Phone className="mr-2 h-4 w-4" />
          Consult Application Engineer
        </Button>
      </div>
    </div>
  );
};

export default TabApplications;
