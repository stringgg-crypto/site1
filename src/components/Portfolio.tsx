import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface PortfolioItemProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  index: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ beforeImage, afterImage, title, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="portfolio-item rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64 md:h-80">
        <img
          src={beforeImage}
          alt={`${title} До`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: isHovered ? 0 : 1 }}
        />
        <img
          src={afterImage}
          alt={`${title} После`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: isHovered ? 1 : 0 }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="text-center p-4">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <div className="mt-2 flex justify-center space-x-2">
              <span className="text-sm bg-gold text-black px-2 py-1 rounded">До</span>
              <span className="text-sm bg-white text-black px-2 py-1 rounded">После</span>
            </div>
            <p className="text-sm text-white mt-2">Наведите для просмотра трансформации</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const portfolioItems = [
    {
      beforeImage: "/assets/images/portfolio/before1.jpg",
      afterImage: "/assets/images/portfolio/after1.jpg",
      title: "Детейлинг Люкс Седана",
    },
    {
      beforeImage: "/assets/images/portfolio/before2.jpg",
      afterImage: "/assets/images/portfolio/after2.jpg",
      title: "Восстановление Спорткара",
    },
    {
      beforeImage: "/assets/images/portfolio/before3.jpg",
      afterImage: "/assets/images/portfolio/after3.jpg",
      title: "Трансформация Внедорожника",
    },
    {
      beforeImage: "/assets/images/portfolio/before4.jpg",
      afterImage: "/assets/images/portfolio/after4.jpg",
      title: "Возрождение Классики",
    },
    {
      beforeImage: "/assets/images/portfolio/before5.jpg",
      afterImage: "/assets/images/portfolio/after5.jpg",
      title: "Детейлинг Экзотики",
    },
    {
      beforeImage: "/assets/images/portfolio/before6.jpg",
      afterImage: "/assets/images/portfolio/after6.jpg",
      title: "Детейлинг Мотоцикла",
    },
  ];

  // Fallback to external URLs if local images aren't available yet
  const getImageUrl = (path: string, fallback: string) => {
    // In a production environment, you would implement proper image existence checking
    // For now, we'll use the fallback URLs to demonstrate the concept
    return fallback;
  };

  return (
    <section id="portfolio" className="py-20 bg-darkCard">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-title inline-block">Наше Портфолио</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-8">
            Просмотрите нашу галерею трансформаций. Каждый проект демонстрирует наше стремление к совершенству
            и внимание к деталям. Наведите курсор на изображения, чтобы увидеть результаты до и после.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioItem
              key={index}
              beforeImage={getImageUrl(
                item.beforeImage,
                ["https://images.unsplash.com/photo-1605515298946-d664fc1a8d7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                 "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                 "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                 "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                 "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                 "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"][index]
              )}
              afterImage={getImageUrl(
                item.afterImage,
                ["https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                 "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                 "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                 "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                 "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                 "https://images.unsplash.com/photo-1549399542-7e8f2e928464?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"][index]
              )}
              title={item.title}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;