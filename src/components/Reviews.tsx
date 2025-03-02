import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Star } from 'lucide-react';

interface ReviewProps {
  name: string;
  car: string;
  image: string;
  text: string;
  rating: number;
}

const ReviewCard: React.FC<ReviewProps> = ({ name, car, image, text, rating }) => {
  return (
    <div className="bg-darkCard p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-6 review-card">
      <div className="md:w-1/3">
        <img src={image} alt={car} className="w-full h-48 object-cover rounded-lg" />
        <div className="mt-4 flex justify-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className={i < rating ? "text-gold fill-gold" : "text-gray-400"}
            />
          ))}
        </div>
      </div>
      <div className="md:w-2/3">
        <div className="mb-4">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-gold">{car}</p>
        </div>
        <p className="text-gray-300 italic">"{text}"</p>
      </div>
    </div>
  );
};

const Reviews: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reviews = [
    {
      name: "Михаил Томпсон",
      car: "BMW M4 Competition",
      image: "/assets/images/reviews/review1.jpg",
      text: "Услуга керамического покрытия, которую я получил, была исключительной. Мой BMW выглядит лучше, чем когда я его впервые купил. Внимание к деталям потрясающее, а команда была профессиональной на протяжении всего процесса.",
      rating: 5,
      fallbackImage: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Сара Джонсон",
      car: "Mercedes-Benz S-Class",
      image: "/assets/images/reviews/review2.jpg",
      text: "Я пробовала несколько услуг детейлинга в прошлом, но Art Detailing находится в своей собственной лиге. Внутренний детейлинг вернул мой 5-летний Mercedes в состояние выставочного зала. Очень рекомендую!",
      rating: 5,
      fallbackImage: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Давид Родригес",
      car: "Porsche 911 Turbo S",
      image: "/assets/images/reviews/review3.jpg",
      text: "Услуга коррекции краски полностью преобразила мой Porsche. Они удалили годы завихрений и царапин, которые я считал постоянными. Отделка теперь безупречна, а глубина цвета невероятна.",
      rating: 5,
      fallbackImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Эмили Чен",
      car: "Tesla Model S",
      image: "/assets/images/reviews/review4.jpg",
      text: "Я была поражена тем, насколько тщательно команда работала с моей Tesla. Они позаботились о каждой детали, от краски до интерьера. Керамическое покрытие значительно упростило обслуживание, а автомобиль выглядит потрясающе.",
      rating: 4,
      fallbackImage: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Джеймс Уилсон",
      car: "Audi RS7",
      image: "/assets/images/reviews/review5.jpg",
      text: "Уровень обслуживания, предоставляемый Art Detailing, не имеет себе равных. Мой Audi получил королевское обращение, и результаты говорят сами за себя. Защитная пленка уже спасла переднюю часть от сколов камней.",
      rating: 5,
      fallbackImage: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
  ];

  // Function to get image URL with fallback
  const getImageUrl = (localPath: string, fallback: string) => {
    // In a production environment, you would implement proper image existence checking
    // For now, we'll use the fallback URLs to demonstrate the concept
    return fallback;
  };

  return (
    <section id="reviews" className="py-20 bg-darkBg">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-title inline-block">Отзывы Клиентов</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-8">
            Не просто верьте нам на слово. Вот что говорят наши клиенты о наших премиальных услугах детейлинга.
            Мы гордимся тем, что превосходим ожидания и предоставляем результаты, которые говорят сами за себя.
          </p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="review-swiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCard
                name={review.name}
                car={review.car}
                image={getImageUrl(review.image, review.fallbackImage)}
                text={review.text}
                rating={review.rating}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;