import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X, Download } from 'lucide-react';
import ProductImageGallery from './detail-modal/ProductImageGallery';
import ProductQuickActions from './detail-modal/ProductQuickActions';
import ProductTabs from './detail-modal/ProductTabs';
import TabOverview from './detail-modal/TabOverview';
import TabSpecifications from './detail-modal/TabSpecifications';
import TabFeatures from './detail-modal/TabFeatures';
import TabApplications from './detail-modal/TabApplications';
import TabDocumentation from './detail-modal/TabDocumentation';

const ProductDetailModal = ({ product, onClose, onDownloadSpec }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'specifications':
        return <TabSpecifications product={product} onDownloadSpec={onDownloadSpec} />;
      case 'features':
        return <TabFeatures product={product} />;
      case 'applications':
        return <TabApplications product={product} />;
      case 'documentation':
        return <TabDocumentation product={product} onDownloadSpec={onDownloadSpec} />;
      case 'overview':
      default:
        return <TabOverview product={product} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl max-w-7xl w-full max-h-[95vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-700 flex-shrink-0">
          <div>
            <h2 className="text-3xl font-bold text-white">{product.title}</h2>
            <p className="text-blue-400 font-semibold">{product.model}</p>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={() => onDownloadSpec(product)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Specs
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
              size="icon"
              className="border-slate-600 text-gray-300 hover:bg-slate-700"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex flex-grow overflow-hidden">
          <div className="w-1/3 p-6 border-r border-slate-700 overflow-y-auto">
            <ProductImageGallery product={product} />
            <ProductQuickActions product={product} />
          </div>

          <div className="flex-1 flex flex-col overflow-hidden">
            <ProductTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="flex-1 overflow-y-auto p-6">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductDetailModal;
