import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, A11y } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ArticleCard from './ArticleCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Article {
  title: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  readTime: string;
  category: string;
  slug: string;
}

interface ArticleCarouselProps {
  title: string;
  articles: Article[];
  viewAllLink: string;
  viewAllText?: string;
}

const ArticleCarousel = ({ 
  title, 
  articles, 
  viewAllLink, 
  viewAllText = "View All" 
}: ArticleCarouselProps) => {
  return (
    <section className="mb-16" aria-labelledby={`${title.toLowerCase().replace(/\s+/g, '-')}-heading`}>
      <div className="flex items-center justify-between mb-8">
        <h2 
          id={`${title.toLowerCase().replace(/\s+/g, '-')}-heading`}
          className="text-3xl font-bold text-accent"
        >
          {title}
        </h2>
        <Link to={viewAllLink}>
          <Button variant="accent" className="hover:scale-105 transition-transform duration-300">
            {viewAllText}
          </Button>
        </Link>
      </div>
      
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Keyboard, A11y]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            nextEl: `.swiper-button-next-${title.toLowerCase().replace(/\s+/g, '-')}`,
            prevEl: `.swiper-button-prev-${title.toLowerCase().replace(/\s+/g, '-')}`,
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
          }}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          a11y={{
            prevSlideMessage: 'Previous article',
            nextSlideMessage: 'Next article',
            paginationBulletMessage: 'Go to article {{index}}',
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {articles.map((article, index) => (
            <SwiperSlide key={index}>
              <ArticleCard {...article} />
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Navigation Buttons */}
        <div className={`swiper-button-prev swiper-button-prev-${title.toLowerCase().replace(/\s+/g, '-')}`} 
             aria-label="Previous article"></div>
        <div className={`swiper-button-next swiper-button-next-${title.toLowerCase().replace(/\s+/g, '-')}`}
             aria-label="Next article"></div>
      </div>
    </section>
  );
};

export default ArticleCarousel;