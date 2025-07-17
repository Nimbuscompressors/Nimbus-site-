
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
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
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-800 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss your air compression needs? Our experts are here to help you find the perfect solution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            {...fadeInUp}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
                <p className="text-gray-300">Mon-Fri 8AM-6PM EST</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-gray-300">sales@nimbuscompressors.com</p>
                <p className="text-gray-300">support@nimbuscompressors.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300">1234 Industrial Blvd</p>
                <p className="text-gray-300">Manufacturing City, MC 12345</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Request a Quote</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
              />
              <textarea
                rows="4"
                placeholder="Tell us about your air compression needs..."
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none resize-none"
              ></textarea>
              <Button
                onClick={handleFeatureNotImplemented}
                type="button"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 py-3"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
