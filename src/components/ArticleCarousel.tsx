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
    <section className="mb-16" aria-labelledby={`${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}-heading`}>
      <div className="relative inline-block w-full text-center mb-8">
        <h2 
          id={`${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}-heading`}
          className="text-5xl md:text-6xl font-display font-bold text-center"
        >
          <span className="relative inline-block text-white drop-shadow-2xl">
            {title}
            {/* Glow effect layers */}
            <span className="absolute inset-0 text-white opacity-60 blur-sm animate-pulse">
              {title}
            </span>
            <span className="absolute inset-0 text-brand opacity-40 blur-md animate-pulse">
              {title}
            </span>
            <span className="absolute inset-0 text-accent opacity-20 blur-lg animate-pulse">
              {title}
            </span>
          </span>
        </h2>
      </div>
      
      {/* Grid layout for Explore Latest Reviews */}
      {title === "Explore Latest Reviews" ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-auto">
          {/* Left side - 2 featured articles stacked */}
          <div className="lg:col-span-1 grid grid-rows-2 gap-1 h-full">
            {articles.slice(0, 2).map((article, index) => (
              <ArticleCard key={index} {...article} isHero={true} />
            ))}
          </div>
          {/* Right side - 4 horizontal rectangles */}
          <div className="lg:col-span-1 grid grid-rows-4 gap-0.5 h-full">
            {articles.slice(2, 6).map((article, index) => (
              <ArticleCard key={index + 2} {...article} isHorizontal={true} />
            ))}
          </div>
        </div>
      ) : (
        /* Swiper for other carousels */
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Keyboard, A11y]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: `.swiper-button-next-${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
              prevEl: `.swiper-button-prev-${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
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
          <div className={`swiper-button-prev swiper-button-prev-${title.toLowerCase().replace(/[^a-z0-9]/g, '-')} !bg-brand !rounded-full !w-12 !h-12 !mt-0 !top-1/2 !-translate-y-1/2 !border-2 !border-white/20 hover:!scale-110 !transition-all !duration-300`} 
               style={{
                 backgroundColor: 'rgb(var(--brand-rgb))',
                 borderRadius: '50%',
                 boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
               }}
               aria-label="Previous article">
            <div className="!text-black !text-lg !font-bold">‹</div>
          </div>
          <div className={`swiper-button-next swiper-button-next-${title.toLowerCase().replace(/[^a-z0-9]/g, '-')} !bg-brand !rounded-full !w-12 !h-12 !mt-0 !top-1/2 !-translate-y-1/2 !border-2 !border-white/20 hover:!scale-110 !transition-all !duration-300`}
               style={{
                 backgroundColor: 'rgb(var(--brand-rgb))',
                 borderRadius: '50%',
                 boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
               }}
               aria-label="Next article">
            <div className="!text-black !text-lg !font-bold">›</div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ArticleCarousel;