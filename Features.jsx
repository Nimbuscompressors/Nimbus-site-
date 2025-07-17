
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Settings, Award } from 'lucide-react';

const Features = () => {
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

  const features = [
    {
      icon: Zap,
      title: "High Efficiency",
      description: "Advanced technology delivers up to 30% energy savings compared to traditional compressors."
    },
    {
      icon: Shield,
      title: "Built to Last",
      description: "Industrial-grade components ensure decades of reliable operation in harsh environments."
    },
    {
      icon: Settings,
      title: "Smart Controls",
      description: "Intelligent monitoring systems optimize performance and predict maintenance needs."
    },
    {
      icon: Award,
      title: "Industry Leading",
      description: "Trusted by Fortune 500 companies and recognized for excellence in engineering."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-blue-400">Nimbus?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Three decades of innovation in air compression technology, delivering unmatched performance and reliability.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
