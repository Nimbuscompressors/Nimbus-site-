
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Eye, Download, Zap, Shield, Award, Star } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';
import { reciprocatingCompressors, airDryers, airFilters, spareParts } from '@/data/products';

const Products = ({ onViewDetails, onDownloadSpec, onOpenCatalog }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const featuredCompressors = [
    reciprocatingCompressors.find(p => p.power === '1 HP'),
    reciprocatingCompressors.find(p => p.power === '7.5 HP'),
    reciprocatingCompressors.find(p => p.power === '25 HP'),
  ].filter(Boolean);

  const featuredDryers = [
    airDryers.find(p => p.capacity === '20 CFM'),
    airDryers.find(p => p.capacity === '500 CFM'),
    airDryers.find(p => p.capacity === '4000 CFM'),
  ].filter(Boolean);

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-blue-400">Product Range</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive air compression solutions engineered for reliability, efficiency, and performance across all industrial applications.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              onClick={onOpenCatalog}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
            >
              <Eye className="mr-2 h-4 w-4" />
              View Complete Catalog
            </Button>
            <Button
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF Catalog
            </Button>
          </div>
        </motion.div>

        <div className="space-y-20">
          <motion.div {...fadeInUp}>
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center">
                <Zap className="h-8 w-8 text-blue-400 mr-4" />
                <div>
                  <h3 className="text-3xl font-bold text-white">Reciprocating Compressors</h3>
                  <p className="text-gray-300 mt-2">High-performance reciprocating compressors for demanding industrial applications</p>
                </div>
              </div>
              <div className="text-blue-400 font-semibold">1-25 HP Range</div>
            </div>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {featuredCompressors.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  category="reciprocating compressor"
                  onViewDetails={onViewDetails}
                  onDownloadSpec={onDownloadSpec}
                  fadeInUp={fadeInUp}
                />
              ))}
            </motion.div>
          </motion.div>

          <motion.div {...fadeInUp}>
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center">
                <Shield className="h-8 w-8 text-blue-400 mr-4" />
                <div>
                  <h3 className="text-3xl font-bold text-white">Air Dryers</h3>
                  <p className="text-gray-300 mt-2">Advanced air drying solutions for moisture-free compressed air systems</p>
                </div>
              </div>
              <div className="text-blue-400 font-semibold">20-4000 CFM</div>
            </div>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {featuredDryers.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  category="air dryer"
                  onViewDetails={onViewDetails}
                  onDownloadSpec={onDownloadSpec}
                  fadeInUp={fadeInUp}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;
