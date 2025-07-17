
import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Clock, Settings, Users } from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      icon: Wrench,
      title: "Installation & Setup",
      description: "Professional installation and commissioning by certified technicians."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical support and emergency service response."
    },
    {
      icon: Settings,
      title: "Preventive Maintenance",
      description: "Scheduled maintenance programs to maximize uptime and efficiency."
    },
    {
      icon: Users,
      title: "Training Programs",
      description: "Comprehensive operator training and certification programs."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Complete <span className="text-blue-400">Service Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Beyond manufacturing, we provide comprehensive support throughout your compressor's lifecycle.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
