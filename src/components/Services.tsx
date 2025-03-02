import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, SprayCan as Spray, Car, Shield, Sparkles, Brush } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, icon, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="service-card rounded-lg p-6 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{ y: -10 }}
    >
      <motion.div 
        className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <motion.div 
          className="service-icon text-gold"
          animate={{ rotate: inView ? 360 : 0 }}
          transition={{ duration: 2, delay: delay + 0.3 }}
        >
          {icon}
        </motion.div>
      </motion.div>
      <h3 className="text-xl font-semibold mb-3 playfair">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: "Внешний Детейлинг",
      description: "Полная очистка, полировка и защита экстерьера для восстановления выставочного блеска вашего автомобиля.",
      icon: <Car size={32} />,
      delay: 0.1,
    },
    {
      title: "Внутренний Детейлинг",
      description: "Глубокая очистка всех внутренних поверхностей, включая кондиционирование кожи и защиту тканей.",
      icon: <Brush size={32} />,
      delay: 0.2,
    },
    {
      title: "Коррекция Краски",
      description: "Профессиональное удаление завихрений, царапин и дефектов для безупречного финиша.",
      icon: <Sparkles size={32} />,
      delay: 0.3,
    },
    {
      title: "Керамическое Покрытие",
      description: "Долговременная защита с передовой керамической технологией для непревзойденного блеска и прочности.",
      icon: <Shield size={32} />,
      delay: 0.4,
    },
    {
      title: "Защитная Пленка",
      description: "Невидимый щит, защищающий краску вашего автомобиля от сколов, царапин и повреждений окружающей среды.",
      icon: <Spray size={32} />,
      delay: 0.5,
    },
    {
      title: "Регулярная Мойка",
      description: "Регулярное обслуживание для поддержания безупречного вида вашего автомобиля между полными сеансами детейлинга.",
      icon: <Droplets size={32} />,
      delay: 0.6,
    },
  ];

  return (
    <section id="services" className="py-20 bg-darkBg">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-title inline-block">Наши Премиум Услуги</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-8">
            Мы предлагаем полный спектр услуг детейлинга, чтобы ваш автомобиль выглядел безупречно.
            Каждая услуга выполняется с тщательным вниманием к деталям нашими опытными техниками.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;