import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-darkBg text-white py-2 border-b border-gray-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <div className="flex items-center">
              <Phone size={16} className="text-gold mr-2" />
              <span className="text-sm">+7 (495) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="text-gold mr-2" />
              <span className="text-sm">Пн-Сб: 8:00 - 19:00</span>
            </div>
          </div>
          <div className="flex items-center">
            <MapPin size={16} className="text-gold mr-2" />
            <span className="text-sm">Москва, ул. Автомобильная, 123</span>
          </div>
        </div>
      </div>
      <motion.nav 
        className={`navbar fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a href="#" className="text-2xl font-bold text-white">
                <span className="text-gold">ART</span> DETAILING
              </a>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['Главная', 'Услуги', 'Портфолио', 'Отзывы', 'Контакты'].map((item, index) => (
                <motion.a 
                  key={index}
                  href={`#${['home', 'services', 'portfolio', 'reviews', 'contact'][index]}`}
                  className="text-white hover:text-gold transition-colors"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -3 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
            <motion.div 
              className="hidden md:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <a href="#contact" className="bg-gold text-black px-6 py-2 rounded-md font-semibold hover:bg-opacity-80 transition-all">
                Записаться
              </a>
            </motion.div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden bg-darkCard absolute top-full left-0 w-full border-t border-gray-800"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col space-y-4">
                  {['Главная', 'Услуги', 'Портфолио', 'Отзывы', 'Контакты'].map((item, index) => (
                    <motion.a 
                      key={index}
                      href={`#${['home', 'services', 'portfolio', 'reviews', 'contact'][index]}`}
                      className="text-white hover:text-gold transition-colors"
                      onClick={toggleMenu}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      {item}
                    </motion.a>
                  ))}
                  <motion.a 
                    href="#contact" 
                    className="bg-gold text-black px-6 py-2 rounded-md font-semibold hover:bg-opacity-80 transition-all text-center"
                    onClick={toggleMenu}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    Записаться
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;