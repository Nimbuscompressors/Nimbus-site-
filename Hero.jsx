
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const { toast } = useToast();

  const handleFeatureNotImplemented = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 3000,
    });
  };
  
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
      <img 
        className="absolute inset-0 w-full h-full object-cover"
        alt="Modern industrial air compressor facility with advanced equipment"
       src="https://images.unsplash.com/photo-1578459245460-a43770ff661f" />
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.h1
            {...fadeInUp}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Powering Industry with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Precision Air</span>
          </motion.h1>
          
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 mb-8 leading-relaxed"
          >
            Nimbus Compressors delivers cutting-edge industrial air compression solutions.
            From reciprocating compressors to air dryers and filters - built for reliability, engineered for efficiency.
          </motion.p>
          
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              onClick={handleFeatureNotImplemented}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg"
            >
              Explore Products <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={handleFeatureNotImplemented}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
            >
              Download Catalog
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
