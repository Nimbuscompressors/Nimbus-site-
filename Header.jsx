
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = ({ onGetQuote, onOpenCatalog }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { 
      name: 'Products', 
      href: '#products',
      dropdown: [
        { name: 'Reciprocating Compressors', href: '#products' },
        { name: 'Air Dryers', href: '#products' },
        { name: 'Air Filters', href: '#products' },
        { name: 'Spare Parts', href: '#products' },
      ]
    },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleDropdownClick = (e, item) => {
    if (item.name === 'Products') {
      e.preventDefault();
      onOpenCatalog();
      setActiveDropdown(null);
    }
  };

  const handleMobileLinkClick = (href) => {
    setIsOpen(false);
    if (href === '#catalog') {
      onOpenCatalog();
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo />
          
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a 
                  href={item.href} 
                  onClick={(e) => item.dropdown && handleDropdownClick(e, item)}
                  className="flex items-center text-white hover:text-blue-400 transition-colors font-medium"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </a>
                
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-slate-800/95 backdrop-blur-lg border border-slate-700 rounded-xl shadow-2xl overflow-hidden"
                    >
                      {item.dropdown.map((dropItem) => (
                        <a
                          key={dropItem.name}
                          href={dropItem.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-blue-600/30 transition-colors"
                        >
                          {dropItem.name}
                        </a>
                      ))}
                       <a
                          href="#"
                          onClick={(e) => { e.preventDefault(); onOpenCatalog(); setActiveDropdown(null); }}
                          className="block px-6 py-3 font-bold text-blue-400 hover:text-white hover:bg-blue-600/50 transition-colors"
                        >
                          View Full Catalog
                        </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              onClick={onGetQuote}
              className="hidden sm:inline-flex bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold"
            >
              Get Quote
            </Button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Open menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-700"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <a 
                    href={item.href} 
                    className="block text-white hover:text-blue-400 transition-colors font-medium py-2"
                    onClick={() => handleMobileLinkClick(item.href)}
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 space-y-2 mt-2 border-l-2 border-slate-700 pl-4">
                      {item.dropdown.map((dropItem) => (
                        <a
                          key={dropItem.name}
                          href={dropItem.href}
                          className="block text-gray-400 hover:text-white transition-colors py-1"
                          onClick={() => handleMobileLinkClick(dropItem.href)}
                        >
                          {dropItem.name}
                        </a>
                      ))}
                       <a
                          href="#"
                          onClick={(e) => { e.preventDefault(); handleMobileLinkClick('#catalog'); }}
                          className="block font-semibold text-blue-400 hover:text-white transition-colors py-1"
                        >
                          View Full Catalog
                        </a>
                    </div>
                  )}
                </div>
              ))}
              <Button onClick={onGetQuote} className="w-full mt-4 bg-gradient-to-r from-blue-600 to-cyan-600">Get Quote</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
