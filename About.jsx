
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ChevronRight } from 'lucide-react';

const About = () => {
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
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              30 Years of <span className="text-blue-400">Innovation</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Since 1994, Nimbus Compressors has been at the forefront of air compression technology.
              Our commitment to innovation, quality, and customer satisfaction has made us a trusted
              partner for industries worldwide.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">5000+</div>
                <div className="text-gray-300">Installations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-gray-300">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">99.5%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
            </div>

            <Button
              onClick={handleFeatureNotImplemented}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
            >
              Our Story <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <img 
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              alt="Team of engineers collaborating in a modern office"
             src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
