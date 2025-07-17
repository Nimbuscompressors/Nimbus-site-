import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Play, Phone, Mail } from 'lucide-react';

const ProductQuickActions = ({ product }) => {
  const { toast } = useToast();

  const handleFeatureNotImplemented = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 3000,
    });
  };

  return (
    <div className="space-y-4">
      <div className="bg-slate-700/50 rounded-lg p-4">
        <h4 className="text-white font-semibold mb-3">Quick Actions</h4>
        <div className="space-y-2">
          <Button 
            onClick={handleFeatureNotImplemented}
            className="w-full bg-green-600 hover:bg-green-700 text-sm"
          >
            <Play className="mr-2 h-4 w-4" />
            Watch Demo Video
          </Button>
          <Button 
            onClick={handleFeatureNotImplemented}
            variant="outline" 
            className="w-full border-slate-600 text-white hover:bg-slate-700 text-sm"
          >
            <Phone className="mr-2 h-4 w-4" />
            Request Quote
          </Button>
          <Button 
            onClick={handleFeatureNotImplemented}
            variant="outline" 
            className="w-full border-slate-600 text-white hover:bg-slate-700 text-sm"
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Expert
          </Button>
        </div>
      </div>

      {product.price && (
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg p-4 border border-blue-500/30">
          <h4 className="text-white font-semibold mb-2">Starting Price</h4>
          <div className="text-3xl font-bold text-blue-400">{product.price}</div>
          <p className="text-gray-300 text-sm mt-1">*Price may vary based on configuration</p>
        </div>
      )}
    </div>
  );
};

export default ProductQuickActions;
