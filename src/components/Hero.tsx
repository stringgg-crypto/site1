import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-2]"
        style={{ 
          backgroundImage: "url('/assets/images/luxury-car.jpg')",
        }}
      ></div>
      <div className="hero-overlay z-[-1] bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
      <div className="absolute inset-0 z-[-1] bg-radial-vignette"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6 playfair"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="gold-gradient-text">Премиум</span> Детейлинг Автомобилей
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Поднимите внешний вид вашего автомобиля на новый уровень с нашими тщательными услугами детейлинга
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a 
            href="#contact" 
            className="cta-button bg-gold text-black px-8 py-3 rounded-md font-bold text-lg hover:bg-opacity-90 transition-all inline-block"
          >
            Записаться на Сервис
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        whileHover={{ scale: 1.2 }}
      >
        <a href="#services">
          <ChevronDown size={32} className="text-gold" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;