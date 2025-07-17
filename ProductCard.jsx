import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star, Download, Eye } from 'lucide-react';

const ProductCard = ({ product, category, onViewDetails, onDownloadSpec, fadeInUp }) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-600/30 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group flex flex-col"
    >
      <div className="relative overflow-hidden">
        <img  
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          alt={`${product.title} - Nimbus Compressors branded ${category} with professional industrial design`}
         src="https://images.unsplash.com/photo-1696457848608-2bec59080f62" />
        
        <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-bold">
          NIMBUS
        </div>
        
        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
          {product.power || product.capacity}
        </div>
        
        <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
          {product.category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
        <p className="text-blue-400 text-sm mb-4 font-semibold">{product.model}</p>
        
        <div className="space-y-3 mb-6">
          {product.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-center text-gray-300 text-sm">
              <Star className="h-3 w-3 text-blue-400 mr-2 flex-shrink-0" />
              {feature}
            </div>
          ))}
        </div>

        {product.specifications && (
          <div className="bg-slate-700/30 rounded-lg p-4 mb-6">
            <h4 className="text-white font-semibold mb-2 text-sm">Key Specifications</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {Object.entries(product.specifications).slice(0, 4).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-gray-400">{key}:</span>
                  <span className="text-white font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {product.price && (
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg p-3 mb-6 border border-blue-500/30">
            <div className="text-center">
              <span className="text-gray-300 text-sm">Starting at</span>
              <div className="text-2xl font-bold text-blue-400">{product.price}</div>
            </div>
          </div>
        )}
        
        <div className="flex gap-2 mt-auto">
          <Button 
            onClick={() => onViewDetails(product)}
            className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-sm"
          >
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </Button>
          <Button 
            onClick={() => onDownloadSpec(product)}
            variant="outline"
            className="border-slate-600 text-white hover:bg-slate-700 text-sm"
          >
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
